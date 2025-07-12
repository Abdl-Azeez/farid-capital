import React from 'react';
import { Mail, MapPin, Phone } from 'lucide-react';
import { Button } from "@/components/ui/button.jsx";

const contactInfo = [
  {
    icon: <MapPin size={32} className="text-white" />, label: 'Contact Address', value: 'No 5, Wuse Abuja',
  },
  {
    icon: <Phone size={32} className="text-white" />, label: 'Contact Number', value: '123.456.7890\n123.456.7890',
  },
  {
    icon: <Mail size={32} className="text-white" />, label: 'Email', value: 'info@faridcapital.com',
  },
];

const ContactSection = () => (
  <section id="contact" className="bg-[#55585b] text-white py-20 px-4 md:px-0">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-12 items-start">
      {/* Left: Contact Info */}
      <div className="flex-1 flex flex-col justify-center items-start md:pl-8">
        <h2 className="text-4xl font-bold mb-12">Contact Us</h2>
        <div className="flex flex-col gap-10 w-full">
          {contactInfo.map((item, idx) => (
            <div key={item.label} className="flex items-center gap-6">
              <div className="bg-[#184734] rounded w-16 h-16 flex items-center justify-center">
                {item.icon}
              </div>
              <div className="flex flex-col items-start">
                <span className="font-bold text-lg mb-1">{item.label}</span>
                <span className="text-gray-200 whitespace-pre-line">{item.value}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Right: Contact Form */}
      <form className="flex-1 flex flex-col gap-6 max-w-xl w-full mx-auto">
        <div className="mb-2">
          <p className="text-white text-base mb-1">We will like to hear from you,</p>
          <p className="text-white text-base">Drop your message here.</p>
        </div>
        <div className="flex flex-col md:flex-row gap-4">
          <input type="text" placeholder="Name *" className="flex-1 p-3 rounded bg-[#f3f4f6] text-gray-900" required />
          <input type="email" placeholder="Email *" className="flex-1 p-3 rounded bg-[#f3f4f6] text-gray-900" required />
        </div>
        <div className="flex flex-col md:flex-row gap-4">
          <input type="text" placeholder="Phone *" className="flex-1 p-3 rounded bg-[#f3f4f6] text-gray-900" required />
          <input type="text" placeholder="Subject" className="flex-1 p-3 rounded bg-[#f3f4f6] text-gray-900" />
        </div>
        <textarea placeholder="Message..." className="p-3 rounded bg-[#f3f4f6] text-gray-900 min-h-[120px]" required></textarea>
        <Button className="bg-[#184734] text-white w-full py-3 rounded text-lg font-semibold hover:bg-[#256d4a] transition">Send</Button>
      </form>
    </div>
  </section>
);

export default ContactSection; 