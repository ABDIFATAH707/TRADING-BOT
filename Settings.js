const Settings = () => {
  return (
    <div className="min-h-screen bg-dark text-white flex">
      <div className="w-64 bg-gray-800 p-4">
        <h2 className="text-xl font-bold mb-4">Binary Trading Bot</h2>
        <ul>
          <li className="mb-2 cursor-pointer">Dashboard</li>
          <li className="mb-2">Bet Status</li>
          <li className="mb-2">Trade History</li>
          <li className="mb-2">Settings</li>
          <li className="mb-2 cursor-pointer">Manual Signal</li>
        </ul>
      </div>
      <div className="flex-1 p-8">
        <h2 className="text-2xl font-bold mb-4">Settings</h2>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <h3 className="text-lg font-semibold">General</h3>
            <div className="mt-4">
              <label className="block mb-2">Trade Amount</label>
              <input type="number" value="50.00" className="p-2 rounded bg-gray-700 text-white" />
            </div>
            <div className="mt-4">
              <label className="block mb-2">Max Concurrent Trades</label>
              <input type="number" value="3" className="p-2 rounded bg-gray-700 text-white" />
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold">API Key</h3>
            <div className="mt-4">
              <input type="text" placeholder="Enter API Key" className="p-2 rounded bg-gray-700 text-white w-full" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;