"use client";

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { FaCoffee, FaComments, FaSearch, FaArrowRight, FaUsers } from 'react-icons/fa';
import Link from 'next/link';
import Image from 'next/image';

export default function ChannelsPage() {
  const [searchTerm, setSearchTerm] = useState('');

  const channelCategories = [
    {
      name: "General",
      channels: [
        { name: "general", description: "General discussions and community chat" },
        { name: "rules", description: "Server rules and guidelines" },
        { name: "announcements", description: "Important announcements and updates" },
        { name: "forum-discussion", description: "Structured discussions on various topics" }
      ]
    },
    {
      name: "Events",
      channels: [
        { name: "upcoming-events", description: "Information about upcoming community events" },
        { name: "demo-day", description: "Showcase your products and get feedback" },
        { name: "speaker-panel", description: "Discussions with guest speakers and industry experts" }
      ]
    },
    {
      name: "Startup",
      channels: [
        { name: "coffee-chat", description: "Request and join coffee chats with other members" },
        { name: "about-me", description: "Introduce yourself to the community" },
        { name: "idea", description: "Share and discuss startup ideas" },
        { name: "building", description: "Discussions about building products and services" },
        { name: "snowballing", description: "Growing and scaling your business" }
      ]
    },
    {
      name: "Investing",
      channels: [
        { name: "general", description: "General investment discussions" },
        { name: "partners", description: "Find potential business partners" },
        { name: "venture-capital", description: "Connect with VCs and discuss funding" },
        { name: "private-equity", description: "Private equity discussions and opportunities" },
        { name: "angel-investing", description: "Angel investing strategies and opportunities" }
      ]
    },
    {
      name: "CEO Chat",
      channels: [
        { name: "customers", description: "Discussions about customer acquisition and retention" },
        { name: "investors", description: "Connecting with and pitching to investors" },
        { name: "employees", description: "Team building and management" },
        { name: "resources", description: "Useful resources for CEOs" }
      ]
    },
    {
      name: "CTO Chat",
      channels: [
        { name: "frontend", description: "Frontend development discussions" },
        { name: "backend", description: "Backend development discussions" },
        { name: "resources", description: "Technical resources and tools" }
      ]
    },
    {
      name: "Venture Capital",
      channels: [
        { name: "pre-seed", description: "Pre-seed funding discussions" },
        { name: "seed", description: "Seed funding discussions" },
        { name: "series", description: "Series A, B, C funding discussions" }
      ]
    },
    {
      name: "Misc",
      channels: [
        { name: "wotd", description: "Word of the day" },
        { name: "job-recruiting", description: "Job opportunities and recruiting" },
        { name: "sleep-schedule", description: "Discussions about work-life balance" },
        { name: "exercise-and-nutrition", description: "Health and wellness discussions" },
        { name: "gaming", description: "Gaming discussions and community play" }
      ]
    }
  ];

  const filteredCategories = channelCategories.map(category => ({
    ...category,
    channels: category.channels.filter(channel => 
      channel.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
      channel.description.toLowerCase().includes(searchTerm.toLowerCase())
    )
  })).filter(category => category.channels.length > 0);

  return (
    <main className="min-h-screen">
      <Navbar />
      
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto mb-12 text-center">
            <div className="inline-block mb-6">
              <div className="bg-coffee-brown p-3 rounded-full shadow-lg">
                <FaComments className="h-10 w-10 text-white" />
              </div>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-coffee-brown">Community Channels</h1>
            <p className="text-coffee-light max-w-2xl mx-auto">
              Explore our diverse range of channels designed to facilitate meaningful discussions and connections.
            </p>
          </div>

          <div className="relative w-full h-60 rounded-lg overflow-hidden mb-12">
            <Image 
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2070&auto=format&fit=crop"
              alt="Coffee Chat Community Channels"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-coffee-brown/30 flex items-center justify-center">
              <h2 className="text-white text-2xl md:text-3xl font-bold px-4 text-center">
                Connect with Like-Minded Professionals
              </h2>
            </div>
          </div>

          {/* Search */}
          <div className="max-w-md mx-auto mb-12">
            <div className="relative">
              <input
                type="text"
                placeholder="Search channels..."
                className="w-full p-3 pl-10 rounded-lg border border-coffee-light/30 focus:border-coffee-brown focus:ring-2 focus:ring-coffee-brown/20 outline-none"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-coffee-light" />
            </div>
          </div>

          {/* Channel Categories */}
          <div className="space-y-12">
            {filteredCategories.map((category, index) => (
              <div key={index}>
                <h2 className="text-xl font-bold mb-4 text-coffee-brown flex items-center">
                  <span className="inline-block w-4 h-4 bg-coffee-brown rounded-full mr-2"></span>
                  {category.name}
                </h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {category.channels.map((channel, channelIndex) => (
                    <div key={channelIndex} className="card p-4 hover:shadow-lg transition-shadow">
                      <div className="flex items-start mb-3">
                        <div className="bg-coffee-brown/10 p-2 rounded-lg mr-3">
                          <span className="text-coffee-brown font-mono">#{channel.name}</span>
                        </div>
                      </div>
                      <p className="text-coffee-light text-sm">{channel.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {filteredCategories.length === 0 && (
            <div className="text-center py-12">
              <p className="text-coffee-light mb-4">No channels found matching "{searchTerm}"</p>
              <button 
                onClick={() => setSearchTerm('')}
                className="border border-coffee-brown text-coffee-brown hover:bg-coffee-brown/10 px-4 py-2 rounded-md transition-colors"
              >
                Clear Search
              </button>
            </div>
          )}

          {/* CTA */}
          <div className="mt-16 text-center">
            <div className="card max-w-2xl mx-auto p-8">
              <h2 className="text-xl font-bold mb-4 text-coffee-brown">Ready to join the conversation?</h2>
              <p className="mb-6 text-coffee-light">
                Join our community to access all these channels and connect with like-minded professionals.
              </p>
              <a 
                href="https://discord.gg/KGE8BfruV4"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex items-center transition-colors"
              >
                <FaUsers className="mr-2" />
                Join Community
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
