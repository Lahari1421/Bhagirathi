import type { Metadata } from 'next';
import Image from 'next/image';
import { PageHero } from '@/components/shared/page-hero';
import { Container, Section, SectionHeading } from '@/components/ui/section';
import { Reveal, RevealGroup, RevealItem } from '@/components/ui/reveal';
import { Counter } from '@/components/ui/counter';
import { Badge } from '@/components/ui/badge';
import { CtaBand } from '@/components/shared/cta-band';
import { buildMetadata } from '@/lib/seo';
import { stats } from '@/lib/content';
import { site } from '@/lib/site';

export const metadata: Metadata = buildMetadata({
  title: 'About Us — Our Story & Values',
  description:
    'Learn about Bhagirathi Industries Pvt. Ltd. — a premium, export-ready manufacturer of packaged, alkaline and mineral water, PET bottles and eco-friendly packaging, built on scientific manufacturing and disciplined quality.',
  path: '/about',
});

const milestones = [
  { year: 'Foundation', title: 'A quality-first beginning', desc: 'Bhagirathi Industries was established with a simple conviction: safe, great-tasting water, made to a repeatable standard.' },
  { year: 'Scale-up', title: 'Automated capacity', desc: 'Investment in automated filling, laboratory capability and multi-stage purification to serve growing B2B demand.' },
  { year: 'Certification', title: 'Standards & systems', desc: 'Quality systems aligned to BIS, FSSAI and ISO principles, with batch traceability across the production flow.' },
  { year: 'Today', title: 'Export-ready partner', desc: 'OEM / private-label programmes and export documentation for distributors and brand owners across markets.' },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About us"
        title="Manufacturing trust, one batch at a time"
        description="We are a premium manufacturer of water and packaging, engineered around scientific process control and a genuine partnership mindset."
        crumbs={[
          { label: 'Home', href: '/' },
          { label: 'About', href: '/about' },
        ]}
      />

      {/* Story */}
      <Section className="bg-white">
        <Container className="grid items-center gap-14 lg:grid-cols-2">
          <Reveal>
            <div className="relative overflow-hidden rounded-4xl shadow-card">
              <Image
                src="/images/technicians.jpg"
                alt="Technicians on the production and quality line"
                width={720}
                height={800}
                className="h-full w-full object-cover"
              />
            </div>
          </Reveal>
          <Reveal delay={1}>
            <SectionHeading
              eyebrow="Our story"
              title="Founded on a scientific approach to water"
              description={`Since ${site.foundingYear}, Bhagirathi Industries has focused on doing one thing exceptionally well — producing water and packaging that B2B partners can standardise on with confidence.`}
            />
            <div className="mt-6 space-y-4 text-ink-600">
              <p>
                Our philosophy is simple: quality is not an inspection at the end of the line — it is
                designed into every stage. From validated purification to hygienic automated filling
                and laboratory release, each step is controlled, measured and documented.
              </p>
              <p>
                That discipline is what lets us serve demanding distributors, retailers, institutions
                and export partners — and to run OEM / private-label programmes where our partners&apos;
                brands carry our production quality.
              </p>
            </div>
            <div className="mt-8 flex flex-wrap gap-2">
              <Badge tone="brand">Scientific manufacturing</Badge>
              <Badge tone="brand">Export-ready</Badge>
              <Badge tone="brand">OEM / private label</Badge>
              <Badge tone="brand">Sustainability-minded</Badge>
            </div>
          </Reveal>
        </Container>
      </Section>

      {/* Stats */}
      <Section className="bg-ink text-white">
        <Container>
          <RevealGroup className="grid grid-cols-2 gap-8 lg:grid-cols-4">
            {stats.map((s) => (
              <RevealItem key={s.label} className="text-center">
                <div className="font-display text-5xl font-bold text-white">
                  <Counter to={s.value} prefix={s.prefix} suffix={s.suffix} />
                </div>
                <p className="mt-2 text-sm text-white/60">{s.label}</p>
              </RevealItem>
            ))}
          </RevealGroup>
          <p className="mt-8 text-center text-xs text-white/40">
            *Illustrative figures — to be replaced with verified company data.
          </p>
        </Container>
      </Section>

      {/* Timeline */}
      <Section className="bg-white">
        <Container>
          <SectionHeading eyebrow="Our journey" title="Milestones on the way" />
          <div className="mt-14 grid gap-0 lg:grid-cols-4">
            {milestones.map((m, i) => (
              <Reveal key={m.title} delay={i}>
                <div className="relative border-l-2 border-brand-100 pb-10 pl-8 lg:border-l-0 lg:border-t-2 lg:pb-0 lg:pl-0 lg:pt-8 lg:pr-6">
                  <span className="absolute -left-[9px] top-0 h-4 w-4 rounded-full bg-brand-600 ring-4 ring-brand-50 lg:-top-[9px] lg:left-0" />
                  <span className="text-xs font-semibold uppercase tracking-wide text-brand-600">
                    {m.year}
                  </span>
                  <h3 className="mt-2 font-display text-lg font-bold text-ink">{m.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-500">{m.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <p className="mt-8 text-xs text-ink-400">
            Timeline labels are indicative — replace with your company&apos;s actual milestones and dates.
          </p>
        </Container>
      </Section>

      {/* Leadership placeholder */}
      <Section className="bg-muted/40">
        <Container>
          <SectionHeading
            align="center"
            eyebrow="Leadership"
            title="Guided by experienced hands"
            description="Leadership profiles are placeholders — add your directors and key team members with photos and short bios."
          />
          <RevealGroup className="mx-auto mt-14 grid max-w-4xl gap-6 sm:grid-cols-3">
            {['Managing Director', 'Operations Head', 'Quality Head'].map((role) => (
              <RevealItem key={role}>
                <div className="rounded-3xl border border-ink/10 bg-white p-6 text-center">
                  <div className="mx-auto h-24 w-24 rounded-full bg-gradient-to-br from-brand-100 to-brand-200" />
                  <p className="mt-5 font-display text-lg font-bold text-ink">Name Placeholder</p>
                  <p className="text-sm text-brand-700">{role}</p>
                  <Badge tone="neutral" className="mt-3">
                    Placeholder
                  </Badge>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </Container>
      </Section>

      <CtaBand />
    </>
  );
}
