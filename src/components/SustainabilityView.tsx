/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { NavSection } from '../types';
import { 
  Leaf, Sun, Droplets, RotateCcw, ShieldAlert,
  ArrowRight, Landmark, Globe, CheckCircle2
} from 'lucide-react';

interface SustainabilityViewProps {
  onNavigate: (section: NavSection) => void;
}

export default function SustainabilityView({ onNavigate }: SustainabilityViewProps) {
  
  const initiatives = [
    {
      title: 'Water Resource Stewardship',
      desc: 'We map raw water usage. For every litre harvested from aquifers, our rainwater collection channels feed 1.2 litres back into underground rock layers via deep recharging wells.',
      icon: <Droplets className="w-8 h-8 text-cyan-500" />
    },
    {
      title: 'rPET Circular Packaging',
      desc: 'We are expanding our EcoHydrate vertical, utilizing certified post-consumer recycled PET resins. This minimizes marine and landfill plastics and lowers raw carbon footprints by 65%.',
      icon: <RotateCcw className="w-8 h-8 text-brand-accent" />
    },
    {
      title: 'Clean Solar Energy',
      desc: 'Over 40% of our factory\'s mechanical electrical requirements are drawn from in-house high-efficiency photovoltaic solar roofs, cutting annual grid reliance.',
      icon: <Sun className="w-8 h-8 text-amber-500" />
    },
    {
      title: 'Zero Liquid Discharge (ZLD)',
      desc: 'Every drop of water rejected during our multi-stage reverse osmosis filtration is directed to secondary filtration blocks. It is recycled for plant cooling towers and gardening.',
      icon: <Leaf className="w-8 h-8 text-emerald-500" />
    }
  ];

  return (
    <div>
      
      {/* Page Header */}
      <section className="bg-brand-secondary text-white py-16 px-4 text-center">
        <div className="max-w-4xl mx-auto space-y-4">
          <span className="text-xs font-semibold uppercase tracking-wider text-brand-accent bg-white/10 px-3 py-1 rounded-full">
            Sustainability & ESG
          </span>
          <h1 className="font-display font-extrabold text-3xl sm:text-5xl tracking-tight leading-tight">
            Protecting Our Source Ecosystem
          </h1>
          <p className="text-slate-300 text-sm max-w-2xl mx-auto leading-relaxed font-light">
            We are dedicated to a circular economy, water stewardship, solar-powered bottling, and plastic-neutral FMCG manufacturing.
          </p>
        </div>
      </section>

      {/* Sustainability core infographics / items */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white text-left">
        <div className="max-w-7xl mx-auto">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
            <div className="lg:col-span-6 space-y-4">
              <span className="text-xs font-semibold text-brand-primary uppercase tracking-wider">Circular Economy Strategy</span>
              <h2 className="font-display font-bold text-3xl text-brand-secondary leading-tight">
                Pioneering a Sustainable Carbon-Neutral Future
              </h2>
              <p className="text-slate-600 text-sm leading-relaxed">
                As a leading manufacturer, we understand that water is a precious resource. Bhagirathi Industries operates with a zero-liquid-waste discharge mandate. Every drop rejected by our RO filters is recycled, ensuring we protect the resources we rely on.
              </p>
              <p className="text-slate-600 text-sm leading-relaxed">
                We also help private-label brands meet their sustainability metrics. By transitioning their bottles to post-consumer recycled PET (rPET) or plant-based sugarcane cartons, they reduce carbon footprints while retaining exceptional clarity.
              </p>
              
              <div className="pt-4 flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => onNavigate(NavSection.Products)}
                  className="px-5 py-3 rounded-lg bg-brand-primary hover:bg-brand-primary/90 text-white text-xs font-bold transition-all cursor-pointer"
                >
                  View Eco-Friendly Catalog
                </button>
                <button
                  onClick={() => onNavigate(NavSection.Contact)}
                  className="px-5 py-3 rounded-lg border text-slate-600 hover:bg-slate-50 text-xs font-bold transition-all cursor-pointer"
                >
                  Consult ESG Parameters
                </button>
              </div>
            </div>

            <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
              
              <div className="p-6 bg-white border border-slate-200 rounded-xl space-y-2">
                <span className="text-4xl font-display font-black text-brand-accent">120%</span>
                <strong className="text-sm text-brand-secondary block">Water Recharge Index</strong>
                <p className="text-xs text-slate-500 leading-relaxed">We harvest and recharge more groundwater back into subterranean aquifers than we extract.</p>
              </div>

              <div className="p-6 bg-white border border-slate-200 rounded-xl space-y-2">
                <span className="text-4xl font-display font-black text-brand-accent">-65%</span>
                <strong className="text-sm text-brand-secondary block">CO2 Carbon Footprint</strong>
                <p className="text-xs text-slate-500 leading-relaxed">rPET (Recycled PET) packaging solutions significantly reduce raw plastic greenhouse gases.</p>
              </div>

              <div className="p-6 bg-white border border-slate-200 rounded-xl space-y-2">
                <span className="text-4xl font-display font-black text-brand-accent">40%</span>
                <strong className="text-sm text-brand-secondary block">Photovoltaic Solar Roofs</strong>
                <p className="text-xs text-slate-500 leading-relaxed">Four-tenths of our entire plant power is generated from high-capacity solar panels.</p>
              </div>

              <div className="p-6 bg-white border border-slate-200 rounded-xl space-y-2">
                <span className="text-4xl font-display font-black text-brand-accent">ZLD</span>
                <strong className="text-sm text-brand-secondary block">Zero Liquid Waste Discharge</strong>
                <p className="text-xs text-slate-500 leading-relaxed">Absolutely no industrial liquid waste is discharged into external environment aquifers.</p>
              </div>

            </div>
          </div>

          {/* ESG Initiatives details */}
          <div className="border-t border-slate-100 pt-16">
            <div className="text-center max-w-2xl mx-auto mb-16 space-y-2">
              <span className="text-xs font-semibold uppercase tracking-wider text-brand-primary bg-brand-primary/5 px-3 py-1 rounded-full">
                Green Initiatives
              </span>
              <h3 className="font-display font-bold text-2xl text-brand-secondary">Commitments in Action</h3>
              <p className="text-slate-500 text-xs">Our daily operational initiatives are carefully designed to protect water resources and promote sustainability.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {initiatives.map((item, idx) => (
                <div key={idx} className="p-6 bg-white border border-slate-200 rounded-xl text-left space-y-3 hover:shadow-sm transition-all">
                  <div className="p-3 bg-brand-light rounded-xl w-fit border border-slate-200">
                    {item.icon}
                  </div>
                  <h4 className="font-bold text-lg text-brand-secondary">{item.title}</h4>
                  <p className="text-slate-500 text-xs leading-relaxed font-light">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* CSR / Social Impact Call-out */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-brand-light border-y border-slate-200/50 text-left">
        <div className="max-w-4xl mx-auto bg-white rounded-2xl border border-slate-200 p-8 sm:p-12 space-y-6">
          <span className="text-xs font-semibold text-brand-primary uppercase tracking-wider block">Community Support (CSR)</span>
          <h3 className="font-display font-bold text-2xl text-brand-secondary leading-tight">Empowering Rural Schoolrooms & Health Centres</h3>
          <p className="text-slate-600 text-sm leading-relaxed">
            As a leading manufacturing company, we believe our social footprint is as important as our carbon metrics. Through our corporate foundation, we provide free clean drinking water filtration systems, solar arrays, and high-density sanitizing filters to 45+ schools and regional primary health centers in the rural regions of Maharashtra. We also lead local plastic collection drives, converting gathered plastic into school desk supplies.
          </p>
          <div className="pt-4 border-t">
            <span className="text-xs font-semibold text-slate-500 block mb-2">Our partners:</span>
            <div className="flex flex-wrap gap-4 text-xs font-bold text-brand-secondary">
              <span className="px-3 py-1 bg-brand-light rounded-lg">✓ UNICEF Clean Water Program</span>
              <span className="px-3 py-1 bg-brand-light rounded-lg">✓ Maharashtra Rural Development Foundation</span>
              <span className="px-3 py-1 bg-brand-light rounded-lg">✓ Green Plastics Circular Network</span>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
