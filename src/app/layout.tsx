import type { Metadata, Viewport } from 'next';
import './globals.css';
import { site } from '@/lib/site';
import { organizationJsonLd } from '@/lib/seo';
import { SiteHeader } from '@/components/layout/site-header';
import { SiteFooter } from '@/components/layout/site-footer';
import { WhatsappFloat } from '@/components/layout/whatsapp-float';
import { RevealObserver } from '@/components/ui/reveal-observer';

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — Premium Water & Packaging Manufacturer`,
    template: `%s | ${site.shortName}`,
  },
  description: site.description,
  applicationName: site.name,
  authors: [{ name: site.name }],
  creator: site.name,
  keywords: [
    'Packaged Drinking Water Manufacturer',
    'Mineral Water Manufacturer',
    'Alkaline Water Manufacturer',
    'PET Bottle Manufacturer',
    'OEM Water Manufacturer',
    'Private Label Water Manufacturer',
    'Eco-friendly Packaging Manufacturer',
    'Bottled Water Exporter India',
  ],
  robots: { index: true, follow: true },
  icons: { icon: '/favicon.svg' },
};

export const viewport: Viewport = {
  themeColor: '#0A1B2A',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-background text-foreground">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd()) }}
        />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-ink focus:px-4 focus:py-2 focus:text-white"
        >
          Skip to content
        </a>
        <RevealObserver />
        <SiteHeader />
        <main id="main">{children}</main>
        <SiteFooter />
        <WhatsappFloat />
      </body>
    </html>
  );
}
