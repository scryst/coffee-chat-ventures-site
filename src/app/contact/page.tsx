"use client";

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { FaEnvelope, FaDiscord, FaInstagram, FaGithub } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { motion } from 'framer-motion';
import AnimatedSphere from '@/components/AnimatedSphere';

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      
      <section className="relative pt-32 pb-20 overflow-hidden">
        {/* Background animations */}
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
            className="max-w-4xl mx-auto mb-12 text-center"
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
                <FaEnvelope className="h-10 w-10 text-white" />
              </div>
            </motion.div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-coffee-brown">Get in Touch</h1>
            <p className="text-coffee-light max-w-2xl mx-auto">
              Have questions about Coffee Chat Ventures or our Discord server? 
              We'd love to hear from you!
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {[
              {
                icon: <FaEnvelope className="h-6 w-6 text-white" />,
                bgColor: "bg-matcha",
                title: "Email",
                description: "Send us an email and we'll get back to you as soon as possible.",
                link: "mailto:coffeechatventures@gmail.com",
                linkText: "coffeechatventures@gmail.com"
              },
              {
                icon: <FaDiscord className="h-6 w-6 text-white" />,
                bgColor: "bg-coffee-light",
                title: "Discord",
                description: "Join our Discord server to connect with the community.",
                link: "https://discord.com/invite/KGE8BfruV4",
                linkText: "Join our Discord"
              },
              {
                icon: <FaXTwitter className="h-6 w-6 text-white" />,
                bgColor: "bg-cream-dark",
                title: "X / Twitter",
                description: "Follow us on X for updates and reach out via direct message.",
                link: "https://twitter.com/coffeechatvent",
                linkText: "@coffeechatvent"
              }
            ].map((item, index) => (
              <motion.div 
                key={index}
                className="bg-white rounded-lg shadow-sm p-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 * index }}
              >
                <div className={`${item.bgColor} w-12 h-12 rounded-full flex items-center justify-center mb-4`}>
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold mb-2 text-coffee-brown">
                  {item.title}
                </h3>
                <p className="text-coffee-light mb-4">
                  {item.description}
                </p>
                <motion.a 
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-matcha hover:text-matcha-dark transition-colors inline-flex items-center"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item.linkText}
                </motion.a>
              </motion.div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            {[
              {
                icon: <FaInstagram className="h-6 w-6 text-white" />,
                bgColor: "bg-coffee-light",
                title: "Instagram",
                description: "Follow us on Instagram for visual updates and community highlights.",
                link: "https://instagram.com/coffeechatventures",
                linkText: "@coffeechatventures"
              },
              {
                icon: <FaGithub className="h-6 w-6 text-white" />,
                bgColor: "bg-matcha",
                title: "GitHub",
                description: "Check out our open-source projects and contribute to our development.",
                link: "https://github.com/scryst",
                linkText: "@scryst"
              }
            ].map((item, index) => (
              <motion.div 
                key={index}
                className="bg-white rounded-lg shadow-sm p-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 * index }}
              >
                <div className={`${item.bgColor} w-12 h-12 rounded-full flex items-center justify-center mb-4`}>
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold mb-2 text-coffee-brown">
                  {item.title}
                </h3>
                <p className="text-coffee-light mb-4">
                  {item.description}
                </p>
                <motion.a 
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-matcha hover:text-matcha-dark transition-colors inline-flex items-center"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item.linkText}
                </motion.a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
