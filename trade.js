const mongoose = require('mongoose');

const tradeSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  pair: { type: String, required: true },
  type: { type: String, required: true }, // Call or Put
  amount: { type: Number, required: true },
  result: { type: String }, // Win or Loss
  time: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Trade', tradeSchema);