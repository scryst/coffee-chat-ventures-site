"use client";

import Link from 'next/link';
import { FaCoffee, FaGithub, FaDiscord } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-coffee-brown/10 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="bg-coffee-brown p-2 rounded-full">
                <FaCoffee className="text-white h-5 w-5" />
              </div>
              <span className="font-bold text-lg text-coffee-brown">Coffee Chat</span>
            </Link>
            <p className="text-coffee-light text-sm">
              Bringing communities together over virtual coffee chats.
            </p>
            <div className="flex gap-4 mt-4">
              <a 
                href="https://x.com/scryst" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-coffee-light hover:text-coffee-brown transition-colors"
              >
                <FaXTwitter className="h-5 w-5" />
              </a>
              <a 
                href="https://github.com/scryst" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-coffee-light hover:text-coffee-brown transition-colors"
              >
                <FaGithub className="h-5 w-5" />
              </a>
              <a 
                href="https://discord.gg/KGE8BfruV4" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-coffee-light hover:text-coffee-brown transition-colors"
              >
                <FaDiscord className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div className="md:col-span-1">
            <h3 className="font-bold text-coffee-brown mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-coffee-light hover:text-coffee-brown transition-colors text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/channels" className="text-coffee-light hover:text-coffee-brown transition-colors text-sm">
                  Channels
                </Link>
              </li>
              <li>
                <Link href="/events" className="text-coffee-light hover:text-coffee-brown transition-colors text-sm">
                  Events
                </Link>
              </li>
              <li>
                <Link href="/coffee" className="text-coffee-light hover:text-coffee-brown transition-colors text-sm">
                  Coffee Bot
                </Link>
              </li>
            </ul>
          </div>

          <div className="md:col-span-1">
            <h3 className="font-bold text-coffee-brown mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/contact" className="text-coffee-light hover:text-coffee-brown transition-colors text-sm">
                  Contact Us
                </Link>
              </li>
              <li>
                <a 
                  href="https://discord.gg/KGE8BfruV4" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-coffee-light hover:text-coffee-brown transition-colors text-sm"
                >
                  Join Community
                </a>
              </li>
            </ul>
          </div>

          <div className="md:col-span-1">
            <h3 className="font-bold text-coffee-brown mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/privacy-policy" className="text-coffee-light hover:text-coffee-brown transition-colors text-sm">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms-of-service" className="text-coffee-light hover:text-coffee-brown transition-colors text-sm">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-coffee-brown/10 mt-12 pt-8 text-center">
          <p className="text-coffee-light text-sm">
            &copy; {currentYear} Coffee Chat Ventures. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
