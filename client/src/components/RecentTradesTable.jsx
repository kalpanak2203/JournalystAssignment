import React from 'react';

const RecentTradesTable = ({ trades }) => {
  return (
    <div className="bg-gradient-to-br from-indigo-50 via-white to-pink-50 p-6 rounded-2xl shadow-xl border border-gray-200 overflow-x-auto">
      
      {/* Title */}
      <h3 className="text-2xl font-extrabold text-gray-800 mb-6 border-b-2 border-indigo-200 pb-3 tracking-wide">
        Recent 10 Trades
      </h3>

      {trades.length === 0 ? (
        <p className="text-gray-500 text-sm italic">No recent trades available.</p>
      ) : (
        <div className="overflow-x-auto rounded-xl shadow-md">
          <table className="min-w-full divide-y divide-gray-200 rounded-xl overflow-hidden">
            
            {/* Table Header */}
            <thead className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white">
              <tr>
                <th scope="col" className="px-6 py-4 text-left text-sm font-semibold uppercase tracking-wider">
                  ID
                </th>
                <th scope="col" className="px-6 py-4 text-left text-sm font-semibold uppercase tracking-wider">
                  Date
                </th>
                <th scope="col" className="px-6 py-4 text-left text-sm font-semibold uppercase tracking-wider">
                  Symbol
                </th>
                <th scope="col" className="px-6 py-4 text-left text-sm font-semibold uppercase tracking-wider">
                  Side
                </th>
                <th scope="col" className="px-6 py-4 text-right text-sm font-semibold uppercase tracking-wider">
                  Return (%)
                </th>
                <th scope="col" className="px-6 py-4 text-right text-sm font-semibold uppercase tracking-wider">
                  P/L (USD)
                </th>
              </tr>
            </thead>

            {/* Table Body */}
            <tbody className="bg-white divide-y divide-gray-100">
              {trades.map((trade) => {
                const isWin = trade.status === 'Win';

                return (
                  <tr
                    key={trade.id}
                    className={`transition-all duration-200 ${
                      isWin
                        ? 'bg-green-50/70 hover:bg-green-100/90'
                        : 'bg-red-50/70 hover:bg-red-100/90'
                    }`}
                  >
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-gray-900">
                      #{trade.id}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                      {new Date(trade.date).toLocaleDateString()}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-gray-900">
                      {trade.symbol}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-semibold tracking-wide shadow-md ${
                          trade.side === 'Buy'
                            ? 'bg-green-100 text-green-700 border border-green-300'
                            : 'bg-red-100 text-red-700 border border-red-300'
                        }`}
                      >
                        {trade.side}
                      </span>
                    </td>
                    <td
                      className={`px-6 py-4 whitespace-nowrap text-sm text-right font-semibold ${
                        isWin ? 'text-green-600' : 'text-red-600'
                      }`}
                    >
                      {isWin ? '+' : ''}
                      {trade.returnPercentage.toFixed(2)}%
                    </td>
                    <td
                      className={`px-6 py-4 whitespace-nowrap text-sm text-right font-extrabold ${
                        isWin ? 'text-green-700' : 'text-red-700'
                      }`}
                    >
                      ${trade.profitUSD.toFixed(2)}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default RecentTradesTable;
