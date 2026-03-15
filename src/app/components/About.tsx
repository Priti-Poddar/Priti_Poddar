import { ImageWithFallback } from "./figma/ImageWithFallback";
import { motion } from "motion/react";
import { MapPin, Award, Briefcase, BookOpen } from "lucide-react";

export function About() {
  const stats = [
    { number: "6+", label: "Projects Built", rotate: "1deg" },
    { number: "2", label: "Publications", rotate: "-2deg" },
    { number: "ACM", label: "Member", rotate: "2deg" },
  ];

  return (
    <section
      id="about"
      className="relative z-10 py-24 overflow-hidden "
      style={{ backgroundColor: "#B94040" }}
    >
      <div className="max-w-7xl mx-auto">
        <p
          className="font-[Luckiest_Guy] text-[clamp(4rem,10vw,8rem)] leading-[0.9] text-[#0E141B] uppercase relative top-[-60px] text-center"
          style={{ fontFamily: "Luckiest Guy, Baloo 2 cursive" }}
        >
          ABOUT ME
        </p>
        <div className="grid md:grid-cols-2 gap-16">
          {/* Left column */}
          <div className="space-y-8">
            <p
              className="text-lg leading-relaxed text-[#1A1014] text-justify"
              style={{ fontFamily: "DM Sans, sans-serif" }}
            >
              Hi, I’m Priti — a full-stack developer and AI enthusiast who
              enjoys turning ideas into meaningful digital experiences. My work
              sits at the intersection of web development and intelligent
              systems.{" "}
            </p>
            <p
              className="text-lg leading-relaxed text-[#1A1014] text-justify"
              style={{ fontFamily: "DM Sans, sans-serif" }}
            >
              I enjoy building full-stack applications using modern technologies
              while exploring how machine learning and deep learning can solve
              real-world problems.
            </p>
            <p
              className="text-lg leading-relaxed text-[#1A1014] text-justify"
              style={{ fontFamily: "DM Sans, sans-serif" }}
            >
              Currently, I'm pursuing a B.Tech in Computer Science and
              Engineering, while actively working on research in federated
              learning and deep learning, including a communicated book chapter
              and an upcoming research publication.
            </p>
            <p
              className="text-lg leading-relaxed text-[#1A1014] text-justify"
              style={{ fontFamily: "DM Sans, sans-serif" }}
            >
              Beyond development and research, I'm also involved in the tech
              community as the Treasurer of the ACM TINT Student Chapter, where
              I contribute to organizing technical events, supporting
              initiatives, and helping build a collaborative environment for
              students interested in computing.
            </p>
            <p
              className="text-lg leading-relaxed text-[#1A1014] text-justify"
              style={{ fontFamily: "DM Sans, sans-serif" }}
            >
              For me, technology is not just about writing code — it's about
              learning continuously, collaborating with others, and creating
              solutions that make an impact.
            </p>
          </div>

          {/* Right column */}
          <div className="space-y-6">
            {/* Photo frame */}
            <div
              className="relative border-8 border-[#1A1014] bg-white p-4 shadow-2xl hover:rotate-0 transition-transform"
              style={{ transform: "rotate(-2deg)" }}
            >
              <ImageWithFallback
                src="src\imports\pritiImage.jpeg"
                alt="Priti Poddar"
                className="w-full h-120 object-cover"
              />
            </div>

            {/* Bottom Right - Split Cards */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="grid grid-cols-3 gap-6"
            >
              {/* Projects Count */}
              <div className="p-6 rounded-2xl bg-cream border border-warm-border backdrop-blur-sm hover:border-electric-lavender/50 transition-all duration-300 hover:scale-105 group relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-electric-lavender/0 to-electric-lavender/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                <div className="relative z-10 text-center">
                  <p
                    className="text-4xl font-bold bg-[#B94040] bg-clip-text text-transparent mb-2"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    6+
                  </p>
                  <p className="text-slate-gray text-sm font-bold">
                    Projects Built
                  </p>
                </div>
              </div>

              {/* Publications Count */}
              <div className="p-6 rounded-2xl bg-cream border border-warm-border  backdrop-blur-sm hover:border-electric-lavender/50 transition-all duration-300 hover:scale-105 group relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-cyber-rose/0 to-cyber-rose/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                <div className="relative z-10 text-center">
                  <p
                    className="text-4xl font-bold bg-accent bg-clip-text text-transparent mb-2"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    75+
                  </p>
                  <p className="text-slate-gray text-sm font-bold">Leetcode</p>
                </div>
              </div>
              {/* Publications Count */}
              <div className="p-6 rounded-2xl bg-cream border border-warm-border  backdrop-blur-sm hover:border-electric-lavender/50 transition-all duration-300 hover:scale-105 group relative overflow-hidden">
                <div className="absolute inset-0 bg-soft-white  opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                <div className="relative z-10 text-center">
                  <p
                    className="text-4xl font-bold bg-chart-2 bg-clip-text text-transparent mb-2"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    2
                  </p>
                  <p className="text-slate-gray text-sm font-bold">Research</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
