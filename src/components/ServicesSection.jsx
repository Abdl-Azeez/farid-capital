import React, { useRef, useState } from 'react';
import { Button } from "@/components/ui/button.jsx";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

const services = [
  {
    title: "Investment Advisory",
    img: "/investment.jpg", // Replace with your actual image path
    alt: "Investment Advisory",
    desc: "We provide in-depth market research and strategic planning to guide your investments and minimize risk in an ever-changing global economy.",
  },
  {
    title: "Capital Structuring Advisory",
    img: "/capital.jpg", // Replace with your actual image path
    alt: "Capital Structuring Advisory",
    desc: "Our capital structuring services help clients secure funding that aligns with their business models and long-term goals—whether equity, debt, or hybrid instruments.",
  },
  {
    title: "Portfolio Management Advisory",
    img: "/portfolio.jpg", // Replace with your actual image path
    alt: "Portfolio Management Advisory",
    desc: "We manage and optimize your investment portfolios to ensure returns are balanced with risk, using industry-proven strategies and real-time analysis.",
  },
];

const ServicesSection = () => {
  const swiperRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section
      id="services"
      className="relative py-16 px-4 md:px-6"
      style={{
        backgroundImage: "url('/pattern-bg.png')", // Place your pattern in public/
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-[#184734] mb-2">Our Services</h2>
          <p className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto">
            Explore our Strategic Capital Solutions, Rooted in Integrity.
          </p>
        </div>
        <Swiper
          modules={[Autoplay]}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          loop={true}
          slidesPerView={1}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          spaceBetween={32}
          className="w-full"
          onSwiper={swiper => { swiperRef.current = swiper; }}
          onSlideChange={swiper => setActiveIndex(swiper.realIndex)}
          onAutoplay={swiper => setActiveIndex(swiper.realIndex)}
        >
          {services.map((service, idx) => (
            <SwiperSlide key={service.title}>
              <div className="bg-white rounded-lg shadow-md flex flex-col items-center p-6 mx-auto max-w-sm">
                <img src={service.img} alt={service.alt} className="w-full h-56 object-cover rounded-md mb-6" />
                <h3 className="text-2xl font-extrabold text-black mb-2 text-center">{service.title}</h3>
                <p className="text-gray-700 text-base text-center mb-6">{service.desc}</p>
                <Button className="bg-[#184734] text-white px-8 py-2 rounded hover:bg-[#256d4a] transition font-semibold w-fit mx-auto">Learn More</Button>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        {/* Custom pagination dots styled like UI */}
        <div className="flex justify-center mt-10 gap-2">
          {services.map((_, idx) => (
            <button
              key={idx}
              aria-label={`Go to slide ${idx + 1}`}
              className={`inline-block w-8 h-2 rounded transition-colors duration-200 focus:outline-none ${activeIndex === idx ? 'bg-[#184734]' : 'bg-gray-300'}`}
              onClick={() => {
                if (swiperRef.current) {
                  swiperRef.current.slideToLoop(idx);
                  setActiveIndex(idx);
                }
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection; 