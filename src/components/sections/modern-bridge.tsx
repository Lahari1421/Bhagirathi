'use client';

import * as React from 'react';
import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Container } from '@/components/ui/section';

const ease = [0.22, 1, 0.36, 1] as const;

export function ModernBridge() {
  const ref = React.useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section className="relative overflow-hidden bg-ink py-32 sm:py-40">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-ink via-ink-700 to-ink" />
        <div className="pointer-events-none absolute inset-0 bg-brand-radial opacity-50" />
        <div className="pointer-events-none absolute inset-0 bg-ripple opacity-40" />
      </div>

      <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <motion.div
          animate={{ scale: [1, 2.5, 1], opacity: [0.3, 0, 0.3] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          className="h-40 w-40 rounded-full border border-aqua/20"
        />
        <motion.div
          animate={{ scale: [1, 2, 1], opacity: [0.2, 0, 0.2] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
          className="absolute inset-0 h-40 w-40 rounded-full border border-aqua/15"
        />
        <motion.div
          animate={{ scale: [1, 1.8, 1], opacity: [0.15, 0, 0.15] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
          className="absolute inset-0 h-40 w-40 rounded-full border border-aqua/10"
        />
      </div>

      <div className="pointer-events-none absolute -left-40 top-1/3 h-[28rem] w-[28rem] rounded-full bg-brand-500/20 blur-[160px]" />
      <div className="pointer-events-none absolute -right-40 bottom-1/4 h-[24rem] w-[24rem] rounded-full bg-aqua/15 blur-[140px]" />

      <Container className="relative z-10 text-center">
        <div ref={ref}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, ease }}
          >
            <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-2 text-xs font-medium uppercase tracking-[0.25em] text-white/60 backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-aqua shadow-glow" />
              From Ancient Purpose to Modern Promise
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, ease, delay: 0.15 }}
            className="mx-auto mt-8 max-w-4xl font-display text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl xl:text-6xl"
          >
            That timeless legacy became{' '}
            <span className="text-gradient-light">the seed of a dream.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, ease, delay: 0.3 }}
            className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-white/55"
          >
            Bhagirathi Industries was born from a simple belief — that the purity
            Bhagiratha fought for should reach every home, every family, every generation.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, ease, delay: 0.45 }}
            className="mt-10"
          >
            <Button asChild variant="water" size="lg">
              <Link href="/about">
                Discover our company <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
