/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, FormEvent } from 'react';
import { NavSection, InquiryFormData } from '../types';
import { 
  CheckCircle2, Mail, Phone, MapPin, Send, 
  Clock, ShieldCheck, HeartHandshake, ExternalLink, HelpCircle
} from 'lucide-react';

interface ContactViewProps {
  onNavigate: (section: NavSection) => void;
}

export default function ContactView({ onNavigate }: ContactViewProps) {
  
  // Dynamic Map active node state
  const [activeMapNode, setActiveMapNode] = useState<'factory' | 'office' | 'port'>('factory');

  // Inquiry Form state
  const [form, setForm] = useState<InquiryFormData>({
    name: '',
    email: '',
    phone: '',
    companyName: '',
    productOfInterest: '',
    quantityNeeded: '25000',
    message: '',
    agreeToPrivacy: true
  });

  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleFormSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!form.agreeToPrivacy) {
      alert('Please agree to the privacy and security policies.');
      return;
    }
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setForm({
        name: '',
        email: '',
        phone: '',
        companyName: '',
        productOfInterest: '',
        quantityNeeded: '25000',
        message: '',
        agreeToPrivacy: true
      });
    }, 8000);
  };

  // WhatsApp routing helper
  const handleWhatsAppRoute = () => {
    const text = encodeURIComponent("Hello Bhagirathi Industries! We are interested in requesting a corporate quotation for private-label water bottling.");
    window.open(`https://wa.me/912046890000?text=${text}`, '_blank');
  };

  const mapNodes = {
    factory: {
      name: 'HQ & Manufacturing Plant (Pune)',
      address: 'Gat No. 426/1A, Talegaon-Chakan Road, Mahalunge, Pune, MH 410501',
      desc: 'Our 24/7 Class 100 automated cleanroom bottling block, processing 24,000 bottles per hour.'
    },
    office: {
      name: 'Corporate Office (Mumbai)',
      address: 'Maker Chambers VI, Nariman Point, Mumbai, MH 400021',
      desc: 'B2B contracting, private label consultations, and international customs export clearings.'
    },
    port: {
      name: 'Nhava Sheva Port (JNPT Hub)',
      address: 'JNPT Freight Container Logistics, Navi Mumbai, MH 400707',
      desc: 'Our primary maritime shipping gateway routing containers across Southeast Asia and Gulf corridors.'
    }
  };

  return (
    <div className="relative">
      
      {/* Page Header */}
      <section className="bg-gradient-to-br from-slate-900 to-brand-secondary text-white py-16 px-4 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-brand-primary/15 pointer-events-none"></div>
        <div className="max-w-4xl mx-auto space-y-4 relative z-10">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-accent bg-brand-accent/10 px-3 py-1 rounded-full">
            Inquiry & Support Hub
          </span>
          <h1 className="font-display font-extrabold text-3xl sm:text-5xl tracking-tight leading-tight">
            Connect With Our Enterprise Team
          </h1>
          <p className="text-slate-300 text-sm max-w-2xl mx-auto leading-relaxed font-light">
            Ready to establish wholesale supplies or initiate a custom Private-Label blueprint? Provide your parameters below.
          </p>
        </div>
      </section>

      {/* Main Core split page */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white text-left">
        <div className="max-w-7xl mx-auto">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left Column: B2B Contact Info & WhatsApp Integration */}
            <div className="lg:col-span-5 space-y-8">
              
              <div className="space-y-3">
                <span className="text-xs font-bold text-brand-primary uppercase tracking-wider block">Office Directories</span>
                <h2 className="font-display font-bold text-2xl sm:text-3xl text-brand-secondary leading-tight">
                  Direct Sourcing Channels
                </h2>
                <p className="text-slate-500 text-xs leading-relaxed font-light">
                  Our customer service desks operate from Monday to Saturday, 09:00 AM to 06:00 PM (IST).
                </p>
              </div>

              {/* Contact list cards */}
              <div className="space-y-4">
                
                <div className="p-5 bg-slate-50 rounded-2xl border flex gap-4 items-start">
                  <MapPin className="w-6 h-6 text-brand-primary shrink-0 mt-0.5" />
                  <div className="space-y-1 text-xs text-slate-600">
                    <strong className="text-sm text-brand-secondary block font-bold">Pune Factory & Labs</strong>
                    <p className="font-light">Gat No. 426/1A, Talegaon-Chakan Road, Mahalunge, Pune, MH 410501</p>
                    <span className="text-[10px] text-slate-400 font-bold block">BIS Plant Code: CM/L-82001439</span>
                  </div>
                </div>

                <div className="p-5 bg-slate-50 rounded-2xl border flex gap-4 items-start">
                  <Mail className="w-6 h-6 text-brand-primary shrink-0 mt-0.5" />
                  <div className="space-y-1 text-xs text-slate-600">
                    <strong className="text-sm text-brand-secondary block font-bold">Corporate Email Desk</strong>
                    <p className="font-light">General questions: <a href="mailto:info@bhagirathiindustries.com" className="font-bold text-brand-primary hover:underline">info@bhagirathiindustries.com</a></p>
                    <p className="font-light">OEM Proposals: <a href="mailto:alliances@bhagirathiindustries.com" className="font-bold text-brand-primary hover:underline">alliances@bhagirathiindustries.com</a></p>
                  </div>
                </div>

                <div className="p-5 bg-slate-50 rounded-2xl border flex gap-4 items-start">
                  <Phone className="w-6 h-6 text-brand-primary shrink-0 mt-0.5" />
                  <div className="space-y-1 text-xs text-slate-600">
                    <strong className="text-sm text-brand-secondary block font-bold">Quotation Telephones</strong>
                    <p className="font-light">National Customer Desk: <a href="tel:+912046890000" className="font-bold text-brand-primary hover:underline">+91 20 4689 0000</a></p>
                    <p className="font-light">Global Export Desk: <a href="tel:+919876543210" className="font-bold text-brand-primary hover:underline">+91 98765 43210</a></p>
                  </div>
                </div>

              </div>

              {/* WhatsApp click to Chat Card */}
              <div className="p-6 rounded-2xl bg-emerald-50 border border-emerald-200 text-slate-700 space-y-4">
                <div className="flex gap-3 items-center">
                  <div className="p-2.5 rounded-xl bg-emerald-500 text-white shadow-md shadow-emerald-500/10">
                    {/* SVG WhatsApp icon */}
                    <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.457L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.965C16.388 1.977 13.911.954 11.9.954c-5.438 0-9.861 4.372-9.864 9.8.001 2.03.547 4.01 1.587 5.75L2.613 20.9l4.034-1.746z"/>
                    </svg>
                  </div>
                  <div>
                    <strong className="text-sm text-slate-800 block">Instant WhatsApp B2B Help</strong>
                    <span className="text-[10px] text-slate-500 block">Typical response: Under 5 Minutes</span>
                  </div>
                </div>
                <p className="text-xs text-slate-600 leading-normal font-light">
                  Skip the emails. Speak directly with a dedicated corporate contract packaging specialist to request free water samples and custom bottle prototypes.
                </p>
                <button
                  onClick={handleWhatsAppRoute}
                  className="w-full py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold rounded-xl shadow-md transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  Start WhatsApp B2B Chat
                  <ExternalLink className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>

            {/* Right Column: B2B QUOTATION FORM */}
            <div className="lg:col-span-7 bg-slate-50 border border-slate-200/60 p-6 sm:p-10 rounded-3xl space-y-6 shadow-sm">
              
              <div className="space-y-1">
                <span className="text-xs font-bold text-brand-primary uppercase block tracking-wider">Wholesale Quotation</span>
                <h3 className="font-display font-bold text-2xl text-brand-secondary">Request An Official Proposal</h3>
                <p className="text-slate-500 text-xs">For wholesale distributor pricing, B2B glass lines, or private labels. Enter specifications below.</p>
              </div>

              <form onSubmit={handleFormSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                
                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-700 block">Contact Name</label>
                  <input
                    type="text"
                    value={form.name}
                    onChange={e => setForm(prev => ({ ...prev, name: e.target.value }))}
                    className="w-full px-4 py-2.5 bg-white border rounded-xl text-xs focus:outline-none focus:border-brand-primary"
                    placeholder="Enter full name"
                    required
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-700 block">Corporate Email Address</label>
                  <input
                    type="email"
                    value={form.email}
                    onChange={e => setForm(prev => ({ ...prev, email: e.target.value }))}
                    className="w-full px-4 py-2.5 bg-white border rounded-xl text-xs focus:outline-none focus:border-brand-primary"
                    placeholder="name@entity.com"
                    required
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-700 block">Corporate Mobile / Phone</label>
                  <input
                    type="tel"
                    value={form.phone}
                    onChange={e => setForm(prev => ({ ...prev, phone: e.target.value }))}
                    className="w-full px-4 py-2.5 bg-white border rounded-xl text-xs focus:outline-none focus:border-brand-primary"
                    placeholder="+91 XXXXX XXXXX"
                    required
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-700 block">Company Name</label>
                  <input
                    type="text"
                    value={form.companyName}
                    onChange={e => setForm(prev => ({ ...prev, companyName: e.target.value }))}
                    className="w-full px-4 py-2.5 bg-white border rounded-xl text-xs focus:outline-none focus:border-brand-primary"
                    placeholder="E.g. Hyatt Suites"
                    required
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-700 block">Product of Interest</label>
                  <select
                    value={form.productOfInterest}
                    onChange={e => setForm(prev => ({ ...prev, productOfInterest: e.target.value }))}
                    className="w-full px-4 py-2.5 bg-white border rounded-xl text-xs focus:outline-none focus:border-brand-primary"
                    required
                  >
                    <option value="">Choose Category...</option>
                    <option value="Bhagirathi Pure Drinking Water">Bhagirathi Pure Packaged Water</option>
                    <option value="Bhagirathi pH+ 8.5 Alkaline">Bhagirathi Bio-Alkaline 8.5+</option>
                    <option value="Bhagirathi Pristine Natural Mineral">Bhagirathi Natural Mineral Springs</option>
                    <option value="Rigid PET Bottles & Preforms">Rigid PET Containers & Preforms</option>
                    <option value="EcoHydrate Cartons & Biodegradable">EcoHydrate Recycled Alternatives</option>
                  </select>
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-700 block">Estimated Monthly Order Volume</label>
                  <select
                    value={form.quantityNeeded}
                    onChange={e => setForm(prev => ({ ...prev, quantityNeeded: e.target.value }))}
                    className="w-full px-4 py-2.5 bg-white border rounded-xl text-xs focus:outline-none focus:border-brand-primary"
                    required
                  >
                    <option value="5000">5,000 - 10,000 Units</option>
                    <option value="25000">10,000 - 50,000 Units</option>
                    <option value="100000">50,000 - 150,000 Units</option>
                    <option value="500000">Exceeds 150,000 Units</option>
                  </select>
                </div>

                <div className="sm:col-span-2 space-y-1">
                  <label className="text-xs font-bold text-slate-700 block">Briefly outline your custom requirements</label>
                  <textarea
                    rows={4}
                    value={form.message}
                    onChange={e => setForm(prev => ({ ...prev, message: e.target.value }))}
                    className="w-full px-4 py-2.5 bg-white border rounded-xl text-xs focus:outline-none focus:border-brand-primary"
                    placeholder="E.g. We require our custom logo embossed on a 1-litre rectangular spiral neck PET bottle..."
                    required
                  />
                </div>

                <div className="sm:col-span-2 py-1.5 flex items-start gap-2.5">
                  <input
                    type="checkbox"
                    id="chk-privacy"
                    checked={form.agreeToPrivacy}
                    onChange={e => setForm(prev => ({ ...prev, agreeToPrivacy: e.target.checked }))}
                    className="mt-1 shrink-0 rounded text-brand-primary"
                    required
                  />
                  <label htmlFor="chk-privacy" className="text-[10px] text-slate-500 leading-normal">
                    By submitting, you agree to our corporate data security terms. Your parameters will be securely handled in compliance with ISO 27001 data storage standards.
                  </label>
                </div>

                <div className="sm:col-span-2 pt-2">
                  <button
                    type="submit"
                    className="w-full py-4 rounded-xl bg-brand-secondary hover:bg-brand-primary text-white text-xs font-bold shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    Submit Formal Proposal Request
                    <Send className="w-4 h-4 text-brand-accent" />
                  </button>
                </div>

                {formSubmitted && (
                  <div className="sm:col-span-2 p-4 bg-brand-accent/15 border border-brand-accent/30 rounded-2xl flex items-start gap-2.5 text-brand-accent text-xs font-semibold text-left">
                    <CheckCircle2 className="w-5 h-5 shrink-0 mt-0.5" />
                    <div>
                      <span className="block font-bold">Proposal Request Logged</span>
                      <span className="font-normal text-slate-600">Your wholesale parameters are officially registered in our sales queue. A senior corporate account manager will evaluate structural drafts and reply with a formal proforma invoice within 2 hours.</span>
                    </div>
                  </div>
                )}

              </form>

            </div>

          </div>

          {/* INTERACTIVE CUSTOM SVG MAP (Amazing high-end interaction) */}
          <div className="mt-24 border-t border-slate-100 pt-16 text-center">
            
            <div className="max-w-2xl mx-auto mb-12 space-y-2">
              <span className="text-xs font-bold uppercase tracking-widest text-brand-primary bg-brand-primary/5 px-3 py-1 rounded-full">
                Interactive Directory
              </span>
              <h3 className="font-display font-bold text-2xl text-brand-secondary">Regional Logistics & Infrastructure Map</h3>
              <p className="text-slate-500 text-xs">Hover or click nodes on the customized layout map below to review regional logistics details.</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center max-w-5xl mx-auto bg-slate-50 border border-slate-200/60 rounded-3xl p-6 sm:p-8">
              
              {/* SVG Map visual */}
              <div className="lg:col-span-7 flex justify-center bg-slate-900 rounded-2xl p-6 border relative overflow-hidden h-72 sm:h-96">
                
                {/* Background stars / grid */}
                <div className="absolute inset-0 bg-radial-gradient from-slate-800 to-transparent opacity-40 pointer-events-none"></div>

                {/* Custom SVG Map representing Maharashtra logistics corridor */}
                <svg className="w-full h-full" viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
                  {/* Outer abstract region border */}
                  <path d="M 50,50 Q 200,30 350,70 Q 380,180 320,250 Q 180,280 60,220 Q 30,120 50,50" fill="none" stroke="#334155" strokeWidth="2" strokeDasharray="4,4" />
                  
                  {/* Connectivity highways */}
                  <path d="M 80,180 Q 170,120 230,160" fill="none" stroke="#0057B8" strokeWidth="2" strokeOpacity="0.4" />
                  <path d="M 230,160 L 320,200" fill="none" stroke="#00A86B" strokeWidth="2" strokeOpacity="0.4" />

                  {/* Active node glow circles */}
                  {/* Node 1: Mumbai Office */}
                  <g className="cursor-pointer" onClick={() => setActiveMapNode('office')}>
                    <circle cx="80" cy="180" r={activeMapNode === 'office' ? '12' : '8'} fill="#0057B8" fillOpacity="0.3" className="animate-ping" />
                    <circle cx="80" cy="180" r="6" fill="#0057B8" stroke="white" strokeWidth="1.5" />
                    <text x="80" y="165" fill="#94A3B8" fontSize="9" textAnchor="middle" fontWeight="bold" fontFamily="monospace">MUMBAI HQ</text>
                  </g>

                  {/* Node 2: Pune Plant */}
                  <g className="cursor-pointer" onClick={() => setActiveMapNode('factory')}>
                    <circle cx="230" cy="160" r={activeMapNode === 'factory' ? '14' : '9'} fill="#00A86B" fillOpacity="0.3" className="animate-ping" />
                    <circle cx="230" cy="160" r="7" fill="#00A86B" stroke="white" strokeWidth="1.5" />
                    <text x="230" y="145" fill="#00A86B" fontSize="9" textAnchor="middle" fontWeight="bold" fontFamily="monospace">PUNE PLANT</text>
                  </g>

                  {/* Node 3: Nhava Sheva Port */}
                  <g className="cursor-pointer" onClick={() => setActiveMapNode('port')}>
                    <circle cx="95" cy="205" r={activeMapNode === 'port' ? '12' : '8'} fill="#0057B8" fillOpacity="0.3" className="animate-ping" />
                    <circle cx="95" cy="205" r="6" fill="#38BDF8" stroke="white" strokeWidth="1.5" />
                    <text x="95" y="222" fill="#94A3B8" fontSize="9" textAnchor="middle" fontWeight="bold" fontFamily="monospace">JNPT PORT</text>
                  </g>

                  {/* Ocean Decor */}
                  <text x="40" y="260" fill="#475569" fontSize="8" fontWeight="bold" fontFamily="monospace">ARABIAN SEA</text>
                  <path d="M 30,240 Q 40,245 50,240" fill="none" stroke="#475569" strokeWidth="1" />
                  <path d="M 35,245 Q 45,250 55,245" fill="none" stroke="#475569" strokeWidth="1" />

                </svg>

              </div>

              {/* Map details panel */}
              <div className="lg:col-span-5 text-left space-y-4">
                <span className="text-[10px] uppercase font-bold text-slate-400 block tracking-widest font-mono">SELECTED LOGISTICS NODE</span>
                
                <div className="p-5 bg-white border border-slate-200 rounded-2xl shadow-sm space-y-3">
                  <div className="flex gap-2 items-center">
                    <span className="w-3 h-3 rounded-full bg-brand-accent animate-pulse"></span>
                    <h4 className="font-display font-extrabold text-base text-brand-secondary">{mapNodes[activeMapNode].name}</h4>
                  </div>
                  
                  <div className="space-y-1.5 text-xs text-slate-500 font-light">
                    <strong className="text-slate-700 block font-bold">Physical Address:</strong>
                    <p className="leading-relaxed">{mapNodes[activeMapNode].address}</p>
                  </div>

                  <div className="space-y-1.5 text-xs text-slate-500 font-light pt-2 border-t">
                    <strong className="text-brand-primary block font-bold">Operations Scope:</strong>
                    <p className="leading-relaxed">{mapNodes[activeMapNode].desc}</p>
                  </div>
                </div>

                {/* Node selectors */}
                <div className="flex gap-2">
                  {(['factory', 'office', 'port'] as const).map((key) => (
                    <button
                      key={key}
                      onClick={() => setActiveMapNode(key)}
                      className={`flex-1 py-2 text-center rounded-xl text-[10px] font-bold tracking-wider uppercase transition-all cursor-pointer ${
                        activeMapNode === key
                          ? 'bg-brand-primary text-white shadow-md'
                          : 'bg-white text-slate-600 border'
                      }`}
                    >
                      {key}
                    </button>
                  ))}
                </div>

              </div>

            </div>

          </div>

        </div>
      </section>

    </div>
  );
}
