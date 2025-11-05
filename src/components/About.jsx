import React from 'react';
import { MapPin, GraduationCap, Sparkles } from 'lucide-react';

export default function About({ mood }) {
  const isAI = mood === 'ai';

  const skills = [
    { label: 'Frontend', items: ['HTML', 'CSS', 'JavaScript', 'React'] },
    { label: 'Backend', items: ['Python', 'SQL', 'DBMS', 'Firebase'] },
    { label: 'AI/Analytics', items: ['Generative AI', 'Business Analytics', 'Data Engineering (AWS, Celonis)'] },
    { label: 'Soft', items: ['Leadership', 'Adaptability', 'Client Relations', 'Design Thinking'] },
  ];

  return (
    <section id="about" className="relative mx-auto mt-16 w-full max-w-6xl px-6">
      <div className={`rounded-2xl border p-6 sm:p-10 shadow-lg backdrop-blur ${
        isAI ? 'border-white/10 bg-gradient-to-br from-[#7b61ff]/10 via-[#00f5d4]/10 to-transparent' : 'border-zinc-800 bg-zinc-900/60'
      }`}>
        <div className="flex items-start justify-between gap-6 flex-col lg:flex-row">
          <div className="flex-1">
            <div className="inline-flex items-center gap-2 text-sm font-semibold text-zinc-200">
              <Sparkles className="h-4 w-4 text-[#7b61ff]" /> About
            </div>
            <p className={`mt-3 text-sm leading-relaxed ${isAI ? 'text-zinc-200' : 'text-zinc-300'}`}>
              Tech-driven strategist with a deep understanding of client behavior and digital ecosystems. Proficient in analytical problem-solving, leading cross-functional tech teams, and driving data-informed decisions.
            </p>

            <div className="mt-4 flex flex-wrap gap-3 text-sm">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-zinc-200">
                <MapPin className="h-4 w-4" /> Guntur, AP
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-zinc-200">
                <GraduationCap className="h-4 w-4" /> CSBS — R.V.R. & J.C. (CGPA 7.53/10)
              </span>
            </div>

            <div className="mt-4 flex flex-wrap gap-2 text-xs">
              {['Generative AI', 'Data Engineering (AWS, Celonis)', 'Web Innovation'].map((chip) => (
                <span key={chip} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-zinc-200">{chip}</span>
              ))}
            </div>
          </div>

          <div className="flex-1 w-full">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {skills.map((group) => (
                <div key={group.label} className="rounded-xl border border-white/10 bg-white/5 p-4">
                  <h3 className="text-sm font-semibold text-white">{group.label}</h3>
                  <ul className="mt-2 space-y-2">
                    {group.items.map((item) => (
                      <li key={item} className="flex items-center justify-between gap-3 text-sm text-zinc-200">
                        <span>{item}</span>
                        <span className="relative h-2 flex-1 ml-3 rounded-full bg-white/10 overflow-hidden">
                          <span className="absolute inset-y-0 left-0 bg-gradient-to-r from-[#7b61ff] to-[#00f5d4] w-4/5 animate-[pulse_2s_ease-in-out_infinite]" />
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
