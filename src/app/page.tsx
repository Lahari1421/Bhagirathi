import Link from 'next/link';
import Image from 'next/image';
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  FlaskConical,
  Factory,
  Recycle,
  Handshake,
  Quote,
  Droplets,
} from 'lucide-react';
import { HomeHero } from '@/components/sections/home-hero';
import { Container, Section, SectionHeading } from '@/components/ui/section';
import { Reveal, RevealGroup, RevealItem } from '@/components/ui/reveal';
import { Counter } from '@/components/ui/counter';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { ProductCard } from '@/components/shared/product-card';
import { CtaBand } from '@/components/shared/cta-band';
import { products } from '@/lib/products';
import {
  stats,
  trustLogos,
  purificationSteps,
  coreValues,
  certifications,
  exportMarkets,
  testimonials,
} from '@/lib/content';

const valueIcons = [FlaskConical, Factory, Recycle, Handshake];

export default function HomePage() {
  return (
    <>
      <HomeHero />

      {/* Trust marquee */}
      <div className="border-y border-ink/10 bg-white">
        <Container className="flex flex-col items-center gap-6 py-8 sm:flex-row sm:justify-between">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-ink-400">
            Trusted &amp; certified to recognised standards
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
            {trustLogos.map((logo) => (
              <span key={logo} className="text-lg font-bold tracking-tight text-ink-300">
                {logo}
              </span>
            ))}
          </div>
        </Container>
      </div>

      {/* Stats */}
      <Section className="bg-white">
        <Container>
          <RevealGroup className="grid grid-cols-2 gap-x-6 gap-y-10 lg:grid-cols-4">
            {stats.map((s) => (
              <RevealItem key={s.label} className="text-center lg:text-left">
                <div className="font-display text-5xl font-bold tracking-tight text-ink lg:text-6xl">
                  <Counter to={s.value} prefix={s.prefix} suffix={s.suffix} />
                </div>
                <p className="mt-2 text-sm font-medium text-ink-500">{s.label}</p>
              </RevealItem>
            ))}
          </RevealGroup>
          <p className="mt-8 text-center text-xs text-ink-400 lg:text-left">
            *Illustrative figures — to be replaced with verified company data.
          </p>
        </Container>
      </Section>

      {/* Intro / positioning */}
      <Section className="bg-muted/40 py-16 sm:py-20 lg:py-24">
        <Container className="grid items-center gap-10 lg:grid-cols-2">
          <Reveal>
            <div className="relative">
              <div className="overflow-hidden rounded-4xl shadow-card">
                <Image
                  src="/images/lab-testing.jpg"
                  alt="Laboratory testing of water quality"
                  width={720}
                  height={520}
                  className="h-full max-h-[400px] w-full object-cover lg:max-h-[480px]"
                />
              </div>
              <div className="absolute -bottom-6 -right-4 hidden max-w-[220px] rounded-2xl border border-ink/10 bg-white p-5 shadow-card sm:block">
                <div className="flex items-center gap-3">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                    <FlaskConical className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="font-display text-lg font-bold text-ink">Batch-tested</p>
                    <p className="text-xs text-ink-500">Lab-verified before dispatch</p>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={1}>
            <SectionHeading
              eyebrow="Who we are"
              title="A scientific manufacturer, built for demanding B2B partners"
              description="We combine validated purification, automated filling and disciplined quality control to deliver water and packaging you can standardise on — batch after batch, market after market."
            />
            <ul className="mt-8 space-y-4">
              {[
                'Multi-stage RO, UV and ozonisation with controlled mineral balancing',
                'Automated, hygienic filling under filtered air',
                'BIS, FSSAI and ISO-aligned quality systems with batch traceability',
                'OEM / private-label and export-ready documentation',
              ].map((point) => (
                <li key={point} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand-600" />
                  <span className="text-ink-600">{point}</span>
                </li>
              ))}
            </ul>
            <div className="mt-9 flex flex-wrap gap-3">
              <Button asChild variant="primary" size="lg">
                <Link href="/manufacturing">Manufacturing</Link>
              </Button>
            </div>
          </Reveal>
        </Container>
      </Section>

      {/* Dr. Liv teaser */}
      <Section className="bg-white py-16 sm:py-20 lg:py-24">
        <Container>
          <Reveal>
            <div className="mx-auto max-w-3xl text-center">
              <span className="eyebrow">
                <span className="h-px w-6 bg-brand-400" /> Our Flagship Brand
              </span>
              <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl text-balance">
                Introducing <span className="text-gradient">Dr. Liv</span>
              </h2>
              <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-ink-500">
                Bhagirathi Industries&apos; flagship premium packaged drinking water
                brand — crafted through advanced purification, balanced minerals, and
                uncompromising quality standards.
              </p>
              <div className="mt-8">
                <Button asChild variant="primary" size="lg">
                  <Link href="/products">
                    Explore Dr. Liv <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </Reveal>
        </Container>
      </Section>

      {/* Alkaline water spotlight — flagship brand */}
      <Section className="relative overflow-hidden bg-ink text-white">
        <div className="pointer-events-none absolute inset-0 bg-brand-radial opacity-70" />
        <div className="pointer-events-none absolute inset-0 bg-ripple opacity-60" />
        <div className="pointer-events-none absolute -right-32 top-10 h-96 w-96 animate-drift rounded-full bg-aqua/15 blur-[130px]" />
        <Container className="relative grid items-center gap-14 lg:grid-cols-2">
          <Reveal>
            <div className="relative overflow-hidden rounded-4xl shadow-card">
              <Image
                src="/images/alkaline-pour.jpg"
                alt="Bhagirathi alkaline water poured into a glass"
                width={720}
                height={760}
                className="h-full w-full object-cover"
              />
              <div className="absolute left-5 top-5 rounded-full bg-white/90 px-4 py-2 font-display text-sm font-bold text-brand-700 shadow-soft backdrop-blur">
                pH 8.0 – 9.5
              </div>
            </div>
          </Reveal>
          <Reveal delay={1}>
            <span className="eyebrow text-aqua-light">
              <span className="h-px w-6 bg-aqua" /> Our flagship brand
            </span>
            <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-balance sm:text-4xl lg:text-[2.6rem] lg:leading-[1.08]">
              Bhagirathi <span className="text-gradient-light">Alkaline Water</span>
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-white/70">
              Our signature product. Purified to a clean baseline, then re-mineralised and ionised to
              a naturally higher pH for a smooth, crisp taste — produced on the same hygienic,
              automated lines as our drinking water and verified every batch.
            </p>
            <ul className="mt-7 grid gap-3 sm:grid-cols-2">
              {[
                'Typical pH of 8.0 – 9.5',
                'Re-mineralised & ionised',
                'Smooth, crisp taste profile',
                'OEM / private-label ready',
              ].map((point) => (
                <li key={point} className="flex items-start gap-2.5">
                  <Droplets className="mt-0.5 h-5 w-5 shrink-0 text-aqua" />
                  <span className="text-sm text-white/80">{point}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6 rounded-2xl border border-white/15 bg-white/5 p-4 text-sm leading-relaxed text-white/70 backdrop-blur">
              <strong className="text-white">Backed by balance, not hype.</strong> We reference what
              the World Health Organization (WHO) and current research actually say about pH and
              alkaline water — and we avoid unproven health claims.
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild variant="water" size="lg">
                <Link href="/products/alkaline-water">
                  Explore alkaline water <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="light" size="lg">
                <Link href="/alkaline-water-guide">Read the science (incl. WHO)</Link>
              </Button>
            </div>
          </Reveal>
        </Container>
      </Section>

      {/* Products */}
      <Section className="bg-white">
        <Container>
          <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-end">
            <SectionHeading
              eyebrow="Our products"
              title="One quality standard, across every format"
              description="From retail bottles to bulk jars, specialty waters and the packaging itself — engineered for consistency and scale."
            />
            <Button asChild variant="ghost" size="lg" className="shrink-0">
              <Link href="/products">
                All products <ArrowUpRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
          <RevealGroup className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((p, i) => (
              <RevealItem key={p.slug}>
                <ProductCard product={p} priority={i < 3} />
              </RevealItem>
            ))}
          </RevealGroup>
        </Container>
      </Section>

      {/* Manufacturing process */}
      <Section className="relative overflow-hidden bg-ink text-white">
        <div className="pointer-events-none absolute inset-0 bg-brand-radial opacity-70" />
        <div className="pointer-events-none absolute inset-0 bg-ripple opacity-60" />
        <div className="pointer-events-none absolute -left-40 bottom-0 h-96 w-96 rounded-full bg-brand-500/20 blur-[130px]" />
        <Container className="relative">
          <SectionHeading
            invert
            align="center"
            eyebrow="How it's made"
            title="A validated purification & filling process"
            description="Every drop moves through a controlled, monitored sequence — from raw water to a sealed, traceable bottle."
          />
          <RevealGroup className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {purificationSteps.slice(0, 8).map((step) => (
              <RevealItem key={step.n}>
                <div className="group h-full rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur transition-colors hover:border-brand-400/60 hover:bg-white/[0.07]">
                  <span className="font-display text-3xl font-bold text-aqua/80">{step.n}</span>
                  <h3 className="mt-3 text-base font-semibold text-white">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/60">{step.desc}</p>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
          <div className="mt-12 text-center">
            <Button asChild variant="light" size="lg">
              <Link href="/manufacturing">
                Explore our facilities <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </Container>
      </Section>

      {/* Values */}
      <Section className="bg-white">
        <Container>
          <SectionHeading
            align="center"
            eyebrow="Why partner with us"
            title="Reliability engineered into everything we do"
          />
          <RevealGroup className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {coreValues.map((v, i) => {
              const Icon = valueIcons[i % valueIcons.length];
              return (
                <RevealItem key={v.title}>
                  <Card className="h-full bg-gradient-to-b from-white to-muted/40 p-1 card-hover">
                    <CardHeader>
                      <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-50 text-brand-600">
                        <Icon className="h-6 w-6" />
                      </span>
                      <CardTitle className="mt-5 text-ink">{v.title}</CardTitle>
                      <CardDescription className="mt-2">{v.desc}</CardDescription>
                    </CardHeader>
                  </Card>
                </RevealItem>
              );
            })}
          </RevealGroup>
        </Container>
      </Section>

      {/* Global reach */}
      <Section className="bg-muted/40">
        <Container className="grid items-center gap-14 lg:grid-cols-2">
          <Reveal>
            <SectionHeading
              eyebrow="Global reach"
              title="Built for export, ready for your market"
              description="We support distributors, retailers and brand owners with export-grade documentation, private-label programmes and dependable logistics."
            />
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {exportMarkets.map((m) => (
                <div
                  key={m.region}
                  className="flex items-start gap-3 rounded-2xl border border-ink/10 bg-white p-4"
                >
                  <span
                    className={`mt-1.5 h-2 w-2 shrink-0 rounded-full ${m.live ? 'bg-emerald-500' : 'bg-ink-200'}`}
                  />
                  <div>
                    <p className="text-sm font-semibold text-ink">{m.region}</p>
                    <p className="text-xs text-ink-500">{m.note}</p>
                  </div>
                </div>
              ))}
            </div>
            <p className="mt-5 flex items-center gap-4 text-xs text-ink-400">
              <span className="inline-flex items-center gap-1.5">
                <span className="h-2 w-2 rounded-full bg-emerald-500" /> Active / engaged
              </span>
              <span className="inline-flex items-center gap-1.5">
                <span className="h-2 w-2 rounded-full bg-ink-200" /> Open to enquiries
              </span>
            </p>
          </Reveal>
          <Reveal delay={1}>
            <div className="relative overflow-hidden rounded-4xl border border-ink/10 bg-ink shadow-card">
              <Image
                src="/images/export-port.jpg"
                alt="Global export logistics and shipping"
                width={720}
                height={560}
                className="h-full w-full object-cover opacity-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/80 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 flex items-center gap-4 rounded-2xl border border-white/15 bg-white/10 p-5 backdrop-blur-xl">
                <span className="font-display text-4xl font-bold text-white">
                  <Counter to={12} suffix="+" />
                </span>
                <p className="text-sm text-white/80">
                  Destinations engaged for supply, distribution &amp; private-label programmes*
                </p>
              </div>
            </div>
          </Reveal>
        </Container>
      </Section>

      {/* Certifications */}
      <Section className="bg-white">
        <Container>
          <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-end">
            <SectionHeading
              eyebrow="Quality & certifications"
              title="Standards you can specify against"
              description="Our quality systems are aligned to recognised national and international standards, with multi-stage inspection and batch traceability."
            />
            <Button asChild variant="ghost" size="lg" className="shrink-0">
              <Link href="/quality-certifications">
                View certifications <ArrowUpRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
          <RevealGroup className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {certifications.map((c) => (
              <RevealItem key={c.code}>
                <div className="flex h-full gap-4 rounded-2xl border border-ink/10 bg-muted/30 p-6 card-hover">
                  <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-white text-sm font-bold text-brand-700 shadow-soft ring-1 ring-ink/5">
                    {c.code}
                  </span>
                  <div>
                    <h3 className="text-base font-semibold text-ink">{c.name}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-ink-500">{c.desc}</p>
                  </div>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </Container>
      </Section>

      {/* Testimonials */}
      <Section className="bg-muted/40">
        <Container>
          <SectionHeading
            align="center"
            eyebrow="Client stories"
            title="What partners say"
            description="Placeholder testimonials shown below — to be replaced with authentic, attributable client quotes."
          />
          <RevealGroup className="mt-14 grid gap-6 lg:grid-cols-3">
            {testimonials.map((t) => (
              <RevealItem key={t.company}>
                <figure className="flex h-full flex-col rounded-3xl border border-ink/10 bg-white p-8 shadow-soft">
                  <Quote className="h-8 w-8 text-brand-200" />
                  <blockquote className="mt-4 flex-1 text-[15px] leading-relaxed text-ink-600">
                    &ldquo;{t.quote}&rdquo;
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
                    {t.placeholder && (
                      <Badge tone="neutral" className="ml-auto">
                        Placeholder
                      </Badge>
                    )}
                  </figcaption>
                </figure>
              </RevealItem>
            ))}
          </RevealGroup>
        </Container>
      </Section>

      <CtaBand />
    </>
  );
}
