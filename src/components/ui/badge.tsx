import * as React from 'react';
import { cn } from '@/lib/utils';

type BadgeProps = React.HTMLAttributes<HTMLSpanElement> & {
  tone?: 'brand' | 'neutral' | 'gold' | 'light' | 'success';
};

const tones: Record<NonNullable<BadgeProps['tone']>, string> = {
  brand: 'bg-brand-50 text-brand-700 ring-1 ring-brand-100',
  neutral: 'bg-ink/5 text-ink-600 ring-1 ring-ink/10',
  gold: 'bg-gold/10 text-gold-deep ring-1 ring-gold/20',
  light: 'bg-white/10 text-white ring-1 ring-white/20',
  success: 'bg-emerald-50 text-emerald-700 ring-1 ring-emerald-100',
};

export function Badge({ className, tone = 'brand', ...props }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold',
        tones[tone],
        className,
      )}
      {...props}
    />
  );
}
