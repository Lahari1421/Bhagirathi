import type { Metadata } from 'next';
import { PageHero } from '@/components/shared/page-hero';
import { Container, Section, SectionHeading } from '@/components/ui/section';
import { Reveal, RevealGroup, RevealItem } from '@/components/ui/reveal';
import { ProductCard } from '@/components/shared/product-card';
import { CtaBand } from '@/components/shared/cta-band';
import { products } from '@/lib/products';
import { buildMetadata } from '@/lib/seo';

export const metadata: Metadata = buildMetadata({
  title: 'Products — Water & Packaging Manufacturing',
  description:
    'Explore our range: packaged drinking water, alkaline water, mineral water, PET bottles and eco-friendly packaging — manufactured to BIS, FSSAI and ISO-aligned standards for B2B and export.',
  path: '/products',
  keywords: [
    'packaged drinking water manufacturer',
    'mineral water manufacturer',
    'alkaline water manufacturer',
    'PET bottle manufacturer',
    'eco-friendly packaging manufacturer',
  ],
});

export default function ProductsPage() {
  return (
    <>
      <PageHero
        eyebrow="Our products"
        title="Precision-made water & packaging"
        description="A focused portfolio, engineered for consistency at scale — supplied across retail, hospitality, institutional, OEM / private-label and export channels."
        crumbs={[
          { label: 'Home', href: '/' },
          { label: 'Products', href: '/products' },
        ]}
      />

      {/* Dr. Liv introduction */}
      <Section className="bg-white py-16 sm:py-20 lg:py-24">
        <Container>
          <Reveal>
            <div className="mx-auto max-w-3xl text-center">
              <span className="eyebrow">
                <span className="h-px w-6 bg-brand-400" /> Introducing Dr. Liv
              </span>
              <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl text-balance">
                More than a packaged drinking water brand.
              </h2>
              <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-ink-500">
                Dr. Liv is the living expression of Bhagirathi Industries&apos;
                promise. Every bottle is crafted through advanced purification
                technology, balanced minerals, uncompromising quality standards,
                and sustainable manufacturing practices — representing purity,
                trust, and care in every drop.
              </p>
            </div>
          </Reveal>
        </Container>
      </Section>

      <Section className="bg-muted/40">
        <Container>
          <RevealGroup className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((p, i) => (
              <RevealItem key={p.slug}>
                <ProductCard product={p} priority={i < 3} />
              </RevealItem>
            ))}
          </RevealGroup>
        </Container>
      </Section>
      <CtaBand
        title="Not sure which product fits your programme?"
        description="Send us your target market, formats and volumes. We'll recommend the right specification and share indicative pricing and lead times."
      />
    </>
  );
}
