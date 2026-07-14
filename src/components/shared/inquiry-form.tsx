'use client';

import * as React from 'react';
import { CheckCircle2, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const inquiryTypes = [
  'General enquiry',
  'Request a quote',
  'Distributor / dealer',
  'OEM / private label',
  'Export enquiry',
  'Vendor registration',
] as const;

type InquiryFormProps = {
  compact?: boolean;
  defaultType?: (typeof inquiryTypes)[number];
  productContext?: string;
};

const inputBase =
  'w-full rounded-xl border border-ink/15 bg-white px-4 py-3 text-sm text-ink placeholder:text-ink-300 outline-none transition-colors focus:border-brand-500 focus:ring-2 focus:ring-brand-100';

/**
 * Client-side inquiry form. This is a front-end demo: on submit it validates
 * and shows a success state. Wire the `onSubmit` handler to your CRM / email
 * service (e.g. a Next.js route handler) before going live.
 */
export function InquiryForm({ compact = false, defaultType = 'Request a quote', productContext }: InquiryFormProps) {
  const [status, setStatus] = React.useState<'idle' | 'submitting' | 'success'>('idle');
  const [error, setError] = React.useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    const form = e.currentTarget;
    const data = new FormData(form);
    if (!data.get('name') || !data.get('email') || !data.get('message')) {
      setError('Please complete the required fields.');
      return;
    }
    setStatus('submitting');
    // Simulate async submission. Replace with a real API call.
    await new Promise((r) => setTimeout(r, 1100));
    setStatus('success');
    form.reset();
  }

  if (status === 'success') {
    return (
      <div className="flex flex-col items-center rounded-3xl border border-emerald-200 bg-emerald-50/60 p-10 text-center">
        <CheckCircle2 className="h-12 w-12 text-emerald-600" />
        <h3 className="mt-4 font-display text-xl font-bold text-ink">Thank you — enquiry received</h3>
        <p className="mt-2 max-w-md text-sm text-ink-500">
          Our team will get back to you shortly. For an immediate response, message us on WhatsApp
          and we&apos;ll pick up right away.
        </p>
        <Button className="mt-6" variant="outline" onClick={() => setStatus('idle')}>
          Send another enquiry
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-4" noValidate>
      {productContext && (
        <input type="hidden" name="product" value={productContext} readOnly />
      )}
      <div className={cn('grid gap-4', !compact && 'sm:grid-cols-2')}>
        <Field label="Full name" required>
          <input name="name" className={inputBase} placeholder="Your name" autoComplete="name" />
        </Field>
        <Field label="Company">
          <input name="company" className={inputBase} placeholder="Company / brand" autoComplete="organization" />
        </Field>
      </div>
      <div className={cn('grid gap-4', !compact && 'sm:grid-cols-2')}>
        <Field label="Email" required>
          <input name="email" type="email" className={inputBase} placeholder="you@company.com" autoComplete="email" />
        </Field>
        <Field label="Phone / WhatsApp">
          <input name="phone" className={inputBase} placeholder="+91 …" autoComplete="tel" />
        </Field>
      </div>
      <div className={cn('grid gap-4', !compact && 'sm:grid-cols-2')}>
        <Field label="Enquiry type">
          <select name="type" defaultValue={defaultType} className={cn(inputBase, 'appearance-none')}>
            {inquiryTypes.map((t) => (
              <option key={t}>{t}</option>
            ))}
          </select>
        </Field>
        <Field label="Country / region">
          <input name="region" className={inputBase} placeholder="e.g. India, UAE, Singapore" />
        </Field>
      </div>
      <Field label="Your requirement" required>
        <textarea
          name="message"
          rows={compact ? 3 : 4}
          className={cn(inputBase, 'resize-none')}
          placeholder="Tell us about products, volumes, formats, target markets and timelines…"
        />
      </Field>

      {error && <p className="text-sm font-medium text-red-600">{error}</p>}

      <Button type="submit" size="lg" disabled={status === 'submitting'} className="mt-1 w-full sm:w-auto">
        {status === 'submitting' ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" /> Sending…
          </>
        ) : (
          'Submit enquiry'
        )}
      </Button>
      <p className="text-xs text-ink-400">
        By submitting, you agree to be contacted about your enquiry. We respect your privacy and do
        not share your details.
      </p>
    </form>
  );
}

function Field({
  label,
  required,
  children,
}: {
  label: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-ink-500">
        {label} {required && <span className="text-brand-600">*</span>}
      </span>
      {children}
    </label>
  );
}
