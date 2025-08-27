import React from 'react';
import sukukStructureImg from '../assets/sukuk_structure.jpg';
import shariahCompliantImg from '../assets/shariah_compliant.jpg';
import realEstateImg from '../assets/real_estate.jpg';
import islamicPrivateImg from '../assets/islamic_private.jpg';
import takafulImg from '../assets/takaful.jpg';
import shariahCompliantTreasuryImg from '../assets/shariah_compliant_treasury.jpg';
import ourProductBg from '../assets/our-product-bg.png';

const services = [
  {
    title: "Sukuk Structuring and Advisory",
    img: sukukStructureImg,
    alt: "Sukuk Structuring and Advisory",
    desc: "We structure government and corporate Sukuk, including green Sukuk, for infrastructure and renewable energy projects.",
  },
  {
    title: "Shariah-Compliant Wealth Management",
    img: shariahCompliantImg,
    alt: "Shariah-Compliant Wealth Management", 
    desc: "We create customized portfolios for HNWIs that adhere to Islamic principles and integrate ESG factors.",
  },
  {
    title: "Real Estate Investment Advisory",
    img: realEstateImg,
    alt: "Real Estate Investment Advisory",
    desc: "We offer guidance on developing and managing real estate projects using Islamic finance tools like Ijarah and Musharakah.",
  },
  {
    title: "Islamic Private Equity and Venture Capital",
    img: islamicPrivateImg,
    alt: "Islamic Private Equity and Venture Capital",
    desc: "We facilitate equity investments in Shariah-compliant sectors such as agriculture, healthcare, and fintech.",
  },
  {
    title: "Takaful (Islamic Insurance) Advisory",
    img: takafulImg,
    alt: "Takaful (Islamic Insurance) Advisory",
    desc: "In partnership with leading Takaful providers, we offer comprehensive risk mitigation strategies",
  },
  {
    title: "Shariah-Compliant Treasury Management",
    img: shariahCompliantTreasuryImg,
    alt: "Shariah-Compliant Treasury Management",
    desc: "We provide advisory on liquidity management through instruments like Islamic bonds and commodity Murabahah.",
  },
];

const ServicesSection = () => {
  return (
    <section
      id="services"
      className="relative py-16 px-4 md:px-6"
      style={{
        backgroundImage: `url(${ourProductBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'top center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-[#184734]">Our </span>
            <span className="text-[#F4B13D]">Products & Services</span>
          </h2>
          <p className="text-gray-600 text-md md:text-lg max-w-4xl mx-auto leading-relaxed">
            We provide a diverse range of Shariah-compliant financial advisory services designed for high-net-worth individuals (HNWIs), private clients, and institutional investors in Nigeria and globally.
          </p>
        </div>
        
        <div className="space-y-6 max-w-6xl mx-auto">
          {services.map((service) => (
            <div key={service.title} className="rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300" style={{ background: 'linear-gradient(to right, rgba(36, 81, 61, 0.2), rgba(36, 81, 61, 0.2))' }}>
              <div className="flex flex-col md:flex-row h-full min-h-[360px]">
                <div 
                  className="w-full md:w-1/3 h-48 md:h-auto bg-white bg-cover bg-center bg-no-repeat"
                  style={{
                    backgroundImage: `url(${service.img})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}
                >
                </div>
                <div className="w-full md:w-2/3 p-8 flex flex-col justify-evenly" style={{ background: 'linear-gradient(to right, rgba(36, 81, 61, 0.2), rgba(36, 81, 61, 0.2))' }}>
                  <h3 className="text-xl md:text-2xl font-bold text-[#184734] mb-2 leading-tight">
                    {service.title}
                  </h3>
                  <p className="text-gray-800 text-base md:text-lg leading-relaxed">
                    {service.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection; 