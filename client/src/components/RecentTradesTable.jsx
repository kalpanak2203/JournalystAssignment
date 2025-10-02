import React from 'react';

const RecentTradesTable = ({ trades }) => {
  return (
    <div className="relative group bg-white/90 backdrop-blur-md p-6 rounded-3xl shadow-lg border border-gray-200
                    overflow-x-auto hover:shadow-2xl transition-all duration-300 card">
      <h3 className="text-xl font-bold text-gray-800 mb-4 border-b pb-2 text-center drop-shadow-sm">
        📈 Recent 10 Trades
      </h3>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200 rounded-2xl">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">ID</th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Date</th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Symbol</th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Side</th>
              <th className="px-6 py-3 text-right text-xs font-semibold text-gray-600 uppercase tracking-wider">Return (%)</th>
              <th className="px-6 py-3 text-right text-xs font-semibold text-gray-600 uppercase tracking-wider">P/L (USD)</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-100">
            {trades.map((trade) => {
              const isWin = trade.status === 'Win';
              const rowClass = isWin ? 'hover:bg-green-50/50 transition-all duration-150' : 'hover:bg-red-50/50 transition-all duration-150';
              return (
                <tr key={trade.id} className={`transition-transform duration-300 ${rowClass} cursor-pointer`}>
                  <td className="px-6 py-3 whitespace-nowrap text-sm font-medium text-gray-900">{trade.id}</td>
                  <td className="px-6 py-3 whitespace-nowrap text-sm text-gray-500">{trade.date}</td>
                  <td className="px-6 py-3 whitespace-nowrap text-sm font-bold text-gray-900">{trade.symbol}</td>
                  <td className="px-6 py-3 whitespace-nowrap text-sm text-gray-700">{trade.side}</td>
                  <td className={`px-6 py-3 whitespace-nowrap text-sm text-right font-medium ${isWin ? 'text-green-600' : 'text-red-600'}`}>
                    {isWin ? '+' : ''}{trade.returnPercentage.toFixed(2)}%
                  </td>
                  <td className={`px-6 py-3 whitespace-nowrap text-sm text-right font-bold ${isWin ? 'text-green-700' : 'text-red-700'}`}>
                    ${trade.profitUSD.toFixed(2)}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-indigo-400/10 via-purple-400/20 to-pink-400/10
                      opacity-0 group-hover:opacity-25 blur-2xl transition duration-500 pointer-events-none"></div>
    </div>
  );
};

export default RecentTradesTable;