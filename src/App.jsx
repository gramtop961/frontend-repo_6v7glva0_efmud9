import React, { useMemo, useRef, Suspense, lazy, useState } from 'react';
import Hero from './components/Hero';
import About from './components/About';

// Code-split heavier sections for faster initial paint
const Work = lazy(() => import('./components/Work'));
const Contact = lazy(() => import('./components/Contact'));

export default function App() {
  const [mood, setMood] = useState('professional'); // 'professional' | 'ai'

  const workRef = useRef(null);

  const handleScrollToWork = () => {
    workRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const containerBg = useMemo(
    () =>
      mood === 'ai'
        ? 'bg-gradient-to-b from-black via-fuchsia-950 to-black'
        : 'bg-gradient-to-b from-black via-zinc-950 to-black',
    [mood]
  );

  return (
    <div className={`min-h-screen text-white ${containerBg}`}>
      <header className="sticky top-0 z-20 mx-auto flex w-full max-w-6xl items-center justify-between gap-3 px-6 py-4 backdrop-blur supports-[backdrop-filter]:bg-black/30">
        <div className="text-sm font-semibold text-zinc-300">RG</div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => setMood('professional')}
            className={`rounded-full px-3 py-1.5 text-xs font-medium border ${
              mood === 'professional'
                ? 'bg-white text-black border-white'
                : 'bg-transparent text-zinc-300 border-zinc-700'
            }`}
          >
            Professional
          </button>
          <button
            onClick={() => setMood('ai')}
            className={`rounded-full px-3 py-1.5 text-xs font-medium border ${
              mood === 'ai'
                ? 'bg-gradient-to-r from-fuchsia-500 to-cyan-400 text-black border-transparent'
                : 'bg-transparent text-zinc-300 border-zinc-700'
            }`}
          >
            AI Mode
          </button>
        </div>
      </header>

      <main className="mx-auto w-full max-w-7xl px-4 sm:px-6">
        <Hero mood={mood} onScrollToWork={handleScrollToWork} />
        <About mood={mood} />

        {/* Anchor for smooth scroll to Work */}
        <div ref={workRef} />

        <Suspense fallback={<div className="mx-auto mt-16 max-w-6xl px-6 text-zinc-400">Loading work…</div>}>
          <Work mood={mood} />
        </Suspense>
        <Suspense fallback={<div className="mx-auto mt-8 max-w-6xl px-6 text-zinc-400">Loading contact…</div>}>
          <Contact mood={mood} />
        </Suspense>
      </main>

      <footer className="mx-auto mt-10 w-full max-w-6xl px-6 pb-10 text-center text-xs text-zinc-500">
        © {new Date().getFullYear()} Rahul Gunda. Built with performance-first design.
      </footer>
    </div>
  );
}
