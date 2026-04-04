import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const MILESTONES = [
  { index: 5, label: '₹8K' },
  { index: 25, label: '₹10 CR' },
  { index: 50, label: '₹500 CR' },
  { index: 75, label: '₹5K CR' },
  { index: 95, label: '₹27,000 CR' }
];

export default function ChartSpine() {
  const containerRef = useRef(null);
  const revealRectRef = useRef(null);
  const [chartData, setChartData] = useState([]);
  const [svgHeight, setSvgHeight] = useState(0);
  const [svgWidth, setSvgWidth] = useState(0);

  useEffect(() => {
    let ctx = gsap.context(() => {});

    const updateChart = () => {
      const height = window.innerHeight;
      const width = window.innerWidth < 768 ? 60 : 150;
      setSvgHeight(height);
      setSvgWidth(width);
      
      const numPoints = 100;
      const data = [];
      const paddingX = window.innerWidth < 768 ? 10 : 30;
      const minX = paddingX;
      const maxX = width - paddingX;
      
      let currentX = minX + (maxX - minX) * 0.05; 
      
      for (let i = 0; i <= numPoints; i++) {
        const y = (height / numPoints) * i;
        const progress = i / numPoints;
        
        // Target x moves exponentially to the right
        const targetX = minX + (maxX - minX) * Math.pow(progress, 1.5);
        
        // Add random volatility for jagged look
        const volatility = (maxX - minX) * 0.15;
        let change = (Math.random() - 0.5) * volatility;
        
        currentX += change;
        currentX += (targetX - currentX) * 0.3; // pull towards target
        
        if (currentX < minX) currentX = minX;
        if (currentX > maxX) currentX = maxX;
        
        data.push({ x: currentX, y });
      }
      
      setChartData(data);

      ctx.add(() => {
        gsap.fromTo(revealRectRef.current,
          { attr: { height: 0 } },
          {
            attr: { height: height },
            ease: 'none',
            scrollTrigger: {
              trigger: document.body,
              start: 'top top',
              end: 'bottom bottom',
              scrub: 1,
              invalidateOnRefresh: true,
            }
          }
        );
      });
    };

    updateChart();
    window.addEventListener('resize', updateChart);
    
    return () => {
      window.removeEventListener('resize', updateChart);
      ctx.revert();
    };
  }, []);

  const linePath = chartData.length > 0 
    ? chartData.map((d, i) => `${i === 0 ? 'M' : 'L'} ${d.x} ${d.y}`).join(' ') 
    : '';
    
  // Area path goes from top-left, traces the line, then to bottom-left
  const areaPath = chartData.length > 0 
    ? `M 0 0 L ${chartData[0].x} 0 ${chartData.map(d => `L ${d.x} ${d.y}`).join(' ')} L 0 ${chartData[chartData.length - 1].y} Z` 
    : '';

  return (
    <div 
      ref={containerRef}
      className="fixed left-0 top-0 h-screen z-[60] pointer-events-none transition-all duration-300 w-[60px] md:w-[150px]"
    >
      <svg className="absolute inset-0 h-full w-full overflow-visible" width={svgWidth} height={svgHeight}>
        <defs>
          <clipPath id="chart-reveal">
            <rect ref={revealRectRef} x="0" y="0" width="100%" height="0" />
          </clipPath>
          
          <linearGradient id="areaGradient" x1="1" y1="0" x2="0" y2="0">
            <stop offset="0%" stopColor="#D4FF00" stopOpacity="0.25" />
            <stop offset="100%" stopColor="#D4FF00" stopOpacity="0.0" />
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
          {chartData.length > 0 && (
            <>
              {/* Area Fill */}
              <path
                d={areaPath}
                fill="url(#areaGradient)"
              />

              {/* Jagged Line */}
              <path
                d={linePath}
                fill="none"
                stroke="#D4FF00"
                strokeWidth="2"
                vectorEffect="non-scaling-stroke"
                filter="url(#neonGlow)"
              />

              {/* Milestones */}
              {MILESTONES.map((milestone, idx) => {
                if (!chartData[milestone.index]) return null;
                const pt = chartData[milestone.index];
                
                return (
                  <g key={idx}>
                    {/* Horizontal Dashed Line to to the point */}
                    <line 
                      x1="0" 
                      y1={pt.y} 
                      x2={pt.x} 
                      y2={pt.y} 
                      stroke="rgba(255,255,255,0.15)" 
                      strokeWidth="1" 
                      strokeDasharray="3 3"
                    />
                    
                    {/* Glowing Circle */}
                    <circle 
                      cx={pt.x} 
                      cy={pt.y} 
                      r="3.5" 
                      fill="#D4FF00" 
                      filter="url(#neonGlow)" 
                    />
                    
                    {/* Data Label */}
                    <text 
                      x={pt.x + 8} 
                      y={pt.y + 3} 
                      fill="rgba(255, 255, 255, 0.7)" 
                      fontSize="9px" 
                      fontFamily="monospace"
                      fontWeight="600"
                      letterSpacing="0.05em"
                      className="uppercase md:block hidden"
                    >
                      {milestone.label}
                    </text>
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
