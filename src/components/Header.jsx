import React, { useEffect, useState, useRef } from 'react';
import { Button } from "@/components/ui/button.jsx";
import logoSvg from '../assets/logo.svg';
import { smoothScrollTo } from '../utils/smoothScroll';

const navLinks = [
  { label: 'Home', href: '#' },
  { label: 'Our services', href: '#services' },
  { label: 'About Us', href: '/about' },
  { label: 'Our Team', href: '/team' },
  { label: 'Contact Us', href: '/contact' },
];

const sectionIds = ['#', '#services'];

const Header = () => {
  const [active, setActive] = useState('#');
  const [isVisible, setIsVisible] = useState(true);
  const [isHeroSection, setIsHeroSection] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
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
          
          // Check if we're in hero section (first 80% of viewport height)
          const heroSection = document.getElementById('hero');
          if (heroSection) {
            const heroHeight = heroSection.offsetHeight;
            setIsHeroSection(currentScrollY < heroHeight * 0.8);
          }
          
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
    
    // Check if it's an external page link
    if (href.startsWith('/')) {
      // For future page redirects - currently just prevent default
      console.log(`Future redirect to: ${href}`);
      return;
    }
    
    // Handle internal section scrolling
    const id = href === '#' ? 'hero' : href.replace('#', '');
    smoothScrollTo(id, 800);
  };

  return (
    <header 
      className={`${isHeroSection ? 'bg-white/50 backdrop-blur-sm shadow-none' : 'bg-white shadow-lg'} fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${
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
                (active === link.href && !link.href.startsWith('/')
                  ? isHeroSection 
                    ? 'text-white font-semibold' 
                    : 'text-[#F4B13D] font-semibold'
                  : isHeroSection 
                    ? 'text-gray-700 hover:text-[#F4B13D]' 
                    : 'text-black hover:text-[#F4B13D]') +
                ' transition-colors duration-200 px-1 pb-1 text-sm'
              }
            >
              {link.label}
            </a>
          ))}
        </nav>
        
        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex flex-col gap-1 p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle mobile menu"
        >
          <span className={`block w-6 h-0.5 transition-colors ${isHeroSection ? 'bg-gray-700' : 'bg-black'}`}></span>
          <span className={`block w-6 h-0.5 transition-colors ${isHeroSection ? 'bg-gray-700' : 'bg-black'}`}></span>
          <span className={`block w-6 h-0.5 transition-colors ${isHeroSection ? 'bg-gray-700' : 'bg-black'}`}></span>
        </button>

        <Button className="hidden md:block bg-[#184734] text-white px-6 py-2 rounded hover:bg-[#256d4a] transition font-semibold shadow-none">Free Consultation</Button>
      </div>
      
      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg border-t">
          <nav className="flex flex-col py-4">
            {navLinks.map(link => (
              <a
                key={link.href}
                href={link.href}
                onClick={e => {
                  handleNavClick(e, link.href);
                  setIsMobileMenuOpen(false);
                }}
                className={
                  (active === link.href && !link.href.startsWith('/')
                    ? 'text-[#F4B13D] font-semibold'
                    : 'text-black hover:text-[#F4B13D]') +
                  ' transition-colors duration-200 px-6 py-3 text-sm border-b border-gray-100 last:border-b-0'
                }
              >
                {link.label}
              </a>
            ))}
            <div className="px-6 py-3">
              <Button className="w-full bg-[#184734] text-white px-6 py-2 rounded hover:bg-[#256d4a] transition font-semibold shadow-none">
                Free Consultation
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header; 