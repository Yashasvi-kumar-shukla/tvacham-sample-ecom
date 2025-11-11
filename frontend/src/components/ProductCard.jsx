import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import './ProductCard.css';


const ProductCard = ({ product }) => {
  return (
    <motion.div
      layoutId={`product-${product.id}`}
      className="product-card"
      whileHover={{ y: -5, boxShadow: "0 8px 25px rgba(0, 0, 0, 0.08)" }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
    >
      <Link to={`/product/${product.id}`}>
        <div className="product-card-image-wrapper">
          <motion.img
            src={product.image_url}
            alt={product.name}
            className="product-card-image"
          />
        </div>
        <div className="product-card-info">
          <h3>{product.name}</h3>
          <p>${Number(product.price).toFixed(2)}</p>
        </div>
      </Link>
    </motion.div>
  );
};

export default ProductCard;