"use client";

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

type AnimatedSphereProps = {
  index: number;
  className: string;
  color: string;
  initialDelay?: number;
};

const AnimatedSphere: React.FC<AnimatedSphereProps> = ({ 
  index, 
  className, 
  color, 
  initialDelay = 0 
}) => {
  // Use a simple state to track if component is mounted
  const [isMounted, setIsMounted] = useState(false);
  
  // Set mounted state on component mount
  useEffect(() => {
    setIsMounted(true);
    return () => setIsMounted(false);
  }, []);
  
  // Simple pulse animation that doesn't rely on controls
  const pulseAnimation = {
    scale: [1, 1.05, 1],
    opacity: [0.5, 0.7, 0.5],
    transition: {
      duration: 8 + index * 2,
      repeat: Infinity,
      ease: "easeInOut",
      delay: initialDelay
    }
  };
  
  return (
    <motion.div
      className={`absolute rounded-full ${className} ${color}`}
      initial={{ opacity: 0.5, scale: 1 }}
      animate={isMounted ? pulseAnimation : {}}
      drag
      dragConstraints={{ left: -100, right: 100, top: -100, bottom: 100 }}
    />
  );
};

export default AnimatedSphere;
