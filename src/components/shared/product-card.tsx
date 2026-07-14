import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight, Sparkles } from 'lucide-react';
import type { Product } from '@/lib/products';
import { cn } from '@/lib/utils';

export function ProductCard({ product, priority = false }: { product: Product; priority?: boolean }) {
  return (
    <Link
      href={`/products/${product.slug}`}
      className={cn(
        'group relative flex flex-col overflow-hidden rounded-3xl border bg-white card-hover',
        product.featured
          ? 'border-brand-300/60 ring-1 ring-brand-200/40 shadow-card'
          : 'border-ink/10',
      )}
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={product.heroImage}
          alt={product.name}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          priority={priority}
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div
          className={cn(
            'absolute inset-0 bg-gradient-to-t opacity-70 mix-blend-multiply',
            product.accent,
          )}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent" />
        <div className="absolute left-4 top-4 flex items-center gap-2">
          <span className="rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-ink backdrop-blur">
            {product.category}
          </span>
          {product.featured && (
            <span className="flex items-center gap-1 rounded-full bg-brand-600 px-3 py-1 text-xs font-semibold text-white shadow-soft">
              <Sparkles className="h-3 w-3" />
              Flagship
            </span>
          )}
        </div>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h3 className={cn('font-display text-xl font-bold text-ink', product.featured && 'text-brand-700')}>
          {product.name}
        </h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-500">{product.tagline}</p>
        <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-700">
          Explore product
          <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </span>
      </div>
    </Link>
  );
}
