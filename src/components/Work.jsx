import React, { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { BadgeCheck, Sparkles } from 'lucide-react';

const projects = [
  {
    title: 'Eagle i',
    label: 'AI PROJECT',
    role: 'Founder / Engineer',
    summary: 'Fraud detection platform enhancing website security using AI.',
    stack: ['Python', 'LLMs', 'Anomaly Detection'],
    color: 'from-[#00f5d4] to-[#7b61ff]'
  },
  {
    title: 'OnTheGo',
    label: 'WEB APP',
    role: 'Full-stack',
    summary: 'Service-oriented app to recover vehicles during breakdowns.',
    stack: ['React', 'Node', 'Maps'],
    color: 'from-[#7b61ff] to-[#00f5d4]'
  },
  {
    title: 'Food Donation App',
    label: 'ANDROID',
    role: 'Developer',
    summary: 'Firebase + Google Maps + Auth for donation tracking.',
    stack: ['Android', 'Firebase', 'Maps'],
    color: 'from-[#00f5d4] to-[#7b61ff]'
  },
  {
    title: 'TAMASHA @Houseway',
    label: 'BUSINESS ANALYTICS',
    role: 'Project Lead',
    summary: 'Modern web platform for event engagement.',
    stack: ['Next.js', 'Design', 'Analytics'],
    color: 'from-[#7b61ff] to-[#00f5d4]'
  },
  {
    title: 'AI Resume Generator (TechTrek)',
    label: 'AI TOOL',
    role: 'Engineer',
    summary: 'Generative resume tool leveraging automation.',
    stack: ['LLMs', 'Automation'],
    color: 'from-[#00f5d4] to-[#7b61ff]'
  }
];

const skills = {
  Frontend: ['HTML', 'CSS', 'JavaScript', 'React'],
  Backend: ['Python', 'SQL', 'DBMS', 'Firebase'],
  'AI / Analytics': ['Generative AI', 'Business Analytics', 'Data Engineering (AWS, Celonis)'],
  'Soft Skills': ['Leadership', 'Adaptability', 'Client Relations', 'Design Thinking']
};

function ProjectCard({ p }) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur"
    >
      <div className={`absolute -right-10 -top-10 h-40 w-40 rounded-full bg-gradient-to-br ${p.color} opacity-20 blur-2xl`} />
      <div className="flex items-center justify-between">
        <span className="rounded-full border border-white/10 bg-white/10 px-2 py-1 text-[10px] font-semibold tracking-widest text-cyan-100/80">
          {p.label}
        </span>
        <Sparkles className="h-4 w-4 text-cyan-300" />
      </div>
      <h3 className="mt-3 text-lg font-semibold text-white">{p.title}</h3>
      <p className="text-xs text-cyan-200/70">{p.role}</p>
      <p className="mt-3 text-sm text-cyan-100/80">{p.summary}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {p.stack.map((t) => (
          <span key={t} className="rounded-full bg-white/10 px-2 py-1 text-[10px] text-cyan-100/80">
            {t}
          </span>
        ))}
      </div>
      <div className="pointer-events-none absolute inset-0 opacity-0 transition group-hover:opacity-100">
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
        <div className="absolute -bottom-6 left-1/2 h-24 w-24 -translate-x-1/2 rounded-full bg-cyan-400/20 blur-2xl" />
      </div>
    </motion.div>
  );
}

function RadarLike() {
  // Simple animated grid representing a radar-like visual
  return (
    <div className="relative h-64 w-full overflow-hidden rounded-2xl border border-white/10 bg-[#0d0d14]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(123,97,255,.15)_0,transparent_60%)]" />
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 10, ease: 'linear' }}
        className="absolute left-1/2 top-1/2 h-[200%] w-[2px] -translate-x-1/2 -translate-y-1/2 bg-gradient-to-b from-transparent via-[#00f5d4] to-transparent"
      />
      <div className="absolute inset-0 grid grid-cols-6 grid-rows-6 opacity-10">
        {Array.from({ length: 36 }).map((_, i) => (
          <div key={i} className="border border-cyan-200/50" />
        ))}
      </div>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="rounded-full border border-cyan-300/30 p-2 text-[10px] text-cyan-200/70">
          AI Pulse
        </div>
      </div>
    </div>
  );
}

function AIAssistant() {
  const [messages, setMessages] = useState([
    { role: 'ai', content: "Hi! I’m Rahul’s AI assistant. Ask me about his projects or resume ✨" }
  ]);
  const [input, setInput] = useState('');

  const reply = (text) => {
    const lower = text.toLowerCase();
    if (lower.includes('ai') && lower.includes('project')) {
      return 'Rahul has built Eagle i for AI-powered fraud detection and an AI Resume Generator (TechTrek) automating resume creation.';
    }
    if (lower.includes('resume')) {
      return 'Rahul is a tech-driven strategist skilled in Generative AI, full-stack web, and business analytics. Education: B.Tech CSEBS (CGPA 7.53). Experience: SkillSavvy (Web Dev), AWS (Data Engineering), Celonis (Business Analytics).';
    }
    if (lower.includes('skills')) {
      return 'Frontend: HTML, CSS, JS, React. Backend: Python, SQL, DBMS, Firebase. AI/Analytics: Generative AI, Data Engineering (AWS, Celonis). Soft: Leadership, Adaptability, Client Relations, Design Thinking.';
    }
    return "I can tell you about Rahul's projects, skills, and experience. Try: ‘Tell me about Rahul’s AI Projects.’";
  };

  const onSend = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    const userMsg = { role: 'user', content: input.trim() };
    const aiMsg = { role: 'ai', content: reply(input.trim()) };
    setMessages((m) => [...m, userMsg, aiMsg]);
    setInput('');
  };

  const gradient = useMemo(() => (
    'bg-gradient-to-br from-[#0f172a]/70 to-[#1e1b4b]/60'
  ), []);

  return (
    <div className={`rounded-2xl border border-white/10 ${gradient} p-4 backdrop-blur`}> 
      <div className="mb-3 flex items-center gap-2">
        <Sparkles className="h-4 w-4 text-[#00f5d4]" />
        <p className="text-sm font-semibold text-white">AI Assistant</p>
      </div>
      <div className="h-48 w-full space-y-2 overflow-y-auto rounded-lg border border-white/10 bg-black/20 p-3">
        {messages.map((m, i) => (
          <div key={i} className={`text-sm ${m.role === 'ai' ? 'text-cyan-100' : 'text-violet-100'}`}>
            <span
              className={`mr-2 rounded-full px-2 py-0.5 text-[10px] uppercase tracking-widest text-white/70 ${m.role === 'ai' ? 'bg-cyan-500/20' : 'bg-violet-500/20'}`}
            >
              {m.role === 'ai' ? 'AI' : 'You'}
            </span>
            {m.content}
          </div>
        ))}
      </div>
      <form onSubmit={onSend} className="mt-3 flex items-center gap-2">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask about projects, resume, or skills..."
          className="flex-1 rounded-lg border border-white/10 bg-white/10 px-3 py-2 text-sm text-white placeholder:text-cyan-200/50 focus:outline-none focus:ring-2 focus:ring-[#00f5d4]/40"
        />
        <button className="rounded-lg bg-[#00f5d4] px-3 py-2 text-sm font-semibold text-black hover:brightness-110">Send</button>
      </form>
    </div>
  );
}

export default function Work() {
  return (
    <section id="work" className="relative w-full bg-[#0a0a0f] py-20 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-white to-cyan-200 bg-clip-text text-3xl font-bold text-transparent sm:text-4xl"
        >
          Projects & Capabilities
        </motion.h2>

        <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <ProjectCard key={p.title} p={p} />
          ))}
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur lg:col-span-2">
            <p className="text-sm font-semibold tracking-wide text-cyan-100/80">Skills & Expertise</p>
            <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {Object.entries(skills).map(([k, v]) => (
                <div key={k} className="rounded-xl border border-white/10 bg-black/20 p-4">
                  <div className="mb-2 flex items-center gap-2 text-cyan-200">
                    <BadgeCheck className="h-4 w-4" />
                    <p className="text-sm font-semibold">{k}</p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {v.map((s) => (
                      <span key={s} className="rounded-full bg-white/10 px-2 py-1 text-[10px] text-cyan-100/80">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              {['Full Stack Web Developer', 'AI Innovator', 'Project Lead'].map((t) => (
                <span key={t} className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 text-xs text-cyan-100">
                  {t}
                </span>
              ))}
            </div>
          </div>
          <div className="space-y-6">
            <RadarLike />
            <AIAssistant />
          </div>
        </div>
      </div>
    </section>
  );
}
