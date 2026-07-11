/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { NavSection } from '../types';
import { Menu, X, Droplet, ArrowRight, Phone, Mail, ShieldCheck } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface NavbarProps {
  currentSection: NavSection;
  onNavigate: (section: NavSection) => void;
}

export default function Navbar({ currentSection, onNavigate }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [storyScrolled, setStoryScrolled] = useState(false);

  const isStoryPage = currentSection === NavSection.Story;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
      if (isStoryPage) {
        setStoryScrolled(window.scrollY > 80);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isStoryPage]);

  useEffect(() => {
    if (!isStoryPage) setStoryScrolled(false);
  }, [isStoryPage]);

  const navItems = [
    { label: 'Home', section: NavSection.Home },
    { label: 'Our Story', section: NavSection.Story },
    { label: 'About', section: NavSection.About },
    { label: 'Products', section: NavSection.Products },
    { label: 'Manufacturing', section: NavSection.Manufacturing },
    { label: 'OEM', section: NavSection.Oem },
    { label: 'Quality', section: NavSection.Quality },
    { label: 'Sustainability', section: NavSection.Sustainability },
    { label: 'Careers', section: NavSection.Careers },
    { label: 'Blog', section: NavSection.Blog },
    { label: 'Contact', section: NavSection.Contact },
  ];

  const handleNavItemClick = (section: NavSection) => {
    onNavigate(section);
    setIsMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Top micro-bar — hidden on story page */}
      {!isStoryPage && (
        <div className="bg-brand-secondary text-white text-[11px] py-1.5 px-4 sm:px-6 lg:px-8 hidden md:flex justify-between items-center">
          <div className="flex items-center gap-5">
            <span className="flex items-center gap-1.5 text-slate-300">
              <Phone className="w-3 h-3" />
              <a href="tel:+912046890000" className="hover:text-white transition-colors">+91 20 4689 0000</a>
            </span>
            <span className="flex items-center gap-1.5 text-slate-300">
              <Mail className="w-3 h-3" />
              <a href="mailto:info@bhagirathiindustries.com" className="hover:text-white transition-colors">info@bhagirathiindustries.com</a>
            </span>
          </div>
          <div className="flex items-center gap-4 text-slate-400">
            <span className="flex items-center gap-1">
              <ShieldCheck className="w-3 h-3 text-brand-accent" />
              ISO 9001:2015 & BIS Certified
            </span>
            <span className="text-brand-accent font-medium">
              B2B Lead Time: 14 Days
            </span>
          </div>
        </div>
      )}

      {/* Main header */}
      <header
        id="app-header"
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isStoryPage
            ? `navbar-transparent ${storyScrolled ? 'navbar-story-scrolled' : ''}`
            : `bg-white ${isScrolled ? 'border-b border-slate-200 shadow-sm' : 'border-b border-slate-100'}`
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
          
          {/* Logo */}
          <div 
            onClick={() => handleNavItemClick(NavSection.Home)}
            className="flex items-center gap-2.5 cursor-pointer group"
          >
            <div className={`flex items-center justify-center w-9 h-9 rounded-lg transition-colors ${
              isStoryPage
                ? 'bg-white/10 text-white group-hover:bg-white/20'
                : 'bg-brand-secondary text-white group-hover:bg-brand-primary'
            }`}>
              <Droplet className="w-5 h-5" />
            </div>
            <div>
              <span className={`font-display font-bold text-sm tracking-tight block leading-tight ${
                isStoryPage ? 'text-white' : 'text-brand-secondary'
              }`}>
                BHAGIRATHI
              </span>
              <span className={`text-[9px] uppercase tracking-[0.15em] font-medium block ${
                isStoryPage ? 'text-white/50' : 'text-slate-400'
              }`}>
                Industries Pvt. Ltd.
              </span>
            </div>
          </div>

          {/* Desktop nav */}
          <nav className="hidden xl:flex items-center gap-0.5">
            {navItems.map((item) => {
              const isActive = currentSection === item.section;
              return (
                <button
                  key={item.section}
                  id={`nav-link-${item.section}`}
                  onClick={() => handleNavItemClick(item.section)}
                  className={`relative px-3 py-2 rounded-md text-[13px] font-medium transition-colors ${
                    isStoryPage
                      ? isActive
                        ? 'text-white'
                        : 'text-white/60 hover:text-white'
                      : isActive
                        ? 'text-brand-primary'
                        : 'text-slate-500 hover:text-slate-900'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className={`absolute bottom-0.5 left-3 right-3 h-0.5 rounded-full ${
                        isStoryPage ? 'bg-amber-400' : 'bg-brand-accent'
                      }`}
                      transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                    />
                  )}
                </button>
              );
            })}
          </nav>

          {/* CTA + mobile toggle */}
          <div className="flex items-center gap-3">
            <button
              id="cta-navbar-quote"
              onClick={() => handleNavItemClick(NavSection.Contact)}
              className={`hidden sm:flex items-center gap-1.5 px-4 py-2 rounded-lg font-medium text-[13px] transition-colors cursor-pointer ${
                isStoryPage
                  ? 'bg-white/10 text-white hover:bg-white/20 border border-white/15'
                  : 'bg-brand-primary text-white hover:bg-brand-primary/90'
              }`}
            >
              Get Quote
              <ArrowRight className="w-3.5 h-3.5" />
            </button>

            <button
              id="btn-mobile-menu"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`p-2 rounded-lg xl:hidden transition-colors ${
                isStoryPage
                  ? 'text-white hover:bg-white/10'
                  : 'text-slate-500 hover:bg-slate-100'
              }`}
              aria-label="Toggle Menu"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile drawer */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.15 }}
              className={`xl:hidden border-t overflow-hidden ${
                isStoryPage
                  ? 'bg-brand-secondary border-white/10'
                  : 'bg-white border-slate-100'
              }`}
            >
              <div className="px-4 pt-2 pb-4 space-y-0.5">
                {navItems.map((item) => {
                  const isActive = currentSection === item.section;
                  return (
                    <button
                      key={item.section}
                      id={`mobile-nav-link-${item.section}`}
                      onClick={() => handleNavItemClick(item.section)}
                      className={`flex w-full items-center justify-between px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                        isStoryPage
                          ? isActive
                            ? 'bg-white/10 text-white'
                            : 'text-white/60 hover:bg-white/5'
                          : isActive
                            ? 'bg-brand-primary/5 text-brand-primary'
                            : 'text-slate-600 hover:bg-slate-50'
                      }`}
                    >
                      {item.label}
                      <ArrowRight className={`w-3.5 h-3.5 transition-all ${isActive ? 'opacity-100 text-brand-accent' : 'opacity-0'}`} />
                    </button>
                  );
                })}
                <div className={`pt-2 mt-2 px-3 ${isStoryPage ? 'border-t border-white/10' : 'border-t border-slate-100'}`}>
                  <button
                    onClick={() => handleNavItemClick(NavSection.Contact)}
                    className="flex w-full items-center justify-center gap-2 py-2.5 rounded-lg bg-brand-primary text-white font-medium text-sm"
                  >
                    Request Quotation
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
