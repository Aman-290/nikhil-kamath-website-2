import React, { useMemo, useState, useEffect, useRef } from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Cell } from 'recharts';

export default function ChessAccuracyChart() {
  const chartRef = useRef(null);
  const [chartSize, setChartSize] = useState({ width: 0, height: 0 });

  const fallbackData = useMemo(
    () => [
      { name: 'Game 1', accuracy: 6.2, type: 'normal' },
      { name: 'Game 2', accuracy: 10.9, type: 'normal' },
      { name: 'Game 3', accuracy: 0.6, type: 'normal' },
      { name: 'Average Club Player', accuracy: 72, type: 'baseline' },
      { name: 'vs Viswanathan Anand', accuracy: 98.9, type: 'anomaly' },
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

  useEffect(() => {
    if (!chartRef.current) return undefined;

    const updateSize = () => {
      if (!chartRef.current) return;
      const rect = chartRef.current.getBoundingClientRect();
      const width = Math.max(0, Math.floor(rect.width));
      const height = Math.max(0, Math.floor(rect.height));
      setChartSize({ width, height });
    };

    updateSize();

    const observer = new ResizeObserver(() => updateSize());
    observer.observe(chartRef.current);

    window.addEventListener('resize', updateSize);

    return () => {
      observer.disconnect();
      window.removeEventListener('resize', updateSize);
    };
  }, []);

  const chartData = data.length > 0 ? data : fallbackData;
  const canRenderChart = chartSize.width > 0 && chartSize.height > 0;

  return (
    <div className="w-full min-w-0 min-h-[22rem] pt-4">
      <h4 className="text-primary-text font-satoshi text-center mb-6">Nikhil Kamath's Chess Accuracy — Selected Games</h4>
      <div ref={chartRef} className="w-full min-w-0 h-[17.5rem]">
        {canRenderChart ? (
          <BarChart
            width={chartSize.width}
            height={chartSize.height}
            data={chartData}
            margin={{ top: 20, right: 12, left: 0, bottom: 8 }}
          >
            <XAxis
              dataKey="name"
              stroke="#9CA3AF"
              tick={{ fill: '#9CA3AF', fontSize: 12, fontFamily: 'Satoshi' }}
              tickLine={false}
              axisLine={false}
            />
            <YAxis hide domain={[0, 100]} />
            <Tooltip
              cursor={{ fill: 'rgba(255,255,255,0.05)' }}
              contentStyle={{ backgroundColor: '#1A1F2E', border: 'none', borderRadius: '4px', color: '#fff' }}
            />
            <Bar dataKey="accuracy" radius={[4, 4, 0, 0]} maxBarSize={60}>
              {chartData.map((entry, index) => {
                let fill = '#4B5563'; // muted tertiary
                const name = entry?.name || '';
                if (entry?.type === 'anomaly' || name.includes('Anand')) fill = '#D4FF00';
                else if (entry?.type === 'baseline' || name.includes('Average')) fill = '#9CA3AF';

                return <Cell key={`cell-${index}`} fill={fill} />;
              })}
            </Bar>
          </BarChart>
        ) : (
          <div className="w-full h-full flex items-center justify-center text-secondary-text font-mono text-xs">
            Loading chart...
          </div>
        )}
      </div>
      <div className="text-center mt-4">
        <span className="text-xs text-secondary-text font-mono">The bar that got him banned from Chess.com.</span>
      </div>
    </div>
  );
}
