import React from 'react';
import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';
import { Rocket, Handshake } from 'lucide-react';

const GlowLayer = () => (
  <div className="pointer-events-none absolute inset-0" aria-hidden>
    <div className="absolute -top-28 left-8 h-80 w-80 rounded-full bg-[#00f5d4]/15 blur-3xl" />
    <div className="absolute top-24 right-10 h-96 w-96 rounded-full bg-[#7b61ff]/15 blur-3xl" />
    <div className="absolute bottom-0 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-cyan-300/10 blur-3xl" />
  </div>
);

export default function Hero({ onViewWork, onHireMe }) {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-[#0a0a0f] text-white">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Soft glow overlays */}
      <GlowLayer />

      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-r from-[#00f5d4] via-white to-[#7b61ff] bg-clip-text text-5xl font-extrabold tracking-tight text-transparent sm:text-7xl"
        >
          RAHUL GUNDA
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.7 }}
          className="mt-4 text-xl text-cyan-100/90 sm:text-2xl"
        >
          Smart Design. Human Touch.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="mt-4 max-w-2xl text-base text-cyan-100/70 sm:text-lg"
        >
          Tech-driven strategist & full-stack developer specializing in Generative AI, Web Development, and Business Analytics.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45, duration: 0.7 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <button
            onClick={onViewWork}
            className="group inline-flex items-center gap-2 rounded-full border border-[#00f5d4]/30 bg-white/5 px-6 py-3 text-sm font-semibold text-cyan-100 backdrop-blur transition hover:-translate-y-0.5 hover:bg-white/10 hover:shadow-[0_0_30px_#00f5d477]"
          >
            <Rocket className="h-4 w-4 text-[#00f5d4] transition group-hover:rotate-12" />
            <span>View My Work</span>
          </button>
          <button
            onClick={onHireMe}
            className="group inline-flex items-center gap-2 rounded-full border border-[#7b61ff]/40 bg-white/5 px-6 py-3 text-sm font-semibold text-violet-100 backdrop-blur transition hover:-translate-y-0.5 hover:bg-white/10 hover:shadow-[0_0_30px_#7b61ffff]"
          >
            <Handshake className="h-4 w-4 text-[#7b61ff] transition group-hover:scale-110" />
            <span>Hire Me</span>
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.85 }}
          transition={{ delay: 1.0, duration: 1.2 }}
          className="pointer-events-none absolute bottom-10 right-6 hidden select-none rounded-3xl border border-white/10 bg-white/5 p-3 backdrop-blur md:block"
        >
          <div className="h-20 w-16 rounded-xl bg-gradient-to-b from-[#00f5d4]/30 to-[#7b61ff]/30" />
          <p className="mt-2 text-[10px] uppercase tracking-widest text-cyan-100/70">AI Hologram</p>
        </motion.div>
      </div>
    </section>
  );
}
