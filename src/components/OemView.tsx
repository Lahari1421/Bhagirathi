/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, FormEvent } from 'react';
import { NavSection } from '../types';
import { OEM_PROCESS_STEPS } from '../data';
import { 
  CheckCircle2, ArrowRight, Layers, Sparkles, 
  Settings, PenTool, Database, HelpCircle, Hammer
} from 'lucide-react';

interface OemViewProps {
  onNavigate: (section: NavSection) => void;
}

export default function OemView({ onNavigate }: OemViewProps) {
  
  // Custom design interactive configuration state
  const [config, setConfig] = useState({
    volume: '1L Premium',
    waterType: 'Bio-Alkaline pH+ 8.5',
    capType: 'Flat High-Neck Seal',
    material: 'Virgin Food-Grade PET',
    embossingText: 'GRAND REGENCY',
    quantity: '25,000'
  });

  const [blueprintSubmitted, setBlueprintSubmitted] = useState(false);

  const handleBlueprintSubmit = (e: FormEvent) => {
    e.preventDefault();
    setBlueprintSubmitted(true);
    setTimeout(() => {
      setBlueprintSubmitted(false);
    }, 8000);
  };

  return (
    <div className="relative">
      
      {/* Page Banner */}
      <section className="bg-gradient-to-br from-slate-900 to-brand-secondary text-white py-16 px-4 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-brand-primary/15 pointer-events-none"></div>
        <div className="max-w-4xl mx-auto space-y-4 relative z-10">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-accent bg-brand-accent/10 px-3 py-1 rounded-full">
            OEM & Private Label Services
          </span>
          <h1 className="font-display font-extrabold text-3xl sm:text-5xl tracking-tight leading-tight">
            Your Brand. Sourced & Bottled by Experts.
          </h1>
          <p className="text-slate-300 text-sm max-w-2xl mx-auto leading-relaxed font-light">
            Providing custom bottle molds, compliant label consulting, and high-speed filling dispatches under your corporate logo.
          </p>
        </div>
      </section>

      {/* OEM Core Details & Processing Timeline */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white text-left">
        <div className="max-w-7xl mx-auto">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
            <div className="lg:col-span-6 space-y-4">
              <span className="text-xs font-bold text-brand-primary uppercase tracking-wider">End-to-End B2B Manufacturing</span>
              <h2 className="font-display font-bold text-3xl text-brand-secondary leading-tight">
                Scale Your Brand on Our Industrial Infrastructure
              </h2>
              <p className="text-slate-600 text-sm leading-relaxed">
                Launching a beverage line or offering custom-branded water inside five-star rooms requires reliable contract manufacturing. Bhagirathi Industries provides deep engineering consulting, custom bottle shape molds, and cleanroom filling services.
              </p>
              <p className="text-slate-600 text-sm leading-relaxed">
                Whether you need lightweight 250ml units for airlines, premium glass bottles for elite restaurants, or custom PET bottle containers, we have the capacity to handle bulk orders smoothly.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 text-xs text-slate-700">
                <div className="flex gap-2 items-center">
                  <CheckCircle2 className="w-4.5 h-4.5 text-brand-accent shrink-0" />
                  <span>FDA-Compliant Resins Only</span>
                </div>
                <div className="flex gap-2 items-center">
                  <CheckCircle2 className="w-4.5 h-4.5 text-brand-accent shrink-0" />
                  <span>In-House Lab Certification</span>
                </div>
                <div className="flex gap-2 items-center">
                  <CheckCircle2 className="w-4.5 h-4.5 text-brand-accent shrink-0" />
                  <span>Custom Neck Finishes</span>
                </div>
                <div className="flex gap-2 items-center">
                  <CheckCircle2 className="w-4.5 h-4.5 text-brand-accent shrink-0" />
                  <span>Secure Global Logistics</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 space-y-4 bg-slate-50 border border-slate-200/50 p-6 sm:p-8 rounded-2xl">
              <h3 className="font-display font-bold text-lg text-brand-secondary">Private Label Services Include:</h3>
              <ul className="space-y-3.5 text-xs text-slate-600">
                <li className="flex items-start gap-2.5">
                  <Settings className="w-4 h-4 text-brand-primary shrink-0 mt-0.5" />
                  <span><strong>Custom Preforms:</strong> Custom preform engineering, thickness distributions, and light-weight configurations.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <PenTool className="w-4 h-4 text-brand-primary shrink-0 mt-0.5" />
                  <span><strong>Compliant Branding:</strong> Compliant label design complying with central food safety standard agencies.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Layers className="w-4 h-4 text-brand-primary shrink-0 mt-0.5" />
                  <span><strong>Dual Packaging:</strong> Double-packaging options including cardboard boxes, heavy crates, or biodegradable stretch-wraps.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Database className="w-4 h-4 text-brand-primary shrink-0 mt-0.5" />
                  <span><strong>Export Seaworthy Stacking:</strong> High-density seaworthy stacking, climate-controlled container routing, and FOB clearing dispatches.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* OEM PROCESS STEPS VISUALIZATION */}
          <div className="border-t border-slate-100 pt-16">
            <div className="text-center max-w-2xl mx-auto mb-16 space-y-2">
              <span className="text-xs font-bold uppercase tracking-widest text-brand-primary bg-brand-primary/5 px-3 py-1 rounded-full">
                Step-by-Step
              </span>
              <h3 className="font-display font-bold text-2xl text-brand-secondary">The Contract Manufacturing Flow</h3>
              <p className="text-slate-500 text-xs">Our seamless journey maps your requirements to high-volume shipping dispatches in 7 steps.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {OEM_PROCESS_STEPS.map((step) => (
                <div key={step.step} className="p-6 bg-slate-50 border border-slate-200/50 rounded-2xl relative text-left space-y-2">
                  <div className="absolute top-4 right-4 font-display font-black text-2xl text-brand-accent/25">
                    {step.step < 10 ? `0${step.step}` : step.step}
                  </div>
                  <strong className="text-xs uppercase tracking-widest text-brand-accent font-semibold block mb-1">Phase {step.step}</strong>
                  <h4 className="font-bold text-sm text-brand-secondary leading-tight">{step.title}</h4>
                  <p className="text-slate-500 text-xs leading-relaxed">{step.description}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* INTERACTIVE B2B BLUEPRINT CUSTOMIZER (The unique B2B interaction) */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50 border-t border-slate-200/50 text-left">
        <div className="max-w-7xl mx-auto">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-primary bg-brand-primary/5 px-3 py-1 rounded-full">
              Interactive Design
            </span>
            <h2 className="font-display font-bold text-3xl text-brand-secondary">
              Configure Your Private Label Blueprint
            </h2>
            <p className="text-slate-600 text-sm">
              Model your virtual bottle specification. Select key volumes, water formula, cap designs, and input custom corporate engraving text to create an instant prototype blueprint.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Design Controls */}
            <div className="lg:col-span-7 bg-white rounded-3xl border border-slate-200/60 p-6 sm:p-10 shadow-sm space-y-6">
              
              <form onSubmit={handleBlueprintSubmit} className="space-y-6">
                
                {/* 1. Volume Selection */}
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-700 uppercase block">1. Target Bottle Volume</label>
                  <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
                    {['250ml Cups', '500ml Classic', '1L Premium', '2L Square', '20L Can'].map((vol) => (
                      <button
                        key={vol}
                        type="button"
                        onClick={() => setConfig(prev => ({ ...prev, volume: vol }))}
                        className={`py-2 px-1 text-center rounded-xl text-[11px] font-bold border transition-all cursor-pointer ${
                          config.volume === vol
                            ? 'bg-brand-primary border-brand-primary text-white shadow-md'
                            : 'bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100'
                        }`}
                      >
                        {vol}
                      </button>
                    ))}
                  </div>
                </div>

                {/* 2. Water Type formula */}
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-700 uppercase block">2. Water Mineralization Formula</label>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                    {[
                      { name: 'Balanced Neutral', desc: 'Slight neutral pH (7.2)' },
                      { name: 'Bio-Alkaline pH+ 8.5', desc: 'Electrolyte rich active' },
                      { name: 'Natural Springs', desc: 'Subterranean deep minerals' }
                    ].map((formula) => (
                      <button
                        key={formula.name}
                        type="button"
                        onClick={() => setConfig(prev => ({ ...prev, waterType: formula.name }))}
                        className={`p-3 text-left rounded-xl border transition-all cursor-pointer ${
                          config.waterType === formula.name
                            ? 'bg-brand-secondary border-brand-secondary text-white shadow-md'
                            : 'bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100'
                        }`}
                      >
                        <strong className="block text-[11px]">{formula.name}</strong>
                        <span className="text-[10px] opacity-80 block">{formula.desc}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* 3. Cap style */}
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-700 uppercase block">3. Sealing Cap & Thread Style</label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {['Flat High-Neck Seal', 'Sports Flip Lid', 'Aluminium Cap', 'Easy Grip Handle'].map((cap) => (
                      <button
                        key={cap}
                        type="button"
                        onClick={() => setConfig(prev => ({ ...prev, capType: cap }))}
                        className={`py-2.5 px-2 text-center rounded-xl text-[10px] font-bold border transition-all cursor-pointer ${
                          config.capType === cap
                            ? 'bg-brand-primary border-brand-primary text-white shadow-md'
                            : 'bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100'
                        }`}
                      >
                        {cap}
                      </button>
                    ))}
                  </div>
                </div>

                {/* 4. Branding engraving */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-700 uppercase block">4. Custom Logo Engraving Text</label>
                  <input
                    type="text"
                    maxLength={20}
                    value={config.embossingText}
                    onChange={e => setConfig(prev => ({ ...prev, embossingText: e.target.value.toUpperCase() }))}
                    className="w-full px-4 py-2.5 border rounded-xl text-xs font-semibold focus:outline-none focus:border-brand-primary uppercase"
                    placeholder="E.g. HOTEL MARRIOT"
                    required
                  />
                  <span className="text-[10px] text-slate-400 block">Embossed vertically on the lower cylinder of the bottle container. Max 20 characters.</span>
                </div>

                {/* 5. Target Monthly volume */}
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-700 uppercase block">5. Target Monthly Volume (Units)</label>
                  <div className="grid grid-cols-3 gap-2">
                    {['10,000', '25,000', '100,000', 'Exceeds 250,000'].map((qty) => (
                      <button
                        key={qty}
                        type="button"
                        onClick={() => setConfig(prev => ({ ...prev, quantity: qty }))}
                        className={`py-2 px-2 text-center rounded-xl text-[11px] font-bold border transition-all cursor-pointer ${
                          config.quantity === qty
                            ? 'bg-brand-primary border-brand-primary text-white shadow-md'
                            : 'bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100'
                        }`}
                      >
                        {qty}
                      </button>
                    ))}
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-xl bg-brand-secondary hover:bg-brand-primary text-white text-xs font-bold shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  Generate & Submit Prototyping Blueprint
                  <Sparkles className="w-4 h-4 text-brand-accent" />
                </button>

              </form>

            </div>

            {/* Virtual Blueprint Visualization */}
            <div className="lg:col-span-5 space-y-6">
              
              <div className="bg-slate-900 text-white rounded-3xl border border-slate-800 p-6 sm:p-8 relative overflow-hidden shadow-xl font-mono text-xs">
                
                <div className="absolute top-0 right-0 w-32 h-32 bg-brand-primary/10 rounded-full blur-2xl"></div>

                <div className="flex justify-between items-center border-b border-slate-800 pb-4 mb-6">
                  <span className="text-brand-accent uppercase font-bold text-[10px] tracking-wider">SYSTEM CONFIGURATOR</span>
                  <span className="text-[10px] text-slate-400">ID: PL-{Math.floor(Math.random() * 9000) + 1000}</span>
                </div>

                {/* Simulated bottle visual mockup */}
                <div className="flex flex-col items-center py-6 border-b border-slate-800/80 mb-6">
                  
                  {/* CSS Bottle rendering */}
                  <div className="relative flex flex-col items-center select-none">
                    {/* Cap */}
                    <div className="w-10 h-6 bg-brand-accent rounded-t border-b border-white/20 flex items-center justify-center text-[8px] font-bold text-brand-secondary">
                      {config.capType.substring(0, 4)}
                    </div>
                    {/* Neck */}
                    <div className="w-8 h-8 bg-cyan-400/20 border-x border-white/15"></div>
                    {/* Upper body */}
                    <div className="w-16 h-12 bg-cyan-400/20 rounded-t-2xl border-x border-t border-white/15 flex items-center justify-center">
                      <span className="text-[8px] text-slate-400">RO+UV</span>
                    </div>
                    {/* Cylinder body with custom embossing text */}
                    <div className="w-16 h-32 bg-cyan-400/30 border-x border-b border-white/15 rounded-b-xl flex flex-col justify-between items-center py-4 relative">
                      <div className="absolute inset-x-1 top-2 h-1 bg-white/10 rounded"></div>
                      <div className="absolute inset-y-4 left-1/2 -translate-x-1/2 flex items-center justify-center">
                        <span className="text-[9px] font-black text-white/55 tracking-wider rotate-90 whitespace-nowrap uppercase block max-w-24 overflow-hidden text-ellipsis">
                          {config.embossingText || 'YOUR LOGO'}
                        </span>
                      </div>
                      <div className="absolute inset-x-1 bottom-2 h-1 bg-white/10 rounded"></div>
                    </div>
                  </div>

                  <span className="text-[10px] text-slate-400 mt-4 block">3D Mockup Blueprint Preview</span>

                </div>

                {/* Configuration Specs list */}
                <div className="space-y-2.5">
                  <div className="flex justify-between">
                    <span className="text-slate-500">BOTTLE CAPACITY:</span>
                    <strong className="text-white">{config.volume}</strong>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">FORMULATION:</span>
                    <strong className="text-brand-accent">{config.waterType}</strong>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">CAP TYPE:</span>
                    <strong className="text-white">{config.capType}</strong>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">RESIN QUALITY:</span>
                    <strong className="text-white">{config.material}</strong>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">EMBOSSED TEXT:</span>
                    <strong className="text-brand-accent">{config.embossingText || 'NONE'}</strong>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">MONTHLY SCOPE:</span>
                    <strong className="text-white">{config.quantity} Units</strong>
                  </div>
                </div>

                {blueprintSubmitted && (
                  <div className="mt-6 p-4 rounded-xl bg-brand-accent/15 border border-brand-accent/30 text-brand-accent text-xs font-semibold space-y-1.5 animate-pulse">
                    <div className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-4.5 h-4.5" />
                      <span>Blueprint Transmitted</span>
                    </div>
                    <p className="font-normal text-[10px] text-slate-300 leading-normal">
                      Prototype submitted to Pune plant lab. Our mold engineers will evaluate structural draft angles and generate an official 3D CAD step file. Check your email for formal blueprints.
                    </p>
                  </div>
                )}

              </div>

            </div>

          </div>

        </div>
      </section>

    </div>
  );
}
