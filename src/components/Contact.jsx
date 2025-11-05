import React, { useMemo, useState } from 'react';
import { Mail, Download, Linkedin, Github, CheckCircle2 } from 'lucide-react';

export default function Contact({ mood }) {
  const isAI = mood === 'ai';
  const [showModal, setShowModal] = useState(false);
  const [role, setRole] = useState('AI Engineer');
  const [sent, setSent] = useState(false);
  const [errors, setErrors] = useState({ name: '', email: '', message: '' });
  const [honeypot, setHoneypot] = useState('');

  const shell = useMemo(() => ({
    container: isAI ? 'border-white/10 bg-white/5' : 'border-zinc-800 bg-zinc-900/60',
    input: isAI ? 'bg-white/10 text-white placeholder:text-zinc-300' : 'bg-zinc-800 text-white placeholder:text-zinc-400',
  }), [isAI]);

  const validate = (data) => {
    const e = { name: '', email: '', message: '' } as any;
    if (!data.name.trim()) e.name = 'Please enter your name';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) e.email = 'Enter a valid email';
    if (data.message.trim().length < 10) e.message = 'Message should be at least 10 characters';
    return e;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const data = {
      name: String(form.get('name') || ''),
      email: String(form.get('email') || ''),
      subject: String(form.get('subject') || ''),
      message: String(form.get('message') || ''),
    };
    if (honeypot) return; // spam bot detected
    const v = validate(data);
    setErrors(v);
    if (v.name || v.email || v.message) return;
    setSent(true);
    setTimeout(() => setSent(false), 2200);
    (e.currentTarget as HTMLFormElement).reset();
  };

  const handleGenerateCV = () => {
    const content = `Rahul Gunda — ${role}\n\nSummary: Portfolio of Rahul Gunda: Generative AI, Web, Business Analytics.\nThis CV is tailored for the ${role} role.\n\nSkills: React, Python, SQL, Firebase, Generative AI, Data Engineering (AWS, Celonis), Business Analytics.\nProjects: Eagle i (AI Security), TechTrek (AI Resume), TAMASHA (Events), OnTheGo (Mobile), Food Donation (Android).\nContact: rahulgunda206@gmail.com`;
    const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `Rahul_Gunda_CV_${role.replace(/\s+/g,'_')}.txt`;
    document.body.appendChild(a);
    a.click();
    a.remove();
    URL.revokeObjectURL(url);
    setShowModal(false);
  };

  return (
    <section id="contact" className="relative mx-auto my-16 w-full max-w-6xl px-6">
      <div className={`rounded-2xl border p-6 sm:p-8 shadow-lg backdrop-blur ${shell.container}`}>
        <h2 className="text-xl sm:text-2xl font-semibold text-white">Let’s Build Something Intelligent Together</h2>
        <p className={`${isAI ? 'text-zinc-200' : 'text-zinc-300'} mt-2 text-sm`}>Drop a note and I’ll get back soon.</p>

        <form onSubmit={handleSubmit} className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2" noValidate>
          {/* honeypot */}
          <input tabIndex={-1} aria-hidden={true} autoComplete="off" value={honeypot} onChange={(e)=>setHoneypot(e.target.value)} className="hidden" name="company" />

          <div className="sm:col-span-1">
            <input name="name" required placeholder="Your name" className={`w-full rounded-lg px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-[#7b61ff] ${shell.input}`} />
            {errors.name && <p className="mt-1 text-xs text-rose-400">{errors.name}</p>}
          </div>
          <div className="sm:col-span-1">
            <input name="email" required type="email" placeholder="Email" className={`w-full rounded-lg px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-[#7b61ff] ${shell.input}`} />
            {errors.email && <p className="mt-1 text-xs text-rose-400">{errors.email}</p>}
          </div>
          <div className="sm:col-span-2">
            <input name="subject" placeholder="Subject" className={`w-full rounded-lg px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-[#7b61ff] ${shell.input}`} />
          </div>
          <div className="sm:col-span-2">
            <textarea name="message" required placeholder="Message" rows={4} className={`w-full rounded-lg px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-[#7b61ff] ${shell.input}`} />
            {errors.message && <p className="mt-1 text-xs text-rose-400">{errors.message}</p>}
          </div>
          <div className="sm:col-span-2 flex flex-wrap items-center gap-3">
            <button type="submit" className={`inline-flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-semibold focus:outline-none focus-visible:ring-2 focus-visible:ring-[#7b61ff] ${isAI ? 'bg-gradient-to-r from-[#7b61ff] to-[#00f5d4] text-black' : 'bg-white text-black'}`}>
              <Mail className="h-4 w-4" /> Send Message
            </button>
            <button type="button" onClick={() => setShowModal(true)} className={`inline-flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-semibold border focus:outline-none focus-visible:ring-2 focus-visible:ring-[#7b61ff] ${isAI ? 'border-white/15 bg-white/5 text-white' : 'border-zinc-700 bg-zinc-900 text-white'}`}>
              <Download className="h-4 w-4" /> Generate Custom CV
            </button>
            {sent && (
              <span className="inline-flex items-center gap-2 text-sm text-emerald-400"><CheckCircle2 className="h-4 w-4" /> Message transmitted successfully 🤖✨</span>
            )}
          </div>
        </form>

        <div className="mt-5 flex flex-wrap gap-3 text-sm">
          <a href="https://linkedin.com/in/rahulgunda" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-zinc-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#7b61ff]"><Linkedin className="h-4 w-4" /> LinkedIn</a>
          <a href="https://github.com/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-zinc-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#7b61ff]"><Github className="h-4 w-4" /> GitHub</a>
          <a href="mailto:rahulgunda206@gmail.com" className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-zinc-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#7b61ff]"><Mail className="h-4 w-4" /> rahulgunda206@gmail.com</a>
        </div>
      </div>

      {showModal && (
        <div className="fixed inset-0 z-50 grid place-items-center bg-black/60 p-4">
          <div role="dialog" aria-modal="true" className="w-full max-w-md rounded-2xl border border-white/10 bg-zinc-900 p-6">
            <h3 className="text-lg font-semibold text-white">Generate & Download PDF</h3>
            <p className="mt-1 text-sm text-zinc-300">Choose a target role — Uses LLM to tailor content.</p>
            <div className="mt-4 grid grid-cols-2 gap-2 text-sm">
              {['AI Engineer','Web Dev','Data Engineer','Business Analyst'].map((r) => (
                <button key={r} onClick={() => setRole(r)} className={`rounded-lg px-3 py-2 border ${role===r ? 'bg-gradient-to-r from-[#7b61ff] to-[#00f5d4] text-black border-transparent' : 'border-white/10 text-zinc-200'}`}>{r}</button>
              ))}
            </div>
            <div className="mt-5 flex justify-end gap-2">
              <button onClick={() => setShowModal(false)} className="rounded-lg px-3 py-2 text-sm border border-white/10 text-zinc-200">Cancel</button>
              <button onClick={handleGenerateCV} className="rounded-lg px-3 py-2 text-sm font-semibold bg-gradient-to-r from-[#7b61ff] to-[#00f5d4] text-black">Generate & Download</button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
