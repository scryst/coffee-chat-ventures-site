"use client";

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function TermsPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-3xl font-bold mb-8 text-coffee-brown">Terms of Service</h1>
          
          <div className="prose prose-coffee-brown max-w-none">
            <p className="text-coffee-light mb-6">
              Last Updated: March 7, 2025
            </p>
            
            <h2 className="text-xl font-bold mt-8 mb-4 text-coffee-brown">1. Introduction</h2>
            <p className="text-coffee-light mb-4">
              Welcome to Coffee Chat Ventures ("we," "our," or "us"). These Terms of Service ("Terms") govern your access to and use of the Coffee Bot Discord bot and our website at coffeechat.ventures (collectively, the "Services").
            </p>
            <p className="text-coffee-light mb-4">
              By using our Services, you agree to these Terms. If you don't agree to these Terms, you may not use the Services.
            </p>
            
            <h2 className="text-xl font-bold mt-8 mb-4 text-coffee-brown">2. Using Our Services</h2>
            <p className="text-coffee-light mb-4">
              You may use our Services only as permitted by these Terms and any applicable laws. Don't misuse our Services. For example, don't interfere with our Services or try to access them using a method other than the interface and the instructions that we provide.
            </p>
            
            <h2 className="text-xl font-bold mt-8 mb-4 text-coffee-brown">3. Your Discord Account</h2>
            <p className="text-coffee-light mb-4">
              To use our Coffee Bot, you need a Discord account. You are responsible for maintaining the security of your Discord account and for all activities that occur under your account.
            </p>
            
            <h2 className="text-xl font-bold mt-8 mb-4 text-coffee-brown">4. Privacy</h2>
            <p className="text-coffee-light mb-4">
              Our <Link href="/privacy" className="text-matcha hover:underline">Privacy Policy</Link> explains how we treat your personal data and protect your privacy when you use our Services. By using our Services, you agree that we can use such data in accordance with our Privacy Policy.
            </p>
            
            <h2 className="text-xl font-bold mt-8 mb-4 text-coffee-brown">5. Content</h2>
            <p className="text-coffee-light mb-4">
              Our Services allow you to create, upload, store, send, and share content. You retain ownership of any intellectual property rights that you hold in that content.
            </p>
            <p className="text-coffee-light mb-4">
              When you upload, submit, store, send, or receive content to or through our Services, you give us a worldwide license to use, host, store, reproduce, modify, create derivative works, communicate, publish, publicly perform, publicly display and distribute such content. The rights you grant in this license are for the limited purpose of operating, promoting, and improving our Services, and to develop new ones.
            </p>
            
            <h2 className="text-xl font-bold mt-8 mb-4 text-coffee-brown">6. Prohibited Uses</h2>
            <p className="text-coffee-light mb-4">
              You may not use our Services:
            </p>
            <ul className="list-disc pl-6 mb-4 text-coffee-light">
              <li className="mb-2">In any way that violates any applicable federal, state, local, or international law or regulation</li>
              <li className="mb-2">To transmit, or procure the sending of, any advertising or promotional material, including any "junk mail," "chain letter," "spam," or any other similar solicitation</li>
              <li className="mb-2">To impersonate or attempt to impersonate Coffee Chat Ventures, a Coffee Chat Ventures employee, another user, or any other person or entity</li>
              <li className="mb-2">To engage in any other conduct that restricts or inhibits anyone's use or enjoyment of the Services, or which, as determined by us, may harm Coffee Chat Ventures or users of the Services or expose them to liability</li>
            </ul>
            
            <h2 className="text-xl font-bold mt-8 mb-4 text-coffee-brown">7. Termination</h2>
            <p className="text-coffee-light mb-4">
              We may terminate or suspend your access to all or part of our Services, without notice, for any conduct that we, in our sole discretion, believe is in violation of these Terms or is harmful to other users of the Services, us, or third parties, or for any other reason.
            </p>
            
            <h2 className="text-xl font-bold mt-8 mb-4 text-coffee-brown">8. Disclaimer of Warranties</h2>
            <p className="text-coffee-light mb-4">
              YOUR USE OF THE SERVICES IS AT YOUR SOLE RISK. THE SERVICES ARE PROVIDED ON AN "AS IS" AND "AS AVAILABLE" BASIS. COFFEE CHAT VENTURES EXPRESSLY DISCLAIMS ALL WARRANTIES OF ANY KIND, WHETHER EXPRESS OR IMPLIED.
            </p>
            
            <h2 className="text-xl font-bold mt-8 mb-4 text-coffee-brown">9. Limitation of Liability</h2>
            <p className="text-coffee-light mb-4">
              IN NO EVENT WILL COFFEE CHAT VENTURES, ITS AFFILIATES, OR THEIR LICENSORS, SERVICE PROVIDERS, EMPLOYEES, AGENTS, OFFICERS, OR DIRECTORS BE LIABLE FOR DAMAGES OF ANY KIND, UNDER ANY LEGAL THEORY, ARISING OUT OF OR IN CONNECTION WITH YOUR USE, OR INABILITY TO USE, THE SERVICES.
            </p>
            
            <h2 className="text-xl font-bold mt-8 mb-4 text-coffee-brown">10. Changes to the Terms</h2>
            <p className="text-coffee-light mb-4">
              We may revise and update these Terms from time to time in our sole discretion. All changes are effective immediately when we post them. Your continued use of the Services following the posting of revised Terms means that you accept and agree to the changes.
            </p>
            
            <h2 className="text-xl font-bold mt-8 mb-4 text-coffee-brown">11. Contact Information</h2>
            <p className="text-coffee-light mb-4">
              Questions about the Terms should be sent to us at <a href="mailto:contact@coffeechat.ventures" className="text-matcha hover:underline">contact@coffeechat.ventures</a>.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
