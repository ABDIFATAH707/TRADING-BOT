const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  settings: {
    tradeAmount: { type: Number, default: 50 },
    maxConcurrentTrades: { type: Number, default: 3 },
    apiKey: { type: String },
  },
});

module.exports = mongoose.model('User', userSchema);