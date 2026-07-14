import type { Metadata } from 'next';
import {
  MessagesSquare,
  PencilRuler,
  FlaskConical,
  Factory,
  ShieldCheck,
  Ship,
  Milk,
  Tag,
  Palette,
  Globe2,
  Boxes,
  Layers,
} from 'lucide-react';
import { PageHero } from '@/components/shared/page-hero';
import { Container, Section, SectionHeading } from '@/components/ui/section';
import { Reveal, RevealGroup, RevealItem } from '@/components/ui/reveal';
import { InquiryForm } from '@/components/shared/inquiry-form';
import { CtaBand } from '@/components/shared/cta-band';
import { buildMetadata } from '@/lib/seo';

export const metadata: Metadata = buildMetadata({
  title: 'OEM & Private Label Water Manufacturing',
  description:
    'Launch your own water brand with a proven OEM / private-label partner. Bottle customization, label design, branding, export labeling, bulk manufacturing and flexible MOQs.',
  path: '/oem-private-label',
  keywords: [
    'OEM water manufacturer',
    'private label water manufacturer',
    'contract water bottling',
    'private label bottled water India',
  ],
});

const steps = [
  { icon: MessagesSquare, title: 'Enquiry & consultation', desc: 'Share your brand, target market, formats and volumes. We advise on the right product spec and feasible options.' },
  { icon: PencilRuler, title: 'Design & specification', desc: 'Bottle shape, label design, closure and packaging are defined — including export labelling requirements.' },
  { icon: FlaskConical, title: 'Sampling & approval', desc: 'We produce samples for your review and sign-off on taste profile, artwork and finish before scaling.' },
  { icon: Factory, title: 'Bulk manufacturing', desc: 'Approved specs go into automated production with full quality control and batch traceability.' },
  { icon: ShieldCheck, title: 'Quality & compliance', desc: 'Batch testing and documentation aligned to BIS, FSSAI and your destination-market requirements.' },
  { icon: Ship, title: 'Dispatch & export', desc: 'Export-grade packing, palletisation and paperwork — delivered to your logistics or port of choice.' },
];

const services = [
  { icon: Milk, title: 'Bottle customization', desc: 'Shapes, sizes and gram weights tailored to your positioning and budget.' },
  { icon: Tag, title: 'Label design & branding', desc: 'From artwork guidance to finished, compliant labels that carry your brand.' },
  { icon: Palette, title: 'Packaging', desc: 'Closures, shrink-wrap, cartons and shipper design for shelf and transit.' },
  { icon: Globe2, title: 'Export labelling', desc: 'Destination-market label and documentation support for smooth clearance.' },
  { icon: Boxes, title: 'Bulk manufacturing', desc: 'Reliable capacity for repeat orders with consistent quality.' },
  { icon: Layers, title: 'Flexible MOQs', desc: 'Practical minimum order quantities that let new brands start and scale.' },
];

export default function OemPage() {
  return (
    <>
      <PageHero
        eyebrow="OEM & private label"
        title="Your brand, our production expertise"
        description="Launch or scale a water brand without building a plant. We handle the bottle, label, quality and export paperwork — you own the brand and the market."
        crumbs={[
          { label: 'Home', href: '/' },
          { label: 'OEM & Private Label', href: '/oem-private-label' },
        ]}
      />

      {/* Services */}
      <Section className="bg-white">
        <Container>
          <SectionHeading
            eyebrow="What we handle"
            title="A complete private-label toolkit"
            description="Everything you need to bring a credible, compliant water brand to market — under one roof."
          />
          <RevealGroup className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <RevealItem key={s.title}>
                <div className="h-full rounded-3xl border border-ink/10 bg-gradient-to-b from-white to-muted/40 p-7 card-hover">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-50 text-brand-600">
                    <s.icon className="h-6 w-6" />
                  </span>
                  <h3 className="mt-5 font-display text-lg font-bold text-ink">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-500">{s.desc}</p>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </Container>
      </Section>

      {/* Process */}
      <Section className="relative overflow-hidden bg-ink text-white">
        <div className="pointer-events-none absolute inset-0 bg-brand-radial opacity-70" />
        <div className="pointer-events-none absolute inset-0 bg-ripple opacity-60" />
        <Container className="relative">
          <SectionHeading
            invert
            align="center"
            eyebrow="How it works"
            title="From inquiry to delivery in six clear steps"
            description="A transparent, milestone-based process so you always know what's next."
          />
          <div className="mt-16">
            <RevealGroup className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {steps.map((step, i) => (
                <RevealItem key={step.title}>
                  <div className="relative h-full rounded-3xl border border-white/10 bg-white/5 p-7 backdrop-blur">
                    <div className="flex items-center justify-between">
                      <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-500/20 text-aqua">
                        <step.icon className="h-6 w-6" />
                      </span>
                      <span className="font-display text-4xl font-bold text-white/10">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                    </div>
                    <h3 className="mt-5 font-display text-lg font-bold text-white">{step.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-white/60">{step.desc}</p>
                  </div>
                </RevealItem>
              ))}
            </RevealGroup>
          </div>
        </Container>
      </Section>

      {/* Why us */}
      <Section className="bg-white">
        <Container>
          <SectionHeading
            align="center"
            eyebrow="Why brand owners choose us"
            title="Low risk, professional, scalable"
          />
          <RevealGroup className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { stat: 'Flexible', label: 'MOQs to start small and scale' },
              { stat: 'End-to-end', label: 'Bottle, label, QA and export' },
              { stat: 'Compliant', label: 'BIS / FSSAI & destination-market' },
              { stat: 'Consistent', label: 'Batch-tested, traceable quality' },
            ].map((b) => (
              <RevealItem key={b.label}>
                <div className="rounded-3xl border border-ink/10 bg-muted/30 p-7 text-center">
                  <p className="font-display text-2xl font-bold text-brand-700">{b.stat}</p>
                  <p className="mt-2 text-sm text-ink-500">{b.label}</p>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </Container>
      </Section>

      {/* Enquiry */}
      <Section className="bg-muted/40">
        <Container className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <SectionHeading
            eyebrow="Start your brand"
            title="Request an OEM / private-label proposal"
            description="Tell us about your brand, market and volumes. We'll come back with product options, indicative pricing, MOQs and timelines."
          />
          <div className="rounded-3xl border border-ink/10 bg-white p-6 shadow-soft sm:p-8">
            <InquiryForm defaultType="OEM / private label" />
          </div>
        </Container>
      </Section>

      <CtaBand
        title="Have artwork or a spec ready?"
        description="Share it with us and we'll assess feasibility, suggest improvements and quote for sampling and production."
      />
    </>
  );
}
