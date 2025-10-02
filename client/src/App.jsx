import React, { useState, useEffect } from 'react';
import { fetchAnalyticsData } from './api/analyticsApi';
import MetricCard from './components/MetricCard';
import PLBreakdownCard from './components/PLBreakdownCard';
import WinRateChart from './components/WinRateChart';
import RecentTradesTable from './components/RecentTradesTable';

const App = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        const analyticsData = await fetchAnalyticsData();
        setData(analyticsData);
      } catch (err) {
        setError("Failed to load trading data. Check API server or connectivity.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    loadData();
  }, []);

  if (loading)
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100">
        <div className="p-8 text-center text-2xl text-indigo-700 font-semibold animate-pulse">
          🚀 Loading Journalyst Analytics...
        </div>
      </div>
    );

  if (error)
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-red-100 via-orange-100 to-yellow-100">
        <div className="p-8 text-center text-red-700 font-bold bg-white rounded-xl shadow-2xl border-t-4 border-red-500">
          ❌ Error: {error}
        </div>
      </div>
    );

  if (!data) return <div className="p-8 text-center text-gray-700">No data available.</div>;

  const summary = data.summary;

  const getColorClass = (value, isReturn = true) => {
    if (value === 0) return 'text-gray-900';
    if (isReturn) {
      return value > 0 ? 'text-green-600' : 'text-red-600';
    } else {
      return value >= 1 ? 'text-green-600' : 'text-amber-600';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-indigo-50 to-purple-100 px-6 md:px-12 lg:px-20 py-8">
      
      <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-14 tracking-tight">
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 drop-shadow-md">
          📊 Trading Performance Dashboard
        </span>
      </h1>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-14">
        <MetricCard
          title="Win Rate"
          value={summary.winRate}
          unit="%"
          colorClass={getColorClass(summary.winRate - 50)}
          description="Percentage of trades that were profitable."
        />
        <MetricCard
          title="Profit Factor"
          value={summary.profitFactor}
          colorClass={getColorClass(summary.profitFactor, false)}
          description="Gross Profits / Gross Losses. (1.0+ is desirable)"
        />
        <MetricCard
          title="Avg Return"
          value={summary.averageReturn}
          unit="%"
          colorClass={getColorClass(summary.averageReturn)}
          description="Average % gain/loss across all trades."
        />
        <MetricCard
          title="Max Drawdown"
          value={summary.maxDrawdown}
          unit="%"
          colorClass="text-red-600"
          description="Largest peak-to-trough decline in equity."
        />
        <MetricCard
          title="Sharpe Ratio"
          value={summary.sharpeRatio}
          colorClass={getColorClass(summary.sharpeRatio - 1, false)}
          description="Risk-adjusted return (Higher is better, 1.0 is benchmark)."
        />
      </div>

      {/* Middle Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mb-14">
        
        {/* P/L Breakdown */}
        <PLBreakdownCard
          currency={summary.cumulativePL_currency}
          percentage={summary.cumulativePL_percentage}
        />

        {/* Stats Cards */}
        <div className="grid grid-cols-2 gap-6">
          <MetricCard
            title="Total Trades"
            value={summary.totalTrades}
            colorClass="text-blue-600"
            description="Total number of trades analyzed."
          />
          <MetricCard
            title="Winning Trades"
            value={summary.winningTradesCount}
            colorClass="text-green-600"
            description="Total number of profitable trades."
          />
          <MetricCard
            title="Losing Trades"
            value={summary.losingTradesCount}
            colorClass="text-red-600"
            description="Total number of loss-making trades."
          />
          <MetricCard
            title="Longest Win Streak"
            value={summary.longestWinStreak}
            colorClass="text-green-600"
            description="Maximum consecutive winning trades."
          />
          <MetricCard
            title="Longest Loss Streak"
            value={summary.longestLossStreak}
            colorClass="text-red-600"
            description="Maximum consecutive losing trades."
          />
        </div>

        {/* Win/Loss Chart */}
        <WinRateChart
          winCount={summary.winningTradesCount}
          lossCount={summary.losingTradesCount}
        />
      </div>

      {/* Recent Trades */}
      <div className="bg-red rounded-2xl shadow-2xl p-8 transition transform hover:scale-[1.01] hover:shadow-3xl">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">
          📈 Recent Trades
        </h2>
        <RecentTradesTable trades={data.recentTrades} />
      </div>
    </div>
  );
};

export default App;
