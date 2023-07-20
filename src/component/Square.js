import React from 'react';
import { motion } from 'framer-motion';

const RotatingSquare = () => {
  return (
    <motion.div
      style={{
        width: 20,
        height: 20,
        backgroundColor: 'transparent',
        border: '3px solid purple',
      }}
      animate={{
        rotate: [0, 180, 0, 360], // Rotate 180, come back to 0, and then rotate 360
      }}
      transition={{
        repeat: Infinity,
        duration: 20,
        ease: 'linear',
      }}
    />
  );
};

export default RotatingSquare;
