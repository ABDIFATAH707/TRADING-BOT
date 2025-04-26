import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const navigate = useNavigate();
  const [trades, setTrades] = useState([]);

  useEffect(() => {
    // Fetch trades from backend
    // Placeholder for now
    setTrades([
      { time: '14:46:30', type: 'Call', amount: 50, result: 'Win' },
      { time: '14:46:30', type: 'Call', amount: 210, result: 'Loss' },
    ]);
  }, []);

  return (
    <div className="min-h-screen bg-dark text-white flex">
      <div className="w-64 bg-gray-800 p-4">
        <h2 className="text-xl font-bold mb-4">Binary Trading Bot</h2>
        <ul>
          <li className="mb-2">Dashboard</li>
          <li className="mb-2">Bet Status</li>
          <li className="mb-2">Trade History</li>
          <li className="mb-2 cursor-pointer" onClick={() => navigate('/settings')}>
            Settings
          </li>
          <li className="mb-2 cursor-pointer" onClick={() => navigate('/manual-signal')}>
            Manual Signal
          </li>
        </ul>
      </div>
      <div className="flex-1 p-8">
        <h2 className="text-2xl font-bold mb-4">Dashboard</h2>
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-gray-800 p-4 rounded">
            <h3 className="text-lg font-semibold">Active Status</h3>
            {/* Add candlestick chart here */}
          </div>
          <div className="bg-gray-800 p-4 rounded">
            <h3 className="text-lg font-semibold">Performance</h3>
            {/* Add line chart here */}
          </div>
          <div className="bg-gray-800 p-4 rounded">
            <h3 className="text-lg font-semibold">Total Trades: 350</h3>
          </div>
          <div className="bg-gray-800 p-4 rounded">
            <h3 className="text-lg font-semibold">Success Rate: 67%</h3>
          </div>
        </div>
        <div className="mt-4 bg-gray-800 p-4 rounded">
          <h3 className="text-lg font-semibold">Trade History</h3>
          <table className="w-full">
            <thead>
              <tr>
                <th>Time</th>
                <th>Type</th>
                <th>Amount</th>
                <th>Result</th>
              </tr>
            </thead>
            <tbody>
              {trades.map((trade, index) => (
                <tr key={index}>
                  <td>{trade.time}</td>
                  <td>{trade.type}</td>
                  <td>{trade.amount}</td>
                  <td>{trade.result}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;