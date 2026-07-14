'use client';

import * as React from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { cn } from '@/lib/utils';

const ease = [0.22, 1, 0.36, 1] as const;

type ParallaxRevealProps = {
  image: string;
  alt: string;
  title: string;
  subtitle?: string;
  overlay?: 'dark' | 'warm';
  height?: 'full' | 'large';
  className?: string;
};

export function ParallaxReveal({
  image,
  alt,
  title,
  subtitle,
  overlay = 'dark',
  height = 'full',
  className,
}: ParallaxRevealProps) {
  const ref = React.useRef<HTMLDivElement>(null);
  const textRef = React.useRef<HTMLDivElement>(null);
  const isInView = useInView(textRef, { once: true, margin: '-80px' });

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['-8%', '8%']);

  return (
    <section
      ref={ref}
      className={cn(
        'relative overflow-hidden',
        height === 'full' ? 'min-h-[85vh]' : 'min-h-[70vh]',
        className,
      )}
    >
      <motion.div className="absolute inset-0 will-change-transform" style={{ y }}>
        <Image src={image} alt={alt} fill sizes="100vw" className="object-cover" />
      </motion.div>

      <div
        className={cn(
          'absolute inset-0',
          overlay === 'dark' ? 'bg-ink/65' : 'bg-gradient-to-b from-ink/50 via-ink/40 to-ink/70',
        )}
      />
      <div className="pointer-events-none absolute inset-0 bg-brand-radial opacity-40" />

      <div
        ref={textRef}
        className="container-page relative z-10 flex min-h-[inherit] flex-col items-center justify-center py-24 text-center"
      >
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease }}
          className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-6xl xl:text-7xl text-balance"
        >
          {title}
        </motion.h2>
        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, ease, delay: 0.2 }}
            className="mt-6 max-w-2xl text-lg leading-relaxed text-white/60 sm:text-xl"
          >
            {subtitle}
          </motion.p>
        )}
      </div>
    </section>
  );
}
