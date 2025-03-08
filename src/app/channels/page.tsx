"use client";

import { useState } from 'react';
import { FaHashtag, FaDiscord, FaChevronDown, FaChevronUp, FaCalendarAlt } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import AnimatedSphere from '@/components/AnimatedSphere';

export default function ChannelsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  // Sample channel categories data
  const channelCategories = [
    {
      id: '1',
      name: 'Startup',
      description: 'Channels for founders and those building startups at various stages.',
      channels: [
        { id: '101', name: 'coffee-chat', description: 'Connect with other founders for casual discussions.' },
        { id: '102', name: 'about-me', description: 'Introduce yourself and your startup journey.' },
        { id: '103', name: 'idea', description: 'Share and discuss startup ideas and get feedback.' },
        { id: '104', name: 'building', description: 'Discuss the process of building your startup.' },
        { id: '105', name: 'snowballing', description: 'Strategies for growing your startup quickly.' }
      ]
    },
    {
      id: '2',
      name: 'Investing',
      description: 'Connect with investors and discuss investment opportunities.',
      channels: [
        { id: '201', name: 'general', description: 'General investment discussions.' },
        { id: '202', name: 'partners', description: 'Find potential investment partners.' },
        { id: '203', name: 'venture-capital', description: 'Discussions specific to venture capital.' },
        { id: '204', name: 'private-equity', description: 'Topics related to private equity investments.' },
        { id: '205', name: 'angel-investing', description: 'Connect with and learn about angel investing.' }
      ]
    },
    {
      id: '3',
      name: 'CEO Chat',
      description: 'Dedicated channels for CEOs to discuss leadership challenges.',
      channels: [
        { id: '301', name: 'customers', description: 'Strategies for customer acquisition and retention.' },
        { id: '302', name: 'investors', description: 'Navigating investor relationships and fundraising.' },
        { id: '303', name: 'employees', description: 'Team building and management discussions.' },
        { id: '304', name: 'resources', description: 'Share helpful resources for CEOs.' }
      ]
    },
    {
      id: '4',
      name: 'CTO Chat',
      description: 'Technical discussions for CTOs and technical founders.',
      channels: [
        { id: '401', name: 'frontend', description: 'Frontend development discussions and resources.' },
        { id: '402', name: 'backend', description: 'Backend architecture and development topics.' },
        { id: '403', name: 'resources', description: 'Technical resources and tools for CTOs.' }
      ]
    },
    {
      id: '5',
      name: 'Venture Capital',
      description: 'Specific channels for venture capital discussions.',
      channels: [
        { id: '501', name: 'pre-seed', description: 'Discussions about pre-seed funding rounds.' },
        { id: '502', name: 'seed', description: 'Topics related to seed funding for startups.' },
        { id: '503', name: 'series', description: 'Series A, B, C funding discussions.' }
      ]
    },
    {
      id: '6',
      name: 'Misc',
      description: 'Other helpful channels for the startup community.',
      channels: [
        { id: '601', name: 'wotd', description: 'Workspace of the Day - Share and discuss your work setup.' },
        { id: '602', name: 'job-recruiting', description: 'Job postings and recruitment for startups.' },
        { id: '603', name: 'sleep-schedule', description: 'Discussions about work-life balance and productivity.' },
        { id: '604', name: 'exercise-and-nutrition', description: 'Health and wellness for busy founders.' },
        { id: '605', name: 'gaming', description: 'Take a break and connect through gaming.' },
        { id: '606', name: 'memes', description: 'Startup and business-related humor.' },
        { id: '607', name: 'advice', description: 'Ask for and give advice to fellow entrepreneurs.' }
      ]
    }
  ];

  // Handle category click
  const handleCategoryClick = (categoryId: string) => {
    setSelectedCategory(categoryId === selectedCategory ? null : categoryId);
  };

  // Get selected category
  const getSelectedCategory = () => {
    return channelCategories.find(category => category.id === selectedCategory);
  };

  return (
    <main className="min-h-screen bg-cream">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <AnimatedSphere 
            index={0}
            className="w-96 h-96 absolute -top-20 -right-20"
            color="bg-matcha/10"
            initialDelay={0}
          />
          <AnimatedSphere 
            index={1}
            className="w-80 h-80 absolute top-1/3 -left-20"
            color="bg-coffee-light/15"
            initialDelay={1}
          />
          <AnimatedSphere 
            index={2}
            className="w-72 h-72 absolute -bottom-20 right-1/4"
            color="bg-cream/20"
            initialDelay={2}
          />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            className="text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-8 tracking-tight text-coffee-brown">
              Discord Channels
            </h1>
            <p className="text-xl text-coffee-light mb-10 max-w-2xl mx-auto">
              Browse our specialized channels for founders, investors, and startup professionals to connect and collaborate.
            </p>
            
            <motion.a 
              href="https://discord.com/invite/KGE8BfruV4" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-matcha text-white font-medium rounded-lg shadow-sm hover:bg-matcha/80 transition-colors duration-300"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              <FaDiscord className="mr-2" />
              Join Our Discord Server
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* Channel Categories Section */}
      <section className="py-20 bg-gradient-to-br from-white to-cream/20">
        <div className="container mx-auto px-6">
          <motion.div 
            className="max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-coffee-brown">Explore Our Channels</h2>
            <p className="text-coffee-light max-w-2xl mx-auto text-lg mb-12">
              Browse our specialized channels for founders, investors, and startup professionals to connect and collaborate.
            </p>
          </motion.div>
          {/* Categories Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {channelCategories.map((category, index) => (
              <motion.div 
                key={category.id}
                className={`bg-white rounded-xl shadow-sm hover:shadow-lg overflow-hidden border transition-all ${
                  selectedCategory === category.id 
                    ? 'border-coffee-brown' 
                    : 'border-transparent hover:border-coffee-brown/20'
                }`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <div 
                  className="p-8 cursor-pointer"
                  onClick={() => handleCategoryClick(category.id)}
                >
                  <div className="flex items-center mb-4">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                      selectedCategory === category.id ? 'bg-coffee-brown text-white' : 'bg-coffee-brown/10 text-coffee-brown'
                    }`}>
                      <FaHashtag className="text-xl" />
                    </div>
                    <h3 className="text-xl font-bold ml-4 text-coffee-brown">{category.name}</h3>
                  </div>
                  
                  <p className="text-coffee-light mb-6 text-sm">{category.description}</p>
                  
                  <div className="flex justify-between items-center text-sm text-coffee-light mb-4">
                    <span className="bg-coffee-brown/10 px-3 py-1 rounded-full">{category.channels.length} channels</span>
                    <motion.button
                      onClick={() => handleCategoryClick(category.id)}
                      className="flex items-center text-matcha hover:text-matcha-dark transition-colors"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {selectedCategory === category.id ? (
                        <>
                          <span className="mr-1">Hide channels</span>
                          <FaChevronUp />
                        </>
                      ) : (
                        <>
                          <span className="mr-1">Show channels</span>
                          <FaChevronDown />
                        </>
                      )}
                    </motion.button>
                  </div>
                </div>
                
                {/* Channels List */}
                <AnimatePresence>
                  {selectedCategory === category.id && (
                    <motion.div 
                      key={`channels-${category.id}`}
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-8 pb-8">
                        <ul className="space-y-3">
                          {category.channels.map(channel => (
                            <li key={channel.id}>
                              <a 
                                href="https://discord.com/invite/KGE8BfruV4" 
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-start p-3 rounded-lg hover:bg-coffee-brown/5 transition-colors"
                              >
                                <div className="flex items-start">
                                  <div className="w-8 h-8 rounded-full bg-matcha/10 flex items-center justify-center mr-3 flex-shrink-0">
                                    <FaHashtag className="text-matcha" />
                                  </div>
                                  <div>
                                    <h4 className="font-bold text-coffee-brown">{channel.name}</h4>
                                    <p className="text-sm text-coffee-light">{channel.description}</p>
                                  </div>
                                </div>
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Join Discord CTA */}
      <section className="py-20 bg-gradient-to-br from-cream/50 to-matcha/10 text-center">
        <div className="container mx-auto px-6">
          <motion.div 
            className="max-w-xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div 
              className="inline-block p-4 bg-matcha rounded-full mb-8"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.2 }}
            >
              <FaDiscord className="h-10 w-10 text-white" />
            </motion.div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-coffee-brown">Ready to join the conversation?</h2>
            <p className="text-coffee-light mb-10 text-lg max-w-2xl mx-auto">
              Connect with founders, investors, and startup professionals in our growing Discord community.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <motion.a 
                href="/events" 
                className="inline-flex items-center px-6 py-3 bg-coffee-light text-white font-medium rounded-lg shadow-sm hover:bg-coffee-light/80 transition-colors duration-300"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                <FaCalendarAlt className="mr-2 text-xl" />
                View Upcoming Events
              </motion.a>
              
              <motion.a 
                href="https://twitter.com/coffeechatvent" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-white text-coffee-brown font-medium rounded-lg shadow-sm hover:bg-gray-50 transition-colors duration-300 border border-coffee-brown/20"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                <FaXTwitter className="mr-2 text-xl" />
                Follow Us
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
      
      <Footer />
    </main>
  );
}
