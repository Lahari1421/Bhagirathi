/**
 * Product catalogue — a typed, CMS-ready data layer that drives both the
 * products index and each dynamic product detail page.
 */

export type ProductSpec = { label: string; value: string };
export type ProductFaq = { q: string; a: string };

export type Product = {
  slug: string;
  name: string;
  category: string;
  tagline: string;
  summary: string;
  heroImage: string;
  gallery: string[];
  accent: string; // tailwind gradient stops
  highlights: string[];
  features: { title: string; desc: string }[];
  specs: ProductSpec[];
  sizes: { size: string; format: string; use: string }[];
  standards: string[];
  applications: string[];
  faqs: ProductFaq[];
  keywords: string[];
  featured?: boolean;
};

export const products: Product[] = [
  {
    slug: 'dr-liv',
    name: 'Dr. Liv',
    category: 'Premium Drinking Water',
    tagline: 'The living expression of Bhagirathi Industries\' promise of purity.',
    summary:
      'Dr. Liv is more than a packaged drinking water brand — it is the living expression of Bhagirathi Industries\' promise. Every bottle is crafted through advanced purification technology, balanced minerals, uncompromising quality standards, and sustainable manufacturing practices, representing purity, trust, and care in every drop.',
    heroImage: '/images/dr-liv.png',
    gallery: [
      '/images/dr-liv.png',
      '/images/water-pour-glass.jpg',
      '/images/bottle-and-glass.jpg',
    ],
    accent: 'from-brand-400 to-aqua',
    featured: true,
    highlights: [
      'Bhagirathi Industries\' flagship premium brand',
      'Advanced multi-stage purification technology',
      'Balanced minerals for pure, clean taste',
      'Uncompromising quality & sustainable practices',
    ],
    features: [
      { title: 'Advanced purification', desc: 'Crafted through a multi-stage purification process ensuring the highest standards of safety and quality.' },
      { title: 'Balanced minerals', desc: 'Carefully re-mineralised for a clean, refreshing taste that families can trust.' },
      { title: 'Quality assured', desc: 'Every batch is lab-verified, meeting BIS, FSSAI and ISO-aligned quality standards.' },
      { title: 'Sustainable practices', desc: 'Produced with responsibility toward people, nature, and future generations.' },
    ],
    specs: [
      { label: 'Product standard', value: 'IS 14543 (Packaged Drinking Water)' },
      { label: 'Purification', value: 'RO + UV + Ozonisation + Mineral balancing' },
      { label: 'Typical pH', value: '6.5 – 7.5' },
      { label: 'Quality certifications', value: 'BIS, FSSAI, ISO-aligned QMS' },
      { label: 'Shelf life', value: 'Up to 12 months (unopened)' },
      { label: 'Packaging', value: 'Food-grade PET' },
    ],
    sizes: [
      { size: '200 ml', format: 'Cup / bottle', use: 'Events, airlines, hospitality' },
      { size: '500 ml', format: 'PET bottle', use: 'Retail & on-the-go' },
      { size: '1 L', format: 'PET bottle', use: 'Retail & travel' },
      { size: '2 L', format: 'PET bottle', use: 'Family & office' },
      { size: '5 L', format: 'PET jar', use: 'Home & pantry' },
      { size: '20 L', format: 'Returnable jar', use: 'Offices & institutions' },
    ],
    standards: ['IS 14543', 'BIS certified', 'FSSAI licensed', 'ISO-aligned QMS'],
    applications: ['Premium retail', 'Hotels & hospitality', 'Corporate & institutional supply', 'OEM / private-label', 'Export programmes'],
    faqs: [
      { q: 'What makes Dr. Liv different?', a: 'Dr. Liv is Bhagirathi Industries\' flagship brand — produced through advanced purification, balanced minerals, and uncompromising quality standards, representing purity, trust, and care in every drop.' },
      { q: 'Can Dr. Liv be private-labelled?', a: 'Yes. Dr. Liv products are available under OEM / private-label with your brand, label design and export labelling.' },
      { q: 'What formats are available?', a: 'Dr. Liv is available across retail bottles, family sizes, bulk jars and institutional formats — all held to the same quality standard.' },
    ],
    keywords: ['Dr. Liv water', 'premium drinking water brand', 'Bhagirathi Dr. Liv', 'flagship water brand India'],
  },
  {
    slug: 'packaged-drinking-water',
    name: 'Packaged Drinking Water',
    category: 'Drinking Water',
    tagline: 'Multi-stage purified water, consistent in every bottle.',
    summary:
      'Our flagship packaged drinking water is produced through a validated multi-stage purification train — sediment and carbon filtration, reverse osmosis, mineral balancing, UV sterilisation and ozonisation — then filled on fully automated, hygienically sealed lines. Every batch is lab-verified against IS 14543 parameters before dispatch.',
    heroImage: '/images/water-pour-glass.jpg',
    gallery: [
      '/images/water-pour-glass.jpg',
      '/images/water-bottle-dark.jpg',
      '/images/bottle-and-glass.jpg',
    ],
    accent: 'from-brand-400 to-aqua',
    highlights: [
      'Multi-stage RO + UV + ozone purification',
      'Compliant with IS 14543 for packaged drinking water',
      'Automated rinse–fill–cap under HEPA-filtered air',
      'Available across retail, HoReCa and bulk formats',
    ],
    features: [
      { title: 'Validated purification train', desc: 'Nine-stage treatment ensures consistent taste, clarity and microbiological safety in every production run.' },
      { title: 'Hygienic automated filling', desc: 'Rinse–fill–cap monoblocs operate under filtered air to minimise human contact and contamination risk.' },
      { title: 'Batch traceability', desc: 'Each batch carries a code linking it to source, treatment logs and laboratory release data.' },
      { title: 'Format flexibility', desc: 'From 200 ml cups to 20 L jars — one quality standard across every SKU.' },
    ],
    specs: [
      { label: 'Product standard', value: 'IS 14543 (Packaged Drinking Water)' },
      { label: 'Purification', value: 'RO + UV + Ozonisation + Mineral balancing' },
      { label: 'Typical pH', value: '6.5 – 7.5' },
      { label: 'TDS range', value: 'Controlled, batch-specific (typ. 40–150 ppm)' },
      { label: 'Shelf life', value: 'Up to 12 months (unopened, stored per guidance)' },
      { label: 'Packaging', value: 'Food-grade PET / polycarbonate jars' },
    ],
    sizes: [
      { size: '200 ml', format: 'Cup / bottle', use: 'Events, airlines, hospitality' },
      { size: '500 ml', format: 'PET bottle', use: 'Retail & on-the-go' },
      { size: '1 L', format: 'PET bottle', use: 'Retail & travel' },
      { size: '2 L', format: 'PET bottle', use: 'Family & office' },
      { size: '5 L', format: 'PET jar', use: 'Home & pantry' },
      { size: '20 L', format: 'Returnable jar', use: 'Offices & institutions' },
    ],
    standards: ['IS 14543', 'BIS certified', 'FSSAI licensed', 'ISO-aligned QMS'],
    applications: ['Retail chains', 'Hotels, restaurants & catering', 'Corporate & institutional supply', 'Events & hospitality', 'Airlines & travel'],
    faqs: [
      { q: 'What purification process do you use?', a: 'A validated multi-stage train combining sediment/carbon filtration, reverse osmosis, controlled mineral balancing, UV sterilisation and ozonisation. Parameters are verified per batch against IS 14543.' },
      { q: 'Do you supply in bulk and returnable jars?', a: 'Yes. We supply 20 L returnable jars for offices and institutions alongside all retail formats, with route-based logistics support.' },
      { q: 'Can you private-label this product?', a: 'Absolutely. Packaged drinking water is available under OEM / private-label with your brand, label design and export labelling. See our OEM & Private Label page.' },
    ],
    keywords: ['packaged drinking water manufacturer', 'bottled water manufacturer India', 'RO water manufacturer', 'drinking water supplier'],
  },
  {
    slug: 'alkaline-water',
    name: 'Alkaline Water',
    category: 'Specialty Water',
    tagline: 'Ionised water with a naturally higher pH balance.',
    summary:
      'Our alkaline water is produced by purifying water to a clean baseline and then re-introducing selected minerals and ionisation to raise its pH above neutral, typically into the 8–9.5 range. It is filled on the same hygienic automated lines as our drinking water and verified per batch. For a balanced, evidence-based explainer, see our Understanding Alkaline Water guide.',
    heroImage: '/images/alkaline-pour.jpg',
    gallery: ['/images/alkaline-pour.jpg', '/images/clear-pet-bottle.jpg', '/images/hydration-lifestyle.jpg'],
    accent: 'from-emerald-400 to-brand-400',
    highlights: [
      'Typical pH range of 8.0 – 9.5',
      'Purified baseline with re-mineralisation & ionisation',
      'Crisp, smooth taste profile',
      'Balanced, non-exaggerated product communication',
    ],
    features: [
      { title: 'Controlled pH elevation', desc: 'Water is purified, then minerals and ionisation lift pH into a target alkaline band, verified per batch.' },
      { title: 'Mineral re-introduction', desc: 'Selected minerals are added back for taste and balance after purification.' },
      { title: 'Same hygienic filling', desc: 'Produced on automated, sealed lines under filtered air, identical to our drinking-water standard.' },
      { title: 'Responsible claims', desc: 'We describe what the product is — not unproven health outcomes. See our evidence summary.' },
    ],
    specs: [
      { label: 'Typical pH', value: '8.0 – 9.5 (batch-specific)' },
      { label: 'Process', value: 'Purification + re-mineralisation + ionisation' },
      { label: 'Taste profile', value: 'Smooth, crisp, low bitterness' },
      { label: 'Packaging', value: 'Food-grade PET' },
      { label: 'Shelf life', value: 'Up to 12 months (unopened)' },
      { label: 'Product basis', value: 'Meets applicable packaged water regulations' },
    ],
    sizes: [
      { size: '500 ml', format: 'PET bottle', use: 'Retail & on-the-go' },
      { size: '750 ml', format: 'Sport-cap bottle', use: 'Fitness & lifestyle' },
      { size: '1 L', format: 'PET bottle', use: 'Retail & travel' },
      { size: '2 L', format: 'PET bottle', use: 'Home & office' },
    ],
    standards: ['Applicable packaged water regulation', 'BIS-aligned QA', 'FSSAI licensed', 'ISO-aligned QMS'],
    applications: ['Premium retail & modern trade', 'Gyms & wellness studios', 'Hospitality & lifestyle', 'Private-label wellness brands'],
    faqs: [
      { q: 'What pH does your alkaline water have?', a: 'Typically between 8.0 and 9.5, depending on the batch specification. The exact target can be tuned for private-label programmes within safe, regulation-compliant limits.' },
      { q: 'Does alkaline water have proven health benefits?', a: 'We do not make unsupported health claims. Some benefits are still being studied and are not established by strong scientific consensus. Our Understanding Alkaline Water guide summarises the current evidence in a balanced way.' },
      { q: 'How is it different from regular drinking water?', a: 'It is purified like our standard water, then adjusted to a higher pH through re-mineralisation and ionisation, giving a smoother taste profile and an alkaline pH.' },
    ],
    keywords: ['alkaline water manufacturer', 'ionised water supplier', 'high pH water manufacturer', 'alkaline water private label'],
  },
  {
    slug: 'mineral-water',
    name: 'Mineral Water',
    category: 'Specialty Water',
    tagline: 'Balanced essential minerals for a crisp, clean taste.',
    summary:
      'Our mineral water delivers a controlled, consistent profile of essential minerals for a naturally crisp taste. Water is purified to a clean baseline and precisely re-mineralised, then filled on hygienic automated lines and verified per batch. Ideal for premium retail and hospitality positioning.',
    heroImage: '/images/pet-green-caps.jpg',
    gallery: [
      '/images/pet-green-caps.jpg',
      '/images/bottle-and-glass.jpg',
      '/images/water-bottle-dark.jpg',
    ],
    accent: 'from-sky-400 to-brand-500',
    highlights: [
      'Controlled essential-mineral profile',
      'Crisp, consistent taste batch to batch',
      'Purified baseline + precision re-mineralisation',
      'Premium retail & HoReCa positioning',
    ],
    features: [
      { title: 'Precision mineral dosing', desc: 'Minerals are re-introduced to a controlled target, giving a consistent taste and TDS profile.' },
      { title: 'Clean baseline', desc: 'Water is purified to remove impurities before minerals are added back deliberately.' },
      { title: 'Consistent taste', desc: 'A repeatable mineral profile means the same crisp taste in every production run.' },
      { title: 'Premium presentation', desc: 'Available in retail and glass-alternative premium formats for hospitality.' },
    ],
    specs: [
      { label: 'Mineral profile', value: 'Controlled essential minerals (Ca, Mg, etc.)' },
      { label: 'Typical pH', value: '6.8 – 7.6' },
      { label: 'TDS range', value: 'Batch-specific target (typ. 80–250 ppm)' },
      { label: 'Process', value: 'Purification + precision re-mineralisation + UV/ozone' },
      { label: 'Packaging', value: 'Food-grade PET' },
      { label: 'Shelf life', value: 'Up to 12 months (unopened)' },
    ],
    sizes: [
      { size: '250 ml', format: 'Premium bottle', use: 'Hospitality & fine dining' },
      { size: '500 ml', format: 'PET bottle', use: 'Retail & on-the-go' },
      { size: '1 L', format: 'PET bottle', use: 'Retail & travel' },
      { size: '2 L', format: 'PET bottle', use: 'Home & office' },
    ],
    standards: ['Applicable mineral water regulation', 'BIS-aligned QA', 'FSSAI licensed', 'ISO-aligned QMS'],
    applications: ['Premium retail', 'Hotels & fine dining', 'Corporate gifting', 'Private-label premium brands'],
    faqs: [
      { q: 'What minerals are present?', a: 'A controlled profile of essential minerals such as calcium and magnesium, dosed to a batch-specific target for consistent taste. Exact figures are provided per batch on request.' },
      { q: 'Is mineral water the same as packaged drinking water?', a: 'Both are safe and purified. Mineral water carries a deliberately elevated, controlled mineral profile for taste, while our standard drinking water targets a lighter mineral balance.' },
      { q: 'Can I get a custom mineral profile for my brand?', a: 'Yes — within regulatory limits we can tune the mineral target for private-label programmes. Talk to our OEM team.' },
    ],
    keywords: ['mineral water manufacturer', 'packaged mineral water supplier', 'mineral water private label India', 'premium mineral water manufacturer'],
  },
  {
    slug: 'pet-bottles',
    name: 'PET Bottles & Preforms',
    category: 'Packaging',
    tagline: 'Precision-moulded, food-grade PET preforms and bottles.',
    summary:
      'We manufacture food-grade PET preforms and blow-moulded bottles across a wide range of neck finishes, weights and volumes. Produced on precision moulding equipment with dimensional and weight checks, our PET packaging is engineered for strength, clarity and line efficiency — supplied to beverage brands and co-packers.',
    heroImage: '/images/pet-blank-label.jpg',
    gallery: [
      '/images/pet-blank-label.jpg',
      '/images/bottles-rows.jpg',
      '/images/bottling-machinery.jpg',
    ],
    accent: 'from-cyan-400 to-blue-500',
    highlights: [
      'Food-grade virgin & rPET options',
      'Multiple neck finishes & preform weights',
      'Dimensional & weight QC on every run',
      'Lightweighting for material efficiency',
    ],
    features: [
      { title: 'Precision moulding', desc: 'Preforms and bottles produced to tight dimensional tolerances for reliable, high-speed filling.' },
      { title: 'Neck-finish range', desc: 'Common neck standards supported, enabling compatibility with standard closures.' },
      { title: 'Lightweighting', desc: 'Optimised gram weights reduce material use without compromising strength.' },
      { title: 'Clarity & strength', desc: 'Engineered for optical clarity and top-load performance across the supply chain.' },
    ],
    specs: [
      { label: 'Material', value: 'Food-grade PET (virgin / rPET blends available)' },
      { label: 'Formats', value: 'Preforms & blow-moulded bottles' },
      { label: 'Volumes', value: '200 ml – 20 L (project-specific)' },
      { label: 'Neck finishes', value: 'Common industry standards (e.g. PCO/28 mm)' },
      { label: 'Quality checks', value: 'Weight, dimensions, wall distribution' },
      { label: 'Customisation', value: 'Colours, weights & shapes (MOQ applies)' },
    ],
    sizes: [
      { size: 'Preforms', format: 'Various gram weights', use: 'In-house / co-packer blowing' },
      { size: '200–500 ml', format: 'Blown bottle', use: 'Water & beverage' },
      { size: '1–2 L', format: 'Blown bottle', use: 'Water & beverage' },
      { size: '5–20 L', format: 'Jar / large format', use: 'Bulk water' },
    ],
    standards: ['Food-grade PET resin', 'ISO-aligned QMS', 'Dimensional QC protocol', 'Migration-safe materials'],
    applications: ['Water & beverage bottlers', 'Co-packers & contract fillers', 'FMCG brands', 'Institutional buyers'],
    faqs: [
      { q: 'Do you supply preforms as well as finished bottles?', a: 'Yes. We supply both PET preforms for customers with their own blowing capability and fully blow-moulded bottles ready to fill.' },
      { q: 'Can you produce custom shapes and colours?', a: 'Custom shapes, colours and gram weights are available subject to tooling and minimum order quantities. Share your specification for a feasibility review.' },
      { q: 'Do you offer recycled PET (rPET)?', a: 'We offer rPET and lightweighted options as part of our eco-friendly packaging range, subject to grade availability and regulatory suitability for the intended use.' },
    ],
    keywords: ['PET bottle manufacturer', 'PET preform supplier', 'PET bottle manufacturer India', 'food grade PET bottle supplier'],
  },
  {
    slug: 'eco-friendly-packaging',
    name: 'Eco-friendly Packaging',
    category: 'Packaging',
    tagline: 'Recyclable, lightweight and rPET-ready packaging solutions.',
    summary:
      'Our eco-friendly packaging programme focuses on reducing material intensity and improving recyclability — through lightweighting, recycled-content (rPET) options where suitable, mono-material designs and responsible closure choices. We help brands lower their packaging footprint while meeting performance and regulatory needs.',
    heroImage: '/images/green-hills.jpg',
    gallery: [
      '/images/bottles-rows.jpg',
      '/images/clear-pet-bottle.jpg',
      '/images/water-bottle-dark.jpg',
    ],
    accent: 'from-emerald-400 to-teal-500',
    highlights: [
      'Lightweighting to cut material use',
      'Recycled-content (rPET) options where suitable',
      'Recyclable, mono-material designs',
      'Guidance on responsible packaging choices',
    ],
    features: [
      { title: 'Lightweighting', desc: 'Engineering out grams while retaining strength — lower material use and freight emissions.' },
      { title: 'Recycled content', desc: 'rPET options where grade availability and regulations support the intended application.' },
      { title: 'Design for recycling', desc: 'Mono-material structures and compatible closures improve real-world recyclability.' },
      { title: 'Responsible sourcing', desc: 'Material choices aligned with credible sustainability and compliance expectations.' },
    ],
    specs: [
      { label: 'Focus areas', value: 'Lightweighting, rPET, recyclability' },
      { label: 'Materials', value: 'PET / rPET (application-dependent)' },
      { label: 'Design', value: 'Mono-material, recycling-friendly' },
      { label: 'Customisation', value: 'Weights, formats & finishes' },
      { label: 'Compliance', value: 'Aligned with applicable packaging regulation' },
      { label: 'Advisory', value: 'Footprint-reduction guidance for brands' },
    ],
    sizes: [
      { size: 'Lightweighted bottles', format: 'Reduced gram weight', use: 'Water & beverage' },
      { size: 'rPET bottles', format: 'Recycled content', use: 'Sustainability-led brands' },
      { size: 'Bulk formats', format: 'Optimised jars', use: 'Institutional supply' },
    ],
    standards: ['Applicable packaging regulation', 'Recyclability best-practice', 'Food-contact compliance', 'ISO-aligned QMS'],
    applications: ['Sustainability-led FMCG brands', 'Retailers with packaging targets', 'Export programmes', 'Institutional buyers'],
    faqs: [
      { q: 'Is your eco-friendly packaging fully recyclable?', a: 'We design for recyclability using mono-material PET and compatible closures. Actual recyclability depends on local collection and recycling infrastructure, which we are happy to discuss for your market.' },
      { q: 'Can I switch my existing bottles to rPET?', a: 'In many cases yes, subject to rPET grade availability and regulatory suitability for the intended contents. We assess each application individually.' },
      { q: 'How much material can lightweighting save?', a: 'Savings are project-specific and depend on the starting design and performance requirements. We provide an engineered estimate after reviewing your current specification.' },
    ],
    keywords: ['eco-friendly packaging manufacturer', 'sustainable packaging supplier', 'rPET bottle manufacturer', 'recyclable packaging India'],
  },
];

export function getProduct(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function productSlugs(): string[] {
  return products.map((p) => p.slug);
}
