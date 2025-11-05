import React from 'react';
import { Sparkles, Brain, Code2 } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="relative w-full bg-slate-950 py-20 text-slate-100">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="mb-6 text-3xl font-semibold tracking-tight">About</h2>
        <p className="max-w-3xl text-slate-300">
          I design and build AI‑infused web apps that feel effortless. My approach blends strong product thinking,
          robust engineering, and a taste for motion—so the final experience is fast, accessible, and genuinely useful.
        </p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-5">
            <div className="mb-3 inline-flex rounded-lg bg-cyan-500/10 p-2 text-cyan-300">
              <Code2 size={18} />
            </div>
            <h3 className="mb-2 font-semibold">Full‑Stack</h3>
            <p className="text-sm text-slate-300">React, Node, FastAPI, databases, and modern tooling for scalable delivery.</p>
          </div>
          <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-5">
            <div className="mb-3 inline-flex rounded-lg bg-cyan-500/10 p-2 text-cyan-300">
              <Brain size={18} />
            </div>
            <h3 className="mb-2 font-semibold">AI & Analytics</h3>
            <p className="text-sm text-slate-300">LLM integrations, prompted UX, and insights that drive decisions.</p>
          </div>
          <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-5">
            <div className="mb-3 inline-flex rounded-lg bg-cyan-500/10 p-2 text-cyan-300">
              <Sparkles size={18} />
            </div>
            <h3 className="mb-2 font-semibold">Design Systems</h3>
            <p className="text-sm text-slate-300">Accessible components, consistent theming, and polished motion.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
