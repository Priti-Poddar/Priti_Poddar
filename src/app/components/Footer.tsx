import { motion } from 'motion/react';
import { Sparkles } from 'lucide-react';

export function Footer() {
  return (
    <footer className="py-12 px-6 border-t-2 border-[#D4CABC]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center gap-6">
          {/* Spinning star */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            className="text-[#6B21A8]"
          >
            <Sparkles size={24} />
          </motion.div>

          {/* Copyright */}
          <p
            className="text-[#6B6560] text-sm text-center"
            style={{ fontFamily: "Space Mono, monospace" }}
          >
            Designed & Built by Priti Poddar ✦ 2025
          </p>

          {/* Links */}
          <div className="flex gap-6">
            <a
              href="https://github.com/Priti-Poddar"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#6B6560] hover:text-[#6B21A8] transition-colors text-sm"
              style={{ fontFamily: "Space Mono, monospace" }}
            >
              GitHub
            </a>
            <span className="text-[#6B6560]">·</span>
            <a
              href="https://www.linkedin.com/in/priti-poddar-/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#6B6560] hover:text-[#6B21A8] transition-colors text-sm"
              style={{ fontFamily: "Space Mono, monospace" }}
            >
              LinkedIn
            </a>
            <span className="text-[#6B6560]">·</span>
            <a
              href="https://acm.org"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#6B6560] hover:text-[#6B21A8] transition-colors text-sm"
              style={{ fontFamily: "Space Mono, monospace" }}
            >
              ACM Profile
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
