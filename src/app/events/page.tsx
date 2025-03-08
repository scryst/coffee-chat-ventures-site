"use client";

import { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { 
  FaCalendarAlt, FaUsers, FaChartLine, FaMugHot, FaLaptop, FaCode, 
  FaFire, FaLightbulb, FaArrowRight, FaDiscord, FaComments, 
  FaLaptopCode, FaClock, FaMapMarkerAlt, FaEnvelope, FaUser,
  FaNetworkWired, FaUserTie, FaHandshake
} from 'react-icons/fa';
import Link from 'next/link';
import { motion } from 'framer-motion';
import AnimatedSphere from '@/components/AnimatedSphere';

// Define event type
interface Event {
  id: number;
  title: string;
  date: string;
  time: string;
  location: string;
  emoji: string;
}

// Define events by month type
interface EventsByMonth {
  [key: string]: Event[];
}

export default function EventsPage() {
  const [activeMonth, setActiveMonth] = useState('March');

  const months = ['March', 'April', 'May'];
  
  const eventsByMonth: EventsByMonth = {
    'March': [
      {
        id: 1,
        title: "Startup Founder Networking",
        date: "March 15, 2025",
        time: "5:00 PM - 6:30 PM PST",
        location: "Discord Voice Channel",
        emoji: "🚀"
      },
      {
        id: 2,
        title: "Investor Panel: Early Stage Funding",
        date: "March 20, 2025",
        time: "12:00 PM - 1:30 PM PST",
        location: "Discord Stage Channel",
        emoji: "💰"
      },
      {
        id: 3,
        title: "Product Demo Day",
        date: "March 25, 2025",
        time: "3:00 PM - 5:00 PM PST",
        location: "Discord Voice Channel",
        emoji: "🎯"
      }
    ],
    'April': [
      {
        id: 4,
        title: "Technical Workshop: Building with AI",
        date: "April 2, 2025",
        time: "10:00 AM - 11:30 AM PST",
        location: "Discord Voice Channel",
        emoji: "🤖"
      },
      {
        id: 5,
        title: "Coffee Chat Roulette",
        date: "April 8, 2025",
        time: "4:00 PM - 5:00 PM PST",
        location: "Discord Bot",
        emoji: "☕"
      },
      {
        id: 6,
        title: "Venture Capital Trends in 2025",
        date: "April 15, 2025",
        time: "1:00 PM - 2:00 PM PST",
        location: "Discord Stage Channel",
        emoji: "📈"
      }
    ],
    'May': [
      {
        id: 7,
        title: "Community Hackathon",
        date: "May 5-7, 2025",
        time: "All Day",
        location: "Discord Channels",
        emoji: "💻"
      },
      {
        id: 8,
        title: "Founder Stories: Success & Failures",
        date: "May 12, 2025",
        time: "2:00 PM - 3:30 PM PST",
        location: "Discord Stage Channel",
        emoji: "🎭"
      },
      {
        id: 9,
        title: "Summer Networking Mixer",
        date: "May 22, 2025",
        time: "5:00 PM - 7:00 PM PST",
        location: "Discord Voice Channels",
        emoji: "🌞"
      }
    ]
  };

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
        
        <div className="container mx-auto px-6 relative z-10">
          <motion.div 
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div 
              className="inline-block mb-6"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 260, damping: 20 }}
            >
              <div className="bg-matcha p-3 rounded-full shadow-lg">
                <FaCalendarAlt className="h-10 w-10 text-white" />
              </div>
            </motion.div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-coffee-brown">
              Community Events
            </h1>
            <p className="text-xl text-coffee-light mb-8 max-w-2xl mx-auto">
              Join our virtual events to connect with other founders, investors, and startup professionals.
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
              Join Our Discord
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* Upcoming Events Section */}
      <section id="upcoming-events" className="py-20 bg-gradient-to-br from-white to-cream/20">
        <div className="container mx-auto px-6">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-coffee-brown">Coming Soon: Upcoming Events</h2>
            <p className="text-coffee-light max-w-2xl mx-auto text-lg mb-12">
              We're just getting started! As our community grows, we'll be hosting a variety of events. 
              Here's a preview of the types of events you can look forward to.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Startup Founder Q&A",
                description: "Join us for a live Q&A session with successful startup founders who will share their experiences and answer your questions.",
                icon: <FaUsers className="text-white" />,
                bgColor: "bg-matcha"
              },
              {
                title: "Pitch Practice",
                description: "Practice your startup pitch and get feedback from investors and experienced founders in a supportive environment.",
                icon: <FaChartLine className="text-white" />,
                bgColor: "bg-coffee-light"
              },
              {
                title: "Investor Coffee Chat",
                description: "Connect with angel investors and VCs in a casual setting to discuss funding opportunities and build relationships.",
                icon: <FaMugHot className="text-white" />,
                bgColor: "bg-cream-dark"
              },
              {
                title: "Workspace of the Day",
                description: "Share your workspace setup and get inspired by others. A fun way to connect with the community!",
                icon: <FaLaptop className="text-white" />,
                bgColor: "bg-coffee-brown"
              },
              {
                title: "Tech Talk Tuesday",
                description: "Deep dive into technical topics with experts from various fields. Learn about the latest technologies and trends.",
                icon: <FaCode className="text-white" />,
                bgColor: "bg-matcha/90"
              },
              {
                title: "Founder Fireside Chat",
                description: "Intimate conversations with successful founders about their journey, challenges, and lessons learned.",
                icon: <FaFire className="text-white" />,
                bgColor: "bg-coffee-light/90"
              },
            ].map((event, index) => (
              <motion.div 
                key={index}
                className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ y: -5 }}
              >
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center ${event.bgColor}`}>
                      {event.icon}
                    </div>
                    <h3 className="text-xl font-bold ml-4 text-coffee-brown">{event.title}</h3>
                  </div>
                  
                  <div className="mb-4 text-center">
                    <span className="inline-block px-3 py-1 bg-cream/30 text-coffee-brown rounded-full text-sm">
                      Coming Soon
                    </span>
                  </div>
                  
                  <p className="text-coffee-light mb-6 text-sm">
                    {event.description}
                  </p>
                  
                  <motion.div
                    className="text-matcha font-medium flex items-center"
                    whileHover={{ x: 5 }}
                  >
                    <span>Stay tuned for details</span>
                    <FaArrowRight className="ml-2 text-sm" />
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <motion.a 
              href="#upcoming-events"
              className="inline-flex items-center text-matcha hover:text-matcha-dark transition-colors font-medium"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View All Upcoming Events
              <FaArrowRight className="ml-2" />
            </motion.a>
          </div>
        </div>
      </section>

      {/* Host Your Own Event Section */}
      <section className="py-20 bg-gradient-to-br from-cream/50 to-matcha/10">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-coffee-brown">Help Shape Our Community</h2>
              <p className="text-coffee-light mb-8 text-lg">
                As we grow, we'd love for community members to host events. Have an idea for an event? 
                Let us know what you'd like to see or host in the future!
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
                      <FaCalendarAlt className="h-6 w-6 text-white" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-coffee-brown">Propose an Event</h3>
                    <p className="text-coffee-light">
                      Have an idea for an event? Share it with us and we might feature it in our upcoming schedule.
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
                    <h3 className="text-xl font-bold mb-2 text-coffee-brown">Share Your Ideas</h3>
                    <p className="text-coffee-light">
                      Tell us what events you'd be interested in attending or hosting.
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
                    <h3 className="text-xl font-bold mb-2 text-coffee-brown">Help Build the Community</h3>
                    <p className="text-coffee-light">
                      Contribute to making Coffee Chat Ventures a vibrant space for founders and investors.
                    </p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
            
            <motion.div
              className="hidden md:block"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="relative">
                <div className="absolute -top-10 -left-10 w-40 h-40 rounded-full bg-matcha/10"></div>
                <div className="absolute -bottom-10 -right-10 w-40 h-40 rounded-full bg-coffee-light/10"></div>
                <div className="bg-white p-8 rounded-lg shadow-sm relative z-10">
                  <h3 className="text-2xl font-bold mb-4 text-coffee-brown">Event Ideas</h3>
                  <ul className="space-y-4">
                    <li className="flex items-center">
                      <div className="w-8 h-8 rounded-full bg-matcha/20 flex items-center justify-center mr-3">
                        <FaLaptopCode className="text-matcha" />
                      </div>
                      <span className="text-coffee-light">Technical Workshops</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-8 h-8 rounded-full bg-coffee-light/20 flex items-center justify-center mr-3">
                        <FaNetworkWired className="text-coffee-light" />
                      </div>
                      <span className="text-coffee-light">Networking Sessions</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-8 h-8 rounded-full bg-cream-dark/20 flex items-center justify-center mr-3">
                        <FaUserTie className="text-cream-dark" />
                      </div>
                      <span className="text-coffee-light">Mentorship Programs</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-8 h-8 rounded-full bg-matcha/20 flex items-center justify-center mr-3">
                        <FaHandshake className="text-matcha" />
                      </div>
                      <span className="text-coffee-light">Collaboration Opportunities</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-8 h-8 rounded-full bg-coffee-light/20 flex items-center justify-center mr-3">
                        <FaComments className="text-coffee-light" />
                      </div>
                      <span className="text-coffee-light">Discussion Panels</span>
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
