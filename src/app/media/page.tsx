import type { Metadata } from 'next';
import { Newspaper, Award, Camera, FileText, Megaphone, Video, ExternalLink } from 'lucide-react';
import { PageHero } from '@/components/shared/page-hero';
import { Container, Section, SectionHeading } from '@/components/ui/section';
import { RevealGroup, RevealItem } from '@/components/ui/reveal';
import { Badge } from '@/components/ui/badge';
import { CtaBand } from '@/components/shared/cta-band';
import { buildMetadata } from '@/lib/seo';

export const metadata: Metadata = buildMetadata({
  title: 'Media & Recognition',
  description:
    'Press coverage, industry awards, certifications, trade exhibitions, press releases and corporate videos from Bhagirathi Industries Pvt. Ltd.',
  path: '/media',
});

const sections = [
  { icon: Newspaper, title: 'Newspaper coverage', desc: 'Genuine press mentions will appear here as they are published.' },
  { icon: Camera, title: 'Magazine features', desc: 'Industry and trade magazine features, once available.' },
  { icon: Award, title: 'Industry awards', desc: 'Recognitions and awards received by the company.' },
  { icon: FileText, title: 'Certifications', desc: 'Highlighted certifications — see our Quality page for details.' },
  { icon: Megaphone, title: 'Press releases', desc: 'Official company announcements and press releases.' },
  { icon: Video, title: 'Corporate videos', desc: 'Facility walkthroughs and brand films.' },
];

export default function MediaPage() {
  return (
    <>
      <PageHero
        eyebrow="Media & recognition"
        title="In the spotlight"
        description="A home for genuine press coverage, awards, exhibitions and company announcements. Placeholder cards are shown where real content is not yet available."
        crumbs={[
          { label: 'Home', href: '/' },
          { label: 'Media & Recognition', href: '/media' },
        ]}
      />

      {/* Notice */}
      <Section className="bg-white pb-0">
        <Container>
          <div className="rounded-2xl border border-amber-200 bg-amber-50/60 p-5 text-sm leading-relaxed text-ink-600">
            <strong className="text-ink">A note on integrity:</strong> we only publish genuine,
            verifiable media coverage and awards. The cards below are clearly marked placeholders and
            will be replaced with real, sourced content as it becomes available. We do not invent
            press articles, endorsements or recognition.
          </div>
        </Container>
      </Section>

      {/* Categories */}
      <Section className="bg-white">
        <Container>
          <RevealGroup className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {sections.map((s) => (
              <RevealItem key={s.title}>
                <div className="h-full rounded-3xl border border-ink/10 bg-gradient-to-b from-white to-muted/40 p-7">
                  <div className="flex items-center justify-between">
                    <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-50 text-brand-600">
                      <s.icon className="h-6 w-6" />
                    </span>
                    <Badge tone="neutral">Placeholder</Badge>
                  </div>
                  <h3 className="mt-5 font-display text-lg font-bold text-ink">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-500">{s.desc}</p>
                  <div className="mt-6 space-y-2">
                    {[1, 2].map((n) => (
                      <div
                        key={n}
                        className="flex items-center gap-3 rounded-xl border border-dashed border-ink/15 bg-white/60 px-4 py-3"
                      >
                        <div className="h-8 w-8 rounded-lg bg-ink/5" />
                        <div className="flex-1">
                          <div className="h-2.5 w-3/4 rounded bg-ink/10" />
                          <div className="mt-1.5 h-2 w-1/2 rounded bg-ink/5" />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </Container>
      </Section>

      {/* Trade exhibitions */}
      <Section className="bg-muted/40">
        <Container>
          <SectionHeading
            eyebrow="Events"
            title="Trade exhibitions & expos"
            description="We participate in relevant industry exhibitions. Confirmed events and stand details will be listed here."
          />
          <RevealGroup className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {['Beverage & Packaging Expo', 'Food & Bev Trade Show', 'Export Buyer-Seller Meet'].map((e) => (
              <RevealItem key={e}>
                <div className="flex items-center justify-between rounded-2xl border border-dashed border-ink/15 bg-white px-6 py-5">
                  <div>
                    <p className="font-semibold text-ink">{e}</p>
                    <p className="text-xs text-ink-400">Dates &amp; stand — to be announced</p>
                  </div>
                  <Badge tone="neutral">Upcoming</Badge>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </Container>
      </Section>

      {/* Public awareness & industry trends */}
      <Section className="bg-white">
        <Container>
          <SectionHeading
            eyebrow="Context, not endorsement"
            title="Public awareness & industry trends"
            description="Rather than claim celebrity or expert endorsements, we point to publicly verifiable, general trends. We do not fabricate endorsements or state that any athlete or public figure recommends our products."
          />
          <RevealGroup className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              {
                title: 'Hydration in everyday life',
                text: 'Public-health bodies broadly emphasise the importance of adequate hydration with safe water. This is general guidance, not a product endorsement.',
              },
              {
                title: 'Bottled water & convenience',
                text: 'Demand for safe, portable drinking water reflects wider consumer and workplace trends toward convenient hydration — an industry-level observation.',
              },
              {
                title: 'Sustainability expectations',
                text: 'Retailers and buyers increasingly seek recyclable and lighter packaging. We respond with rPET and lightweighting options.',
              },
            ].map((c) => (
              <RevealItem key={c.title}>
                <div className="h-full rounded-3xl border border-ink/10 bg-muted/30 p-7">
                  <h3 className="font-display text-lg font-bold text-ink">{c.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-ink-500">{c.text}</p>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
          <div className="mt-10 rounded-2xl border border-ink/10 bg-brand-50/40 p-6">
            <div className="flex items-start gap-3">
              <ExternalLink className="mt-0.5 h-5 w-5 shrink-0 text-brand-600" />
              <p className="text-sm leading-relaxed text-ink-600">
                <strong className="text-ink">Future brand ambassadors:</strong> if and when the
                company formally partners with brand ambassadors, verified details and disclosures
                will be published here. Until then, we make no endorsement claims.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      <CtaBand
        title="Press or partnership enquiry?"
        description="For media, PR or ambassador enquiries, get in touch with our communications team."
        primaryLabel="Contact us"
      />
    </>
  );
}
