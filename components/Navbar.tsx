"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
  { label: "Research", href: "#research" },
  { label: "Projects", href: "#projects" },
  { label: "Stack",    href: "#stack"    },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.15 }}
        className={[
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          scrolled ? "glass-strong py-3 glow-violet" : "bg-transparent py-5",
        ].join(" ")}
      >
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-lg glass flex items-center justify-center border border-purple-500/30 group-hover:border-purple-400/60 transition-colors">
              <span className="font-mono text-xs font-bold gradient-text-violet">IM</span>
            </div>
            <span className="hidden sm:block font-mono text-sm text-slate-500 group-hover:text-slate-200 transition-colors">
              ishan.dev
            </span>
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="relative font-mono text-sm text-slate-400 hover:text-white transition-colors group"
              >
                <span className="text-purple-400/50 mr-1">#</span>
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-gradient-to-r from-purple-500 to-blue-500 group-hover:w-full transition-all duration-300" />
              </a>
            ))}
            <a
              href="mailto:ishanmalik2002@gmail.com"
              className="px-4 py-2 rounded-lg glass border border-purple-500/30 font-mono text-sm text-purple-300 hover:text-white hover:border-purple-400/60 transition-all duration-300"
            >
              Contact
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden glass p-2 rounded-lg border border-white/10"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile dropdown */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.2 }}
            className="fixed top-16 left-4 right-4 z-40 glass-strong rounded-2xl p-6 border border-white/10"
          >
            <div className="flex flex-col gap-1">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="py-3 px-2 font-mono text-slate-300 hover:text-white border-b border-white/[0.05] transition-colors"
                >
                  <span className="text-purple-400/50 mr-2">#</span>
                  {link.label}
                </a>
              ))}
              <a
                href="mailto:ishanmalik2002@gmail.com"
                className="mt-3 py-2.5 text-center rounded-xl glass border border-purple-500/30 font-mono text-sm text-purple-300"
              >
                Contact
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
