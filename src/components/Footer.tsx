/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, FormEvent } from 'react';
import { NavSection } from '../types';
import { 
  Droplet, Mail, Phone, MapPin, Send, CheckCircle2,
  Linkedin, Facebook, Twitter, ShieldCheck, Award, FileText
} from 'lucide-react';

interface FooterProps {
  onNavigate: (section: NavSection) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [error, setError] = useState('');

  const handleSubscribe = (e: FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      setError('Please provide a valid email address.');
      return;
    }
    setError('');
    setSubscribed(true);
    setEmail('');
    setTimeout(() => {
      setSubscribed(false);
    }, 5000);
  };

  const handleLinkClick = (section: NavSection) => {
    onNavigate(section);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="corporate-footer" className="bg-slate-900 text-white pt-16 pb-8 border-t-4 border-brand-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Links & Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-slate-800">
          
          {/* Column 1: Company Profile */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-brand-primary text-white">
                <Droplet className="w-5 h-5 fill-white/10" />
              </div>
              <span className="font-display font-bold text-lg tracking-tight">
                BHAGIRATHI
              </span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              Bhagirathi Industries Pvt. Ltd. is a premier name in packaged water and PET packaging, driven by ISO-certified sterile automation systems, serving domestic retail and global export markets with absolute integrity.
            </p>
            <div className="flex gap-3 pt-2">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-slate-800 hover:bg-brand-primary hover:text-white text-slate-400 transition-all">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-slate-800 hover:bg-brand-primary hover:text-white text-slate-400 transition-all">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-slate-800 hover:bg-brand-primary hover:text-white text-slate-400 transition-all">
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Navigation */}
          <div>
            <h3 className="font-display font-semibold text-sm uppercase tracking-wider text-slate-200 mb-5 border-l-2 border-brand-accent pl-2">
              Quick Links
            </h3>
            <ul className="space-y-2.5 text-sm">
              {[
                { label: 'Company Overview', section: NavSection.About },
                { label: 'Product Catalog', section: NavSection.Products },
                { label: 'Sterile Manufacturing', section: NavSection.Manufacturing },
                { label: 'OEM & Private Labeling', section: NavSection.Oem },
                { label: 'Quality & Testing Lab', section: NavSection.Quality },
                { label: 'Sustainability & CSR', section: NavSection.Sustainability },
                { label: 'Work with Us (Careers)', section: NavSection.Careers },
                { label: 'Expert Insights (Blog)', section: NavSection.Blog },
              ].map((link, idx) => (
                <li key={idx}>
                  <button
                    onClick={() => handleLinkClick(link.section)}
                    className="text-slate-400 hover:text-brand-accent hover:translate-x-1.5 transition-all text-left"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contacts */}
          <div>
            <h3 className="font-display font-semibold text-sm uppercase tracking-wider text-slate-200 mb-5 border-l-2 border-brand-accent pl-2">
              Corporate Office
            </h3>
            <ul className="space-y-4 text-sm text-slate-400">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-5 h-5 text-brand-primary shrink-0 mt-0.5" />
                <span>
                  <strong>HQ & Manufacturing Plant:</strong><br />
                  Gat No. 426/1A, Talegaon-Chakan Road, Mahalunge, Pune, MH 410501, India
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-brand-accent shrink-0" />
                <a href="tel:+912046890000" className="hover:text-white transition-colors">+91 20 4689 0000</a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-brand-primary shrink-0" />
                <a href="mailto:info@bhagirathiindustries.com" className="hover:text-white transition-colors">info@bhagirathiindustries.com</a>
              </li>
              <li className="pt-2">
                <div className="p-3 bg-slate-800/80 rounded-lg border border-slate-700/50">
                  <span className="text-xs font-semibold uppercase tracking-wider text-brand-accent block mb-1">Business Hours:</span>
                  <span className="text-xs block text-slate-300">Mon - Sat: 09:00 AM - 06:00 PM (IST)</span>
                  <span className="text-xs block text-slate-400">Plant Operations: 24/7 Rotational Shifts</span>
                </div>
              </li>
            </ul>
          </div>

          {/* Column 4: Newsletter Subscription */}
          <div>
            <h3 className="font-display font-semibold text-sm uppercase tracking-wider text-slate-200 mb-5 border-l-2 border-brand-accent pl-2">
              Stay Hydrated & Informed
            </h3>
            <p className="text-slate-400 text-sm leading-relaxed mb-4">
              Subscribe to receive private-label packaging trends, export updates, and sustainable solutions directly from our research desk.
            </p>
            <form onSubmit={handleSubscribe} className="space-y-2">
              <div className="relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your Corporate Email"
                  className="w-full px-4 py-2.5 bg-slate-800 text-white rounded-xl border border-slate-700 focus:outline-none focus:border-brand-primary text-sm pr-10 transition-all"
                  required
                />
                <button
                  type="submit"
                  className="absolute right-1.5 top-1.5 p-1.5 rounded-lg bg-brand-primary hover:bg-brand-accent text-white transition-colors cursor-pointer"
                  aria-label="Subscribe"
                >
                  <Send className="w-4 h-4" />
                </button>
              </div>
              {error && <p className="text-red-400 text-xs font-medium">{error}</p>}
              {subscribed && (
                <div className="flex items-center gap-1.5 text-brand-accent text-xs font-semibold py-1">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  Subscription confirmed. Welcome!
                </div>
              )}
            </form>

            <div className="mt-6 pt-4 border-t border-slate-800 flex flex-wrap gap-4 text-[11px] text-slate-400">
              <span className="flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-brand-accent" /> BIS IS 14543
              </span>
              <span className="flex items-center gap-1">
                <Award className="w-3.5 h-3.5 text-brand-primary" /> FSSAI Central
              </span>
            </div>
          </div>

        </div>

        {/* Legal & System Timestamp Bar */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500 gap-4">
          <div className="flex flex-col sm:flex-row items-center gap-1 sm:gap-4">
            <span>&copy; {new Date().getFullYear()} Bhagirathi Industries Pvt. Ltd. All rights reserved.</span>
            <span className="hidden sm:inline-block w-1.5 h-1.5 bg-slate-800 rounded-full"></span>
            <span className="hover:text-slate-300 cursor-pointer flex items-center gap-1" onClick={() => handleLinkClick(NavSection.Quality)}>
              <FileText className="w-3 h-3" /> QA Policy & ISO Certifications
            </span>
          </div>
          <div className="flex items-center gap-3">
            <span className="px-2.5 py-1 rounded bg-slate-800 text-slate-400 border border-slate-700 font-mono">
              Server State: ONLINE
            </span>
            <span className="px-2.5 py-1 rounded bg-slate-800 text-slate-400 border border-slate-700 font-mono">
              Region: PNE-IN
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
}
