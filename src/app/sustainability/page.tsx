import type { Metadata } from 'next';
import Image from 'next/image';
import { Droplets, Recycle, Leaf, Sun, Trash2, Users } from 'lucide-react';
import { PageHero } from '@/components/shared/page-hero';
import { Container, Section, SectionHeading } from '@/components/ui/section';
import { Reveal, RevealGroup, RevealItem } from '@/components/ui/reveal';
import { Counter } from '@/components/ui/counter';
import { Badge } from '@/components/ui/badge';
import { CtaBand } from '@/components/shared/cta-band';
import { buildMetadata } from '@/lib/seo';

export const metadata: Metadata = buildMetadata({
  title: 'Sustainability — Water Stewardship & Circular Packaging',
  description:
    'Our sustainability commitments: water conservation, recycling, eco-friendly and lightweighted packaging, renewable energy, waste reduction and community-focused CSR.',
  path: '/sustainability',
  keywords: ['sustainable water manufacturing', 'eco-friendly packaging', 'rPET bottles', 'water conservation'],
});

const pillars = [
  { icon: Droplets, title: 'Water conservation', desc: 'Responsible water use and recovery — because a water business must be a water steward first.' },
  { icon: Recycle, title: 'Recycling initiatives', desc: 'Designing for recyclability and supporting the collection and reuse of PET.' },
  { icon: Leaf, title: 'Eco-friendly packaging', desc: 'Lightweighting and recycled-content (rPET) options that cut material and freight impact.' },
  { icon: Sun, title: 'Renewable energy', desc: 'Pursuing cleaner energy sources and greater energy efficiency across operations.' },
  { icon: Trash2, title: 'Waste reduction', desc: 'Reducing process waste and diverting recoverable materials from landfill.' },
  { icon: Users, title: 'Community & CSR', desc: 'Investing in the communities and watersheds we depend on and operate within.' },
];

const impact = [
  { value: 30, suffix: '%', label: 'Targeted packaging weight reduction*' },
  { value: 100, suffix: '%', label: 'Recyclable PET design intent*' },
  { value: 50, suffix: '%', label: 'Renewable energy ambition*' },
];

export default function SustainabilityPage() {
  return (
    <>
      <PageHero
        eyebrow="Sustainability"
        title="A water company that acts like one"
        description="Sustainability isn't a side initiative for us — it's inseparable from making water responsibly. Here's where we focus, and where we're heading."
        crumbs={[
          { label: 'Home', href: '/' },
          { label: 'Sustainability', href: '/sustainability' },
        ]}
      />

      {/* Intro image + text */}
      <Section className="bg-white">
        <Container className="grid items-center gap-14 lg:grid-cols-2">
          <Reveal>
            <div className="relative overflow-hidden rounded-4xl shadow-card">
              <Image
                src="/images/renewable-sunset.jpg"
                alt="Renewable energy and sustainability"
                width={720}
                height={760}
                className="h-full w-full object-cover"
              />
            </div>
          </Reveal>
          <Reveal delay={1}>
            <SectionHeading
              eyebrow="Our approach"
              title="Measurable commitments, not slogans"
              description="We treat sustainability as an engineering and management problem — with targets, monitoring and honest reporting."
            />
            <p className="mt-6 leading-relaxed text-ink-600">
              The figures on this page are stated as ambitions and placeholders. As our programmes
              mature, we intend to publish verified baselines and progress so partners can hold us to
              account.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              <Badge tone="success">Water stewardship</Badge>
              <Badge tone="success">Circular packaging</Badge>
              <Badge tone="success">Energy efficiency</Badge>
            </div>
          </Reveal>
        </Container>
      </Section>

      {/* Impact stats */}
      <Section className="relative overflow-hidden bg-ink text-white">
        <div className="pointer-events-none absolute inset-0 bg-brand-radial opacity-70" />
        <div className="pointer-events-none absolute inset-0 bg-ripple opacity-60" />
        <Container className="relative">
          <SectionHeading
            invert
            align="center"
            eyebrow="Our ambitions"
            title="Targets we're working toward"
          />
          <RevealGroup className="mt-14 grid gap-8 sm:grid-cols-3">
            {impact.map((s) => (
              <RevealItem key={s.label} className="text-center">
                <div className="font-display text-6xl font-bold text-gradient-light">
                  <Counter to={s.value} suffix={s.suffix} />
                </div>
                <p className="mt-3 text-sm text-white/60">{s.label}</p>
              </RevealItem>
            ))}
          </RevealGroup>
          <p className="mt-10 text-center text-xs text-white/40">
            *Placeholder ambitions — replace with your verified sustainability targets and baselines.
          </p>
        </Container>
      </Section>

      {/* Pillars */}
      <Section className="bg-muted/40">
        <Container>
          <SectionHeading
            eyebrow="Focus areas"
            title="Six commitments guiding our operations"
          />
          <RevealGroup className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {pillars.map((p) => (
              <RevealItem key={p.title}>
                <div className="h-full rounded-3xl border border-ink/10 bg-white p-7 card-hover">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-600">
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

      <CtaBand
        title="Building a sustainability-led brand?"
        description="Talk to us about rPET, lightweighting and recyclable packaging options for your programme — and the trade-offs involved."
        primaryLabel="Discuss eco packaging"
      />
    </>
  );
}
