"use client";

import { motion } from "framer-motion";
import {
  Brain, Zap, Activity, Cpu, Terminal, Layers, Bot,
  Code2, Code, Braces, Wrench, Globe, Box, GitBranch,
  type LucideIcon,
} from "lucide-react";
import { TECH_STACK } from "@/data/portfolio";

const ICON_MAP: Record<string, LucideIcon> = {
  brain:       Brain,
  zap:         Zap,
  activity:    Activity,
  cpu:         Cpu,
  terminal:    Terminal,
  layers:      Layers,
  bot:         Bot,
  "code-2":    Code2,
  code:        Code,
  braces:      Braces,
  wrench:      Wrench,
  globe:       Globe,
  box:         Box,
  "git-branch": GitBranch,
};

const STYLES = {
  violet: {
    border:   "border-purple-500/20",
    topLine:  "via-purple-500/50",
    label:    "text-purple-300",
    icon:     "text-purple-400",
    bar:      "from-purple-700 to-purple-400",
  },
  blue: {
    border:   "border-blue-500/20",
    topLine:  "via-blue-500/50",
    label:    "text-blue-300",
    icon:     "text-blue-400",
    bar:      "from-blue-700 to-blue-400",
  },
};

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};
const card = {
  hidden:  { opacity: 0, y: 26 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

export default function TechStack() {
  return (
    <section id="stack" className="py-28 px-6 relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-20 bg-gradient-to-b from-transparent via-purple-500/30 to-transparent" />

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 space-y-3"
        >
          <p className="section-label">
            <span style={{ color: "rgba(168, 85, 247, 0.5)" }}>03 /</span> Tech Stack
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold gradient-text-violet">
            Tools & Proficiency
          </h2>
          <p className="text-slate-500 text-lg max-w-xl leading-relaxed">
            The frameworks, languages, and agentic tools powering my research and engineering work.
          </p>
        </motion.div>

        {/* Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid gap-6 sm:grid-cols-2"
        >
          {TECH_STACK.map((cat) => {
            const s = STYLES[cat.color];
            return (
              <motion.div
                key={cat.category}
                variants={card}
                className={`glass rounded-2xl p-6 border ${s.border} relative overflow-hidden`}
              >
                {/* Top accent line */}
                <span
                  className={`absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent ${s.topLine} to-transparent`}
                />

                {/* Category header */}
                <h3 className={`font-mono text-xs font-semibold tracking-widest uppercase mb-6 ${s.label}`}>
                  {cat.category}
                </h3>

                {/* Items */}
                <div className="space-y-5">
                  {cat.items.map((item, i) => {
                    const Icon = ICON_MAP[item.iconName] ?? Code;
                    return (
                      <div key={item.name} className="space-y-2">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <Icon size={13} className={s.icon} />
                            <span className="text-slate-300 text-sm">{item.name}</span>
                          </div>
                          <span className="font-mono text-[11px] text-slate-600">{item.level}%</span>
                        </div>
                        <div className="h-[3px] rounded-full bg-white/[0.05] overflow-hidden">
                          <motion.div
                            className={`h-full rounded-full bg-gradient-to-r ${s.bar}`}
                            initial={{ width: 0 }}
                            whileInView={{ width: `${item.level}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, ease: "easeOut" as const, delay: 0.15 + i * 0.07 }}
                          />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
