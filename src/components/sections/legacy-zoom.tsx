'use client';

import * as React from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { cn } from '@/lib/utils';

const ease = [0.22, 1, 0.36, 1] as const;

type LegacyZoomProps = {
  image: string;
  alt: string;
  heading: string;
  story: React.ReactNode;
  className?: string;
};

export function LegacyZoom({ image, alt, heading, story, className }: LegacyZoomProps) {
  const ref = React.useRef<HTMLDivElement>(null);
  const textRef = React.useRef<HTMLDivElement>(null);
  const isInView = useInView(textRef, { once: true, margin: '-80px' });

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);

  return (
    <section
      ref={ref}
      className={cn('relative overflow-hidden bg-ink py-24 sm:py-32 lg:py-40', className)}
    >
      <div className="container-page grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 1, ease }}
          className="relative overflow-hidden rounded-3xl lg:rounded-4xl"
        >
          <motion.div className="will-change-transform" style={{ scale }}>
            <Image
              src={image}
              alt={alt}
              width={720}
              height={820}
              className="h-full w-full object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </motion.div>
          <div className="absolute inset-0 bg-gradient-to-t from-ink/50 to-transparent" />
        </motion.div>

        <div ref={textRef}>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, ease }}
            className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-[2.6rem] lg:leading-[1.08] text-balance"
          >
            {heading}
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, ease, delay: 0.2 }}
            className="mt-7 space-y-5 text-base leading-relaxed text-white/65"
          >
            {story}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
