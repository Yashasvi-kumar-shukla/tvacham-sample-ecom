import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { fetchProductById } from '../api';
import './ProductDetail.css';

import { useCart } from '../context/CartContext';
const FALLBACK_IMAGE = 'https://i.imgur.com/gpaEKAi.png';

const ProductDetail = () => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();

  useEffect(() => {
    const loadProduct = async () => {
      try {
        setLoading(true);
        const res = await fetchProductById(id);
        setProduct(res.data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    loadProduct();
  }, [id]);

  const handleBuyNow = () => {
    navigate('/order-summary', { state: { product: product } });
  };

  const handleAddToCart = () => {
    if (product) {
      addToCart(product);
      alert(`${product.name} added to cart!`);
    }
  };

  if (loading) return <p>Loading...</p>;
  if (!product) return <p>Product not found.</p>;

  return (
    <motion.div 
      className="product-detail-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div 
        layoutId={`product-${product.id}`}
        className="product-detail-image-wrapper"
      >
        <motion.img
          src={product.image_url || FALLBACK_IMAGE}
          alt={product.name}
          className="product-detail-image"
        />
      </motion.div>

      <motion.div 
        className="product-detail-info"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0, transition: { delay: 0.2, duration: 0.5 } }}
      >
        <h1 className="name">{product.name}</h1>
        <p className="category">{product.category}</p>
        <p className="price">${Number(product.price).toFixed(2)}</p>
        <p className="description">{product.description}</p>
        
        <div className="product-detail-buttons">
          <button 
            className="btn btn-secondary"
            onClick={handleAddToCart}
          >
            Add to Cart
          </button>
          <button className="btn btn-primary" onClick={handleBuyNow}>
            Buy Now
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ProductDetail;