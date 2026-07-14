/**
 * Shared editorial content used across pages. All figures below are
 * illustrative placeholders — replace with verified company data before launch.
 */

export type Stat = { value: number; suffix?: string; prefix?: string; label: string };

export const stats: Stat[] = [
  { value: 15, suffix: '+', label: 'Years of manufacturing' },
  { value: 500, suffix: 'M+', label: 'Litres bottled per year*' },
  { value: 12, suffix: '+', label: 'Export destinations*' },
  { value: 9, label: 'Stage purification train' },
];

export const trustLogos = [
  'BIS', 'FSSAI', 'ISO 9001', 'ISO 22000', 'HACCP', 'GMP',
];

export type Certification = {
  code: string;
  name: string;
  desc: string;
  note?: string;
};

export const certifications: Certification[] = [
  { code: 'BIS', name: 'BIS Certification', desc: 'Products manufactured under the Bureau of Indian Standards scheme applicable to packaged water (IS 14543 / IS 13428).' },
  { code: 'FSSAI', name: 'FSSAI Licence', desc: 'Licensed under the Food Safety and Standards Authority of India for the manufacture of packaged water.' },
  { code: 'ISO 9001', name: 'ISO 9001 — Quality', desc: 'Quality management system aligned to ISO 9001 principles for consistent, repeatable output.' },
  { code: 'ISO 22000', name: 'ISO 22000 — Food Safety', desc: 'Food safety management system aligned to ISO 22000 / HACCP hazard-control principles.' },
  { code: 'HACCP', name: 'HACCP', desc: 'Hazard Analysis and Critical Control Points methodology applied across the production flow.' },
  { code: 'GMP', name: 'Good Manufacturing Practices', desc: 'Hygiene, documentation and process discipline consistent with GMP expectations.' },
];

export type ProcessStep = {
  n: string;
  title: string;
  desc: string;
};

export const purificationSteps: ProcessStep[] = [
  { n: '01', title: 'Source & Pre-treatment', desc: 'Raw water is screened and pre-treated to remove sediment and coarse impurities.' },
  { n: '02', title: 'Sand & Carbon Filtration', desc: 'Multi-media and activated-carbon filtration reduce turbidity, chlorine and organics.' },
  { n: '03', title: 'Reverse Osmosis', desc: 'Semi-permeable RO membranes remove dissolved solids and contaminants to a clean baseline.' },
  { n: '04', title: 'Mineral Balancing', desc: 'Selected essential minerals are re-introduced to a controlled target for taste and balance.' },
  { n: '05', title: 'UV Sterilisation', desc: 'Ultraviolet treatment inactivates microorganisms without chemicals or by-products.' },
  { n: '06', title: 'Ozonisation', desc: 'Ozone provides a final microbiological safeguard and preserves freshness in the sealed bottle.' },
  { n: '07', title: 'Automated Filling', desc: 'Rinse–fill–cap monoblocs operate under filtered air to protect product integrity.' },
  { n: '08', title: 'Lab Release & Dispatch', desc: 'Each batch is lab-verified and traceability-coded before warehousing and dispatch.' },
];

export type Market = { region: string; note: string; live: boolean };

export const exportMarkets: Market[] = [
  { region: 'South Asia', note: 'Regional distribution & institutional supply', live: true },
  { region: 'Middle East (GCC)', note: 'Retail & hospitality private-label programmes', live: true },
  { region: 'Southeast Asia', note: 'Distributor partnerships', live: true },
  { region: 'Africa', note: 'Bulk & OEM enquiries', live: false },
  { region: 'Europe', note: 'Selective premium & rPET programmes', live: false },
  { region: 'North America', note: 'Private-label enquiries', live: false },
];

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  company: string;
  placeholder?: boolean;
};

// NOTE: Placeholder testimonials — clearly marked. Replace with authentic,
// attributable client quotes before publishing.
export const testimonials: Testimonial[] = [
  { quote: 'A dependable manufacturing partner. Batch consistency and on-time dispatch have made them a core part of our supply chain.', name: 'Placeholder Name', role: 'Procurement Head', company: 'Regional Distribution Co.', placeholder: true },
  { quote: 'Their private-label team handled our bottle, label and export labelling end to end. The launch was smooth and the quality held up in-market.', name: 'Placeholder Name', role: 'Brand Owner', company: 'Beverage Startup', placeholder: true },
  { quote: 'Documentation, certifications and traceability were exactly what our institutional tender required. Professional throughout.', name: 'Placeholder Name', role: 'Facilities Manager', company: 'Corporate Campus', placeholder: true },
];

export type ValueItem = { title: string; desc: string };

export const coreValues: ValueItem[] = [
  { title: 'Uncompromising Quality', desc: 'Every batch is verified against defined parameters before it leaves the plant.' },
  { title: 'Scientific Manufacturing', desc: 'Validated processes, calibrated instruments and documented control — not guesswork.' },
  { title: 'Sustainability', desc: 'Water stewardship and circular, lighter packaging built into how we operate.' },
  { title: 'Partnership', desc: 'We behave like an extension of your team — responsive, transparent and reliable.' },
];

export type Article = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
  featured?: boolean;
};

export const articles: Article[] = [
  {
    slug: 'why-multi-stage-purification-matters',
    title: 'Why multi-stage purification matters in bottled water',
    excerpt: 'A plain-language look at how sediment filtration, reverse osmosis, UV and ozonisation each play a distinct role in producing safe, great-tasting water.',
    category: 'Water Science',
    date: '2026-05-18',
    readTime: '6 min',
    image: '/images/lab-pour.jpg',
    featured: true,
  },
  {
    slug: 'understanding-alkaline-water-evidence',
    title: 'Understanding alkaline water: what the evidence actually says',
    excerpt: 'Alkaline water is popular — but what is established, what is still being studied, and what remains unproven? A balanced summary.',
    category: 'Explainer',
    date: '2026-04-30',
    readTime: '8 min',
    image: '/images/alkaline-pour.jpg',
    featured: true,
  },
  {
    slug: 'rpet-lightweighting-sustainable-packaging',
    title: 'rPET and lightweighting: practical steps toward greener packaging',
    excerpt: 'How brands can reduce packaging footprint without compromising performance, and where the real trade-offs lie.',
    category: 'Sustainability',
    date: '2026-04-12',
    readTime: '7 min',
    image: '/images/bottles-rows.jpg',
  },
  {
    slug: 'choosing-an-oem-water-partner',
    title: 'How to choose an OEM / private-label water partner',
    excerpt: 'The questions serious brand owners should ask before committing to a contract manufacturer — from MOQs to export labelling.',
    category: 'B2B Guide',
    date: '2026-03-22',
    readTime: '9 min',
    image: '/images/pet-blank-label.jpg',
  },
  {
    slug: 'hydration-basics-for-workplaces',
    title: 'Hydration basics for workplaces and institutions',
    excerpt: 'Why reliable access to safe drinking water is a simple, high-impact investment in wellbeing and productivity.',
    category: 'Hydration',
    date: '2026-02-28',
    readTime: '5 min',
    image: '/images/hydration-lifestyle.jpg',
  },
  {
    slug: 'inside-a-modern-bottling-line',
    title: 'Inside a modern automated bottling line',
    excerpt: 'A walk through rinse–fill–cap monoblocs, filtered-air environments and batch traceability in contemporary water manufacturing.',
    category: 'Manufacturing',
    date: '2026-01-15',
    readTime: '6 min',
    image: '/images/bottling-machinery.jpg',
  },
];

export type StandardRef = {
  code: string;
  name: string;
  body: string;
  scope: string;
};

/**
 * Indian & global standards relevant to packaged / alkaline / mineral water and
 * PET food-contact packaging. Codes and scopes are summarised for orientation —
 * always confirm the current revision and applicability with the issuing body.
 */
export const indianStandards: StandardRef[] = [
  {
    code: 'IS 14543',
    name: 'Packaged Drinking Water',
    body: 'Bureau of Indian Standards (BIS)',
    scope: 'Specification for packaged drinking water (other than natural mineral water) — physical, chemical and microbiological requirements for treated water from any approved source. Alkaline and RO waters are produced under this standard.',
  },
  {
    code: 'IS 13428',
    name: 'Packaged Natural Mineral Water',
    body: 'Bureau of Indian Standards (BIS)',
    scope: 'Specification for natural mineral water drawn from a protected underground source and bottled with minimal treatment, with defined mineral and safety parameters.',
  },
  {
    code: 'IS 10500',
    name: 'Drinking Water — Specification',
    body: 'Bureau of Indian Standards (BIS)',
    scope: 'The national reference specification for drinking-water quality (acceptable and permissible limits for contaminants) — a benchmark our purification and testing targets.',
  },
  {
    code: 'FSSAI',
    name: 'FSS Act & Licence',
    body: 'Food Safety and Standards Authority of India',
    scope: 'Manufacturing packaged / mineral water is a licensed food business under the Food Safety and Standards Act, 2006. A State or Central FSSAI licence and compliant labelling are mandatory.',
  },
  {
    code: 'IS 12252',
    name: 'Food-grade PET',
    body: 'Bureau of Indian Standards (BIS)',
    scope: 'Specification for polyalkylene terephthalates (PET / PBT) for safe use in contact with foodstuffs, pharmaceuticals and drinking water — virgin food-grade resin with defined overall-migration limits.',
  },
  {
    code: 'FSS Packaging 2018',
    name: 'Packaging Regulations',
    body: 'FSSAI',
    scope: 'Food Safety and Standards (Packaging) Regulations, 2018 — governs food-contact materials, referencing IS 12252 for PET and setting migration and suitability requirements for packaging.',
  },
];

export const globalStandards: StandardRef[] = [
  {
    code: 'WHO GDWQ',
    name: 'Guidelines for Drinking-water Quality',
    body: 'World Health Organization',
    scope: 'The international reference for microbial, chemical and operational water safety. pH is treated as an operational parameter (optimum often 6.5–9.5) with no health-based guideline value.',
  },
  {
    code: 'CODEX 227',
    name: 'Bottled / Packaged Drinking Waters',
    body: 'Codex Alimentarius (FAO/WHO)',
    scope: 'General standard for packaged drinking waters other than natural mineral waters — hygiene, composition and labelling for internationally traded bottled water.',
  },
  {
    code: 'CODEX 108',
    name: 'Natural Mineral Waters',
    body: 'Codex Alimentarius (FAO/WHO)',
    scope: 'Standard and code of practice (CAC/RCP 33) for the collection, processing and marketing of natural mineral waters in international trade.',
  },
  {
    code: 'ISO 9001',
    name: 'Quality Management Systems',
    body: 'International Organization for Standardization',
    scope: 'Framework for consistent, repeatable quality management — process control, documentation and continual improvement across operations.',
  },
  {
    code: 'ISO 22000 / HACCP',
    name: 'Food Safety Management',
    body: 'ISO / Codex Alimentarius',
    scope: 'Food safety management and Hazard Analysis and Critical Control Points — systematic identification and control of hazards throughout production.',
  },
  {
    code: 'FDA 21 CFR 177.1630',
    name: 'PET Food-Contact (USA)',
    body: 'U.S. Food & Drug Administration',
    scope: 'Recognises PET as a permitted food-contact polymer in the United States — relevant for export programmes to North America.',
  },
  {
    code: 'EU 10/2011 · 1935/2004',
    name: 'Food-Contact Materials (EU)',
    body: 'European Union',
    scope: 'Framework Regulation (EC) 1935/2004 and Plastics Regulation (EU) 10/2011 govern food-contact plastics for exports to the European market.',
  },
];

export type KnowledgeTopic = {
  title: string;
  summary: string;
  points: string[];
};

export const knowledgeTopics: KnowledgeTopic[] = [
  {
    title: 'The importance of hydration',
    summary: 'Water supports nearly every function in the body — from temperature regulation to nutrient transport. Reliable access to safe drinking water is a foundation of everyday wellbeing.',
    points: [
      'Water makes up a large proportion of body weight and is essential to normal function.',
      'Needs vary by individual, activity level, climate and health status.',
      'Consistent access to safe water supports focus, comfort and performance at work and home.',
    ],
  },
  {
    title: 'What makes drinking water safe',
    summary: 'Safe drinking water meets defined microbiological and chemical parameters. Achieving that consistently requires validated treatment plus verification — not a single filter.',
    points: [
      'Safety is defined against recognised standards for contaminants and microbiology.',
      'Treatment must be validated and monitored, then verified by laboratory testing.',
      'Packaging and sealing protect the product between production and consumption.',
    ],
  },
  {
    title: 'Reverse osmosis (RO)',
    summary: 'RO pushes water through a semi-permeable membrane that blocks dissolved solids, salts and many contaminants, producing a clean baseline for further treatment.',
    points: [
      'Removes a high proportion of dissolved solids and impurities.',
      'Creates a consistent baseline that can then be mineral-balanced.',
      'Membrane performance is monitored to maintain output quality.',
    ],
  },
  {
    title: 'UV sterilisation',
    summary: 'Ultraviolet light inactivates microorganisms by disrupting their DNA — a chemical-free disinfection step that leaves no taste or by-products.',
    points: [
      'Chemical-free microbiological control.',
      'No residual taste or disinfection by-products.',
      'Effective as part of a multi-barrier approach, not in isolation.',
    ],
  },
  {
    title: 'Ozonisation',
    summary: 'Ozone is a powerful oxidant used as a final microbiological safeguard. It also helps preserve freshness in the sealed bottle before naturally reverting to oxygen.',
    points: [
      'Strong final disinfection barrier.',
      'Helps maintain freshness in sealed packaging.',
      'Dosing is controlled and monitored for safety and taste.',
    ],
  },
  {
    title: 'Mineral balancing',
    summary: 'After purification, selected essential minerals are re-introduced to a controlled target. This shapes taste and can define a mineral or alkaline product profile.',
    points: [
      'Restores taste after aggressive purification.',
      'Enables consistent mineral and pH targets batch to batch.',
      'Custom profiles possible for private-label programmes within limits.',
    ],
  },
  {
    title: 'Packaging safety',
    summary: 'Food-grade PET and compliant closures protect product quality. Material selection, hygiene and sealing all contribute to a safe, stable finished product.',
    points: [
      'Food-grade, migration-compliant materials.',
      'Hygienic filling under filtered air minimises contamination risk.',
      'Sealing integrity protects the product through the supply chain.',
    ],
  },
  {
    title: 'Sustainable manufacturing',
    summary: 'Lowering environmental impact means addressing water use, energy, waste and packaging together — with measurable targets rather than slogans.',
    points: [
      'Water stewardship: recovery and responsible use.',
      'Lightweighting and recycled-content packaging where suitable.',
      'Energy efficiency and waste reduction across operations.',
    ],
  },
];
