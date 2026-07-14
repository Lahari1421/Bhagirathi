import * as React from 'react';
import { cn } from '@/lib/utils';

export function Container({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn('container-page', className)} {...props} />;
}

type SectionProps = React.HTMLAttributes<HTMLElement> & {
  as?: 'section' | 'div' | 'article';
};

export function Section({ className, as = 'section', ...props }: SectionProps) {
  const Comp = as;
  return <Comp className={cn('section', className)} {...props} />;
}

type SectionHeadingProps = {
  eyebrow?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  align?: 'left' | 'center';
  invert?: boolean;
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
  invert = false,
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        'max-w-3xl',
        align === 'center' && 'mx-auto text-center',
        className,
      )}
    >
      {eyebrow && (
        <span
          className={cn(
            'eyebrow',
            align === 'center' && 'justify-center',
            invert && 'text-aqua-light',
          )}
        >
          <span className={cn('h-px w-6', invert ? 'bg-aqua' : 'bg-brand-400')} />
          {eyebrow}
        </span>
      )}
      <h2
        className={cn(
          'mt-4 font-display text-3xl font-bold tracking-tight sm:text-4xl lg:text-[2.75rem] lg:leading-[1.08] text-balance',
          invert ? 'text-white' : 'text-ink',
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            'mt-5 text-lg leading-relaxed',
            invert ? 'text-white/70' : 'text-ink-500',
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
