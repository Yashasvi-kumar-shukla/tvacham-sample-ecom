import React, { useState, useEffect, useMemo } from 'react';
import { motion } from 'framer-motion';
import { fetchProducts } from '../api';
import ProductCard from '../components/ProductCard';
import ScrollAnimatedSection from '../components/ScrollAnimatedSection';
import './Home.css';

const pageVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.5 } },
  exit: { opacity: 0, transition: { duration: 0.3 } },
};

const Home = () => {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        setLoading(true);
        const res = await fetchProducts();
        setProducts(res.data);
      } catch (err) {
        setError('Failed to load products. Please try again later.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    loadProducts();
  }, []);

  const filteredProducts = useMemo(() => {
    return products.filter(p => 
      p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.category.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [products, searchTerm]);

  return (
    <motion.div
      className="home-page"
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <ScrollAnimatedSection>
        <header className="hero-section">
          <h1>Essence of Skin.</h1>
          <p>
            Discover luxurious, plant-derived skincare designed to restore
            and illuminate your natural beauty.
          </p>
          <input
            type="search"
            placeholder="Search for cleansers, serums, moisturizers..."
            className="search-bar"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </header>
      </ScrollAnimatedSection>

      <ScrollAnimatedSection>
        <main>
          {loading && <p>Loading products...</p>}
          {error && <p style={{ color: 'red' }}>{error}</p>}
          
          {!loading && !error && (
            <div className="product-grid">
              {filteredProducts.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </main>
      </ScrollAnimatedSection>
    </motion.div>
  );
};

export default Home;