import type { Metadata } from 'next';
import { site } from './site';

type SeoInput = {
  title: string;
  description: string;
  path?: string;
  image?: string;
  keywords?: string[];
};

/** Build consistent per-page Metadata including OpenGraph + Twitter cards. */
export function buildMetadata({ title, description, path = '/', image, keywords }: SeoInput): Metadata {
  const url = `${site.url}${path}`;
  const ogImage = image ?? '/opengraph-image';
  return {
    title,
    description,
    keywords,
    alternates: { canonical: url },
    openGraph: {
      type: 'website',
      locale: site.locale,
      url,
      siteName: site.name,
      title,
      description,
      images: [{ url: ogImage, width: 1200, height: 630, alt: site.name }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImage],
    },
  };
}

/** Organization + Website structured data for the site root. */
export function organizationJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: site.name,
    legalName: site.legalName,
    url: site.url,
    slogan: site.tagline,
    foundingDate: String(site.foundingYear),
    description: site.description,
    email: site.email,
    telephone: `+${site.phoneHref}`,
    address: {
      '@type': 'PostalAddress',
      ...(site.address.line1 ? { streetAddress: `${site.address.line1}${site.address.line2 ? `, ${site.address.line2}` : ''}` } : {}),
      addressLocality: site.address.city,
      addressRegion: site.address.state,
      ...(site.address.postalCode ? { postalCode: site.address.postalCode } : {}),
      addressCountry: 'IN',
    },
    sameAs: [site.social.linkedin, site.social.instagram, site.social.facebook, site.social.youtube],
    knowsAbout: [
      'Packaged Drinking Water Manufacturing',
      'Alkaline Water Manufacturing',
      'Mineral Water Manufacturing',
      'PET Bottle Manufacturing',
      'OEM & Private Label Water',
      'Eco-friendly Packaging',
    ],
  };
}

export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((it, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: it.name,
      item: `${site.url}${it.path}`,
    })),
  };
}
