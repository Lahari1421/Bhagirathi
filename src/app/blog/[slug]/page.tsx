import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { CalendarDays, ArrowLeft, ArrowUpRight } from 'lucide-react';
import { PageHero } from '@/components/shared/page-hero';
import { Container, Section } from '@/components/ui/section';
import { Badge } from '@/components/ui/badge';
import { CtaBand } from '@/components/shared/cta-band';
import { buildMetadata } from '@/lib/seo';
import { articles } from '@/lib/content';

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = articles.find((a) => a.slug === slug);
  if (!article) return {};
  return buildMetadata({
    title: article.title,
    description: article.excerpt,
    path: `/blog/${article.slug}`,
    image: article.image,
  });
}

function formatDate(iso: string) {
  const [y, m, d] = iso.split('-').map(Number);
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  return `${d} ${months[m - 1]} ${y}`;
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = articles.find((a) => a.slug === slug);
  if (!article) notFound();

  const related = articles.filter((a) => a.slug !== article.slug).slice(0, 3);

  return (
    <>
      <PageHero
        eyebrow={article.category}
        title={article.title}
        crumbs={[
          { label: 'Home', href: '/' },
          { label: 'Blog', href: '/blog' },
          { label: article.category, href: '/blog' },
        ]}
      >
        <div className="flex items-center gap-3 text-sm text-white/60">
          <CalendarDays className="h-4 w-4" />
          {formatDate(article.date)} · {article.readTime} read
        </div>
      </PageHero>

      <Section className="bg-white">
        <Container className="max-w-3xl">
          <div className="relative aspect-[16/9] overflow-hidden rounded-3xl shadow-card">
            <Image
              src={article.image}
              alt={article.title}
              fill
              priority
              sizes="(max-width: 768px) 100vw, 768px"
              className="object-cover"
            />
          </div>

          <article className="mt-10 space-y-6 text-[17px] leading-relaxed text-ink-600">
            <p className="text-xl leading-relaxed text-ink">{article.excerpt}</p>
            <p>
              This article is provided as illustrative editorial content for the website. Replace
              this body with your finished, fact-checked piece — the layout, typography and metadata
              are production-ready and will render your real content beautifully.
            </p>

            <h2 className="pt-4 font-display text-2xl font-bold text-ink">Why this matters</h2>
            <p>
              For B2B buyers, the difference between a good supplier and a great one usually comes
              down to consistency, transparency and documentation. Understanding the fundamentals —
              whether that&apos;s purification technology, packaging choices or sourcing criteria —
              helps you specify better and choose partners with confidence.
            </p>

            <blockquote className="rounded-2xl border-l-4 border-brand-500 bg-muted/40 py-4 pl-6 pr-4 text-lg font-medium italic text-ink">
              “Quality that can be measured, documented and repeated is the only quality that scales.”
            </blockquote>

            <h2 className="pt-4 font-display text-2xl font-bold text-ink">Key takeaways</h2>
            <ul className="space-y-2">
              {[
                'Specify against recognised standards and ask for batch documentation.',
                'Prioritise partners who can explain their process and controls clearly.',
                'Balance performance, cost and sustainability rather than optimising one alone.',
              ].map((point) => (
                <li key={point} className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-500" />
                  {point}
                </li>
              ))}
            </ul>

            <p>
              Have a question on this topic, or want to discuss your specific requirement? Our team is
              always happy to share practical guidance.
            </p>
          </article>

          <div className="mt-12 flex items-center justify-between border-t border-ink/10 pt-6">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm font-semibold text-brand-700 hover:text-brand-800"
            >
              <ArrowLeft className="h-4 w-4" /> Back to all articles
            </Link>
            <Badge tone="brand">{article.category}</Badge>
          </div>
        </Container>
      </Section>

      {/* Related */}
      <Section className="bg-muted/40">
        <Container>
          <h2 className="font-display text-2xl font-bold text-ink">Keep reading</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {related.map((a) => (
              <Link
                key={a.slug}
                href={`/blog/${a.slug}`}
                className="group flex h-full flex-col overflow-hidden rounded-3xl border border-ink/10 bg-white card-hover"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={a.image}
                    alt={a.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <Badge tone="brand" className="self-start">
                    {a.category}
                  </Badge>
                  <h3 className="mt-3 font-display text-base font-bold leading-snug text-ink group-hover:text-brand-700">
                    {a.title}
                  </h3>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-700">
                    Read <ArrowUpRight className="h-4 w-4" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </Section>

      <CtaBand />
    </>
  );
}
