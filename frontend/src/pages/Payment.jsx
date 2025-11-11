import React from 'react';
import { motion } from 'framer-motion';
import './Payment.css';

const Payment = () => {

  const handlePayment = (e) => {
    e.preventDefault();
    alert('Payment processing... (Simulation)');

  };

  return (
    <motion.div
      className="payment-page"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
    >
      <h1>Checkout & Payment</h1>
      <form className="payment-form" onSubmit={handlePayment}>
        <div className="form-group">
          <label htmlFor="name">Name on Card</label>
          <input type="text" id="name" placeholder="First Last" required />
        </div>
        
        <div className="form-group">
          <label htmlFor="card-number">Card Number</label>
          <input type="text" id="card-number" placeholder="0000 0000 0000 0000" required />
        </div>
        
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="expiry">Expiry Date</label>
            <input type="text" id="expiry" placeholder="MM / YY" required />
          </div>
          <div className="form-group">
            <label htmlFor="cvv">CVV</label>
            <input type="text" id="cvv" placeholder="123" required />
          </div>
        </div>
        
        <button type="submit" className="btn btn-primary btn-pay">
          Pay Now
        </button>
      </form>
    </motion.div>
  );
};

export default Payment;