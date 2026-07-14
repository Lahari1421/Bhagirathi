import Link from 'next/link';
import { Mail, Phone, MapPin, Linkedin, Instagram, Facebook, Youtube, ArrowUpRight } from 'lucide-react';
import { footerNav, site, whatsappLink } from '@/lib/site';
import { Logo } from '@/components/ui/logo';
import { WaveDivider } from '@/components/ui/wave-divider';
import { trustLogos } from '@/lib/content';

export function SiteFooter() {
  const year = 2026;
  return (
    <footer className="water-caustics relative overflow-hidden bg-ink text-white">
      <WaveDivider position="top" className="text-white" height="sm" />
      <div className="pointer-events-none absolute inset-0 bg-brand-radial opacity-60" />
      <div className="pointer-events-none absolute inset-0 bg-ripple opacity-50" />
      <div className="pointer-events-none absolute -left-40 top-0 h-96 w-96 rounded-full bg-brand-500/20 blur-[120px]" />

      {/* CTA band */}
      <div className="relative border-b border-white/10">
        <div className="container-page flex flex-col items-start justify-between gap-8 pb-14 pt-20 lg:flex-row lg:items-center">
          <div className="max-w-xl">
            <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
              Ready to build a reliable water &amp; packaging supply?
            </h2>
            <p className="mt-4 text-white/70">
              Talk to our B2B and export team about products, OEM / private-label programmes,
              certifications and logistics.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="inline-flex h-12 items-center gap-2 rounded-full bg-white px-7 text-sm font-semibold text-ink transition-transform hover:scale-[1.03]"
            >
              Request a Quote <ArrowUpRight className="h-4 w-4" />
            </Link>
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-12 items-center gap-2 rounded-full border border-white/20 bg-white/5 px-7 text-sm font-semibold text-white backdrop-blur transition-colors hover:bg-white/10"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </div>

      {/* Main */}
      <div className="relative container-page grid grid-cols-2 gap-10 py-16 md:grid-cols-3 lg:grid-cols-6">
        <div className="col-span-2">
          <Logo invert />
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-white/60">
            {site.tagline} A premium, export-ready manufacturer of packaged, alkaline and mineral
            water, PET bottles and eco-friendly packaging.
          </p>
          <div className="mt-6 space-y-3 text-sm text-white/70">
            <a href={`tel:+${site.phoneHref}`} className="flex items-center gap-3 hover:text-white">
              <Phone className="h-4 w-4 text-brand-300" /> {site.phoneDisplay}
            </a>
            <a href={`mailto:${site.email}`} className="flex items-center gap-3 hover:text-white">
              <Mail className="h-4 w-4 text-brand-300" /> {site.email}
            </a>
            <span className="flex items-start gap-3">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand-300" />
              {site.address.city}, {site.address.state} {site.address.country}
            </span>
          </div>
          <div className="mt-6 flex gap-3">
            {[
              { icon: Linkedin, href: site.social.linkedin, label: 'LinkedIn' },
              { icon: Instagram, href: site.social.instagram, label: 'Instagram' },
              { icon: Facebook, href: site.social.facebook, label: 'Facebook' },
              { icon: Youtube, href: site.social.youtube, label: 'YouTube' },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white/70 transition-colors hover:border-brand-400 hover:bg-brand-500/20 hover:text-white"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        {footerNav.map((col) => (
          <div key={col.title}>
            <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-white/50">
              {col.title}
            </h3>
            <ul className="mt-4 space-y-2.5">
              {col.links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/70 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Trust strip */}
      <div className="relative border-t border-white/10">
        <div className="container-page flex flex-wrap items-center gap-x-8 gap-y-3 py-6">
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-white/40">
            Certifications
          </span>
          {trustLogos.map((logo) => (
            <span key={logo} className="text-sm font-semibold text-white/60">
              {logo}
            </span>
          ))}
        </div>
      </div>

      {/* Bottom */}
      <div className="relative border-t border-white/10">
        <div className="container-page flex flex-col items-center justify-between gap-3 py-6 text-xs text-white/50 sm:flex-row">
          <p>
            © {year} {site.legalName}. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            <Link href="/quality-certifications" className="hover:text-white">
              Quality &amp; Certifications
            </Link>
            <Link href="/sustainability" className="hover:text-white">
              Sustainability
            </Link>
            <Link href="/contact" className="hover:text-white">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
