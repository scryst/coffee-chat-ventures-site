"use client";

import { FaCoffee, FaUsers, FaCalendarAlt, FaComments, FaSpinner } from 'react-icons/fa';

interface CoffeeFeaturesProps {
  coffeeData: any;
  isLoading: boolean;
  error: string | null;
}

const CoffeeFeatures = ({ coffeeData, isLoading, error }: CoffeeFeaturesProps) => {
  const features = [
    {
      icon: <FaCoffee className="h-10 w-10 text-matcha" />,
      title: "Coffee Chats",
      description: "Schedule and manage virtual coffee chats between community members to foster connections and meaningful conversations."
    },
    {
      icon: <FaUsers className="h-10 w-10 text-matcha" />,
      title: "Community Building",
      description: "Create a welcoming atmosphere with custom welcome messages, role assignments, and community engagement tools."
    },
    {
      icon: <FaCalendarAlt className="h-10 w-10 text-matcha" />,
      title: "Event Management",
      description: "Easily create, schedule, and manage community events with automated reminders and RSVP tracking."
    },
    {
      icon: <FaComments className="h-10 w-10 text-matcha" />,
      title: "Conversation Starters",
      description: "Keep conversations flowing with thoughtful prompts and icebreakers tailored to your community's interests."
    }
  ];

  return (
    <div>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((feature, index) => (
          <div key={index} className="card hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
            <div className="mb-4">{feature.icon}</div>
            <h3 className="text-xl font-bold mb-2 text-coffee-brown">{feature.title}</h3>
            <p className="text-coffee-light">{feature.description}</p>
          </div>
        ))}
      </div>

      {/* Bot Status Section */}
      <div className="mt-16 card">
        <h3 className="text-xl font-bold mb-4 text-coffee-brown">Coffee Bot Status</h3>
        
        {isLoading ? (
          <div className="flex items-center justify-center py-8">
            <FaSpinner className="animate-spin h-8 w-8 text-matcha" />
            <span className="ml-3 text-coffee-light">Brewing coffee data...</span>
          </div>
        ) : error ? (
          <div className="bg-red-50 text-red-700 p-4 rounded-lg">
            <p>{error}</p>
            <p className="text-sm mt-2">Don't worry, our baristas are working on fixing this!</p>
          </div>
        ) : coffeeData ? (
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center p-4 bg-latte/20 rounded-lg">
              <h4 className="font-bold text-coffee-brown">Bot Version</h4>
              <p className="text-2xl text-matcha">{coffeeData.version || "1.0.0"}</p>
            </div>
            <div className="text-center p-4 bg-latte/20 rounded-lg">
              <h4 className="font-bold text-coffee-brown">Servers</h4>
              <p className="text-2xl text-matcha">{coffeeData.serverCount || "10+"}</p>
            </div>
            <div className="text-center p-4 bg-latte/20 rounded-lg">
              <h4 className="font-bold text-coffee-brown">Status</h4>
              <p className="text-2xl text-matcha">{coffeeData.status || "Online"}</p>
            </div>
          </div>
        ) : (
          <p className="text-coffee-light text-center py-4">No coffee data available at the moment.</p>
        )}
      </div>
    </div>
  );
};

export default CoffeeFeatures;
