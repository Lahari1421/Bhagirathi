import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: ['class'],
  content: [
    './src/pages/**/*.{ts,tsx}',
    './src/components/**/*.{ts,tsx}',
    './src/app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: '1.5rem',
      screens: { '2xl': '1360px' },
    },
    extend: {
      colors: {
        // Deep marine ink — primary dark surface
        ink: {
          DEFAULT: '#0A1B2A',
          50: '#eef3f7',
          100: '#d3e0ea',
          200: '#a7c1d5',
          300: '#6e93b0',
          400: '#3f6989',
          500: '#234863',
          600: '#173449',
          700: '#102638',
          800: '#0A1B2A',
          900: '#06121d',
          950: '#030a12',
        },
        // Bhagirathi brand — glacial teal / river blue
        brand: {
          DEFAULT: '#0E7C86',
          50: '#eafafb',
          100: '#c9f1f4',
          200: '#95e2e9',
          300: '#57ccd7',
          400: '#26adbc',
          500: '#118d9c',
          600: '#0E7C86',
          700: '#125c66',
          800: '#144a53',
          900: '#153e46',
          950: '#06272d',
        },
        // Aqua highlight for glows / gradients
        aqua: {
          DEFAULT: '#38D0E0',
          light: '#7EE8F2',
          deep: '#0FA3B1',
        },
        // Premium copper / gold accent
        gold: {
          DEFAULT: '#C79A4B',
          light: '#E4C787',
          deep: '#A67C2E',
        },
        // shadcn-style semantic tokens
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
        display: ['var(--font-display)', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        '7xl': ['4.5rem', { lineHeight: '1.02', letterSpacing: '-0.03em' }],
        '8xl': ['6rem', { lineHeight: '0.98', letterSpacing: '-0.035em' }],
        '9xl': ['8rem', { lineHeight: '0.95', letterSpacing: '-0.04em' }],
      },
      borderRadius: {
        lg: '0.75rem',
        xl: '1rem',
        '2xl': '1.5rem',
        '3xl': '2rem',
        '4xl': '2.5rem',
      },
      boxShadow: {
        soft: '0 2px 20px -6px rgba(10, 27, 42, 0.12)',
        card: '0 24px 60px -22px rgba(10, 27, 42, 0.28)',
        glow: '0 0 60px -12px rgba(56, 208, 224, 0.45)',
        gold: '0 0 40px -10px rgba(199, 154, 75, 0.5)',
      },
      backgroundImage: {
        'grid-fade':
          'linear-gradient(to right, rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.06) 1px, transparent 1px)',
        'brand-radial':
          'radial-gradient(1200px 600px at 50% -20%, rgba(56,208,224,0.18), transparent 60%)',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        float: {
          '0%,100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        caustic: {
          '0%,100%': { backgroundPosition: '0% 0%' },
          '50%': { backgroundPosition: '100% 0%' },
        },
        drift: {
          '0%,100%': { transform: 'translateX(0) translateY(0)' },
          '50%': { transform: 'translateX(-14px) translateY(-8px)' },
        },
        'marquee': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.7s cubic-bezier(0.22,1,0.36,1) both',
        shimmer: 'shimmer 2.5s linear infinite',
        float: 'float 6s ease-in-out infinite',
        marquee: 'marquee 40s linear infinite',
        'accordion-down': 'accordion-down 0.25s ease-out',
        'accordion-up': 'accordion-up 0.25s ease-out',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};

export default config;
