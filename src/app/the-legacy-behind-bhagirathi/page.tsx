import type { Metadata } from 'next';
import Image from 'next/image';
import { CinematicHero } from '@/components/sections/cinematic-hero';
import { StorySplit } from '@/components/sections/story-split';
import { Logo } from '@/components/ui/logo';
import { Container, Section } from '@/components/ui/section';
import { Reveal } from '@/components/ui/reveal';
import { WaveDivider } from '@/components/ui/wave-divider';
import { buildMetadata } from '@/lib/seo';

export const metadata: Metadata = buildMetadata({
  title: 'The Legacy Behind Bhagirathi — Bhagirathi Industries',
  description:
    'From the ancient purpose of King Bhagiratha to a modern mission of purity — discover the mythological legacy that inspires Bhagirathi Industries.',
  path: '/the-legacy-behind-bhagirathi',
});

export default function TheLegacyBehindBhagirathiPage() {
  return (
    <>
      {/* ─── SECTION 1 — Our Legacy (Hero) ────────────────────── */}
      <CinematicHero
        badge="Our Legacy"
        title={
          <>
            The Legacy Behind{' '}
            <span className="text-gradient-light">Bhagirathi.</span>
          </>
        }
        subtitle="Inspired by Purpose. Guided by Love. Dedicated to the Future."
      />

      {/* ─── SECTION 2 — The Origin of Our Purpose ────────────── */}
      <section className="relative overflow-hidden bg-white py-10 sm:py-12 lg:py-16">
        <div className="pointer-events-none absolute -right-32 top-1/4 h-[28rem] w-[28rem] rounded-full bg-brand-100/30 blur-[160px]" />
        <div className="pointer-events-none absolute -left-24 bottom-1/4 h-64 w-64 rounded-full bg-aqua/10 blur-[120px]" />

        <Container className="relative z-10">
          <Reveal>
            <div className="mx-auto max-w-4xl text-center">
              <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-ink/10 bg-muted/50 px-5 py-2 text-xs font-medium uppercase tracking-[0.25em] text-ink/60">
                <span className="h-1.5 w-1.5 rounded-full bg-brand-500" />
                The Origin of Our Purpose
              </span>

              <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl lg:text-5xl text-balance">
                Every purpose has a{' '}
                <span className="text-gradient">beginning.</span>
              </h2>

              <p className="mx-auto mt-5 max-w-3xl text-lg leading-relaxed text-ink-500">
                Ours began with a king&apos;s devotion, a mother&apos;s love, and a
                child&apos;s future — values that would one day give birth to
                Bhagirathi Industries.
              </p>
            </div>
          </Reveal>
        </Container>

        <WaveDivider className="text-ink" position="bottom" height="md" />
      </section>

      {/* ─── SECTION 3 — King Bhagiratha (Image 2) ────────────── */}
      <StorySplit
        image="/images/story/2.png"
        alt="Bhagiratha deep in meditation, devoted to bringing purity to the world"
        eyebrow="The Devotion"
        heading="A king who chose prayer over power."
        imagePosition="right"
        className="py-12 sm:py-16 lg:py-20"
        imageClassName="max-h-[420px] lg:max-h-[480px]"
      >
        <p>
          King Bhagiratha was not like other rulers. While others chased conquest,
          he pursued something far greater — the purification of life itself.
        </p>
        <p>
          Through years of unwavering penance, he sought the descent of the sacred
          Ganga from the heavens to the Earth, knowing her waters would transform
          the lives of countless generations.
        </p>
        <p>
          It was this selfless devotion — this refusal to accept the world as it
          was — that would ultimately change the course of human civilisation.
        </p>
      </StorySplit>

      {/* ─── SECTION 4 — Gift of Purity (Image 3) ─────────────── */}
      <StorySplit
        image="/images/story/3.png"
        alt="The sacred Ganga descending through the heavens, received by Lord Shiva"
        eyebrow="The Gift"
        heading="The Gift That Changed Humanity"
        imagePosition="left"
        className="py-12 sm:py-16 lg:py-20"
        imageClassName="max-h-[420px] lg:max-h-[480px]"
      >
        <p>
          The Ganga was not merely water sent to Earth. She was a sacred gift — a
          divine promise that purity would once again flow through the lives of
          humanity.
        </p>
        <p>
          Through Lord Shiva&apos;s grace, the heavens answered Bhagiratha&apos;s
          prayer. The waters descended with purpose, carrying the power to cleanse,
          heal, and transform every life they touched.
        </p>
        <p>
          This was the moment purity returned to the world. A gift that would echo
          through millennia — and ultimately inspire the mission behind Bhagirathi
          Industries.
        </p>
      </StorySplit>

      {/* ─── SECTION 5 — The Sacred Values ────────────────────── */}
      <StorySplit
        image="/images/story/4.png"
        alt="Bhagiratha guiding the sacred Ganga to the people"
        eyebrow="The Sacred Values"
        heading={
          <>
            The values she{' '}
            <span className="text-gradient">represents.</span>
          </>
        }
        imagePosition="right"
        className="py-12 sm:py-16 lg:py-20"
        imageClassName="max-h-[420px] lg:max-h-[480px]"
      >
        <p>
          The Ganga was never merely water. She was — and remains — a
          symbol of something far greater.
        </p>
        <p>
          For thousands of years, she has represented the purest values
          humanity has known. Purity. Trust. Compassion. Hope. Life.
        </p>
        <p>
          King Bhagiratha&apos;s devotion brought those values to Earth.
          And centuries later, those same values would inspire a family to
          carry them forward — into every bottle, every home, every life.
        </p>
      </StorySplit>

      {/* ─── SECTION 6 — Mother's Love (Image 6) ──────────────── */}
      <StorySplit
        image="/images/story/6.png"
        alt="A mother lovingly giving water to her child"
        eyebrow="The Inspiration"
        heading={
          <>
            A Mother&apos;s{' '}
            <span className="text-gradient">Unconditional Love.</span>
          </>
        }
        imagePosition="left"
        className="py-12 sm:py-16 lg:py-20"
        imageClassName="max-h-[420px] lg:max-h-[480px]"
      >
        <p>
          A mother&apos;s love needs no words. It lives in the care she takes
          with every glass she pours, the protection she ensures with every
          sip, and the quiet devotion she gives to her child&apos;s health
          and wellbeing.
        </p>
        <p>
          For a mother, purity is never abstract. It is the clean water she
          places in her child&apos;s hands. It is the trust she carries that
          nothing but the best will ever reach them. It is love — measured
          not in words, but in every drop.
        </p>
        <p>
          Those values became our foundation. That love became our purpose.
          And its legacy lives in every bottle of Dr. Liv we produce today —
          a tribute to the selfless devotion of Chandrakala, whose unwavering
          care inspired everything we stand for.
        </p>
      </StorySplit>

      {/* ─── SECTION 7 — Promise to Future Generations (Image 7) ─ */}
      <Section className="py-12 sm:py-16 lg:py-20">
        <Container>
          <Reveal>
            <div className="group overflow-hidden rounded-3xl border border-ink/5 bg-white shadow-card transition-all duration-500 hover:-translate-y-1 hover:shadow-lg sm:rounded-4xl">
              <div className="grid items-center gap-8 p-6 sm:p-8 lg:grid-cols-2 lg:gap-12 lg:p-12">
                <div className="relative max-h-[360px] overflow-hidden rounded-2xl lg:max-h-[420px]">
                  <Image
                    src="/images/story/7.png"
                    alt="A father holding his son, watching the future with hope"
                    width={720}
                    height={820}
                    className="h-full w-full object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>

                <div>
                  <span className="eyebrow">
                    <span className="h-px w-6 bg-brand-400" />
                    The Legacy
                  </span>
                  <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl lg:text-[2.6rem] lg:leading-[1.08] text-balance">
                    A Promise to Future Generations
                  </h2>
                  <div className="mt-6 space-y-3 text-base leading-relaxed text-ink-500">
                    <p>
                      When we look at the children who will inherit this world,
                      we see every reason to pursue perfection — because the
                      future deserves nothing less than our very best.
                    </p>
                    <p>
                      This company was not built for profit alone. It was built
                      because a mother taught us that water is life — and life
                      deserves nothing less than purity.
                    </p>
                    <p>
                      Every bottle we seal, every process we validate, every
                      standard we uphold is a promise to every child who will
                      depend on clean water for generations to come — inspired
                      by the future we envision for Agastya Aarav.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </Container>
      </Section>

      {/* ─── SECTION 8 — Bhagirathi Industries Is Born ────────── */}
      <Section className="relative overflow-hidden bg-white py-12 sm:py-16 lg:py-20">
        <div className="pointer-events-none absolute -right-32 top-1/4 h-[28rem] w-[28rem] rounded-full bg-brand-100/30 blur-[160px]" />
        <div className="pointer-events-none absolute -left-24 bottom-1/4 h-64 w-64 rounded-full bg-aqua/10 blur-[120px]" />

        <Container className="relative z-10">
          <Reveal>
            <div className="mx-auto max-w-4xl text-center">
              <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-ink/10 bg-muted/50 px-5 py-2 text-xs font-medium uppercase tracking-[0.25em] text-ink/60">
                <span className="h-1.5 w-1.5 rounded-full bg-brand-500" />
                Our Birth
              </span>

              <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl lg:text-5xl text-balance">
                Bhagirathi Industries is{' '}
                <span className="text-gradient">born.</span>
              </h2>

              <p className="mx-auto mt-5 max-w-3xl text-lg leading-relaxed text-ink-500">
                Inspired by the eternal purpose of King Bhagiratha, the sacred
                duty of Mother Chandrakala, and the future of Agastya Aarav —
                Bhagirathi Industries was born to deliver purity to every Indian
                household.
              </p>

              <div className="mx-auto mt-8 flex justify-center">
                <Logo className="scale-125" />
              </div>
            </div>
          </Reveal>
        </Container>
      </Section>

      {/* ─── SECTION 9 — The Birth of Dr. Liv ─────────────────── */}
      <Section className="py-10 sm:py-12 lg:py-16">
        <Container>
          <Reveal>
            <div className="mx-auto max-w-4xl text-center">
              <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-ink/10 bg-muted/50 px-5 py-2 text-xs font-medium uppercase tracking-[0.25em] text-ink/60">
                <span className="h-1.5 w-1.5 rounded-full bg-brand-500" />
                The Birth of Dr. Liv
              </span>

              <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl lg:text-5xl text-balance">
                From that purpose...{' '}
                <span className="text-gradient">Dr. Liv came to life.</span>
              </h2>
            </div>
          </Reveal>

          <Reveal delay={1}>
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {/* Card 1 — The Promise */}
              <div className="group rounded-3xl border border-ink/5 bg-white p-6 shadow-card transition-all duration-500 hover:-translate-y-1 hover:shadow-lg">
                <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-brand-50 text-brand-600 transition-all duration-300 group-hover:bg-brand-100 group-hover:scale-110">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
                  </svg>
                </span>
                <h3 className="mt-4 font-display text-lg font-bold text-ink">The Promise</h3>
                <div className="mt-2.5 space-y-2 text-sm leading-relaxed text-ink-500">
                  <p>
                    Bhagirathi Industries was founded to carry forward timeless
                    values of purity, trust, and care.
                  </p>
                  <p>
                    From that purpose, Dr. Liv was born — the living expression
                    of everything we stand for.
                  </p>
                </div>
              </div>

              {/* Card 2 — What Dr. Liv Represents */}
              <div className="group rounded-3xl border border-ink/5 bg-white p-6 shadow-card transition-all duration-500 hover:-translate-y-1 hover:shadow-lg">
                <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-brand-50 text-brand-600 transition-all duration-300 group-hover:bg-brand-100 group-hover:scale-110">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0 1 12 21 8.25 8.25 0 0 1 6.038 7.047 8.287 8.287 0 0 0 9 9.601a8.983 8.983 0 0 1 3.361-6.867 8.21 8.21 0 0 0 3 2.48Z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 18a3.75 3.75 0 0 0 .495-7.468 5.99 5.99 0 0 0-1.925 3.547 5.975 5.975 0 0 1-2.133-1.001A3.75 3.75 0 0 0 12 18Z" />
                  </svg>
                </span>
                <h3 className="mt-4 font-display text-lg font-bold text-ink">What Dr. Liv Represents</h3>
                <div className="mt-3 flex flex-wrap gap-2">
                  {['Purity', 'Trust', 'Compassion', 'Hope', 'Life'].map((v) => (
                    <span key={v} className="inline-flex items-center rounded-full border border-brand-200/60 bg-brand-50/80 px-3 py-1.5 text-xs font-semibold tracking-wide text-brand-700">
                      {v}
                    </span>
                  ))}
                </div>
              </div>

              {/* Card 3 — Our Commitment */}
              <div className="group rounded-3xl border border-ink/5 bg-white p-6 shadow-card transition-all duration-500 hover:-translate-y-1 hover:shadow-lg sm:col-span-2 lg:col-span-1">
                <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-brand-50 text-brand-600 transition-all duration-300 group-hover:bg-brand-100 group-hover:scale-110">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                  </svg>
                </span>
                <h3 className="mt-4 font-display text-lg font-bold text-ink">Our Commitment</h3>
                <div className="mt-2.5 space-y-2 text-sm leading-relaxed text-ink-500">
                  <p>Water is not merely a product.</p>
                  <p>We nurture life.</p>
                  <p>We build trust.</p>
                  <p>We create a legacy.</p>
                </div>
              </div>
            </div>
          </Reveal>
        </Container>
      </Section>

      {/* ─── SECTION 10 — Brand Signature ─────────────────────── */}
      <Section className="py-10 sm:py-12 lg:py-16">
        <Container>
          <Reveal>
            <div className="mx-auto max-w-3xl text-center">
              <div className="mx-auto mb-8 flex justify-center">
                <div className="relative h-[260px] w-[180px] overflow-hidden rounded-3xl border border-ink/5 bg-gradient-to-b from-white to-muted/30 shadow-card sm:h-[340px] sm:w-[230px] sm:rounded-4xl">
                  <Image
                    src="/images/dr-liv.png"
                    alt="Dr. Liv premium packaged drinking water"
                    fill
                    sizes="(max-width: 640px) 180px, 230px"
                    className="object-cover drop-shadow-lg"
                  />
                </div>
              </div>
              <h3 className="font-display text-2xl font-bold tracking-tight text-ink sm:text-3xl">
                Dr. Liv
              </h3>
              <p className="mt-2 text-sm tracking-[0.2em] text-ink-400">
                Every Drop. Every Life. Every Promise.
              </p>
            </div>
          </Reveal>
        </Container>
      </Section>

    </>
  );
}
