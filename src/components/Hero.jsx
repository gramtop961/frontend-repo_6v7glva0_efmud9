import React, { useRef, useEffect, useMemo } from 'react';
import Spline from '@splinetool/react-spline';
import { Rocket, Cpu } from 'lucide-react';

const MoodBadge = ({ mood }) => {
  const isAI = mood === 'ai';
  return (
    <div className={`inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-medium shadow-sm border ${
      isAI
        ? 'bg-fuchsia-500/15 border-fuchsia-300/30 text-fuchsia-200'
        : 'bg-zinc-800/60 border-zinc-700 text-zinc-200'
    }`}
    >
      {isAI ? <Cpu size={14} /> : <Rocket size={14} />}
      {isAI ? 'AI Mode' : 'Professional'}
    </div>
  );
};

export default function Hero({ mood, onScrollToWork }) {
  const containerRef = useRef(null);

  // Precompute gradient styles based on mood to avoid recalculation per render
  const gradients = useMemo(() => {
    if (mood === 'ai') {
      return 'from-fuchsia-500/30 via-cyan-400/20 to-purple-500/30';
    }
    return 'from-zinc-700/30 via-zinc-600/20 to-zinc-700/30';
  }, [mood]);

  useEffect(() => {
    // Prevent scroll jank on mobile by hinting the browser
    if (containerRef.current) {
      containerRef.current.style.contain = 'content';
    }
  }, []);

  return (
    <section ref={containerRef} className="relative h-[90vh] w-full overflow-hidden rounded-2xl border border-white/10 bg-black">
      {/* 3D Scene */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/EF7JOSsHLk16Tlw9/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Non-blocking overlays for glow/gradients */}
      <div className="pointer-events-none absolute inset-0">
        <div className={`absolute -inset-32 blur-3xl opacity-60 bg-gradient-to-tr ${gradients}`} />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex h-full max-w-6xl flex-col items-center justify-center px-6 text-center">
        <MoodBadge mood={mood} />
        <h1 className="mt-5 bg-gradient-to-br from-white via-white to-zinc-300 bg-clip-text text-4xl font-extrabold tracking-tight text-transparent sm:text-5xl md:text-6xl">
          Rahul Gunda
        </h1>
        <p className={`mt-4 max-w-2xl text-sm sm:text-base ${mood === 'ai' ? 'text-zinc-300' : 'text-zinc-400'}`}>
          Building intelligent, immersive web experiences with modern frontend and AI-first design.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <button
            onClick={onScrollToWork}
            className={`inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 ${
              mood === 'ai'
                ? 'bg-gradient-to-r from-fuchsia-500 to-cyan-400 text-black focus:ring-fuchsia-400 focus:ring-offset-black'
                : 'bg-white text-black hover:bg-zinc-200 focus:ring-zinc-400 focus:ring-offset-black'
            }`}
          >
            <Rocket size={16} /> Explore Work
          </button>
          <a
            href="#contact"
            className={`inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition-colors ${
              mood === 'ai'
                ? 'bg-zinc-900/70 text-zinc-200 border border-white/10 hover:bg-zinc-900'
                : 'bg-zinc-900 text-zinc-100 border border-zinc-700 hover:bg-zinc-800'
            }`}
          >
            Contact
          </a>
        </div>
      </div>
    </section>
  );
}
