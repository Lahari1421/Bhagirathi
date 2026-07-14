import type { Metadata } from 'next';
import { HeartHandshake, GraduationCap, TrendingUp, ShieldCheck, MapPin, Clock } from 'lucide-react';
import { PageHero } from '@/components/shared/page-hero';
import { Container, Section, SectionHeading } from '@/components/ui/section';
import { Reveal, RevealGroup, RevealItem } from '@/components/ui/reveal';
import { Badge } from '@/components/ui/badge';
import { InquiryForm } from '@/components/shared/inquiry-form';
import { buildMetadata } from '@/lib/seo';
import { site } from '@/lib/site';

export const metadata: Metadata = buildMetadata({
  title: 'Careers — Build the Future of Hydration With Us',
  description:
    'Explore careers at Bhagirathi Industries Pvt. Ltd. Join a quality-focused, growing manufacturer in production, quality, sales, logistics and more.',
  path: '/careers',
});

const benefits = [
  { icon: TrendingUp, title: 'Growth & learning', desc: 'Real responsibility and room to grow with a scaling manufacturer.' },
  { icon: ShieldCheck, title: 'Safe, quality-first culture', desc: 'A workplace built on discipline, hygiene and doing things properly.' },
  { icon: GraduationCap, title: 'Skill development', desc: 'On-the-job training across modern production and quality systems.' },
  { icon: HeartHandshake, title: 'Team that supports you', desc: 'A collaborative environment where good work is recognised.' },
];

const openings = [
  { role: 'Production Line Operator', dept: 'Manufacturing', type: 'Full-time' },
  { role: 'Quality Analyst — Laboratory', dept: 'Quality Assurance', type: 'Full-time' },
  { role: 'Sales Executive — B2B / Distribution', dept: 'Sales', type: 'Full-time' },
  { role: 'Export Coordinator', dept: 'Exports', type: 'Full-time' },
  { role: 'Warehouse & Logistics Associate', dept: 'Supply Chain', type: 'Full-time' },
  { role: 'Maintenance Technician', dept: 'Engineering', type: 'Full-time' },
];

export default function CareersPage() {
  return (
    <>
      <PageHero
        eyebrow="Careers"
        title="Build the future of hydration with us"
        description="We're a quality-obsessed team making water and packaging the right way. If that sounds like you, we'd love to hear from you."
        crumbs={[
          { label: 'Home', href: '/' },
          { label: 'Careers', href: '/careers' },
        ]}
      />

      {/* Benefits */}
      <Section className="bg-white">
        <Container>
          <SectionHeading
            eyebrow="Why join us"
            title="A place to do meaningful, careful work"
          />
          <RevealGroup className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map((b) => (
              <RevealItem key={b.title}>
                <div className="h-full rounded-3xl border border-ink/10 bg-gradient-to-b from-white to-muted/40 p-7 card-hover">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-50 text-brand-600">
                    <b.icon className="h-6 w-6" />
                  </span>
                  <h3 className="mt-5 font-display text-lg font-bold text-ink">{b.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-500">{b.desc}</p>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </Container>
      </Section>

      {/* Openings */}
      <Section className="bg-muted/40">
        <Container>
          <SectionHeading
            eyebrow="Open roles"
            title="Current opportunities"
            description="Indicative roles shown below — replace with your live vacancies. Don't see a fit? Send us a speculative application."
          />
          <div className="mt-12 space-y-3">
            {openings.map((o, i) => (
              <Reveal key={o.role} delay={i % 4}>
                <div className="flex flex-col gap-4 rounded-2xl border border-ink/10 bg-white p-6 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <div className="flex items-center gap-3">
                      <h3 className="font-display text-lg font-bold text-ink">{o.role}</h3>
                      <Badge tone="brand">{o.dept}</Badge>
                    </div>
                    <div className="mt-2 flex flex-wrap items-center gap-4 text-xs text-ink-500">
                      <span className="inline-flex items-center gap-1.5">
                        <MapPin className="h-3.5 w-3.5" /> {site.address.city}, {site.address.state}
                      </span>
                      <span className="inline-flex items-center gap-1.5">
                        <Clock className="h-3.5 w-3.5" /> {o.type}
                      </span>
                    </div>
                  </div>
                  <a
                    href="#apply"
                    className="inline-flex h-11 shrink-0 items-center justify-center rounded-full bg-ink px-6 text-sm font-semibold text-white transition-colors hover:bg-ink-700"
                  >
                    Apply now
                  </a>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* Application form */}
      <Section id="apply" className="bg-white scroll-mt-24">
        <Container className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <SectionHeading
            eyebrow="Apply"
            title="Submit your application"
            description={`Share your details and tell us which role you're interested in. You can also email your CV directly to ${site.careersEmail}.`}
          />
          <div className="rounded-3xl border border-ink/10 bg-muted/30 p-6 shadow-soft sm:p-8">
            <InquiryForm defaultType="General enquiry" />
            <p className="mt-4 text-xs text-ink-400">
              Tip: mention the role title and your notice period in your message. To attach a CV,
              email {site.careersEmail} (file uploads can be enabled when this form is connected to
              your backend).
            </p>
          </div>
        </Container>
      </Section>
    </>
  );
}
