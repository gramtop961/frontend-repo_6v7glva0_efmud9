import React, { useState } from 'react';
import { Mail, Send } from 'lucide-react';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Hello from ${name || 'someone'}`);
    const body = encodeURIComponent(message ? `${message}\n\n— ${name} (${email})` : `— ${name} (${email})`);
    window.location.href = `mailto:hello@rahulgunda.dev?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="relative w-full bg-slate-950 py-20 text-slate-100">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="mb-6 text-3xl font-semibold tracking-tight">Let’s Build Something Intelligent</h2>
        <p className="mb-8 max-w-3xl text-slate-300">Have a project in mind or want to collaborate? Drop a note and I’ll get back within a day.</p>

        <form onSubmit={handleSubmit} className="grid gap-4 rounded-2xl border border-slate-800 bg-slate-900/40 p-6 md:grid-cols-2">
          <div className="md:col-span-1">
            <label htmlFor="name" className="mb-1 block text-sm text-slate-300">Name</label>
            <input
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your name"
              className="w-full rounded-xl border border-slate-700/70 bg-slate-950 px-4 py-3 text-slate-100 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-300"
              required
            />
          </div>
          <div className="md:col-span-1">
            <label htmlFor="email" className="mb-1 block text-sm text-slate-300">Email</label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              className="w-full rounded-xl border border-slate-700/70 bg-slate-950 px-4 py-3 text-slate-100 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-300"
              required
            />
          </div>
          <div className="md:col-span-2">
            <label htmlFor="message" className="mb-1 block text-sm text-slate-300">Message</label>
            <textarea
              id="message"
              rows={5}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Tell me about your idea…"
              className="w-full rounded-xl border border-slate-700/70 bg-slate-950 px-4 py-3 text-slate-100 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-300"
              required
            />
          </div>
          <div className="md:col-span-2 mt-2 flex items-center justify-between">
            <div className="inline-flex items-center gap-2 text-sm text-slate-400">
              <Mail size={16} /> hello@rahulgunda.dev
            </div>
            <button
              type="submit"
              className="inline-flex items-center gap-2 rounded-xl bg-cyan-500 px-5 py-3 font-medium text-slate-950 transition hover:bg-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-300 focus:ring-offset-2 focus:ring-offset-slate-950"
            >
              <Send size={18} /> Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
