"use client";

import { motion } from 'framer-motion';

export default function CoffeeCup() {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="relative w-64 h-64">
        {/* Coffee Cup */}
        <motion.div
          className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-40 h-48 bg-[#5E4B3E] rounded-b-3xl rounded-t-lg overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Coffee liquid */}
          <motion.div
            className="absolute top-6 left-2 right-2 bottom-0 bg-[#3A2213] rounded-b-2xl"
            initial={{ height: 0 }}
            animate={{ height: "85%" }}
            transition={{ duration: 1.5, delay: 0.5 }}
          />
          
          {/* Cup handle */}
          <motion.div
            className="absolute top-10 -right-8 w-10 h-20 border-4 border-[#5E4B3E] rounded-r-full"
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          />
        </motion.div>
        
        {/* Cup plate */}
        <motion.div
          className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-56 h-4 bg-[#E0D6C8] rounded-full"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        />
        
        {/* Steam */}
        <motion.div
          className="absolute bottom-48 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 1.5 }}
        >
          <motion.div
            className="w-2 h-10 bg-white/20 rounded-full mb-1 mx-auto"
            initial={{ height: 0, opacity: 0 }}
            animate={{ 
              height: [0, 15, 0],
              opacity: [0, 0.7, 0],
              y: [-5, -30]
            }}
            transition={{ 
              duration: 2,
              repeat: Infinity,
              repeatType: "loop",
              delay: 1.8
            }}
          />
          <motion.div
            className="w-2 h-10 bg-white/20 rounded-full mb-1 mx-auto"
            initial={{ height: 0, opacity: 0 }}
            animate={{ 
              height: [0, 20, 0],
              opacity: [0, 0.7, 0],
              y: [-5, -40]
            }}
            transition={{ 
              duration: 2.3,
              repeat: Infinity,
              repeatType: "loop",
              delay: 2.1
            }}
          />
          <motion.div
            className="w-2 h-10 bg-white/20 rounded-full mb-1 mx-auto"
            initial={{ height: 0, opacity: 0 }}
            animate={{ 
              height: [0, 25, 0],
              opacity: [0, 0.7, 0],
              y: [-5, -50]
            }}
            transition={{ 
              duration: 2.7,
              repeat: Infinity,
              repeatType: "loop",
              delay: 2.4
            }}
          />
        </motion.div>
      </div>
    </div>
  );
}
