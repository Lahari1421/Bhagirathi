'use client';

import * as React from 'react';

/**
 * Mounted once in the root layout. Hides only off-screen `.reveal` elements and
 * animates them in as they enter the viewport. Elements already in view are left
 * untouched (no flash), and if this never runs, all content remains visible.
 */
export function RevealObserver() {
  React.useEffect(() => {
    if (typeof window === 'undefined') return;

    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce || !('IntersectionObserver' in window)) return;

    const vh = window.innerHeight;
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            io.unobserve(entry.target);
          }
        }
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.08 },
    );

    const process = () => {
      const els = document.querySelectorAll<HTMLElement>('.reveal:not(.is-visible):not(.reveal-hidden)');
      els.forEach((el) => {
        const rect = el.getBoundingClientRect();
        const inView = rect.top < vh * 0.92 && rect.bottom > 0;
        if (inView) {
          // Already visible on load — leave as-is, no animation, no flash.
          el.classList.add('is-visible');
        } else {
          el.classList.add('reveal-hidden');
          io.observe(el);
        }
      });
    };

    process();
    // Catch any elements added shortly after hydration.
    const raf = requestAnimationFrame(process);

    return () => {
      cancelAnimationFrame(raf);
      io.disconnect();
    };
  }, []);

  return null;
}
