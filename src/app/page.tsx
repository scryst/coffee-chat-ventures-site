"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaCoffee, FaUsers, FaComments, FaDiscord, FaArrowRight, FaInstagram, FaEnvelope } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-coffee-brown/30"></div>
          <div className="absolute bottom-20 right-10 w-40 h-40 rounded-full bg-matcha/30"></div>
        </div>
        
        <div className="container mx-auto px-4 z-10 relative">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="lg:w-1/2 mb-10 lg:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-coffee-brown">
                Connect with the <span className="text-matcha">Coffee Chat</span> Community
              </h1>
              
              <p className="text-lg text-coffee-light mb-8">
                Join our community to connect with entrepreneurs, investors, and professionals. 
                Share ideas, get feedback, and grow your network in a supportive environment.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/channels" className="btn-primary inline-flex items-center justify-center">
                  Explore Channels
                </Link>
                
                <Link href="/coffee" className="btn-secondary inline-flex items-center justify-center">
                  Learn About Coffee Bot
                </Link>
              </div>
            </div>
            
            <div className="lg:w-1/2 flex justify-center">
              <div className="relative w-full max-w-md h-80 bg-coffee-light/20 rounded-lg overflow-hidden">
                <Image 
                  src="/images/coffee-chat-community.jpg"
                  alt="Coffee chat community"
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
      
      {/* Features Section */}
      <section className="py-16 bg-cream/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-coffee-brown mb-4">Why Join Our Community?</h2>
            <p className="text-coffee-light max-w-2xl mx-auto">
              Our community offers a variety of channels and features designed to help you connect, 
              learn, and grow with like-minded professionals.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="card hover:shadow-lg transition-all duration-300">
              <div className="mb-4">
                <div className="w-14 h-14 bg-coffee-brown/10 rounded-full flex items-center justify-center">
                  <FaUsers className="h-7 w-7 text-coffee-brown" />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2 text-coffee-brown">Networking</h3>
              <p className="text-coffee-light">
                Connect with entrepreneurs, investors, and professionals from various industries and backgrounds.
              </p>
            </div>
            
            <div className="card hover:shadow-lg transition-all duration-300">
              <div className="mb-4">
                <div className="w-14 h-14 bg-coffee-brown/10 rounded-full flex items-center justify-center">
                  <FaComments className="h-7 w-7 text-coffee-brown" />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2 text-coffee-brown">Discussions</h3>
              <p className="text-coffee-light">
                Engage in meaningful discussions about startups, investing, technology, and more in our topic-focused channels.
              </p>
            </div>
            
            <div className="card hover:shadow-lg transition-all duration-300">
              <div className="mb-4">
                <div className="w-14 h-14 bg-coffee-brown/10 rounded-full flex items-center justify-center">
                  <FaCoffee className="h-7 w-7 text-coffee-brown" />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2 text-coffee-brown">Coffee Chats</h3>
              <p className="text-coffee-light">
                Use our Coffee Bot to schedule one-on-one coffee chats with community members for more focused networking.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Channels Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-bold text-coffee-brown mb-4">Explore Our Channels</h2>
              <p className="text-coffee-light mb-6">
                Our server is organized into topic-specific channels to help you find the conversations that matter most to you.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <div className="bg-coffee-brown/10 p-2 rounded-lg mr-3">
                    <span className="text-coffee-brown font-mono">#general</span>
                  </div>
                  <div>
                    <p className="text-coffee-light">General discussions and community chat</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-coffee-brown/10 p-2 rounded-lg mr-3">
                    <span className="text-coffee-brown font-mono">#startup</span>
                  </div>
                  <div>
                    <p className="text-coffee-light">Share and discuss startup ideas and challenges</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-coffee-brown/10 p-2 rounded-lg mr-3">
                    <span className="text-coffee-brown font-mono">#investing</span>
                  </div>
                  <div>
                    <p className="text-coffee-light">Discussions about investing, funding, and finance</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-coffee-brown/10 p-2 rounded-lg mr-3">
                    <span className="text-coffee-brown font-mono">#tech</span>
                  </div>
                  <div>
                    <p className="text-coffee-light">Technology discussions and problem-solving</p>
                  </div>
                </div>
              </div>
              
              <Link href="/channels" className="text-matcha hover:text-coffee-brown transition-colors inline-flex items-center">
                View All Channels <FaArrowRight className="ml-2" />
              </Link>
            </div>
            
            <div className="lg:w-1/2">
              <div className="relative w-full h-80 bg-coffee-light/20 rounded-lg overflow-hidden">
                <Image 
                  src="/images/discord-community-channels.jpg"
                  alt="Discord community channels"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute -top-4 -left-4 w-32 h-32 bg-matcha/20 rounded-lg"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Coffee Bot Section */}
      <section className="py-16 bg-cream/30">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row-reverse items-center gap-12">
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-bold text-coffee-brown mb-4">Meet Our Coffee Bot</h2>
              <p className="text-coffee-light mb-6">
                Our community features a custom Coffee Bot that facilitates one-on-one networking through coffee chats.
              </p>
              
              <div className="bg-white p-4 rounded-lg shadow-sm mb-8">
                <div className="flex items-center mb-3">
                  <div className="bg-coffee-brown p-2 rounded-full mr-2">
                    <FaCoffee className="text-white text-sm" />
                  </div>
                  <span className="font-bold text-coffee-brown">Coffee Bot</span>
                </div>
                
                <div className="bg-coffee-brown/5 p-3 rounded-lg mb-3">
                  <code className="text-coffee-brown font-mono">/coffee</code>
                  <p className="text-sm text-coffee-light mt-1">
                    Use this command to schedule coffee chats with other community members
                  </p>
                </div>
              </div>
              
              <Link href="/coffee" className="text-matcha hover:text-coffee-brown transition-colors inline-flex items-center">
                Learn More About Coffee Bot <FaArrowRight className="ml-2" />
              </Link>
            </div>
            
            <div className="lg:w-1/2">
              <div className="relative w-full h-80 bg-coffee-light/20 rounded-lg overflow-hidden">
                <Image 
                  src="/images/coffee-bot.jpg"
                  alt="Coffee Bot"
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
      
      {/* CTA Section */}
      <section className="py-16 bg-coffee-brown/5">
        <div className="container-custom">
          <div className="card max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-4 text-coffee-brown">Ready to Join Our Community?</h2>
            <p className="mb-6 text-coffee-light">
              Connect with professionals, entrepreneurs, and investors in our Discord community.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <a 
                href="https://discord.gg/KGE8BfruV4"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-coffee-brown hover:bg-matcha text-white px-8 py-3 rounded-md inline-flex items-center justify-center transition-colors"
              >
                <FaDiscord className="mr-2" /> Join Community
              </a>
              <Link 
                href="/coffee"
                className="bg-white border-2 border-coffee-brown text-coffee-brown hover:bg-coffee-brown/5 px-8 py-3 rounded-md inline-flex items-center justify-center transition-colors"
              >
                <FaCoffee className="mr-2" /> Learn About Coffee Bot
              </Link>
            </div>
            <div className="flex justify-center gap-6 mt-4">
              <a 
                href="https://twitter.com/CoffeeChatVent"
                target="_blank"
                rel="noopener noreferrer"
                className="text-coffee-light hover:text-coffee-brown transition-colors"
                aria-label="Twitter/X"
              >
                <FaXTwitter className="h-6 w-6" />
              </a>
              <a 
                href="https://instagram.com/coffeechatventures"
                target="_blank"
                rel="noopener noreferrer"
                className="text-coffee-light hover:text-coffee-brown transition-colors"
                aria-label="Instagram"
              >
                <FaInstagram className="h-6 w-6" />
              </a>
              <a 
                href="mailto:coffeechatventures@gmail.com"
                className="text-coffee-light hover:text-coffee-brown transition-colors"
                aria-label="Email"
              >
                <FaEnvelope className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  );
}
