/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export enum NavSection {
  Home = 'home',
  Story = 'story',
  About = 'about',
  Products = 'products',
  Manufacturing = 'manufacturing',
  Oem = 'oem',
  Quality = 'quality',
  Sustainability = 'sustainability',
  Careers = 'careers',
  Blog = 'blog',
  Contact = 'contact'
}

export interface Stat {
  label: string;
  value: number;
  suffix: string;
  prefix?: string;
  description: string;
}

export interface Product {
  id: string;
  name: string;
  subtitle: string;
  category: 'water' | 'bottle' | 'eco';
  description: string;
  detailedDescription: string;
  benefits: string[];
  specifications: Record<string, string>;
  sizes: string[];
  applications: string[];
  imageUrl: string;
}

export interface ProcessStep {
  step: number;
  title: string;
  description: string;
}

export interface Certification {
  id: string;
  title: string;
  code: string;
  authority: string;
  description: string;
}

export interface JobVacancy {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
  experience: string;
  description: string;
  responsibilities: string[];
  requirements: string[];
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  category: 'Hydration' | 'Manufacturing' | 'Sustainability' | 'Exports';
  image: string;
  date: string;
  author: string;
  readTime: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
  image: string;
}

export interface InquiryFormData {
  name: string;
  email: string;
  phone: string;
  companyName: string;
  productOfInterest: string;
  quantityNeeded: string;
  message: string;
  agreeToPrivacy: boolean;
}
