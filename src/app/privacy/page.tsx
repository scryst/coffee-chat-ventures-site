"use client";

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function PrivacyPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-3xl font-bold mb-8 text-coffee-brown">Privacy Policy</h1>
          
          <div className="prose prose-coffee-brown max-w-none">
            <p className="text-coffee-light mb-6">
              Last Updated: March 7, 2025
            </p>
            
            <h2 className="text-xl font-bold mt-8 mb-4 text-coffee-brown">1. Introduction</h2>
            <p className="text-coffee-light mb-4">
              At Coffee Chat Ventures ("we," "our," or "us"), we respect your privacy and are committed to protecting it through our compliance with this policy. This Privacy Policy describes how we collect, use, and share information when you use our Coffee Bot Discord bot and our website at coffeechat.ventures (collectively, the "Services").
            </p>
            
            <h2 className="text-xl font-bold mt-8 mb-4 text-coffee-brown">2. Information We Collect</h2>
            <p className="text-coffee-light mb-4">
              We collect several types of information from and about users of our Services, including:
            </p>
            <ul className="list-disc pl-6 mb-4 text-coffee-light">
              <li className="mb-2">
                <strong>Discord User Information:</strong> When you use our Coffee Bot, we collect your Discord user ID, username, and server (guild) information to provide our Services.
              </li>
              <li className="mb-2">
                <strong>Server Information:</strong> We collect information about Discord servers where our bot is installed, including server IDs, channel names, role information, and member counts.
              </li>
              <li className="mb-2">
                <strong>Usage Data:</strong> We collect information about how you interact with our Services, including commands used, features accessed, and time spent using our Services.
              </li>
              <li className="mb-2">
                <strong>Website Data:</strong> When you visit our website, we automatically collect certain information about your device, including IP address, browser type, and operating system.
              </li>
            </ul>
            
            <h2 className="text-xl font-bold mt-8 mb-4 text-coffee-brown">3. How We Use Your Information</h2>
            <p className="text-coffee-light mb-4">
              We use the information we collect about you or that you provide to us:
            </p>
            <ul className="list-disc pl-6 mb-4 text-coffee-light">
              <li className="mb-2">To provide, maintain, and improve our Services</li>
              <li className="mb-2">To process and fulfill your requests, such as scheduling coffee chats or managing events</li>
              <li className="mb-2">To communicate with you about our Services, including updates and new features</li>
              <li className="mb-2">To monitor and analyze trends, usage, and activities in connection with our Services</li>
              <li className="mb-2">To detect, prevent, and address technical issues</li>
            </ul>
            
            <h2 className="text-xl font-bold mt-8 mb-4 text-coffee-brown">4. Sharing of Information</h2>
            <p className="text-coffee-light mb-4">
              We do not sell or rent your personal information to third parties. We may share your information in the following circumstances:
            </p>
            <ul className="list-disc pl-6 mb-4 text-coffee-light">
              <li className="mb-2">With service providers who perform services on our behalf</li>
              <li className="mb-2">To comply with any court order, law, or legal process</li>
              <li className="mb-2">To protect the rights, property, or safety of Coffee Chat Ventures, our users, or others</li>
              <li className="mb-2">In connection with a business transfer, such as a merger, acquisition, or asset sale</li>
            </ul>
            
            <h2 className="text-xl font-bold mt-8 mb-4 text-coffee-brown">5. Data Security</h2>
            <p className="text-coffee-light mb-4">
              We have implemented measures designed to secure your personal information from accidental loss and from unauthorized access, use, alteration, and disclosure. However, the transmission of information via the internet is not completely secure. We cannot guarantee the security of your personal information transmitted to our Services.
            </p>
            
            <h2 className="text-xl font-bold mt-8 mb-4 text-coffee-brown">6. Data Retention</h2>
            <p className="text-coffee-light mb-4">
              We will retain your personal information only for as long as reasonably necessary to fulfill the purposes for which it was collected, including for the purposes of satisfying any legal, regulatory, tax, accounting, or reporting requirements.
            </p>
            
            <h2 className="text-xl font-bold mt-8 mb-4 text-coffee-brown">7. Your Rights</h2>
            <p className="text-coffee-light mb-4">
              Depending on your location, you may have certain rights regarding your personal information, including:
            </p>
            <ul className="list-disc pl-6 mb-4 text-coffee-light">
              <li className="mb-2">The right to access your personal information</li>
              <li className="mb-2">The right to correct inaccurate personal information</li>
              <li className="mb-2">The right to request deletion of your personal information</li>
              <li className="mb-2">The right to restrict or object to processing of your personal information</li>
              <li className="mb-2">The right to data portability</li>
            </ul>
            <p className="text-coffee-light mb-4">
              To exercise these rights, please contact us at <a href="mailto:privacy@coffeechat.ventures" className="text-matcha hover:underline">privacy@coffeechat.ventures</a>.
            </p>
            
            <h2 className="text-xl font-bold mt-8 mb-4 text-coffee-brown">8. Children's Privacy</h2>
            <p className="text-coffee-light mb-4">
              Our Services are not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13. If you are under 13, do not use or provide any information on our Services.
            </p>
            
            <h2 className="text-xl font-bold mt-8 mb-4 text-coffee-brown">9. Changes to Our Privacy Policy</h2>
            <p className="text-coffee-light mb-4">
              We may update our Privacy Policy from time to time. If we make material changes to how we treat our users' personal information, we will notify you through a notice on our website or through the Discord bot.
            </p>
            
            <h2 className="text-xl font-bold mt-8 mb-4 text-coffee-brown">10. Contact Information</h2>
            <p className="text-coffee-light mb-4">
              To ask questions or comment about this Privacy Policy and our privacy practices, contact us at <a href="mailto:privacy@coffeechat.ventures" className="text-matcha hover:underline">privacy@coffeechat.ventures</a>.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
