import React from 'react';
import { motion } from 'framer-motion';

const ScrollAnimatedSection = ({ children, once = true, amount = 0.5 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: once, amount: amount }} 
      transition={{ 
        duration: 0.8, 
        ease: [0.04, 0.62, 0.23, 0.98] 
      }}
    >
      {children}
    </motion.div>
  );
};

export default ScrollAnimatedSection;