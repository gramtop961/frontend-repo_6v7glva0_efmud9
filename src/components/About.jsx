import React from 'react';

export default function About({ mood }) {
  const isAI = mood === 'ai';
  return (
    <section id="about" className="relative mx-auto mt-16 w-full max-w-6xl px-6">
      <div
        className={`rounded-2xl border p-6 sm:p-8 shadow-lg backdrop-blur ${
          isAI
            ? 'border-white/10 bg-gradient-to-br from-fuchsia-500/10 via-cyan-500/5 to-purple-500/10'
            : 'border-zinc-800 bg-zinc-900/60'
        }`}
      >
        <h2 className="text-xl sm:text-2xl font-semibold text-white">About</h2>
        <p className={`mt-3 text-sm leading-relaxed ${isAI ? 'text-zinc-200' : 'text-zinc-300'}`}>
          I design and build performant web applications with a focus on delightful UX and scalable systems. My work blends
          interactive 3D, motion, and AI-driven interfaces while keeping performance and accessibility in check.
        </p>
        <ul className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-3">
          {['React', 'TypeScript', 'Tailwind', 'Framer Motion', 'FastAPI', 'Vector Search'].map((skill) => (
            <li
              key={skill}
              className={`rounded-xl px-4 py-3 text-sm ${
                isAI
                  ? 'bg-white/5 border border-white/10 text-zinc-200'
                  : 'bg-zinc-800/60 border border-zinc-700 text-zinc-200'
              }`}
            >
              {skill}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
