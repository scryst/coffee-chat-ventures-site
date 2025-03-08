"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaCoffee, FaCode, FaServer, FaUsers, FaSpinner, FaArrowRight, FaDiscord, FaComments, FaLock, FaChartBar, FaBell, FaClock, FaFileAlt } from 'react-icons/fa';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { fetchCoffeeData } from '@/lib/api';
import { CoffeeBotData } from '@/lib/types';

export default function CoffeeBotPage() {
  const [coffeeData, setCoffeeData] = useState<CoffeeBotData | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [isMockData, setIsMockData] = useState<boolean>(false);

  useEffect(() => {
    const loadData = async () => {
      try {
        setIsLoading(true);
        const response = await fetchCoffeeData();
        setCoffeeData(response.data);
        setError(response.error);
        setIsMockData(response.isMockData);
      } catch (err) {
        setError('Failed to load Coffee Bot data. Please try again later.');
        console.error('Error loading data:', err);
      } finally {
        setIsLoading(false);
      }
    };

    loadData();
  }, []);

  const coffeeCommandOptions = [
    { name: "Request Coffee Chat", description: "Create a new coffee chat request with topic and description" },
    { name: "View Requests", description: "Browse and accept pending coffee chat requests" },
    { name: "My Stats", description: "View your personal coffee chat statistics" },
    { name: "Leaderboard", description: "View the coffee chat leaderboard" },
    { name: "Cancel My Request", description: "Cancel your pending coffee chat request" },
    { name: "End Current Chat", description: "End your active coffee chat" }
  ];

  const coffeeFeatures = [
    { 
      icon: <FaComments className="text-matcha" />, 
      title: "Create Coffee Chat Requests", 
      description: "Easily create coffee chat requests with specific topics and descriptions to find the right conversation partner."
    },
    { 
      icon: <FaServer className="text-matcha" />, 
      title: "Cross-Server Functionality", 
      description: "Connect with users from different servers, expanding your networking opportunities."
    },
    { 
      icon: <FaUsers className="text-matcha" />, 
      title: "Simple Menu-Based UI", 
      description: "Interactive buttons that adapt to your current state make the bot intuitive to use."
    },
    { 
      icon: <FaLock className="text-matcha" />, 
      title: "Private Conversations", 
      description: "All coffee chats happen through the bot's DMs, ensuring private and focused conversations."
    },
    { 
      icon: <FaChartBar className="text-matcha" />, 
      title: "Comprehensive Statistics", 
      description: "Track your coffee chat history, duration, and other metrics to see your networking progress."
    },
    { 
      icon: <FaBell className="text-matcha" />, 
      title: "Direct Notifications", 
      description: "Receive DM notifications when someone accepts your request or sends a message."
    },
    { 
      icon: <FaClock className="text-matcha" />, 
      title: "Duration Tracking", 
      description: "The bot tracks how long your coffee chats last, helping you manage your time."
    },
    { 
      icon: <FaFileAlt className="text-matcha" />, 
      title: "File Sharing Support", 
      description: "Share files and images during your coffee chats to enhance your discussions."
    }
  ];

  return (
    <main className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-latte"></div>
          <div className="absolute bottom-20 right-10 w-40 h-40 rounded-full bg-matcha/30"></div>
        </div>
        
        <div className="container-custom z-10 relative">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2 text-center lg:text-left">
              <div className="inline-block mb-6">
                <div className="bg-coffee-brown p-3 rounded-full shadow-lg">
                  <FaCoffee className="h-12 w-12 text-white" />
                </div>
              </div>

              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-coffee-brown">
                Meet <span className="text-matcha">Coffee</span> Bot
              </h1>

              <p className="text-lg text-coffee-light mb-8">
                Coffee is a Discord bot that facilitates professional networking through structured, 
                bot-mediated coffee chat interactions across servers.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <a 
                  href="https://discord.com/oauth2/authorize?client_id=1346747859189633074&scope=bot&permissions=2147601408"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary inline-flex items-center justify-center"
                >
                  Add to Discord
                </a>
                
                <Link href="#how-it-works" className="btn-secondary inline-flex items-center justify-center">
                  How It Works
                </Link>
              </div>
            </div>
            
            <div className="lg:w-1/2">
              <div className="relative w-full h-80 bg-coffee-light/20 rounded-lg overflow-hidden">
                <Image 
                  src="https://images.unsplash.com/photo-1550547660-d9450f859349?q=80&w=1965&auto=format&fit=crop"
                  alt="Coffee Bot Discord Integration"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-matcha/20 rounded-lg"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Command Section */}
      <section id="how-it-works" className="py-16 relative">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="section-title inline-flex items-center gap-2 justify-center">
              <FaCoffee className="h-6 w-6 text-matcha" />
              The /coffee Command
            </h2>
            <p className="text-coffee-light max-w-2xl mx-auto">
              Coffee Bot uses a single command with a menu-based UI that makes networking simple and intuitive.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="card p-6">
              <div className="bg-coffee-dark/5 p-4 rounded-lg mb-4 font-mono text-sm">
                <div className="flex items-center mb-2">
                  <span className="text-matcha font-bold">Command:</span>
                </div>
                <code className="block bg-coffee-dark/10 p-3 rounded text-base">/coffee</code>
                
                <div className="flex items-center mt-6 mb-2">
                  <span className="text-matcha font-bold">Menu Options:</span>
                </div>
                <ul className="space-y-2">
                  {coffeeCommandOptions.map((option, index) => (
                    <li key={index} className="bg-coffee-dark/10 p-2 rounded flex flex-col">
                      <span className="font-semibold">{option.name}</span>
                      <span className="text-xs text-coffee-light">{option.description}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-4 text-coffee-brown">How It Works</h3>
              <ol className="space-y-4">
                <li className="flex">
                  <span className="bg-matcha text-white w-6 h-6 rounded-full flex items-center justify-center mr-3 flex-shrink-0">1</span>
                  <p className="text-coffee-light">Type <code>/coffee</code> in any channel to open the main menu</p>
                </li>
                <li className="flex">
                  <span className="bg-matcha text-white w-6 h-6 rounded-full flex items-center justify-center mr-3 flex-shrink-0">2</span>
                  <p className="text-coffee-light">Select "Request Coffee Chat" and fill out the topic and description</p>
                </li>
                <li className="flex">
                  <span className="bg-matcha text-white w-6 h-6 rounded-full flex items-center justify-center mr-3 flex-shrink-0">3</span>
                  <p className="text-coffee-light">Your request appears in the channel with an "Accept" button</p>
                </li>
                <li className="flex">
                  <span className="bg-matcha text-white w-6 h-6 rounded-full flex items-center justify-center mr-3 flex-shrink-0">4</span>
                  <p className="text-coffee-light">When someone accepts, you're both connected through the bot's DMs</p>
                </li>
                <li className="flex">
                  <span className="bg-matcha text-white w-6 h-6 rounded-full flex items-center justify-center mr-3 flex-shrink-0">5</span>
                  <p className="text-coffee-light">Chat privately and end the conversation when finished</p>
                </li>
                <li className="flex">
                  <span className="bg-matcha text-white w-6 h-6 rounded-full flex items-center justify-center mr-3 flex-shrink-0">6</span>
                  <p className="text-coffee-light">Receive a summary with chat duration and statistics</p>
                </li>
              </ol>
            </div>
          </div>
          
          <div className="text-center mb-12">
            <h2 className="section-title">Features</h2>
            <p className="text-coffee-light max-w-2xl mx-auto mb-8">
              Coffee Bot is packed with features to make networking easy and effective.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {coffeeFeatures.map((feature, index) => (
              <div key={index} className="card p-5 hover:shadow-lg transition-shadow">
                <div className="text-3xl mb-3">{feature.icon}</div>
                <h3 className="text-lg font-bold mb-2 text-coffee-brown">{feature.title}</h3>
                <p className="text-coffee-light text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-matcha/10 relative">
        <div className="container-custom">
          <div className="card max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-4 text-coffee-brown">Ready to start networking?</h2>
            <p className="mb-6 text-coffee-light">
              Add Coffee Bot to your Discord server and start connecting with professionals today.
            </p>
            <a 
              href="https://discord.com/oauth2/authorize?client_id=1346747859189633074&scope=bot&permissions=2147601408"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center justify-center"
            >
              <FaCoffee className="mr-2" />
              Add Coffee Bot
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
