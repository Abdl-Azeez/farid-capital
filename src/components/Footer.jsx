import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import { Button } from "@/components/ui/button.jsx";

const Footer = () => (
  <footer
    className="relative pt-12 pb-0"
    style={{
      background: 'linear-gradient(135deg, #256d4a 0%, #1a2a2e 100%)',
      backgroundImage: "url('/footer-pattern.png')", // Place your pattern in public/
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }}
  >
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-10 px-6 pb-10">
      {/* Left: Logo and Socials */}
      <div className="flex flex-col items-start gap-6 min-w-[220px]">
        <div className="flex items-center gap-3 mb-2">
          <img src="/logo.svg" alt="Farid Capital Logo" className="h-14 w-14" />
          <span className="font-heading text-2xl font-bold text-white">FARID <span className="text-[#F4B13D]">CAPITAL</span></span>
        </div>
        <div className="flex gap-4 mt-2">
          <a href="#" className="bg-white rounded-full w-10 h-10 flex items-center justify-center"><Facebook className="h-5 w-5 text-[#184734]" /></a>
          <a href="#" className="bg-white rounded-full w-10 h-10 flex items-center justify-center"><Twitter className="h-5 w-5 text-[#184734]" /></a>
          <a href="#" className="bg-white rounded-full w-10 h-10 flex items-center justify-center"><Instagram className="h-5 w-5 text-[#184734]" /></a>
          <a href="#" className="bg-white rounded-full w-10 h-10 flex items-center justify-center"><Linkedin className="h-5 w-5 text-[#184734]" /></a>
        </div>
      </div>
      {/* Center: Links */}
      <div className="flex-1 grid grid-cols-2 gap-10 min-w-[320px]">
        <div>
          <h4 className="font-bold text-white text-lg mb-3">Useful Links</h4>
          <ul className="space-y-1 text-white/90">
            <li><a href="#contact" className="hover:underline">Contact Us</a></li>
            <li><a href="#contact" className="hover:underline">Get in Touch</a></li>
            <li><a href="#" className="hover:underline">FAQs</a></li>
            <li><a href="#about" className="hover:underline">About Us</a></li>
            <li><a href="#services" className="hover:underline">Our Services</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-white text-lg mb-3">Our Services</h4>
          <ul className="space-y-1 text-white/90">
            <li>Investment Advisory</li>
            <li>Asset Management</li>
            <li>Capital Structuring</li>
            <li>Risk Management Advisory</li>
          </ul>
        </div>
      </div>
      {/* Right: Newsletter */}
      <div className="flex flex-col gap-4 min-w-[320px] w-full md:w-auto">
        <h4 className="font-bold text-white text-lg mb-3">Sign Up For Our Newsletter</h4>
        <form className="flex flex-col gap-3 w-full">
          <input type="email" placeholder="Email" className="p-3 rounded bg-white text-gray-900 w-full" />
          <Button className="bg-[#184734] text-white px-8 py-2 rounded hover:bg-[#256d4a] transition font-semibold w-full md:w-auto">Submit</Button>
        </form>
      </div>
    </div>
    {/* Bottom bar */}
    <div className="bg-[#23272a] py-4 text-center text-white text-sm mt-0">
      Copyright 2025, All Rights Reserved 313 Studio
    </div>
  </footer>
);

export default Footer; 