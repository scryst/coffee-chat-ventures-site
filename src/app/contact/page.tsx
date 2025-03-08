"use client";

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { FaEnvelope, FaDiscord, FaTwitter, FaGithub, FaPaperPlane } from 'react-icons/fa';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [formStatus, setFormStatus] = useState<{
    submitted: boolean;
    success: boolean;
    message: string;
  }>({
    submitted: false,
    success: false,
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    setFormStatus({
      submitted: true,
      success: false,
      message: 'Sending your message...'
    });
    
    // In a real implementation, you would send the form data to your backend
    // For now, we'll simulate a successful submission after a delay
    setTimeout(() => {
      setFormStatus({
        submitted: true,
        success: true,
        message: 'Your message has been sent successfully! We\'ll get back to you soon.'
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    }, 1500);
  };

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
                href="https://discord.com/api/oauth2/authorize?client_id=1346747859189633074&permissions=2147601408&scope=bot%20applications.commands"
                target="_blank"
                rel="noopener noreferrer"
                className="text-matcha hover:text-coffee-brown transition-colors inline-flex items-center"
              >
                Join Our Discord
              </a>
            </div>
            
            <div className="card text-center p-6 hover:shadow-lg transition-shadow">
              <div className="bg-blue-100 p-4 rounded-full mx-auto mb-4 w-16 h-16 flex items-center justify-center">
                <FaTwitter className="h-8 w-8 text-blue-400" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-coffee-brown">Twitter</h3>
              <p className="text-coffee-light mb-4">
                Follow us on Twitter for updates and reach out via DM.
              </p>
              <a 
                href="https://twitter.com/coffeechatventures"
                target="_blank"
                rel="noopener noreferrer"
                className="text-matcha hover:text-coffee-brown transition-colors inline-flex items-center"
              >
                @coffeechatventures
              </a>
            </div>
            
            <div className="card text-center p-6 hover:shadow-lg transition-shadow">
              <div className="bg-gray-100 p-4 rounded-full mx-auto mb-4 w-16 h-16 flex items-center justify-center">
                <FaGithub className="h-8 w-8 text-gray-700" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-coffee-brown">GitHub</h3>
              <p className="text-coffee-light mb-4">
                Check out our open source projects and contribute.
              </p>
              <a 
                href="https://github.com/scryst"
                target="_blank"
                rel="noopener noreferrer"
                className="text-matcha hover:text-coffee-brown transition-colors inline-flex items-center"
              >
                View GitHub
              </a>
            </div>
          </div>

          <div className="card max-w-2xl mx-auto p-8">
            <h2 className="text-2xl font-bold mb-6 text-coffee-brown text-center">Send Us a Message</h2>
            
            {formStatus.submitted && formStatus.success ? (
              <div className="bg-green-50 text-green-700 p-4 rounded-lg text-center">
                <p>{formStatus.message}</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className="block text-coffee-brown mb-2">Your Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full p-3 rounded-lg border border-coffee-light/30 focus:border-matcha focus:ring-2 focus:ring-matcha/20 outline-none"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-coffee-brown mb-2">Your Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full p-3 rounded-lg border border-coffee-light/30 focus:border-matcha focus:ring-2 focus:ring-matcha/20 outline-none"
                      required
                    />
                  </div>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="subject" className="block text-coffee-brown mb-2">Subject</label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full p-3 rounded-lg border border-coffee-light/30 focus:border-matcha focus:ring-2 focus:ring-matcha/20 outline-none"
                    required
                  >
                    <option value="">Select a subject</option>
                    <option value="general">General Inquiry</option>
                    <option value="support">Bot Support</option>
                    <option value="feedback">Feedback</option>
                    <option value="partnership">Partnership Opportunity</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-coffee-brown mb-2">Your Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className="w-full p-3 rounded-lg border border-coffee-light/30 focus:border-matcha focus:ring-2 focus:ring-matcha/20 outline-none"
                    required
                  ></textarea>
                </div>
                
                <button 
                  type="submit" 
                  className="bg-matcha hover:bg-matcha/90 text-white px-6 py-3 rounded-md inline-flex items-center transition-colors"
                  disabled={formStatus.submitted && !formStatus.success}
                >
                  {formStatus.submitted && !formStatus.success ? (
                    <>
                      <span className="animate-spin mr-2">⟳</span>
                      Sending...
                    </>
                  ) : (
                    <>
                      <FaPaperPlane className="mr-2" />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
