"use client";

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { FaShieldAlt } from 'react-icons/fa';

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto mb-12 text-center">
            <div className="inline-block mb-6">
              <div className="bg-coffee-brown p-3 rounded-full shadow-lg">
                <FaShieldAlt className="h-10 w-10 text-white" />
              </div>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-coffee-brown">Privacy Policy</h1>
            <p className="text-coffee-light max-w-2xl mx-auto">
              Last Updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </div>

          <div className="card max-w-4xl mx-auto">
            <div className="prose prose-coffee max-w-none">
              <h2>Introduction</h2>
              <p>
                Coffee Chat Ventures ("we," "our," or "us") respects your privacy and is committed to protecting your personal data. 
                This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our Coffee Bot 
                on Discord or visit our website at coffeechatventures.com.
              </p>
              
              <h2>Information We Collect</h2>
              <p>We collect the following types of information:</p>
              <ul>
                <li><strong>Discord User Information:</strong> When you use our Coffee Bot, we collect your Discord user ID, username, and discriminator.</li>
                <li><strong>Chat Data:</strong> We collect data about coffee chats, including participants, duration, and topics (but not the content of private conversations).</li>
                <li><strong>Server Information:</strong> We collect Discord server IDs where our bot is installed.</li>
                <li><strong>Usage Data:</strong> We collect information about how you interact with our bot, including commands used and features accessed.</li>
                <li><strong>Website Data:</strong> When you visit our website, we collect standard log information and details of your visit patterns.</li>
              </ul>
              
              <h2>How We Use Your Information</h2>
              <p>We use the information we collect to:</p>
              <ul>
                <li>Provide, maintain, and improve our Coffee Bot services</li>
                <li>Create and manage coffee chat connections between users</li>
                <li>Generate anonymous statistics about bot usage</li>
                <li>Respond to your requests or inquiries</li>
                <li>Prevent fraud and abuse of our services</li>
                <li>Comply with legal obligations</li>
              </ul>
              
              <h2>Data Sharing and Disclosure</h2>
              <p>We do not sell your personal information. We may share your information in the following circumstances:</p>
              <ul>
                <li>With service providers who help us operate our services</li>
                <li>To comply with legal obligations</li>
                <li>To protect our rights, privacy, safety, or property</li>
                <li>In connection with a business transfer (e.g., merger or acquisition)</li>
              </ul>
              
              <h2>Data Retention</h2>
              <p>
                We retain your personal information for as long as necessary to provide our services and fulfill the purposes outlined in this Privacy Policy.
                You can request deletion of your data by contacting us.
              </p>
              
              <h2>Your Rights</h2>
              <p>Depending on your location, you may have the following rights:</p>
              <ul>
                <li>Access the personal information we hold about you</li>
                <li>Correct inaccurate or incomplete information</li>
                <li>Request deletion of your personal information</li>
                <li>Object to or restrict certain processing of your data</li>
                <li>Data portability</li>
              </ul>
              
              <h2>Security</h2>
              <p>
                We implement appropriate technical and organizational measures to protect your personal information. 
                However, no method of transmission over the Internet or electronic storage is 100% secure, so we cannot guarantee absolute security.
              </p>
              
              <h2>Children's Privacy</h2>
              <p>
                Our services are not intended for individuals under the age of 13. We do not knowingly collect personal information from children under 13.
                If we learn we have collected personal information from a child under 13, we will delete that information.
              </p>
              
              <h2>Changes to This Privacy Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page
                and updating the "Last Updated" date.
              </p>
              
              <h2>Contact Us</h2>
              <p>
                If you have any questions about this Privacy Policy, please contact us at:
              </p>
              <p>
                Email: privacy@coffeechatventures.com<br />
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
