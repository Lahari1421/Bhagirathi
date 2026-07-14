import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight, CalendarDays } from 'lucide-react';
import { PageHero } from '@/components/shared/page-hero';
import { Container, Section } from '@/components/ui/section';
import { RevealGroup, RevealItem } from '@/components/ui/reveal';
import { Badge } from '@/components/ui/badge';
import { CtaBand } from '@/components/shared/cta-band';
import { buildMetadata } from '@/lib/seo';
import { articles } from '@/lib/content';

export const metadata: Metadata = buildMetadata({
  title: 'Blog & News — Water Industry Insight',
  description:
    'Company updates and evidence-based writing on water science, sustainability, packaging and B2B sourcing from Bhagirathi Industries.',
  path: '/blog',
});

function formatDate(iso: string) {
  const [y, m, d] = iso.split('-').map(Number);
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  return `${d} ${months[m - 1]} ${y}`;
}

export default function BlogPage() {
  const [lead, ...rest] = articles;
  return (
    <>
      <PageHero
        eyebrow="Blog & news"
        title="Insight, updates & water science"
        description="Practical, factual writing for buyers and partners — plus company news as it happens."
        crumbs={[
          { label: 'Home', href: '/' },
          { label: 'Blog & News', href: '/blog' },
        ]}
      />

      {/* Featured */}
      <Section className="bg-white pb-0">
        <Container>
          <RevealItem>
            <Link
              href={`/blog/${lead.slug}`}
              className="group grid overflow-hidden rounded-4xl border border-ink/10 bg-white card-hover lg:grid-cols-2"
            >
              <div className="relative aspect-[16/10] overflow-hidden lg:aspect-auto">
                <Image
                  src={lead.image}
                  alt={lead.title}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-col justify-center p-8 lg:p-12">
                <div className="flex items-center gap-3">
                  <Badge tone="brand">{lead.category}</Badge>
                  <span className="inline-flex items-center gap-1.5 text-xs text-ink-400">
                    <CalendarDays className="h-3.5 w-3.5" /> {formatDate(lead.date)} · {lead.readTime} read
                  </span>
                </div>
                <h2 className="mt-4 font-display text-3xl font-bold leading-tight text-ink group-hover:text-brand-700">
                  {lead.title}
                </h2>
                <p className="mt-4 leading-relaxed text-ink-500">{lead.excerpt}</p>
                <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-700">
                  Read article <ArrowUpRight className="h-4 w-4" />
                </span>
              </div>
            </Link>
          </RevealItem>
        </Container>
      </Section>

      {/* Grid */}
      <Section className="bg-white">
        <Container>
          <RevealGroup className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {rest.map((a) => (
              <RevealItem key={a.slug}>
                <Link
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
                    <div className="flex items-center gap-3 text-xs text-ink-400">
                      <Badge tone="brand">{a.category}</Badge>
                      <span>{a.readTime} read</span>
                    </div>
                    <h3 className="mt-3 font-display text-lg font-bold leading-snug text-ink group-hover:text-brand-700">
                      {a.title}
                    </h3>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-500">{a.excerpt}</p>
                    <span className="mt-4 text-xs text-ink-400">{formatDate(a.date)}</span>
                  </div>
                </Link>
              </RevealItem>
            ))}
          </RevealGroup>
        </Container>
      </Section>

      <CtaBand
        title="Subscribe for updates"
        description="Want product news, sustainability progress and practical guides in your inbox? Tell us and we'll keep you posted."
        primaryLabel="Get in touch"
      />
    </>
  );
}
