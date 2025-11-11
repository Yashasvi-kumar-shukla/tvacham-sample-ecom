import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import SplashScreen from '../components/SplashScreen';
import './OrderOverview.css';

const FALLBACK_IMAGE = 'https://i.imgur.com/gpaEKAi.png';

const OrderOverview = () => {
  const [loading, setLoading] = useState(true);
  const { state } = useLocation();
  const navigate = useNavigate(); 
  const { product } = state || {}; 

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500); 
    return () => clearTimeout(timer);
  }, []);

  const handleConfirmOrder = async () => {
    if (!product) return;

    navigate('/payment', { state: { product: product } });
  };

  if (!product) {
    return (
      <div>
        <p>No product selected. Please go back to shop.</p>
        <button className="btn" onClick={() => navigate('/')}>Go Home</button>
      </div>
    );
  }

  return (
    <>
      <AnimatePresence>
        {loading && <SplashScreen />}
      </AnimatePresence>
      
      {!loading && (
        <motion.div 
          className="order-overview-page"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h1>Order Overview</h1>
          <div className="order-item">
            <img 
              src={product.image_url || FALLBACK_IMAGE} 
              alt={product.name} 
              className="order-item-img" 
            />
            <div className="order-item-info">
              <h3>{product.name}</h3>
              <p>Quantity: 1</p>
            </div>
          </div>
          
          <h2 className="order-total">
            Total: ${Number(product.price).toFixed(2)}
          </h2>
          
          <div className="order-buttons">
            <button 
              className="btn btn-secondary" 
              onClick={() => navigate(`/product/${product.id}`)}
            >
              Cancel
            </button>
            <button className="btn btn-primary" onClick={handleConfirmOrder}>
              Confirm Purchase
            </button>
          </div>
        </motion.div>
      )}
    </>
  );
};

export default OrderOverview;