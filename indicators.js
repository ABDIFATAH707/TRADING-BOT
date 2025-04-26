// Simplified indicator calculations (use a library like `ta-lib` for production)
const calculateRSI = (data) => {
  // Placeholder for RSI calculation
  return 70; // Example value
};

const calculateMACD = (data) => {
  // Placeholder for MACD calculation
  return { macd: 0.5, signal: 0.3 };
};

const generateSignal = (data, pair) => {
  const rsi = calculateRSI(data);
  const macd = calculateMACD(data);

  if (rsi > 70 && macd.macd > macd.signal) {
    return { pair, type: 'Put', duration: '5 min', confidence: '85%' };
  } else if (rsi < 30 && macd.macd < macd.signal) {
    return { pair, type: 'Call', duration: '5 min', confidence: '85%' };
  }
  return null;
};

module.exports = { generateSignal };