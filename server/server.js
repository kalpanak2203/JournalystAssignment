const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3001;

const mockAnalyticsData = {
  summary: {
    winRate: 58.5,
    profitFactor: 1.45,
    averageReturn: 0.85,
    maxDrawdown: -12.3,
    totalTrades: 125,
    winningTradesCount: 73,
    losingTradesCount: 52,
    longestWinStreak: 8,
    longestLossStreak: 4,
    sharpeRatio: 1.15,
    cumulativePL_currency: 12540.75,
    cumulativePL_percentage: 25.4,
  },
  recentTrades: [
    { id: 110, symbol: 'TSLA', date: '2025-09-29', side: 'Long', returnPercentage: 3.50, profitUSD: 350.50, status: 'Win' },
    { id: 109, symbol: 'AAPL', date: '2025-09-29', side: 'Short', returnPercentage: -0.75, profitUSD: -75.00, status: 'Loss' },
    { id: 108, symbol: 'MSFT', date: '2025-09-28', side: 'Long', returnPercentage: 1.20, profitUSD: 120.00, status: 'Win' },
    { id: 107, symbol: 'GOOGL', date: '2025-09-28', side: 'Long', returnPercentage: 0.55, profitUSD: 55.00, status: 'Win' },
    { id: 106, symbol: 'NVDA', date: '2025-09-27', side: 'Short', returnPercentage: -2.10, profitUSD: -210.00, status: 'Loss' },
    { id: 105, symbol: 'AMD', date: '2025-09-27', side: 'Long', returnPercentage: 4.00, profitUSD: 400.00, status: 'Win' },
    { id: 104, symbol: 'BABA', date: '2025-09-27', side: 'Short', returnPercentage: -1.50, profitUSD: -150.00, status: 'Loss' },
    { id: 103, symbol: 'JPM', date: '2025-09-26', side: 'Long', returnPercentage: 0.90, profitUSD: 90.00, status: 'Win' },
    { id: 102, symbol: 'V', date: '2025-09-26', side: 'Short', returnPercentage: 1.80, profitUSD: 180.00, status: 'Win' },
    { id: 101, symbol: 'MA', date: '2025-09-26', side: 'Long', returnPercentage: -0.25, profitUSD: -25.00, status: 'Loss' }
  ],
};

app.use(cors()); 
app.use(express.json());

app.get('/', (req, res) => {
  res.json({ message: 'Dashboard Analytics API Server', endpoints: ['/analytics'] });
});

app.get('/analytics', (req, res) => {
  console.log('Fetching analytics data...');
  setTimeout(() => {
    res.json(mockAnalyticsData);
  }, 500);
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});