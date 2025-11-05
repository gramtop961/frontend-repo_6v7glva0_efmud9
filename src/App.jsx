import React, { useRef, useState, useEffect } from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Work from './components/Work';
import Contact from './components/Contact';
import { Sun, Moon } from 'lucide-react';

function App() {
  const workRef = useRef(null);
  const contactRef = useRef(null);
  const [dark, setDark] = useState(true);
  const [mood, setMood] = useState('professional'); // 'professional' | 'ai'

  useEffect(() => {
    const mq = window.matchMedia('(prefers-color-scheme: dark)');
    setDark(mq.matches);
  }, []);

  const scrollToWork = () => workRef.current?.scrollIntoView({ behavior: 'smooth' });
  const scrollToContact = () => contactRef.current?.scrollIntoView({ behavior: 'smooth' });

  return (
    <div className={dark ? 'dark' : ''}>
      <div className={`min-h-screen font-sans text-white ${mood === 'professional' ? 'bg-[#0a0a0f]' : 'bg-gradient-to-b from-[#06060a] via-[#0a0a12] to-[#0a0612]'}`}>
        {/* Theme + Mood controls */}
        <div className="fixed right-4 top-4 z-50 flex items-center gap-2">
          <button
            onClick={() => setDark((d) => !d)}
            className="rounded-full border border-white/10 bg-white/10 p-2 text-cyan-100 backdrop-blur hover:bg-white/20"
            aria-label="Toggle theme"
          >
            {dark ? <Sun className="h-4 w-4 text-[#00f5d4]" /> : <Moon className="h-4 w-4 text-[#7b61ff]" />}
          </button>

          <div className="rounded-full border border-white/10 bg-white/10 p-1 backdrop-blur">
            <button
              onClick={() => setMood('professional')}
              className={`px-3 py-1 text-xs font-semibold rounded-full transition ${mood === 'professional' ? 'bg-white/20 text-cyan-100' : 'text-cyan-100/70 hover:text-cyan-100'}`}
              aria-pressed={mood === 'professional'}
            >
              Professional
            </button>
            <button
              onClick={() => setMood('ai')}
              className={`px-3 py-1 text-xs font-semibold rounded-full transition ${mood === 'ai' ? 'bg-white/20 text-violet-100' : 'text-violet-100/70 hover:text-violet-100'}`}
              aria-pressed={mood === 'ai'}
            >
              AI Mode
            </button>
          </div>
        </div>

        {/* Sections */}
        <Hero onViewWork={scrollToWork} onHireMe={scrollToContact} mood={mood} />

        <div ref={workRef}>
          <About mood={mood} />
        </div>

        <Work mood={mood} />

        <div ref={contactRef}>
          <Contact mood={mood} />
        </div>
      </div>
    </div>
  );
}

export default App;
