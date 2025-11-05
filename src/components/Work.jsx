import React, { useMemo, useState } from 'react';
import { ExternalLink, Filter, Play, MessageCircle } from 'lucide-react';

function Tag({ children }) {
  return (
    <span className="rounded-full border border-white/10 bg-white/5 px-2.5 py-0.5 text-xs text-zinc-200">
      {children}
    </span>
  );
}

function ProjectCard({ mood, title, summary, stack, labels = [], media, link }) {
  const isAI = mood === 'ai';
  return (
    <div className={`group relative overflow-hidden rounded-2xl border p-4 transition ${
      isAI ? 'border-white/10 bg-white/5 hover:bg-white/10' : 'border-zinc-800 bg-zinc-900/70 hover:bg-zinc-900'
    }`}>
      <div className="aspect-video rounded-xl bg-black/40 grid place-items-center overflow-hidden">
        {media ? (
          <video className="h-full w-full object-cover" src={media} autoPlay loop muted playsInline />
        ) : (
          <Play className="h-6 w-6 text-zinc-400" />
        )}
      </div>
      <div className="mt-3 flex flex-wrap gap-2">
        {labels.map((l) => (
          <Tag key={l}>{l}</Tag>
        ))}
      </div>
      <h3 className="mt-3 text-white font-semibold">{title}</h3>
      <p className={`mt-1 text-sm ${isAI ? 'text-zinc-200' : 'text-zinc-300'}`}>{summary}</p>
      <div className="mt-2 flex flex-wrap gap-2">
        {stack.map((s) => (
          <span key={s} className="rounded-md border border-white/10 bg-white/5 px-2 py-0.5 text-xs text-zinc-300">{s}</span>
        ))}
      </div>
      <div className="mt-3 flex gap-2">
        <a href={link} target="_blank" rel="noreferrer" className={`inline-flex items-center gap-2 rounded-lg px-3 py-1.5 text-sm ${
          isAI ? 'bg-gradient-to-r from-[#7b61ff] to-[#00f5d4] text-black' : 'bg-white text-black'
        }`}>
          <ExternalLink className="h-4 w-4" /> Visit
        </a>
        <a href={link} target="_blank" rel="noreferrer" className={`inline-flex items-center gap-2 rounded-lg px-3 py-1.5 text-sm border ${
          isAI ? 'border-white/15 bg-white/5 text-white' : 'border-zinc-700 bg-zinc-900 text-white'
        }`}>
          Details
        </a>
      </div>
    </div>
  );
}

function AIAssistant({ mood }) {
  const isAI = mood === 'ai';
  const [messages, setMessages] = useState([
    { role: 'assistant', content: "Ask My Work: Try 'Show Rahul’s AI projects', 'Summarize Eagle i', or 'What skills match a Data Engineering role?'" },
  ]);
  const [input, setInput] = useState('');

  const canned = (q) => {
    const t = q.toLowerCase();
    if (t.includes('ai project')) return 'AI Projects: Eagle i, TechTrek — AI Resume Generator. Both leverage LLMs and intelligent detection.';
    if (t.includes('summarize') && t.includes('eagle')) return 'Eagle i targets fraud websites and enhances security via intelligent detection. Stack: Generative AI, Python, Web.';
    if (t.includes('data') && t.includes('engineer')) return 'Matching skills: Python, SQL, Data Engineering (AWS, Celonis), Business Analytics.';
    return 'I can filter projects, summarize highlights, and map skills. More smart features coming soon.';
  };

  const send = () => {
    const q = input.trim();
    if (!q) return;
    setMessages((m) => [...m, { role: 'user', content: q }]);
    setInput('');
    setTimeout(() => setMessages((m) => [...m, { role: 'assistant', content: canned(q) }]), 250);
  };

  return (
    <div className={`rounded-2xl border p-4 ${isAI ? 'border-white/10 bg-white/5' : 'border-zinc-800 bg-zinc-900/70'}`}>
      <div className="flex items-center gap-2 text-sm font-semibold text-zinc-200">
        <MessageCircle className="h-4 w-4" /> Ask My Work
      </div>
      <div className="mt-3 max-h-56 overflow-y-auto space-y-2 pr-1">
        {messages.map((m, i) => (
          <div key={i} className={`max-w-[85%] rounded-lg px-3 py-2 text-sm ${m.role === 'assistant' ? 'bg-white/10 text-zinc-100' : 'ml-auto bg-zinc-200 text-zinc-900'}`}>{m.content}</div>
        ))}
      </div>
      <div className="mt-3 flex gap-2">
        <input value={input} onChange={(e) => setInput(e.target.value)} onKeyDown={(e)=> e.key==='Enter' && send()} placeholder="Type a question…" className={`flex-1 rounded-lg px-3 py-2 text-sm outline-none ${isAI ? 'bg-white/10 text-white placeholder:text-zinc-300' : 'bg-zinc-800 text-white placeholder:text-zinc-400'}`} />
        <button onClick={send} className={`rounded-lg px-3 py-2 text-sm font-semibold ${isAI ? 'bg-gradient-to-r from-[#7b61ff] to-[#00f5d4] text-black' : 'bg-white text-black'}`}>Send</button>
      </div>
    </div>
  );
}

export default function Work({ mood }) {
  const filters = ['All', 'Web Apps', 'AI Projects', 'Mobile', 'Analytics'];
  const [active, setActive] = useState('All');

  const items = useMemo(() => ([
    { key: 'eagle', title: 'Eagle i (AI • Security)', summary: 'Targets fraud websites; enhances security via intelligent detection.', stack: ['Generative AI', 'Python', 'Web'], labels: ['AI'], cat: 'AI Projects', link: 'https://example.com' },
    { key: 'onthego', title: 'OnTheGo (Mobile • Service)', summary: 'Vehicle breakdown recovery companion app.', stack: ['Android', 'Firebase', 'Maps'], labels: ['Mobile'], cat: 'Mobile', link: 'https://example.com' },
    { key: 'food', title: 'Food Donation App (Android • Social)', summary: 'Donor ↔ charity matching with maps & auth.', stack: ['Android', 'Firebase', 'Auth'], labels: ['Mobile'], cat: 'Mobile', link: 'https://example.com' },
    { key: 'techtrek', title: 'TechTrek — AI Resume Generator (Web • AI)', summary: 'Tailors resumes using LLMs.', stack: ['LLMs', 'Next.js', 'Vercel'], labels: ['Web', 'AI'], cat: 'AI Projects', link: 'https://example.com' },
    { key: 'tamasha', title: 'TAMASHA @ Houseway.co.in (Web • Events)', summary: 'Interactive event engagement site.', stack: ['React', 'Animation', 'Design'], labels: ['Web'], cat: 'Web Apps', link: 'https://example.com' },
  ]), []);

  const visible = items.filter((i) => active === 'All' ? true : i.cat === active);

  return (
    <section id="work" className="relative mx-auto mt-16 w-full max-w-6xl px-6">
      <div className="flex items-center justify-between">
        <h2 className="text-xl sm:text-2xl font-semibold text-white">Featured Projects</h2>
        <div className="flex items-center gap-2 text-xs">
          <Filter className="h-4 w-4 text-zinc-400" />
          <div className="flex gap-1">
            {filters.map((f) => (
              <button key={f} onClick={() => setActive(f)} className={`rounded-full px-3 py-1 border text-xs ${active===f ? 'bg-gradient-to-r from-[#7b61ff] to-[#00f5d4] text-black border-transparent' : 'border-white/10 text-zinc-200'}`}>{f}</button>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {visible.map((p) => (
          <ProjectCard key={p.key} mood={mood} title={p.title} summary={p.summary} stack={p.stack} labels={p.labels} link={p.link} />
        ))}
      </div>

      <div className="mt-8">
        <AIAssistant mood={mood} />
      </div>
    </section>
  );
}
