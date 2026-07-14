import * as React from 'react';
import { cn } from '@/lib/utils';

/**
 * Reveal system — visible by default, animated as progressive enhancement.
 *
 * These render plain elements that are fully visible with no JavaScript. The
 * client-side `RevealObserver` (mounted in the root layout) hides only the
 * elements that are off-screen and animates them in as they scroll into view.
 * If JS is disabled or hydration fails, all content simply stays visible.
 */

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  as?: 'div' | 'li' | 'span' | 'section' | 'article';
  style?: React.CSSProperties;
};

export function Reveal({ children, className, delay = 0, as = 'div', style }: RevealProps) {
  const Tag = as as React.ElementType;
  return (
    <Tag
      className={cn('reveal', className)}
      style={delay ? { transitionDelay: `${delay * 90}ms`, ...style } : style}
    >
      {children}
    </Tag>
  );
}

type RevealGroupProps = {
  children: React.ReactNode;
  className?: string;
};

/** Wraps children and applies a gentle stagger delay to each RevealItem. */
export function RevealGroup({ children, className }: RevealGroupProps) {
  return (
    <div className={className}>
      {React.Children.map(children, (child, i) =>
        React.isValidElement(child)
          ? React.cloneElement(child as React.ReactElement<RevealItemProps>, { _index: i })
          : child,
      )}
    </div>
  );
}

type RevealItemProps = {
  children: React.ReactNode;
  className?: string;
  /** Injected by RevealGroup for staggering. */
  _index?: number;
};

export function RevealItem({ children, className, _index = 0 }: RevealItemProps) {
  return (
    <div className={cn('reveal', className)} style={{ transitionDelay: `${(_index % 14) * 65}ms` }}>
      {children}
    </div>
  );
}
