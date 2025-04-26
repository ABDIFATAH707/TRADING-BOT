const express = require('express');
const router = express.Router();
const { fetchData } = require('../utils/dataFetch');
const { generateSignal } = require('../utils/indicators');

router.post('/generate', async (req, res) => {
  const { pair } = req.body;
  const data = await fetchData(pair);
  const signal = generateSignal(data, pair);
  res.status(200).json(signal);
});

module.exports = router;