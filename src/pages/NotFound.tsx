import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    console.error("404 Error: Non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-crystal">
      <div className="glass-card-deep text-center p-8 rounded-3xl max-w-sm mx-4">
        <div className="text-6xl mb-4">🌐</div>
        <h1 className="text-4xl font-bold text-gray-800 mb-2">404</h1>
        <p className="text-gray-600 mb-6">Page not found — ESOneWorld</p>
        <button
          onClick={() => navigate('/')}
          className="px-6 py-3 rounded-2xl font-bold text-white text-sm shadow-lg"
          style={{ background: 'linear-gradient(135deg, #1e40af, #1e3a8a)' }}
        >
          🏠 Return to Home
        </button>
      </div>
    </div>
  );
};

export default NotFound;
