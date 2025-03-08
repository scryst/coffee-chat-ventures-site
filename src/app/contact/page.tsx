"use client";

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { FaEnvelope, FaDiscord, FaInstagram, FaGithub } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto mb-12 text-center">
            <div className="inline-block mb-6">
              <div className="bg-matcha p-3 rounded-full shadow-lg">
                <FaEnvelope className="h-10 w-10 text-white" />
              </div>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-coffee-brown">Get in Touch</h1>
            <p className="text-coffee-light max-w-2xl mx-auto">
              Have questions about Coffee Chat Ventures or our Discord server? 
              We'd love to hear from you!
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="card text-center p-6 hover:shadow-lg transition-shadow">
              <div className="bg-[#5865F2]/10 p-4 rounded-full mx-auto mb-4 w-16 h-16 flex items-center justify-center">
                <FaDiscord className="h-8 w-8 text-[#5865F2]" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-coffee-brown">Discord</h3>
              <p className="text-coffee-light mb-4">
                Join our Discord server and message the moderators directly.
              </p>
              <a 
                href="https://discord.gg/KGE8BfruV4"
                target="_blank"
                rel="noopener noreferrer"
                className="text-matcha hover:text-coffee-brown transition-colors inline-flex items-center"
              >
                Join Our Discord
              </a>
            </div>
            
            <div className="card text-center p-6 hover:shadow-lg transition-shadow">
              <div className="bg-blue-100 p-4 rounded-full mx-auto mb-4 w-16 h-16 flex items-center justify-center">
                <FaEnvelope className="h-8 w-8 text-blue-500" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-coffee-brown">Email</h3>
              <p className="text-coffee-light mb-4">
                Send us an email directly and we'll get back to you as soon as possible.
              </p>
              <a 
                href="mailto:coffeechatventures@gmail.com"
                className="text-matcha hover:text-coffee-brown transition-colors inline-flex items-center"
              >
                coffeechatventures@gmail.com
              </a>
            </div>
            
            <div className="card text-center p-6 hover:shadow-lg transition-shadow">
              <div className="bg-gray-100 p-4 rounded-full mx-auto mb-4 w-16 h-16 flex items-center justify-center">
                <FaXTwitter className="h-8 w-8 text-gray-800" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-coffee-brown">X / Twitter</h3>
              <p className="text-coffee-light mb-4">
                Follow us on X for updates and reach out via direct message.
              </p>
              <a 
                href="https://twitter.com/CoffeeChatVent"
                target="_blank"
                rel="noopener noreferrer"
                className="text-matcha hover:text-coffee-brown transition-colors inline-flex items-center"
              >
                @CoffeeChatVent
              </a>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="card text-center p-6 hover:shadow-lg transition-shadow">
              <div className="bg-purple-100 p-4 rounded-full mx-auto mb-4 w-16 h-16 flex items-center justify-center">
                <FaInstagram className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-coffee-brown">Instagram</h3>
              <p className="text-coffee-light mb-4">
                Follow us on Instagram for visual updates and community highlights.
              </p>
              <a 
                href="https://instagram.com/coffeechatventures"
                target="_blank"
                rel="noopener noreferrer"
                className="text-matcha hover:text-coffee-brown transition-colors inline-flex items-center"
              >
                @coffeechatventures
              </a>
            </div>
            
            <div className="card text-center p-6 hover:shadow-lg transition-shadow">
              <div className="bg-gray-100 p-4 rounded-full mx-auto mb-4 w-16 h-16 flex items-center justify-center">
                <FaGithub className="h-8 w-8 text-gray-800" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-coffee-brown">GitHub</h3>
              <p className="text-coffee-light mb-4">
                Check out our open-source projects and contribute to our development.
              </p>
              <a 
                href="https://github.com/scryst"
                target="_blank"
                rel="noopener noreferrer"
                className="text-matcha hover:text-coffee-brown transition-colors inline-flex items-center"
              >
                @scryst
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
