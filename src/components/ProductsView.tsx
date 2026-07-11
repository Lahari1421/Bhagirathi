/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, FormEvent } from 'react';
import { NavSection, Product } from '../types';
import { PRODUCTS_DATA } from '../data';
import { 
  CheckCircle2, FileText, Send, ShoppingBag, ArrowRight, 
  HelpCircle, Sparkles, Filter, ChevronRight, X
} from 'lucide-react';

interface ProductsViewProps {
  onNavigate: (section: NavSection) => void;
  selectedProductId: string | null;
  onSelectProduct: (productId: string | null) => void;
}

export default function ProductsView({ onNavigate, selectedProductId, onSelectProduct }: ProductsViewProps) {
  const [activeCategory, setActiveCategory] = useState<'all' | 'water' | 'bottle' | 'eco'>('all');
  
  // Broshure status
  const [downloadSuccess, setDownloadSuccess] = useState(false);
  const [brochureEmail, setBrochureEmail] = useState('');

  // Inline B2B Form status
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    product: '',
    quantity: '1000',
    message: ''
  });
  const [submitSuccess, setSubmitSuccess] = useState(false);

  // Filter products based on category tab
  const filteredProducts = PRODUCTS_DATA.filter(p => {
    if (activeCategory === 'all') return true;
    return p.category === activeCategory;
  });

  const activeProduct = selectedProductId 
    ? PRODUCTS_DATA.find(p => p.id === selectedProductId) 
    : null;

  const handleBrochureDownload = (e: FormEvent) => {
    e.preventDefault();
    if (!brochureEmail.includes('@')) return;
    setDownloadSuccess(true);
    setTimeout(() => {
      setDownloadSuccess(false);
      setBrochureEmail('');
    }, 4000);
  };

  const handleInlineFormSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitSuccess(true);
    setTimeout(() => {
      setSubmitSuccess(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        product: '',
        quantity: '1000',
        message: ''
      });
    }, 5000);
  };

  return (
    <div className="relative">
      
      {/* Banner */}
      <section className="bg-brand-secondary text-white py-16 px-4 text-center">
        <div className="max-w-4xl mx-auto space-y-4">
          <span className="text-brand-accent bg-white/10 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest">
            Product Showrooms
          </span>
          <h1 className="font-display font-extrabold text-3xl sm:text-5xl tracking-tight leading-tight">
            Premium Water & Rigid PET Containers
          </h1>
          <p className="text-slate-300 text-sm max-w-2xl mx-auto leading-relaxed font-light">
            Sourced and processed using advanced membrane filtration, packed in food-grade custom molds for flawless safety.
          </p>
        </div>
      </section>

      {/* Product Catalog Core */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-brand-light">
        <div className="max-w-7xl mx-auto">
          
          {/* Catalog Filter Controls (Only show when not in detail modal view) */}
          {!activeProduct && (
            <div className="flex flex-col sm:flex-row justify-between items-center mb-10 pb-6 border-b border-slate-100 gap-4">
              <div className="flex items-center gap-2">
                <Filter className="w-5 h-5 text-brand-primary" />
                <span className="text-sm font-semibold text-brand-secondary">Filter by Category:</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {[
                  { label: 'All Offerings', cat: 'all' },
                  { label: 'Packaged Water', cat: 'water' },
                  { label: 'Rigid PET Bottles', cat: 'bottle' },
                  { label: 'Eco-Friendly alternatives', cat: 'eco' },
                ].map((tab, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveCategory(tab.cat as any)}
                    className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                      activeCategory === tab.cat
                        ? 'bg-brand-primary text-white'
                        : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Grid of Product Cards */}
          {!activeProduct && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProducts.map((product) => (
                <div 
                  key={product.id}
                  className="bg-white border border-slate-200 rounded-xl overflow-hidden hover:shadow-sm transition-all flex flex-col justify-between"
                >
                  <div className="h-56 overflow-hidden relative">
                    <img 
                      src={product.imageUrl} 
                      alt={product.name} 
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                    <span className="absolute top-3 right-3 px-2.5 py-1 rounded bg-white/95 text-[9px] font-bold uppercase tracking-wider text-brand-primary border border-slate-200">
                      {product.category}
                    </span>
                  </div>

                  <div className="p-6 space-y-3 text-left">
                    <span className="text-xs font-semibold text-brand-accent uppercase tracking-wide">{product.subtitle}</span>
                    <h3 className="font-display font-bold text-xl text-brand-secondary">{product.name}</h3>
                    <p className="text-slate-500 text-xs leading-relaxed line-clamp-3">{product.description}</p>
                    
                    <div className="space-y-1.5 pt-2">
                      <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Sizes Included:</span>
                      <div className="flex flex-wrap gap-1">
                        {product.sizes.map((s, idx) => (
                          <span key={idx} className="px-2 py-0.5 rounded bg-slate-100 text-slate-600 text-[9px] font-medium border border-slate-200">
                            {s}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="p-6 pt-0 mt-4 border-t border-slate-100 flex justify-between items-center">
                    <button
                      onClick={() => onSelectProduct(product.id)}
                      className="text-xs font-bold text-brand-primary hover:text-brand-accent flex items-center gap-1.5 cursor-pointer"
                    >
                      Specifications Detail
                      <ChevronRight className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => {
                        setFormData(prev => ({ ...prev, product: product.name }));
                        // scroll down to inquiry section
                        document.getElementById('b2b-rapid-inquiry')?.scrollIntoView({ behavior: 'smooth' });
                      }}
                      className="px-3.5 py-2 rounded-lg text-white font-medium text-xs bg-brand-primary hover:bg-brand-primary/90 transition-colors cursor-pointer"
                    >
                      Instant Inquiry
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Interactive Modal-Like Inplace Product Detail View */}
          {activeProduct && (
            <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-10 relative">
              
              {/* Close / Return to List Button */}
              <button
                onClick={() => onSelectProduct(null)}
                className="absolute top-4 right-4 p-2.5 rounded-full bg-white hover:bg-slate-100 border border-slate-200 text-slate-600 transition-all cursor-pointer"
                aria-label="Back to Catalog"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
                
                {/* Left Panel: Image & Specs */}
                <div className="lg:col-span-5 space-y-6">
                  <div className="h-72 sm:h-96 rounded-2xl overflow-hidden border border-slate-200">
                    <img 
                      src={activeProduct.imageUrl} 
                      alt={activeProduct.name} 
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>

                  {/* Specification Table */}
                  <div className="bg-white p-6 rounded-2xl border border-slate-200 text-left">
                    <h4 className="font-display font-bold text-sm text-brand-secondary uppercase tracking-wider mb-4 border-b pb-2">
                      Chemical & Physical Specs
                    </h4>
                    <div className="space-y-2 text-xs">
                      {Object.entries(activeProduct.specifications).map(([key, val]) => (
                        <div key={key} className="flex justify-between items-center py-1 border-b border-slate-100 last:border-0">
                          <span className="text-slate-500 font-medium">{key}</span>
                          <strong className="text-brand-secondary">{val}</strong>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right Panel: Content */}
                <div className="lg:col-span-7 space-y-6 text-left">
                  <div>
                    <span className="text-xs font-bold text-brand-accent uppercase tracking-wider block mb-1">
                      {activeProduct.subtitle}
                    </span>
                    <h2 className="font-display font-extrabold text-3xl text-brand-secondary">
                      {activeProduct.name}
                    </h2>
                  </div>

                  <p className="text-slate-600 text-sm leading-relaxed">
                    {activeProduct.detailedDescription}
                  </p>

                  {/* Key Benefits */}
                  <div className="space-y-3">
                    <h4 className="font-bold text-sm text-brand-secondary">Key Benefits & Attributes</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {activeProduct.benefits.map((b, idx) => (
                        <div key={idx} className="flex gap-2 text-xs text-slate-600 items-start">
                          <CheckCircle2 className="w-4 h-4 text-brand-accent shrink-0 mt-0.5" />
                          <span>{b}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Sizing details */}
                  <div className="p-5 bg-white border border-slate-200 rounded-xl space-y-2">
                    <h4 className="font-bold text-sm text-brand-secondary">Available Commercial Sizing</h4>
                    <div className="flex flex-wrap gap-2">
                      {activeProduct.sizes.map((s, idx) => (
                        <span key={idx} className="px-3 py-1 bg-slate-50 border border-slate-200 rounded-lg text-xs font-semibold text-slate-700">
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Primary applications */}
                  <div className="space-y-2">
                    <h4 className="font-bold text-sm text-brand-secondary">Target Applications</h4>
                    <div className="flex flex-wrap gap-4">
                      {activeProduct.applications.map((a, idx) => (
                        <div key={idx} className="flex items-center gap-1.5 text-xs text-slate-500">
                          <span className="w-1.5 h-1.5 bg-brand-primary rounded-full"></span>
                          <span>{a}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Actions inside detail block */}
                  <div className="pt-4 flex flex-col sm:flex-row gap-4 border-t border-slate-200">
                    <button
                      onClick={() => {
                        setFormData(prev => ({ ...prev, product: activeProduct.name }));
                        onSelectProduct(null);
                        setTimeout(() => {
                          document.getElementById('b2b-rapid-inquiry')?.scrollIntoView({ behavior: 'smooth' });
                        }, 200);
                      }}
                      className="px-6 py-3 rounded-lg bg-brand-primary hover:bg-brand-primary/90 text-white font-bold text-sm transition-all flex items-center justify-center gap-2 cursor-pointer"
                    >
                      Request Technical Quotation
                      <ArrowRight className="w-4 h-4" />
                    </button>
                    
                    <button
                      onClick={() => onSelectProduct(null)}
                      className="px-6 py-3 rounded-lg border border-slate-200 hover:bg-slate-50 rounded-lg text-slate-700 font-semibold text-sm text-center cursor-pointer"
                    >
                      Return to Showroom
                    </button>
                  </div>

                </div>

              </div>

            </div>
          )}

          {/* B2B BROCHURE MOCK DOWNLOAD */}
          <div className="mt-20 p-8 sm:p-12 rounded-2xl bg-brand-secondary text-white grid grid-cols-1 lg:grid-cols-12 gap-8 items-center text-left">
            
            <div className="lg:col-span-7 space-y-4">
              <span className="text-xs font-bold text-brand-accent uppercase tracking-widest block">Technical Documentation</span>
              <h3 className="font-display font-bold text-2xl sm:text-3xl leading-tight">
                Download Our Detailed 2026 Corporate & Product Brochure
              </h3>
              <p className="text-slate-300 text-xs leading-relaxed font-light">
                Get full access to certified chemical analyses, water quality lab reports, private label pricing matrices, and customization templates. Delivered securely to your inbox.
              </p>
            </div>

            <div className="lg:col-span-5">
              <form onSubmit={handleBrochureDownload} className="space-y-3">
                <div className="relative">
                  <input
                    type="email"
                    value={brochureEmail}
                    onChange={(e) => setBrochureEmail(e.target.value)}
                    placeholder="Enter Corporate Email"
                    className="w-full px-4 py-3 bg-white/10 text-white rounded-xl border border-white/20 text-xs focus:outline-none focus:border-brand-accent transition-all pr-10"
                    required
                  />
                  <FileText className="absolute right-3.5 top-3.5 w-4 h-4 text-slate-400" />
                </div>
                
                <button
                  type="submit"
                  className="w-full py-3 rounded-xl bg-brand-accent hover:bg-brand-accent/90 text-brand-secondary font-bold text-xs transition-all cursor-pointer"
                >
                  Request Technical Brochure PDF
                </button>

                {downloadSuccess && (
                  <div className="p-3 bg-brand-accent/10 border border-brand-accent/20 rounded-xl flex items-center gap-2 text-brand-accent text-xs font-semibold">
                    <CheckCircle2 className="w-4 h-4 shrink-0" />
                    <span>PDF Sent. Check your inbox and spam folder shortly.</span>
                  </div>
                )}
              </form>
            </div>

          </div>

          {/* INLINE B2B RAPID INQUIRY FORM */}
          <div id="b2b-rapid-inquiry" className="mt-20 pt-16 border-t border-slate-100 text-left">
            <div className="max-w-3xl mx-auto space-y-8 bg-white border border-slate-200 rounded-2xl p-6 sm:p-10">
              <div className="space-y-2">
                <span className="text-brand-primary bg-brand-primary/5 rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wider inline-block">B2B Quick Quote</span>
                <h3 className="font-display font-bold text-2xl text-brand-secondary">
                  Instant Wholesale & Private Label Query
                </h3>
                <p className="text-slate-500 text-xs">
                  Provide your initial requirements. Our business managers will reply with personalized pricing within 2 hours.
                </p>
              </div>

              <form onSubmit={handleInlineFormSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                
                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-600 uppercase block">Your Name</label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={e => setFormData(prev => ({ ...prev, name: e.target.value }))}
                    className="w-full px-4 py-2.5 bg-white border border-slate-200 rounded-xl text-xs focus:outline-none focus:border-brand-primary transition-all"
                    placeholder="Enter full name"
                    required
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-600 uppercase block">Company Email</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={e => setFormData(prev => ({ ...prev, email: e.target.value }))}
                    className="w-full px-4 py-2.5 bg-white border border-slate-200 rounded-xl text-xs focus:outline-none focus:border-brand-primary transition-all"
                    placeholder="name@company.com"
                    required
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-600 uppercase block">Corporate Contact Number</label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={e => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                    className="w-full px-4 py-2.5 bg-white border border-slate-200 rounded-xl text-xs focus:outline-none focus:border-brand-primary transition-all"
                    placeholder="+91 XXXXX XXXXX"
                    required
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-600 uppercase block">Company Name / Entity</label>
                  <input
                    type="text"
                    value={formData.company}
                    onChange={e => setFormData(prev => ({ ...prev, company: e.target.value }))}
                    className="w-full px-4 py-2.5 bg-white border border-slate-200 rounded-xl text-xs focus:outline-none focus:border-brand-primary transition-all"
                    placeholder="E.g. Grand Regency Hotels"
                    required
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-600 uppercase block">Product of Interest</label>
                  <select
                    value={formData.product}
                    onChange={e => setFormData(prev => ({ ...prev, product: e.target.value }))}
                    className="w-full px-4 py-2.5 bg-white border border-slate-200 rounded-xl text-xs focus:outline-none focus:border-brand-primary transition-all"
                    required
                  >
                    <option value="">Select product category...</option>
                    <option value="Bhagirathi Pure (Drinking Water)">Bhagirathi Pure (Drinking Water)</option>
                    <option value="Bhagirathi pH+ 8.5 (Alkaline Water)">Bhagirathi pH+ 8.5 (Alkaline Water)</option>
                    <option value="Bhagirathi Pristine (Natural Mineral)">Bhagirathi Pristine (Natural Mineral)</option>
                    <option value="Custom Molded PET Preforms">Custom Molded PET Preforms</option>
                    <option value="EcoHydrate Biodegradable Alternatives">EcoHydrate Biodegradable Alternatives</option>
                  </select>
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-600 uppercase block">Target Monthly Volume</label>
                  <select
                    value={formData.quantity}
                    onChange={e => setFormData(prev => ({ ...prev, quantity: e.target.value }))}
                    className="w-full px-4 py-2.5 bg-white border border-slate-200 rounded-xl text-xs focus:outline-none focus:border-brand-primary transition-all"
                    required
                  >
                    <option value="1000">1,000 - 5,000 Units</option>
                    <option value="10000">5,000 - 25,000 Units</option>
                    <option value="100000">25,000 - 100,000 Units</option>
                    <option value="500000">Exceeds 100,000 Units (Bulk distributor)</option>
                  </select>
                </div>

                <div className="sm:col-span-2 space-y-1">
                  <label className="text-xs font-bold text-slate-600 uppercase block">Specific requirements or Custom Mold Details</label>
                  <textarea
                    rows={3}
                    value={formData.message}
                    onChange={e => setFormData(prev => ({ ...prev, message: e.target.value }))}
                    className="w-full px-4 py-2.5 bg-white border border-slate-200 rounded-xl text-xs focus:outline-none focus:border-brand-primary transition-all"
                    placeholder="E.g. We require our custom logo embossed on a 1-litre rectangular spiral neck PET bottle..."
                  />
                </div>

                <div className="sm:col-span-2 pt-2">
                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-lg bg-brand-primary hover:bg-brand-primary/90 text-white text-xs font-bold transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    Submit Quotation Inquiry
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </div>

                {submitSuccess && (
                  <div className="sm:col-span-2 p-4 bg-brand-accent/10 border border-brand-accent/20 rounded-2xl flex items-start gap-2.5 text-brand-accent text-xs font-semibold text-left">
                    <CheckCircle2 className="w-5 h-5 shrink-0 mt-0.5" />
                    <div>
                      <span className="block font-bold">Inquiry Transmitted Successfully</span>
                      <span className="font-normal text-slate-600">A senior account executive will contact you at your provided number/email shortly to finalize blueprints and dispatch custom samples.</span>
                    </div>
                  </div>
                )}

              </form>

            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
