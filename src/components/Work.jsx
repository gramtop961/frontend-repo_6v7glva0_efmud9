import React from 'react';
import { ExternalLink, Code } from 'lucide-react';

const projects = [
  {
    title: 'NeuroUI — AI Design Copilot',
    description: 'An assistant that turns natural language into responsive UI components.',
    stack: ['React', 'Tailwind', 'OpenAI'],
    url: 'https://example.com',
  },
  {
    title: 'InsightHub — Analytics Dashboards',
    description: 'Composable charts with anomaly detection and scheduled PDF digests.',
    stack: ['Vite', 'FastAPI', 'MongoDB'],
    url: 'https://example.com',
  },
  {
    title: 'FlowKit — Motion Library',
    description: 'Micro-interactions and transitions optimized for performance and a11y.',
    stack: ['Framer Motion', 'TypeScript'],
    url: 'https://example.com',
  },
];

export default function Work() {
  return (
    <section id="work" className="relative w-full bg-gradient-to-b from-slate-950 to-slate-900 py-20 text-slate-100">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="mb-6 text-3xl font-semibold tracking-tight">Selected Work</h2>
        <p className="mb-10 max-w-3xl text-slate-300">A few projects showcasing product thinking, clean architecture, and thoughtful motion.</p>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <article key={p.title} className="group flex flex-col rounded-2xl border border-slate-800 bg-slate-900/40 p-5 transition-shadow hover:shadow-[0_0_0_1px_rgba(34,211,238,0.25)]">
              <h3 className="mb-2 text-lg font-semibold text-white">{p.title}</h3>
              <p className="mb-4 text-sm text-slate-300">{p.description}</p>
              <div className="mb-4 flex flex-wrap gap-2">
                {p.stack.map((s) => (
                  <span key={s} className="rounded-full border border-slate-700/80 bg-slate-800/60 px-2.5 py-1 text-xs text-slate-200">{s}</span>
                ))}
              </div>
              <div className="mt-auto flex items-center justify-between pt-2">
                <a
                  href={p.url}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg bg-slate-800 px-3 py-2 text-sm font-medium text-slate-100 transition hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-cyan-300 focus:ring-offset-2 focus:ring-offset-slate-900"
                >
                  <ExternalLink size={16} /> Visit
                </a>
                <span className="inline-flex items-center gap-2 text-xs text-slate-400"><Code size={14} /> Clean & Modular</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
