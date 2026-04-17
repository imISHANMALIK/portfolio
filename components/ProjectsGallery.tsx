"use client";

import { motion } from "framer-motion";
import { FileText, ExternalLink } from "lucide-react";
import { PROJECTS } from "@/data/portfolio";

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.09 } },
};

const item = {
  hidden:  { opacity: 0, y: 26 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" as const } },
};

const HIGHLIGHT = {
  violet: {
    borderHover:   "hover:border-purple-500/30",
    shadowHover:   "hover:shadow-purple-500/12",
    topLine:       "via-purple-500/45",
    dot:           "bg-purple-400",
    tagHover:      "hover:text-purple-300 hover:border-purple-500/35",
    btnBorder:     "hover:border-purple-500/40 hover:text-purple-200",
  },
  blue: {
    borderHover:   "hover:border-blue-500/30",
    shadowHover:   "hover:shadow-blue-500/12",
    topLine:       "via-blue-500/45",
    dot:           "bg-blue-400",
    tagHover:      "hover:text-blue-300 hover:border-blue-500/35",
    btnBorder:     "hover:border-blue-500/40 hover:text-blue-200",
  },
};

export default function ProjectsGallery() {
  return (
    <section id="projects" className="py-28 px-6 relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-20 bg-gradient-to-b from-transparent via-blue-500/30 to-transparent" />

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
            <span style={{ color: "rgba(96, 165, 250, 0.5)" }}>02 /</span> Projects
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold gradient-text-blue">
            Engineering Work
          </h2>
          <p className="text-slate-500 text-lg max-w-xl leading-relaxed">
            Technical projects spanning RL systems, mathematical toolkits, and agentic AI infrastructure.
          </p>
        </motion.div>

        {/* Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {PROJECTS.map((p) => {
            const s = HIGHLIGHT[p.highlight];
            return (
              <motion.article
                key={p.id}
                variants={item}
                whileHover={{ y: -6, scale: 1.01 }}
                transition={{ type: "spring", stiffness: 280, damping: 22 }}
                className={[
                  "glass rounded-2xl border border-white/[0.06]",
                  s.borderHover,
                  "hover:shadow-xl",
                  s.shadowHover,
                  "transition-all duration-300 group relative overflow-hidden flex flex-col",
                ].join(" ")}
              >
                {/* Hover top glow */}
                <span
                  className={[
                    "absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent",
                    s.topLine,
                    "to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300",
                  ].join(" ")}
                />

                <div className="p-6 flex-1 flex flex-col">
                  {/* Title */}
                  <div className="flex items-center gap-2.5 mb-3">
                    <span className={`w-2 h-2 rounded-full ${s.dot} opacity-60`} />
                    <h3 className="text-slate-100 font-semibold text-[1rem] group-hover:text-white transition-colors">
                      {p.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-slate-400 text-sm leading-relaxed mb-4 flex-1">
                    {p.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5">
                    {p.tags.map((tag) => (
                      <span
                        key={tag}
                        className={[
                          "px-2 py-0.5 rounded-md bg-white/[0.04] border border-white/[0.06]",
                          "text-slate-500 text-[11px] font-mono transition-colors",
                          s.tagHover,
                        ].join(" ")}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action bar — slides in on hover */}
                <div className="px-6 pb-5 flex gap-2.5 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                  {p.github && (
                    <a
                      href={p.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={[
                        "flex items-center gap-1.5 px-3 py-1.5 rounded-lg glass border border-white/[0.08]",
                        "text-slate-400 text-[12px] font-mono transition-colors",
                        s.btnBorder,
                      ].join(" ")}
                    >
                      <ExternalLink size={12} />
                      GitHub
                    </a>
                  )}
                  {p.paper && (
                    <a
                      href={p.paper}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={[
                        "flex items-center gap-1.5 px-3 py-1.5 rounded-lg glass border border-white/[0.08]",
                        "text-slate-400 text-[12px] font-mono transition-colors",
                        s.btnBorder,
                      ].join(" ")}
                    >
                      <FileText size={12} />
                      Paper
                    </a>
                  )}
                </div>
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
