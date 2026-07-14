import type { Metadata } from 'next';
import { Quote, Building2, Store, Globe2, Landmark } from 'lucide-react';
import { PageHero } from '@/components/shared/page-hero';
import { Container, Section, SectionHeading } from '@/components/ui/section';
import { RevealGroup, RevealItem } from '@/components/ui/reveal';
import { Badge } from '@/components/ui/badge';
import { CtaBand } from '@/components/shared/cta-band';
import { buildMetadata } from '@/lib/seo';
import { testimonials } from '@/lib/content';

export const metadata: Metadata = buildMetadata({
  title: 'Testimonials & Client Stories',
  description:
    'What distributors, brand owners and institutional buyers say about partnering with Bhagirathi Industries. Placeholder content shown until authentic testimonials are published.',
  path: '/testimonials',
});

const caseStudies = [
  { icon: Store, sector: 'Retail & distribution', title: 'Consistent multi-format supply', text: 'A regional distributor consolidating multiple SKUs with a single, reliable manufacturing partner and dependable dispatch windows.' },
  { icon: Globe2, sector: 'Export / private label', title: 'Launching a new water brand', text: 'A brand owner taking a private-label product to market — bottle, label and export documentation handled end to end.' },
  { icon: Landmark, sector: 'Institutional', title: 'Meeting tender requirements', text: 'An institutional buyer requiring certifications, traceability and documentation to satisfy a formal procurement process.' },
  { icon: Building2, sector: 'Corporate & HoReCa', title: 'Reliable office & hospitality supply', text: 'A corporate campus and hospitality group standardising on bulk jars and retail formats for daily operations.' },
];

export default function TestimonialsPage() {
  return (
    <>
      <PageHero
        eyebrow="Client stories"
        title="Partners who rely on us"
        description="Real relationships, honestly represented. Where authentic testimonials aren't yet available, we clearly mark placeholder content that can be replaced later."
        crumbs={[
          { label: 'Home', href: '/' },
          { label: 'Testimonials', href: '/testimonials' },
        ]}
      />

      {/* Testimonials */}
      <Section className="bg-white">
        <Container>
          <div className="rounded-2xl border border-amber-200 bg-amber-50/60 p-5 text-sm leading-relaxed text-ink-600">
            <strong className="text-ink">Note:</strong> the quotes below are clearly marked
            placeholders, provided so the layout is ready. Replace them with authentic, attributable
            testimonials (with consent) before publishing.
          </div>
          <RevealGroup className="mt-12 grid gap-6 lg:grid-cols-3">
            {[...testimonials, ...testimonials.slice(0, 3)].map((t, idx) => (
              <RevealItem key={idx}>
                <figure className="flex h-full flex-col rounded-3xl border border-ink/10 bg-gradient-to-b from-white to-muted/40 p-8 shadow-soft">
                  <Quote className="h-8 w-8 text-brand-200" />
                  <blockquote className="mt-4 flex-1 text-[15px] leading-relaxed text-ink-600">
                    “{t.quote}”
                  </blockquote>
                  <figcaption className="mt-6 flex items-center gap-3 border-t border-ink/10 pt-5">
                    <span className="flex h-11 w-11 items-center justify-center rounded-full bg-brand-50 font-display font-bold text-brand-700">
                      {t.name.charAt(0)}
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-ink">{t.name}</p>
                      <p className="text-xs text-ink-500">
                        {t.role}, {t.company}
                      </p>
                    </div>
                    <Badge tone="neutral" className="ml-auto">
                      Placeholder
                    </Badge>
                  </figcaption>
                </figure>
              </RevealItem>
            ))}
          </RevealGroup>
        </Container>
      </Section>

      {/* Case studies */}
      <Section className="bg-muted/40">
        <Container>
          <SectionHeading
            eyebrow="Case studies"
            title="How partners work with us"
            description="Illustrative scenarios across the segments we serve — to be replaced with real, consented case studies over time."
          />
          <RevealGroup className="mt-14 grid gap-6 md:grid-cols-2">
            {caseStudies.map((c) => (
              <RevealItem key={c.title}>
                <div className="h-full rounded-3xl border border-ink/10 bg-white p-8 card-hover">
                  <div className="flex items-center gap-3">
                    <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-brand-50 text-brand-600">
                      <c.icon className="h-5 w-5" />
                    </span>
                    <span className="text-xs font-semibold uppercase tracking-wide text-brand-600">
                      {c.sector}
                    </span>
                  </div>
                  <h3 className="mt-5 font-display text-xl font-bold text-ink">{c.title}</h3>
                  <p className="mt-3 leading-relaxed text-ink-500">{c.text}</p>
                  <Badge tone="neutral" className="mt-5">
                    Illustrative scenario
                  </Badge>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </Container>
      </Section>

      <CtaBand
        title="Become our next success story"
        description="Join the distributors, brand owners and institutions who rely on us for consistent water and packaging supply."
      />
    </>
  );
}
