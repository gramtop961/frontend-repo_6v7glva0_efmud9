import { useEffect, useMemo, useState, Suspense, lazy, useCallback } from 'react';
import { Sparkles, Sun, Moon, Bot } from 'lucide-react';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';

const Work = lazy(() => import('./components/Work.jsx'));
const Contact = lazy(() => import('./components/Contact.jsx'));

const MOODS = ['light', 'dark', 'ai'] as const;

type Mood = typeof MOODS[number];

export default function App() {
  const [mood, setMood] = useState('dark');

  // Load theme preference
  useEffect(() => {
    const stored = localStorage.getItem('rg:mood');
    if (stored && MOODS.includes(stored as any)) setMood(stored);
  }, []);

  // Persist theme preference
  useEffect(() => {
    localStorage.setItem('rg:mood', mood);
  }, [mood]);

  // Keyboard easter egg: type "/ai-mode" to toggle AI mode
  useEffect(() => {
    let buffer = '';
    const onKey = (e: KeyboardEvent) => {
      buffer = (buffer + e.key).slice(-8);
      if (buffer === '/ai-mode') setMood('ai');
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  const themeClasses = useMemo(() => {
    if (mood === 'light') return 'bg-white text-zinc-900';
    return 'bg-[#0a0a0f] text-white';
  }, [mood]);

  const glow = mood === 'ai';

  const scrollToWork = useCallback(() => {
    document.querySelector('#work')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, []);

  return (
    <div className={themeClasses}>
      {/* Global header */}
      <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/5 border-b border-white/10">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="relative">
              <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-[#7b61ff] to-[#00f5d4] grid place-items-center shadow-lg shadow-[#7b61ff]/30">
                <span className="font-black tracking-wider">RG</span>
              </div>
              {glow && (
                <div className="pointer-events-none absolute inset-0 rounded-xl blur-xl opacity-50 md:opacity-60 bg-gradient-to-br from-[#7b61ff]/60 to-[#00f5d4]/60" />
              )}
            </div>
            <span className="hidden sm:block font-semibold">Rahul Gunda</span>
          </div>

          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#work" className="focus:outline-none focus-visible:ring-2 focus-visible:ring-[#7b61ff] rounded hover:text-[#7b61ff] transition-colors">Work</a>
            <a href="#about" className="focus:outline-none focus-visible:ring-2 focus-visible:ring-[#7b61ff] rounded hover:text-[#7b61ff] transition-colors">Skills</a>
            <a href="#experience" className="focus:outline-none focus-visible:ring-2 focus-visible:ring-[#7b61ff] rounded hover:text-[#7b61ff] transition-colors">Experience</a>
            <a href="#blog" className="focus:outline-none focus-visible:ring-2 focus-visible:ring-[#7b61ff] rounded hover:text-[#7b61ff] transition-colors">Blog</a>
            <a href="#contact" className="focus:outline-none focus-visible:ring-2 focus-visible:ring-[#7b61ff] rounded hover:text-[#7b61ff] transition-colors">Contact</a>
          </nav>

          <div className="flex items-center gap-2">
            <button aria-label="Light mode" onClick={() => setMood('light')} className={`h-9 w-9 grid place-items-center rounded-lg border transition focus:outline-none focus-visible:ring-2 focus-visible:ring-[#7b61ff] ${mood==='light'?'border-[#7b61ff] text-[#7b61ff]':'border-white/10 hover:border-white/30'}`}>
              <Sun className="h-4 w-4" />
            </button>
            <button aria-label="Dark mode" onClick={() => setMood('dark')} className={`h-9 w-9 grid place-items-center rounded-lg border transition focus:outline-none focus-visible:ring-2 focus-visible:ring-[#7b61ff] ${mood==='dark'?'border-[#7b61ff] text-[#7b61ff]':'border-white/10 hover:border-white/30'}`}>
              <Moon className="h-4 w-4" />
            </button>
            <button aria-label="AI mode" onClick={() => setMood('ai')} className={`h-9 w-9 grid place-items-center rounded-lg border transition focus:outline-none focus-visible:ring-2 focus-visible:ring-[#7b61ff] ${mood==='ai'?'border-[#7b61ff] text-[#7b61ff]':'border-white/10 hover:border-white/30'}`}>
              <Bot className="h-4 w-4" />
            </button>
          </div>
        </div>
      </header>

      {/* Ambient AI glow layers for AI mode; toned down on mobile */}
      {glow && (
        <div className="pointer-events-none fixed inset-0">
          <div className="absolute left-1/2 -translate-x-1/2 top-10 w-[70vw] md:w-[60vw] h-[70vw] md:h-[60vw] bg-[#7b61ff]/15 md:bg-[#7b61ff]/20 rounded-full blur-[90px] md:blur-[120px]" />
          <div className="absolute left-1/3 top-1/2 w-[55vw] md:w-[40vw] h-[55vw] md:h-[40vw] bg-[#00f5d4]/10 md:bg-[#00f5d4]/20 rounded-full blur-[90px] md:blur-[120px]" />
        </div>
      )}

      {/* Main */}
      <main id="content">
        <Hero onPrimaryClick={scrollToWork} />
        <About mood={mood} />
        <Suspense fallback={<div className="max-w-6xl mx-auto px-4 py-12">Loading…</div>}>
          <Work mood={mood} />
          <Contact mood={mood} />
        </Suspense>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/10 mt-16">
        <div className="max-w-6xl mx-auto px-4 py-8 text-sm flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="opacity-70">© {new Date().getFullYear()} Rahul Gunda. All rights reserved.</p>
          <nav className="flex items-center gap-4">
            <a href="#privacy" className="opacity-80 hover:text-[#7b61ff] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#7b61ff] rounded">Privacy</a>
            <a href="#imprint" className="opacity-80 hover:text-[#7b61ff] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#7b61ff] rounded">Imprint</a>
            <div className="flex items-center gap-2 opacity-80">
              <Sparkles className="h-4 w-4" />
              <span>Futuristic minimalism × AI energy</span>
            </div>
          </nav>
        </div>
      </footer>
    </div>
  );
}
