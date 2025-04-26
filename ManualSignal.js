import { useState } from 'react';
import axios from 'axios';

const ManualSignal = () => {
  const [signals, setSignals] = useState([]);

  const generateSignal = async () => {
    // Example pair for now; in production, loop through all pairs
    const pair = 'EUR/USD OTC';
    const response = await axios.post('http://localhost:5000/api/signals/generate', { pair });
    setSignals([...signals, response.data]);
  };

  return (
    <div className="min-h-screen bg-dark text-white flex">
      <div className="w-64 bg-gray-800 p-4">
        <h2 className="text-xl font-bold mb-4">Binary Trading Bot</h2>
        <ul>
          <li className="mb-2 cursor-pointer">Dashboard</li>
          <li className="mb-2">Bet Status</li>
          <li className="mb-2">Trade History</li>
          <li className="mb-2 cursor-pointer">Settings</li>
          <li className="mb-2">Manual Signal</li>
        </ul>
      </div>
      <div className="flex-1 p-8">
        <h2 className="text-2xl font-bold mb-4">Manual Signal Generation</h2>
        <button onClick={generateSignal} className="bg-green text-dark px-6 py-3 rounded mb-4">
          Generate Signal
        </button>
        <div>
          {signals.map((signal, index) => (
            <div key={index} className="bg-gray-800 p-4 rounded mb-2">
              {signal ? `${signal.type} ${signal.pair} – ${signal.duration} – ${signal.confidence}` : 'No signal generated'}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ManualSignal;