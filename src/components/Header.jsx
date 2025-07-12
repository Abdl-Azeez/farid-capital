import React, { useEffect, useState } from 'react';
import { Button } from "@/components/ui/button.jsx";

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

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 90; // 90px offset for sticky header
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
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Smooth scroll handler
  const handleNavClick = (e, href) => {
    e.preventDefault();
    const id = href === '#' ? 'hero' : href.replace('#', '');
    const el = document.getElementById(id);
    if (el) {
      window.scrollTo({
        top: el.offsetTop - 80, // offset for sticky header
        behavior: 'smooth',
      });
    }
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50" style={{ minHeight: 80 }}>
      <div className="max-w-7xl mx-auto flex items-center justify-between py-5 px-6">
        <div className="flex items-center gap-3">
          <img src="/logo.svg" alt="Farid Capital Logo" className="h-12 w-12" />
          <span className="font-heading text-2xl font-bold text-primary">FARID <span className="text-dark">CAPITAL</span></span>
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
                ' transition-colors duration-200 px-1 pb-1'
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