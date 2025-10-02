import React from 'react';

const MetricCard = ({ title, value, unit = '', isCurrency = false, colorClass = 'text-gray-900', description }) => {
  const formattedValue = value.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 });

  return (
    <div className="relative group bg-white/90 backdrop-blur-md p-6 rounded-3xl shadow-lg border border-gray-200
                    hover:shadow-2xl hover:border-indigo-400 transition-all duration-300 ease-in-out
                    hover:scale-[1.03] cursor-pointer overflow-hidden card">
      
      <h3 className="text-sm font-semibold text-gray-600 mb-3 uppercase tracking-wide">
        {title}
      </h3>

      <div className={`text-4xl font-extrabold drop-shadow-md ${colorClass}`}>
        {isCurrency ? '$' : ''}
        {formattedValue}
        {!isCurrency && (
          <span className="text-lg font-medium ml-1 text-gray-500">{unit}</span>
        )}
      </div>

      <div className="absolute z-20 top-full mt-3 left-1/2 transform -translate-x-1/2
                      w-max max-w-xs px-3 py-2 bg-gray-900/90 text-white text-xs rounded-lg shadow-lg
                      opacity-0 invisible group-hover:opacity-100 group-hover:visible
                      transition-all duration-300 ease-in-out scale-95 group-hover:scale-100 pointer-events-none">
        {description}
      </div>

      <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 
                      opacity-0 group-hover:opacity-25 blur-xl transition duration-500"></div>

      <div className="absolute inset-0 rounded-3xl border border-indigo-300 opacity-0 group-hover:opacity-40
                      animate-pulse pointer-events-none"></div>
    </div>
  );
};

export default MetricCard;