import { motion } from "motion/react";
import { useState, useEffect } from "react";
import {
  Github,
  Linkedin,
  Award,
  Sparkles,
  ArrowRight,
  Download,
} from "lucide-react";

export function Hero() {
  // const [typewriterText, setTypewriterText] = useState("");
  // const fullText =
  //   "const priti = { stack: 'MERN', research: 'Federated Learning' }";

  // useEffect(() => {
  //   let i = 0;
  //   const timer = setInterval(() => {
  //     if (i < fullText.length) {
  //       setTypewriterText(fullText.substring(0, i + 1));
  //       i++;
  //     } else {
  //       clearInterval(timer);
  //     }
  //   }, 50);
  //   return () => clearInterval(timer);
  // }, []);

  // const scrollToSection = (id: string) => {
  //   const element = document.getElementById(id);
  //   if (element) {
  //     element.scrollIntoView({ behavior: "smooth" });
  //   }
  // };

  const texts = [
    "const priti = { stack: 'MERN', research: 'Federated Learning' }",
    "const priti = { loves: 'DSA', solves: 'problems_daily' }",
    "const priti = { ai: 'Deep Learning', models: 'Neural Networks' }",
    "const priti = { ml: 'Federated Learning', pub: 'pending 🔬' }",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [typewriterText, setTypewriterText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const fullText = texts[currentIndex];

    if (!isDeleting && typewriterText === fullText) {
      // Pause at full text, then start deleting
      const pause = setTimeout(() => setIsDeleting(true), 2000);
      return () => clearTimeout(pause);
    }

    if (isDeleting && typewriterText === "") {
      // Move to next text
      setIsDeleting(false);
      setCurrentIndex((prev) => (prev + 1) % texts.length);
      return;
    }

    const speed = isDeleting ? 25 : 50;

    const timer = setTimeout(() => {
      setTypewriterText((prev) =>
        isDeleting
          ? fullText.substring(0, prev.length - 1)
          : fullText.substring(0, prev.length + 1)
      );
    }, speed);

    return () => clearTimeout(timer);
  }, [typewriterText, isDeleting, currentIndex]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="min-h-screen relative flex items-center justify-center px-6 pt-24 overflow-hidden">
      {/* Background blob */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#6B21A8] opacity-[0.06] rounded-full blur-3xl"></div>
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="absolute top-32 left-20 flex items-center gap-2 px-4 py-2 rounded-full bg-electric-lavender/10 border border-electric-lavender/30 backdrop-blur-sm"
      >
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-neon-teal opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-neon-teal"></span>
        </span>
        <span className="text-sm text-text-primary/90">
          👩‍💻 Open to Opportunities
        </span>
      </motion.div>
      {/* Decorative stars */}
      <motion.div
        className="absolute top-32 right-64 text-[#6B21A8] opacity-30"
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      >
        <Sparkles size={24} />
      </motion.div>
      <motion.div
        className="absolute bottom-48 left-32 text-[#EC4899] opacity-30"
        animate={{ rotate: -360 }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
      >
        <Sparkles size={20} />
      </motion.div>

      <div className="max-w-7xl items-center">
        {/* Left: Headline and CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <div className="space-y-2 text-center">
            <h1
              className="text-7xl md:text-8xl leading-[0.9]"
              style={{ fontFamily: "Playfair Display, serif" }}
            >
              <span className="text-[#1A1014] ">Building the web.</span>
              <br />
              <span className="text-[#6B21A8] italic">Teaching Machines.</span>
            </h1>
            <p
              className="text-xl md:text-2xl text-[#6B6560] mt-6"
              style={{ fontFamily: "DM Sans, sans-serif" }}
            >
              Full Stack Developer · AI Researcher · ACM Member · B.Tech CSE
            </p>
          </div>

          {/* Wavy underline decoration under "machines" */}
          <svg
            className="ml-4 -mt-6"
            width="200"
            height="10"
            viewBox="0 0 200 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 5 Q 10 0, 20 5 T 40 5 T 60 5 T 80 5 T 100 5 T 120 5 T 140 5 T 160 5 T 180 5 T 200 5"
              stroke="#F97316"
              strokeWidth="2"
              fill="none"
            />
          </svg>

          {/* Typewriter */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="font-mono font-mono text-violet  bg-cream-dark border border-violet/30 rounded-lg px-4 py-3 text-center justify-center"
          >
            {typewriterText}
            <span className="animate-pulse">|</span>
          </motion.div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4 items-center justify-center">
            <button
              onClick={() => scrollToSection("projects")}
              className="px-8 py-4 bg-[#6B21A8] text-[#F5F0E8] rounded-full font-semibold hover:bg-[#581c87] transition-all hover:shadow-lg hover:-translate-y-1 flex items-center justify-center gap-2"
              style={{ fontFamily: "DM Sans, sans-serif" }}
            >
              View My Work <ArrowRight size={20} />
            </button>
            <button
              onClick={() => {
                const link = document.createElement("a");
                link.href = "/cv/Priti_Poddar_CV.pdf"; 
                link.download = "Priti_Poddar_CV.pdf";
                link.click();
              }}
              className="px-8 py-4 bg-[#F5F0E8] text-[#1A1014] border-2 border-[#1A1014] rounded-full font-semibold hover:bg-[#1A1014] hover:text-[#F5F0E8] transition-all hover:-translate-y-1 flex items-center justify-center gap-2"
              style={{ fontFamily: "DM Sans, sans-serif" }}
            >
              <Download size={18} />
              Download CV
            </button>
          </div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="flex items-center gap-4 pt-4 justify-center"
          >
            <a
              href="https://github.com/Priti-Poddar"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-dark-navy/50 border border-lavender-glow hover:bg-electric-lavender/20 hover:border-electric-lavender transition-all duration-300 hover:scale-110"
            >
              <Github size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/priti-poddar-/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-dark-navy/50 border border-lavender-glow hover:bg-electric-lavender/20 hover:border-electric-lavender transition-all duration-300 hover:scale-110"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="https://acm.org"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-dark-navy/50 border border-lavender-glow hover:bg-electric-lavender/20 hover:border-electric-lavender transition-all duration-300 hover:scale-110"
            >
              <Award size={20} />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
