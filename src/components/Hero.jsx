import React, { useEffect, useMemo } from 'react';
import Spline from '@splinetool/react-spline';
import { ArrowRight, Mail } from 'lucide-react';

const usePrefersReducedMotion = () => {
  return useMemo(() => {
    if (typeof window === 'undefined') return false;
    return window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  }, []);
};

export default function Hero({ onPrimaryClick }) {
  const reduceMotion = usePrefersReducedMotion();

  useEffect(() => {
    // Ensure Spline canvas always fits container
  }, []);

  return (
    <section id="home" className="relative min-h-[80vh] md:min-h-[90vh] w-full overflow-hidden bg-[radial-gradient(60%_50%_at_50%_10%,rgba(123,97,255,0.20),transparent),linear-gradient(180deg,#09090b,rgba(9,9,11,0.9))]">
      {/* 3D Spline scene */}
      <div className="absolute inset-0">
        {!reduceMotion ? (
          <Spline
            scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode"
            style={{ width: '100%', height: '100%' }}
          />
        ) : (
          <div className="w-full h-full bg-[radial-gradient(circle_at_center,rgba(123,97,255,0.35),transparent_60%)]" aria-hidden />
        )}
      </div>

      {/* subtle overlay accents that do not block interactions */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/50" />

      <div className="relative z-10 mx-auto max-w-6xl px-6 pt-28 md:pt-40 pb-16 md:pb-24">
        <div className="max-w-3xl">
          <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs md:text-sm text-white/80 backdrop-blur">
            AI Innovator • Full-Stack Developer
          </span>
          <h1 className="mt-4 text-4xl md:text-6xl font-semibold tracking-tight text-white">
            Smart Design. Human Touch.
          </h1>
          <p className="mt-4 max-w-2xl text-base md:text-lg text-white/80">
            I build intelligent, user-centered products that blend modern web engineering with practical AI.
          </p>
          <p className="mt-2 max-w-2xl text-sm md:text-base text-white/70">
            From concept to production: I prototype, ship, and iterate systems that scale — for startups, enterprises, and research teams.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <button
              onClick={onPrimaryClick}
              className="group inline-flex items-center gap-2 rounded-full bg-[#7b61ff] px-5 py-3 text-sm font-medium text-white shadow-[0_0_30px_rgba(123,97,255,0.5)] transition hover:shadow-[0_0_40px_rgba(123,97,255,0.7)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#7b61ff]"
            >
              View My Work
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </button>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm font-medium text-white/90 backdrop-blur transition hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
            >
              <Mail className="h-4 w-4" /> Hire Me
            </a>
          </div>

          <div className="mt-6 flex flex-wrap gap-2 text-xs md:text-sm">
            <span className="rounded-full bg-emerald-400/10 text-emerald-300 px-3 py-1 border border-emerald-300/20">Generative AI</span>
            <span className="rounded-full bg-cyan-400/10 text-cyan-300 px-3 py-1 border border-cyan-300/20">Full‑Stack</span>
            <span className="rounded-full bg-fuchsia-400/10 text-fuchsia-300 px-3 py-1 border border-fuchsia-300/20">Business Analytics</span>
          </div>
        </div>
      </div>
    </section>
  );
}
