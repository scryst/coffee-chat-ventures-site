"use client";

import Link from 'next/link';
import { FaCoffee, FaGithub, FaDiscord, FaEnvelope, FaInstagram } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-cream/70 py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-6">
              <div className="bg-matcha p-2 rounded-full">
                <FaCoffee className="text-white h-5 w-5" />
              </div>
              <span className="font-bold text-lg text-coffee-brown">Coffee Chat Ventures</span>
            </Link>
            <p className="text-coffee-light text-sm">
              Bringing communities together over virtual coffee chats.
            </p>
            <div className="flex gap-5 mt-6">
              <a 
                href="https://twitter.com/coffeechatvent" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-matcha hover:text-matcha-dark transition-colors"
                aria-label="Twitter/X"
              >
                <FaXTwitter className="h-5 w-5" />
              </a>
              <a 
                href="https://instagram.com/coffeechatventures" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-coffee-light hover:text-coffee-dark transition-colors"
                aria-label="Instagram"
              >
                <FaInstagram className="h-5 w-5" />
              </a>
              <a 
                href="https://github.com/scryst" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-cream-dark hover:text-coffee-brown transition-colors"
                aria-label="GitHub"
              >
                <FaGithub className="h-5 w-5" />
              </a>
              <a 
                href="https://discord.com/invite/KGE8BfruV4" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-matcha hover:text-matcha-dark transition-colors"
                aria-label="Discord"
              >
                <FaDiscord className="h-5 w-5" />
              </a>
              <a 
                href="mailto:coffeechatventures@gmail.com" 
                className="text-coffee-light hover:text-coffee-dark transition-colors"
                aria-label="Email"
              >
                <FaEnvelope className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div className="md:col-span-1">
            <h3 className="font-bold text-coffee-brown mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-coffee-light hover:text-matcha transition-colors text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/channels" className="text-coffee-light hover:text-matcha transition-colors text-sm">
                  Channels
                </Link>
              </li>
              <li>
                <Link href="/events" className="text-coffee-light hover:text-matcha transition-colors text-sm">
                  Events
                </Link>
              </li>
              <li>
                <Link href="/coffee" className="text-coffee-light hover:text-matcha transition-colors text-sm">
                  Coffee Bot
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-coffee-light hover:text-matcha transition-colors text-sm">
                  Contact
                </Link>
              </li>
              <li>
                <a 
                  href="https://discord.com/invite/KGE8BfruV4"
                  target="_blank"
                  rel="noopener noreferrer" 
                  className="text-coffee-light hover:text-matcha transition-colors text-sm"
                >
                  Join Discord
                </a>
              </li>
            </ul>
          </div>

          <div className="md:col-span-1">
            <h3 className="font-bold text-coffee-brown mb-6">Legal</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/privacy-policy" className="text-coffee-light hover:text-matcha transition-colors text-sm">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms-of-service" className="text-coffee-light hover:text-matcha transition-colors text-sm">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-coffee-brown/10 mt-10 pt-8 text-center">
          <p className="text-coffee-light text-sm">
            &copy; {currentYear} Coffee Chat Ventures. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
