import React from 'react';
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer, Legend } from 'recharts';

const COLORS = ['#10B981', '#EF4444']; // Green for wins, Red for losses

const WinRateChart = ({ winCount, lossCount }) => {
  const total = winCount + lossCount;
  const data = [
    { name: 'Winning Trades', value: winCount, percentage: (winCount / total) * 100 },
    { name: 'Losing Trades', value: lossCount, percentage: (lossCount / total) * 100 },
  ];

  return (
    <div className="relative bg-white/90 backdrop-blur-md p-6 rounded-2xl shadow-md border border-gray-200 
                    transition hover:shadow-xl hover:scale-[1.02] flex flex-col h-96">
      
      {/* Accent bar */}
      <div className="absolute top-0 left-0 w-full h-1 rounded-t-2xl bg-gradient-to-r from-green-400 via-yellow-400 to-red-400"></div>
      
      <h3 className="text-lg font-bold text-gray-800 mb-4 text-center">📈 Trade Outcome Ratio</h3>
      
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={65}
            outerRadius={90}
            paddingAngle={3}
            dataKey="value"
            isAnimationActive={true}
            animationDuration={1200}
            label={({ name, percentage }) => `${percentage.toFixed(1)}%`}
            labelStyle={{ fontSize: '12px', fill: '#374151' }}
          >
            {data.map((entry, index) => (
              <Cell 
                key={`cell-${index}`} 
                fill={COLORS[index % COLORS.length]} 
                stroke="#fff" 
                strokeWidth={2}
              />
            ))}
          </Pie>
          <Tooltip 
            formatter={(value, name, props) => [
              `${value} trades (${props.payload.percentage.toFixed(1)}%)`, 
              name
            ]}
            contentStyle={{ backgroundColor: '#1f2937', borderRadius: '8px', border: 'none', color: '#fff' }}
          />
          <Legend 
            verticalAlign="bottom" 
            align="center" 
            iconType="circle" 
            wrapperStyle={{ fontSize: '12px', marginTop: '8px' }}
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default WinRateChart;
