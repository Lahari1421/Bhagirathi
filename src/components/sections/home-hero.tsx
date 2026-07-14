'use client';

import * as React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight, Play, ShieldCheck, Globe2, Droplets } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { WaveDivider } from '@/components/ui/wave-divider';
import { whatsappLink } from '@/lib/site';
import { cn } from '@/lib/utils';

const ease = [0.22, 1, 0.36, 1] as const;

/** Rotating hero visuals — factory & product shots cross-fade like a slideshow. */
const HERO_SLIDES = [
  { src: '/images/bottling-line.jpg', alt: 'Automated water bottling production line' },
  { src: '/images/bottles-rows.jpg', alt: 'Rows of freshly filled water bottles' },
  { src: '/images/factory-interior.jpg', alt: 'Modern automated bottling facility interior' },
  { src: '/images/alkaline-pour.jpg', alt: 'Alkaline water poured into a glass' },
  { src: '/images/bottling-machinery.jpg', alt: 'Precision bottling line machinery' },
];

export function HomeHero() {
  const [active, setActive] = React.useState(0);

  React.useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const id = setInterval(() => setActive((i) => (i + 1) % HERO_SLIDES.length), 5000);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="water-caustics relative flex min-h-[100svh] items-center overflow-hidden bg-ink text-white">
      {/* Rotating background slideshow */}
      <div className="absolute inset-0">
        {HERO_SLIDES.map((slide, i) => (
          <Image
            key={slide.src}
            src={slide.src}
            alt={slide.alt}
            fill
            priority={i === 0}
            sizes="100vw"
            className={cn(
              'object-cover transition-opacity ease-in-out [transition-duration:1400ms] motion-safe:animate-[kenburns_9s_ease-in-out_infinite]',
              i === active ? 'opacity-100' : 'opacity-0',
            )}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/85 to-ink/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-ink/60" />
      </div>

      {/* Slide indicators */}
      <div className="absolute bottom-[92px] right-6 z-20 hidden items-center gap-2 lg:flex">
        {HERO_SLIDES.map((slide, i) => (
          <button
            key={slide.src}
            onClick={() => setActive(i)}
            aria-label={`Show slide ${i + 1}`}
            className={cn(
              'h-1.5 rounded-full transition-all duration-500',
              i === active ? 'w-8 bg-aqua' : 'w-3 bg-white/40 hover:bg-white/70',
            )}
          />
        ))}
      </div>

      {/* Ambient glows */}
      <div className="pointer-events-none absolute -left-40 top-1/3 h-[32rem] w-[32rem] animate-drift rounded-full bg-brand-500/25 blur-[140px]" />
      <div className="pointer-events-none absolute right-0 top-0 h-96 w-96 rounded-full bg-aqua/15 blur-[130px]" />
      <div className="pointer-events-none absolute inset-0 bg-ripple opacity-60" />

      <div className="container-page relative z-10 pt-28 pb-20">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease }}
            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-medium text-white/80 backdrop-blur"
          >
            <span className="flex h-2 w-2 rounded-full bg-aqua shadow-glow" />
            Export-ready manufacturer · BIS · FSSAI · ISO-aligned
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease, delay: 0.08 }}
            className="mt-6 font-display text-[2.6rem] font-bold leading-[1.05] tracking-tight text-balance sm:text-6xl lg:text-7xl"
          >
            Purity, engineered to <span className="text-gradient-light">global standards.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease, delay: 0.18 }}
            className="mt-6 max-w-xl text-lg leading-relaxed text-white/75"
          >
            Bhagirathi Industries is a premium manufacturer of packaged drinking water, alkaline &amp;
            mineral water, PET bottles and eco-friendly packaging — trusted by distributors,
            retailers and export partners in India and worldwide.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease, delay: 0.28 }}
            className="mt-9 flex flex-wrap items-center gap-3"
          >
            <Button asChild variant="water" size="lg">
              <Link href="/contact">
                Partner with us <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="light" size="lg">
              <Link href="/products">
                Explore products
              </Link>
            </Button>
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-1 inline-flex items-center gap-2 text-sm font-medium text-white/80 hover:text-white"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-white/5">
                <Play className="h-3.5 w-3.5 fill-current" />
              </span>
              Talk to our team
            </a>
          </motion.div>

          {/* Feature pills */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease, delay: 0.38 }}
            className="mt-12 grid max-w-2xl grid-cols-1 gap-4 sm:grid-cols-3"
          >
            {[
              { icon: Droplets, title: '9-stage purification', desc: 'RO · UV · ozone · minerals' },
              { icon: ShieldCheck, title: 'Certified quality', desc: 'BIS · FSSAI · ISO-aligned' },
              { icon: Globe2, title: 'Export-ready', desc: 'OEM & private label' },
            ].map((f) => (
              <div
                key={f.title}
                className="glass-dark rounded-2xl p-4 backdrop-blur-md"
              >
                <f.icon className="h-5 w-5 text-aqua" />
                <p className="mt-3 text-sm font-semibold text-white">{f.title}</p>
                <p className="text-xs text-white/60">{f.desc}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-[92px] left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-white/50 lg:flex">
        <span className="text-[0.65rem] font-medium uppercase tracking-[0.3em]">Scroll</span>
        <span className="h-10 w-px bg-gradient-to-b from-white/40 to-transparent" />
      </div>

      <WaveDivider className="text-white" height="md" />
    </section>
  );
}
