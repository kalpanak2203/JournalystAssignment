import React from 'react';

const MetricCard = ({ title, value, unit = '', isCurrency = false, colorClass = 'text-gray-900', description }) => {
  const formattedValue = value.toLocaleString(undefined, { 
    minimumFractionDigits: 2, 
    maximumFractionDigits: 2 
  });

  return (
    <div className="relative group bg-white/90 backdrop-blur-md p-5 rounded-2xl shadow-md border border-gray-200
                    hover:shadow-xl hover:border-indigo-400 transition duration-300 ease-in-out
                    hover:scale-[1.02] cursor-pointer">
      
      {/* Title */}
      <h3 className="text-sm font-semibold text-gray-600 mb-2 uppercase tracking-wide">
        {title}
      </h3>

      {/* Value */}
      <div className={`text-4xl font-extrabold drop-shadow-sm ${colorClass}`}>
        {isCurrency ? '$' : ''}
        {formattedValue}
        {!isCurrency && (
          <span className="text-lg font-medium ml-1 text-gray-500">{unit}</span>
        )}
      </div>

      {/* Tooltip */}
      <div className="absolute z-20 top-full mt-3 left-1/2 transform -translate-x-1/2
                      w-max max-w-xs px-3 py-2 bg-gray-900 text-white text-xs rounded-lg shadow-lg
                      opacity-0 invisible group-hover:opacity-100 group-hover:visible
                      transition-all duration-300 ease-in-out scale-95 group-hover:scale-100 pointer-events-none">
        {description}
      </div>

      {/* Accent Border Glow */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 
                      opacity-0 group-hover:opacity-20 blur-lg transition duration-500"></div>
    </div>
  );
};

export default MetricCard;
