'use client';

import * as React from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { WaveDivider } from '@/components/ui/wave-divider';

const ease = [0.22, 1, 0.36, 1] as const;

interface CinematicHeroProps {
  badge?: string;
  title?: React.ReactNode;
  subtitle?: string;
}

export function CinematicHero({
  badge = 'A Legacy of Purpose',
  title = (
    <>
      Every great journey begins{' '}
      <span className="text-gradient-light">with a purpose.</span>
    </>
  ),
  subtitle = 'A story that has inspired generations.',
}: CinematicHeroProps) {
  const ref = React.useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.25]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const overlayOpacity = useTransform(scrollYProgress, [0, 0.5], [0.55, 0.8]);

  return (
    <section
      ref={ref}
      className="relative flex min-h-[100svh] items-center justify-center overflow-hidden bg-ink"
    >
      <motion.div className="absolute inset-0 will-change-transform" style={{ scale }}>
        <Image
          src="/images/story/1.png"
          alt="Himalayan mountains with King Bhagiratha in prayer"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </motion.div>

      <motion.div
        className="absolute inset-0 bg-ink will-change-[opacity]"
        style={{ opacity: overlayOpacity }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/30 to-transparent" />

      <div className="pointer-events-none absolute -left-40 top-1/3 h-[32rem] w-[32rem] animate-drift rounded-full bg-brand-500/20 blur-[160px]" />
      <div className="pointer-events-none absolute right-0 top-0 h-96 w-96 rounded-full bg-aqua/10 blur-[140px]" />

      <motion.div
        className="container-page relative z-10 pt-28 pb-24 text-center"
        style={{ y: textY, opacity: textOpacity }}
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease, delay: 0.3 }}
          className="mx-auto max-w-4xl"
        >
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease, delay: 0.5 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-2 text-xs font-medium uppercase tracking-[0.25em] text-white/70 backdrop-blur"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-aqua shadow-glow" />
            {badge}
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease, delay: 0.6 }}
            className="mt-6 font-display text-[2.5rem] font-bold leading-[1.08] tracking-tight text-white sm:text-6xl lg:text-7xl xl:text-8xl"
          >
            {title}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease, delay: 0.85 }}
            className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-white/65 sm:text-xl"
          >
            {subtitle}
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.4 }}
          className="mt-16 flex flex-col items-center gap-3"
        >
          <span className="text-[0.6rem] font-medium uppercase tracking-[0.35em] text-white/40">
            Scroll to discover
          </span>
          <motion.span
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            className="h-12 w-px bg-gradient-to-b from-white/40 to-transparent"
          />
        </motion.div>
      </motion.div>

      <WaveDivider className="text-white" height="md" />
    </section>
  );
}
