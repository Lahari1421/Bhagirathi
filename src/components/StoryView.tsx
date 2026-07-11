import { useEffect, useRef, useMemo } from 'react';
import { NavSection } from '../types';
import { ArrowRight, Droplet, ShieldCheck, Target, Award } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import storyCall from '@/assets/1.png';
import storyPenance from '@/assets/2.png';
import storyDescent from '@/assets/3.png';
import storyEarth from '@/assets/4.png';
import storyGift from '@/assets/5.png';
import storyMother from '@/assets/6.png';
import storyFatherSon from '@/assets/7.png';

gsap.registerPlugin(ScrollTrigger);

interface StoryViewProps {
  onNavigate: (section: NavSection) => void;
}

function FloatingParticles({ count = 12, color = 'rgba(217,161,60,0.4)' }: { count?: number; color?: string }) {
  const particles = useMemo(
    () =>
      Array.from({ length: count }, (_, i) => ({
        id: i,
        left: `${Math.random() * 100}%`,
        size: 2 + Math.random() * 3,
        duration: 6 + Math.random() * 8,
        delay: Math.random() * 6,
        opacity: 0.3 + Math.random() * 0.4,
      })),
    [count]
  );

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      {particles.map((p) => (
        <div
          key={p.id}
          className="story-particle"
          style={{
            left: p.left,
            bottom: '-10px',
            width: p.size,
            height: p.size,
            background: color,
            animationDuration: `${p.duration}s`,
            animationDelay: `${p.delay}s`,
            opacity: p.opacity,
          }}
        />
      ))}
    </div>
  );
}

function WaterRipples({ className = '' }: { className?: string }) {
  return (
    <div className={`absolute ${className}`} aria-hidden="true">
      <div className="story-ripple w-32 h-32" />
      <div className="story-ripple w-48 h-48 -mt-12 -ml-8" />
      <div className="story-ripple w-64 h-64 -mt-16 -ml-16" />
    </div>
  );
}

export default function StoryView({ onNavigate }: StoryViewProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const s1Ref = useRef<HTMLDivElement>(null);
  const s1Text1Ref = useRef<HTMLDivElement>(null);
  const s1Text2Ref = useRef<HTMLDivElement>(null);
  const s2Ref = useRef<HTMLDivElement>(null);
  const s2TextRef = useRef<HTMLDivElement>(null);
  const s3Ref = useRef<HTMLDivElement>(null);
  const s3TextRef = useRef<HTMLDivElement>(null);
  const s4Ref = useRef<HTMLDivElement>(null);
  const s4TextRef = useRef<HTMLDivElement>(null);
  const s5Ref = useRef<HTMLDivElement>(null);
  const s5TextRef = useRef<HTMLDivElement>(null);
  const s6Ref = useRef<HTMLDivElement>(null);
  const s6TextRef = useRef<HTMLDivElement>(null);
  const s7Ref = useRef<HTMLDivElement>(null);
  const s7TextRef = useRef<HTMLDivElement>(null);
  const s8Ref = useRef<HTMLDivElement>(null);
  const s8Text1Ref = useRef<HTMLDivElement>(null);
  const s8Text2Ref = useRef<HTMLDivElement>(null);
  const s9Ref = useRef<HTMLDivElement>(null);
  const s9Text1Ref = useRef<HTMLDivElement>(null);
  const s9Text2Ref = useRef<HTMLDivElement>(null);
  const s10Ref = useRef<HTMLDivElement>(null);
  const s10Text1Ref = useRef<HTMLDivElement>(null);
  const s10Text2Ref = useRef<HTMLDivElement>(null);
  const s10Text3Ref = useRef<HTMLDivElement>(null);
  const s11Ref = useRef<HTMLDivElement>(null);
  const s12Ref = useRef<HTMLDivElement>(null);
  const s13Ref = useRef<HTMLDivElement>(null);
  const s14Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // ── Section 1: Opening ──
      gsap.fromTo(
        s1Text1Ref.current,
        { opacity: 0, y: 30, scale: 0.97 },
        {
          opacity: 1, y: 0, scale: 1, duration: 1.5, delay: 0.3,
          ease: 'power2.out',
          scrollTrigger: { trigger: s1Ref.current, start: 'top 80%', once: true },
        }
      );
      gsap.fromTo(
        s1Text2Ref.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1, y: 0, duration: 1.5, delay: 0.2,
          ease: 'power2.out',
          scrollTrigger: { trigger: s1Ref.current, start: 'top 40%', once: true },
        }
      );

      // ── Section 2: The Call of Bhagiratha ──
      gsap.fromTo(s2Ref.current?.querySelector('img')!,
        { scale: 1.0 },
        { scale: 1.06, ease: 'none', scrollTrigger: { trigger: s2Ref.current, start: 'top bottom', end: 'bottom top', scrub: 2 } }
      );
      gsap.fromTo(s2TextRef.current,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1.2, ease: 'power3.out', scrollTrigger: { trigger: s2Ref.current, start: 'top 60%', once: true } }
      );

      // ── Section 3: Bhagiratha's Penance ──
      gsap.fromTo(s3Ref.current?.querySelector('img')!,
        { scale: 1.0 },
        { scale: 1.08, ease: 'none', scrollTrigger: { trigger: s3Ref.current, start: 'top bottom', end: 'bottom top', scrub: 2 } }
      );
      gsap.fromTo(s3TextRef.current,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1.2, ease: 'power3.out', scrollTrigger: { trigger: s3Ref.current, start: 'top 60%', once: true } }
      );

      // ── Section 4: The Descent of Ganga ──
      gsap.fromTo(s4Ref.current?.querySelector('img')!,
        { scale: 1.0, filter: 'blur(4px)' },
        { scale: 1.05, filter: 'blur(0px)', ease: 'none', scrollTrigger: { trigger: s4Ref.current, start: 'top bottom', end: 'bottom top', scrub: 2 } }
      );
      gsap.fromTo(s4TextRef.current,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1.2, ease: 'power3.out', scrollTrigger: { trigger: s4Ref.current, start: 'top 60%', once: true } }
      );

      // ── Section 5: Ganga Reaches Earth ──
      gsap.fromTo(s5Ref.current?.querySelector('img')!,
        { scale: 1.0, filter: 'blur(8px)' },
        { scale: 1.05, filter: 'blur(0px)', ease: 'none', scrollTrigger: { trigger: s5Ref.current, start: 'top bottom', end: 'bottom top', scrub: 2 } }
      );
      gsap.fromTo(s5TextRef.current,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1.2, ease: 'power3.out', scrollTrigger: { trigger: s5Ref.current, start: 'top 60%', once: true } }
      );

      // ── Section 6: The Gift to Humanity ──
      gsap.fromTo(s6Ref.current?.querySelector('img')!,
        { scale: 1.0 },
        { scale: 1.06, ease: 'none', scrollTrigger: { trigger: s6Ref.current, start: 'top bottom', end: 'bottom top', scrub: 2 } }
      );
      gsap.fromTo(s6TextRef.current,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1.2, ease: 'power3.out', scrollTrigger: { trigger: s6Ref.current, start: 'top 60%', once: true } }
      );

      // ── Section 7: From Legend to Legacy ──
      gsap.fromTo(s7TextRef.current,
        { opacity: 0, y: 40, filter: 'blur(6px)' },
        { opacity: 1, y: 0, filter: 'blur(0px)', duration: 1.5, ease: 'power2.out', scrollTrigger: { trigger: s7Ref.current, start: 'top 65%', once: true } }
      );

      // ── Section 8: Mother's Love ──
      gsap.fromTo(s8Ref.current?.querySelector('img')!,
        { scale: 1.0 },
        { scale: 1.05, ease: 'none', scrollTrigger: { trigger: s8Ref.current, start: 'top bottom', end: 'bottom top', scrub: 2 } }
      );
      gsap.fromTo(s8Text1Ref.current,
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 1.2, ease: 'power3.out', scrollTrigger: { trigger: s8Ref.current, start: 'top 65%', once: true } }
      );
      gsap.fromTo(s8Text2Ref.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1.2, delay: 0.3, ease: 'power3.out', scrollTrigger: { trigger: s8Ref.current, start: 'top 45%', once: true } }
      );

      // ── Section 9: Father and Son ──
      gsap.fromTo(s9Ref.current?.querySelector('img')!,
        { scale: 1.0 },
        { scale: 1.05, ease: 'none', scrollTrigger: { trigger: s9Ref.current, start: 'top bottom', end: 'bottom top', scrub: 2 } }
      );
      gsap.fromTo(s9Text1Ref.current,
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 1.2, ease: 'power3.out', scrollTrigger: { trigger: s9Ref.current, start: 'top 65%', once: true } }
      );
      gsap.fromTo(s9Text2Ref.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1.2, delay: 0.3, ease: 'power3.out', scrollTrigger: { trigger: s9Ref.current, start: 'top 45%', once: true } }
      );

      // ── Section 10: Birth of a Vision ──
      gsap.fromTo(s10Text1Ref.current,
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 1.2, ease: 'power3.out', scrollTrigger: { trigger: s10Ref.current, start: 'top 70%', once: true } }
      );
      gsap.fromTo(s10Text2Ref.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1.2, delay: 0.2, ease: 'power3.out', scrollTrigger: { trigger: s10Ref.current, start: 'top 55%', once: true } }
      );
      gsap.fromTo(s10Text3Ref.current,
        { opacity: 0, y: 30, scale: 0.95 },
        { opacity: 1, y: 0, scale: 1, duration: 1.4, delay: 0.1, ease: 'power3.out', scrollTrigger: { trigger: s10Ref.current, start: 'top 40%', once: true } }
      );

      // ── Section 11: Bhagirathi Industries Revealed ──
      gsap.fromTo(s11Ref.current?.querySelectorAll('.story-reveal')!,
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 1, stagger: 0.15, ease: 'power3.out', scrollTrigger: { trigger: s11Ref.current, start: 'top 65%', once: true } }
      );

      // ── Section 12: Dr. Liv ──
      gsap.fromTo(s12Ref.current?.querySelectorAll('.story-reveal')!,
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 1, stagger: 0.2, ease: 'power3.out', scrollTrigger: { trigger: s12Ref.current, start: 'top 65%', once: true } }
      );

      // ── Section 13: Our Promise ──
      gsap.fromTo(s13Ref.current?.querySelectorAll('.promise-card')!,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 0.8, stagger: 0.15, ease: 'power3.out', scrollTrigger: { trigger: s13Ref.current, start: 'top 65%', once: true } }
      );

      // ── Section 14: Final CTA ──
      gsap.fromTo(s14Ref.current?.querySelectorAll('.cta-reveal')!,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1, stagger: 0.12, ease: 'power3.out', scrollTrigger: { trigger: s14Ref.current, start: 'top 70%', once: true } }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="story-page">

      {/* ═══════════════════════════════════════
          ACT I — THE LEGEND
          ═══════════════════════════════════════ */}

      {/* Section 1: Opening */}
      <section
        ref={s1Ref}
        className="story-section bg-black flex flex-col items-center justify-center px-6"
      >
        <div className="story-light-rays" />
        <div className="max-w-4xl mx-auto text-center space-y-24 relative z-10">
          <div ref={s1Text1Ref} className="opacity-0">
            <p className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-amber-100/90 font-light tracking-wide leading-relaxed">
              Every great journey begins with a purpose.
            </p>
          </div>
          <div ref={s1Text2Ref} className="opacity-0">
            <p className="font-display text-xl sm:text-2xl md:text-3xl text-amber-200/70 font-light tracking-wide">
              Ours began with a story...
            </p>
          </div>
        </div>
      </section>

      {/* Section 2: The Call of Bhagiratha */}
      <section ref={s2Ref} className="story-section relative bg-black">
        <div className="absolute inset-0">
          <img
            src={storyCall}
            alt="The Call of Bhagiratha"
            className="w-full h-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 story-overlay-dark story-vignette" />
        </div>
        <div className="relative z-10 flex items-center justify-center min-h-screen px-6">
          <div ref={s2TextRef} className="max-w-3xl mx-auto text-center opacity-0">
            <p className="font-display text-lg sm:text-xl md:text-2xl lg:text-3xl text-amber-100/90 font-light leading-relaxed tracking-wide">
              In the ancient depths of Indian mythology, there lived a king named{' '}
              <span className="text-amber-300 font-medium">Bhagiratha</span>.
            </p>
            <p className="font-display text-base sm:text-lg md:text-xl text-amber-200/60 font-light mt-8 leading-relaxed">
              He devoted his life to a single, extraordinary purpose.
            </p>
          </div>
        </div>
        <FloatingParticles count={8} color="rgba(217,161,60,0.3)" />
      </section>

      {/* Section 3: Bhagiratha's Penance */}
      <section ref={s3Ref} className="story-section relative bg-black">
        <div className="absolute inset-0">
          <img
            src={storyPenance}
            alt="Bhagiratha's Penance"
            className="w-full h-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 story-overlay-dark story-vignette" />
        </div>
        <div className="relative z-10 flex items-center justify-center min-h-screen px-6">
          <div ref={s3TextRef} className="max-w-3xl mx-auto text-center opacity-0">
            <p className="font-display text-lg sm:text-xl md:text-2xl lg:text-3xl text-amber-100/90 font-light leading-relaxed tracking-wide">
              Through unwavering determination...
            </p>
            <p className="font-display text-base sm:text-lg md:text-xl text-amber-200/60 font-light mt-8 leading-relaxed">
              He performed penance so fierce, the heavens themselves trembled.
            </p>
          </div>
        </div>
        <FloatingParticles count={10} color="rgba(217,161,60,0.25)" />
      </section>

      {/* Section 4: The Descent of Ganga */}
      <section ref={s4Ref} className="story-section relative bg-black">
        <div className="absolute inset-0">
          <img
            src={storyDescent}
            alt="The Descent of Ganga"
            className="w-full h-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 story-overlay-dark story-vignette" />
        </div>
        <div className="relative z-10 flex items-center justify-center min-h-screen px-6">
          <div ref={s4TextRef} className="max-w-3xl mx-auto text-center opacity-0">
            <p className="font-display text-xl sm:text-2xl md:text-3xl lg:text-4xl text-amber-100 font-semibold leading-relaxed tracking-wide">
              He brought the sacred Ganga down to Earth.
            </p>
            <div className="mt-12 flex justify-center">
              <WaterRipples />
            </div>
          </div>
        </div>
        <FloatingParticles count={14} color="rgba(120,180,220,0.3)" />
      </section>

      {/* Section 5: Ganga Reaches Earth */}
      <section ref={s5Ref} className="story-section relative bg-black">
        <div className="absolute inset-0">
          <img
            src={storyEarth}
            alt="Ganga Reaches Earth"
            className="w-full h-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 story-overlay-dark story-vignette" />
        </div>
        <div className="relative z-10 flex items-center justify-center min-h-screen px-6">
          <div ref={s5TextRef} className="max-w-3xl mx-auto text-center opacity-0">
            <p className="font-display text-lg sm:text-xl md:text-2xl lg:text-3xl text-amber-100/90 font-light leading-relaxed tracking-wide">
              A river that would sustain humanity for eternity.
            </p>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          ACT II — THE PURPOSE
          ═══════════════════════════════════════ */}

      {/* Section 6: The Gift to Humanity */}
      <section ref={s6Ref} className="story-section relative bg-black">
        <div className="absolute inset-0">
          <img
            src={storyGift}
            alt="The Gift to Humanity"
            className="w-full h-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 story-overlay-dark story-vignette" />
        </div>
        <div className="relative z-10 flex items-center justify-center min-h-screen px-6">
          <div ref={s6TextRef} className="max-w-3xl mx-auto text-center opacity-0">
            <p className="font-display text-xl sm:text-2xl md:text-3xl lg:text-4xl text-amber-100 font-semibold leading-relaxed tracking-wide">
              Water. Nature's purest blessing to humanity.
            </p>
            <p className="font-display text-base sm:text-lg text-amber-200/60 font-light mt-8 leading-relaxed">
              The most sacred gift one could offer the world.
            </p>
          </div>
        </div>
        <FloatingParticles count={8} color="rgba(217,161,60,0.3)" />
      </section>

      {/* Section 7: From Legend to Legacy */}
      <section
        ref={s7Ref}
        className="story-section bg-gradient-to-b from-black via-[#0a0a14] to-black flex items-center justify-center px-6"
      >
        <FloatingParticles count={6} color="rgba(217,161,60,0.2)" />
        <div className="story-light-rays" />
        <div ref={s7TextRef} className="max-w-3xl mx-auto text-center relative z-10 opacity-0">
          <p className="font-display text-lg sm:text-xl md:text-2xl lg:text-3xl text-amber-200/80 font-light leading-relaxed tracking-wide">
            The story didn't end there.
          </p>
          <p className="font-display text-base sm:text-lg md:text-xl text-amber-100/50 font-light mt-8 leading-relaxed">
            It lived on. Through generations. Through values. Through a mother's love.
          </p>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          ACT III — THE PERSONAL
          ═══════════════════════════════════════ */}

      {/* Section 8: Mother's Love (Chandrakala) */}
      <section ref={s8Ref} className="story-section relative bg-[#0a0808]">
        <div className="absolute inset-0">
          <img
            src={storyMother}
            alt="Mother's Love — Chandrakala"
            className="w-full h-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0808] via-[#0a0808]/60 to-[#0a0808]/40" />
          <div className="absolute inset-0 story-vignette" />
        </div>
        <div className="relative z-10 flex items-end pb-24 sm:items-center sm:pb-0 min-h-screen px-6">
          <div className="max-w-3xl mx-auto text-center sm:text-left space-y-6">
            <div ref={s8Text1Ref} className="opacity-0">
              <p className="font-display text-base sm:text-lg md:text-xl text-amber-200/70 font-light tracking-wide">
                His mother, Chandrakala, taught him...
              </p>
            </div>
            <div ref={s8Text2Ref} className="opacity-0">
              <p className="font-display text-xl sm:text-2xl md:text-3xl lg:text-4xl text-amber-100 font-medium leading-relaxed tracking-wide italic">
                "Water is nature's purest blessing. Never forget that."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 9: Father and Son (Agastya Aarav) */}
      <section ref={s9Ref} className="story-section relative bg-[#080a0a]">
        <div className="absolute inset-0">
          {/* TODO: Replace with dedicated artwork when available */}
          <img
            src={storyFatherSon}
            alt="Father and Son — Agastya Aarav"
            className="w-full h-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#080a0a] via-[#080a0a]/60 to-[#080a0a]/40" />
          <div className="absolute inset-0 story-vignette" />
        </div>
        <div className="relative z-10 flex items-end pb-24 sm:items-center sm:pb-0 min-h-screen px-6">
          <div className="max-w-3xl mx-auto text-center sm:text-left space-y-6">
            <div ref={s9Text1Ref} className="opacity-0">
              <p className="font-display text-base sm:text-lg md:text-xl text-amber-200/70 font-light tracking-wide">
                And his son, Agastya Aarav, reminded him...
              </p>
            </div>
            <div ref={s9Text2Ref} className="opacity-0">
              <p className="font-display text-xl sm:text-2xl md:text-3xl lg:text-4xl text-amber-100 font-medium leading-relaxed tracking-wide italic">
                "The greatest gift you can leave behind is a purpose."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          ACT IV — THE VISION
          ═══════════════════════════════════════ */}

      {/* Section 10: Birth of a Vision */}
      <section
        ref={s10Ref}
        className="story-section bg-gradient-to-b from-[#080a0a] via-[#0c1220] to-brand-secondary flex items-center justify-center px-6"
      >
        <FloatingParticles count={10} color="rgba(217,161,60,0.25)" />
        <div className="story-light-rays" />
        <div className="max-w-4xl mx-auto text-center relative z-10 space-y-16">
          <div ref={s10Text1Ref} className="opacity-0">
            <p className="font-display text-lg sm:text-xl md:text-2xl text-amber-200/70 font-light tracking-wide">
              A dream became a mission.
            </p>
          </div>
          <div ref={s10Text2Ref} className="opacity-0">
            <p className="font-display text-base sm:text-lg md:text-xl text-slate-400 font-light leading-relaxed">
              A mother's teaching. A son's inspiration.
            </p>
          </div>
          <div ref={s10Text3Ref} className="opacity-0">
            <p className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white font-bold leading-relaxed tracking-wide">
              Became the foundation of something greater.
            </p>
          </div>
        </div>
      </section>

      {/* Section 11: Bhagirathi Industries Revealed */}
      <section
        ref={s11Ref}
        className="story-section bg-brand-secondary flex items-center justify-center px-6 py-24"
      >
        <div className="max-w-5xl mx-auto text-center space-y-12">
          <div className="story-reveal opacity-0">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white/10 border border-white/10 mb-6">
              <Droplet className="w-8 h-8 text-cyan-400" />
            </div>
          </div>

          <div className="story-reveal opacity-0">
            <h2 className="font-display font-extrabold text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white tracking-tight leading-tight">
              Bhagirathi Industries
            </h2>
          </div>

          <div className="story-reveal opacity-0">
            <p className="font-display text-lg sm:text-xl text-slate-300 font-light max-w-2xl mx-auto leading-relaxed">
              Where a legend's devotion meets a family's purpose.
              <br />
              Purity. Delivered at scale.
            </p>
          </div>

          <div className="story-reveal opacity-0 pt-8">
            <div className="grid grid-cols-3 gap-8 max-w-lg mx-auto">
              {[
                { value: '18+', label: 'Years' },
                { value: '120M', label: 'Litres' },
                { value: '450+', label: 'Partners' },
              ].map((stat, i) => (
                <div key={i} className="text-center">
                  <span className="font-display font-extrabold text-2xl sm:text-3xl text-amber-300 block">
                    {stat.value}
                  </span>
                  <span className="text-xs text-slate-500 uppercase tracking-wider font-medium">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="story-reveal opacity-0 flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <button
              onClick={() => onNavigate(NavSection.Products)}
              className="px-8 py-4 rounded-lg bg-white text-brand-secondary font-bold text-sm hover:bg-slate-100 transition-all flex items-center justify-center gap-2 group cursor-pointer"
            >
              Explore Our Products
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => onNavigate(NavSection.Manufacturing)}
              className="px-8 py-4 rounded-lg border border-white/20 text-white font-semibold text-sm hover:bg-white/10 transition-all cursor-pointer"
            >
              Discover Our Manufacturing
            </button>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          ACT V — THE PROMISE
          ═══════════════════════════════════════ */}

      {/* Section 12: Dr. Liv — Product Reveal */}
      <section
        ref={s12Ref}
        className="story-section bg-gradient-to-b from-brand-secondary via-[#0a1628] to-brand-secondary flex items-center justify-center px-6 py-24 relative overflow-hidden"
      >
        <WaterRipples className="bottom-1/4 left-1/2 -translate-x-1/2 opacity-30" />

        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
          {/* Product Visual */}
          <div className="story-reveal opacity-0 flex justify-center">
            <div className="relative">
              {/* Bottle silhouette — elegant CSS placeholder */}
              <div className="story-glow relative w-48 h-80 sm:w-56 sm:h-96 rounded-t-full rounded-b-3xl bg-gradient-to-b from-white/5 to-white/[0.02] border border-white/10 flex flex-col items-center justify-center overflow-hidden">
                <div className="story-shimmer absolute inset-0 rounded-t-full rounded-b-3xl" />
                <div className="relative z-10 flex flex-col items-center space-y-4">
                  <Droplet className="w-12 h-12 text-cyan-400/60" />
                  <span className="font-display font-bold text-lg text-white/40 tracking-wider">
                    Dr. Liv
                  </span>
                  <span className="text-[10px] text-white/20 uppercase tracking-[0.3em]">
                    Coming Soon
                  </span>
                </div>
              </div>
              {/* Glow ring */}
              <div className="absolute -inset-4 rounded-full bg-cyan-400/5 blur-2xl -z-10" />
            </div>
          </div>

          {/* Copy */}
          <div className="space-y-8">
            <div className="story-reveal opacity-0">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-400/80">
                Introducing
              </span>
            </div>
            <div className="story-reveal opacity-0">
              <h2 className="font-display font-extrabold text-4xl sm:text-5xl text-white tracking-tight leading-tight">
                Dr. Liv
              </h2>
            </div>
            <div className="story-reveal opacity-0">
              <p className="text-slate-400 text-base sm:text-lg leading-relaxed font-light max-w-md">
                Where Bhagiratha's ancient devotion to purity meets modern science.
                A product born not from business — but from belief.
              </p>
            </div>
            <div className="story-reveal opacity-0 pt-2">
              <div className="flex items-center gap-6 text-xs text-slate-500">
                <span className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                  Pure
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                  Purposeful
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                  Premium
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 13: Our Promise */}
      <section
        ref={s13Ref}
        className="story-section bg-gradient-to-b from-brand-secondary to-white flex items-center justify-center px-6 py-24"
      >
        <div className="max-w-5xl mx-auto text-center space-y-16">
          <div className="space-y-4">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand-primary">
              Our Promise
            </span>
            <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-brand-secondary">
              Built on values that never expire.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <ShieldCheck className="w-8 h-8 text-brand-primary" />,
                title: 'Purity',
                desc: 'Every drop passes through 8 stages of sterilization. Zero human touch. Absolute cleanroom integrity.',
              },
              {
                icon: <Target className="w-8 h-8 text-brand-accent" />,
                title: 'Purpose',
                desc: 'Founded not to build a company, but to carry forward a legacy of service — from Bhagiratha to Bhagirathi.',
              },
              {
                icon: <Award className="w-8 h-8 text-brand-primary" />,
                title: 'Legacy',
                desc: 'ISO 9001. BIS certified. Zero Liquid Discharge. We honor the future by protecting it.',
              },
            ].map((item, i) => (
              <div
                key={i}
                className="promise-card opacity-0 p-8 bg-white rounded-2xl border border-slate-200 text-center space-y-4 hover:border-brand-primary/20 transition-colors"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-slate-50 border border-slate-100">
                  {item.icon}
                </div>
                <h3 className="font-display font-bold text-lg text-brand-secondary">
                  {item.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 14: Final CTA */}
      <section
        ref={s14Ref}
        className="bg-white px-6 py-24 sm:py-32"
      >
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="cta-reveal opacity-0">
            <Droplet className="w-10 h-10 text-brand-primary mx-auto mb-4" />
          </div>
          <div className="cta-reveal opacity-0">
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl text-brand-secondary tracking-tight leading-tight">
              Begin Your Journey With Us
            </h2>
          </div>
          <div className="cta-reveal opacity-0">
            <p className="text-slate-500 text-base sm:text-lg max-w-xl mx-auto font-light leading-relaxed">
              From a king's devotion to a family's purpose — discover the products born from this legacy.
            </p>
          </div>
          <div className="cta-reveal opacity-0 flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <button
              onClick={() => onNavigate(NavSection.Products)}
              className="px-8 py-4 rounded-lg bg-brand-primary text-white font-bold text-sm hover:bg-brand-primary/90 transition-all flex items-center justify-center gap-2 group cursor-pointer"
            >
              View Our Products
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => onNavigate(NavSection.Contact)}
              className="px-8 py-4 rounded-lg border-2 border-brand-primary text-brand-primary font-bold text-sm hover:bg-brand-primary hover:text-white transition-all cursor-pointer"
            >
              Get in Touch
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
