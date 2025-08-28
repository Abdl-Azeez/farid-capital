import React from 'react';
import ethicalSvg from '../assets/ethical.svg';
import interestFreeSvg from '../assets/interest-free.svg';
import riskSharingSvg from '../assets/risk-sharing.svg';
import marbleTexture from '../assets/marble-texture.png';
import { smoothScrollTo } from '../utils/smoothScroll';

const features = [
  {
    iconSrc: ethicalSvg,
    title: 'Ethical and Responsible Investing',
    desc: 'Investments are filtered to avoid industries like alcohol, gambling, weapons, and interest-based finance—ensuring moral alignment for investors seeking value-driven portfolios.',
  },
  {
    iconSrc: interestFreeSvg,
    title: 'Interest-Free Returns (Riba-Free)',
    desc: 'All gains are earned through real economic activity and shared profit/loss models, not interest (riba), making the system fairer and less exploitative.',
  },
  {
    iconSrc: riskSharingSvg,
    title: 'Risk Sharing & Transparency',
    desc: 'Shariah-compliant investments promote risk-sharing instead of risk-shifting. Contracts are clear and mutually agreed upon, which enhances transparency and accountability.',
  },
];

const FeaturesSection = () => (
  <section
    className="relative bg-[#1a2a2e] py-20 px-4 md:px-6 text-center pt-16"
    style={{
      backgroundImage: `url(${marbleTexture})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }}
  >
    <div className="max-w-7xl mx-auto">
      <h2 className="text-4xl md:text-5xl font-bold text-[#F4B13D] mb-4">
        Shariah compliant investment advisory
      </h2>
      <p className="mb-16 max-w-4xl mx-auto text-white text-lg md:text-xl font-light leading-relaxed">
        Farid Capitals is a forward-thinking financial services company offering expert advisory and capital solutions for businesses and individuals seeking sustainable growth.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 max-w-6xl mx-auto">
        {features.map((feature) => (
          <div key={feature.title} className="flex flex-col items-center">
            <div className="shadow-2xl rounded-full bg-white flex items-center justify-center mb-8 transition-transform hover:scale-105 hover:shadow-3xl" 
                 style={{ width: 140, height: 140 }}>
              <div className="bg-[#184734] rounded-full flex items-center justify-center" 
                   style={{ 
                     width: 90, 
                     height: 90,
                     boxShadow: '0 8px 20px rgba(0,0,0,0.3), 0 4px 8px rgba(0,0,0,0.2), inset 0 2px 4px rgba(255,255,255,0.1)'
                   }}>
                <img 
                  src={feature.iconSrc} 
                  alt={feature.title}
                  className="w-10 h-10 filter brightness-0 invert"
                />
              </div>
            </div>
            <h3 className="font-bold text-xl md:text-2xl text-white mb-4 text-center leading-tight">
              {feature.title}
            </h3>
            <p className="text-gray-200 text-base text-center leading-relaxed max-w-sm">
              {feature.desc}
            </p>
          </div>
        ))}
      </div>
      
      <div className="mt-16">
        <button 
          onClick={() => smoothScrollTo('services', 800)}
          className="text-white italic text-lg font-medium cursor-pointer hover:text-[#F4B13D] transition-colors bg-transparent border-none"
        >
          Learn More...
        </button>
      </div>
    </div>
  </section>
);

export default FeaturesSection; 