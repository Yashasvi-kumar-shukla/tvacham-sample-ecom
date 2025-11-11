import React from 'react';
import { motion } from 'framer-motion';

const Profile = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      style={{ textAlign: 'center', padding: '4rem 0' }}
    >
      <h1>User Profile</h1>
      <p style={{ marginTop: '1rem', fontSize: '1.2rem' }}>
        This is where registered users would see their past orders and account details.
      </p>

    </motion.div>
  );
};

export default Profile;