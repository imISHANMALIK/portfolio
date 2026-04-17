"use client";

import { motion } from "framer-motion";
import { ArrowRight, MapPin, Mail, ExternalLink } from "lucide-react";
import Image from "next/image";
import { HERO_DATA } from "@/data/portfolio";

const fadeUp = (delay = 0) => ({
  initial:    { opacity: 0, y: 22 },
  animate:    { opacity: 1, y: 0  },
  transition: { duration: 0.6, delay, ease: "easeOut" as const },
});

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center pt-24 pb-20 px-6 overflow-hidden"
    >
      {/* Ambient orbs */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-1/4 left-0 w-[520px] h-[520px] rounded-full bg-purple-900/20 blur-[130px]" />
        <div className="absolute bottom-1/4 right-0 w-[420px] h-[420px] rounded-full bg-blue-900/20 blur-[130px]" />
      </div>

      <div className="max-w-6xl mx-auto w-full grid lg:grid-cols-[1fr_auto] gap-12 lg:gap-20 items-center">
        {/* ── Left ─────────────────────────────────────────────────────────── */}
        <div className="space-y-7">
          {/* Badge */}
          <motion.div {...fadeUp(0.2)}>
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass border border-purple-500/25 text-xs font-mono text-purple-300">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <MapPin size={11} />
              {HERO_DATA.affiliation} · {HERO_DATA.location}
            </span>
          </motion.div>

          {/* Name */}
          <motion.h1 {...fadeUp(0.3)} className="text-6xl sm:text-7xl font-bold tracking-tight leading-none">
            <span className="gradient-text-main">{HERO_DATA.name}</span>
          </motion.h1>

          {/* Titles */}
          <motion.div {...fadeUp(0.4)} className="space-y-0.5">
            <p className="font-mono text-xl text-purple-300">{HERO_DATA.title}</p>
            <p className="font-mono text-lg text-blue-400/80">{HERO_DATA.titleAccent}</p>
          </motion.div>

          {/* Subtitle */}
          <motion.p {...fadeUp(0.45)} className="font-mono text-xs text-slate-600 tracking-widest">
            {HERO_DATA.subtitle}
          </motion.p>

          {/* Bio */}
          <motion.p {...fadeUp(0.5)} className="text-slate-400 text-lg leading-relaxed max-w-lg">
            {HERO_DATA.bio}
          </motion.p>

          {/* CTAs */}
          <motion.div {...fadeUp(0.6)} className="flex flex-wrap gap-3">
            <a
              href="#research"
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-purple-700 hover:bg-purple-600 text-white font-medium text-sm transition-all hover:shadow-lg hover:shadow-purple-600/25 active:scale-95"
            >
              View Research
              <ArrowRight size={15} />
            </a>
            <a
              href={HERO_DATA.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl glass border border-white/10 hover:border-white/20 text-slate-300 hover:text-white font-medium text-sm transition-all active:scale-95"
            >
              <ExternalLink size={14} />
              GitHub
            </a>
          </motion.div>

          {/* Social row */}
          <motion.div {...fadeUp(0.7)} className="flex items-center gap-5 pt-1">
            <a
              href={HERO_DATA.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-xs text-slate-500 hover:text-purple-300 transition-colors flex items-center gap-1.5"
            >
              <ExternalLink size={13} />
              LinkedIn
            </a>
            <a
              href={`mailto:${HERO_DATA.links.email}`}
              className="font-mono text-xs text-slate-500 hover:text-blue-300 transition-colors flex items-center gap-1.5"
            >
              <Mail size={13} />
              Email
            </a>
            <div className="h-px flex-1 max-w-[60px] bg-gradient-to-r from-slate-700 to-transparent" />
            <span className="font-mono text-xs text-slate-700">v2025.1</span>
          </motion.div>
        </div>

        {/* ── Right: Profile Picture ───────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, x: 28 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.45, ease: "easeOut" as const }}
          className="flex flex-col items-center lg:items-end gap-6"
        >
          <div className="relative animate-float">
            {/* Outer glow */}
            <div className="absolute -inset-4 rounded-full bg-purple-600/15 blur-2xl" />
            {/* Gradient ring */}
            <div className="relative rounded-full p-[3px] bg-gradient-to-br from-purple-500 via-blue-500 to-purple-800 shadow-2xl shadow-purple-900/40">
              <div className="rounded-full overflow-hidden w-56 h-56 lg:w-64 lg:h-64 bg-slate-900">
                <Image
                  src="/profile.jpg"
                  alt="Ishan Malik"
                  width={256}
                  height={256}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
            </div>
          </div>
          {/* Tag pills */}
          <div className="flex gap-2 flex-wrap justify-center lg:justify-end">
            {["Healthcare AI", "NLP · CV", "NYU CDS"].map((t) => (
              <span
                key={t}
                className="glass px-3 py-1 rounded-full border border-white/[0.06] font-mono text-xs text-slate-500"
              >
                {t}
              </span>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-slate-700"
      >
        <span className="font-mono text-[10px] tracking-widest">SCROLL</span>
        <div className="w-px h-8 bg-gradient-to-b from-slate-700 to-transparent" />
      </motion.div>
    </section>
  );
}
