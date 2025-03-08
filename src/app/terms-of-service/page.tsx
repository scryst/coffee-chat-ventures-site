"use client";

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { FaFileContract } from 'react-icons/fa';

export default function TermsOfServicePage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto mb-12 text-center">
            <div className="inline-block mb-6">
              <div className="bg-coffee-brown p-3 rounded-full shadow-lg">
                <FaFileContract className="h-10 w-10 text-white" />
              </div>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-coffee-brown">Terms of Service</h1>
            <p className="text-coffee-light max-w-2xl mx-auto">
              Last Updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </div>

          <div className="card max-w-4xl mx-auto">
            <div className="prose prose-coffee max-w-none">
              <h2>Agreement to Terms</h2>
              <p>
                These Terms of Service ("Terms") govern your access to and use of the Coffee Bot and the Coffee Chat Ventures website 
                (collectively, the "Services"). By using our Services, you agree to be bound by these Terms. If you do not agree to these Terms, 
                please do not use our Services.
              </p>
              
              <h2>Changes to Terms</h2>
              <p>
                We may modify these Terms at any time. If we make changes, we will provide notice by updating the date at the top of these Terms. 
                Your continued use of our Services after any changes confirms your acceptance of the new Terms.
              </p>
              
              <h2>Using Our Services</h2>
              <h3>Eligibility</h3>
              <p>
                You must be at least 13 years old to use our Services. By using our Services, you represent and warrant that you meet this requirement.
              </p>
              
              <h3>Discord Account</h3>
              <p>
                To use the Coffee Bot, you need a Discord account. You are responsible for maintaining the confidentiality of your Discord account 
                and for all activities that occur under your account.
              </p>
              
              <h3>Coffee Bot Usage</h3>
              <p>
                Our Coffee Bot facilitates connections between Discord users for networking purposes. When using the Coffee Bot, you agree to:
              </p>
              <ul>
                <li>Use the bot in compliance with Discord's Terms of Service and Community Guidelines</li>
                <li>Not use the bot for spamming, harassment, or any illegal activities</li>
                <li>Not attempt to manipulate, reverse engineer, or exploit the bot</li>
                <li>Respect the privacy and boundaries of other users during coffee chats</li>
              </ul>
              
              <h2>User Content</h2>
              <p>
                Our Services may allow you to provide content, such as coffee chat topics and descriptions. You retain ownership of any intellectual property 
                rights in such content. By providing content, you grant us a worldwide, royalty-free license to use, reproduce, modify, adapt, publish, 
                translate, and distribute it in connection with our Services.
              </p>
              <p>
                You are solely responsible for the content you provide and interactions you have through our Services. Content must not violate any laws 
                or third-party rights.
              </p>
              
              <h2>Prohibited Activities</h2>
              <p>You agree not to:</p>
              <ul>
                <li>Use our Services for any illegal purpose or in violation of any laws</li>
                <li>Interfere with or disrupt our Services or servers</li>
                <li>Attempt to gain unauthorized access to our Services</li>
                <li>Use our Services to harm, threaten, or harass others</li>
                <li>Engage in fraudulent or deceptive conduct</li>
                <li>Collect or store personal data about other users without their consent</li>
                <li>Use our Services for commercial purposes without our prior written consent</li>
              </ul>
              
              <h2>Intellectual Property</h2>
              <p>
                The Coffee Bot, website, and related content are owned by Coffee Chat Ventures and are protected by copyright, trademark, and other laws. 
                Nothing in these Terms gives you a right to use our name, logos, domain names, or other distinctive brand features without our prior written consent.
              </p>
              
              <h2>Termination</h2>
              <p>
                We may suspend or terminate your access to our Services at any time, for any reason, without notice. You may stop using our Services at any time.
              </p>
              
              <h2>Disclaimer of Warranties</h2>
              <p>
                OUR SERVICES ARE PROVIDED "AS IS" WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED. WE DISCLAIM ALL WARRANTIES, INCLUDING IMPLIED 
                WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.
              </p>
              
              <h2>Limitation of Liability</h2>
              <p>
                TO THE MAXIMUM EXTENT PERMITTED BY LAW, IN NO EVENT WILL COFFEE CHAT VENTURES, ITS AFFILIATES, DIRECTORS, EMPLOYEES, OR AGENTS BE LIABLE 
                FOR ANY INDIRECT, PUNITIVE, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR EXEMPLARY DAMAGES ARISING OUT OF OR IN CONNECTION WITH THESE TERMS OR 
                THE USE OF OR INABILITY TO USE OUR SERVICES.
              </p>
              
              <h2>Indemnity</h2>
              <p>
                You agree to indemnify and hold harmless Coffee Chat Ventures and its officers, directors, employees, and agents from any claims, damages, 
                losses, liabilities, and expenses (including attorneys' fees) arising out of or in connection with your use of our Services or violation of these Terms.
              </p>
              
              <h2>Governing Law</h2>
              <p>
                These Terms shall be governed by the laws of the United States without regard to its conflict of law provisions.
              </p>
              
              <h2>Entire Agreement</h2>
              <p>
                These Terms constitute the entire agreement between you and Coffee Chat Ventures regarding our Services and supersede all prior agreements.
              </p>
              
              <h2>Contact Us</h2>
              <p>
                If you have any questions about these Terms, please contact us at:
              </p>
              <p>
                Email: legal@coffeechatventures.com<br />
                Discord: Join our community server and message the administrators
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
