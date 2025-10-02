const API_BASE_URL = 'http://localhost:3001';

export const fetchAnalyticsData = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/analytics`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Could not fetch analytics data:", error);
    throw error;
  }
};