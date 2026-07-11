/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, FormEvent } from 'react';
import { NavSection } from '../types';
import { Droplet, Mail, Phone, MapPin, Send, CheckCircle2, Linkedin, Facebook, Twitter } from 'lucide-react';

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
      setError('Please enter a valid email.');
      return;
    }
    setError('');
    setSubscribed(true);
    setEmail('');
    setTimeout(() => setSubscribed(false), 5000);
  };

  const handleLinkClick = (section: NavSection) => {
    onNavigate(section);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="corporate-footer" className="bg-brand-secondary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-white/10">
          
          {/* Company */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-white/10">
                <Droplet className="w-4 h-4" />
              </div>
              <span className="font-display font-bold text-sm tracking-tight">BHAGIRATHI</span>
            </div>
            <p className="text-slate-400 text-xs leading-relaxed">
              Premier manufacturer of packaged drinking water and PET packaging, driven by ISO-certified sterile automation, serving domestic and global markets.
            </p>
            <div className="flex gap-2 pt-1">
              {[Linkedin, Facebook, Twitter].map((Icon, i) => (
                <a key={i} href="#" className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors">
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display font-semibold text-xs uppercase tracking-wider text-slate-300 mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2 text-xs">
              {[
                { label: 'Our Story', section: NavSection.Story },
                { label: 'Company Overview', section: NavSection.About },
                { label: 'Product Catalog', section: NavSection.Products },
                { label: 'Sterile Manufacturing', section: NavSection.Manufacturing },
                { label: 'OEM & Private Labeling', section: NavSection.Oem },
                { label: 'Quality & Testing Lab', section: NavSection.Quality },
                { label: 'Sustainability & CSR', section: NavSection.Sustainability },
                { label: 'Careers', section: NavSection.Careers },
                { label: 'Blog', section: NavSection.Blog },
              ].map((link, idx) => (
                <li key={idx}>
                  <button
                    onClick={() => handleLinkClick(link.section)}
                    className="text-slate-400 hover:text-white transition-colors text-left"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-display font-semibold text-xs uppercase tracking-wider text-slate-300 mb-4">
              Corporate Office
            </h3>
            <ul className="space-y-3 text-xs text-slate-400">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-slate-500 shrink-0 mt-0.5" />
                <span>Gat No. 426/1A, Talegaon-Chakan Road, Mahalunge, Pune, MH 410501</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-slate-500" />
                <a href="tel:+912046890000" className="hover:text-white transition-colors">+91 20 4689 0000</a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-slate-500" />
                <a href="mailto:info@bhagirathiindustries.com" className="hover:text-white transition-colors">info@bhagirathiindustries.com</a>
              </li>
              <li className="pt-1">
                <span className="text-slate-500 text-[10px] uppercase tracking-wider font-semibold block mb-0.5">Hours</span>
                <span className="text-slate-300">Mon - Sat: 9:00 AM - 6:00 PM IST</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-display font-semibold text-xs uppercase tracking-wider text-slate-300 mb-4">
              Newsletter
            </h3>
            <p className="text-slate-400 text-xs leading-relaxed mb-3">
              Packaging trends, export updates, and sustainable solutions.
            </p>
            <form onSubmit={handleSubscribe} className="space-y-2">
              <div className="relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email"
                  className="w-full px-3 py-2 bg-white/5 text-white rounded-lg border border-white/10 text-xs focus:outline-none focus:border-brand-accent transition-colors pr-9"
                  required
                />
                <button
                  type="submit"
                  className="absolute right-1.5 top-1.5 p-1 rounded-md bg-brand-accent hover:bg-brand-accent/80 text-white transition-colors cursor-pointer"
                  aria-label="Subscribe"
                >
                  <Send className="w-3.5 h-3.5" />
                </button>
              </div>
              {error && <p className="text-red-400 text-[10px]">{error}</p>}
              {subscribed && (
                <div className="flex items-center gap-1 text-brand-accent text-[10px] font-medium">
                  <CheckCircle2 className="w-3 h-3" />
                  Subscribed successfully.
                </div>
              )}
            </form>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="pt-6 flex flex-col md:flex-row justify-between items-center text-[11px] text-slate-500 gap-3">
          <span>&copy; {new Date().getFullYear()} Bhagirathi Industries Pvt. Ltd. All rights reserved.</span>
          <div className="flex items-center gap-3 font-mono text-[10px]">
            <span className="px-2 py-0.5 rounded bg-white/5 border border-white/10">ONLINE</span>
            <span className="px-2 py-0.5 rounded bg-white/5 border border-white/10">PNE-IN</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
