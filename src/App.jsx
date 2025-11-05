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

  useEffect(() => {
    // Optional: sync with prefers-color-scheme
    const mq = window.matchMedia('(prefers-color-scheme: dark)');
    setDark(mq.matches);
  }, []);

  const scrollToWork = () => workRef.current?.scrollIntoView({ behavior: 'smooth' });
  const scrollToContact = () => contactRef.current?.scrollIntoView({ behavior: 'smooth' });

  return (
    <div className={dark ? 'dark' : ''}>
      <div className="min-h-screen bg-[#0a0a0f] font-sans text-white">
        {/* Theme toggle */}
        <button
          onClick={() => setDark((d) => !d)}
          className="fixed right-4 top-4 z-50 rounded-full border border-white/10 bg-white/10 p-2 text-cyan-100 backdrop-blur hover:bg-white/20"
          aria-label="Toggle theme"
        >
          {dark ? <Sun className="h-4 w-4 text-[#00f5d4]" /> : <Moon className="h-4 w-4 text-[#7b61ff]" />}
        </button>

        {/* HERO */}
        <Hero onViewWork={scrollToWork} onHireMe={scrollToContact} />

        {/* ABOUT */}
        <div ref={workRef}>
          <About />
        </div>

        {/* WORK (Projects, Skills, AI Assistant) */}
        <Work />

        {/* CONTACT + Testimonials */}
        <div ref={contactRef}>
          <Contact />
        </div>
      </div>
    </div>
  );
}

export default App;
