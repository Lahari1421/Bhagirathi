import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Container } from '@/components/ui/section';
import { Button } from '@/components/ui/button';
import { whatsappLink } from '@/lib/site';

type CtaBandProps = {
  title?: string;
  description?: string;
  primaryLabel?: string;
  primaryHref?: string;
};

/** Reusable conversion band for the bottom of interior pages. */
export function CtaBand({
  title = 'Let’s talk about your requirement',
  description = 'Whether you need retail supply, bulk jars, OEM / private-label or export programmes — our team will respond with clear options and timelines.',
  primaryLabel = 'Request a Quote',
  primaryHref = '/contact',
}: CtaBandProps) {
  return (
    <section className="section">
      <Container>
        <div className="water-caustics relative overflow-hidden rounded-4xl bg-ink px-8 py-16 text-white sm:px-14 lg:px-20 lg:py-20">
          <div className="pointer-events-none absolute inset-0 bg-brand-radial opacity-70" />
          <div className="pointer-events-none absolute inset-0 bg-ripple opacity-70" />
          <div className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 animate-drift rounded-full bg-brand-500/25 blur-[120px]" />
          <div className="pointer-events-none absolute -bottom-32 -left-16 h-80 w-80 rounded-full bg-aqua/10 blur-[120px]" />
          <div className="relative max-w-2xl">
            <h2 className="font-display text-3xl font-bold tracking-tight text-balance sm:text-4xl lg:text-[2.75rem] lg:leading-[1.08]">
              {title}
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-white/70">{description}</p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Button asChild variant="water" size="lg">
                <Link href={primaryHref}>
                  {primaryLabel} <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="light" size="lg">
                <a href={whatsappLink()} target="_blank" rel="noopener noreferrer">
                  WhatsApp Us
                </a>
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
