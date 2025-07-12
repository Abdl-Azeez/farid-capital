import React from 'react';
import { Button } from "@/components/ui/button.jsx";

const insights = [
  {
    tag: 'News',
    title: 'The 2025 Capital Trends Every Investor Should Watch',
    desc: 'Stay ahead of the market with our expert analysis on the top trends shaping the capital investment landscape.',
    link: '#',
    img: '/insight1.jpg', // Replace with your actual image path
  },
  {
    tag: 'Blog',
    title: '5 Mistakes to Avoid When Structuring Business Capital',
    desc: 'A practical guide for business owners and financial teams.',
    link: '#',
    img: '/insight2.jpg',
  },
  {
    tag: 'Insight',
    title: 'Why Portfolio Diversification Still Wins in Volatile Markets”',
    desc: 'Our take on long-term risk protection strategies.',
    link: '#',
    img: '/insight3.jpg',
  },
];

const InsightsSection = () => (
  <section
    id="insights"
    className="pb-16 px-4 md:px-6 bg-transparent text-center"
    style={{
      backgroundImage: "url('/pattern-bg.png')", // Use the same pattern as ServicesSection
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }}
  >
    <h2 className="text-3xl md:text-4xl font-bold text-[#184734] mb-2">Insights and News</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8 max-w-7xl mx-auto">
      {insights.map((item, idx) => (
        <div key={item.title} className="bg-white rounded-lg shadow-md p-0 flex flex-col items-start overflow-hidden">
          <img src={item.img} alt={item.title} className="w-full h-40 object-cover object-center rounded-t-lg" />
          <div className="p-6 flex flex-col items-start w-full">
            <span className="bg-[#184734] text-white px-3 py-1 rounded mb-2 text-xs font-semibold">{item.tag}</span>
            <h3 className="font-bold text-lg mb-2 text-left">{item.title}</h3>
            <p className="mb-4 text-gray-700 text-left">{item.desc}</p>
            <a href={item.link} className="text-[#184734] font-semibold text-left">READ MORE</a>
          </div>
        </div>
      ))}
    </div>
    <div className="mt-8 flex justify-center">
      <Button className="bg-[#184734] text-white px-8 py-2 rounded hover:bg-[#256d4a] transition">More...</Button>
    </div>
  </section>
);

export default InsightsSection; 