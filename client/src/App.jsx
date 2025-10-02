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

  if (loading) return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="p-8 text-center text-2xl text-indigo-700 font-semibold animate-pulse">
        🚀 Loading Journalyst Analytics...
      </div>
    </div>
  );

  if (error) return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="p-8 text-center text-red-700 font-bold bg-white rounded-xl shadow-2xl border-t-4 border-red-500">
        ❌ Error: {error}
      </div>
    </div>
  );

  if (!data) return (
    <div className="p-8 text-center text-gray-700">No data available.</div>
  );

  const summary = data.summary;

  const getColorClass = (value, isReturn = true) => {
    if (value === 0) return 'text-gray-900';
    if (isReturn) return value > 0 ? 'text-green-600' : 'text-red-600';
    return value >= 1 ? 'text-green-600' : 'text-amber-600';
  };

  return (
    <div className="min-h-screen p-6 md:p-12 space-y-12">
      <h1 className="header-title">
        📊 TRADING PERFORMANCE DASHBOARD
      </h1>
      <p className="header-subtitle">Evaluate your recent trading behavior and key performance indicators.</p>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        <MetricCard
          title="Win Rate (%)"
          value={summary.winRate}
          unit="%"
          colorClass={getColorClass(summary.winRate - 50)}
          description="Percentage of profitable trades"
        />
        <MetricCard
          title="Profit Factor"
          value={summary.profitFactor}
          colorClass={getColorClass(summary.profitFactor, false)}
          description="Ratio of gross profits to gross losses"
        />
        <MetricCard
          title="Average Return (%)"
          value={summary.averageReturn}
          unit="%"
          colorClass={getColorClass(summary.averageReturn)}
          description="Average % return per trade (across all trades)"
        />
        <MetricCard
          title="Maximum Drawdown (%)"
          value={summary.maxDrawdown}
          unit="%"
          colorClass="text-red-600"
          description="The largest % drop from a peak to a trough in equity curve"
        />
        <MetricCard
          title="Sharpe Ratio"
          value={summary.sharpeRatio}
          colorClass={getColorClass(summary.sharpeRatio - 1, false)}
          description="Risk-adjusted return performance"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <PLBreakdownCard
          currency={summary.cumulativePL_currency}
          percentage={summary.cumulativePL_percentage}
        />
        <div className="grid grid-cols-2 gap-6">
          <MetricCard
            title="Total Trades"
            value={summary.totalTrades}
            colorClass="text-blue-600"
            description="Number of trades included in the calculation"
          />
          <MetricCard
            title="Winning Trades Count"
            value={summary.winningTradesCount}
            colorClass="text-green-600"
            description="Total number of profitable trades"
          />
          <MetricCard
            title="Losing Trades Count"
            value={summary.losingTradesCount}
            colorClass="text-red-600"
            description="Total number of loss-making trades"
          />
          <MetricCard
            title="Longest Win Streak"
            value={summary.longestWinStreak}
            colorClass="text-green-600"
            description="Maximum consecutive profitable trades"
          />
          <MetricCard
            title="Longest Loss Streak"
            value={summary.longestLossStreak}
            colorClass="text-red-600"
            description="Maximum consecutive losing trades"
          />
        </div>
        <WinRateChart
          winCount={summary.winningTradesCount}
          lossCount={summary.losingTradesCount}
        />
      </div>
      <section>
        <RecentTradesTable trades={data.recentTrades} />
      </section>

    </div>
  );
};

export default App;