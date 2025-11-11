import React from 'react';
import { motion } from 'framer-motion';
import './SplashScreen.css';

const splashVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.5 } },
  exit: { opacity: 0, transition: { duration: 0.5, delay: 0.2 } },
};

const logoVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { delay: 0.3, duration: 0.5 } },
};

const textVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { delay: 0.6, duration: 0.5 } },
};

const SplashScreen = () => {
  return (
    <motion.div
      className="splash-screen"
      variants={splashVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <motion.h1 className="splash-logo" variants={logoVariants}>
        Tvaćham
      </motion.h1>
      <motion.p className="splash-text" variants={textVariants}>
        Preparing your order...
      </motion.p>
    </motion.div>
  );
};

export default SplashScreen;