import type { Metadata } from 'next';
import { Download, ShieldCheck, ClipboardCheck, ScanLine, Microscope, Repeat, SprayCan } from 'lucide-react';
import { PageHero } from '@/components/shared/page-hero';
import { Container, Section, SectionHeading } from '@/components/ui/section';
import { Reveal, RevealGroup, RevealItem } from '@/components/ui/reveal';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { CtaBand } from '@/components/shared/cta-band';
import { buildMetadata } from '@/lib/seo';
import { certifications } from '@/lib/content';

export const metadata: Metadata = buildMetadata({
  title: 'Quality & Certifications — BIS, FSSAI, ISO',
  description:
    'Our quality systems are aligned to BIS, FSSAI, ISO 9001, ISO 22000 / HACCP and GMP principles, with laboratory testing, batch traceability, hygiene protocols and multi-stage inspection.',
  path: '/quality-certifications',
  keywords: ['BIS certified water', 'FSSAI licensed water manufacturer', 'ISO certified bottled water'],
});

const qaPillars = [
  { icon: Microscope, title: 'Laboratory testing', desc: 'Microbiological and physico-chemical testing verifies each batch against defined parameters before release.' },
  { icon: ScanLine, title: 'Batch traceability', desc: 'Every batch carries a code linking it to source, treatment logs and laboratory data for full traceability.' },
  { icon: SprayCan, title: 'Hygiene protocols', desc: 'Sanitation schedules, filtered-air filling and personnel hygiene practices minimise contamination risk.' },
  { icon: Repeat, title: 'Multi-stage inspection', desc: 'Checks at critical control points — from incoming water to finished, sealed goods.' },
];

export default function QualityPage() {
  return (
    <>
      <PageHero
        eyebrow="Quality & certifications"
        title="Standards you can specify against"
        description="We treat quality as a system, not a slogan — aligned to recognised national and international standards, and verified batch by batch."
        crumbs={[
          { label: 'Home', href: '/' },
          { label: 'Quality & Certifications', href: '/quality-certifications' },
        ]}
      />

      {/* Certifications grid */}
      <Section className="bg-white">
        <Container>
          <SectionHeading
            eyebrow="Certifications"
            title="Recognised marks of assurance"
            description="Certificate placeholders are provided below — attach your live certificate PDFs when available."
          />
          <RevealGroup className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {certifications.map((c) => (
              <RevealItem key={c.code}>
                <div className="flex h-full flex-col rounded-3xl border border-ink/10 bg-gradient-to-b from-white to-muted/40 p-7 card-hover">
                  <div className="flex items-center justify-between">
                    <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-sm font-bold text-brand-700 shadow-soft ring-1 ring-ink/5">
                      {c.code}
                    </span>
                    <ShieldCheck className="h-5 w-5 text-brand-400" />
                  </div>
                  <h3 className="mt-5 font-display text-lg font-bold text-ink">{c.name}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-500">{c.desc}</p>
                  <Button variant="outline" size="sm" className="mt-6 self-start" disabled>
                    <Download className="h-4 w-4" /> Certificate (placeholder)
                  </Button>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
          <p className="mt-8 text-xs text-ink-400">
            Certification scope depends on the specific product and plant. Replace descriptions and
            attach certificates to reflect your current, verified certifications.
          </p>
        </Container>
      </Section>

      {/* QA pillars */}
      <Section className="bg-muted/40">
        <Container>
          <SectionHeading
            eyebrow="Quality assurance"
            title="How we hold the line on quality"
            description="Four disciplines that keep every batch consistent and safe."
          />
          <RevealGroup className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {qaPillars.map((p) => (
              <RevealItem key={p.title}>
                <div className="h-full rounded-3xl border border-ink/10 bg-white p-7 card-hover">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-50 text-brand-600">
                    <p.icon className="h-6 w-6" />
                  </span>
                  <h3 className="mt-5 font-display text-lg font-bold text-ink">{p.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-500">{p.desc}</p>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </Container>
      </Section>

      {/* Testing parameters */}
      <Section className="bg-white">
        <Container className="grid gap-12 lg:grid-cols-2">
          <Reveal>
            <SectionHeading
              eyebrow="What we test"
              title="Parameters we monitor"
              description="Indicative parameter groups — exact test panels follow the applicable product standard and destination-market requirements."
            />
            <div className="mt-8 flex items-center gap-3">
              <ClipboardCheck className="h-5 w-5 text-brand-600" />
              <span className="text-sm font-semibold text-ink">Verified per batch before release</span>
            </div>
          </Reveal>
          <Reveal delay={1}>
            <div className="grid gap-3 sm:grid-cols-2">
              {[
                'pH & TDS',
                'Turbidity & clarity',
                'Microbiological safety',
                'Taste & odour',
                'Mineral profile',
                'Residual disinfection',
                'Packaging integrity',
                'Fill volume & seal',
              ].map((param) => (
                <div
                  key={param}
                  className="flex items-center gap-3 rounded-2xl border border-ink/10 bg-muted/30 px-5 py-4"
                >
                  <span className="h-2 w-2 rounded-full bg-brand-500" />
                  <span className="text-sm font-medium text-ink-600">{param}</span>
                </div>
              ))}
            </div>
            <Badge tone="neutral" className="mt-4">
              Indicative — confirm against your standard
            </Badge>
          </Reveal>
        </Container>
      </Section>

      <CtaBand
        title="Need documentation for a tender or import?"
        description="We can share certifications, test reports and traceability documentation to support your procurement, tender or customs requirements."
      />
    </>
  );
}
