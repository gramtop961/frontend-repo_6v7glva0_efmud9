import React, { useMemo, useState } from 'react';
import { Mail, Download, Linkedin, Github, X, CheckCircle2 } from 'lucide-react';

export default function Contact({ mood }) {
  const isAI = mood === 'ai';
  const [showModal, setShowModal] = useState(false);
  const [role, setRole] = useState('AI Engineer');
  const [sent, setSent] = useState(false);

  const shell = useMemo(() => ({
    container: isAI ? 'border-white/10 bg-white/5' : 'border-zinc-800 bg-zinc-900/60',
    input: isAI ? 'bg-white/10 text-white placeholder:text-zinc-300' : 'bg-zinc-800 text-white placeholder:text-zinc-400',
  }), [isAI]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 2000);
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
        <p className={`mt-2 text-sm ${isAI ? 'text-zinc-200' : 'text-zinc-300'}`}>Drop a note and I’ll get back soon.</p>

        <form onSubmit={handleSubmit} className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
          <input required placeholder="Your name" className={`rounded-lg px-3 py-2 text-sm outline-none sm:col-span-1 ${shell.input}`} />
          <input required type="email" placeholder="Email" className={`rounded-lg px-3 py-2 text-sm outline-none sm:col-span-1 ${shell.input}`} />
          <input placeholder="Subject" className={`rounded-lg px-3 py-2 text-sm outline-none sm:col-span-2 ${shell.input}`} />
          <textarea required placeholder="Message" rows={4} className={`rounded-lg px-3 py-2 text-sm outline-none sm:col-span-2 ${shell.input}`} />
          <div className="sm:col-span-2 flex flex-wrap items-center gap-3">
            <button type="submit" className={`inline-flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-semibold ${isAI ? 'bg-gradient-to-r from-[#7b61ff] to-[#00f5d4] text-black' : 'bg-white text-black'}`}>
              <Mail className="h-4 w-4" /> Send Message
            </button>
            <button type="button" onClick={() => setShowModal(true)} className={`inline-flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-semibold border ${isAI ? 'border-white/15 bg-white/5 text-white' : 'border-zinc-700 bg-zinc-900 text-white'}`}>
              <Download className="h-4 w-4" /> Generate Custom CV
            </button>
            {sent && (
              <span className="inline-flex items-center gap-2 text-sm text-emerald-400"><CheckCircle2 className="h-4 w-4" /> Message transmitted successfully 🤖✨</span>
            )}
          </div>
        </form>

        <div className="mt-5 flex flex-wrap gap-3 text-sm">
          <a href="https://linkedin.com/in/rahulgunda" target="_blank" className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-zinc-200"><Linkedin className="h-4 w-4" /> LinkedIn</a>
          <a href="https://github.com/" target="_blank" className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-zinc-200"><Github className="h-4 w-4" /> GitHub</a>
          <a href="mailto:rahulgunda206@gmail.com" className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-zinc-200"><Mail className="h-4 w-4" /> rahulgunda206@gmail.com</a>
        </div>
      </div>

      {showModal && (
        <div className="fixed inset-0 z-50 grid place-items-center bg-black/60 p-4">
          <div className="w-full max-w-md rounded-2xl border border-white/10 bg-zinc-900 p-6">
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
