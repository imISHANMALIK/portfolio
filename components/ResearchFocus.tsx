"use client";

import { motion } from "framer-motion";
import { Users, BookOpen, Tag } from "lucide-react";
import { RESEARCH, type ResearchStatus } from "@/data/portfolio";

const STATUS_STYLE: Record<ResearchStatus, string> = {
  "In Progress": "text-amber-400 bg-amber-400/10 border-amber-400/25",
  Exploratory:   "text-blue-400  bg-blue-400/10  border-blue-400/25",
  Completed:     "text-emerald-400 bg-emerald-400/10 border-emerald-400/25",
  Published:     "text-purple-400 bg-purple-400/10 border-purple-400/25",
};

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.14 } },
};

const item = {
  hidden:  { opacity: 0, y: 26 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

export default function ResearchFocus() {
  return (
    <section id="research" className="py-28 px-6 relative">
      {/* Section divider */}
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
            <span style={{ color: "rgba(168, 85, 247, 0.5)" }}>01 /</span> Research Focus
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold gradient-text-violet">
            Active Research
          </h2>
          <p className="text-slate-500 text-lg max-w-xl leading-relaxed">
            Current work at the intersection of reinforcement learning, optimal transport,
            and quantitative finance.
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {RESEARCH.map((r) => (
            <motion.article
              key={r.id}
              variants={item}
              className="glass rounded-2xl p-6 border border-white/[0.06] hover:border-purple-500/25 transition-all duration-300 group relative overflow-hidden flex flex-col"
            >
              {/* Top glow line */}
              <span className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-purple-500/45 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Status + year */}
              <div className="flex items-center justify-between mb-4">
                <span className={`inline-flex px-2 py-0.5 rounded-full text-[11px] font-mono border ${STATUS_STYLE[r.status]}`}>
                  {r.status}
                </span>
                <span className="font-mono text-xs text-slate-600">{r.year}</span>
              </div>

              {/* Title */}
              <h3 className="text-slate-100 font-semibold text-[1.05rem] leading-snug mb-3 group-hover:text-white transition-colors">
                {r.title}
              </h3>

              {/* Collaborators */}
              <div className="flex items-center gap-2 mb-3">
                <Users size={12} className="text-slate-600 shrink-0" />
                <p className="text-slate-500 text-xs font-mono truncate">{r.collaborators.join(", ")}</p>
              </div>

              {/* Abstract */}
              <div className="flex gap-2 mb-5 flex-1">
                <BookOpen size={12} className="text-slate-600 shrink-0 mt-0.5" />
                <p className="text-slate-400 text-sm leading-relaxed line-clamp-4">{r.abstract}</p>
              </div>

              {/* Tags */}
              <div className="flex items-start gap-2">
                <Tag size={12} className="text-slate-600 shrink-0 mt-1" />
                <div className="flex flex-wrap gap-1.5">
                  {r.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 rounded-md bg-white/[0.04] border border-white/[0.06] text-slate-500 text-[11px] font-mono hover:border-purple-500/35 hover:text-purple-300 transition-colors cursor-default"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
