import React, { useEffect, useRef, useState } from 'react';
import * as d3 from 'd3';

const nodesData = [
  { id: "Nikhil Kamath", group: "center", radius: 40, color: "#D4FF00", role: "Founder/Investor", fx: 0, fy: 0 },
  // Inner orbit
  { id: "Zerodha", group: "fintech", radius: 30, color: "#3B82F6", role: "Co-founder" },
  { id: "True Beacon", group: "fintech", radius: 30, color: "#3B82F6", role: "Co-founder" },
  { id: "Gruhas", group: "vc", radius: 30, color: "#6366F1", role: "Co-founder" },
  { id: "WTFund", group: "vc", radius: 30, color: "#6366F1", role: "Founder" },
  { id: "Zero1", group: "vc", radius: 30, color: "#6366F1" },
  { id: "NKSquared", group: "fintech", radius: 30, color: "#3B82F6" },
  // Outer orbit
  { id: "Ather Energy", group: "cleantech", radius: 15, color: "#10B981" },
  { id: "Nazara Technologies", group: "consumer", radius: 15, color: "#F59E0B" },
  { id: "Licious", group: "consumer", radius: 15, color: "#F59E0B" },
  { id: "Nothing", group: "deeptech", radius: 15, color: "#8B5CF6" },
  { id: "D'yavol Spirits", group: "consumer", radius: 15, color: "#F59E0B" },
  { id: "SolarSquare", group: "cleantech", radius: 15, color: "#10B981" },
  { id: "Rare Rabbit", group: "consumer", radius: 15, color: "#F59E0B" },
  { id: "Strata", group: "proptech", radius: 15, color: "#06B6D4" },
  { id: "Third Wave Coffee", group: "consumer", radius: 15, color: "#F59E0B" },
  { id: "Subko Coffee", group: "consumer", radius: 15, color: "#F59E0B" },
  { id: "Pee Safe", group: "consumer", radius: 15, color: "#F59E0B" },
  { id: "InCred", group: "fintech", radius: 15, color: "#3B82F6" },
  { id: "BlueStone", group: "consumer", radius: 15, color: "#F59E0B" },
  { id: "Infra.Market", group: "proptech", radius: 15, color: "#06B6D4" }
];

const linksData = [
  { source: "Nikhil Kamath", target: "Zerodha" },
  { source: "Nikhil Kamath", target: "True Beacon" },
  { source: "Nikhil Kamath", target: "Gruhas" },
  { source: "Nikhil Kamath", target: "WTFund" },
  { source: "Nikhil Kamath", target: "Zero1" },
  { source: "Nikhil Kamath", target: "NKSquared" },
  // Gruhas portfolio
  { source: "Gruhas", target: "Nothing" },
  { source: "Gruhas", target: "Rare Rabbit" },
  { source: "Gruhas", target: "SolarSquare" },
  { source: "Gruhas", target: "Ather Energy" },
  { source: "Gruhas", target: "Licious" },
  { source: "Gruhas", target: "Strata" },
  { source: "Gruhas", target: "Infra.Market" },
  // NKSquared portfolio
  { source: "NKSquared", target: "Nazara Technologies" },
  // Direct/Other
  { source: "Nikhil Kamath", target: "D'yavol Spirits" },
  { source: "Nikhil Kamath", target: "Third Wave Coffee" },
  { source: "Nikhil Kamath", target: "Subko Coffee" },
  { source: "Nikhil Kamath", target: "Pee Safe" },
  { source: "Nikhil Kamath", target: "InCred" },
  { source: "Nikhil Kamath", target: "BlueStone" }
];

export default function StartupConstellation() {
  const svgRef = useRef(null);
  const wrapperRef = useRef(null);
  const [tooltip, setTooltip] = useState({ visible: false, x: 0, y: 0, data: null });
  const [filter, setFilter] = useState('All');

  useEffect(() => {
    if (!svgRef.current || !wrapperRef.current) return;

    const width = wrapperRef.current.clientWidth;
    const height = wrapperRef.current.clientHeight;

    const svg = d3.select(svgRef.current)
      .attr("viewBox", [-width / 2, -height / 2, width, height]);
    
    svg.selectAll("*").remove();

    const filteredNodes = nodesData.filter(n => filter === 'All' || n.group === filter || n.id === "Nikhil Kamath" || ["Zerodha", "Gruhas", "WTFund", "True Beacon"].includes(n.id));
    const nodeIds = new Set(filteredNodes.map(d => d.id));
    const filteredLinks = linksData.filter(l => nodeIds.has(l.source) && nodeIds.has(l.target));

    const simulation = d3.forceSimulation(filteredNodes)
      .force("link", d3.forceLink(filteredLinks).id(d => d.id).distance(d => d.source.id === "Nikhil Kamath" ? 120 : 80))
      .force("charge", d3.forceManyBody().strength(-300))
      .force("collide", d3.forceCollide().radius(d => d.radius + 10))
      .force("x", d3.forceX())
      .force("y", d3.forceY());

    const link = svg.append("g")
      .attr("stroke", "rgba(255,255,255,0.1)")
      .selectAll("line")
      .data(filteredLinks)
      .join("line")
      .attr("stroke-width", 1);

    const node = svg.append("g")
      .selectAll("circle")
      .data(filteredNodes)
      .join("circle")
      .attr("r", d => d.radius)
      .attr("fill", d => d.color)
      .attr("stroke", "#1A1F2E")
      .attr("stroke-width", 2)
      .attr("cursor", "pointer")
      .on("mouseover", (event, d) => {
        d3.select(event.currentTarget).attr("stroke", "#fff").attr("stroke-width", 3);
        setTooltip({
          visible: true,
          x: event.pageX,
          y: event.pageY,
          data: d
        });
      })
      .on("mouseout", (event) => {
        d3.select(event.currentTarget).attr("stroke", "#1A1F2E").attr("stroke-width", 2);
        setTooltip({ visible: false, x: 0, y: 0, data: null });
      });

    const label = svg.append("g")
      .attr("class", "labels")
      .selectAll("text")
      .data(filteredNodes)
      .join("text")
      .attr("dy", d => d.radius + 15)
      .attr("text-anchor", "middle")
      .text(d => d.id)
      .attr("font-family", "Satoshi")
      .attr("font-size", d => d.radius > 20 ? "12px" : "10px")
      .attr("fill", "#9CA3AF")
      .attr("pointer-events", "none");

    simulation.on("tick", () => {
      link
        .attr("x1", d => d.source.x)
        .attr("y1", d => d.source.y)
        .attr("x2", d => d.target.x)
        .attr("y2", d => d.target.y);

      node
        .attr("cx", d => d.x)
        .attr("cy", d => d.y);
        
      label
        .attr("x", d => d.x)
        .attr("y", d => d.y);
    });

    return () => simulation.stop();

  }, [filter]);

  const categories = ['All', 'fintech', 'cleantech', 'consumer', 'deeptech', 'vc'];

  return (
    <div className="w-full relative h-[600px] border border-white/5 rounded-2xl bg-surface-bg/30">
      <div className="absolute top-6 left-6 z-10 flex flex-wrap gap-2">
        {categories.map(c => (
          <button 
            key={c}
            onClick={() => setFilter(c)}
            className={`px-3 py-1 rounded-full text-xs font-mono uppercase transition-colors ${filter === c ? 'bg-primary-text text-primary-bg' : 'border border-white/20 text-secondary-text hover:text-primary-text'}`}
          >
            {c}
          </button>
        ))}
      </div>
      
      <div ref={wrapperRef} className="w-full h-full overflow-hidden">
        <svg ref={svgRef} className="w-full h-full" />
      </div>

      {tooltip.visible && tooltip.data && (
        <div 
          className="fixed z-50 bg-black/80 backdrop-blur-md border border-white/10 p-4 rounded-lg pointer-events-none transform -translate-x-1/2 -translate-y-full mt-[-10px]"
          style={{ left: tooltip.x, top: tooltip.y }}
        >
          <h4 className="text-primary-text font-clash text-lg mb-1">{tooltip.data.id}</h4>
          <span className="text-xs uppercase tracking-widest text-[#D4FF00] font-mono">{tooltip.data.group}</span>
          {tooltip.data.role && <p className="text-secondary-text text-sm mt-2">{tooltip.data.role}</p>}
        </div>
      )}
    </div>
  );
}
