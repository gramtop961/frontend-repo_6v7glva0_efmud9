import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, GraduationCap, Brain } from 'lucide-react';

const TimelineItem = ({ year, title, subtitle }) => (
  <motion.div
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true, margin: '-100px' }}
    transition={{ duration: 0.5 }}
    className="relative pl-8"
  >
    <div className="absolute left-0 top-2 h-2 w-2 rounded-full bg-gradient-to-r from-[#00f5d4] to-[#7b61ff]" />
    <p className="text-xs uppercase tracking-widest text-cyan-200/60">{year}</p>
    <h4 className="mt-1 text-sm font-semibold text-white">{title}</h4>
    <p className="text-xs text-cyan-200/70">{subtitle}</p>
  </motion.div>
);

export default function About() {
  return (
    <section id="about" className="relative w-full bg-[#0a0a0f] py-20 text-white">
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="absolute -top-10 left-1/3 h-64 w-64 rounded-full bg-[#00f5d4]/10 blur-2xl" />
      </div>

      <div className="mx-auto max-w-6xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-white to-cyan-200 bg-clip-text text-3xl font-bold text-transparent sm:text-4xl"
        >
          Who I Am
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="mt-4 max-w-3xl text-cyan-100/80"
        >
          I’m a tech-driven strategist with a deep understanding of client behavior and digital ecosystems. I thrive on transforming ideas into scalable, intelligent products that drive impact.
        </motion.p>

        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur"
          >
            <div className="flex items-center gap-2 text-cyan-200">
              <MapPin className="h-4 w-4" />
              <span className="text-sm font-semibold">Guntur, Andhra Pradesh</span>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur"
          >
            <div className="flex items-center gap-2 text-violet-200">
              <GraduationCap className="h-4 w-4" />
              <span className="text-sm font-semibold">B.Tech CSEBS – R.V.R. & J.C. College of Engineering</span>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur"
          >
            <div className="flex items-center gap-2 text-cyan-200">
              <Brain className="h-4 w-4" />
              <span className="text-sm font-semibold">Generative AI • Data Engineering • Web Innovation</span>
            </div>
          </motion.div>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
            <p className="text-sm font-semibold tracking-wide text-cyan-100/80">Milestones</p>
            <div className="mt-4 space-y-4">
              <TimelineItem year="2025" title="Web Developer @ SkillSavvy" subtitle="Built delightful web experiences and component systems." />
              <TimelineItem year="2025" title="Data Engineering Intern @ AWS" subtitle="Pipelines, ETL, and analytics for data-driven insights." />
              <TimelineItem year="2025" title="Business Analyst @ Celonis" subtitle="Process mining, dashboards, and improvement strategy." />
              <TimelineItem year="2024" title="Generative AI @ Be10X" subtitle="Applied AI to automate workflows and content." />
              <TimelineItem year="2024" title="Project Lead @ Houseway.co.in (TAMASHA)" subtitle="Drove event engagement platform delivery." />
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
            <p className="text-sm font-semibold tracking-wide text-cyan-100/80">Education & Certifications</p>
            <div className="mt-4 space-y-4">
              <TimelineItem year="B.Tech" title="Computer Science & Business Systems" subtitle="R.V.R. & J.C. College of Engineering – CGPA: 7.53/10" />
              <TimelineItem year="2024" title="Generative AI – Be10X" subtitle="Prompting, automation, and LLM tooling." />
              <TimelineItem year="2025" title="Business Analytics – Celonis" subtitle="Process mining & KPI optimization." />
              <TimelineItem year="2025" title="Data Engineering – AWS" subtitle="Cloud-native data pipelines and storage." />
            </div>
          </div>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur">
            <p className="text-xs uppercase tracking-widest text-cyan-200/70">Leadership</p>
            <p className="mt-2 text-sm text-white">Event Organizer @ RVRJCCE</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur">
            <p className="text-xs uppercase tracking-widest text-cyan-200/70">Community</p>
            <p className="mt-2 text-sm text-white">Student Activity Council – Co-Lead</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur">
            <p className="text-xs uppercase tracking-widest text-cyan-200/70">Recognition</p>
            <p className="mt-2 text-sm text-white">Leading teams & creating engaging student events</p>
          </div>
        </div>
      </div>
    </section>
  );
}
