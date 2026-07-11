/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { NavSection } from '../types';
import { 
  Factory, ShieldCheck, Cpu, HardDrive, 
  Warehouse, Zap, ArrowRight, Activity, Droplet
} from 'lucide-react';

interface ManufacturingViewProps {
  onNavigate: (section: NavSection) => void;
}

export default function ManufacturingView({ onNavigate }: ManufacturingViewProps) {
  
  const techCards = [
    {
      title: 'Monoblock Rotary Blow-Fill-Cap',
      desc: 'German-engineered Sidel blocks that combine bottle inflating, rinsing, filling, and closing into a single sterile enclosure, running at 24,000 bottles per hour.',
      icon: <Cpu className="w-8 h-8 text-brand-primary" />
    },
    {
      title: 'Advanced Reverse Osmosis (RO)',
      desc: 'Double-pass high-flux composite membranes that filter out 99.9% of dissolved solids, heavy metals, and organic pollutants from raw source water.',
      icon: <Droplet className="w-8 h-8 text-brand-accent" />
    },
    {
      title: 'Dual UV-C Sterilization',
      desc: 'Double physical barriers utilizing precise 254nm ultraviolet light chambers, which destroy microbial DNA structures with absolute certainty.',
      icon: <Activity className="w-8 h-8 text-brand-primary" />
    },
    {
      title: 'High-Concentration Ozonization',
      desc: 'In-line micro-bubble ozone injection that provides persistent sterile barriers post-packaging, breaking down into pure oxygen within hours.',
      icon: <Zap className="w-8 h-8 text-brand-accent" />
    },
    {
      title: 'Automated Vision Inspection',
      desc: 'High-speed robotic cameras that inspect fill levels, label alignment, cap seals, and bottle clarity, rejecting defective pieces in milliseconds.',
      icon: <ShieldCheck className="w-8 h-8 text-brand-primary" />
    },
    {
      title: 'JIT Climate Warehousing',
      desc: 'Over 80,000 sq.ft. of food-safe dust-proof warehouses, running smart pallet storage trackers for immediate B2B freight dispatch.',
      icon: <Warehouse className="w-8 h-8 text-brand-accent" />
    }
  ];

  const filtrationSteps = [
    {
      num: '01',
      phase: 'Sourcing & Pressure Sand Filters',
      desc: 'Sourced from deep underground aquifers, raw water is pushed through graded multi-media sand filters to eliminate suspended organic sand and debris.'
    },
    {
      num: '02',
      phase: 'Activated Carbon Adsorption',
      desc: 'Absorbs chlorine, pesticides, VOCs, and organic odor compounds, restoring raw mountain-fresh neutral water taste and color.'
    },
    {
      num: '03',
      phase: 'Antiscalant & Micron Filtration',
      desc: 'Fed through 5-micron and 1-micron sediment cartridges to clear micro-particulates before reaching the high-pressure reverse osmosis pumps.'
    },
    {
      num: '04',
      phase: 'High-Pressure Double Pass RO',
      desc: 'Pushed at 15 Bar through spiral-wound composite membranes, extracting heavy metal ions and excess salts to balance TDS levels precisely.'
    },
    {
      num: '05',
      phase: 'Mineral Enrichment Matrix',
      desc: 'Pure RO water is mineralized by injecting micro-doses of premium pharmaceutical-grade magnesium (Mg) and potassium (K) salts for a smooth taste.'
    },
    {
      num: '06',
      phase: 'UV-C & Absolute 0.2 Micron Barriers',
      desc: 'Passed through intense UV light chambers and absolute pleated cartridge filters to trap any leftover microscopic spores or biological traces.'
    },
    {
      num: '07',
      phase: 'In-line Ozonization & Sealing',
      desc: 'Ozone gas is dissolved into the finished water stream immediately before rotary sterile capping. Caps are sterilized with ozonated spray.'
    }
  ];

  return (
    <div className="relative">
      
      {/* Page Header */}
      <section className="bg-brand-secondary text-white py-16 px-4 text-center">
        <div className="max-w-4xl mx-auto space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-accent bg-white/10 px-3 py-1 rounded-full">
            Manufacturing Facility
          </span>
          <h1 className="font-display font-extrabold text-3xl sm:text-5xl tracking-tight leading-tight">
            Sterile Automation. Massive Scale.
          </h1>
          <p className="text-slate-300 text-sm max-w-2xl mx-auto leading-relaxed font-light">
            Our state-of-the-art Pune plant is engineered to achieve 100% sterile operations without a single human touch point.
          </p>
        </div>
      </section>

      {/* Overview stats layout */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
            <div className="lg:col-span-6 space-y-4 text-left">
              <span className="text-xs font-bold text-brand-primary uppercase tracking-wider">Class 100 sterile Cleanrooms</span>
              <h2 className="font-display font-bold text-3xl text-brand-secondary leading-tight">
                High-Speed Monoblock Manufacturing Ecosystem
              </h2>
              <p className="text-slate-600 text-sm leading-relaxed">
                Consistent water bottling requires high-speed machinery operating in controlled environments. At Bhagirathi Industries, our plant air is continually scrubbed using positive pressure double-HEPA filtration, maintaining a Class 100 sterile cleanroom. 
              </p>
              <p className="text-slate-600 text-sm leading-relaxed">
                By pairing blowing, rinsing, filling, and hermetic cap-screwing into a single continuous monolithic process loop, we completely eliminate contamination risks. This guarantees a safe shelf life of up to 12 months.
              </p>
              <div className="pt-4">
                <button
                  onClick={() => onNavigate(NavSection.Oem)}
                  className="px-5 py-3 rounded-lg bg-brand-primary hover:bg-brand-primary/90 text-white text-xs font-bold transition-all flex items-center gap-2 cursor-pointer"
                >
                  Consult Custom PET Molds
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="relative rounded-2xl overflow-hidden border border-slate-200">
                <img 
                  src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=800" 
                  alt="Industrial machinery" 
                  className="w-full h-96 object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/10 to-transparent flex items-end p-6">
                  <div className="text-white text-left">
                    <strong className="text-lg font-display block">Fully Automated Packaging</strong>
                    <span className="text-xs text-slate-300">Monitored 24/7 by smart SCADA panels.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Technology Cards Grid */}
          <div className="border-t border-slate-100 pt-16">
            <div className="text-center max-w-2xl mx-auto mb-16 space-y-2">
              <span className="text-xs font-bold uppercase tracking-widest text-brand-primary bg-brand-primary/5 px-3 py-1 rounded-full">
                Factory Technology
              </span>
              <h3 className="font-display font-bold text-2xl text-brand-secondary">Core Mechanical Infrastructure</h3>
              <p className="text-slate-500 text-xs leading-relaxed">Every unit in our factory is designed for peak efficiency, hygienic containment, and minimum utility wastage.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {techCards.map((tech, idx) => (
                <div key={idx} className="p-6 bg-white border border-slate-200 rounded-xl text-left space-y-3 hover:border-slate-300 transition-colors">
                  <div className="p-3 bg-white border border-slate-100 rounded-xl w-fit text-brand-primary">
                    {tech.icon}
                  </div>
                  <h4 className="font-bold text-base text-brand-secondary">{tech.title}</h4>
                  <p className="text-slate-500 text-xs leading-relaxed">{tech.desc}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* The 7-Stage Water Treatment Diagram */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-brand-light text-left">
        <div className="max-w-7xl mx-auto">
          
          <div className="max-w-3xl mb-16 space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-primary bg-brand-primary/5 px-3 py-1 rounded-full">
              Purification walkthrough
            </span>
            <h2 className="font-display font-bold text-3xl text-brand-secondary">
              Our Multi-Barrier Water Filtration Protocol
            </h2>
            <p className="text-slate-600 text-sm">
              Sourced groundwater undergoes seven distinct physical and chemical defense barriers to reach a state of raw purity before it is filled into our sterile bottles.
            </p>
          </div>

          <div className="space-y-6 relative border-l-2 border-brand-primary/30 pl-6 sm:pl-10 ml-4 sm:ml-6">
            {filtrationSteps.map((step, idx) => (
              <div key={idx} className="relative group bg-white p-6 rounded-xl border border-slate-200 hover:border-slate-300 transition-colors">
                {/* Visual marker node */}
                <div className="absolute -left-[45px] sm:-left-[61px] top-6 w-9 h-9 rounded-full bg-brand-primary text-white border-4 border-slate-50 flex items-center justify-center font-display font-bold text-xs group-hover:bg-brand-accent transition-colors shadow-sm">
                  {step.num}
                </div>
                
                <div className="space-y-1">
                  <h4 className="font-display font-bold text-base text-brand-secondary group-hover:text-brand-primary transition-colors">
                    {step.phase}
                  </h4>
                  <p className="text-slate-500 text-xs leading-relaxed font-light">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Bottom Dispatch CTA Banner */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white text-center">
        <div className="max-w-4xl mx-auto space-y-6">
          <Factory className="w-12 h-12 text-brand-primary mx-auto" />
          <h3 className="font-display font-bold text-2xl sm:text-3xl text-brand-secondary">
            Inspect our Production Lines in Person
          </h3>
          <p className="text-slate-600 text-xs sm:text-sm leading-relaxed max-w-2xl mx-auto">
            We operate with complete corporate transparency. Corporate procurement leads, FMCG buyers, and bulk private-label distributors are welcome to request custom technical visits and audit our sterile facilities.
          </p>
          <div className="pt-4">
            <button
              onClick={() => onNavigate(NavSection.Contact)}
              className="px-6 py-3 rounded-lg bg-brand-primary hover:bg-brand-primary/90 text-white font-bold text-sm transition-colors cursor-pointer"
            >
              Schedule Factory Audit Visit
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
