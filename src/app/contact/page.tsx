import type { Metadata } from 'next';
import { Phone, Mail, MapPin, MessageCircle, Clock, Handshake, Store, Globe2, Briefcase } from 'lucide-react';
import { PageHero } from '@/components/shared/page-hero';
import { Container, Section, SectionHeading } from '@/components/ui/section';
import { Reveal, RevealGroup, RevealItem } from '@/components/ui/reveal';
import { InquiryForm } from '@/components/shared/inquiry-form';
import { buildMetadata } from '@/lib/seo';
import { site, whatsappLink } from '@/lib/site';

export const metadata: Metadata = buildMetadata({
  title: 'Contact — Request a Quote or Partnership',
  description:
    'Contact Bhagirathi Industries Pvt. Ltd. for quotes, distributor & dealer enquiries, OEM / private label, export enquiries, vendor registration and careers.',
  path: '/contact',
});

const quickTypes = [
  { icon: Store, title: 'Distributor / dealer', desc: 'Become a distributor or register as a dealer.' },
  { icon: Handshake, title: 'OEM / private label', desc: 'Launch or scale your own water brand.' },
  { icon: Globe2, title: 'Export enquiry', desc: 'International supply & private-label programmes.' },
  { icon: Briefcase, title: 'Vendor registration', desc: 'Supply materials or services to us.' },
];

export default function ContactPage() {
  const contactJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    name: `Contact ${site.name}`,
    url: `${site.url}/contact`,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactJsonLd) }}
      />
      <PageHero
        eyebrow="Contact us"
        title="Let’s start a conversation"
        description="Quotes, distribution, OEM / private label, exports, vendor registration or careers — reach the right team quickly."
        crumbs={[
          { label: 'Home', href: '/' },
          { label: 'Contact', href: '/contact' },
        ]}
      />

      {/* Quick contact cards */}
      <Section className="bg-white pb-0">
        <Container>
          <RevealGroup className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {quickTypes.map((q) => (
              <RevealItem key={q.title}>
                <a
                  href="#enquiry-form"
                  className="block h-full rounded-3xl border border-ink/10 bg-gradient-to-b from-white to-muted/40 p-6 card-hover"
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-brand-50 text-brand-600">
                    <q.icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-4 font-display text-base font-bold text-ink">{q.title}</h3>
                  <p className="mt-1.5 text-sm text-ink-500">{q.desc}</p>
                </a>
              </RevealItem>
            ))}
          </RevealGroup>
        </Container>
      </Section>

      {/* Contact + form */}
      <Section className="bg-white">
        <Container className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          {/* Details */}
          <Reveal>
            <SectionHeading eyebrow="Reach us" title="Contact details" />
            <div className="mt-8 space-y-4">
              <ContactRow icon={Phone} label="Phone" value={site.phoneDisplay} href={`tel:+${site.phoneHref}`} />
              <ContactRow icon={Mail} label="Email" value={site.email} href={`mailto:${site.email}`} />
              <ContactRow
                icon={MessageCircle}
                label="WhatsApp"
                value="Chat with our team"
                href={whatsappLink()}
                external
              />
              <ContactRow
                icon={MapPin}
                label="Address"
                value={`${site.address.city}, ${site.address.state}, ${site.address.country}`}
              />
              <div className="flex items-start gap-4 rounded-2xl border border-ink/10 bg-muted/30 p-5">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                  <Clock className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-ink-500">
                    Business hours
                  </p>
                  <p className="mt-1 text-sm text-ink-600">Mon – Sat · 9:30 AM – 6:30 PM IST</p>
                  <p className="text-xs text-ink-400">Placeholder — update to your actual hours.</p>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="mt-8 overflow-hidden rounded-3xl border border-ink/10 shadow-soft">
              <iframe
                title="Company location map"
                src={site.mapEmbed}
                width="100%"
                height="280"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="block w-full"
              />
            </div>
            <p className="mt-2 text-xs text-ink-400">
              Map shows an approximate area — replace the embed with your exact plant / office location.
            </p>
          </Reveal>

          {/* Form */}
          <Reveal delay={1}>
            <div id="enquiry-form" className="scroll-mt-24 rounded-3xl border border-ink/10 bg-muted/30 p-6 shadow-soft sm:p-8">
              <h2 className="font-display text-2xl font-bold text-ink">Send us an enquiry</h2>
              <p className="mt-2 text-sm text-ink-500">
                Choose your enquiry type and share a few details. We&apos;ll route it to the right team
                and respond promptly.
              </p>
              <div className="mt-6">
                <InquiryForm defaultType="Request a quote" />
              </div>
            </div>
          </Reveal>
        </Container>
      </Section>
    </>
  );
}

function ContactRow({
  icon: Icon,
  label,
  value,
  href,
  external,
}: {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  value: string;
  href?: string;
  external?: boolean;
}) {
  const inner = (
    <div className="flex items-start gap-4 rounded-2xl border border-ink/10 bg-white p-5 transition-colors hover:border-brand-300">
      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
        <Icon className="h-5 w-5" />
      </span>
      <div>
        <p className="text-xs font-semibold uppercase tracking-wide text-ink-500">{label}</p>
        <p className="mt-1 text-sm font-medium text-ink">{value}</p>
      </div>
    </div>
  );
  if (!href) return inner;
  return (
    <a href={href} target={external ? '_blank' : undefined} rel={external ? 'noopener noreferrer' : undefined}>
      {inner}
    </a>
  );
}
