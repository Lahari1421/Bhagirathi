/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { NavSection } from '../types';
import { Menu, X, Droplet, ArrowRight, ShieldCheck, Mail, Phone, ExternalLink } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface NavbarProps {
  currentSection: NavSection;
  onNavigate: (section: NavSection) => void;
}

export default function Navbar({ currentSection, onNavigate }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', section: NavSection.Home },
    { label: 'About Us', section: NavSection.About },
    { label: 'Products', section: NavSection.Products },
    { label: 'Manufacturing', section: NavSection.Manufacturing },
    { label: 'OEM Services', section: NavSection.Oem },
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
      {/* Top micro-bar for emergency contact & certifications */}
      <div className="bg-brand-secondary text-white text-xs py-2 px-4 sm:px-6 md:px-8 flex justify-between items-center z-50 relative border-b border-white/10">
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1.5 text-slate-200 hover:text-white transition-colors">
            <Phone className="w-3.5 h-3.5 text-brand-accent" />
            <a href="tel:+912046890000" className="hover:underline">+91 20 4689 0000</a>
          </span>
          <span className="hidden md:flex items-center gap-1.5 text-slate-200 hover:text-white transition-colors">
            <Mail className="w-3.5 h-3.5 text-brand-accent" />
            <a href="mailto:info@bhagirathiindustries.com" className="hover:underline">info@bhagirathiindustries.com</a>
          </span>
        </div>
        <div className="flex items-center gap-4 text-slate-200">
          <span className="flex items-center gap-1 text-slate-300">
            <ShieldCheck className="w-3.5 h-3.5 text-brand-accent" />
            ISO 9001:2015 & BIS Certified Plant
          </span>
          <span className="hidden sm:inline-block w-px h-3 bg-white/20"></span>
          <span className="hidden sm:flex items-center gap-1 text-brand-accent font-semibold animate-pulse">
            B2B Private Label Lead Time: 14 Days
          </span>
        </div>
      </div>

      {/* Main navigation header */}
      <header
        id="app-header"
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-white shadow-md border-b border-slate-200/80 py-3'
            : 'bg-white/90 backdrop-blur-md border-b border-slate-100 py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Brand Logo Group */}
          <div 
            onClick={() => handleNavItemClick(NavSection.Home)}
            className="flex items-center gap-2 cursor-pointer group"
          >
            <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-brand-primary to-brand-secondary text-white shadow-md shadow-brand-primary/20 group-hover:scale-105 transition-transform">
              <Droplet className="w-6 h-6 fill-white/10" />
              <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-brand-accent rounded-full border-2 border-white flex items-center justify-center">
                <span className="w-1.5 h-1.5 bg-white rounded-full"></span>
              </div>
            </div>
            <div>
              <span className="font-display font-bold text-lg leading-tight tracking-tight text-brand-secondary block group-hover:text-brand-primary transition-colors">
                BHAGIRATHI
              </span>
              <span className="text-[10px] uppercase font-bold tracking-widest text-slate-400 block -mt-1">
                Industries Pvt. Ltd.
              </span>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center gap-1">
            {navItems.map((item) => {
              const isActive = currentSection === item.section;
              return (
                <button
                  key={item.section}
                  id={`nav-link-${item.section}`}
                  onClick={() => handleNavItemClick(item.section)}
                  className={`relative px-3.5 py-2 rounded-lg font-medium text-sm transition-all duration-200 ${
                    isActive
                      ? 'text-brand-primary bg-slate-50'
                      : 'text-slate-600 hover:text-brand-primary hover:bg-slate-50/50'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className="absolute bottom-1 left-3.5 right-3.5 h-0.5 bg-brand-accent rounded-full"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Action Button & Menu Button */}
          <div className="flex items-center gap-3">
            <button
              id="cta-navbar-quote"
              onClick={() => handleNavItemClick(NavSection.Contact)}
              className="hidden sm:flex items-center gap-2 px-5 py-2.5 rounded-xl text-white font-medium text-sm bg-gradient-to-r from-brand-primary to-brand-secondary hover:shadow-lg hover:shadow-brand-primary/20 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer"
            >
              Get Quote
              <ArrowRight className="w-4 h-4 text-brand-accent" />
            </button>

            {/* Mobile burger toggle */}
            <button
              id="btn-mobile-menu"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg text-slate-600 hover:bg-slate-100 hover:text-brand-primary xl:hidden transition-colors"
              aria-label="Toggle Menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="xl:hidden bg-white border-t border-slate-200 overflow-hidden shadow-inner"
            >
              <div className="px-4 pt-3 pb-6 space-y-1">
                {navItems.map((item) => {
                  const isActive = currentSection === item.section;
                  return (
                    <button
                      key={item.section}
                      id={`mobile-nav-link-${item.section}`}
                      onClick={() => handleNavItemClick(item.section)}
                      className={`flex w-full items-center justify-between px-4 py-3 rounded-xl text-base font-semibold transition-all ${
                        isActive
                          ? 'bg-brand-primary/5 text-brand-primary pl-6'
                          : 'text-slate-700 hover:bg-slate-50 hover:text-brand-primary hover:pl-5'
                      }`}
                    >
                      {item.label}
                      <ArrowRight className={`w-4 h-4 transition-transform duration-200 ${isActive ? 'translate-x-0 text-brand-accent' : 'opacity-0 -translate-x-2'}`} />
                    </button>
                  );
                })}
                <div className="pt-4 border-t border-slate-100 px-4">
                  <button
                    onClick={() => handleNavItemClick(NavSection.Contact)}
                    className="flex w-full items-center justify-center gap-2 py-3 rounded-xl bg-brand-primary text-white font-semibold shadow-md shadow-brand-primary/15"
                  >
                    Request Bulk Quotation
                    <ArrowRight className="w-4 h-4 text-brand-accent" />
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
