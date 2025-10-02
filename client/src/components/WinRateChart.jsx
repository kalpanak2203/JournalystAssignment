import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

const COLORS = ['#10B981', '#EF4444'];

const WinRateChart = ({ winCount, lossCount }) => {
  const total = winCount + lossCount;
  const data = [
    { name: 'Winning Trades', value: winCount, percentage: (winCount / total) * 100 },
    { name: 'Losing Trades', value: lossCount, percentage: (lossCount / total) * 100 },
  ];

  return (
    <div className="relative bg-white/90 backdrop-blur-md p-6 rounded-3xl shadow-lg border border-gray-200
                    hover:shadow-2xl transition-all duration-300 flex flex-col md:flex-row items-center gap-6 overflow-hidden card">
      
      <div className="w-full md:w-1/3 flex flex-col gap-4">
        <h3 className="text-xl font-bold text-gray-800 text-center md:text-left">Trade Ratio</h3>
        {data.map((entry, index) => (
          <div key={entry.name} className="flex items-center gap-3">
            <span className="w-5 h-5 rounded-full" style={{ backgroundColor: COLORS[index] }}></span>
            <span className="font-bold text-gray-900 text-sm">
              {entry.name.split(' ')[0]}: <span className="text-gray-700 font-medium">{entry.percentage.toFixed(1)}%</span>
            </span>
          </div>
        ))}
      </div>

      <div className="w-full md:w-2/3 h-64">
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
              labelLine={false}
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
          </PieChart>
        </ResponsiveContainer>
      </div>

      <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-indigo-400/10 via-purple-400/20 to-pink-400/10
                      opacity-0 hover:opacity-25 blur-2xl transition duration-500 pointer-events-none"></div>
    </div>
  );
};

export default WinRateChart;