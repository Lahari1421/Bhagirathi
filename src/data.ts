/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Product, Stat, ProcessStep, Certification, JobVacancy, BlogPost, Testimonial } from './types';

export const COMPANY_STATS: Stat[] = [
  {
    label: 'Years of Experience',
    value: 18,
    suffix: '+',
    description: 'Pioneering purity & bottling systems'
  },
  {
    label: 'Annual Capacity',
    value: 120,
    suffix: 'M Ltrs',
    description: 'Ultra-modern high-speed production output'
  },
  {
    label: 'Enterprise Clients',
    value: 450,
    suffix: '+',
    description: 'Leading hotel chains, airlines, and corporates'
  },
  {
    label: 'Global Exports',
    value: 12,
    suffix: '+ Countries',
    description: 'Exporting water solutions globally'
  },
  {
    label: 'State-of-the-Art Labs',
    value: 4,
    suffix: ' Units',
    description: 'Dedicated quality & microbiological testing facilities'
  },
  {
    label: 'Production Lines',
    value: 8,
    suffix: ' Lines',
    description: 'Fully-automated cleanroom bottling systems'
  }
];

export const PRODUCTS_DATA: Product[] = [
  {
    id: 'packaged-drinking-water',
    name: 'Bhagirathi Pure',
    subtitle: 'Premium Packaged Drinking Water',
    category: 'water',
    description: 'Ultra-pure bottled water treated with advanced multi-stage RO, UV, and Ozonization systems for crisp taste and trusted hydration.',
    detailedDescription: 'Bhagirathi Pure is our flagship offering, crafted using state-of-the-art purification technology that exceeds standard bottled water regulations. Sourced from pristine underground aquifers, the water undergoes absolute filtration down to 0.2 microns, followed by activated carbon absorption, reverse osmosis, ultraviolet sanitization, and rich ozone enrichment. This ensures every drop is exceptionally clean, pure, and healthy.',
    benefits: [
      'Multi-stage RO treatment to remove dissolved impurities',
      'Double UV sterilization for microbial safety',
      'Advanced Ozonization for absolute post-packaging freshness',
      'Enriched with essential minerals (Magnesium and Potassium)',
      '100% automated touch-free filling and sealing'
    ],
    specifications: {
      'pH Range': '7.0 - 7.4 (Balanced Neutral)',
      'Total Dissolved Solids (TDS)': '75 - 120 ppm',
      'Microbiological Purity': '0 CFU / 100ml (Absolute Zero)',
      'Mineral Enrichment': 'Magnesium (Mg), Potassium (K)',
      'Shelf Life': '12 Months from packaging date'
    },
    sizes: ['250ml Cups', '500ml Bottles', '1 Litre Premium', '2 Litre Family Pack', '20 Litre Food-Grade Bubble Cans'],
    applications: ['Daily Individual Hydration', 'Corporate Boardrooms & Offices', 'Hotels & Elite Hospitality', 'Conferences, Events & Weddings'],
    imageUrl: 'https://images.unsplash.com/photo-1616118132534-381148898bb4?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'alkaline-water',
    name: 'Bhagirathi pH+ 8.5',
    subtitle: 'Premium Bio-Alkaline Hydration',
    category: 'water',
    description: 'Engineered for athletes and health-conscious leaders. Naturally high-pH water packed with electrolytes to neutralize acidity and enhance metabolic recovery.',
    detailedDescription: 'Elevate your hydration. Bhagirathi pH+ 8.5 is scientifically processed to deliver stable alkaline properties with essential mineral electrolytes. Designed to counteract the acidic effects of modern diets and intense exercise, this premium beverage accelerates cellular rehydration, restores internal systemic balance, and provides a smooth, light mouthfeel.',
    benefits: [
      'Stable premium alkaline pH level of 8.5+',
      'Loaded with bio-available electrolytes (Calcium, Magnesium, Sodium)',
      'Neutralizes lactic acid buildup and dietary acidity',
      'Superior cellular hydration with smaller water micro-clusters',
      'Antioxidant-rich qualities for holistic vitality'
    ],
    specifications: {
      'pH Level': '8.5 - 9.0 (Rich Alkaline)',
      'TDS Range': '150 - 220 ppm',
      'Electrolyte Concentrates': 'Ca++, Mg++, Na+, K+',
      'Oxidation Reduction Potential': 'Negative ORP (Active Antioxidant)',
      'Packaging': 'FDA Approved, BPA-Free, UV-Protected PET'
    },
    sizes: ['500ml Elite Glass-Finish Bottle', '750ml Sports Bottle', '1 Litre Active Sleek Cap'],
    applications: ['Sports & Athletic Performance', 'Wellness Centres & Luxury Gyms', 'Executive Lounge Amenities', 'Daily Preventive Health Regimen'],
    imageUrl: 'https://images.unsplash.com/photo-1548839140-29a749e1cf4d?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'mineral-water',
    name: 'Bhagirathi Pristine',
    subtitle: 'Natural Mineral Spring Water',
    category: 'water',
    description: 'Sourced from protected, deep subterranean rock layers, preserving natural mineral structure and authentic crisp mountain taste.',
    detailedDescription: 'Bhagirathi Pristine is natural mineral water as nature intended. Sourced from deep-rock geological formations, it is naturally filtered over decades through layers of clean quartz and volcanic stone. This geological journey enriches the water with a high-purity composition of natural silica, calcium, and bicarbonates, creating a rich, smooth, and refreshing mountain-fresh taste profile.',
    benefits: [
      'Naturally alkaline and mineralized at the source',
      'No chemical modifications or synthetic mineral doping',
      'Rich in Natural Silica for skin, hair, and bone health',
      'Unsurpassed raw taste profile loved by international sommeliers',
      'Minimal environmental footprint extraction process'
    ],
    specifications: {
      'Source': 'Deep Confined Aquifer Protection Zone',
      'pH Level': '7.6 - 7.9 (Natural Sub-Alkaline)',
      'Natural Silica (SiO2)': '45 - 60 mg/L',
      'Bicarbonates': '180 - 240 mg/L',
      'Total Minerals': 'Approx 280 mg/L (Rich Body)'
    },
    sizes: ['330ml Classic Glass', '750ml Shared Feast Glass', '1 Litre Premium PET Recycled'],
    applications: ['Fine Dining Establishments', 'Five-Star Hotels & Luxury Resorts', 'Bespoke Gourmet Tastings', 'Premium Retail & Wellness Markets'],
    imageUrl: 'https://images.unsplash.com/photo-1523362628745-0c100150b504?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'pet-bottles',
    name: 'Industrial PET Preforms & Bottles',
    subtitle: 'High-Precision Rigid Packaging Solutions',
    category: 'bottle',
    description: 'Heavy-duty, food-grade PET preforms and blow-molded bottles manufactured with robotic German tech, optimized for zero leakage and drop resistance.',
    detailedDescription: 'Bhagirathi Plastics Division produces high-performance, food-grade Polyethylene Terephthalate (PET) bottles and preforms. Using state-of-the-art Japanese ASB injection stretch blow-molding and German Husky systems, we manufacture rigid containers that provide outstanding crystal-clear clarity, oxygen barriers, and structural integrity. Our bottles are light-weight yet robustly designed to withstand top-load transport stresses.',
    benefits: [
      '100% virgin food-grade US-FDA compliant resins',
      'Ultra-uniform wall thickness distribution to eliminate bursting',
      'BPA-free & fully recyclable structural polymers',
      'Premium neck-finish options with high-torque sealing',
      'Custom design styling & bespoke embossed corporate branding'
    ],
    specifications: {
      'Material': 'Virgin Polyethylene Terephthalate (PET)',
      'Grammage Range': '12g to 48g (Optimized light-weight)',
      'Clarity Rating': '99.8% Transparent Glass-Clarity',
      'Thread Finish': '28mm PCO 1810 / 1881, 30/25 High-Neck',
      'Burst Strength': 'Exceeds 7.5 Bar Pressure Resistance'
    },
    sizes: ['60ml Pharma', '200ml Round/Square', '250ml Juice Sleek', '500ml Ribbed Water', '1L Premium Spiral', '2L Square Heavy', '5L Easy-Grip Jar'],
    applications: ['Beverage Bottling Plants (Water, Juices, Soda)', 'Pharmaceutical Syrups & Liquids', 'Edible Oil & Food Packaging', 'Cosmetics, Shampoos & Handwash Bottling'],
    imageUrl: 'https://images.unsplash.com/photo-1571781926291-c477ebfd024b?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'eco-packaging',
    name: 'Bhagirathi EcoHydrate',
    subtitle: 'Next-Gen Biodegradable & Recycled Containers',
    category: 'eco',
    description: 'Pioneering green manufacturing with 100% post-consumer recycled PET (rPET) and plant-based bioplastic cartons that cut carbon footprints by 65%.',
    detailedDescription: 'Bhagirathi is dedicated to a circular economy. Our EcoHydrate series features high-performance packaging derived from certified Post-Consumer Recycled PET (rPET) and biodegradable sugarcane bagasse paperboard cartons. This eco-packaging acts as an excellent, oxygen-barrier container while minimizing landfill waste. Switching to EcoHydrate enables FMCG brands to significantly reduce their scope 3 greenhouse gas emissions.',
    benefits: [
      'Made from certified 100% Post-Consumer Recycled PET (rPET)',
      'Sub-zero carbon manufacturing techniques utilized',
      '100% compostable outer caps and plant-based internal liners',
      'Printed with organic vegetable-based non-toxic inks',
      'Dramatically reduces oceanic and landfill plastic accumulation'
    ],
    specifications: {
      'rPET Certification': 'GRS (Global Recycled Standard) Approved',
      'Carbon Reduction': '-65% CO2 eq compared to virgin PET',
      'Biodegradability': 'Inner membrane bio-degrades in 180 days',
      'BPA/BPF Status': '100% Certified Free of endocrine disruptors',
      'Sourcing': '100% ethically gathered coastal ocean-bound plastic'
    },
    sizes: ['500ml rPET Eco Bottle', '1 Litre Sugarcane-carton Box', '20 Litre rPET Smart Dispenser Roll'],
    applications: ['Eco-conscious Luxury Hotels', 'Corporate Sustainability campaigns', 'International Green Conferences', 'Premium Eco-Minded Retail Chains'],
    imageUrl: 'https://images.unsplash.com/photo-1591189863430-ab87e120f312?auto=format&fit=crop&q=80&w=800'
  }
];

export const OEM_PROCESS_STEPS: ProcessStep[] = [
  {
    step: 1,
    title: 'Requirement Analysis & Formulation',
    description: 'Consultation to map client needs, choosing water type (Pure, Alkaline, Mineral) and production scope.'
  },
  {
    step: 2,
    title: 'Bottle Selection & Engineering',
    description: 'Select bottle shape, size, weight, and neck-finish from our vast library, or create customized 3D CAD molds.'
  },
  {
    step: 3,
    title: 'Label Design & Branding',
    description: 'Collaborate with our in-house designers to develop premium labels complying with national/international food safety standards.'
  },
  {
    step: 4,
    title: 'Mass Production & Bottling',
    description: 'Manufacturing inside our cleanroom facility using fully automated European blow-fill-cap monolithic blocks.'
  },
  {
    step: 5,
    title: 'Multi-Barrier Quality Testing',
    description: 'Batches undergo automated visual inspection, pressure testing, and advanced physical/microbiological lab clearance.'
  },
  {
    step: 6,
    title: 'High-Density Smart Packaging',
    description: 'Bottles are boxed, stretch-wrapped on heavy-duty eco-pallets, and barcoded for absolute supply chain visibility.'
  },
  {
    step: 7,
    title: 'JIT Logistics & Delivery',
    description: 'Dispatched via our freight network, ensuring just-in-time warehouse replenishment and seamless global export shipping.'
  }
];

export const CERTIFICATIONS_DATA: Certification[] = [
  {
    id: 'iso-9001',
    title: 'ISO 9001:2015 Certification',
    code: 'Registration No. QMS/0822/045',
    authority: 'International Organization for Standardization',
    description: 'Validates our rigorous Quality Management System, operational protocols, traceability systems, and continuous improvement metrics across all production lines.'
  },
  {
    id: 'bis-14543',
    title: 'BIS License (IS 14543)',
    code: 'License No. CM/L-82001439',
    authority: 'Bureau of Indian Standards',
    description: 'The mandatory gold standard for packaged drinking water in India. Certifies compliance with 52+ physical, chemical, and microbiological water parameters.'
  },
  {
    id: 'fssai',
    title: 'FSSAI Central License',
    code: 'License No. 10018022007849',
    authority: 'Food Safety and Standards Authority of India',
    description: 'Ensures our manufacturing, processing, storage, and distribution practices adhere strictly to central food safety standards and hygienic handling protocols.'
  },
  {
    id: 'iso-22000',
    title: 'ISO 22000:2018 (FSMS)',
    code: 'Registration No. FSMS/0923/112',
    authority: 'Food Safety Management Systems',
    description: 'International benchmark certifying our HACCP (Hazard Analysis Critical Control Point) system, ensuring risk mitigation from raw water sourcing to delivery.'
  },
  {
    id: 'gmp-cert',
    title: 'Good Manufacturing Practices (GMP)',
    code: 'GMP Certificate No. 44109/B',
    authority: 'WHO Standards Inspection Board',
    description: 'Validates that our sterile cleanrooms, personal sanitation stations, HEPA filtration systems, and equipment sterilization cycles meet top pharmaceutical-grade bottling standards.'
  }
];

export const CAREERS_VACANCIES: JobVacancy[] = [
  {
    id: 'qc-manager',
    title: 'Manager - Quality Control & Microbiological Lab',
    department: 'Quality Assurance',
    location: 'Headquarters Plant, Pune, India',
    type: 'Full-Time (On-Site)',
    experience: '6 - 10 Years in Beverage/FMCG',
    description: 'We are seeking a highly analytical QA professional to lead our state-of-the-art water testing laboratories. You will manage a team of microbiologists, audit daily wet-lab tests, oversee BIS/FSSAI regulatory audits, and implement food-safety protocols.',
    responsibilities: [
      'Lead daily physical, chemical, and microbiological testing of raw and finished water.',
      'Maintain absolute compliance with BIS (IS 14543) and ISO 22000 requirements.',
      'Optimize Clean-in-Place (CIP) sanitation schedules and HEPA-filter cleanroom validation.',
      'Train factory staff in Good Manufacturing Practices (GMP) and hygiene.',
      'Liaise with external government testing auditors and manage laboratory instrument calibrations.'
    ],
    requirements: [
      'Master’s degree in Microbiology, Food Technology, or Chemistry.',
      'Direct experience heading QA/QC in a large-scale carbonated or bottled water bottling plant.',
      'Profound knowledge of chemical assays, atomic absorption spectroscopy, and plating methodologies.',
      'Strong leadership, team management, and documentation skills.'
    ]
  },
  {
    id: 'production-lead',
    title: 'Automation & Production Operations Lead',
    department: 'Manufacturing Operations',
    location: 'Headquarters Plant, Pune, India',
    type: 'Full-Time (Rotational Shifts)',
    experience: '4 - 8 Years',
    description: 'We are looking for a tech-savvy Mechanical or electrical Engineer to oversee our fully-automated, high-speed German blow-fill-cap bottling block. You will be responsible for production throughput, minimizing down-time, and preventive machinery maintenance.',
    responsibilities: [
      'Supervise high-speed automated bottling lines operating at 24,000 Bottles Per Hour.',
      'Configure and calibrate PLC automation interfaces (Siemens / Rockwell Automation).',
      'Oversee blow-molding preform feeding, furnace heating profiles, and capping torque forces.',
      'Execute prompt trouble-shooting of pneumatic and hydraulic system anomalies.',
      'Enforce strict energy efficiency protocols and minimize preform material wastage.'
    ],
    requirements: [
      'Bachelor’s Degree in Mechanical, Mechatronics, or Electrical Engineering.',
      'Expertise working with automated blow-molding and bottling machinery (Sidel, Krones, or Husky systems preferred).',
      'Solid command of preventive maintenance metrics and automated sensor systems.',
      'Resilient problem-solving spirit under high-throughput production deadlines.'
    ]
  },
  {
    id: 'b2b-sales-exec',
    title: 'Senior Executive - B2B Corporate & Export Accounts',
    department: 'Business Development & Exports',
    location: 'Corporate Office (Mumbai) / Hybrid',
    type: 'Full-Time',
    experience: '3 - 6 Years in FMCG B2B Sales',
    description: 'Expand Bhagirathi’s B2B footprint. You will acquire high-volume private label/OEM contracts, secure beverage partnerships with luxury hotels and airlines, and coordinate export orders for Southeast Asia and Gulf markets.',
    responsibilities: [
      'Identify, pitch, and onboard institutional accounts (corporate hubs, hospitality, air-transport).',
      'Develop customized pricing quotations, SLA contracts, and coordinate design mockups with clients.',
      'Collaborate with the export logistics desk to manage international custom documentations, FOB/CIF terms.',
      'Represent Bhagirathi Industries at prominent national and global trade expos and food fairs.',
      'Exceed monthly volume dispatch goals and ensure superior client retention.'
    ],
    requirements: [
      'MBA in Marketing, International Business, or related credentials.',
      'Proven track record of institutional sales or private-label client acquisition in FMCG/Beverage sectors.',
      'Impeccable verbal communication, presentation craftsmanship, and strategic negotiation skills.',
      'Basic knowledge of customs clearing processes, LC payments, and container freight operations.'
    ]
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'alkaline-science',
    title: 'The Science of Alkalinity: How pH+ 8.5 Water Promotes Faster Muscle Recovery',
    excerpt: 'Explore the physiological benefits of high-pH water enriched with active electrolytes and how it benefits athletes.',
    content: 'Hydration is not just about quenching thirst; it is about cellular optimization. In this detailed study, we investigate the physiological benefits of alkaline water with a pH of 8.5+. During high-intensity workouts, your body metabolizes glucose rapidly, producing lactic acid. This buildup lowers blood pH levels, leading to muscle fatigue, soreness, and extended downtime. Bhagirathi pH+ 8.5 is engineered with high-purity minerals that rapidly neutralize acid buildup. Furthermore, due to the proprietary micro-clustering process, the water molecules are arranged in smaller groupings, allowing them to penetrate cell membranes twice as fast as normal tap water. This accelerates nutrient delivery, flushes metabolic waste, and slashes muscle recovery times by up to 35%. Modern athletic teams globally are transitioning to bio-alkaline solutions to sustain high-end physical performance.',
    category: 'Hydration',
    image: 'https://images.unsplash.com/photo-1518310383802-640c2de311b2?auto=format&fit=crop&q=80&w=800',
    date: 'June 28, 2026',
    author: 'Dr. Sandeep Deshmukh, Lead Nutritionist',
    readTime: '6 Min Read'
  },
  {
    id: 'bottling-automation',
    title: 'Inside Our Sterile Cleanrooms: How Touch-Free Bottling Guarantees Absolute Purity',
    excerpt: 'Step behind the scenes of our automated robotic cleanrooms and witness the multi-barrier filtration system.',
    content: 'Human contact is the leading source of bacterial contamination in food manufacturing. To mitigate this risk, Bhagirathi Industries has invested in ultra-sterile Cleanrooms designed to Class 100 (ISO 5) particulate standards. In this article, we map the journey of a bottle. From the instant PET preforms enter the rotary blow-molder to the ultimate capping of pure water, the entire lifecycle is 100% automated and touch-free. Air entering the bottling zone is continuously scrubbed through double-stage HEPA filters, maintaining positive pressure that repels external airborne particles. Bottles are sanitarily rinsed with ozonated water, filled via specialized stainless-steel electromagnetic flowmeters, and hermetically sealed within a fraction of a second. This rigorous containment cycle prevents any biological entry, assuring that the pure, fresh taste is unlocked for the first time by you.',
    category: 'Manufacturing',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800',
    date: 'May 14, 2026',
    author: 'Rajesh Kulkarni, Chief Operations Engineer',
    readTime: '8 Min Read'
  },
  {
    id: 'rpet-circular-economy',
    title: 'Empowering the Circular Economy: The Rise of GRS-Certified Recycled PET in FMCG',
    excerpt: 'Discover how Bhagirathi is reducing carbon emissions by 65% through GRS-certified post-consumer recycled PET bottles.',
    content: 'Plastic pollution is one of the greatest ecological crises of our era. As a responsible industrial leader, Bhagirathi Industries is leading the charge toward plastic-neutrality. Through our new EcoHydrate packaging vertical, we are introducing Global Recycled Standard (GRS) certified Post-Consumer Recycled PET (rPET) to premium Indian and global markets. Instead of extracting new fossil fuel resins, rPET collects discarded plastic bottles from coastal regions, cleans them, melts them down, and reforms them into high-purity food-grade pellets. This closed-loop recycling process uses 79% less electricity and slashes carbon emissions by 65% compared to virgin PET, while maintaining identical strength, barrier defense, and crystalline clarity. By partnering with Bhagirathi for OEM private labeling, eco-conscious brands are transforming plastic from single-use waste into a durable, circular resource.',
    category: 'Sustainability',
    image: 'https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&q=80&w=800',
    date: 'April 02, 2026',
    author: 'Sunita Sharma, Director of Sustainability',
    readTime: '5 Min Read'
  }
];

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: 'test-1',
    name: 'Vikramjit Singh',
    role: 'Vice President - Supply Chain',
    company: 'Grand Regency Hotel Group',
    content: 'Bhagirathi Industries has been our exclusive private-label water partner for over five years. Their design team helped us craft an exceptionally elegant custom bottle that blends perfectly with our luxury guest rooms. Deliveries are flawless, and their water purity standards are highly appreciated by our premium international guests.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200'
  },
  {
    id: 'test-2',
    name: 'Amanda Lin',
    role: 'Director of Global Procurement',
    company: 'Pacific Blue Cruise Lines (Singapore)',
    content: 'For maritime operations, packaging durability is as critical as water purity. Bhagirathi’s custom heavy-duty PET bottles have completely eliminated container deformation issues during ocean transits. Their export documentation, BIS compliance, and ISO certifications are exemplary, making them an ideal global partner.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200'
  },
  {
    id: 'test-3',
    name: 'Ketan Shah',
    role: 'Founder & CEO',
    company: 'Vitality Beverage Co.',
    content: 'Launching our brand of premium bio-alkaline water was a huge risk, but Bhagirathi made the entire OEM process effortless. From formulating the precise pH+ 8.5 mineral balance to manufacturing custom preforms, they delivered world-class service at an efficient price point. Highly recommended!',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200'
  }
];
