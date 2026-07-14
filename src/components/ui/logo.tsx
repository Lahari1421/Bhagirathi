import * as React from 'react';
import { cn } from '@/lib/utils';

/** Brand mark — a stylised water droplet with a river/flow motif. */
export function LogoMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" fill="none" className={className} aria-hidden="true">
      <defs>
        <linearGradient id="bhg-drop" x1="8" y1="2" x2="32" y2="38" gradientUnits="userSpaceOnUse">
          <stop stopColor="#7EE8F2" />
          <stop offset="0.5" stopColor="#38D0E0" />
          <stop offset="1" stopColor="#0E7C86" />
        </linearGradient>
      </defs>
      <path
        d="M20 2C20 2 6 17 6 26a14 14 0 0 0 28 0C34 17 20 2 20 2Z"
        fill="url(#bhg-drop)"
      />
      <path
        d="M13 27c3-1.5 4.5 1.5 7 0s4-1.5 7 0"
        stroke="white"
        strokeWidth="1.8"
        strokeLinecap="round"
        opacity="0.9"
      />
      <path
        d="M13 22c3-1.5 4.5 1.5 7 0s4-1.5 7 0"
        stroke="white"
        strokeWidth="1.8"
        strokeLinecap="round"
        opacity="0.55"
      />
    </svg>
  );
}

export function Logo({ className, invert = false }: { className?: string; invert?: boolean }) {
  return (
    <span className={cn('inline-flex items-center gap-2.5', className)}>
      <LogoMark className="h-9 w-9 shrink-0 drop-shadow-sm" />
      <span className="flex flex-col leading-none">
        <span
          className={cn(
            'font-display text-[1.05rem] font-bold tracking-tight',
            invert ? 'text-white' : 'text-ink',
          )}
        >
          Bhagirathi
        </span>
        <span
          className={cn(
            'text-[0.62rem] font-semibold uppercase tracking-[0.28em]',
            invert ? 'text-aqua-light' : 'text-brand-600',
          )}
        >
          Industries
        </span>
      </span>
    </span>
  );
}
