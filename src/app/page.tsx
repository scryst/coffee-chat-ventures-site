"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { FaCoffee, FaUsers, FaComments, FaDiscord, FaArrowRight, FaInstagram, FaEnvelope, FaMugHot, FaHandshake, FaLightbulb, FaHeart, FaUserFriends, FaCalendarAlt } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import AnimatedSphere from '@/components/AnimatedSphere';

export default function Home() {
  return (
    <main className="min-h-screen">
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
        
        <div className="container mx-auto px-4 z-10 relative">
          <div className="flex flex-col items-center text-center">
            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-5xl md:text-6xl font-bold mb-8 tracking-tight text-coffee-brown">
                <span className="block">Welcome to</span>
                <span className="block">Coffee Chat Ventures</span>
              </h1>
              <p className="text-xl text-coffee-light mb-10 max-w-2xl mx-auto">
                A new Discord community for founders, startup enthusiasts, and venture capital professionals to connect, collaborate, and grow together.
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
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-20 bg-gradient-to-br from-white to-cream/20">
        <div className="container mx-auto px-6">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-coffee-brown">Why Join Our Community?</h2>
            <p className="text-coffee-light max-w-2xl mx-auto text-lg mb-12">
              Our community offers specialized channels and resources designed for founders, investors, 
              and professionals in the startup and venture capital ecosystem.
            </p>
          </motion.div>
          
          <motion.div
            className="grid md:grid-cols-3 gap-8 mt-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <motion.div
              className="bg-white p-8 rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div className="mb-4">
                <div className="w-12 h-12 bg-matcha rounded-full flex items-center justify-center">
                  <FaUsers className="h-6 w-6 text-white" />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-4 text-coffee-brown">Startup Networking</h3>
              <p className="text-coffee-light mb-6 text-sm">
                Connect with founders, angel investors, and VCs across various industries through dedicated channels for each stage of startup growth.
              </p>
              <motion.div
                className="text-matcha font-medium flex items-center"
                whileHover={{ x: 5 }}
              >
                <Link href="/channels" className="flex items-center">
                  <span>Explore Channels</span>
                  <FaArrowRight className="ml-2 text-sm" />
                </Link>
              </motion.div>
            </motion.div>
            
            <motion.div
              className="bg-white p-8 rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              whileHover={{ y: -5 }}
            >
              <div className="mb-4">
                <div className="w-12 h-12 bg-coffee-light rounded-full flex items-center justify-center">
                  <FaComments className="h-6 w-6 text-white" />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-4 text-coffee-brown">Founder Discussions</h3>
              <p className="text-coffee-light mb-6 text-sm">
                Engage in focused discussions about fundraising, customer acquisition, product development, and other critical startup topics.
              </p>
              <motion.div
                className="text-coffee-light font-medium flex items-center"
                whileHover={{ x: 5 }}
              >
                <Link href="/channels" className="flex items-center">
                  <span>View Discussions</span>
                  <FaArrowRight className="ml-2 text-sm" />
                </Link>
              </motion.div>
            </motion.div>
            
            <motion.div
              className="bg-white p-8 rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              whileHover={{ y: -5 }}
            >
              <div className="mb-4">
                <div className="w-12 h-12 bg-cream-dark rounded-full flex items-center justify-center">
                  <FaMugHot className="h-6 w-6 text-white" />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-4 text-coffee-brown">Coffee Chats</h3>
              <p className="text-coffee-light mb-6 text-sm">
                Schedule one-on-one coffee chats with investors, fellow founders, and industry experts to get advice and build meaningful relationships.
              </p>
              <motion.div
                className="text-cream-dark font-medium flex items-center"
                whileHover={{ x: 5 }}
              >
                <Link href="/events" className="flex items-center">
                  <span>View Events</span>
                  <FaArrowRight className="ml-2 text-sm" />
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-gradient-to-br from-cream/50 to-matcha/10">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              className="order-2 md:order-1"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-coffee-brown">About Coffee Chat Ventures</h2>
              
              <p className="text-coffee-light mb-8 text-lg">
                We're building a supportive community where founders and investors can connect, 
                share knowledge, and help each other succeed.
              </p>
              
              <div className="space-y-8">
                <motion.div 
                  className="flex items-start"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="flex-shrink-0 mr-4">
                    <div className="bg-matcha w-12 h-12 rounded-full flex items-center justify-center">
                      <FaHandshake className="h-6 w-6 text-white" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-coffee-brown">Our Mission</h3>
                    <p className="text-coffee-light">
                      To create a welcoming space where professionals can connect, share ideas, and build meaningful relationships over virtual coffee chats.
                    </p>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="flex items-start"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                  <div className="flex-shrink-0 mr-4">
                    <div className="bg-coffee-light w-12 h-12 rounded-full flex items-center justify-center">
                      <FaLightbulb className="h-6 w-6 text-white" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-coffee-brown">Our Vision</h3>
                    <p className="text-coffee-light">
                      Building the most supportive and diverse community of professionals who help each other grow through knowledge sharing and collaboration.
                    </p>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="flex items-start"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <div className="flex-shrink-0 mr-4">
                    <div className="bg-cream-dark w-12 h-12 rounded-full flex items-center justify-center">
                      <FaUsers className="h-6 w-6 text-white" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-coffee-brown">Our Values</h3>
                    <p className="text-coffee-light">
                      Inclusivity, authenticity, generosity, and continuous learning are at the core of everything we do.
                    </p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="order-1 md:order-2"
            >
              <div className="relative">
                <div className="absolute -top-10 -left-10 w-40 h-40 rounded-full bg-matcha/10"></div>
                <div className="absolute -bottom-10 -right-10 w-40 h-40 rounded-full bg-coffee-light/10"></div>
                <div className="bg-white p-8 rounded-lg shadow-sm relative z-10">
                  <h3 className="text-2xl font-bold mb-4 text-coffee-brown">Community Vision</h3>
                  
                  <ul className="space-y-4">
                    <li className="flex items-center">
                      <div className="w-8 h-8 rounded-full bg-matcha/20 flex items-center justify-center mr-3">
                        <FaUserFriends className="text-matcha" />
                      </div>
                      <div>
                        <div className="font-bold text-coffee-brown">Growing Community</div>
                        <div className="text-sm text-coffee-light">For founders & investors</div>
                      </div>
                    </li>
                    
                    <li className="flex items-center">
                      <div className="w-8 h-8 rounded-full bg-coffee-light/20 flex items-center justify-center mr-3">
                        <FaComments className="text-coffee-light" />
                      </div>
                      <div>
                        <div className="font-bold text-coffee-brown">Dedicated Channels</div>
                        <div className="text-sm text-coffee-light">Ready for your discussions</div>
                      </div>
                    </li>
                    
                    <li className="flex items-center">
                      <div className="w-8 h-8 rounded-full bg-cream-dark/20 flex items-center justify-center mr-3">
                        <FaCalendarAlt className="text-cream-dark" />
                      </div>
                      <div>
                        <div className="font-bold text-coffee-brown">Future Events</div>
                        <div className="text-sm text-coffee-light">Coming as we grow</div>
                      </div>
                    </li>
                    
                    <li className="flex items-center">
                      <div className="w-8 h-8 rounded-full bg-matcha/20 flex items-center justify-center mr-3">
                        <FaMugHot className="text-matcha" />
                      </div>
                      <div>
                        <div className="font-bold text-coffee-brown">Coffee Chat Bot</div>
                        <div className="text-sm text-coffee-light">Ready to connect members</div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  );
}
