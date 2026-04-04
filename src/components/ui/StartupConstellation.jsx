import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import * as d3 from 'd3';

const nodesData = [
  { id: "Nikhil Kamath", group: "center", radius: 50, color: "white", role: "Ecosystem Builder", desc: "The center of gravity", fx: 0, fy: 0 },
  
  // Inner orbit (Core pillars)
  { id: "Zerodha", group: "fintech", radius: 35, color: "#FFFFFF", role: "Co-founder", desc: "India's largest retail brokerage" },
  { id: "True Beacon", group: "fintech", radius: 35, color: "#FFFFFF", role: "Co-founder", desc: "Alternative investment fund" },
  { id: "Gruhas", group: "vc", radius: 35, color: "#FFFFFF", role: "Co-founder", desc: "Proptech & Consumer VC" },
  { id: "WTFund", group: "vc", radius: 35, color: "#FFFFFF", role: "Founder", desc: "For young entrepreneurs" },
  { id: "Zero1", group: "vc", radius: 35, color: "#FFFFFF", desc: "Strategic investments" },
  { id: "NKSquared", group: "fintech", radius: 35, color: "#FFFFFF", desc: "Family Office" },
  
  // Outer orbit (Portfolio)
  { id: "Ather Energy", group: "cleantech", radius: 20, color: "#10B981", desc: "Smart electric scooters" },
  { id: "Nazara", group: "consumer", radius: 20, color: "#F59E0B", desc: "Gaming & Sports Media" },
  { id: "Licious", group: "consumer", radius: 20, color: "#F59E0B", desc: "D2C Meat & Seafood" },
  { id: "Nothing", group: "deeptech", radius: 20, color: "#8B5CF6", desc: "Consumer electronics" },
  { id: "D'yavol", group: "consumer", radius: 20, color: "#F59E0B", desc: "Luxury lifestyle" },
  { id: "SolarSquare", group: "cleantech", radius: 20, color: "#10B981", desc: "Rooftop solar" },
  { id: "Rare Rabbit", group: "consumer", radius: 20, color: "#F59E0B", desc: "D2C Fashion apparel" },
  { id: "Strata", group: "proptech", radius: 20, color: "#06B6D4", desc: "Commercial Real Estate" },
  { id: "Third Wave", group: "consumer", radius: 20, color: "#F59E0B", desc: "Specialty coffee" },
  { id: "Subko", group: "consumer", radius: 20, color: "#F59E0B", desc: "Craft coffee & bakehouse" },
  { id: "Pee Safe", group: "consumer", radius: 20, color: "#F59E0B", desc: "Personal hygiene" },
  { id: "InCred", group: "fintech", radius: 20, color: "#3B82F6", desc: "Financial services" },
  { id: "BlueStone", group: "consumer", radius: 20, color: "#F59E0B", desc: "Omnichannel jewelry" },
  { id: "Infra.Market", group: "proptech", radius: 20, color: "#06B6D4", desc: "Construction materials" }
];

const linksData = [
  // Core connections
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
  
  // NKSquared/Zero1
  { source: "NKSquared", target: "Nazara" },
  
  // Direct/Other
  { source: "Nikhil Kamath", target: "D'yavol" },
  { source: "Nikhil Kamath", target: "Third Wave" },
  { source: "Nikhil Kamath", target: "Subko" },
  { source: "Nikhil Kamath", target: "Pee Safe" },
  { source: "Nikhil Kamath", target: "InCred" },
  { source: "Nikhil Kamath", target: "BlueStone" }
];

export default function StartupConstellation() {
  const svgRef = useRef(null);
  const wrapperRef = useRef(null);
  const [tooltip, setTooltip] = useState({ visible: false, x: 0, y: 0, data: null });
  const [activeFilter, setActiveFilter] = useState('All');
  const [isSimulationReady, setSimulationReady] = useState(false);

  useEffect(() => {
    if (!svgRef.current || !wrapperRef.current) return;

    // We do a fresh clone of data so D3 doesn't mutate our original constants forever
    const currentNodesData = JSON.parse(JSON.stringify(nodesData));
    const currentLinksData = JSON.parse(JSON.stringify(linksData));

    const width = wrapperRef.current.clientWidth;
    const height = wrapperRef.current.clientHeight;

    const svg = d3.select(svgRef.current)
      .attr("viewBox", [-width / 2, -height / 2, width, height]);
    
    // Clear previous
    svg.selectAll("*").remove();

    // Definitions for glows/filters
    const defs = svg.append("defs");
    const filter = defs.append("filter")
      .attr("id", "glow")
      .attr("x", "-50%")
      .attr("y", "-50%")
      .attr("width", "200%")
      .attr("height", "200%");
      
    filter.append("feGaussianBlur")
      .attr("stdDeviation", "5")
      .attr("result", "coloredBlur");
      
    const feMerge = filter.append("feMerge");
    feMerge.append("feMergeNode").attr("in", "coloredBlur");
    feMerge.append("feMergeNode").attr("in", "SourceGraphic");

    // Filter logic
    const alwaysVisible = ["Nikhil Kamath", "Zerodha", "Gruhas", "WTFund", "True Beacon"];
    const filteredNodes = currentNodesData.filter(n => 
      activeFilter === 'All' || 
      n.group === activeFilter || 
      alwaysVisible.includes(n.id)
    );
    const nodeIds = new Set(filteredNodes.map(d => d.id));
    const filteredLinks = currentLinksData.filter(l => nodeIds.has(l.source) && nodeIds.has(l.target));

    const simulation = d3.forceSimulation(filteredNodes)
      .force("link", d3.forceLink(filteredLinks).id(d => d.id).distance(d => d.source.id === "Nikhil Kamath" ? 150 : 100))
      .force("charge", d3.forceManyBody().strength(d => d.id === "Nikhil Kamath" ? -800 : -400))
      .force("collide", d3.forceCollide().radius(d => d.radius + 15).iterations(2))
      .force("x", d3.forceX().strength(0.05))
      .force("y", d3.forceY().strength(0.05));

    // Links
    const link = svg.append("g")
      .attr("class", "links")
      .selectAll("line")
      .data(filteredLinks)
      .join("line")
      .attr("stroke", "rgba(255,255,255,0.08)")
      .attr("stroke-width", 1.5);

    // Node groups
    const nodeGroup = svg.append("g")
      .attr("class", "nodes")
      .selectAll("g")
      .data(filteredNodes)
      .join("g")
      .attr("cursor", "crosshair");

    // Halos / Outer Rings
    nodeGroup.append("circle")
      .attr("r", d => d.radius + 8)
      .attr("fill", "transparent")
      .attr("stroke", d => d.color)
      .attr("stroke-width", 1)
      .attr("stroke-opacity", 0)
      .attr("class", "node-halo")
      .style("transition", "all 0.3s ease");

    // Main Node Circles
    const node = nodeGroup.append("circle")
      .attr("class", "node-core")
      .attr("r", d => d.radius)
      .attr("fill", "#050505")
      .attr("stroke", d => d.color)
      .attr("stroke-width", d => d.id === "Nikhil Kamath" ? 3 : 2)
      .style("filter", d => d.id === "Nikhil Kamath" ? "url(#glow)" : "none");

    // Labels
    const label = svg.append("g")
      .attr("class", "labels")
      .selectAll("text")
      .data(filteredNodes)
      .join("text")
      .attr("dy", d => d.radius + 20)
      .attr("text-anchor", "middle")
      .text(d => d.id)
      .attr("font-family", "system-ui, -apple-system, sans-serif")
      .attr("font-size", d => d.id === "Nikhil Kamath" ? "14px" : "11px")
      .attr("font-weight", d => d.id === "Nikhil Kamath" ? "600" : "400")
      .attr("fill", d => d.id === "Nikhil Kamath" ? "white" : "#9CA3AF")
      .attr("letter-spacing", "0.5px")
      .attr("pointer-events", "none");

    // Interaction events attached to the group
    nodeGroup
      .on("mouseenter", (event, d) => {
        // Highlight active node
        d3.select(event.currentTarget).select(".node-halo")
          .attr("stroke-opacity", 0.4)
          .attr("stroke-width", 2)
          .style("filter", "url(#glow)");
          
        d3.select(event.currentTarget).select(".node-core")
          .attr("fill", d.color);

        // Highlight connected links
        const connectedNodes = new Set([d.id]);
        link.attr("stroke", l => {
          if (l.source.id === d.id || l.target.id === d.id) {
            connectedNodes.add(l.source.id);
            connectedNodes.add(l.target.id);
            return d.color;
          }
          return "rgba(255,255,255,0.02)"; // fade others
        }).attr("stroke-width", l => (l.source.id === d.id || l.target.id === d.id) ? 2 : 1);

        // Fade un-connected nodes & labels
        nodeGroup.attr("opacity", n => connectedNodes.has(n.id) ? 1 : 0.2);
        label.attr("opacity", n => connectedNodes.has(n.id) ? 1 : 0.2);

        // Find position relative to the wrapper
        const wrapperRect = wrapperRef.current.getBoundingClientRect();
        const svgPoint = svgRef.current.createSVGPoint();
        svgPoint.x = event.clientX;
        svgPoint.y = event.clientY;
        const cursorPoint = svgPoint.matrixTransform(svgRef.current.getScreenCTM().inverse());
        
        // Calculate tooltip position (center offset + node offset + half wrapper)
        const tipX = (width / 2) + d.x;
        const tipY = (height / 2) + d.y - d.radius - 20;

        setTooltip({
          visible: true,
          x: tipX,
          y: tipY,
          data: d
        });
      })
      .on("mouseleave", (event, d) => {
        // Reset node appearance
        d3.select(event.currentTarget).select(".node-halo")
          .attr("stroke-opacity", 0)
          .attr("stroke-width", 1)
          .style("filter", "none");
          
        d3.select(event.currentTarget).select(".node-core")
          .attr("fill", "#050505");

        // Reset all opacities
        nodeGroup.attr("opacity", 1);
        label.attr("opacity", 1);
        link.attr("stroke", "rgba(255,255,255,0.08)").attr("stroke-width", 1.5);
        
        setTooltip({ visible: false, x: 0, y: 0, data: null });
      });

    // Drag behavior
    const drag = d3.drag()
      .on("start", (event, d) => {
        if (!event.active) simulation.alphaTarget(0.3).restart();
        d.fx = d.x;
        d.fy = d.y;
      })
      .on("drag", (event, d) => {
        d.fx = event.x;
        d.fy = event.y;
      })
      .on("end", (event, d) => {
        if (!event.active) simulation.alphaTarget(0);
        // Keep Nikhil fixed
        if (d.id !== "Nikhil Kamath") {
          d.fx = null;
          d.fy = null;
        }
      });

    nodeGroup.call(drag);

    simulation.on("tick", () => {
      link
        .attr("x1", d => d.source.x)
        .attr("y1", d => d.source.y)
        .attr("x2", d => d.target.x)
        .attr("y2", d => d.target.y);

      nodeGroup.attr("transform", d => `translate(${d.x},${d.y})`);
      label.attr("x", d => d.x).attr("y", d => d.y);
    });

    simulation.on("end", () => setSimulationReady(true));

    return () => {
      simulation.stop();
    };

  }, [activeFilter]);

  const categories = [
    { id: 'All', label: 'Complete Ecosystem' },
    { id: 'fintech', label: 'Fintech & Finance' },
    { id: 'consumer', label: 'Consumer & D2C' },
    { id: 'cleantech', label: 'Clean Tech' },
    { id: 'vc', label: 'Funds & Ventures' }
  ];

  return (
    <div className="w-full relative h-[700px] bg-black border border-white/5 rounded-[2rem] overflow-hidden group">
      {/* Background ambient glow setup */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/[0.02] to-transparent pointer-events-none" />
      <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-white opacity-[0.03] blur-[120px] rounded-full mix-blend-screen pointer-events-none" />

      {/* Filter controls */}
      <div className="absolute top-6 left-6 right-6 flex flex-wrap items-center justify-between gap-4 z-10 pointer-events-auto">
        <h3 className="text-white/60 text-sm tracking-widest uppercase font-medium ml-2">Mapping the Orbit</h3>
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveFilter(cat.id)}
              className={`px-4 py-2 rounded-full text-xs font-medium transition-all duration-300 backdrop-blur-md ${
                activeFilter === cat.id
                  ? 'bg-white text-black shadow-md shadow-white/5'
                  : 'bg-white/5 text-white/60 hover:bg-white/10 hover:text-white border border-white/5'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      <div ref={wrapperRef} className="w-full h-full relative" id="constellation-wrapper">
        <svg 
          ref={svgRef} 
          className="w-full h-full"
          style={{ willChange: "transform" }}
        />

        {/* Custom React Tooltip overlaying the SVG */}
        <AnimatePresence>
          {tooltip.visible && tooltip.data && (
            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.15, ease: "easeOut" }}
              className="absolute pointer-events-none z-50 origin-bottom"
              style={{
                left: tooltip.x,
                top: tooltip.y,
                transform: 'translate(-50%, -100%)' // Center horizontally above cursor
              }}
            >
              <div className="bg-black/90 backdrop-blur-xl border border-white/10 p-5 rounded-2xl shadow-2xl min-w-[200px]">
                <div className="flex items-center gap-3 mb-2">
                  <div 
                    className="w-3 h-3 rounded-full shadow-lg"
                    style={{ 
                      backgroundColor: tooltip.data.color,
                      boxShadow: `0 0 10px ${tooltip.data.color}`
                    }}
                  />
                  <h4 className="text-white font-bold text-lg tracking-tight">
                    {tooltip.data.id}
                  </h4>
                </div>
                
                {tooltip.data.role && (
                  <div className="inline-block mt-1 px-2.5 py-1 mb-3 rounded border border-white/10 bg-white/5 text-[10px] uppercase tracking-widest text-white font-medium">
                    {tooltip.data.role}
                  </div>
                )}
                
                {tooltip.data.desc && (
                  <p className="text-white/60 text-sm leading-relaxed max-w-[220px]">
                    {tooltip.data.desc}
                  </p>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Decorative corners */}
      <div className="absolute bottom-6 left-6 text-[10px] text-white/30 uppercase tracking-widest font-mono">
        SYS.NODE.NETWORK.V2
      </div>
      <div className="absolute bottom-6 right-6 flex items-center gap-2">
        <div className="w-2 h-2 rounded-full bg-white animate-pulse" />
        <span className="text-[10px] text-white uppercase tracking-widest font-mono">Live Sync</span>
      </div>
    </div>
  );
}
