'use client';

import * as React from 'react';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import { cn } from '@/lib/utils';

const ease = [0.22, 1, 0.36, 1] as const;

type StorySplitProps = {
  image: string;
  alt: string;
  eyebrow?: string;
  heading: React.ReactNode;
  children: React.ReactNode;
  imagePosition?: 'left' | 'right';
  dark?: boolean;
  className?: string;
  imageClassName?: string;
};

export function StorySplit({
  image,
  alt,
  eyebrow,
  heading,
  children,
  imagePosition = 'right',
  dark = false,
  className,
  imageClassName,
}: StorySplitProps) {
  const ref = React.useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section
      ref={ref}
      className={cn(
        'relative overflow-hidden py-24 sm:py-32 lg:py-40',
        dark ? 'bg-ink text-white' : 'bg-white text-ink',
        className,
      )}
    >
      <div className="container-page">
        <div
          className={cn(
            'grid items-center gap-14 lg:grid-cols-2 lg:gap-20',
            imagePosition === 'left' && 'lg:[direction:rtl]',
          )}
        >
          <motion.div
            initial={{ opacity: 0, x: imagePosition === 'right' ? 40 : -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, ease }}
            className="lg:[direction:ltr]"
          >
            <div className={cn('relative overflow-hidden rounded-3xl shadow-card transition-all duration-500 hover:-translate-y-1 hover:shadow-lg lg:rounded-4xl', imageClassName)}>
              <Image
                src={image}
                alt={alt}
                width={720}
                height={820}
                className="h-full w-full object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/40 to-transparent" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, ease, delay: 0.2 }}
            className="lg:[direction:ltr]"
          >
            {eyebrow && (
              <span className={cn('eyebrow', dark && 'text-aqua-light')}>
                <span className={cn('h-px w-6', dark ? 'bg-aqua' : 'bg-brand-400')} />
                {eyebrow}
              </span>
            )}
            <h2
              className={cn(
                'mt-5 font-display text-3xl font-bold tracking-tight sm:text-4xl lg:text-[2.6rem] lg:leading-[1.08] text-balance',
                dark ? 'text-white' : 'text-ink',
              )}
            >
              {heading}
            </h2>
            <div className={cn('mt-7 space-y-5 text-base leading-relaxed', dark ? 'text-white/65' : 'text-ink-500')}>
              {children}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
