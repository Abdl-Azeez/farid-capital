import React, { useRef, useState } from 'react';
import { Button } from "@/components/ui/button.jsx";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import faridCapitalHeroSvg from '../assets/farid_capital_hero.svg';
import { smoothScrollTo } from '../utils/smoothScroll';

const slides = [
  {
    title: 'Capitalizing Growth, Empowering Futures',
    desc: 'Discover tailored capital solutions and investment strategies built for lasting success.',
    img: faridCapitalHeroSvg,
  },
  {
    title: 'Shariah Compliant Investment',
    desc: 'Ethical, interest-free investment opportunities for sustainable growth.',
    img: faridCapitalHeroSvg,
  },
  {
    title: 'Expert Advisory, Proven Results',
    desc: 'Partner with our experienced team for strategic financial guidance.',
    img: faridCapitalHeroSvg,
  },
];

const HeroSection = () => {
  const swiperRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section id="hero" className="relative bg-white px-0 py-0 overflow-hidden h-screen">
      <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        loop={true}
        className="w-full h-full"
        style={{ height: '100vh' }}
        onSwiper={swiper => { swiperRef.current = swiper; }}
        onSlideChange={swiper => setActiveIndex(swiper.realIndex)}
        onAutoplay={swiper => setActiveIndex(swiper.realIndex)}
      >
        {slides.map((slide, idx) => (
          <SwiperSlide key={idx}>
            <div className="relative flex items-center h-screen">
              {/* Background Image - Full Page for all devices */}
              <div className="absolute inset-0 w-full h-full z-0">
                <img src={slide.img} alt={slide.alt || "Farid Capital Hero Banner"} className="w-full h-full object-cover object-center" />
                <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30 md:from-black/60 md:via-black/40 md:to-black/20" />
              </div>
              
              {/* Content Container */}
              <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
                <div className="max-w-xl md:max-w-2xl text-center md:text-left">
                  <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-white leading-tight drop-shadow-lg">{slide.title}</h1>
                  <p className="text-base md:text-lg mb-8 text-white/90 drop-shadow-md">{slide.desc}</p>
                  <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
                    <Button 
                      onClick={() => smoothScrollTo('services', 1000)}
                      className="bg-[#184734] text-white px-6 py-2 rounded hover:bg-[#256d4a] transition font-semibold shadow-none cursor-pointer"
                    >
                      Explore Services
                    </Button>
                    <Button 
                      onClick={() => smoothScrollTo('about', 1000)}
                      variant="outline" 
                      className="border-2 border-[#F4B13D] text-[#F4B13D] px-6 py-2 rounded hover:bg-[#F4B13D] hover:text-black transition font-semibold shadow-none bg-transparent cursor-pointer"
                    >
                      <a href="/about" className="inline-block px-6 py-2 ">Learn More</a>
                    </Button>
                  </div>
                </div>
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
            className={`inline-block w-8 h-2 rounded transition-colors duration-200 focus:outline-none ${activeIndex === idx ? 'bg-green-800' : 'bg-gray-300'}`}
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