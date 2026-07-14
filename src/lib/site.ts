/**
 * Central site configuration. Editable single source of truth for brand,
 * contact, navigation and social details used across the whole site.
 * Placeholder values are marked and safe to replace with real company data.
 */

export const site = {
  name: 'Bhagirathi Industries Pvt. Ltd.',
  shortName: 'Bhagirathi Industries',
  legalName: 'Bhagirathi Industries Private Limited',
  tagline: 'Purity, engineered to global standards.',
  description:
    'Bhagirathi Industries Pvt. Ltd. is a premium manufacturer of packaged drinking water, alkaline water, mineral water, PET bottles and eco-friendly packaging — serving B2B distributors, retailers, OEM/private-label and export partners in India and worldwide.',
  // Replace with your live domain before launch.
  url: 'https://www.bhagirathiindustries.com',
  locale: 'en_IN',
  // --- Contact (placeholder — replace with verified company details) ---
  phoneDisplay: '+91 90000 00000',
  phoneHref: '+919000000000',
  whatsapp: '919000000000',
  email: 'info@bhagirathiindustries.com',
  careersEmail: 'careers@bhagirathiindustries.com',
  address: {
    line1: '',
    line2: '',
    city: 'Anantapur',
    state: 'Andhra Pradesh',
    postalCode: '',
    country: 'India',
  },
  mapEmbed:
    'https://www.google.com/maps?q=Anantapur%2C%20Andhra%20Pradesh%2C%20India&output=embed',
  foundingYear: 2009,
  social: {
    linkedin: 'https://www.linkedin.com/',
    instagram: 'https://www.instagram.com/',
    facebook: 'https://www.facebook.com/',
    youtube: 'https://www.youtube.com/',
    x: 'https://x.com/',
  },
} as const;

export const primaryNav = [
  { label: 'Home', href: '/' },
  {
    label: 'Products',
    href: '/products',
    children: [
      { label: 'Packaged Drinking Water', href: '/products/packaged-drinking-water', desc: 'Multi-stage purified water in every retail & bulk format.' },
      { label: 'Alkaline Water', href: '/products/alkaline-water', desc: 'Ionised water with a naturally higher pH balance.' },
      { label: 'Mineral Water', href: '/products/mineral-water', desc: 'Balanced essential minerals for a crisp, clean taste.' },
      { label: 'PET Bottles', href: '/products/pet-bottles', desc: 'Precision-moulded, food-grade PET preforms & bottles.' },
      { label: 'Eco-friendly Packaging', href: '/products/eco-friendly-packaging', desc: 'rPET and lightweight, recyclable packaging solutions.' },
    ],
  },
  {
    label: 'Capabilities',
    href: '/manufacturing',
    children: [
      { label: 'Manufacturing Facilities', href: '/manufacturing', desc: 'Automated lines, labs and warehousing.' },
      { label: 'OEM & Private Label', href: '/oem-private-label', desc: 'Your brand, our production expertise.' },
      { label: 'Quality & Certifications', href: '/quality-certifications', desc: 'BIS, FSSAI, ISO and multi-stage QA.' },
      { label: 'Sustainability', href: '/sustainability', desc: 'Water stewardship & circular packaging.' },
    ],
  },
  {
    label: 'Knowledge',
    href: '/knowledge-center',
    children: [
      { label: 'Knowledge Center', href: '/knowledge-center', desc: 'Hydration, purification and packaging science.' },
      { label: 'Understanding Alkaline Water', href: '/alkaline-water-guide', desc: 'A balanced, evidence-based explainer.' },
      { label: 'Blog & News', href: '/blog', desc: 'Company updates and industry insight.' },
      { label: 'Media & Recognition', href: '/media', desc: 'Press, awards and exhibitions.' },
    ],
  },
  { label: 'Legacy', href: '/the-legacy-behind-bhagirathi' },
  {
    label: 'Company',
    href: '/about',
    children: [
      { label: 'About Us', href: '/about', desc: 'Company Overview' },
      { label: 'Vision & Mission', href: '/vision-mission', desc: 'The vision driving our future.' },
      { label: 'Testimonials', href: '/testimonials', desc: 'Client stories and partner feedback.' },
      { label: 'Careers', href: '/careers', desc: 'Build the future of hydration with us.' },
      { label: 'Contact', href: '/contact', desc: 'Talk to our B2B & export team.' },
    ],
  },
] as const;

export const footerNav = [
  {
    title: 'Products',
    links: [
      { label: 'Packaged Drinking Water', href: '/products/packaged-drinking-water' },
      { label: 'Alkaline Water', href: '/products/alkaline-water' },
      { label: 'Mineral Water', href: '/products/mineral-water' },
      { label: 'PET Bottles', href: '/products/pet-bottles' },
      { label: 'Eco-friendly Packaging', href: '/products/eco-friendly-packaging' },
    ],
  },
  {
    title: 'Capabilities',
    links: [
      { label: 'Manufacturing', href: '/manufacturing' },
      { label: 'OEM & Private Label', href: '/oem-private-label' },
      { label: 'Quality & Certifications', href: '/quality-certifications' },
      { label: 'Sustainability', href: '/sustainability' },
    ],
  },
  {
    title: 'Knowledge',
    links: [
      { label: 'Knowledge Center', href: '/knowledge-center' },
      { label: 'Alkaline Water Guide', href: '/alkaline-water-guide' },
      { label: 'Blog & News', href: '/blog' },
      { label: 'Media & Recognition', href: '/media' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About Us', href: '/about' },
      { label: 'Vision & Mission', href: '/vision-mission' },
      { label: 'Legacy', href: '/the-legacy-behind-bhagirathi' },
      { label: 'Testimonials', href: '/testimonials' },
      { label: 'Careers', href: '/careers' },
      { label: 'Contact', href: '/contact' },
    ],
  },
] as const;

/** Pre-composed WhatsApp deep link with a default B2B enquiry message. */
export function whatsappLink(message?: string): string {
  const text = encodeURIComponent(
    message ??
      `Hello ${site.shortName}, I would like to enquire about your products and B2B / export options.`,
  );
  return `https://wa.me/${site.whatsapp}?text=${text}`;
}
