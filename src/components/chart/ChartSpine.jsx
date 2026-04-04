import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

// Value range constants
const MIN_VALUE = 8000;
const MAX_VALUE = 270000000000;
const MIN_YEAR  = 2003;
const MAX_YEAR  = 2025;

// Build a deterministic x coordinate from a net-worth value using log scale
function logX(value, minX, maxX) {
  return minX + (maxX - minX) * Math.log(value / MIN_VALUE) / Math.log(MAX_VALUE / MIN_VALUE);
}

// Build a y coordinate from a year using linear scale
function linearY(year, svgHeight) {
  return ((year - MIN_YEAR) / (MAX_YEAR - MIN_YEAR)) * svgHeight;
}

// Generate deterministic intermediate points between two anchor points
// Uses Math.sin for volatility — no Math.random
function interpolateSegment(ptA, ptB, segmentIndex, minX, maxX) {
  const count = 4; // 3 intermediate + endpoints are handled by callers
  const points = [];
  for (let i = 1; i <= count; i++) {
    const t = i / (count + 1);
    const baseX = ptA.x + (ptB.x - ptA.x) * t;
    const baseY = ptA.y + (ptB.y - ptA.y) * t;
    const volatility = (maxX - minX) * 0.08;
    const noise = Math.sin((segmentIndex * 13.7 + i * 1.7)) * volatility * 0.4;
    const x = Math.min(maxX, Math.max(minX, baseX + noise));
    points.push({ x, y: baseY });
  }
  return points;
}

// Build a smooth cubic-bezier path string from an array of {x, y} points
function buildCubicPath(points) {
  if (points.length < 2) return '';
  let d = `M ${points[0].x.toFixed(2)} ${points[0].y.toFixed(2)}`;
  for (let i = 1; i < points.length; i++) {
    const prev = points[i - 1];
    const curr = points[i];
    const cpX = (prev.x + curr.x) / 2;
    d += ` C ${cpX.toFixed(2)} ${prev.y.toFixed(2)}, ${cpX.toFixed(2)} ${curr.y.toFixed(2)}, ${curr.x.toFixed(2)} ${curr.y.toFixed(2)}`;
  }
  return d;
}

// Named milestone labels shown on the chart
const CHART_LABELS = [
  { id: 'call-centre',     label: '₹8K' },
  { id: 'zerodha-founded', label: '₹5Cr' },
  { id: 'forbes-30',       label: '₹800Cr' },
  { id: 'giving-pledge',   label: '₹22,000Cr' },
  { id: 'present',         label: '₹27,000Cr' },
];

export default function ChartSpine() {
  const revealRectRef = useRef(null);

  const [svgHeight,     setSvgHeight]     = useState(0);
  const [svgWidth,      setSvgWidth]      = useState(0);
  const [allPoints,     setAllPoints]     = useState([]);   // full set of {x, y, id?, year?} for every generated point
  const [anchorPoints,  setAnchorPoints]  = useState([]);   // milestone-only anchor points with metadata
  const [pathBefore,    setPathBefore]    = useState('');
  const [pathAfter,     setPathAfter]     = useState('');
  const [areaPath,      setAreaPath]      = useState('');
  const [y2010,         setY2010]         = useState(0);
  const [chessGatePt,   setChessGatePt]   = useState(null);

  useEffect(() => {
    let milestoneData = [];

    const buildChart = (data, height, width) => {
      const isMobile  = width <= 60;
      const paddingX  = isMobile ? 10 : 30;
      const minX      = paddingX;
      const maxX      = width - paddingX;

      // Filter to milestone entries and sort by year
      const anchors = data
        .filter(d => d.milestone === true)
        .sort((a, b) => a.year - b.year);

      // Compute anchor SVG coordinates
      const anchorPts = anchors.map(d => ({
        id:    d.id,
        year:  d.year,
        value: d.value,
        label: d.label,
        x:     logX(d.value, minX, maxX),
        y:     linearY(d.year, height),
      }));

      // Also compute chess-gate point (not a milestone, special rendering)
      const chessEntry = data.find(d => d.id === 'chess-gate');
      const chessPoint = chessEntry ? {
        x: logX(chessEntry.value, minX, maxX) - 12, // leftward dip
        y: linearY(chessEntry.year, height),
      } : null;

      // Build full point list by inserting intermediate points between anchors
      const full = [];
      for (let i = 0; i < anchorPts.length; i++) {
        full.push(anchorPts[i]);
        if (i < anchorPts.length - 1) {
          const intermediates = interpolateSegment(anchorPts[i], anchorPts[i + 1], i, minX, maxX);
          full.push(...intermediates);
        }
      }

      // Split into before-2010 and after-2010 segments
      const computed2010Y = linearY(2010, height);
      const before = full.filter(p => p.y <= computed2010Y);
      const after  = full.filter(p => p.y >= computed2010Y);

      // Ensure continuity: add the 2010 point to before if not already there
      if (before.length > 0 && after.length > 0) {
        const last  = before[before.length - 1];
        const first = after[0];
        if (last !== first) {
          // Insert the exact 2010 anchor as the closing point of before
          const pt2010 = anchorPts.find(p => p.id === 'zerodha-founded');
          if (pt2010 && last.y < pt2010.y) before.push(pt2010);
        }
      }

      const pathB = buildCubicPath(before);
      const pathA = buildCubicPath(after);

      // Area path: left of the post-2010 chartreuse line
      const areaD = after.length > 0
        ? `${buildCubicPath(after)} L 0 ${after[after.length - 1].y.toFixed(2)} L 0 ${after[0].y.toFixed(2)} Z`
        : '';

      setSvgHeight(height);
      setSvgWidth(width);
      setAllPoints(full);
      setAnchorPoints(anchorPts);
      setPathBefore(pathB);
      setPathAfter(pathA);
      setAreaPath(areaD);
      setY2010(computed2010Y);
      setChessGatePt(chessPoint);
    };

    const updateChart = () => {
      const height = window.innerHeight;
      const width  = window.innerWidth < 768 ? 60 : 150;
      if (milestoneData.length > 0) {
        buildChart(milestoneData, height, width);
      }
    };

    fetch('/assets/data/chart-milestones.json')
      .then(r => r.json())
      .then(data => {
        milestoneData = data;
        updateChart();
      })
      .catch((err) => {
        console.error('[ChartSpine] Failed to load milestone data:', err);
      });

    let resizeTimer;
    const handleResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(updateChart, 150);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      clearTimeout(resizeTimer);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // ScrollTrigger: useGSAP pattern — re-runs whenever svgHeight changes
  useGSAP(() => {
    if (!revealRectRef.current || svgHeight === 0) return;
    gsap.fromTo(
      revealRectRef.current,
      { attr: { height: 0 } },
      {
        attr: { height: svgHeight },
        ease: 'none',
        scrollTrigger: {
          trigger: document.body,
          start: 'top top',
          end: 'bottom bottom',
          scrub: 1,
          invalidateOnRefresh: true,
        },
      }
    );
  }, { dependencies: [svgHeight], revertOnUpdate: true });

  const showLabels = svgWidth > 60;

  return (
    <div
      className="fixed left-0 top-0 h-screen z-[60] pointer-events-none transition-all duration-300 w-[60px] md:w-[150px]"
    >
      <svg
        className="absolute inset-0 h-full w-full overflow-visible"
        width={svgWidth}
        height={svgHeight}
      >
        <defs>
          <clipPath id="chart-reveal">
            <rect ref={revealRectRef} x="0" y="0" width="100%" height="0" />
          </clipPath>

          <linearGradient id="areaGradient" x1="1" y1="0" x2="0" y2="0">
            <stop offset="0%"   stopColor="#D4FF00" stopOpacity="0.25" />
            <stop offset="100%" stopColor="#D4FF00" stopOpacity="0.0"  />
          </linearGradient>

          <filter id="neonGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        <g clipPath="url(#chart-reveal)">
          {allPoints.length > 0 && (
            <>
              {/* Area fill — post-2010 only */}
              {areaPath && (
                <path d={areaPath} fill="url(#areaGradient)" />
              )}

              {/* Gray line — before 2010 */}
              {pathBefore && (
                <path
                  d={pathBefore}
                  fill="none"
                  stroke="#6B7280"
                  strokeWidth="2"
                  vectorEffect="non-scaling-stroke"
                />
              )}

              {/* Chartreuse line — after 2010 */}
              {pathAfter && (
                <path
                  d={pathAfter}
                  fill="none"
                  stroke="#D4FF00"
                  strokeWidth="2"
                  vectorEffect="non-scaling-stroke"
                  filter="url(#neonGlow)"
                />
              )}

              {/* Controversy dip marker — chess-gate 2021 */}
              {chessGatePt && (
                <g>
                  <circle
                    cx={chessGatePt.x}
                    cy={chessGatePt.y}
                    r="4"
                    fill="#EB5757"
                  />
                  {showLabels && (
                    <text
                      x={chessGatePt.x + 8}
                      y={chessGatePt.y + 3}
                      fill="#EB5757"
                      fontSize="9px"
                      fontFamily="monospace"
                      fontWeight="600"
                      letterSpacing="0.05em"
                    >
                      2021 · The Anomaly
                    </text>
                  )}
                </g>
              )}

              {/* Milestone circles and labels */}
              {CHART_LABELS.map((cfg, idx) => {
                const pt = anchorPoints.find(p => p.id === cfg.id);
                if (!pt) return null;
                const isAfter2010 = pt.y >= y2010;
                const circleColor = isAfter2010 ? '#D4FF00' : '#9CA3AF';
                return (
                  <g key={idx}>
                    <line
                      x1="0"
                      y1={pt.y}
                      x2={pt.x}
                      y2={pt.y}
                      stroke="rgba(255,255,255,0.15)"
                      strokeWidth="1"
                      strokeDasharray="3 3"
                    />
                    <circle
                      cx={pt.x}
                      cy={pt.y}
                      r="3.5"
                      fill={circleColor}
                      filter={isAfter2010 ? 'url(#neonGlow)' : undefined}
                    />
                    {showLabels && (
                      <text
                        x={pt.x + 8}
                        y={pt.y + 3}
                        fill="rgba(255, 255, 255, 0.7)"
                        fontSize="9px"
                        fontFamily="monospace"
                        fontWeight="600"
                        letterSpacing="0.05em"
                        className="uppercase"
                      >
                        {cfg.label}
                      </text>
                    )}
                  </g>
                );
              })}
            </>
          )}
        </g>
      </svg>
    </div>
  );
}
