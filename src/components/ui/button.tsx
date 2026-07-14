import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 select-none',
  {
    variants: {
      variant: {
        primary:
          'bg-brand-600 text-white shadow-soft hover:bg-brand-700 hover:shadow-card active:scale-[0.98]',
        water:
          'bg-[length:200%_auto] bg-gradient-to-r from-brand-600 via-aqua-deep to-brand-600 text-white shadow-glow hover:bg-right hover:shadow-card active:scale-[0.98] transition-[background-position,box-shadow,transform] duration-500',
        gold:
          'bg-gradient-to-r from-gold-deep via-gold to-gold-light text-ink shadow-gold hover:brightness-105 active:scale-[0.98]',
        dark: 'bg-ink text-white hover:bg-ink-700 active:scale-[0.98]',
        outline:
          'border border-ink/15 bg-white/60 text-ink backdrop-blur hover:border-brand-500 hover:text-brand-700',
        ghost: 'text-ink hover:bg-ink/5',
        light:
          'bg-white/10 text-white border border-white/20 backdrop-blur hover:bg-white/20',
        link: 'text-brand-700 underline-offset-4 hover:underline px-0',
      },
      size: {
        sm: 'h-9 px-4 text-sm',
        md: 'h-11 px-6 text-sm',
        lg: 'h-13 px-8 text-base py-3.5',
        xl: 'h-14 px-9 text-base',
        icon: 'h-11 w-11',
      },
    },
    defaultVariants: { variant: 'primary', size: 'md' },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';
    return (
      <Comp ref={ref} className={cn(buttonVariants({ variant, size, className }))} {...props} />
    );
  },
);
Button.displayName = 'Button';

export { Button, buttonVariants };
