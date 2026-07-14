'use client';

import * as React from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { cn } from '@/lib/utils';

const ease = [0.22, 1, 0.36, 1] as const;

type EmotionalCenterProps = {
  image: string;
  alt: string;
  heading: React.ReactNode;
  subtext?: string;
  className?: string;
};

export function EmotionalCenter({ image, alt, heading, subtext, className }: EmotionalCenterProps) {
  const ref = React.useRef<HTMLDivElement>(null);
  const textRef = React.useRef<HTMLDivElement>(null);
  const isInView = useInView(textRef, { once: true, margin: '-60px' });

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1.05, 1.15]);
  const warmOverlay = useTransform(scrollYProgress, [0.2, 0.6], [0, 0.15]);

  return (
    <section
      ref={ref}
      className={cn('relative flex min-h-[90vh] items-center justify-center overflow-hidden', className)}
    >
      <motion.div className="absolute inset-0 will-change-transform" style={{ scale }}>
        <Image src={image} alt={alt} fill sizes="100vw" className="object-cover" />
      </motion.div>

      <div className="absolute inset-0 bg-gradient-to-b from-ink/50 via-ink/35 to-ink/65" />
      <motion.div className="absolute inset-0 bg-amber-900/20 will-change-[opacity]" style={{ opacity: warmOverlay }} />

      <div className="pointer-events-none absolute left-1/4 top-1/3 h-96 w-96 rounded-full bg-gold/15 blur-[140px]" />
      <div className="pointer-events-none absolute right-1/4 bottom-1/4 h-80 w-80 rounded-full bg-amber-600/10 blur-[120px]" />

      <div ref={textRef} className="container-page relative z-10 py-24 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.2, ease }}
        >
          <h2 className="font-display text-[2.5rem] font-bold leading-[1.1] tracking-tight text-white sm:text-6xl lg:text-7xl xl:text-8xl">
            {heading}
          </h2>
        </motion.div>

        {subtext && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, ease, delay: 0.3 }}
            className="mx-auto mt-8 max-w-xl text-lg leading-relaxed text-white/55 sm:text-xl"
          >
            {subtext}
          </motion.p>
        )}
      </div>
    </section>
  );
}
