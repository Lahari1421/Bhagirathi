'use client';

import * as React from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';

export function ProductGallery({ images, name }: { images: string[]; name: string }) {
  const [active, setActive] = React.useState(0);
  return (
    <div>
      <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-ink/10 bg-muted shadow-card">
        {images.map((src, i) => (
          <Image
            key={src}
            src={src}
            alt={`${name} — view ${i + 1}`}
            fill
            priority={i === 0}
            sizes="(max-width: 1024px) 100vw, 50vw"
            className={cn(
              'object-cover transition-opacity duration-500',
              i === active ? 'opacity-100' : 'opacity-0',
            )}
          />
        ))}
      </div>
      {images.length > 1 && (
        <div className="mt-4 flex gap-3">
          {images.map((src, i) => (
            <button
              key={src}
              onClick={() => setActive(i)}
              aria-label={`View image ${i + 1}`}
              className={cn(
                'relative aspect-square w-20 overflow-hidden rounded-xl border-2 transition-all',
                i === active ? 'border-brand-500' : 'border-transparent opacity-70 hover:opacity-100',
              )}
            >
              <Image src={src} alt="" fill sizes="80px" className="object-cover" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
