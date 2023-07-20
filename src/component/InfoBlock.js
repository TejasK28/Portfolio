import React from 'react';
import { motion } from 'framer-motion';

const InfoBlock = ({ isVisible }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
      transition={{ duration: 0.5 }}
      className="info-block"
    >
      {/* Your information content goes here */}
      <h2>Important Information</h2>
      <p>This is some important content that will animate when it's in the viewport.</p>
    </motion.div>
  );
};

export default InfoBlock;
