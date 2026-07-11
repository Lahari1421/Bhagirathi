/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { NavSection } from '../types';
import { 
  Building, Target, Eye, ShieldAlert, Award, 
  Users, Calendar, ChevronRight, CheckCircle2 
} from 'lucide-react';

interface AboutViewProps {
  onNavigate: (section: NavSection) => void;
}

export default function AboutView({ onNavigate }: AboutViewProps) {
  
  const values = [
    {
      title: 'Uncompromising Safety',
      desc: 'We operate under sterile cleanroom protocols. If it isn’t absolutely pure, it doesn’t leave our loading bays.',
      icon: <ShieldAlert className="w-8 h-8 text-brand-primary" />
    },
    {
      title: 'Continuous Innovation',
      desc: 'Investing in robotic Japanese blow-molders and advanced multi-barrier ozonizers to stay at the cutting edge.',
      icon: <Award className="w-8 h-8 text-brand-accent" />
    },
    {
      title: 'Ethical Sourcing',
      desc: 'Partnering with central groundwater authorities to execute rainwater harvesting and aquifer replenishment.',
      icon: <Target className="w-8 h-8 text-brand-primary" />
    },
    {
      title: 'Collaborative Growth',
      desc: 'Treating our private label clients as long-term joint ventures, supporting them with legal standards & logistics.',
      icon: <Users className="w-8 h-8 text-brand-accent" />
    }
  ];

  const timelineSteps = [
    {
      year: '2008',
      title: 'Inception of Bhagirathi Water',
      desc: 'Started as a regional bulk water supplier in Pune, Maharashtra with a single 10,000 LPH filtration unit.'
    },
    {
      year: '2013',
      title: 'State Licensing & BIS Onboarding',
      desc: 'Secured BIS IS 14543 gold license. Expanded into packaged PET bottles of 1 Litre, serving local hospitality brands.'
    },
    {
      year: '2018',
      title: 'Corporate HQ & Cleanroom Installation',
      desc: 'Established our modern, fully-automated Chakan plant. Installed robotic German rotary filling blocks with zero-touch packing.'
    },
    {
      year: '2022',
      title: 'Alkaline Water & Plastic Expansion',
      desc: 'Launched the premium pH+ 8.5 alkaline mineral water series. Set up our dedicated plastic blow-molding and preform division.'
    },
    {
      year: '2026',
      title: 'rPET Circular Economy & Exports',
      desc: 'Initiated the EcoHydrate rPET (Recycled PET) line. Successfully exporting premium bottled water to Southeast Asia and Gulf markets.'
    }
  ];

  const leaders = [
    {
      name: 'Madhusudan Deshpande',
      role: 'Founder & Managing Director',
      bio: 'Over 25 years of experience in chemical engineering and bulk manufacturing systems. Sowed the seeds of Bhagirathi with a passion for sterile, accessible drinking solutions.',
      img: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=300'
    },
    {
      name: 'Aditi Deshpande-Joshi',
      role: 'Director of Strategic Alliances & B2B',
      bio: 'An MBA from Wharton School, she oversees contract packaging (OEM), corporate accounts, and international export logistics across Southeast Asia and Gulf countries.',
      img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=300'
    },
    {
      name: 'Dr. Ramesh Sitaraman',
      role: 'Chief Biochemist & QA Lead',
      bio: 'Holding a Ph.D. in microbiology, Dr. Ramesh oversees our 4 central testing labs, ensuring strict compliance with BIS standards and maintaining cleanroom sanitization.',
      img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=300'
    }
  ];

  return (
    <div className="relative">
      
      {/* Visual Header Banner */}
      <section className="bg-gradient-to-br from-slate-900 to-brand-secondary text-white py-16 px-4 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-brand-primary/10 pointer-events-none"></div>
        <div className="max-w-4xl mx-auto space-y-4 relative z-10">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-accent bg-brand-accent/10 px-3 py-1 rounded-full">
            Our Corporate Identity
          </span>
          <h1 className="font-display font-extrabold text-3xl sm:text-5xl tracking-tight leading-tight">
            The Team Behind the Purity
          </h1>
          <p className="text-slate-300 text-sm max-w-2xl mx-auto leading-relaxed font-light">
            Sourcing responsibly, manufacturing with high-speed automated cleanrooms, and building collaborative trust since 2008.
          </p>
        </div>
      </section>

      {/* Corporate Overview & Bento Grid of Mission/Vision */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
            <div className="lg:col-span-6 space-y-4">
              <span className="text-xs font-bold text-brand-primary uppercase tracking-wider">Company History</span>
              <h2 className="font-display font-bold text-3xl text-brand-secondary leading-tight">
                An Industrial Powerhouse For Packaged Beverages
              </h2>
              <p className="text-slate-600 text-sm leading-relaxed">
                Bhagirathi Industries Pvt. Ltd. represents the peak of modern packaging technology in India. Located in Pune, Maharashtra, our facility is equipped with automated rotary blowing machines, high-output filling blocks, and high-precision testing labs. We work tirelessly to support over 450 corporate and retail partners who rely on our prompt dispatches and perfect quality.
              </p>
              <p className="text-slate-600 text-sm leading-relaxed">
                Our plant runs with a Zero Liquid Waste discharge policy. We actively capture rainfall to recharge subterranean water beds, ensuring we protect the resources we rely on.
              </p>
            </div>

            <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
              
              <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100 flex flex-col justify-between space-y-4">
                <Target className="w-10 h-10 text-brand-primary" />
                <div>
                  <h3 className="font-display font-bold text-base text-brand-secondary mb-1">Our Mission</h3>
                  <p className="text-xs text-slate-500 leading-relaxed">To manufacture elite-grade drinking water and container products using fully-sterile robotics, minimizing environmental footprints at competitive scale.</p>
                </div>
              </div>

              <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100 flex flex-col justify-between space-y-4">
                <Eye className="w-10 h-10 text-brand-accent" />
                <div>
                  <h3 className="font-display font-bold text-base text-brand-secondary mb-1">Our Vision</h3>
                  <p className="text-xs text-slate-500 leading-relaxed">To become the premier global provider of private-label contract bottling and bio-alkaline beverages, renowned for GRS-certified plastic recyclability.</p>
                </div>
              </div>

            </div>
          </div>

          {/* Core Corporate Values */}
          <div className="border-t border-slate-100 pt-16">
            <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
              <span className="text-xs font-bold uppercase tracking-widest text-brand-primary bg-brand-primary/5 px-3 py-1 rounded-full">
                Core Values
              </span>
              <h3 className="font-display font-bold text-2xl text-brand-secondary">What Guides Our Operations</h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((v, idx) => (
                <div key={idx} className="p-6 bg-white border border-slate-200/60 rounded-xl shadow-sm space-y-3">
                  <div className="p-2 bg-slate-50 rounded-lg w-fit border border-slate-100">
                    {v.icon}
                  </div>
                  <h4 className="font-bold text-sm text-brand-secondary">{v.title}</h4>
                  <p className="text-xs text-slate-500 leading-relaxed">{v.desc}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* Interactive Growth Timeline */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50 border-y border-slate-200/50">
        <div className="max-w-7xl mx-auto">
          
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-primary bg-brand-primary/5 px-3 py-1 rounded-full">
              Growth Journey
            </span>
            <h2 className="font-display font-bold text-3xl text-brand-secondary">Milestones of Excellence</h2>
            <p className="text-slate-500 text-sm">Tracing our transition from a local supplier to an export-ready packaging conglomerate.</p>
          </div>

          {/* Horizontal/Vertical timeline block */}
          <div className="relative border-l-2 border-brand-primary/20 md:border-l-0 md:border-t-2 md:grid md:grid-cols-5 md:gap-6 pl-6 md:pl-0 pt-0 md:pt-8 space-y-8 md:space-y-0">
            {timelineSteps.map((step, idx) => (
              <div key={idx} className="relative text-left">
                {/* Node circle */}
                <div className="absolute -left-10 md:left-0 -top-1 md:-top-[41px] w-7 h-7 rounded-full bg-brand-primary text-white border-4 border-slate-50 flex items-center justify-center font-bold text-xs shadow-md">
                  {idx + 1}
                </div>
                
                <div className="space-y-1 md:pt-2">
                  <span className="text-2xl font-display font-extrabold text-brand-accent block">{step.year}</span>
                  <h4 className="font-bold text-sm text-brand-secondary">{step.title}</h4>
                  <p className="text-xs text-slate-500 leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-primary bg-brand-primary/5 px-3 py-1 rounded-full">
              Executive Board
            </span>
            <h2 className="font-display font-bold text-3xl text-brand-secondary">Guided by Industry Experts</h2>
            <p className="text-slate-500 text-sm">Combining scientific methodology with global market execution.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {leaders.map((l, idx) => (
              <div key={idx} className="bg-white rounded-2xl border border-slate-200/50 overflow-hidden shadow-sm hover:shadow-md transition-all">
                <div className="h-64 overflow-hidden relative">
                  <img 
                    src={l.img} 
                    alt={l.name} 
                    className="w-full h-full object-cover object-top"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="p-6 space-y-2 text-left">
                  <h3 className="font-display font-bold text-lg text-brand-secondary">{l.name}</h3>
                  <span className="text-xs font-bold text-brand-accent block uppercase tracking-wide">{l.role}</span>
                  <p className="text-slate-500 text-xs leading-relaxed font-light pt-2">{l.bio}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Core CSR Call-out banner */}
          <div className="mt-20 p-8 rounded-2xl bg-brand-secondary text-white flex flex-col md:flex-row items-center justify-between gap-6 border border-white/10 shadow-lg">
            <div className="space-y-2 text-left max-w-2xl">
              <span className="text-xs uppercase font-bold text-brand-accent tracking-widest block">Ethical Operations</span>
              <h3 className="font-display font-bold text-xl">Protecting Our Water Ecosystems</h3>
              <p className="text-slate-300 text-xs leading-relaxed font-light">
                For every million litres of water we bottles, we capture and channel over 1.2 million litres back into underground rock aquifers via rain collection wells. Purity and respect are our twin guiding pillars.
              </p>
            </div>
            <button
              onClick={() => onNavigate(NavSection.Contact)}
              className="px-6 py-3 rounded-xl bg-white text-brand-secondary font-bold text-xs hover:bg-slate-100 transition-colors shrink-0 cursor-pointer"
            >
              Get In Touch With Leadership
            </button>
          </div>

        </div>
      </section>

    </div>
  );
}
