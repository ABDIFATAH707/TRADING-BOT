import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import LoginSignup from './components/LoginSignup';
import Dashboard from './components/Dashboard';
import Settings from './components/Settings';
import ManualSignal from './components/ManualSignal';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginSignup />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/manual-signal" element={<ManualSignal />} />
      </Routes>
    </Router>
  );
}

export default App;