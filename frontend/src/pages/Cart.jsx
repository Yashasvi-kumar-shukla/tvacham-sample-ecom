import React from 'react';
import { motion } from 'framer-motion';
import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom'; 
import './Cart.css';

const FALLBACK_IMAGE = 'https://i.imgur.com/gpaEKAi.png';

const Cart = () => {

  const { cartItems, cartItemCount, addToCart, removeOneFromCart, removeLineFromCart } = useCart();

  const navigate = useNavigate();

  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const handleCheckout = () => {
    navigate('/payment');
  };

  return (
    <motion.div
      className="cart-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <h1>Your Cart</h1>

      {cartItemCount === 0 ? (
        <p className="cart-empty">Your cart is empty.</p>
      ) : (
        <>
          <div className="cart-items-list">
            {cartItems.map(item => (
              <div className="cart-item" key={item.id}>
                <img
                  src={item.image_url || FALLBACK_IMAGE}
                  alt={item.name}
                  className="cart-item-img"
                />
                <div className="cart-item-info">
                  <h3>{item.name}</h3>
                  <p>${Number(item.price).toFixed(2)}</p>
                  
                  {/* --- 5. NEW Quantity Controls --- */}
                  <div className="cart-item-quantity">
                    <button 
                      className="quantity-btn" 
                      onClick={() => removeOneFromCart(item.id)}
                    >
                      -
                    </button>
                    <span>{item.quantity}</span>
                    <button 
                      className="quantity-btn" 
                      onClick={() => addToCart(item)}
                    >
                      +
                    </button>
                  </div>
                </div>
                
                <button
                  className="cart-item-remove-line"
                  onClick={() => removeLineFromCart(item.id)}
                >
                  Remove
                </button>
              </div>
            ))}
          </div>

          <div className="cart-summary">
            <h2>
              Subtotal: ${Number(subtotal).toFixed(2)}
            </h2>
            <button className="btn btn-primary" onClick={handleCheckout}>
              Proceed to Checkout
            </button>
          </div>
        </>
      )}
    </motion.div>
  );
};

export default Cart;