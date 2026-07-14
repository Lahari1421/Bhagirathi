import Link from 'next/link';
import { ArrowLeft, Home } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function NotFound() {
  return (
    <section className="relative flex min-h-[80vh] items-center justify-center overflow-hidden bg-ink px-6 pt-[72px] text-center text-white">
      <div className="pointer-events-none absolute inset-0 bg-brand-radial opacity-70" />
        <div className="pointer-events-none absolute inset-0 bg-ripple opacity-60" />
      <div className="pointer-events-none absolute -left-32 top-1/4 h-96 w-96 rounded-full bg-brand-500/20 blur-[130px]" />
      <div className="relative">
        <p className="font-display text-8xl font-bold text-gradient-light">404</p>
        <h1 className="mt-4 font-display text-3xl font-bold">This page has evaporated</h1>
        <p className="mx-auto mt-4 max-w-md text-white/70">
          The page you&apos;re looking for doesn&apos;t exist or has moved. Let&apos;s get you back on
          track.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Button asChild variant="water" size="lg">
            <Link href="/">
              <Home className="h-4 w-4" /> Back to home
            </Link>
          </Button>
          <Button asChild variant="light" size="lg">
            <Link href="/products">
              <ArrowLeft className="h-4 w-4" /> Browse products
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
