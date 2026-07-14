import type { Metadata } from 'next';
import Image from 'next/image';
import {
  Cpu,
  FlaskConical,
  Droplets,
  ShieldCheck,
  PackageCheck,
  Warehouse,
  Truck,
  Gauge,
} from 'lucide-react';
import { PageHero } from '@/components/shared/page-hero';
import { Container, Section, SectionHeading } from '@/components/ui/section';
import { Reveal, RevealGroup, RevealItem } from '@/components/ui/reveal';
import { CtaBand } from '@/components/shared/cta-band';
import { buildMetadata } from '@/lib/seo';
import { purificationSteps } from '@/lib/content';

export const metadata: Metadata = buildMetadata({
  title: 'Manufacturing Facilities — Automated Production & Labs',
  description:
    'Inside our manufacturing: fully automated production lines, multi-stage water purification, laboratory testing, quality assurance, packaging automation, warehousing and logistics.',
  path: '/manufacturing',
  keywords: ['water bottling plant', 'automated water manufacturing', 'water purification process'],
});

const capabilities = [
  { icon: Cpu, title: 'Fully automated production', desc: 'Rinse–fill–cap monoblocs and conveyors reduce human contact and deliver repeatable, high-throughput output.' },
  { icon: Droplets, title: 'Multi-stage purification', desc: 'Sand & carbon filtration, reverse osmosis, mineral balancing, UV and ozonisation in a validated sequence.' },
  { icon: FlaskConical, title: 'Laboratory testing', desc: 'In-line and batch laboratory checks verify microbiological and physico-chemical parameters before release.' },
  { icon: ShieldCheck, title: 'Quality assurance', desc: 'Multi-stage inspection, calibrated instruments and documented control at every critical point.' },
  { icon: PackageCheck, title: 'Packaging automation', desc: 'Automated capping, labelling, coding and shrink-wrapping for clean, consistent finished goods.' },
  { icon: Warehouse, title: 'Warehousing', desc: 'Organised, hygienic storage with stock rotation to protect product integrity before dispatch.' },
];

export default function ManufacturingPage() {
  return (
    <>
      <PageHero
        eyebrow="Manufacturing excellence"
        title="Scientific manufacturing, at industrial scale"
        description="Automated lines, validated purification and disciplined laboratory control — engineered to deliver the same quality in every batch."
        crumbs={[
          { label: 'Home', href: '/' },
          { label: 'Manufacturing', href: '/manufacturing' },
        ]}
      />

      {/* Hero image band */}
      <Section className="bg-white">
        <Container>
          <Reveal>
            <div className="relative aspect-[21/9] overflow-hidden rounded-4xl shadow-card">
              <Image
                src="/images/factory-interior.jpg"
                alt="Modern automated beverage bottling facility interior"
                fill
                sizes="100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/60 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 flex flex-wrap gap-4">
                {[
                  { icon: Gauge, label: 'High-throughput automated lines' },
                  { icon: FlaskConical, label: 'Lab-verified every batch' },
                  { icon: ShieldCheck, label: 'HACCP-based controls' },
                ].map((b) => (
                  <span
                    key={b.label}
                    className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium text-white backdrop-blur-xl"
                  >
                    <b.icon className="h-4 w-4 text-aqua" /> {b.label}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        </Container>
      </Section>

      {/* Capabilities grid */}
      <Section className="bg-muted/40">
        <Container>
          <SectionHeading
            eyebrow="Capabilities"
            title="Everything under one disciplined roof"
            description="From raw water to palletised, dispatch-ready goods — an integrated flow designed for quality and reliability."
          />
          <RevealGroup className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {capabilities.map((c) => (
              <RevealItem key={c.title}>
                <div className="h-full rounded-3xl border border-ink/10 bg-white p-7 card-hover">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-50 text-brand-600">
                    <c.icon className="h-6 w-6" />
                  </span>
                  <h3 className="mt-5 font-display text-lg font-bold text-ink">{c.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-500">{c.desc}</p>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </Container>
      </Section>

      {/* Process timeline */}
      <Section className="relative overflow-hidden bg-ink text-white">
        <div className="pointer-events-none absolute inset-0 bg-brand-radial opacity-70" />
        <div className="pointer-events-none absolute inset-0 bg-ripple opacity-60" />
        <Container className="relative">
          <SectionHeading
            invert
            eyebrow="The process"
            title="From source to sealed bottle"
            description="A controlled, monitored sequence — each stage documented and verified."
          />
          <div className="mt-14 space-y-4">
            {purificationSteps.map((step, i) => (
              <Reveal key={step.n} delay={i % 4}>
                <div className="group flex items-start gap-6 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur transition-colors hover:border-brand-400/60 hover:bg-white/[0.07] sm:items-center">
                  <span className="font-display text-3xl font-bold text-aqua/70 sm:text-4xl">
                    {step.n}
                  </span>
                  <div className="h-10 w-px shrink-0 bg-white/15 sm:h-12" />
                  <div>
                    <h3 className="text-lg font-semibold text-white">{step.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-white/60">{step.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* Logistics */}
      <Section className="bg-white">
        <Container className="grid items-center gap-14 lg:grid-cols-2">
          <Reveal>
            <div className="relative overflow-hidden rounded-4xl shadow-card">
              <Image
                src="/images/warehouse.jpg"
                alt="Warehouse and logistics operations"
                width={720}
                height={620}
                className="h-full w-full object-cover"
              />
            </div>
          </Reveal>
          <Reveal delay={1}>
            <SectionHeading
              eyebrow="Warehousing & logistics"
              title="Dependable supply, on time"
              description="Organised warehousing, stock rotation and route-based distribution keep your shelves and dispensers stocked — with export documentation when you need it."
            />
            <ul className="mt-8 space-y-4">
              {[
                { icon: Warehouse, text: 'Hygienic, organised finished-goods storage with FIFO rotation.' },
                { icon: Truck, text: 'Route-based distribution and bulk / returnable-jar logistics support.' },
                { icon: PackageCheck, text: 'Export-grade packing, palletisation and documentation.' },
              ].map((l) => (
                <li key={l.text} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-brand-50 text-brand-600">
                    <l.icon className="h-4 w-4" />
                  </span>
                  <span className="text-ink-600">{l.text}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </Container>
      </Section>

      <CtaBand
        title="Want to see how we'd produce for you?"
        description="Tell us your product, format and volume requirements — we'll walk you through the relevant lines, controls and lead times."
      />
    </>
  );
}
