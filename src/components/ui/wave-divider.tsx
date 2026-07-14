import { cn } from '@/lib/utils';

type WaveDividerProps = {
  /** Position within the parent (parent must be `relative`). */
  position?: 'bottom' | 'top';
  /** Sets the wave fill via text color, e.g. `text-white`, `text-ink`. */
  className?: string;
  /** Height of the wave band. */
  height?: 'sm' | 'md' | 'lg';
};

const heights = {
  sm: 'h-8 sm:h-12',
  md: 'h-12 sm:h-[70px]',
  lg: 'h-16 sm:h-24',
};

/**
 * A layered SVG wave used to transition between adjacent section colours,
 * reinforcing the water theme. The visible crest is a soft aqua ripple; the
 * solid base takes the current text colour (set the next section's colour).
 */
export function WaveDivider({ position = 'bottom', className, height = 'md' }: WaveDividerProps) {
  return (
    <div
      aria-hidden
      className={cn(
        'pointer-events-none absolute inset-x-0 z-10 w-full overflow-hidden leading-[0]',
        position === 'bottom' ? 'bottom-0' : 'top-0 rotate-180',
        className,
      )}
    >
      <svg
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
        className={cn('w-full', heights[height])}
      >
        {/* soft ripple accents */}
        <path
          fill="currentColor"
          fillOpacity="0.18"
          d="M0,72 C220,20 420,116 660,80 C900,44 1080,112 1260,88 C1350,76 1400,64 1440,60 L1440,120 L0,120 Z"
        />
        <path
          fill="currentColor"
          fillOpacity="0.4"
          d="M0,88 C200,48 400,120 640,96 C880,72 1080,120 1280,100 C1360,92 1410,86 1440,84 L1440,120 L0,120 Z"
        />
        {/* solid base = next section colour */}
        <path
          fill="currentColor"
          d="M0,102 C240,72 480,120 720,106 C960,92 1200,120 1440,104 L1440,120 L0,120 Z"
        />
      </svg>
    </div>
  );
}
