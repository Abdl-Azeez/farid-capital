import React from 'react';
import { User, BadgePercent, AlertCircle } from 'lucide-react';

const features = [
  {
    icon: <User className="text-[#184734]" size={40} />, // Ethical
    title: 'Ethical and Responsible Investing',
    desc: 'Investments are filtered to avoid industries like alcohol, gambling, weapons, and interest-based finance—ensuring moral alignment for investors seeking value-driven portfolios.',
  },
  {
    icon: <BadgePercent className="text-[#184734]" size={40} />, // Interest-Free
    title: 'Interest-Free Returns (Riba-Free)',
    desc: 'All gains are earned through real economic activity and shared profit/loss models, not interest (riba), making the system fairer and less exploitative.',
  },
  {
    icon: <AlertCircle className="text-[#184734]" size={40} />, // Risk Sharing
    title: 'Risk Sharing & Transparency',
    desc: 'Shariah-compliant investments promote risk-sharing instead of risk-shifting. Contracts are clear and mutually agreed upon, which enhances transparency and accountability.',
  },
];

const FeaturesSection = () => (
  <section
    id="about"
    className="relative bg-[#1a2a2e] py-16 px-4 md:px-6 text-center"
    style={{
      backgroundImage: "url('/marble-texture.png')", // Place your marble texture in public/
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }}
  >
    <h2 className="text-4xl md:text-5xl font-extrabold text-[#F4B13D] mb-2">Shariah Compliant Investment</h2>
    <p className="mb-12 max-w-3xl mx-auto text-white text-lg md:text-xl font-normal">
      Farid Capitals is a forward-thinking financial services company offering expert advisory and capital solutions for businesses and individuals seeking sustainable growth.
    </p>
    <div className="flex flex-col md:flex-row justify-center gap-10 md:gap-8">
      {features.map((feature, idx) => (
        <div key={feature.title} className="flex-1 flex flex-col items-center max-w-sm mx-auto">
          <div className="shadow-lg rounded-full bg-white flex items-center justify-center mb-6" style={{ width: 140, height: 140 }}>
            <div className="bg-white rounded-full flex items-center justify-center" style={{ width: 90, height: 90 }}>
              {feature.icon}
            </div>
          </div>
          <h3 className="font-extrabold text-xl md:text-2xl text-white mb-3 text-center">{feature.title}</h3>
          <p className="text-gray-200 text-base text-center mb-2">{feature.desc}</p>
        </div>
      ))}
    </div>
    <div className="mt-10 text-white italic text-lg font-medium cursor-pointer">Learn More...</div>
  </section>
);

export default FeaturesSection; 