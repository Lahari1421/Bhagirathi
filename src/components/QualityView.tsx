/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { NavSection } from '../types';
import { CERTIFICATIONS_DATA } from '../data';
import { 
  ShieldCheck, FileText, Activity, HelpCircle, 
  CheckCircle2, Search, Sliders, ArrowRight
} from 'lucide-react';

interface QualityViewProps {
  onNavigate: (section: NavSection) => void;
}

export default function QualityView({ onNavigate }: QualityViewProps) {
  
  // Interactive test report states
  const [activeTestCategory, setActiveTestCategory] = useState<'physical' | 'chemical' | 'microbiological'>('physical');

  const testReports = {
    physical: [
      { parameter: 'pH Value', standard: '6.5 - 8.5', bhagirathiScore: '7.24 (Neutral)', status: 'PASSED', method: 'IS 3025 (Part 11)' },
      { parameter: 'Total Dissolved Solids (TDS)', standard: '50 - 150 mg/L', bhagirathiScore: '84 mg/L', status: 'PASSED', method: 'Gravimetric (IS 3025)' },
      { parameter: 'Turbidity', standard: 'Max 1.0 NTU', bhagirathiScore: '0.08 NTU', status: 'PASSED', method: 'Nephelometric' },
      { parameter: 'Odour & Taste', standard: 'Agreeable', bhagirathiScore: 'Agreeable (Crisp)', status: 'PASSED', method: 'Organoleptic Sensory' },
      { parameter: 'Color', standard: 'Max 5 Hazen', bhagirathiScore: 'Below 1 Hazen', status: 'PASSED', method: 'Platinum-Cobalt scale' }
    ],
    chemical: [
      { parameter: 'Chlorides (Cl)', standard: 'Max 200 mg/L', bhagirathiScore: '12 mg/L', status: 'PASSED', method: 'Argentometric' },
      { parameter: 'Sulphates (SO4)', standard: 'Max 200 mg/L', bhagirathiScore: '8.4 mg/L', status: 'PASSED', method: 'Turbidimetric' },
      { parameter: 'Fluoride (F)', standard: 'Max 1.0 mg/L', bhagirathiScore: '0.14 mg/L', status: 'PASSED', method: 'SPADNS Spectrophotometry' },
      { parameter: 'Lead (Pb)', standard: 'Max 0.01 mg/L', bhagirathiScore: 'Not Detected (<0.001)', status: 'PASSED', method: 'ICP-MS Spectrometry' },
      { parameter: 'Residual Chlorine', standard: 'Nil at packaging', bhagirathiScore: 'Absent (0.00 mg/L)', status: 'PASSED', method: 'DPD Colorimetric' }
    ],
    microbiological: [
      { parameter: 'Escherichia Coli', standard: 'Absent in 250ml', bhagirathiScore: 'Absent (0 CFU)', status: 'PASSED', method: 'Membrane Filtration' },
      { parameter: 'Coliform Bacteria', standard: 'Absent in 250ml', bhagirathiScore: 'Absent (0 CFU)', status: 'PASSED', method: 'Membrane Filtration' },
      { parameter: 'Pseudomonas Aeruginosa', standard: 'Absent in 250ml', bhagirathiScore: 'Absent (0 CFU)', status: 'PASSED', method: 'Selective Enrichment' },
      { parameter: 'Sulphite-reducing anaerobes', standard: 'Absent in 50ml', bhagirathiScore: 'Absent (0 CFU)', status: 'PASSED', method: 'Anaerobic agar plate' },
      { parameter: 'Yeast & Moulds', standard: 'Absent in 250ml', bhagirathiScore: 'Absent (0 CFU)', status: 'PASSED', method: 'YGC Selective Agar' }
    ]
  };

  return (
    <div className="relative">
      
      {/* Page Header */}
      <section className="bg-gradient-to-br from-slate-900 to-brand-secondary text-white py-16 px-4 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-brand-primary/15 pointer-events-none"></div>
        <div className="max-w-4xl mx-auto space-y-4 relative z-10">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-accent bg-brand-accent/10 px-3 py-1 rounded-full">
            Quality Assurance Labs
          </span>
          <h1 className="font-display font-extrabold text-3xl sm:text-5xl tracking-tight leading-tight">
            Certified Purity. Zero Risks.
          </h1>
          <p className="text-slate-300 text-sm max-w-2xl mx-auto leading-relaxed font-light">
            Operating under BIS CM/L-82001439 license and running over 50 automated tests daily across our Class 100 biological labs.
          </p>
        </div>
      </section>

      {/* Certification Cards Showcase */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white text-left">
        <div className="max-w-7xl mx-auto">
          
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-primary bg-brand-primary/5 px-3 py-1 rounded-full">
              Government Licensing
            </span>
            <h2 className="font-display font-bold text-3xl text-brand-secondary">National & Global Certifications</h2>
            <p className="text-slate-500 text-sm">Our facility is strictly inspected and accredited by central safety standard commissions.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {CERTIFICATIONS_DATA.map((cert) => (
              <div 
                key={cert.id}
                className="bg-slate-50 border border-slate-200/60 p-6 rounded-2xl flex flex-col justify-between hover:shadow-md transition-all text-left space-y-4"
              >
                <div className="space-y-2">
                  <div className="flex justify-between items-start">
                    <ShieldCheck className="w-10 h-10 text-brand-accent" />
                    <span className="px-2.5 py-1 rounded bg-brand-primary/10 text-brand-primary font-mono text-[9px] font-bold uppercase tracking-wider">
                      Audit Cleared
                    </span>
                  </div>
                  <h3 className="font-display font-bold text-base text-brand-secondary">{cert.title}</h3>
                  <strong className="text-xs text-brand-primary block font-mono">{cert.code}</strong>
                  <span className="text-[10px] text-slate-400 font-bold block uppercase">{cert.authority}</span>
                  <p className="text-slate-500 text-xs leading-relaxed font-light pt-2">{cert.description}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* INTERACTIVE LAB TESTING REPORT BOARD */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50 border-y border-slate-200/50 text-left">
        <div className="max-w-7xl mx-auto">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-primary bg-brand-primary/5 px-3 py-1 rounded-full">
              Live Lab Reports
            </span>
            <h2 className="font-display font-bold text-3xl text-brand-secondary">
              Interactive Water Quality Audit Board
            </h2>
            <p className="text-slate-600 text-sm">
              Our batch laboratories release daily water chemical, physical, and microbiological score sheets. Toggle categories below to view compliance standards.
            </p>
          </div>

          {/* Interactive Report Card Frame */}
          <div className="bg-white border border-slate-200 rounded-3xl overflow-hidden shadow-sm max-w-5xl mx-auto">
            
            {/* Table Header Controls */}
            <div className="bg-slate-900 text-white p-4 sm:p-6 flex flex-col sm:flex-row justify-between items-center border-b border-slate-800 gap-4">
              <div className="flex items-center gap-2 text-left">
                <div className="p-2 rounded bg-white/5 border border-white/10">
                  <Activity className="w-5 h-5 text-brand-accent" />
                </div>
                <div>
                  <strong className="text-sm block">Daily Plant Clearance Sheet</strong>
                  <span className="text-[10px] text-slate-400 font-mono">Date: {new Date().toLocaleDateString()} &bull; Lab Room ID: LB-04</span>
                </div>
              </div>

              {/* Toggle filters */}
              <div className="flex gap-2.5">
                {[
                  { label: 'Physical Checks', filter: 'physical' },
                  { label: 'Chemical Assays', filter: 'chemical' },
                  { label: 'Microbiological Plating', filter: 'microbiological' }
                ].map((item) => (
                  <button
                    key={item.filter}
                    onClick={() => setActiveTestCategory(item.filter as any)}
                    className={`px-3 py-2 rounded-lg text-[10px] font-bold tracking-wider uppercase transition-all cursor-pointer ${
                      activeTestCategory === item.filter
                        ? 'bg-brand-accent text-brand-secondary'
                        : 'bg-white/5 border border-white/10 hover:bg-white/10 text-slate-300'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Table layout */}
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse text-xs">
                <thead>
                  <tr className="bg-slate-50 border-b border-slate-200 text-slate-600 uppercase font-bold tracking-wider text-[10px]">
                    <th className="p-4 pl-6">Parameter Assessed</th>
                    <th className="p-4">Regulatory Limit (BIS IS 14543)</th>
                    <th className="p-4">Bhagirathi Plant Score</th>
                    <th className="p-4">Test Methodology</th>
                    <th className="p-4 text-right pr-6">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 font-mono">
                  {testReports[activeTestCategory].map((row, idx) => (
                    <tr key={idx} className="hover:bg-slate-50/50 transition-colors">
                      <td className="p-4 pl-6 font-sans font-semibold text-slate-800">{row.parameter}</td>
                      <td className="p-4 text-slate-500">{row.standard}</td>
                      <td className="p-4 text-brand-primary font-bold">{row.bhagirathiScore}</td>
                      <td className="p-4 text-slate-500 font-sans">{row.method}</td>
                      <td className="p-4 text-right pr-6">
                        <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 text-[10px] font-bold uppercase tracking-widest">
                          <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                          {row.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Quality Summary bar */}
            <div className="p-4 bg-slate-50 border-t border-slate-100 text-[11px] text-slate-500 flex flex-col sm:flex-row justify-between items-center gap-2">
              <span>All tested parameters are verified in-house by licensed microbiologists.</span>
              <span className="flex items-center gap-1 text-brand-primary font-bold font-sans">
                Water Purity Index (WPI): 99.85/100
              </span>
            </div>

          </div>

        </div>
      </section>

      {/* Policy details text */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white text-left">
        <div className="max-w-5xl mx-auto space-y-6">
          <h3 className="font-display font-bold text-2xl text-brand-secondary">Our Sterile Hygiene Guidelines</h3>
          <p className="text-slate-600 text-sm leading-relaxed">
            Every staff member entering the cleanrooms passes through automated sanitization tunnels, wearing dust-free surgical suits, hairnets, and sterile gloves. Our Clean-In-Place (CIP) systems wash machinery pipelines with hot caustic soda and acid sanitizers at regular 4-hour cycles. This maintains a clean manufacturing flow from groundwater to container dispatch.
          </p>
          <div className="pt-4">
            <button
              onClick={() => onNavigate(NavSection.Contact)}
              className="px-5 py-3 rounded-xl bg-brand-primary hover:bg-brand-secondary text-white text-xs font-bold transition-all flex items-center gap-2 cursor-pointer"
            >
              Request Certified Testing Documentation
              <ArrowRight className="w-4 h-4 text-brand-accent" />
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
