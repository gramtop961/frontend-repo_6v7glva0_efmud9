import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Work from './components/Work';
import Contact from './components/Contact';

function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-800/80 bg-slate-950/70 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
        <a href="#home" className="text-sm font-semibold tracking-wide text-cyan-300">RG</a>
        <nav className="flex items-center gap-4 text-sm">
          <a href="#about" className="rounded-md px-2 py-1 text-slate-300 transition hover:text-white focus:outline-none focus:ring-2 focus:ring-cyan-300">About</a>
          <a href="#work" className="rounded-md px-2 py-1 text-slate-300 transition hover:text-white focus:outline-none focus:ring-2 focus:ring-cyan-300">Work</a>
          <a href="#contact" className="rounded-md px-2 py-1 text-slate-300 transition hover:text-white focus:outline-none focus:ring-2 focus:ring-cyan-300">Contact</a>
        </nav>
      </div>
    </header>
  );
}

export default function App() {
  return (
    <div className="min-h-screen w-full bg-slate-950">
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-cyan-500 focus:px-4 focus:py-2 focus:text-slate-950">Skip to content</a>
      <Header />
      <main id="main">
        <Hero />
        <About />
        <Work />
        <Contact />
      </main>
      <footer className="border-t border-slate-800/80 bg-slate-950 py-10 text-center text-sm text-slate-400">
        © {new Date().getFullYear()} Rahul Gunda. Built with care.
      </footer>
    </div>
  );
}
