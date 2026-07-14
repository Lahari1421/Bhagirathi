import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import { Container } from '@/components/ui/section';
import { WaveDivider } from '@/components/ui/wave-divider';
import { cn } from '@/lib/utils';

type Crumb = { label: string; href: string };

type PageHeroProps = {
  eyebrow?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  crumbs?: Crumb[];
  align?: 'left' | 'center';
  children?: React.ReactNode;
};

/** Consistent dark, premium hero for interior pages. */
export function PageHero({
  eyebrow,
  title,
  description,
  crumbs = [],
  align = 'left',
  children,
}: PageHeroProps) {
  return (
    <section className="water-caustics relative overflow-hidden bg-ink pt-[72px] text-white">
      <div className="pointer-events-none absolute inset-0 bg-brand-radial opacity-80" />
      <div className="pointer-events-none absolute -right-32 top-0 h-96 w-96 animate-drift rounded-full bg-brand-500/25 blur-[130px]" />
      <div className="pointer-events-none absolute -left-24 bottom-10 h-80 w-80 rounded-full bg-aqua/10 blur-[120px]" />
      <div className="pointer-events-none absolute inset-0 bg-ripple opacity-70" />

      <Container
        className={cn(
          'relative pb-28 pt-16 sm:pb-32 sm:pt-20 lg:pt-24',
          align === 'center' && 'flex flex-col items-center text-center',
        )}
      >
        {crumbs.length > 0 && (
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex flex-wrap items-center gap-1.5 text-xs text-white/50">
              {crumbs.map((c, i) => (
                <li key={c.href} className="flex items-center gap-1.5">
                  {i > 0 && <ChevronRight className="h-3.5 w-3.5" />}
                  {i === crumbs.length - 1 ? (
                    <span className="text-white/80">{c.label}</span>
                  ) : (
                    <Link href={c.href} className="hover:text-white">
                      {c.label}
                    </Link>
                  )}
                </li>
              ))}
            </ol>
          </nav>
        )}

        {eyebrow && (
          <span className={cn('eyebrow text-aqua-light', align === 'center' && 'justify-center')}>
            <span className="h-px w-6 bg-aqua" />
            {eyebrow}
          </span>
        )}

        <h1
          className={cn(
            'mt-4 max-w-4xl font-display text-4xl font-bold tracking-tight text-balance sm:text-5xl lg:text-6xl lg:leading-[1.05]',
          )}
        >
          {title}
        </h1>

        {description && (
          <p
            className={cn(
              'mt-6 max-w-2xl text-lg leading-relaxed text-white/70',
              align === 'center' && 'mx-auto',
            )}
          >
            {description}
          </p>
        )}

        {children && <div className="mt-8">{children}</div>}
      </Container>

      <WaveDivider className="text-white" height="md" />
    </section>
  );
}
