import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-dark text-white flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center"
      >
        <h1 className="text-4xl font-bold mb-4">Binary Trading Bot</h1>
        <p className="text-lg mb-6">Automated trading solutions for binary options.</p>
        <button
          onClick={() => navigate('/login')}
          className="bg-green text-dark px-6 py-3 rounded-full font-semibold"
        >
          Get Started
        </button>
      </motion.div>
    </div>
  );
};

export default HomePage;