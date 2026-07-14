import type { Metadata } from 'next';
import Link from 'next/link';
import { CheckCircle2, HelpCircle, AlertTriangle, ArrowRight, BookOpen, Globe2, ExternalLink } from 'lucide-react';
import { PageHero } from '@/components/shared/page-hero';
import { Container, Section, SectionHeading } from '@/components/ui/section';
import { Reveal } from '@/components/ui/reveal';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { CtaBand } from '@/components/shared/cta-band';
import { buildMetadata } from '@/lib/seo';

export const metadata: Metadata = buildMetadata({
  title: 'Understanding Alkaline Water — A Balanced, Evidence-Based Guide',
  description:
    'What alkaline water is, how it differs from regular drinking water, its typical pH range and how it is made — plus a balanced summary of what current scientific research does and does not support.',
  path: '/alkaline-water-guide',
  keywords: ['what is alkaline water', 'alkaline water pH', 'alkaline water benefits evidence', 'alkaline water explained'],
});

const faqs = [
  { q: 'Is alkaline water safe to drink?', a: 'For most healthy people, drinking alkaline water within normal commercial pH ranges is generally considered safe. As with any dietary choice, people with specific medical conditions (for example kidney disease) or those on certain medications should consult a qualified healthcare professional.' },
  { q: 'Will alkaline water change my body’s pH?', a: 'The body tightly regulates blood pH within a narrow range regardless of what you drink. The idea that drinking alkaline water meaningfully changes overall body or blood pH is not supported by strong evidence.' },
  { q: 'Is alkaline water better than regular water for hydration?', a: 'For everyday hydration, safe drinking water is what matters most. There is no strong consensus that alkaline water hydrates better than regular safe drinking water for general use.' },
  { q: 'Why do people choose alkaline water?', a: 'Common reasons include taste preference, a perception of premium quality, and personal wellness routines. These are consumer preferences rather than established medical benefits.' },
];

export default function AlkalineGuidePage() {
  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Understanding Alkaline Water — A Balanced, Evidence-Based Guide',
    about: 'Alkaline water',
    articleSection: 'Education',
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <PageHero
        eyebrow="Knowledge · Explainer"
        title="Understanding alkaline water"
        description="A clear, balanced explainer — what alkaline water is, how it's made, and an honest look at what the science does and doesn't support."
        crumbs={[
          { label: 'Home', href: '/' },
          { label: 'Knowledge Center', href: '/knowledge-center' },
          { label: 'Alkaline Water', href: '/alkaline-water-guide' },
        ]}
      />

      <Section className="bg-white">
        <Container className="grid gap-12 lg:grid-cols-[1fr_300px]">
          {/* Article body */}
          <article className="max-w-none">
            <Reveal>
              <h2 className="font-display text-2xl font-bold text-ink">What is alkaline water?</h2>
              <p className="mt-4 leading-relaxed text-ink-600">
                Alkaline water is drinking water with a higher pH than typical neutral water. pH is a
                scale from 0 to 14 that measures how acidic or basic (alkaline) a liquid is: 7 is
                neutral, values below 7 are acidic, and values above 7 are alkaline. Regular drinking
                water is usually close to neutral, while alkaline water is deliberately produced or
                treated to sit above neutral on the scale.
              </p>
            </Reveal>

            <Reveal>
              <h2 className="mt-12 font-display text-2xl font-bold text-ink">
                How it differs from regular drinking water
              </h2>
              <p className="mt-4 leading-relaxed text-ink-600">
                Both alkaline water and standard packaged drinking water start from a purified, safe
                baseline. The key difference is pH and mineral character. Regular drinking water is
                treated to be safe and pleasant to drink at a near-neutral pH. Alkaline water is
                additionally adjusted — through re-mineralisation and/or ionisation — so that its pH
                is higher and its taste is often described as smoother.
              </p>
            </Reveal>

            <Reveal>
              <div className="mt-8 overflow-x-auto rounded-2xl border border-ink/10">
                <table className="w-full min-w-[520px] text-left text-sm">
                  <thead className="bg-muted/60 text-ink">
                    <tr>
                      <th className="px-5 py-3 font-semibold">Attribute</th>
                      <th className="px-5 py-3 font-semibold">Regular drinking water</th>
                      <th className="px-5 py-3 font-semibold">Alkaline water</th>
                    </tr>
                  </thead>
                  <tbody className="text-ink-600">
                    {[
                      ['Typical pH', 'Around 6.5 – 7.5', 'Around 8.0 – 9.5'],
                      ['Primary aim', 'Safe, neutral, everyday hydration', 'Higher pH, smoother taste profile'],
                      ['Processing', 'Purification + mineral balancing', 'Purification + re-mineralisation / ionisation'],
                      ['Positioning', 'Everyday & bulk', 'Premium / lifestyle'],
                    ].map((row, i) => (
                      <tr key={row[0]} className={i % 2 ? 'bg-muted/30' : 'bg-white'}>
                        <td className="px-5 py-3 font-medium text-ink">{row[0]}</td>
                        <td className="px-5 py-3">{row[1]}</td>
                        <td className="px-5 py-3">{row[2]}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Reveal>

            <Reveal>
              <h2 className="mt-12 font-display text-2xl font-bold text-ink">Typical pH range</h2>
              <p className="mt-4 leading-relaxed text-ink-600">
                Commercial alkaline waters commonly sit in the range of roughly pH 8 to 9.5. The
                exact target varies by producer and product. Our alkaline water is produced to a
                controlled, batch-specific pH within safe, regulation-compliant limits.
              </p>
            </Reveal>

            <Reveal>
              <h2 className="mt-12 font-display text-2xl font-bold text-ink">
                How alkaline water is made
              </h2>
              <p className="mt-4 leading-relaxed text-ink-600">
                In our process, water is first purified to a clean baseline using multi-stage
                treatment (including reverse osmosis, UV and ozonisation). Selected minerals are then
                re-introduced and the water is ionised so that its pH rises into the target alkaline
                band. The result is filled on the same hygienic, automated lines as our standard
                drinking water and verified per batch.
              </p>
            </Reveal>

            <Reveal>
              <h2 className="mt-12 font-display text-2xl font-bold text-ink">
                Common reasons consumers choose it
              </h2>
              <ul className="mt-4 space-y-3">
                {[
                  'A taste preference — many find alkaline water smoother or crisper.',
                  'A perception of premium quality and a wellness-oriented lifestyle.',
                  'Personal routines and habits, independent of proven medical benefit.',
                ].map((r) => (
                  <li key={r} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand-600" />
                    <span className="text-ink-600">{r}</span>
                  </li>
                ))}
              </ul>
            </Reveal>

            {/* Evidence section — the key balanced part */}
            <Reveal>
              <div id="evidence" className="mt-14 scroll-mt-24 rounded-3xl border border-ink/10 bg-muted/40 p-8">
                <div className="flex items-center gap-3">
                  <BookOpen className="h-6 w-6 text-brand-600" />
                  <h2 className="font-display text-2xl font-bold text-ink">
                    What does current scientific research say?
                  </h2>
                </div>
                <p className="mt-4 leading-relaxed text-ink-600">
                  We believe in being straight with our customers. Below we summarise the current
                  state of evidence in a balanced way, and clearly separate what is established, what
                  is still being studied, and what is not supported by strong scientific consensus.
                  This is general information, not medical advice.
                </p>

                {/* WHO */}
                <div className="mt-8 rounded-2xl border border-brand-200 bg-white p-6">
                  <div className="flex items-center gap-2">
                    <Globe2 className="h-5 w-5 text-brand-600" />
                    <h3 className="font-semibold text-ink">
                      What does the World Health Organization (WHO) say?
                    </h3>
                  </div>
                  <ul className="mt-3 space-y-2.5 text-sm leading-relaxed text-ink-600">
                    <li>
                      • The WHO <em>Guidelines for Drinking-water Quality</em> state that{' '}
                      <strong className="text-ink">
                        no health-based guideline value is proposed for pH
                      </strong>
                      . WHO treats pH as an <strong className="text-ink">operational</strong>{' '}
                      water-quality parameter — important for effective treatment and disinfection
                      rather than as a direct health factor.
                    </li>
                    <li>
                      • WHO notes that although pH usually has no direct impact on consumers, it is
                      one of the most important operational parameters, with an optimum{' '}
                      <strong className="text-ink">often in the range 6.5–9.5</strong>.
                    </li>
                    <li>
                      • <strong className="text-ink">What this means for alkaline water:</strong> a
                      typical alkaline pH (around 8–9.5) sits within the upper part of WHO&apos;s
                      stated operational range — a higher, but still normal, pH. WHO does{' '}
                      <strong className="text-ink">not</strong> attribute specific health benefits to
                      high-pH or &ldquo;alkaline&rdquo; water; its guidance concerns safety and
                      treatment, not therapeutic claims.
                    </li>
                  </ul>
                  <a
                    href="https://cdn.who.int/media/docs/default-source/wash-documents/water-safety-and-quality/chemical-fact-sheets-2022/ph-fact-sheet-2022.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-700 hover:text-brand-800"
                  >
                    <ExternalLink className="h-4 w-4" />
                    Source: WHO Guidelines for Drinking-water Quality — pH fact sheet (2022)
                  </a>
                </div>

                <div className="mt-8 space-y-5">
                  {/* Established */}
                  <div className="rounded-2xl border border-emerald-200 bg-emerald-50/60 p-6">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="h-5 w-5 text-emerald-600" />
                      <h3 className="font-semibold text-ink">Established facts</h3>
                    </div>
                    <ul className="mt-3 space-y-2 text-sm leading-relaxed text-ink-600">
                      <li>• Adequate hydration with safe water is important for health.</li>
                      <li>• pH is a well-defined measure; alkaline water has a higher pH than neutral water.</li>
                      <li>• The human body maintains blood pH within a tight, tightly regulated range regardless of the pH of what you drink.</li>
                    </ul>
                  </div>

                  {/* Ongoing */}
                  <div className="rounded-2xl border border-amber-200 bg-amber-50/60 p-6">
                    <div className="flex items-center gap-2">
                      <HelpCircle className="h-5 w-5 text-amber-600" />
                      <h3 className="font-semibold text-ink">Areas where research is ongoing</h3>
                    </div>
                    <ul className="mt-3 space-y-2 text-sm leading-relaxed text-ink-600">
                      <li>• Some small or preliminary studies have explored potential effects of alkaline water in specific, narrow contexts (for example certain digestive symptoms or exercise-related measures).</li>
                      <li>• Such studies are often limited in size, design or duration, and results are not consistent enough to draw firm general conclusions.</li>
                      <li>• More rigorous, independent, peer-reviewed research would be needed to establish any broader effects.</li>
                    </ul>
                  </div>

                  {/* Not supported */}
                  <div className="rounded-2xl border border-red-200 bg-red-50/60 p-6">
                    <div className="flex items-center gap-2">
                      <AlertTriangle className="h-5 w-5 text-red-600" />
                      <h3 className="font-semibold text-ink">
                        Claims not supported by strong scientific consensus
                      </h3>
                    </div>
                    <ul className="mt-3 space-y-2 text-sm leading-relaxed text-ink-600">
                      <li>• That drinking alkaline water meaningfully changes your body&apos;s or blood&apos;s overall pH.</li>
                      <li>• That alkaline water prevents, treats or cures diseases such as cancer.</li>
                      <li>• That it is broadly superior to safe regular drinking water for general hydration.</li>
                    </ul>
                    <p className="mt-4 text-sm font-medium text-ink">
                      We do not make these claims about our products, and we encourage consumers to be
                      cautious of marketing that does.
                    </p>
                  </div>
                </div>

                <div className="mt-8 rounded-2xl bg-white p-6">
                  <h4 className="text-sm font-semibold text-ink">A note on sources</h4>
                  <p className="mt-2 text-sm leading-relaxed text-ink-500">
                    For authoritative, up-to-date information on drinking water and health, we
                    recommend consulting reputable organisations and peer-reviewed literature — for
                    example the World Health Organization (WHO), national food-safety and health
                    authorities, and systematic reviews indexed in databases such as PubMed. Where
                    specific claims matter to you, look for independent, peer-reviewed studies rather
                    than promotional material, and consult a qualified healthcare professional for
                    personal advice.
                  </p>
                </div>
              </div>
            </Reveal>

            {/* FAQ */}
            <Reveal>
              <h2 className="mt-14 font-display text-2xl font-bold text-ink">
                Frequently asked questions
              </h2>
              <Accordion type="single" collapsible className="mt-4">
                {faqs.map((faq, i) => (
                  <AccordionItem key={faq.q} value={`item-${i}`}>
                    <AccordionTrigger>{faq.q}</AccordionTrigger>
                    <AccordionContent>{faq.a}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </Reveal>

            <p className="mt-10 rounded-2xl border border-ink/10 bg-muted/40 p-5 text-xs leading-relaxed text-ink-500">
              <strong className="text-ink">Disclaimer:</strong> This page is for general information
              only and does not constitute medical advice. It does not claim any specific health
              benefit for alkaline water. Consult a qualified healthcare professional for guidance
              relating to your individual health.
            </p>
          </article>

          {/* Sidebar */}
          <aside className="lg:sticky lg:top-24 lg:self-start">
            <div className="rounded-3xl border border-ink/10 bg-gradient-to-b from-white to-muted/40 p-6">
              <Badge tone="brand">On this page</Badge>
              <ul className="mt-4 space-y-2.5 text-sm">
                {[
                  ['What is alkaline water?', '#'],
                  ['What the research says', '#evidence'],
                ].map(([label, href]) => (
                  <li key={label}>
                    <a href={href} className="text-ink-600 hover:text-brand-700">
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
              <div className="mt-6 border-t border-ink/10 pt-6">
                <h4 className="font-display text-base font-bold text-ink">Our alkaline water</h4>
                <p className="mt-2 text-sm text-ink-500">
                  Produced to a controlled pH, filled hygienically and verified per batch.
                </p>
                <Button asChild variant="primary" size="sm" className="mt-4 w-full">
                  <Link href="/products/alkaline-water">
                    View product <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </aside>
        </Container>
      </Section>

      <CtaBand
        title="Interested in alkaline water for your brand?"
        description="We manufacture alkaline water under OEM / private-label programmes with responsible, non-exaggerated product communication."
        primaryLabel="Talk to our team"
      />
    </>
  );
}
