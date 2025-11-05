import React, { useMemo, useRef, useState } from 'react';
import { MessageCircle, ExternalLink } from 'lucide-react';

function ProjectCard({ mood, title, description, tags, href }) {
  const isAI = mood === 'ai';
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className={`group block rounded-2xl border p-5 transition-transform hover:-translate-y-0.5 ${
        isAI
          ? 'border-white/10 bg-white/5 hover:bg-white/10'
          : 'border-zinc-800 bg-zinc-900/70 hover:bg-zinc-900'
      }`}
    >
      <div className="flex items-start justify-between gap-3">
        <h3 className="text-white font-semibold">{title}</h3>
        <ExternalLink size={16} className="text-zinc-400 group-hover:text-white" />
      </div>
      <p className={`mt-2 text-sm ${isAI ? 'text-zinc-200' : 'text-zinc-300'}`}>{description}</p>
      <div className="mt-3 flex flex-wrap gap-2">
        {tags.map((t) => (
          <span
            key={t}
            className={`rounded-full px-2.5 py-1 text-xs ${
              isAI
                ? 'bg-fuchsia-500/15 text-fuchsia-200 border border-fuchsia-300/20'
                : 'bg-zinc-800 text-zinc-200 border border-zinc-700'
            }`}
          >
            {t}
          </span>
        ))}
      </div>
    </a>
  );
}

function AIAssistant({ mood }) {
  const isAI = mood === 'ai';
  const [messages, setMessages] = useState([
    { role: 'assistant', content: 'Hi! I\'m the on-page AI. Ask about my projects or tech stack.' },
  ]);
  const [input, setInput] = useState('');
  const inputRef = useRef(null);

  const handleSend = () => {
    const text = input.trim();
    if (!text) return;
    setMessages((m) => [...m, { role: 'user', content: text }]);
    setInput('');
    // Canned reply for speed and to avoid network calls
    const reply =
      text.toLowerCase().includes('stack')
        ? 'React, Vite, Tailwind, Framer Motion on the front; FastAPI + MongoDB on the back. Optimized for performance.'
        : text.toLowerCase().includes('project')
        ? 'I build immersive, fast sites with 3D accents and AI helpers. Check the cards for details.'
        : 'Great question! I\'ll keep refining this assistant with voice and smarter answers next.';
    setTimeout(() => setMessages((m) => [...m, { role: 'assistant', content: reply }]), 300);
    inputRef.current?.focus();
  };

  return (
    <div
      className={`rounded-2xl border p-4 sm:p-5 ${
        isAI ? 'border-white/10 bg-white/5' : 'border-zinc-800 bg-zinc-900/70'
      }`}
    >
      <div className="flex items-center gap-2 text-sm font-medium text-zinc-200">
        <MessageCircle size={16} /> Quick AI Assistant
      </div>
      <div className="mt-3 space-y-2 max-h-56 overflow-y-auto pr-1">
        {messages.map((m, i) => (
          <div
            key={i}
            className={`w-fit max-w-[85%] rounded-lg px-3 py-2 text-sm ${
              m.role === 'assistant'
                ? isAI
                  ? 'bg-fuchsia-500/15 text-fuchsia-100'
                  : 'bg-zinc-800 text-zinc-200'
                : 'bg-zinc-200 text-zinc-900 ml-auto'
            }`}
          >
            {m.content}
          </div>
        ))}
      </div>
      <div className="mt-3 flex gap-2">
        <input
          ref={inputRef}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSend()}
          placeholder="Ask something..."
          className={`flex-1 rounded-lg px-3 py-2 text-sm outline-none transition ${
            isAI ? 'bg-white/10 text-white placeholder:text-zinc-300' : 'bg-zinc-800 text-white placeholder:text-zinc-400'
          }`}
        />
        <button
          onClick={handleSend}
          className={`rounded-lg px-3 py-2 text-sm font-semibold ${
            isAI ? 'bg-gradient-to-r from-fuchsia-500 to-cyan-400 text-black' : 'bg-white text-black'
          }`}
        >
          Send
        </button>
      </div>
    </div>
  );
}

export default function Work({ mood }) {
  const projects = useMemo(
    () => [
      {
        title: 'Neon Portfolio',
        description: '3D hero, AI chat helper, and blazing-fast UI with optimized rendering.',
        tags: ['React', 'Spline', 'AI UI'],
        href: 'https://example.com',
      },
      {
        title: 'Realtime Dashboard',
        description: 'Clean, accessible charts and controls with dark mode and animations.',
        tags: ['Vite', 'Tailwind', 'Framer Motion'],
        href: 'https://example.com',
      },
      {
        title: 'GenAI Toolkit',
        description: 'Embeddings, retrieval, and prompt tooling with FastAPI + MongoDB.',
        tags: ['FastAPI', 'MongoDB', 'RAG'],
        href: 'https://example.com',
      },
    ],
    []
  );

  return (
    <section id="work" className="relative mx-auto mt-16 w-full max-w-6xl px-6">
      <div className="flex items-end justify-between">
        <h2 className="text-xl sm:text-2xl font-semibold text-white">Selected Work</h2>
      </div>

      <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
        {projects.map((p) => (
          <ProjectCard key={p.title} mood={mood} {...p} />
        ))}
      </div>

      <div className="mt-6">
        <AIAssistant mood={mood} />
      </div>
    </section>
  );
}
