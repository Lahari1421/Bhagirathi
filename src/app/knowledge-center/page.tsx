import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import {
  ArrowRight,
  Droplets,
  FlaskConical,
  Waves,
  Filter,
  Beaker,
  ShieldCheck,
  Recycle,
  Leaf,
  Landmark,
  Globe2,
  ScrollText,
} from 'lucide-react';
import { PageHero } from '@/components/shared/page-hero';
import { Container, Section, SectionHeading } from '@/components/ui/section';
import { Reveal, RevealGroup, RevealItem } from '@/components/ui/reveal';
import { Button } from '@/components/ui/button';
import { WaveDivider } from '@/components/ui/wave-divider';
import { CtaBand } from '@/components/shared/cta-band';
import { buildMetadata } from '@/lib/seo';
import { knowledgeTopics, indianStandards, globalStandards, type StandardRef } from '@/lib/content';

export const metadata: Metadata = buildMetadata({
  title: 'Knowledge Center — Water Science, Standards & Regulations',
  description:
    'Water science and the Indian & global standards that govern packaged drinking water, alkaline & mineral water and PET packaging — BIS IS 14543 / IS 13428, FSSAI, IS 12252, WHO, Codex, ISO, FDA and EU food-contact rules.',
  path: '/knowledge-center',
  keywords: [
    'IS 14543 packaged drinking water',
    'IS 13428 mineral water standard',
    'IS 12252 food grade PET',
    'FSSAI packaged water',
    'WHO drinking water guidelines',
    'Codex bottled water standard',
    'water purification technologies',
  ],
});

const topicIcons = [Droplets, ShieldCheck, Filter, Waves, Beaker, FlaskConical, Recycle, Leaf];

function StandardRow({ s }: { s: StandardRef }) {
  return (
    <li className="group flex gap-4 border-t border-white/10 py-4 first:border-t-0">
      <span className="mt-0.5 inline-flex h-11 shrink-0 items-center rounded-lg bg-white/10 px-3 text-xs font-bold text-aqua-light ring-1 ring-white/10">
        {s.code}
      </span>
      <div>
        <div className="flex flex-wrap items-baseline gap-x-2">
          <h4 className="font-semibold text-white">{s.name}</h4>
          <span className="text-xs text-white/40">· {s.body}</span>
        </div>
        <p className="mt-1 text-sm leading-relaxed text-white/60">{s.scope}</p>
      </div>
    </li>
  );
}

export default function KnowledgeCenterPage() {
  return (
    <>
      <PageHero
        eyebrow="Knowledge center"
        title="Water science, standards & regulations"
        description="How water is purified, balanced and packaged — and the Indian and global standards that govern every bottle we make."
        crumbs={[
          { label: 'Home', href: '/' },
          { label: 'Knowledge Center', href: '/knowledge-center' },
        ]}
      >
        <div className="flex flex-wrap gap-2">
          {['IS 14543', 'IS 13428', 'FSSAI', 'IS 12252', 'WHO', 'Codex', 'ISO', 'FDA · EU'].map((c) => (
            <span
              key={c}
              className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-medium text-white/75 backdrop-blur"
            >
              {c}
            </span>
          ))}
        </div>
      </PageHero>

      {/* Featured alkaline guide — 2-col to fill space */}
      <Section className="bg-white">
        <Container>
          <Reveal>
            <div className="water-caustics relative grid overflow-hidden rounded-4xl bg-ink text-white lg:grid-cols-2">
              <div className="pointer-events-none absolute inset-0 bg-brand-radial opacity-70" />
              <div className="pointer-events-none absolute inset-0 bg-ripple opacity-60" />
              <div className="relative z-10 p-8 sm:p-12">
                <span className="eyebrow text-aqua-light">
                  <span className="h-px w-6 bg-aqua" /> Featured explainer
                </span>
                <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-balance sm:text-4xl">
                  Understanding alkaline water
                </h2>
                <p className="mt-4 text-white/70">
                  What alkaline water is, how it differs from regular water, its typical pH, and an
                  honest summary — including <strong className="text-white">what the WHO says</strong>{' '}
                  — of what the evidence does and doesn&apos;t support.
                </p>
                <Button asChild variant="water" size="lg" className="mt-8">
                  <Link href="/alkaline-water-guide">
                    Read the guide <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
              <div className="relative min-h-[240px] lg:min-h-full">
                <Image
                  src="/images/alkaline-pour.jpg"
                  alt="Alkaline water poured into a glass"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/30 to-transparent" />
              </div>
            </div>
          </Reveal>
        </Container>
      </Section>

      {/* Standards & Regulations — the centerpiece, water-themed dark */}
      <section className="water-caustics relative overflow-hidden bg-ink py-20 text-white sm:py-28">
        <div className="pointer-events-none absolute inset-0 bg-brand-radial opacity-70" />
        <div className="pointer-events-none absolute inset-0 bg-ripple opacity-60" />
        <div className="pointer-events-none absolute -left-32 top-20 h-96 w-96 animate-drift rounded-full bg-brand-500/20 blur-[130px]" />
        <div className="pointer-events-none absolute -right-24 bottom-10 h-80 w-80 rounded-full bg-aqua/10 blur-[120px]" />

        <Container className="relative">
          <SectionHeading
            invert
            align="center"
            eyebrow="Standards & regulations"
            title="Built to Indian & global standards"
            description="We manufacture to recognised specifications so distributors, institutions and export partners can specify against them with confidence."
          />

          <div className="mt-14 grid gap-6 lg:grid-cols-2">
            <Reveal>
              <div className="glass-dark h-full rounded-3xl p-7 sm:p-8">
                <div className="flex items-center gap-3">
                  <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-brand-500/20 text-aqua">
                    <Landmark className="h-5 w-5" />
                  </span>
                  <div>
                    <h3 className="font-display text-xl font-bold text-white">Indian standards</h3>
                    <p className="text-xs text-white/50">BIS · FSSAI · national regulation</p>
                  </div>
                </div>
                <ul className="mt-6">
                  {indianStandards.map((s) => (
                    <StandardRow key={s.code} s={s} />
                  ))}
                </ul>
              </div>
            </Reveal>

            <Reveal delay={1}>
              <div className="glass-dark h-full rounded-3xl p-7 sm:p-8">
                <div className="flex items-center gap-3">
                  <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-brand-500/20 text-aqua">
                    <Globe2 className="h-5 w-5" />
                  </span>
                  <div>
                    <h3 className="font-display text-xl font-bold text-white">Global standards</h3>
                    <p className="text-xs text-white/50">WHO · Codex · ISO · FDA · EU</p>
                  </div>
                </div>
                <ul className="mt-6">
                  {globalStandards.map((s) => (
                    <StandardRow key={s.code} s={s} />
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>

          {/* Alkaline standards note */}
          <Reveal>
            <div className="mt-6 flex flex-col gap-4 rounded-3xl border border-aqua/20 bg-aqua/5 p-7 sm:flex-row sm:items-center">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-aqua/15 text-aqua-light">
                <Droplets className="h-6 w-6" />
              </span>
              <p className="text-sm leading-relaxed text-white/75">
                <strong className="text-white">Where does alkaline water fit?</strong> There is no
                separate &ldquo;alkaline water&rdquo; standard. It is produced and regulated as{' '}
                <strong className="text-white">packaged drinking water</strong> (IS 14543 / Codex
                227), with pH treated as an operational parameter — the WHO cites an optimum often in
                the range <strong className="text-white">6.5–9.5</strong>, with no health-based
                guideline value for pH.
              </p>
            </div>
          </Reveal>

          <p className="mt-6 text-center text-xs text-white/40">
            Standard codes and scopes are summarised for orientation. Always confirm the current
            revision and applicability with the issuing body (BIS, FSSAI, WHO, Codex, ISO).
          </p>
        </Container>

        <WaveDivider className="text-white" height="sm" />
      </section>

      {/* Explainers — denser 3-col grid */}
      <Section className="water-tint bg-white">
        <Container>
          <SectionHeading
            eyebrow="Explainers"
            title="Key topics in water & packaging"
            description="Bite-sized, factual summaries of the technologies and principles behind our products."
          />
          <RevealGroup className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {knowledgeTopics.map((t, i) => {
              const Icon = topicIcons[i % topicIcons.length];
              return (
                <RevealItem key={t.title}>
                  <div className="flex h-full flex-col rounded-2xl border border-ink/10 bg-white p-6 card-hover">
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                      <Icon className="h-5 w-5" />
                    </span>
                    <h3 className="mt-4 font-display text-lg font-bold text-ink">{t.title}</h3>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-500">{t.summary}</p>
                    <ul className="mt-4 space-y-1.5 border-t border-ink/10 pt-4">
                      {t.points.map((p) => (
                        <li key={p} className="flex items-start gap-2 text-xs text-ink-600">
                          <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-brand-500" />
                          {p}
                        </li>
                      ))}
                    </ul>
                  </div>
                </RevealItem>
              );
            })}
          </RevealGroup>

          {/* Compliance cross-links to fill space usefully */}
          <Reveal>
            <div className="mt-10 grid gap-4 rounded-3xl border border-ink/10 bg-muted/40 p-6 sm:grid-cols-3">
              {[
                { icon: ShieldCheck, label: 'Certifications we hold', href: '/quality-certifications' },
                { icon: ScrollText, label: 'The alkaline water guide', href: '/alkaline-water-guide' },
                { icon: FlaskConical, label: 'Inside our manufacturing', href: '/manufacturing' },
              ].map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="group flex items-center gap-3 rounded-2xl bg-white px-5 py-4 ring-1 ring-ink/5 transition-colors hover:ring-brand-300"
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                    <l.icon className="h-5 w-5" />
                  </span>
                  <span className="flex-1 text-sm font-semibold text-ink">{l.label}</span>
                  <ArrowRight className="h-4 w-4 text-brand-500 transition-transform group-hover:translate-x-0.5" />
                </Link>
              ))}
            </div>
          </Reveal>
        </Container>
      </Section>

      <CtaBand
        title="Need documentation or a spec against a standard?"
        description="We can share test reports, certifications and traceability documentation mapped to the standards above — for your tender, import or due-diligence process."
        primaryLabel="Request documentation"
      />
    </>
  );
}
