const axios = require('axios');

const fetchData = async (pair) => {
  // Example: Fetch data from Alpha Vantage
  const response = await axios.get(`https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${pair}&interval=5min&apikey=${process.env.ALPHA_VANTAGE_API_KEY}`);
  return response.data;
};

module.exports = { fetchData };