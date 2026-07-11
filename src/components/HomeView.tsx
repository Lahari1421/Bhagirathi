/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { NavSection } from '../types';
import { COMPANY_STATS, PRODUCTS_DATA, TESTIMONIALS_DATA, BLOG_POSTS } from '../data';
import { 
  ArrowRight, Droplet, Award, ShieldCheck, Factory, 
  ChevronLeft, ChevronRight, Star, Quote, Zap, Leaf, Landmark, Globe, CheckCircle2, TrendingUp
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface HomeViewProps {
  onNavigate: (section: NavSection) => void;
  onSelectProduct: (productId: string) => void;
}

export default function HomeView({ onNavigate, onSelectProduct }: HomeViewProps) {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [statsCounter, setStatsCounter] = useState<number[]>(COMPANY_STATS.map(() => 0));

  useEffect(() => {
    const intervals = COMPANY_STATS.map((stat, idx) => {
      const increment = Math.ceil(stat.value / 30);
      return setInterval(() => {
        setStatsCounter((prev) => {
          const next = [...prev];
          if (next[idx] < stat.value) {
            next[idx] = Math.min(next[idx] + increment, stat.value);
          }
          return next;
        });
      }, 50);
    });

    return () => intervals.forEach(clearInterval);
  }, []);

  const handleNextTestimonial = () => {
    setActiveTestimonial((prev) => (prev + 1) % TESTIMONIALS_DATA.length);
  };

  const handlePrevTestimonial = () => {
    setActiveTestimonial((prev) => (prev - 1 + TESTIMONIALS_DATA.length) % TESTIMONIALS_DATA.length);
  };

  const industries = [
    { name: 'Elite Retail Channels', icon: <TrendingUp className="w-6 h-6 text-brand-primary" />, desc: 'Hypermarkets & retail hubs' },
    { name: 'Five-Star Hotels', icon: <Star className="w-6 h-6 text-brand-accent" />, desc: 'Bespoke custom glass bottling' },
    { name: 'Corporate Headspaces', icon: <Landmark className="w-6 h-6 text-brand-primary" />, desc: 'Boardroom bubble cans & cups' },
    { name: 'National Airlines', icon: <Globe className="w-6 h-6 text-brand-accent" />, desc: 'Lightweight compact 250ml units' },
    { name: 'Government & Railways', icon: <ShieldCheck className="w-6 h-6 text-brand-primary" />, desc: 'BIS & FSSAI certified bulk' },
    { name: 'Export Partners', icon: <Factory className="w-6 h-6 text-brand-accent" />, desc: 'Seaworthy high-density wrapping' }
  ];

  const clients = [
    'Tata Consumer Products', 'Grand Regency Hotels', 'Pacific Blue Cruise Lines', 
    'Marriott Suites', 'Spice Air Logistics', 'Vitality Beverage Co.', 
    'Oceanic Distributors', 'Hindustan Food Services', 'Taj Group Premium Rooms',
    'Hyatt Regency', 'Vistara Club Lounges'
  ];

  return (
    <div className="overflow-hidden">
      
      {/* 1. HERO BANNER SECTION */}
      <section className="relative min-h-[90vh] bg-brand-secondary text-white flex items-center justify-center py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center w-full">
          
          <div className="lg:col-span-7 space-y-6 text-left">
            
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 text-xs font-semibold text-brand-accent">
              <span className="w-2 h-2 rounded-full bg-brand-accent"></span>
              Pioneering High-Precision Water Bottling Since 2008
            </div>

            <h1 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-tight">
              Manufacturing Excellence. <br />
              <span className="text-brand-accent">
                Delivering Pure Quality.
              </span>
            </h1>

            <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl font-light">
              Bhagirathi Industries Pvt. Ltd. delivers world-class packaged drinking water, alkaline water, PET bottles, OEM manufacturing, and sustainable packaging solutions for customers across India and global markets.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button
                onClick={() => onNavigate(NavSection.Products)}
                className="px-8 py-4 rounded-lg text-white font-semibold bg-brand-primary hover:bg-brand-primary/90 transition-all text-center flex items-center justify-center gap-2 group cursor-pointer"
              >
                Explore Products
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <button
                onClick={() => onNavigate(NavSection.Contact)}
                className="px-8 py-4 rounded-lg text-white font-semibold border border-white/20 hover:bg-white/10 transition-all text-center flex items-center justify-center gap-2 cursor-pointer"
              >
                Request a Quote
              </button>
            </div>

            <div className="pt-8 border-t border-white/10 flex flex-wrap gap-6 text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-brand-accent" />
                <span>BIS Approved Plant</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-brand-accent" />
                <span>ISO 9001:2015 certified</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-brand-accent" />
                <span>Zero Liquid Discharge System</span>
              </div>
            </div>

          </div>

          <div className="lg:col-span-5 relative flex justify-center">
            <div className="relative w-80 h-96 sm:w-96 sm:h-[420px] rounded-2xl bg-slate-800 border border-white/10 p-6 flex flex-col justify-between overflow-hidden">
              
              <div className="flex justify-between items-start relative z-10">
                <span className="text-xs tracking-widest font-bold uppercase text-slate-400">Manufacturing Live</span>
                <span className="px-2.5 py-0.5 rounded bg-brand-accent/20 text-brand-accent font-semibold text-[10px] uppercase border border-brand-accent/30 tracking-wider">Sterile Block</span>
              </div>

              <div className="flex flex-col items-center justify-center my-6 relative z-10">
                <div className="relative flex items-center justify-center w-24 h-24 rounded-full bg-brand-primary/10 border border-white/10">
                  <Droplet className="w-12 h-12 text-cyan-400 fill-cyan-400/10" />
                </div>
                <span className="font-display font-bold text-xl mt-4">Pure Water Matrix</span>
                <span className="text-xs text-slate-400 mt-1">RO + UV + Ozonization (0.2μ)</span>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-xl p-3 flex justify-between relative z-10 text-xs text-slate-300">
                <div>
                  <span className="block text-[10px] text-slate-500 uppercase">Hourly Output</span>
                  <strong className="text-white text-sm">24,000 Bottles</strong>
                </div>
                <div className="text-right">
                  <span className="block text-[10px] text-slate-500 uppercase">Filtration Barrier</span>
                  <strong className="text-brand-accent text-sm">8-Stage Clean</strong>
                </div>
              </div>

            </div>
          </div>

        </div>

      </section>

      {/* 1B. OUR STORY CINEMATIC TEASER */}
      <section className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-brand-secondary via-[#0c1220] to-brand-light overflow-hidden">
        <div className="story-light-rays" />
        <div className="max-w-4xl mx-auto text-center relative z-10 space-y-10">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-amber-300/80 tracking-wider uppercase">
            Our Origin
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl text-white tracking-tight leading-tight">
            Before the factory. Before the brand.
            <br />
            <span className="text-amber-200/80">There was a story.</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg max-w-2xl mx-auto font-light leading-relaxed">
            Inspired by King Bhagiratha's devotion, a mother's wisdom, and a son's dream — 
            discover the journey that gave birth to Bhagirathi Industries.
          </p>
          <div className="pt-4">
            <button
              onClick={() => onNavigate(NavSection.Story)}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-amber-400/10 border border-amber-400/20 text-amber-200 font-semibold text-sm hover:bg-amber-400/20 transition-all group cursor-pointer"
            >
              Experience the Journey
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>

      {/* 2. STATS SECTION */}
      <section className="bg-brand-light text-brand-dark py-12 px-4 sm:px-6 lg:px-8 relative z-20 border-b border-slate-200">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 text-center">
            {COMPANY_STATS.map((stat, idx) => (
              <div key={idx} className="p-4 border-r border-slate-200 last:border-0">
                <div className="text-3xl lg:text-4xl font-display font-extrabold text-brand-primary">
                  {statsCounter[idx]}
                  <span>{stat.suffix}</span>
                </div>
                <div className="text-sm font-semibold text-brand-secondary mt-1">{stat.label}</div>
                <div className="text-[11px] text-slate-500 mt-0.5 leading-tight">{stat.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. COMPANY OVERVIEW SECTION */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-6">
            <div className="relative bg-slate-50 rounded-2xl p-8 border border-slate-200 overflow-hidden">
              
              <span className="text-xs uppercase font-bold text-brand-primary tracking-widest block mb-2">Our Mission Statement</span>
              <h3 className="font-display font-bold text-2xl text-brand-secondary mb-4 leading-tight">
                Pioneering sterile packaging technology with an absolute ecological conscience.
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">
                Bhagirathi Industries Pvt. Ltd. was founded with a singular purpose: to supply water purity at industrial scale while pioneering sustainable, zero-waste PET and carton solutions. Across our advanced cleanrooms, automation prevents human touch, keeping biological hazards at absolute zero.
              </p>

              <div className="space-y-4">
                <div className="flex gap-3">
                  <div className="w-6 h-6 rounded-full bg-brand-accent/20 flex items-center justify-center text-brand-accent text-xs font-bold shrink-0 mt-0.5">✔</div>
                  <div>
                    <strong className="text-sm text-brand-secondary block">Pure Aquifers Only</strong>
                    <span className="text-xs text-slate-500">We source exclusively from deep underground aquifers with certified recharge programs.</span>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="w-6 h-6 rounded-full bg-brand-accent/20 flex items-center justify-center text-brand-accent text-xs font-bold shrink-0 mt-0.5">✔</div>
                  <div>
                    <strong className="text-sm text-brand-secondary block">100% Recyclable Solutions</strong>
                    <span className="text-xs text-slate-500">First domestic factory with a dedicated facility for zero-carbon, GRS-certified post-consumer PET.</span>
                  </div>
                </div>
              </div>

            </div>
          </div>

          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-primary bg-brand-primary/5 px-3 py-1 rounded-full">
              Why Bhagirathi
            </span>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-brand-secondary leading-tight">
              The Gold Standard in Domestic and Global Beverage Manufacturing
            </h2>
            <p className="text-slate-600 leading-relaxed text-sm">
              In manufacturing, consistency is everything. Bhagirathi Industries stands apart by combining top-tier European bottling machinery with a team of skilled chemical engineers. Whether you need reliable drinking water packaging or bespoke private label PET molds, we deliver unmatched speed and quality.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 hover:border-brand-primary/20 transition-all">
                <Award className="w-8 h-8 text-brand-accent mb-2" />
                <h4 className="font-bold text-sm text-brand-secondary mb-1">Uncompromising Standards</h4>
                <p className="text-xs text-slate-500">BIS and ISO certified laboratories running 50+ quality checkpoints daily.</p>
              </div>

              <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 hover:border-brand-primary/20 transition-all">
                <Factory className="w-8 h-8 text-brand-primary mb-2" />
                <h4 className="font-bold text-sm text-brand-secondary mb-1">Scalable Automation</h4>
                <p className="text-xs text-slate-500">High-capacity lines bottling over 500,000 litres of water daily.</p>
              </div>

              <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 hover:border-brand-primary/20 transition-all">
                <Leaf className="w-8 h-8 text-brand-accent mb-2" />
                <h4 className="font-bold text-sm text-brand-secondary mb-1">Eco-Conscious Packaging</h4>
                <p className="text-xs text-slate-500">Zero plastic waste discharge and biodegradable packaging alternatives.</p>
              </div>

              <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 hover:border-brand-primary/20 transition-all">
                <Zap className="w-8 h-8 text-brand-primary mb-2" />
                <h4 className="font-bold text-sm text-brand-secondary mb-1">Rapid B2B Execution</h4>
                <p className="text-xs text-slate-500">From concept design to finished retail cartons in just 14 business days.</p>
              </div>
            </div>

            <div className="pt-4">
              <button
                onClick={() => onNavigate(NavSection.Story)}
                className="inline-flex items-center gap-1 text-sm font-semibold text-brand-primary hover:text-brand-accent hover:gap-2 transition-all cursor-pointer"
              >
                Learn More About Our Journey
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>

        </div>
      </section>

      {/* 4. OUR PRODUCTS PREVIEW SECTION */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-brand-light border-t border-slate-200">
        <div className="max-w-7xl mx-auto">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-primary bg-brand-primary/5 px-3 py-1 rounded-full">
              Industrial Catalog
            </span>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-brand-secondary">
              Premium Product Offerings
            </h2>
            <p className="text-slate-600 text-sm">
              Each product is engineered under sterile conditions to exceed international consumer safety standards. Select a category to inspect full specifications.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PRODUCTS_DATA.map((product) => (
              <div 
                key={product.id}
                className="bg-white rounded-2xl border border-slate-200 overflow-hidden hover:border-brand-primary/20 hover:-translate-y-0.5 transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="h-56 overflow-hidden relative">
                    <img 
                      src={product.imageUrl} 
                      alt={product.name} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-lg border border-slate-200/50">
                      <span className="text-[10px] font-bold uppercase text-brand-primary tracking-wider">{product.category}</span>
                    </div>
                  </div>
                  
                  <div className="p-6 space-y-3">
                    <span className="text-xs font-bold text-brand-accent tracking-wide uppercase">{product.subtitle}</span>
                    <h3 className="font-display font-bold text-xl text-brand-secondary group-hover:text-brand-primary transition-colors">{product.name}</h3>
                    <p className="text-slate-500 text-xs leading-relaxed line-clamp-3">{product.description}</p>
                    
                    <div className="pt-2">
                      <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block mb-1.5">Available Sizing:</span>
                      <div className="flex flex-wrap gap-1.5">
                        {product.sizes.slice(0, 3).map((size, idx) => (
                          <span key={idx} className="px-2 py-0.5 rounded bg-slate-100 text-slate-600 text-[10px] font-medium border border-slate-200/50">
                            {size}
                          </span>
                        ))}
                        {product.sizes.length > 3 && (
                          <span className="px-2 py-0.5 rounded bg-brand-primary/5 text-brand-primary text-[10px] font-bold border border-brand-primary/10">
                            +{product.sizes.length - 3} More
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-6 pt-0 border-t border-slate-100 mt-4 flex items-center justify-between">
                  <button 
                    onClick={() => onSelectProduct(product.id)}
                    className="text-xs font-bold text-brand-primary hover:text-brand-accent flex items-center gap-1 transition-colors cursor-pointer"
                  >
                    View Specifications
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                  <button
                    onClick={() => onNavigate(NavSection.Contact)}
                    className="px-3.5 py-1.5 rounded-lg bg-brand-primary hover:bg-brand-primary/90 text-white font-medium text-[11px] transition-colors cursor-pointer"
                  >
                    Bulk Inquiry
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button
              onClick={() => onNavigate(NavSection.Products)}
              className="px-6 py-3 rounded-lg border-2 border-brand-primary text-brand-primary font-bold text-sm hover:bg-brand-primary hover:text-white transition-all cursor-pointer"
            >
              Browse Complete Catalog
            </button>
          </div>

        </div>
      </section>

      {/* 5. CLIENTS SCROLLING MARQUEE */}
      <section className="bg-white py-12 border-b border-slate-200 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 mb-6">
          <p className="text-center text-xs uppercase tracking-widest font-bold text-slate-400">
            Trusted by Elite Brands and Corporations Nationally & Globally
          </p>
        </div>
        
        <div className="relative w-full overflow-hidden flex bg-brand-light py-4 border-y border-slate-200">
          <div className="animate-marquee whitespace-nowrap flex gap-12 items-center">
            {clients.concat(clients).map((client, idx) => (
              <span 
                key={idx} 
                className="text-slate-500 font-display font-semibold text-sm sm:text-base tracking-tight hover:text-brand-primary transition-colors cursor-default select-none flex items-center gap-2"
              >
                <span className="w-2 h-2 rounded-full bg-brand-accent"></span>
                {client}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* 6. OEM & PRIVATE LABEL WALKTHROUGH PREVIEW */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white relative">
        <div className="max-w-7xl mx-auto">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-5 space-y-6 text-left">
              <span className="text-xs font-bold uppercase tracking-widest text-brand-primary bg-brand-primary/5 px-3 py-1 rounded-full">
                Contract Manufacturing
              </span>
              <h2 className="font-display font-bold text-3xl sm:text-4xl text-brand-secondary leading-tight">
                Turnkey Private Labeling & OEM Bottling Services
              </h2>
              <p className="text-slate-600 text-sm leading-relaxed">
                Want to launch your own brand of premium water or custom beverage packaging? We manage everything. From initial design to certified bottling and custom preform molds, our plant delivers robust quality at high production speed.
              </p>

              <div className="p-4 bg-brand-primary/5 rounded-xl border border-brand-primary/10">
                <span className="text-xs font-bold text-brand-primary uppercase tracking-wider block mb-1">Complete Packaging Support</span>
                <p className="text-xs text-slate-600 leading-relaxed">
                  We consult on the ideal water chemical profile (alkalinity, TDS), select rigid PET dimensions, and assist with legal compliance and label safety standards.
                </p>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => onNavigate(NavSection.Oem)}
                  className="px-6 py-3 rounded-lg bg-brand-primary hover:bg-brand-primary/90 text-white font-bold text-sm transition-all flex items-center gap-2 cursor-pointer"
                >
                  Explore OEM Workflow
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-4">
              
              <div className="border-l-4 border-brand-accent pl-6 space-y-6 relative">
                
                <div className="relative">
                  <div className="absolute -left-9 top-1 w-5 h-5 rounded-full bg-brand-accent text-white flex items-center justify-center font-bold text-[10px]">1</div>
                  <h4 className="font-bold text-sm text-brand-secondary">Design & Custom Engineering</h4>
                  <p className="text-xs text-slate-500 mt-1">Develop CAD bottle prototypes, select custom thread specifications, and design premium labeling layouts in compliance with central regulatory bodies.</p>
                </div>

                <div className="relative">
                  <div className="absolute -left-9 top-1 w-5 h-5 rounded-full bg-brand-accent text-white flex items-center justify-center font-bold text-[10px]">2</div>
                  <h4 className="font-bold text-sm text-brand-secondary">Automated Cleanroom Filling</h4>
                  <p className="text-xs text-slate-500 mt-1">High-capacity rotary machines inflate preforms, clean interiors, and fill ozonated water without any physical human touch.</p>
                </div>

                <div className="relative">
                  <div className="absolute -left-9 top-1 w-5 h-5 rounded-full bg-brand-accent text-white flex items-center justify-center font-bold text-[10px]">3</div>
                  <h4 className="font-bold text-sm text-brand-secondary">Logistics & Worldwide Export</h4>
                  <p className="text-xs text-slate-500 mt-1">Wrapped on high-density eco-friendly pallets and barcoded, dispatches are routed across domestic expressways and global shipping channels.</p>
                </div>

              </div>

            </div>

          </div>

        </div>
      </section>

      {/* 7. INDUSTRIES SERVED SECTION */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-brand-light border-t border-slate-200">
        <div className="max-w-7xl mx-auto">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-primary bg-brand-primary/5 px-3 py-1 rounded-full">
              Market Verticals
            </span>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-brand-secondary">
              Catering to Diverse Industries Globally
            </h2>
            <p className="text-slate-600 text-sm">
              Our massive infrastructure and multi-category certifications enable us to execute bulk supplies for highly demanding sectors with precision.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((ind, idx) => (
              <div 
                key={idx} 
                className="p-6 bg-white rounded-xl border border-slate-200 hover:border-brand-primary/20 transition-all flex items-start gap-4"
              >
                <div className="p-3 bg-slate-50 rounded-lg border border-slate-200 shrink-0">
                  {ind.icon}
                </div>
                <div className="space-y-1">
                  <h4 className="font-bold text-base text-brand-secondary">{ind.name}</h4>
                  <p className="text-slate-500 text-xs leading-relaxed">{ind.desc}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 8. TESTIMONIALS SLIDER SECTION */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden">
        <div className="max-w-4xl mx-auto text-center relative">

          <span className="text-xs font-bold uppercase tracking-widest text-brand-primary bg-brand-primary/5 px-3 py-1 rounded-full mb-4 inline-block">
            Client Testimonials
          </span>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeTestimonial}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="space-y-6 pt-6"
            >
              <div className="flex justify-center gap-1">
                {[...Array(TESTIMONIALS_DATA[activeTestimonial].rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-amber-400 fill-amber-400" />
                ))}
              </div>

              <p className="text-slate-700 text-lg sm:text-xl font-light italic leading-relaxed">
                "{TESTIMONIALS_DATA[activeTestimonial].content}"
              </p>

              <div className="flex flex-col items-center pt-4">
                <img 
                  src={TESTIMONIALS_DATA[activeTestimonial].image} 
                  alt={TESTIMONIALS_DATA[activeTestimonial].name} 
                  className="w-14 h-14 rounded-full object-cover border-2 border-brand-primary"
                  referrerPolicy="no-referrer"
                />
                <strong className="text-base text-brand-secondary mt-3 block">{TESTIMONIALS_DATA[activeTestimonial].name}</strong>
                <span className="text-xs text-slate-500 mt-0.5">{TESTIMONIALS_DATA[activeTestimonial].role}, <strong className="text-brand-primary">{TESTIMONIALS_DATA[activeTestimonial].company}</strong></span>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="flex justify-center gap-4 mt-8">
            <button 
              onClick={handlePrevTestimonial}
              className="p-2.5 rounded-full border border-slate-200 text-slate-500 hover:bg-brand-primary hover:text-white transition-all cursor-pointer"
              aria-label="Previous Testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button 
              onClick={handleNextTestimonial}
              className="p-2.5 rounded-full border border-slate-200 text-slate-500 hover:bg-brand-primary hover:text-white transition-all cursor-pointer"
              aria-label="Next Testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

        </div>
      </section>

      {/* 9. LATEST BLOG PREVIEW SECTION */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-brand-light border-t border-slate-200">
        <div className="max-w-7xl mx-auto">
          
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-12 gap-4">
            <div className="space-y-3">
              <span className="text-xs font-bold uppercase tracking-widest text-brand-primary bg-brand-primary/5 px-3 py-1 rounded-full">
                Knowledge Center
              </span>
              <h2 className="font-display font-bold text-3xl sm:text-4xl text-brand-secondary">
                Latest Manufacturing & Water Insights
              </h2>
            </div>
            <button
              onClick={() => onNavigate(NavSection.Blog)}
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-primary hover:text-brand-accent hover:gap-2.5 transition-all cursor-pointer"
            >
              Browse All Articles
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {BLOG_POSTS.map((post) => (
              <div 
                key={post.id}
                className="bg-white rounded-2xl border border-slate-200 overflow-hidden hover:border-brand-primary/20 hover:-translate-y-0.5 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="h-48 overflow-hidden relative">
                    <img 
                      src={post.image} 
                      alt={post.title} 
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-3 right-3 bg-white/95 backdrop-blur-sm px-3 py-1 rounded-lg border border-slate-200/50">
                      <span className="text-[10px] font-bold uppercase text-brand-primary tracking-wider">{post.category}</span>
                    </div>
                  </div>
                  
                  <div className="p-6 space-y-2">
                    <span className="text-[10px] font-semibold text-slate-400 block">{post.date} &bull; {post.readTime}</span>
                    <h3 className="font-display font-bold text-base text-brand-secondary hover:text-brand-primary transition-colors line-clamp-2 cursor-pointer" onClick={() => onNavigate(NavSection.Blog)}>
                      {post.title}
                    </h3>
                    <p className="text-slate-500 text-xs leading-relaxed line-clamp-2">{post.excerpt}</p>
                  </div>
                </div>

                <div className="p-6 pt-0 mt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-[11px] font-medium text-slate-600">By {post.author.split(',')[0]}</span>
                  <button 
                    onClick={() => onNavigate(NavSection.Blog)}
                    className="text-xs font-bold text-brand-primary hover:text-brand-accent cursor-pointer"
                  >
                    Read Post
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 10. LARGE CALL TO ACTION BANNER */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-brand-secondary text-white text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto space-y-6 relative z-10">
          <Droplet className="w-12 h-12 text-cyan-400 mx-auto fill-cyan-400/5" />
          
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl tracking-tight leading-tight">
            Ready to Partner with India's Elite <br />Bottling Manufacturer?
          </h2>
          
          <p className="text-slate-300 text-base max-w-2xl mx-auto font-light leading-relaxed">
            From single pallet wholesale shipments to international custom PET private-label packaging contracts, we possess the raw capacity and certifications to scale your beverage business.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
            <button
              onClick={() => onNavigate(NavSection.Contact)}
              className="px-8 py-4 rounded-lg text-white font-bold text-sm bg-brand-primary hover:bg-brand-primary/90 transition-all cursor-pointer"
            >
              Request Corporate Quotation
            </button>
            <button
              onClick={() => onNavigate(NavSection.Oem)}
              className="px-8 py-4 rounded-lg border border-white/20 bg-white/5 hover:bg-white/10 text-white font-semibold text-sm transition-all cursor-pointer"
            >
              Consult OEM Options
            </button>
          </div>

          <div className="pt-6 text-xs text-slate-400 flex flex-wrap justify-center gap-6">
            <span>✓ Fast Turnaround</span>
            <span>✓ Certified Laboratory Testing</span>
            <span>✓ Export Packaging Grade</span>
          </div>

        </div>
      </section>

    </div>
  );
}
