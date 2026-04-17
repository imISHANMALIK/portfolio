"use client";

import { motion } from "framer-motion";
import { Mail, ExternalLink } from "lucide-react";
import { HERO_DATA } from "@/data/portfolio";

export default function Footer() {
  return (
    <footer className="relative py-16 px-6 border-t border-white/[0.05]">
      {/* Top glow */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-purple-500/20 to-transparent" />

      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row items-center justify-between gap-8"
        >
          {/* Identity */}
          <div className="text-center md:text-left space-y-1.5">
            <p className="font-mono text-sm">
              <span className="text-purple-400">ishan malik</span>
              <span className="text-slate-600 mx-2">·</span>
              <span className="text-blue-400/70">agentic developer &amp; ml researcher</span>
            </p>
            <p className="font-mono text-xs text-slate-600">
              New York University · {new Date().getFullYear()}
            </p>
          </div>

          {/* Links */}
          <div className="flex items-center gap-5">
            <a
              href={HERO_DATA.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 font-mono text-xs text-slate-500 hover:text-slate-200 transition-colors"
            >
              <ExternalLink size={13} />
              GitHub
            </a>
            <a
              href={HERO_DATA.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 font-mono text-xs text-slate-500 hover:text-slate-200 transition-colors"
            >
              <ExternalLink size={13} />
              LinkedIn
            </a>
            <a
              href={`mailto:${HERO_DATA.links.email}`}
              className="flex items-center gap-1.5 font-mono text-xs text-slate-500 hover:text-slate-200 transition-colors"
            >
              <Mail size={13} />
              Email
            </a>
          </div>

          {/* Status chip */}
          <div className="glass px-4 py-2 rounded-full border border-white/[0.06] flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="font-mono text-xs text-slate-400">
              Open to research collaboration
            </span>
          </div>
        </motion.div>

        {/* Bottom rule */}
        <div className="mt-10 pt-6 border-t border-white/[0.04] flex justify-center">
          <p className="font-mono text-[11px] text-slate-700">
            Built with Next.js · Framer Motion · Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
