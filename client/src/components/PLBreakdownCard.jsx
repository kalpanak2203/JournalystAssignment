import React from 'react';

const PLBreakdownCard = ({ currency, percentage }) => {
  const isPositive = currency >= 0;
  const color = isPositive ? 'text-green-600' : 'text-red-600';
  const glow = isPositive ? 'from-green-400/20 to-green-200/30' : 'from-red-400/20 to-red-200/30';
  const sign = isPositive ? '+' : '';

  return (
    <div className={`relative bg-white/90 backdrop-blur-md p-6 rounded-2xl shadow-md border border-gray-200 
                    transition duration-300 hover:shadow-2xl hover:scale-[1.02]`}>
      
      {/* Accent Top Border */}
      <div className={`absolute top-0 left-0 w-full h-1 rounded-t-2xl bg-gradient-to-r ${isPositive ? 'from-green-400 to-emerald-500' : 'from-red-400 to-pink-500'}`}></div>
      
      {/* Title */}
      <h3 className="text-lg font-semibold text-gray-700 mb-6 text-center tracking-wide">
        📊 Cumulative P/L Breakdown
      </h3>

      {/* Net P/L */}
      <div className="flex flex-col items-center justify-center py-4">
        <span className="text-sm font-medium text-gray-500 mb-2">Net P/L (USD)</span>
        <span className={`text-6xl font-extrabold ${color} transition-transform duration-300 group-hover:scale-110`}>
          ${sign}{Math.abs(currency).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
        </span>
      </div>

      {/* Percentage Badge */}
      <div className="flex items-center justify-center pt-6">
        <span className={`relative px-5 py-2 text-lg font-semibold rounded-full ${color} 
                        bg-gradient-to-r ${isPositive ? 'from-green-50 to-emerald-100' : 'from-red-50 to-pink-100'} 
                        border ${isPositive ? 'border-green-300' : 'border-red-300'} shadow-sm`}>
          {sign}{Math.abs(percentage).toFixed(2)}%
          <span className={`absolute inset-0 rounded-full blur-lg opacity-30 bg-gradient-to-r ${glow}`}></span>
        </span>
      </div>
    </div>
  );
};

export default PLBreakdownCard;
