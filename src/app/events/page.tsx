"use client";

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { FaCalendarAlt, FaClock, FaMapMarkerAlt, FaDiscord, FaUsers, FaArrowRight } from 'react-icons/fa';
import Link from 'next/link';
import EventCard from '@/components/animations/EventCard';

export default function EventsPage() {
  const [filter, setFilter] = useState('all');

  const events = [
    {
      id: 1,
      title: "Startup Founder Networking",
      date: "March 15, 2025",
      time: "5:00 PM - 6:30 PM PST",
      location: "Discord Voice Channel",
      description: "Connect with other startup founders to share experiences, challenges, and opportunities. This is a casual networking event with breakout rooms for more focused discussions.",
      category: "networking",
      image: "/events/networking.jpg"
    },
    {
      id: 2,
      title: "Investor Panel: Early Stage Funding",
      date: "March 20, 2025",
      time: "12:00 PM - 1:30 PM PST",
      location: "Discord Stage Channel",
      description: "Join our panel of experienced investors as they discuss early-stage funding strategies, what they look for in startups, and how to prepare for your first funding round.",
      category: "panel",
      image: "/events/investor-panel.jpg"
    },
    {
      id: 3,
      title: "Product Demo Day",
      date: "March 25, 2025",
      time: "3:00 PM - 5:00 PM PST",
      location: "Discord Voice Channel",
      description: "Showcase your product or get inspired by others. Each presenter will have 5 minutes to demo their product followed by 5 minutes of feedback and questions.",
      category: "demo",
      image: "/events/demo-day.jpg"
    },
    {
      id: 4,
      title: "Technical Workshop: Building with AI",
      date: "April 2, 2025",
      time: "10:00 AM - 11:30 AM PST",
      location: "Discord Voice Channel",
      description: "Learn how to integrate AI into your products with this hands-on workshop. We'll cover practical applications, tools, and best practices for AI implementation.",
      category: "workshop",
      image: "/events/workshop.jpg"
    },
    {
      id: 5,
      title: "Coffee Chat Roulette",
      date: "April 8, 2025",
      time: "4:00 PM - 5:00 PM PST",
      location: "Discord Bot",
      description: "Get randomly paired with another community member for a 15-minute coffee chat. A great way to expand your network and have meaningful conversations.",
      category: "networking",
      image: "/events/coffee-chat.jpg"
    },
    {
      id: 6,
      title: "Venture Capital Trends in 2025",
      date: "April 15, 2025",
      time: "1:00 PM - 2:00 PM PST",
      location: "Discord Stage Channel",
      description: "Join us for a discussion on the latest trends in venture capital, emerging sectors, and what investors are looking for in the current market.",
      category: "panel",
      image: "/events/vc-trends.jpg"
    }
  ];

  const filteredEvents = filter === 'all' 
    ? events 
    : events.filter(event => event.category === filter);

  return (
    <main className="min-h-screen">
      <Navbar />
      
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto mb-12 text-center">
            <div className="inline-block mb-6">
              <div className="bg-matcha p-3 rounded-full shadow-lg">
                <FaCalendarAlt className="h-10 w-10 text-white" />
              </div>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-coffee-brown">Upcoming Events</h1>
            <p className="text-coffee-light max-w-2xl mx-auto">
              Join our community events to learn, network, and grow with fellow entrepreneurs, 
              investors, and professionals.
            </p>
          </div>

          {/* Filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            <button 
              onClick={() => setFilter('all')}
              className={`px-4 py-2 rounded-full transition-colors ${
                filter === 'all' 
                  ? 'bg-coffee-brown text-white' 
                  : 'bg-coffee-light/10 text-coffee-brown hover:bg-coffee-light/20'
              }`}
            >
              All Events
            </button>
            <button 
              onClick={() => setFilter('networking')}
              className={`px-4 py-2 rounded-full transition-colors ${
                filter === 'networking' 
                  ? 'bg-coffee-brown text-white' 
                  : 'bg-coffee-light/10 text-coffee-brown hover:bg-coffee-light/20'
              }`}
            >
              Networking
            </button>
            <button 
              onClick={() => setFilter('panel')}
              className={`px-4 py-2 rounded-full transition-colors ${
                filter === 'panel' 
                  ? 'bg-coffee-brown text-white' 
                  : 'bg-coffee-light/10 text-coffee-brown hover:bg-coffee-light/20'
              }`}
            >
              Panels
            </button>
            <button 
              onClick={() => setFilter('demo')}
              className={`px-4 py-2 rounded-full transition-colors ${
                filter === 'demo' 
                  ? 'bg-coffee-brown text-white' 
                  : 'bg-coffee-light/10 text-coffee-brown hover:bg-coffee-light/20'
              }`}
            >
              Demo Days
            </button>
            <button 
              onClick={() => setFilter('workshop')}
              className={`px-4 py-2 rounded-full transition-colors ${
                filter === 'workshop' 
                  ? 'bg-coffee-brown text-white' 
                  : 'bg-coffee-light/10 text-coffee-brown hover:bg-coffee-light/20'
              }`}
            >
              Workshops
            </button>
          </div>

          {/* Events Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredEvents.map(event => (
              <div key={event.id} className="card overflow-hidden">
                <div className="relative h-48">
                  <EventCard 
                    title={event.title}
                    date={event.date}
                    time={event.time}
                    location={event.location}
                    category={event.category}
                  />
                </div>
                <div className="p-5">
                  <h3 className="text-xl font-bold mb-2 text-coffee-brown">{event.title}</h3>
                  
                  <div className="flex items-center text-coffee-light mb-2">
                    <FaCalendarAlt className="mr-2" />
                    <span>{event.date}</span>
                  </div>
                  
                  <div className="flex items-center text-coffee-light mb-2">
                    <FaClock className="mr-2" />
                    <span>{event.time}</span>
                  </div>
                  
                  <div className="flex items-center text-coffee-light mb-4">
                    <FaMapMarkerAlt className="mr-2" />
                    <span>{event.location}</span>
                  </div>
                  
                  <p className="text-coffee-light mb-6 line-clamp-3">{event.description}</p>
                  
                  <div className="flex justify-between items-center">
                    <span className="inline-block px-3 py-1 bg-coffee-light/10 text-coffee-brown rounded-full text-sm">
                      {event.category.charAt(0).toUpperCase() + event.category.slice(1)}
                    </span>
                    <button className="text-matcha hover:text-coffee-brown transition-colors flex items-center">
                      Details
                      <FaArrowRight className="ml-1" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredEvents.length === 0 && (
            <div className="text-center py-12">
              <p className="text-coffee-light mb-4">No events found in this category</p>
              <button 
                onClick={() => setFilter('all')}
                className="btn-secondary"
              >
                View All Events
              </button>
            </div>
          )}

          {/* Host Event CTA */}
          <div className="mt-16 text-center">
            <div className="card max-w-2xl mx-auto p-8 bg-matcha/10">
              <h2 className="text-xl font-bold mb-4 text-coffee-brown">Want to host an event?</h2>
              <p className="mb-6 text-coffee-light">
                If you're interested in hosting an event for our community, we'd love to hear from you!
                Join our Discord server and reach out to the moderators.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="https://discord.com/api/oauth2/authorize?client_id=1346747859189633074&permissions=2147601408&scope=bot%20applications.commands"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-coffee-brown hover:bg-matcha text-white px-6 py-3 rounded-md inline-flex items-center justify-center transition-colors"
                >
                  <FaDiscord className="mr-2" />
                  Join Our Discord
                </a>
                <Link href="/contact" className="btn-secondary inline-flex items-center justify-center">
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
