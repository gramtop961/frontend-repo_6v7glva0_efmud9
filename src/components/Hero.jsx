import React from 'react';
import Spline from '@splinetool/react-spline';
import { Rocket, Mail } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen w-full overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/6M6zWwq0oS8YwQmK/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-900/30 to-slate-900/10" />
      </div>

      <div className="relative z-10 mx-auto flex min-h-screen max-w-6xl flex-col items-center justify-center px-6 text-center">
        <p className="mb-3 text-sm uppercase tracking-widest text-cyan-300/80">Rahul Gunda</p>
        <h1 className="text-balance bg-gradient-to-r from-white via-cyan-100 to-cyan-300 bg-clip-text text-5xl font-semibold text-transparent sm:text-6xl md:text-7xl">
          Smart Design. Human Touch.
        </h1>
        <p className="mt-5 max-w-2xl text-pretty text-slate-300">
          AI-augmented full‑stack experiences with delightful interactions and measurable impact.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#work"
            className="inline-flex items-center gap-2 rounded-xl bg-cyan-500 px-5 py-3 font-medium text-slate-950 transition hover:bg-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-300 focus:ring-offset-2 focus:ring-offset-slate-950"
          >
            <Rocket size={18} /> View My Work
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-xl border border-slate-700/60 bg-slate-900/60 px-5 py-3 font-medium text-slate-100 backdrop-blur transition hover:bg-slate-800/60 focus:outline-none focus:ring-2 focus:ring-cyan-300 focus:ring-offset-2 focus:ring-offset-slate-950"
          >
            <Mail size={18} /> Hire Me
          </a>
        </div>
      </div>
    </section>
  );
}
