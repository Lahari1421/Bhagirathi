import type { MetadataRoute } from 'next';
import { site } from '@/lib/site';
import { productSlugs } from '@/lib/products';
import { articles } from '@/lib/content';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = site.url;
  const now = new Date('2026-07-11');

  const staticPaths = [
    '',
    '/about',
    '/products',
    '/manufacturing',
    '/oem-private-label',
    '/quality-certifications',
    '/sustainability',
    '/knowledge-center',
    '/alkaline-water-guide',
    '/media',
    '/testimonials',
    '/careers',
    '/blog',
    '/contact',
  ];

  const routes: MetadataRoute.Sitemap = staticPaths.map((path) => ({
    url: `${base}${path}`,
    lastModified: now,
    changeFrequency: path === '' ? 'weekly' : 'monthly',
    priority: path === '' ? 1 : 0.8,
  }));

  for (const slug of productSlugs()) {
    routes.push({
      url: `${base}/products/${slug}`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.9,
    });
  }

  for (const a of articles) {
    routes.push({
      url: `${base}/blog/${a.slug}`,
      lastModified: new Date(a.date),
      changeFrequency: 'yearly',
      priority: 0.6,
    });
  }

  return routes;
}
