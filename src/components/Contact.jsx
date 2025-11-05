import React from 'react';
import { Mail, Download } from 'lucide-react';

export default function Contact({ mood }) {
  const isAI = mood === 'ai';

  const handleDownloadCV = () => {
    const content = `Rahul Gunda\n\nFrontend Engineer | AI-First Product Developer\n\nSkills: React, TypeScript, Tailwind, Framer Motion, FastAPI, MongoDB, Spline\nExperience: Built immersive, performant web apps with 3D and AI interactions.\nProjects: Neon Portfolio, Realtime Dashboard, GenAI Toolkit.\nContact: rahul@example.com`;
    const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'Rahul_Gunda_CV.txt';
    document.body.appendChild(a);
    a.click();
    a.remove();
    URL.revokeObjectURL(url);
  };

  return (
    <section id="contact" className="relative mx-auto my-16 w-full max-w-6xl px-6">
      <div
        className={`rounded-2xl border p-6 sm:p-8 shadow-lg backdrop-blur ${
          isAI
            ? 'border-white/10 bg-white/5'
            : 'border-zinc-800 bg-zinc-900/60'
        }`}
      >
        <h2 className="text-xl sm:text-2xl font-semibold text-white">Contact</h2>
        <p className={`mt-3 text-sm ${isAI ? 'text-zinc-200' : 'text-zinc-300'}`}>
          I’m open to collaborations and new opportunities. Let’s build something remarkable.
        </p>
        <div className="mt-5 flex flex-wrap gap-3">
          <a
            href="mailto:rahul@example.com"
            className={`inline-flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium ${
              isAI ? 'bg-gradient-to-r from-fuchsia-500 to-cyan-400 text-black' : 'bg-white text-black'
            }`}
          >
            <Mail size={16} /> Email Me
          </a>
          <button
            onClick={handleDownloadCV}
            className={`inline-flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium ${
              isAI
                ? 'bg-zinc-900/70 text-zinc-100 border border-white/10'
                : 'bg-zinc-900 text-zinc-100 border border-zinc-800'
            }`}
          >
            <Download size={16} /> Download CV
          </button>
        </div>
      </div>
    </section>
  );
}
