"use client";

import { motion } from 'framer-motion';
import { FaCalendarAlt, FaClock, FaMapMarkerAlt, FaUsers } from 'react-icons/fa';

type EventCardProps = {
  title: string;
  date: string;
  time: string;
  location: string;
  category: string;
};

export default function EventCard({ title, date, time, location, category }: EventCardProps) {
  // Different background patterns based on category
  const getPattern = () => {
    switch(category) {
      case 'networking':
        return (
          <div className="absolute inset-0 opacity-20">
            <motion.div 
              className="absolute top-5 left-5 w-10 h-10 rounded-full bg-[#5E4B3E]/40"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 3, repeat: Infinity }}
            />
            <motion.div 
              className="absolute bottom-10 right-10 w-16 h-16 rounded-full bg-[#88A872]/40"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 4, repeat: Infinity, delay: 1 }}
            />
            <motion.div 
              className="absolute top-20 right-20 w-8 h-8 rounded-full bg-[#7D6B5D]/40"
              animate={{ scale: [1, 1.3, 1] }}
              transition={{ duration: 3.5, repeat: Infinity, delay: 0.5 }}
            />
          </div>
        );
      case 'panel':
        return (
          <div className="absolute inset-0 opacity-20">
            <motion.div 
              className="absolute top-5 left-5 w-20 h-4 rounded-lg bg-[#5E4B3E]/40"
              animate={{ width: [80, 100, 80] }}
              transition={{ duration: 3, repeat: Infinity }}
            />
            <motion.div 
              className="absolute top-15 left-5 w-16 h-4 rounded-lg bg-[#88A872]/40"
              animate={{ width: [60, 80, 60] }}
              transition={{ duration: 3.5, repeat: Infinity, delay: 0.3 }}
            />
            <motion.div 
              className="absolute top-25 left-5 w-24 h-4 rounded-lg bg-[#7D6B5D]/40"
              animate={{ width: [90, 110, 90] }}
              transition={{ duration: 4, repeat: Infinity, delay: 0.6 }}
            />
          </div>
        );
      case 'demo':
        return (
          <div className="absolute inset-0 opacity-20">
            <motion.div 
              className="absolute top-10 left-10 w-20 h-20 rounded-lg bg-[#5E4B3E]/20"
              animate={{ rotate: [0, 10, 0] }}
              transition={{ duration: 5, repeat: Infinity }}
            />
            <motion.div 
              className="absolute bottom-10 right-10 w-16 h-16 rounded-lg bg-[#88A872]/20"
              animate={{ rotate: [0, -10, 0] }}
              transition={{ duration: 5, repeat: Infinity, delay: 0.5 }}
            />
          </div>
        );
      case 'workshop':
        return (
          <div className="absolute inset-0 opacity-20">
            <motion.div 
              className="absolute top-5 left-5 w-6 h-6 rounded-sm bg-[#5E4B3E]/30"
              animate={{ x: [0, 10, 0], y: [0, 10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
            />
            <motion.div 
              className="absolute top-20 left-20 w-8 h-8 rounded-sm bg-[#88A872]/30"
              animate={{ x: [0, -15, 0], y: [0, 15, 0] }}
              transition={{ duration: 4, repeat: Infinity, delay: 0.3 }}
            />
            <motion.div 
              className="absolute bottom-10 right-10 w-10 h-10 rounded-sm bg-[#7D6B5D]/30"
              animate={{ x: [0, -10, 0], y: [0, -10, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, delay: 0.6 }}
            />
          </div>
        );
      default:
        return (
          <div className="absolute inset-0 opacity-20">
            <motion.div 
              className="absolute top-10 left-10 w-16 h-16 rounded-full bg-[#5E4B3E]/30"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 3, repeat: Infinity }}
            />
          </div>
        );
    }
  };

  return (
    <motion.div 
      className="relative w-full h-full bg-gradient-to-br from-[#F8F1E9] to-white rounded-lg overflow-hidden shadow-md"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {getPattern()}
      
      <div className="absolute inset-0 p-6 flex flex-col justify-between z-10">
        <div>
          <motion.div
            className="inline-block px-3 py-1 rounded-full text-xs font-medium mb-3"
            style={{ 
              backgroundColor: 
                category === 'networking' ? 'rgba(136, 168, 114, 0.2)' : 
                category === 'panel' ? 'rgba(94, 75, 62, 0.2)' : 
                category === 'demo' ? 'rgba(248, 241, 233, 0.2)' : 
                'rgba(166, 124, 82, 0.2)'
            }}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: 0.2 }}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </motion.div>
          
          <motion.h3 
            className="text-xl font-bold text-[#5E4B3E] mb-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.3 }}
          >
            {title}
          </motion.h3>
        </div>
        
        <motion.div
          className="space-y-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.4 }}
        >
          <div className="flex items-center text-[#7D6B5D] text-sm">
            <FaCalendarAlt className="mr-2 text-[#88A872]" />
            {date}
          </div>
          
          <div className="flex items-center text-[#7D6B5D] text-sm">
            <FaClock className="mr-2 text-[#88A872]" />
            {time}
          </div>
          
          <div className="flex items-center text-[#7D6B5D] text-sm">
            <FaMapMarkerAlt className="mr-2 text-[#88A872]" />
            {location}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
