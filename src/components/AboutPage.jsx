import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import logoSvg from "../assets/logo.svg";
import targetImg from "../assets/portfolio.jpg";
import ourProductBg from "../assets/our-product-bg.png";
import whyChoose1 from "../assets/why-choose-1.svg";
import whyChoose2 from "../assets/why-choose-2.svg";
import whyChoose3 from "../assets/why-choose-3.svg";
import whyChoose4 from "../assets/why-choose-4.svg";

const features = [
  {
    icon: whyChoose1,
    title: ["Ethical", "Expertise"],
    desc: "As a trusted provider of Shariah-compliant advisory services, we possess deep expertise in Islamic Finance.",
  },
  {
    icon: whyChoose2,
    title: ["Sustainability", "Commitment"],
    desc: "Our integration of ESG principles ensures that every advised project contributes to long-term societal and environmental well-being.",
  },
  {
    icon: whyChoose3,
    title: ["Experienced", "Leadership"],
    desc: "Our management team consists of industry leaders with extensive experience in financial advisory, risk management, and regulatory compliance.",
  },
  {
    icon: whyChoose4,
    title: ["Regulatory", "Alignment"],
    desc: "We are fully compliant with SEC Nigeria's guidelines, guaranteeing transparency, accountability, and trust.",
  },
];

const AboutPage = () => (
  <>
    <Header />
    <div 
      className="min-h-screen flex flex-col bg-white pt-24 relative"
      style={{
        background: `url(${ourProductBg}) center/cover no-repeat`,
      }}
    >
      <div className="absolute inset-0 w-full h-full pointer-events-none select-none z-0" style={{ background: 'rgba(255, 255, 255, 0.41)' }}></div>
      {/* Brown Banner */}
      <div
        className="w-full bg-[#8B6A3B] flex items-center justify-center z-10"
        style={{ height: "200px" }}
      >
        <h1 className="text-white text-3xl font-bold">About Us</h1>
      </div>
      {/* Our Story & Logo */}
      <section className="py-12 relative">
        <div 
          className="absolute inset-0 w-full h-full pointer-events-none select-none"
          style={{
            transform: "rotate(-41.99deg)",
            zIndex: 0,
            opacity: 1,
          }}
        ></div>
  <div className="relative max-w-6xl mx-auto flex flex-col md:flex-row items-center md:items-end gap-8 z-10 px-4 md:px-0">
          <div className="flex-1">
            <h2 className="text-2xl md:text-3xl font-bold text-[#184734] mb-4">Our Story</h2>
            <p className="text-gray-700 text-base font-normal">
              Farid Capital Limited is a pioneering investment advisory firm dedicated to providing ethical, Shariah-compliant financial advisory services in Nigeria. By integrating Environmental, Social, and Governance (ESG) standards, we aim to transform the investment landscape, focusing on opportunities that are sustainable, impactful, and compliant with global best practices. We address a significant gap in the Nigerian market for transparent and ethical investment solutions, offering our clients unique access to high-quality, risk-mitigated opportunities.
            </p>
          </div>
          <div className="flex-1 flex justify-center md:justify-end mt-8 md:mt-0 ">
            <img
              src={logoSvg}
              alt="Farid Capital Logo"
              className="w-64 h-72 object-contain bg-[#F2F5F8] rounded shadow py-8 px-6"
            />
          </div>
        </div>
      </section>
      {/* Mission & Image */}
      <section className="py-12 z-10">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start gap-16">
          <div className="flex-1 md:flex justify-center md:justify-start items-start hidden">
            <img
              src={targetImg}
              alt="Mission"
              className="max-w-auto w-full object-cover rounded shadow self-start"
              style={{ opacity: 1 }}
            />
          </div>
          <div className="flex-1 flex flex-col justify-start mt-4 px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-[#184734] mb-8">Our Mission</h2>
            <p className="text-gray-700 text-base font-normal">
              Our mission is to foster sustainable economic development by providing ethical, Shariah-compliant financial advisory services that empower local and international clients to achieve their investment goals. We are committed to delivering innovative, transparent, and impactful solutions that contribute to the betterment of society.
            </p>
          </div>
        </div>
      </section>
      {/* Why Choose Farid Capital */}
      <section className="relative pt-12 pb-24 z-10">
        {/* Geometric SVG background */}
        <div className="absolute inset-0 w-full h-full pointer-events-none select-none opacity-40 z-10 ml-24">
          <svg
            width="100%"
            height="100%"
            viewBox="0 0 800 400"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full"
          >
            <polygon points="0,0 800,0 800,400" fill="#f5f7fa" />
            <polygon points="0,0 0,400 800,400" fill="#e6ece7" />
            <polygon points="0,0 800,0 0,400" fill="#e6ece7" />
          </svg>
        </div>
        <div className="relative max-w-6xl mx-auto z-20">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
            Why Choose <span className="text-[#F4B13D]">Farid Capital?</span>
          </h2>
            <div className="flex flex-col md:grid md:grid-cols-4 gap-8">
              {features.map((feature) => (
                <div
                  key={feature.title.join(" ")}
                  className="flex flex-col md:flex-col items-start text-left w-full"
                >
                  {/* Mobile: title at top, then icon and text side by side */}
                  <div className="flex flex-row md:hidden w-full mb-2 px-4 gap-4">
                    <div className="flex items-center justify-center rounded-sm bg-[#184734] py-8 px-4">
                      <img 
                        src={feature.icon} 
                        alt={feature.title.join(" ") + " icon"} 
                        className="w-[96px] h-[96px] object-contain" 
                        style={{ opacity: 1 }} 
                      />
                    </div>
                    <div className="flex flex-col justify-center w-full">
                      <h3 className="font-bold mb-2 text-base">
                        <span className="text-[#184734]">{feature.title[0]}</span>{" "}
                        <span className="text-[#F4B13D]">{feature.title[1]}</span>
                      </h3>
                      <p className="text-gray-700 text-sm leading-relaxed w-full">
                        {feature.desc}
                      </p>
                    </div>
                  </div>
                  {/* Desktop: original layout */}
                  <div className="hidden md:flex flex-col items-start text-left">
                    <div className="flex items-center justify-center rounded-sm bg-[#184734] mb-4 py-8 px-4">
                      <img 
                        src={feature.icon} 
                        alt={feature.title.join(" ") + " icon"} 
                        className="w-[128px] h-[128px] object-contain" 
                        style={{ opacity: 1 }} 
                      />
                    </div>
                    <h3 className="font-bold mb-2 text-base md:text-lg">
                      <span className="text-[#184734]">{feature.title[0]}</span>{" "}
                      <span className="text-[#F4B13D]">{feature.title[1]}</span>
                    </h3>
                    <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                      {feature.desc}
                    </p>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  </>
);

export default AboutPage;
