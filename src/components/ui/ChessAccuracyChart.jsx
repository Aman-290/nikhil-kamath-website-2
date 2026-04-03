import React, { useMemo, useState, useEffect, useRef } from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Cell, ResponsiveContainer } from 'recharts';

export default function ChessAccuracyChart() {
  const fallbackData = useMemo(
    () => [
      { name: 'Last 30 Avg', accuracy: 5.5, type: 'normal' },
      { name: 'Club Avg', accuracy: 72, type: 'baseline' },
      { name: 'vs Anand', accuracy: 98.9, type: 'anomaly' },
    ],
    []
  );

  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('/assets/data/chess-accuracy.json')
      .then(res => res.json())
      .then((fetched) => {
        if (!Array.isArray(fetched)) {
          setData(fallbackData);
          return;
        }

        const normalized = fetched
          .map((entry, index) => {
            const safeName = entry?.name || entry?.label || `Game ${index + 1}`;
            const safeAccuracy = Number(entry?.accuracy);

            return {
              name: safeName,
              accuracy: Number.isFinite(safeAccuracy) ? safeAccuracy : 0,
              type: entry?.type || 'normal',
            };
          })
          .filter((entry) => entry.name);

        setData(normalized.length > 0 ? normalized : fallbackData);
      })
      .catch(err => {
        console.error("Could not load chess data", err);
        setData(fallbackData);
      });
  }, [fallbackData]);

  const chartData = data.length > 0 ? data : fallbackData;

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-[#050505] border border-white/10 p-4 rounded-xl shadow-2xl">
          <p className="text-white/60 text-xs font-mono uppercase tracking-widest mb-1">{label}</p>
          <p className="text-white font-clash text-2xl">{`${payload[0].value}%`}</p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="w-full h-[250px] relative mt-8" style={{ minWidth: 0, minHeight: 0 }}>
      <ResponsiveContainer width="99%" height="100%" minWidth={0} minHeight={0}>
        <BarChart
          data={chartData}
          margin={{ top: 20, right: 0, left: 0, bottom: 20 }}
        >
          <XAxis
            dataKey="name"
            stroke="#9CA3AF"
            tick={{ fill: 'rgba(255,255,255,0.4)', fontSize: 11, fontFamily: 'monospace', letterSpacing: '0.1em' }}
            tickLine={false}
            axisLine={false}
            dy={15}
          />
          <YAxis hide domain={[0, 100]} />
          <Tooltip cursor={{ fill: 'rgba(255,255,255,0.02)' }} content={<CustomTooltip />} />
          <Bar dataKey="accuracy" radius={[6, 6, 0, 0]} maxBarSize={80}>
            {chartData.map((entry, index) => {
              let fill = 'rgba(255,255,255,0.1)';
              const name = entry?.name || '';
              if (entry?.type === 'anomaly' || name.includes('Anand')) fill = '#FF4444'; // Red for the scandal
              else if (entry?.type === 'baseline' || name.includes('Average') || name.includes('Club')) fill = 'rgba(255,255,255,0.3)';

              return <Cell key={`cell-${index}`} fill={fill} className="transition-all duration-300 hover:brightness-125" />;
            })}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
