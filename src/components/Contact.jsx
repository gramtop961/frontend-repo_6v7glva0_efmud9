import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Download } from 'lucide-react';

export default function Contact() {
  const [sent, setSent] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 3000);
  };

  const downloadResume = () => {
    const content = `Rahul Gunda\n\nTech-driven strategist & full-stack developer\nSpecializations: Generative AI, Web Development, Business Analytics\n\nExperience\n- Web Developer @ SkillSavvy (2025)\n- Data Engineering Intern @ AWS (2025)\n- Business Analyst @ Celonis (2025)\n- Generative AI @ Be10X (2024)\n- Project Lead @ Houseway.co.in (TAMASHA)\n\nEducation\n- B.Tech CSBS – R.V.R. & J.C. College of Engineering (CGPA 7.53/10)\n\nKey Projects\n- Eagle i – AI fraud detection platform\n- OnTheGo – Vehicle breakdown recovery app\n- Food Donation App – Android + Firebase + Maps\n- TAMASHA – Event engagement platform\n- AI Resume Generator (TechTrek)\n\nSkills\nFrontend: HTML, CSS, JS, React\nBackend: Python, SQL, DBMS, Firebase\nAI/Analytics: Generative AI, Data Engineering (AWS, Celonis)\nSoft: Leadership, Adaptability, Client Relations, Design Thinking`;
    const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'Rahul_Gunda_Resume.txt';
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <section id="contact" className="relative w-full bg-[#0a0a0f] py-20 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-white to-cyan-200 bg-clip-text text-3xl font-bold text-transparent sm:text-4xl"
        >
          Let’s Build Something Intelligent Together
        </motion.h2>

        <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
            <p className="text-sm text-cyan-100/80">
              Reach out for collaborations, consulting, or full-stack projects.
            </p>
            <form onSubmit={onSubmit} className="mt-6 space-y-4">
              <div>
                <label className="text-xs text-cyan-200/70">Name</label>
                <input className="mt-1 w-full rounded-lg border border-white/10 bg-white/10 px-3 py-2 text-sm text-white placeholder:text-cyan-200/50 focus:outline-none focus:ring-2 focus:ring-[#00f5d4]/40" placeholder="Your name" />
              </div>
              <div>
                <label className="text-xs text-cyan-200/70">Email</label>
                <input type="email" className="mt-1 w-full rounded-lg border border-white/10 bg-white/10 px-3 py-2 text-sm text-white placeholder:text-cyan-200/50 focus:outline-none focus:ring-2 focus:ring-[#00f5d4]/40" placeholder="you@example.com" />
              </div>
              <div>
                <label className="text-xs text-cyan-200/70">Message</label>
                <textarea rows={4} className="mt-1 w-full rounded-lg border border-white/10 bg-white/10 px-3 py-2 text-sm text-white placeholder:text-cyan-200/50 focus:outline-none focus:ring-2 focus:ring-[#00f5d4]/40" placeholder="Tell me about your project..." />
              </div>
              <button className="w-full rounded-lg bg-[#7b61ff] px-4 py-2 text-sm font-semibold text-white hover:brightness-110">
                Send Message
              </button>
              {sent && (
                <p className="text-center text-sm text-cyan-100">
                  Message Transmitted Successfully 🤖✨
                </p>
              )}
            </form>
          </div>
          <div className="space-y-6">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
              <p className="text-sm font-semibold text-cyan-100/80">Connect</p>
              <div className="mt-4 flex flex-wrap gap-3">
                <a href="https://www.linkedin.com" target="_blank" className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/10 px-3 py-2 text-sm text-cyan-100 hover:bg-white/20">
                  <Linkedin className="h-4 w-4" /> LinkedIn
                </a>
                <a href="https://github.com" target="_blank" className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/10 px-3 py-2 text-sm text-cyan-100 hover:bg-white/20">
                  <Github className="h-4 w-4" /> GitHub
                </a>
                <a href="mailto:rahul@example.com" className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/10 px-3 py-2 text-sm text-cyan-100 hover:bg-white/20">
                  <Mail className="h-4 w-4" /> Email
                </a>
                <button onClick={downloadResume} className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-[#00f5d4] px-3 py-2 text-sm font-semibold text-black hover:brightness-110">
                  <Download className="h-4 w-4" /> Download CV
                </button>
              </div>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
              <p className="text-sm font-semibold text-cyan-100/80">Testimonials</p>
              <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
                {["Recognized for leading teams and creating engaging student events.", "Rahul blends strategy, design, and engineering into outcomes."]
                  .map((t, i) => (
                    <div key={i} className="rounded-xl border border-white/10 bg-black/20 p-4 text-sm text-cyan-100/80">
                      {t}
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center text-xs text-cyan-200/60">
          © {new Date().getFullYear()} Rahul Gunda — Crafted with AI energy
        </div>
      </div>
    </section>
  );
}
