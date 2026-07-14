import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowRight, Check, Download, FileText, Layers, Ruler, Boxes } from 'lucide-react';
import { getProduct, productSlugs, products } from '@/lib/products';
import { buildMetadata, breadcrumbJsonLd } from '@/lib/seo';
import { site } from '@/lib/site';
import { PageHero } from '@/components/shared/page-hero';
import { Container, Section, SectionHeading } from '@/components/ui/section';
import { Reveal, RevealGroup, RevealItem } from '@/components/ui/reveal';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { ProductGallery } from '@/components/sections/product-gallery';
import { ProductCard } from '@/components/shared/product-card';
import { InquiryForm } from '@/components/shared/inquiry-form';

export function generateStaticParams() {
  return productSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) return {};
  return buildMetadata({
    title: `${product.name} Manufacturer`,
    description: product.summary.slice(0, 155),
    path: `/products/${product.slug}`,
    image: product.heroImage,
    keywords: product.keywords,
  });
}

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();

  const related = products.filter((p) => p.slug !== product.slug).slice(0, 3);

  const productJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    description: product.summary,
    image: product.gallery,
    category: product.category,
    brand: { '@type': 'Brand', name: site.shortName },
    manufacturer: { '@type': 'Organization', name: site.name },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbJsonLd([
              { name: 'Home', path: '/' },
              { name: 'Products', path: '/products' },
              { name: product.name, path: `/products/${product.slug}` },
            ]),
          ),
        }}
      />

      <PageHero
        eyebrow={product.category}
        title={product.name}
        description={product.tagline}
        crumbs={[
          { label: 'Home', href: '/' },
          { label: 'Products', href: '/products' },
          { label: product.name, href: `/products/${product.slug}` },
        ]}
      />

      {/* Overview + gallery */}
      <Section className="bg-white">
        <Container className="grid items-start gap-14 lg:grid-cols-2">
          <Reveal>
            <ProductGallery images={product.gallery} name={product.name} />
          </Reveal>
          <Reveal delay={1}>
            <h2 className="font-display text-2xl font-bold text-ink">Overview</h2>
            <p className="mt-4 leading-relaxed text-ink-600">{product.summary}</p>

            <ul className="mt-8 space-y-3">
              {product.highlights.map((h) => (
                <li key={h} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-600 text-white">
                    <Check className="h-3 w-3" />
                  </span>
                  <span className="text-ink-600">{h}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-wrap gap-2">
              {product.standards.map((s) => (
                <Badge key={s} tone="brand">
                  {s}
                </Badge>
              ))}
            </div>

            <div className="mt-9 flex flex-wrap gap-3">
              <Button asChild variant="primary" size="lg">
                <Link href="#enquire">
                  Enquire about this product <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" disabled title="Brochure coming soon">
                <Download className="h-4 w-4" /> Download brochure
              </Button>
            </div>
            <p className="mt-3 text-xs text-ink-400">
              Brochure download is a placeholder — attach your PDF spec sheet when available.
            </p>
          </Reveal>
        </Container>
      </Section>

      {/* Features */}
      <Section className="bg-muted/40">
        <Container>
          <SectionHeading
            eyebrow="Features"
            title="Engineered for consistency and scale"
          />
          <RevealGroup className="mt-12 grid gap-6 sm:grid-cols-2">
            {product.features.map((f) => (
              <RevealItem key={f.title}>
                <div className="flex h-full gap-4 rounded-2xl border border-ink/10 bg-white p-6 card-hover">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                    <Layers className="h-5 w-5" />
                  </span>
                  <div>
                    <h3 className="text-base font-semibold text-ink">{f.title}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-ink-500">{f.desc}</p>
                  </div>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </Container>
      </Section>

      {/* Specs + sizes */}
      <Section className="bg-white">
        <Container className="grid gap-12 lg:grid-cols-2">
          <Reveal>
            <div className="flex items-center gap-3">
              <Ruler className="h-5 w-5 text-brand-600" />
              <h2 className="font-display text-2xl font-bold text-ink">Specifications</h2>
            </div>
            <dl className="mt-6 overflow-hidden rounded-2xl border border-ink/10">
              {product.specs.map((s, i) => (
                <div
                  key={s.label}
                  className={`grid grid-cols-2 gap-4 px-5 py-4 text-sm ${i % 2 ? 'bg-muted/40' : 'bg-white'}`}
                >
                  <dt className="font-medium text-ink-500">{s.label}</dt>
                  <dd className="font-semibold text-ink">{s.value}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
          <Reveal delay={1}>
            <div className="flex items-center gap-3">
              <Boxes className="h-5 w-5 text-brand-600" />
              <h2 className="font-display text-2xl font-bold text-ink">Available sizes & formats</h2>
            </div>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {product.sizes.map((s) => (
                <div key={s.size + s.format} className="rounded-2xl border border-ink/10 bg-muted/30 p-5">
                  <p className="font-display text-xl font-bold text-ink">{s.size}</p>
                  <p className="mt-1 text-sm font-medium text-brand-700">{s.format}</p>
                  <p className="mt-1 text-xs text-ink-500">{s.use}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </Container>
      </Section>

      {/* Applications */}
      <Section className="bg-muted/40">
        <Container>
          <SectionHeading eyebrow="Applications" title="Where this product fits" />
          <RevealGroup className="mt-10 flex flex-wrap gap-3">
            {product.applications.map((a) => (
              <RevealItem key={a}>
                <span className="inline-flex items-center gap-2 rounded-full border border-ink/10 bg-white px-5 py-2.5 text-sm font-medium text-ink-600">
                  <span className="h-1.5 w-1.5 rounded-full bg-brand-500" />
                  {a}
                </span>
              </RevealItem>
            ))}
          </RevealGroup>
        </Container>
      </Section>

      {/* FAQ */}
      <Section className="bg-white">
        <Container className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <SectionHeading eyebrow="FAQ" title="Frequently asked questions" />
            <p className="mt-6 text-ink-500">
              Have a question we haven&apos;t answered? Our team is happy to help with
              specifications, pricing and lead times.
            </p>
            <Button asChild variant="outline" size="lg" className="mt-6">
              <Link href="#enquire">
                <FileText className="h-4 w-4" /> Ask a question
              </Link>
            </Button>
          </div>
          <Accordion type="single" collapsible className="w-full">
            {product.faqs.map((faq, i) => (
              <AccordionItem key={faq.q} value={`item-${i}`}>
                <AccordionTrigger>{faq.q}</AccordionTrigger>
                <AccordionContent>{faq.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Container>
      </Section>

      {/* Enquiry */}
      <Section id="enquire" className="bg-muted/40 scroll-mt-24">
        <Container className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <SectionHeading
            eyebrow="Get in touch"
            title={`Enquire about ${product.name}`}
            description="Share your requirement and our B2B / export team will respond with options, pricing guidance and timelines."
          />
          <div className="rounded-3xl border border-ink/10 bg-white p-6 shadow-soft sm:p-8">
            <InquiryForm defaultType="Request a quote" productContext={product.name} />
          </div>
        </Container>
      </Section>

      {/* Related */}
      <Section className="bg-white">
        <Container>
          <SectionHeading eyebrow="Explore more" title="Related products" />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((p) => (
              <ProductCard key={p.slug} product={p} />
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}
