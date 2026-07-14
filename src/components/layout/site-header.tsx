'use client';

import * as React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronDown, Menu, X, ArrowRight, Phone } from 'lucide-react';
import { primaryNav, site, whatsappLink } from '@/lib/site';
import { Logo } from '@/components/ui/logo';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export function SiteHeader() {
  const [scrolled, setScrolled] = React.useState(false);
  const [open, setOpen] = React.useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const pathname = usePathname();

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  React.useEffect(() => {
    setMobileOpen(false);
    setOpen(null);
  }, [pathname]);

  React.useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-500',
        scrolled || mobileOpen
          ? 'border-b border-ink/10 bg-white/80 backdrop-blur-xl shadow-soft'
          : 'bg-transparent',
      )}
      onMouseLeave={() => setOpen(null)}
    >
      <div className="container-page flex h-[72px] items-center justify-between gap-4">
        <Link href="/" aria-label={`${site.name} home`} className="relative z-10">
          <Logo invert={!scrolled && !mobileOpen} />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
          {primaryNav.map((item) => {
            const active = pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href));
            const hasChildren = 'children' in item && item.children;
            return (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => setOpen(hasChildren ? item.label : null)}
              >
                <Link
                  href={item.href}
                  className={cn(
                    'flex items-center gap-1 rounded-full px-4 py-2 text-sm font-medium transition-colors',
                    scrolled
                      ? active
                        ? 'text-brand-700'
                        : 'text-ink-600 hover:text-ink'
                      : active
                        ? 'text-white'
                        : 'text-white/80 hover:text-white',
                  )}
                >
                  {item.label}
                  {hasChildren && (
                    <ChevronDown
                      className={cn(
                        'h-3.5 w-3.5 transition-transform duration-300',
                        open === item.label && 'rotate-180',
                      )}
                    />
                  )}
                </Link>

                {hasChildren && (
                  <AnimatePresence>
                    {open === item.label && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
                        className="absolute left-1/2 top-full w-[440px] -translate-x-1/2 pt-3"
                      >
                        <div className="overflow-hidden rounded-2xl border border-ink/10 bg-white p-2 shadow-card">
                          {item.children.map((child) => (
                            <Link
                              key={child.href}
                              href={child.href}
                              className="group flex items-start gap-3 rounded-xl p-3 transition-colors hover:bg-brand-50/70"
                            >
                              <span className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-brand-50 text-brand-600 transition-colors group-hover:bg-brand-600 group-hover:text-white">
                                <ArrowRight className="h-4 w-4" />
                              </span>
                              <span>
                                <span className="block text-sm font-semibold text-ink">
                                  {child.label}
                                </span>
                                <span className="mt-0.5 block text-xs leading-relaxed text-ink-500">
                                  {child.desc}
                                </span>
                              </span>
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            );
          })}
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <a
            href={`tel:+${site.phoneHref}`}
            className={cn(
              'flex items-center gap-2 rounded-full px-3 py-2 text-sm font-medium transition-colors',
              scrolled ? 'text-ink-600 hover:text-brand-700' : 'text-white/80 hover:text-white',
            )}
          >
            <Phone className="h-4 w-4" />
            {site.phoneDisplay}
          </a>
          <Button asChild variant={scrolled ? 'primary' : 'light'} size="md">
            <Link href="/contact">Get a Quote</Link>
          </Button>
        </div>

        {/* Mobile toggle */}
        <button
          className={cn(
            'relative z-10 flex h-11 w-11 items-center justify-center rounded-full lg:hidden',
            scrolled || mobileOpen ? 'text-ink' : 'text-white',
          )}
          onClick={() => setMobileOpen((v) => !v)}
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 top-[72px] z-40 overflow-y-auto bg-white lg:hidden"
          >
            <nav className="container-page flex flex-col gap-1 py-6" aria-label="Mobile">
              {primaryNav.map((item) => (
                <MobileNavItem key={item.label} item={item} />
              ))}
              <div className="mt-6 flex flex-col gap-3">
                <Button asChild variant="primary" size="lg">
                  <Link href="/contact">Get a Quote</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <a href={whatsappLink()} target="_blank" rel="noopener noreferrer">
                    Chat on WhatsApp
                  </a>
                </Button>
                <a
                  href={`tel:+${site.phoneHref}`}
                  className="mt-2 flex items-center justify-center gap-2 text-sm font-medium text-ink-600"
                >
                  <Phone className="h-4 w-4" /> {site.phoneDisplay}
                </a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

function MobileNavItem({ item }: { item: (typeof primaryNav)[number] }) {
  const [expanded, setExpanded] = React.useState(false);
  const hasChildren = 'children' in item && item.children;

  return (
    <div className="border-b border-ink/5">
      <div className="flex items-center justify-between">
        <Link href={item.href} className="flex-1 py-3.5 text-lg font-semibold text-ink">
          {item.label}
        </Link>
        {hasChildren && (
          <button
            onClick={() => setExpanded((v) => !v)}
            className="p-3 text-ink-500"
            aria-label={`Toggle ${item.label} submenu`}
          >
            <ChevronDown className={cn('h-5 w-5 transition-transform', expanded && 'rotate-180')} />
          </button>
        )}
      </div>
      <AnimatePresence>
        {hasChildren && expanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <div className="flex flex-col gap-1 pb-3 pl-3">
              {item.children!.map((child) => (
                <Link
                  key={child.href}
                  href={child.href}
                  className="rounded-lg py-2.5 pl-3 text-[15px] text-ink-600 hover:text-brand-700"
                >
                  {child.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
