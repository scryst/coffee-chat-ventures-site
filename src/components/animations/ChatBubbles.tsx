"use client";

import { motion } from 'framer-motion';
import { FaUser, FaCoffee } from 'react-icons/fa';

export default function ChatBubbles() {
  return (
    <div className="w-full h-full flex items-center justify-center bg-cream/30 rounded-lg p-6 overflow-hidden">
      <div className="relative w-full max-w-md">
        {/* First user */}
        <motion.div 
          className="flex items-start mb-6"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="bg-[#5E4B3E]/20 p-2 rounded-full mr-3">
            <FaUser className="text-[#5E4B3E] text-xl" />
          </div>
          <motion.div 
            className="bg-white rounded-lg p-4 shadow-sm max-w-xs"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <p className="text-[#5E4B3E] font-medium">Hey! I'm looking to chat about startup funding.</p>
          </motion.div>
        </motion.div>
        
        {/* Coffee Bot */}
        <motion.div 
          className="flex items-start justify-end mb-6"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
        >
          <motion.div 
            className="bg-[#88A872]/10 rounded-lg p-4 shadow-sm max-w-xs"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.9 }}
          >
            <p className="text-[#5E4B3E] font-medium">I found someone who wants to discuss that too! Would you like to connect?</p>
          </motion.div>
          <div className="bg-[#88A872]/20 p-2 rounded-full ml-3">
            <FaCoffee className="text-[#5E4B3E] text-xl" />
          </div>
        </motion.div>
        
        {/* Second user */}
        <motion.div 
          className="flex items-start mb-6"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 1.4 }}
        >
          <div className="bg-[#5E4B3E]/20 p-2 rounded-full mr-3">
            <FaUser className="text-[#5E4B3E] text-xl" />
          </div>
          <motion.div 
            className="bg-white rounded-lg p-4 shadow-sm max-w-xs"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.6 }}
          >
            <p className="text-[#5E4B3E] font-medium">Yes, please! I'd love to connect.</p>
          </motion.div>
        </motion.div>
        
        {/* Connection message */}
        <motion.div
          className="bg-[#5E4B3E]/10 rounded-lg p-3 text-center my-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 2.1 }}
        >
          <p className="text-[#5E4B3E] text-sm">Coffee Bot has connected you with Jane from Startup Server</p>
        </motion.div>
        
        {/* Typing indicator */}
        <motion.div 
          className="flex justify-end"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 1, 0] }}
          transition={{ 
            duration: 2,
            repeat: Infinity,
            repeatDelay: 3,
            delay: 2.5
          }}
        >
          <div className="bg-[#88A872]/10 rounded-lg p-3 shadow-sm">
            <div className="flex space-x-2">
              <motion.div 
                className="w-2 h-2 rounded-full bg-[#5E4B3E]/60"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 0.6, repeat: Infinity }}
              />
              <motion.div 
                className="w-2 h-2 rounded-full bg-[#5E4B3E]/60"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 0.6, delay: 0.2, repeat: Infinity }}
              />
              <motion.div 
                className="w-2 h-2 rounded-full bg-[#5E4B3E]/60"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 0.6, delay: 0.4, repeat: Infinity }}
              />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
