import React from 'react';

const PLBreakdownCard = ({ currency, percentage }) => {
  const isPositive = currency >= 0;
  const color = isPositive ? 'text-green-600' : 'text-red-600';
  const glow = isPositive ? 'from-green-400/30 to-green-200/40' : 'from-red-400/30 to-red-200/40';
  const sign = isPositive ? '+' : '';

  return (
    <div className="relative group bg-white/90 backdrop-blur-md p-6 rounded-3xl shadow-lg border border-gray-200
                    hover:shadow-2xl hover:scale-[1.03] transition-all duration-300 cursor-pointer overflow-hidden card">

      <div className={`absolute top-0 left-0 w-full h-1 rounded-t-3xl bg-gradient-to-r ${isPositive ? 'from-green-400 to-emerald-500' : 'from-red-400 to-pink-500'}`}></div>

      <h3 className="text-lg font-bold text-gray-800 mb-6 text-center tracking-wide drop-shadow-sm">
        📊 Cumulative P/L Breakdown
      </h3>

      <div className="flex flex-col items-center justify-center py-4">
        <span className="text-sm font-medium text-gray-500 mb-2">Net P/L (USD)</span>
        <span className={`text-6xl font-extrabold ${color} transition-transform duration-300 group-hover:scale-105 drop-shadow-md`}>
          ${sign}{Math.abs(currency).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
        </span>
      </div>

      <div className="flex items-center justify-center pt-6 relative">
        <span className={`relative px-6 py-2 text-lg font-semibold rounded-full ${color} 
                        bg-gradient-to-r ${isPositive ? 'from-green-50 to-emerald-100' : 'from-red-50 to-pink-100'}
                        border ${isPositive ? 'border-green-300' : 'border-red-300'} shadow-md transition-all duration-300`}>
          {sign}{Math.abs(percentage).toFixed(2)}%
          <span className={`absolute inset-0 rounded-full blur-xl opacity-30 bg-gradient-to-r ${glow} animate-pulse`}></span>
        </span>
      </div>

      <div className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${isPositive ? 'from-green-400/10 to-emerald-200/20' : 'from-red-400/10 to-pink-200/20'} opacity-0 group-hover:opacity-25 blur-2xl transition duration-500 pointer-events-none`}></div>
    </div>
  );
};

export default PLBreakdownCard;