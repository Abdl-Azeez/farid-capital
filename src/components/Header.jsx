import React, { useEffect, useState, useRef } from 'react';
import { Button } from "@/components/ui/button.jsx";
import logoSvg from '../assets/logo.svg';
import { smoothScrollTo } from '../utils/smoothScroll';

const navLinks = [
  { label: 'Home', href: '#' },
  { label: 'About Us', href: '#about' },
  { label: 'Our services', href: '#services' },
  { label: 'Insights', href: '#insights' },
  { label: 'Contact Us', href: '#contact' },
];

const sectionIds = ['#', '#about', '#services', '#insights', '#contact'];

const Header = () => {
  const [active, setActive] = useState('#');
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    let ticking = false;
    
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const currentScrollY = window.scrollY;
          
          // Handle navbar visibility with minimum scroll threshold
          if (Math.abs(currentScrollY - lastScrollY.current) > 5) {
            if (currentScrollY > lastScrollY.current && currentScrollY > 80) {
              // Scrolling down & past 80px
              setIsVisible(false);
            } else if (currentScrollY < lastScrollY.current || currentScrollY <= 80) {
              // Scrolling up or at top
              setIsVisible(true);
            }
            lastScrollY.current = currentScrollY;
          }

          // Handle active section
          const scrollPos = currentScrollY + 90; // 90px offset for sticky header
          let current = '#';
          for (let i = sectionIds.length - 1; i >= 0; i--) {
            const id = sectionIds[i] === '#' ? 'hero' : sectionIds[i].replace('#', '');
            const el = document.getElementById(id);
            if (el && el.offsetTop <= scrollPos) {
              current = sectionIds[i];
              break;
            }
          }
          setActive(current);
          
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Enhanced smooth scroll handler using utility function
  const handleNavClick = (e, href) => {
    e.preventDefault();
    const id = href === '#' ? 'hero' : href.replace('#', '');
    smoothScrollTo(id, 800);
  };

  return (
    <header 
      className={`bg-white shadow-lg fixed top-0 left-0 right-0 z-50 transition-transform duration-300 ease-in-out ${
        isVisible ? 'transform translate-y-0' : 'transform -translate-y-full'
      }`} 
      style={{ minHeight: 80 }}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between py-2 px-6">
        <div className="flex items-center gap-3">
          <img src={logoSvg} alt="Farid Capital Logo" className="h-20 w-32" />
          {/* <span className="font-heading text-2xl font-bold text-primary">FARID <span className="text-dark">CAPITAL</span></span> */}
        </div>
        <nav className="hidden md:flex gap-10 text-lg font-medium">
          {navLinks.map(link => (
            <a
              key={link.href}
              href={link.href}
              onClick={e => handleNavClick(e, link.href)}
              className={
                (active === link.href
                  ? 'text-[#F4B13D] font-semibold'
                  : 'text-black hover:text-[#184734]') +
                ' transition-colors duration-200 px-1 pb-1 text-sm'
              }
            >
              {link.label}
            </a>
          ))}
        </nav>
        <Button className="bg-[#184734] text-white px-6 py-2 rounded hover:bg-[#256d4a] transition font-semibold shadow-none">Free Consultation</Button>
      </div>
    </header>
  );
};

export default Header; 