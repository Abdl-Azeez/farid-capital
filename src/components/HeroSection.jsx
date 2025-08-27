import React, { useRef, useState } from 'react';
import { Button } from "@/components/ui/button.jsx";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import heroJpg from '../assets/hero.jpg';
import { smoothScrollTo } from '../utils/smoothScroll';

const slides = [
  {
    title: 'Capitalizing Growth, Empowering Futures',
    desc: 'Discover tailored capital solutions and investment strategies built for lasting success.',
    img: heroJpg,
  },
  {
    title: 'Shariah Compliant Investment',
    desc: 'Ethical, interest-free investment opportunities for sustainable growth.',
    img: heroJpg,
  },
  {
    title: 'Expert Advisory, Proven Results',
    desc: 'Partner with our experienced team for strategic financial guidance.',
    img: heroJpg,
  },
];

const HeroSection = () => {
  const swiperRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="relative bg-white px-0 pb-0 pt-10 overflow-hidden min-h-[500px] h-screen">
      <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        loop={true}
        className="w-full h-full"
        style={{ minHeight: 500 }}
        onSwiper={swiper => { swiperRef.current = swiper; }}
        onSlideChange={swiper => setActiveIndex(swiper.realIndex)}
        onAutoplay={swiper => setActiveIndex(swiper.realIndex)}
      >
        {slides.map((slide, idx) => (
          <SwiperSlide key={idx}>
            <div className="flex flex-col md:flex-row items-center justify-between px-6 py-16 md:py-24 min-h-[500px]">
              {/* Left: Text Content */}
              <div className="max-w-xl z-10 md:pl-4 flex flex-col justify-center flex-1">
                <h1 className="text-4xl md:text-5xl font-bold mb-4 text-black leading-tight">{slide.title}</h1>
                <p className="text-lg mb-8 text-gray-700">{slide.desc}</p>
                <div className="flex gap-3">
                  <Button 
                    onClick={() => smoothScrollTo('services', 1000)}
                    className="bg-[#184734] text-white px-6 py-2 rounded hover:bg-[#256d4a] transition font-semibold shadow-none cursor-pointer"
                  >
                    Explore Services
                  </Button>
                  <Button 
                    onClick={() => smoothScrollTo('about', 1000)}
                    variant="outline" 
                    className="border-2 border-[#F4B13D] text-black px-6 py-2 rounded hover:bg-[#F4B13D] hover:text-white transition font-semibold shadow-none bg-white cursor-pointer"
                  >
                    Learn More
                  </Button>
                </div>
              </div>
              {/* Right: Background Image */}
              <div className="hidden md:block absolute inset-y-0 right-0 w-2/3 z-0">
                <img src={slide.img} alt="Hero" className="w-full h-full object-cover object-center" style={{ minHeight: 500 }} />
                <div className="absolute inset-0 bg-gradient-to-l from-white/80 to-transparent" />
              </div>
              {/* For mobile, show image below text */}
              <div className="md:hidden w-full mt-8 z-0">
                <img src={slide.img} alt="Hero" className="w-full h-64 object-cover object-center rounded-lg" />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      {/* Custom pagination dots styled like Services section */}
      <div className="absolute left-1/2 -translate-x-1/2 bottom-6 flex gap-2 z-20">
        {slides.map((_, idx) => (
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
    </section>
  );
};

export default HeroSection; 