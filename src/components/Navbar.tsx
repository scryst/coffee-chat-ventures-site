import { useState, useEffect } from 'react';
import Link from 'next/link';
import { FaCoffee, FaBars, FaTimes } from 'react-icons/fa';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'py-2 bg-white shadow-md' 
          : 'py-4 bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <div className="bg-coffee-brown p-2 rounded-full mr-2">
              <FaCoffee className="text-white text-xl" />
            </div>
            <span className="font-bold text-xl text-coffee-brown">Coffee Chat Ventures</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            <Link href="/" className="text-coffee-brown hover:text-matcha transition-colors">
              Home
            </Link>
            <Link href="/channels" className="text-coffee-brown hover:text-matcha transition-colors">
              Channels
            </Link>
            <Link href="/events" className="text-coffee-brown hover:text-matcha transition-colors">
              Events
            </Link>
            <Link href="/coffee" className="text-coffee-brown hover:text-matcha transition-colors">
              Coffee Bot
            </Link>
            <Link href="/contact" className="text-coffee-brown hover:text-matcha transition-colors">
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-coffee-brown focus:outline-none"
            >
              {isMenuOpen ? (
                <FaTimes className="h-6 w-6" />
              ) : (
                <FaBars className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out ${
          isMenuOpen
            ? 'max-h-96 opacity-100'
            : 'max-h-0 opacity-0 pointer-events-none'
        } overflow-hidden bg-white`}
      >
        <div className="container mx-auto px-4 py-4 space-y-4">
          <Link 
            href="/" 
            className="block text-coffee-brown hover:text-matcha transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </Link>
          <Link 
            href="/channels" 
            className="block text-coffee-brown hover:text-matcha transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Channels
          </Link>
          <Link 
            href="/events" 
            className="block text-coffee-brown hover:text-matcha transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Events
          </Link>
          <Link 
            href="/coffee" 
            className="block text-coffee-brown hover:text-matcha transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Coffee Bot
          </Link>
          <Link 
            href="/contact" 
            className="block text-coffee-brown hover:text-matcha transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Contact
          </Link>
          <div className="pt-4 border-t border-gray-200">
            <a 
              href="https://discord.com/api/oauth2/authorize?client_id=1346747859189633074&permissions=2147601408&scope=bot%20applications.commands"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-coffee-brown hover:bg-matcha text-white px-4 py-2 rounded-md inline-flex items-center transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Join Discord
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
