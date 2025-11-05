import React, { useMemo } from 'react';
import Spline from '@splinetool/react-spline';
import { Rocket, Mail, BadgeCheck } from 'lucide-react';

function AccentBadge({ label }) {
  return (
    <span className="inline-flex items-center gap-1 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-zinc-200">
      <BadgeCheck className="h-3 w-3 text-[#7b61ff]" /> {label}
    </span>
  );
}

export default function Hero({ mood }) {
  const isAI = mood === 'ai';

  const gradient = useMemo(() => {
    if (isAI) return 'from-[#7b61ff]/30 via-[#00f5d4]/20 to-transparent';
    if (mood === 'light') return 'from-[#7b61ff]/20 via-[#00f5d4]/10 to-transparent';
    return 'from-white/10 via-white/5 to-transparent';
  }, [mood, isAI]);

  return (
    <section className="relative w-full h-[92vh] overflow-hidden">
      {/* 3D Spline hero - keep full size, no negative z-index */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Non-blocking glow layers and subtle neural field */}
      <div className="pointer-events-none absolute inset-0">
        <div className={`absolute -inset-24 blur-3xl opacity-70 bg-gradient-to-tr ${gradient}`} />
        <div className="absolute inset-0 opacity-[0.15]" style={{
          backgroundImage:
            'radial-gradient(circle at 20% 30%, #7b61ff 1px, transparent 1px), radial-gradient(circle at 80% 70%, #00f5d4 1px, transparent 1px)',
          backgroundSize: '120px 120px, 140px 140px',
        }} />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto h-full max-w-6xl px-6 flex flex-col justify-center">
        <div className="max-w-2xl">
          <p className={`text-xs tracking-widest uppercase ${isAI ? 'text-[#00f5d4]' : 'text-zinc-300'}`}>Rahul Gunda</p>
          <h1 className="mt-3 text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight">
            <span className="bg-gradient-to-br from-white via-white to-zinc-300 bg-clip-text text-transparent">
              Smart Design. Human Touch.
            </span>
          </h1>
          <p className={`mt-4 max-w-xl text-sm sm:text-base ${isAI ? 'text-zinc-300' : 'text-zinc-400'}`}>
            I build intelligent digital experiences powered by AI & creativity.
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <a href="#work" className={`inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium shadow transition focus:outline-none focus:ring-2 focus:ring-offset-2 ${
              isAI ? 'bg-gradient-to-r from-[#7b61ff] to-[#00f5d4] text-black focus:ring-[#7b61ff] focus:ring-offset-black' : 'bg-white text-black hover:bg-zinc-200 focus:ring-zinc-400 focus:ring-offset-black'
            }`}>
              <Rocket className="h-4 w-4" /> View My Work
            </a>
            <a href="#contact" className={`inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium border transition ${
              isAI ? 'border-white/15 bg-white/5 text-white hover:bg-white/10' : 'border-zinc-700 bg-zinc-900 text-white hover:bg-zinc-800'
            }`}>
              <Mail className="h-4 w-4" /> Hire Me
            </a>
          </div>

          <div className="mt-6 flex flex-wrap gap-2">
            <AccentBadge label="Generative AI" />
            <AccentBadge label="Full-Stack" />
            <AccentBadge label="Business Analytics" />
          </div>
        </div>
      </div>
    </section>
  );
}
