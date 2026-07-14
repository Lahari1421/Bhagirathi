import type { Metadata } from 'next';
import {
  ShieldCheck,
  Lightbulb,
  Leaf,
  Users,
  Heart,
  Award,
  Droplets,
  Handshake,
  Scale,
  Sparkles,
  HeartHandshake,
  CircleCheck,
  Gem,
} from 'lucide-react';
import { PageHero } from '@/components/shared/page-hero';
import { Container, Section, SectionHeading } from '@/components/ui/section';
import { Reveal, RevealGroup, RevealItem } from '@/components/ui/reveal';
import { CtaBand } from '@/components/shared/cta-band';
import { buildMetadata } from '@/lib/seo';

export const metadata: Metadata = buildMetadata({
  title: 'Vision & Mission — Bhagirathi Industries',
  description:
    'Discover the vision, mission, core values and purpose behind Bhagirathi Industries — inspired by purity, driven by innovation, committed to a sustainable future.',
  path: '/vision-mission',
});

const missionPoints = [
  {
    icon: ShieldCheck,
    title: 'Quality First',
    desc: 'Deliver safe, premium-quality drinking water through advanced purification technologies and world-class manufacturing practices.',
  },
  {
    icon: Award,
    title: 'Uncompromising Standards',
    desc: 'Uphold uncompromising standards of quality, hygiene, and food safety in every product we manufacture.',
  },
  {
    icon: Lightbulb,
    title: 'Continuous Innovation',
    desc: 'Continuously innovate to improve our products, processes, and customer experience.',
  },
  {
    icon: Leaf,
    title: 'Environmental Stewardship',
    desc: 'Protect natural resources through environmentally responsible and sustainable manufacturing practices.',
  },
  {
    icon: Users,
    title: 'Lasting Relationships',
    desc: 'Build long-term relationships with customers, partners, and communities through transparency, trust, and reliability.',
  },
  {
    icon: Heart,
    title: 'Legacy of Impact',
    desc: 'Create a legacy that positively impacts future generations by placing people, purpose, and responsibility at the heart of everything we do.',
  },
];

const coreValues = [
  {
    icon: Droplets,
    title: 'Purity',
    desc: 'We believe purity is more than clean water — it is the foundation of trust, health, and every promise we make.',
  },
  {
    icon: Handshake,
    title: 'Trust',
    desc: 'We build lasting relationships through honesty, transparency, consistency, and unwavering commitment to quality.',
  },
  {
    icon: Scale,
    title: 'Integrity',
    desc: 'We conduct every aspect of our business with ethics, accountability, and respect for our customers, partners, and society.',
  },
  {
    icon: Sparkles,
    title: 'Innovation',
    desc: 'We continuously embrace modern technology and innovative thinking to deliver products that exceed expectations.',
  },
  {
    icon: HeartHandshake,
    title: 'Compassion',
    desc: 'Inspired by the values of care and selfless service, we strive to create products that improve lives and strengthen communities.',
  },
  {
    icon: CircleCheck,
    title: 'Responsibility',
    desc: 'We recognise our responsibility toward people, nature, and future generations, ensuring every decision contributes to a sustainable tomorrow.',
  },
  {
    icon: Leaf,
    title: 'Sustainability',
    desc: 'We are committed to protecting the environment through responsible manufacturing, resource conservation, and eco-conscious practices.',
  },
  {
    icon: Gem,
    title: 'Excellence',
    desc: 'We pursue excellence in every process, every product, and every customer experience without compromising our values.',
  },
];

const valueIcons = [Droplets, Handshake, Scale, Sparkles, HeartHandshake, CircleCheck, Leaf, Gem];

export default function VisionMissionPage() {
  return (
    <>
      {/* ─── SECTION 1 — Hero ─────────────────────────────────── */}
      <PageHero
        title="Vision & Mission"
        description="Building a future driven by purity, innovation, responsibility, and trust."
        crumbs={[
          { label: 'Home', href: '/' },
          { label: 'Vision & Mission', href: '/vision-mission' },
        ]}
        align="center"
      />

      {/* ─── SECTION 2 — Our Vision ───────────────────────────── */}
      <Section className="bg-white">
        <Container>
          <Reveal>
            <div className="mx-auto max-w-4xl">
              <div className="relative overflow-hidden rounded-4xl border border-ink/5 bg-gradient-to-b from-white via-white to-brand-50/30 p-8 sm:p-12 lg:p-16">
                <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-brand-100/40 blur-[80px]" />
                <div className="pointer-events-none absolute -bottom-16 -left-16 h-48 w-48 rounded-full bg-aqua/10 blur-[60px]" />

                <span className="eyebrow">
                  <span className="h-px w-6 bg-brand-400" />
                  Our Vision
                </span>

                <blockquote className="relative mt-6 font-display text-xl font-medium leading-relaxed tracking-tight text-ink sm:text-2xl lg:text-[1.7rem] lg:leading-[1.4]">
                  &ldquo;To become one of India&apos;s most trusted and globally respected
                  manufacturers of premium drinking water and sustainable beverage
                  solutions by delivering uncompromising quality, embracing continuous
                  innovation, and preserving the values of purity, trust, and
                  responsibility for generations to come.&rdquo;
                </blockquote>

                <div className="absolute bottom-0 left-0 h-1 w-24 bg-gradient-to-r from-brand-500 to-aqua" />
              </div>
            </div>
          </Reveal>
        </Container>
      </Section>

      {/* ─── SECTION 3 — Our Mission ──────────────────────────── */}
      <Section className="bg-muted/40">
        <Container>
          <Reveal>
            <SectionHeading
              align="center"
              eyebrow="Our Mission"
              title="What we drive toward every day"
            />
          </Reveal>

          <Reveal delay={1}>
            <p className="mx-auto mt-6 max-w-3xl text-center text-lg leading-relaxed text-ink-500">
              At Bhagirathi Industries, our mission is to transform nature&apos;s most
              precious gift into products that enrich lives while upholding the highest
              standards of quality, integrity, and sustainability.
            </p>
          </Reveal>

          <RevealGroup className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {missionPoints.map((point) => (
              <RevealItem key={point.title}>
                <div className="group h-full rounded-3xl border border-ink/5 bg-white p-7 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-card hover:border-brand-200/40">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-50 text-brand-600 transition-all duration-300 group-hover:bg-brand-100 group-hover:scale-110">
                    <point.icon className="h-6 w-6" />
                  </span>
                  <h3 className="mt-5 font-display text-lg font-bold text-ink">
                    {point.title}
                  </h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-ink-500">
                    {point.desc}
                  </p>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </Container>
      </Section>

      {/* ─── SECTION 4 — Core Values ──────────────────────────── */}
      <Section className="bg-white">
        <Container>
          <Reveal>
            <SectionHeading
              align="center"
              eyebrow="Core Values"
              title="The principles that guide us"
            />
          </Reveal>

          <RevealGroup className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {coreValues.map((v, i) => {
              const Icon = valueIcons[i % valueIcons.length];
              return (
                <RevealItem key={v.title}>
                  <div className="group h-full rounded-3xl border border-ink/5 bg-gradient-to-b from-white to-muted/20 p-6 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-card hover:border-brand-200/40">
                    <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-brand-50 text-brand-600 transition-all duration-300 group-hover:bg-brand-100 group-hover:scale-110">
                      <Icon className="h-5 w-5" />
                    </span>
                    <h3 className="mt-5 font-display text-lg font-bold text-ink">
                      {v.title}
                    </h3>
                    <p className="mt-2.5 text-sm leading-relaxed text-ink-500">
                      {v.desc}
                    </p>
                  </div>
                </RevealItem>
              );
            })}
          </RevealGroup>
        </Container>
      </Section>

      {/* ─── SECTION 5 — Our Purpose ──────────────────────────── */}
      <Section className="relative overflow-hidden bg-ink py-24 sm:py-32 lg:py-40">
        <div className="pointer-events-none absolute inset-0 bg-brand-radial opacity-50" />
        <div className="pointer-events-none absolute inset-0 bg-ripple opacity-40" />
        <div className="pointer-events-none absolute -right-32 top-1/4 h-[28rem] w-[28rem] rounded-full bg-aqua/10 blur-[160px]" />

        <Container className="relative z-10">
          <Reveal>
            <div className="mx-auto max-w-4xl text-center">
              <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-2 text-xs font-medium uppercase tracking-[0.25em] text-white/60 backdrop-blur">
                <span className="h-1.5 w-1.5 rounded-full bg-aqua shadow-glow" />
                Our Purpose
              </span>

              <h2 className="mt-8 font-display text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl text-balance">
                Our purpose extends beyond{' '}
                <span className="text-gradient-light">manufacturing drinking water.</span>
              </h2>

              <div className="mt-10 space-y-6">
                <p className="text-lg leading-relaxed text-white/65">
                  We are committed to building a company that sets benchmarks in quality,
                  innovation, and sustainability — delivering products that meet the highest
                  standards while contributing positively to the communities and environments
                  we serve.
                </p>
                <p className="text-lg leading-relaxed text-white/65">
                  By aligning long-term business growth with responsible manufacturing,
                  we aim to create lasting value for our partners, stakeholders, and the
                  generations that follow.
                </p>
              </div>
            </div>
          </Reveal>
        </Container>
      </Section>

      <CtaBand />
    </>
  );
}
