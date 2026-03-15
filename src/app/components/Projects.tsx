import { ExternalLink, Github, ArrowRight } from 'lucide-react';
import { motion } from "motion/react";
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Projects() {
  const projects = [
    {
      title: "Wander-Lust",
      description:
        "A full-featured Airbnb-style accommodation booking platform with user authentication, property listings, and booking management.",
      image:
        "https://images.unsplash.com/photo-1663194815198-3e3183f9d9eb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBhY2NvbW1vZGF0aW9uJTIwYm9va2luZyUyMHdlYnNpdGV8ZW58MXx8fHwxNzcyOTU2MTE5fDA&ixlib=rb-4.1.0&q=80&w=1080",
      tags: ["Node.js", "Express", "MongoDB", "EJS"],
      liveLink: "https://wander-lust-ko4m.onrender.com/listings",
      githubLink: "https://github.com/Priti-Poddar/Wander-Lust",
    },
    {
      title: "Zerodha Clone",
      description:
        "A sophisticated stock trading platform with real-time market data, portfolio management, and trading functionality.",
      image:
        "https://images.unsplash.com/photo-1761850167081-473019536383?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdG9jayUyMHRyYWRpbmclMjBwbGF0Zm9ybSUyMGRhc2hib2FyZHxlbnwxfHx8fDE3NzI5NTYxMjB8MA&ixlib=rb-4.1.0&q=80&w=1080",
      tags: ["React", "Node.js", "MongoDB", "REST API", "Tree.js"],
      liveLink: "https://zerodha-sv8s.vercel.app/",
      githubLink: "https://github.com/Priti-Poddar/Zerodha",
    },
    {
      title: "Cure-Corner",
      description:
        "An integrated healthcare platform for pharmacy services and doctor booking with appointment scheduling and prescription management.",
      image:
        "https://images.unsplash.com/photo-1577368211130-4bbd0181ddf0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaGFybWFjeSUyMG1lZGljaW5lJTIwaGVhbHRoY2FyZXxlbnwxfHx8fDE3NzI5NDg4MjZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
      tags: ["Node.js", "Express", "MongoDB"],
      liveLink: "https://dipti-medical.onrender.com/",
      githubLink: "https://github.com/Priti-Poddar/Cure-Corner",
    },
    {
      title: "Connectly",
      description:
        "A real-time social networking and chat platform with live messaging, user profiles, and social interactions.",
      image:
        "https://images.unsplash.com/photo-1662974770404-468fd9660389?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2NpYWwlMjBjaGF0JTIwbWVzc2FnaW5nJTIwYXBwfGVufDF8fHx8MTc3Mjk1NjEyMXww&ixlib=rb-4.1.0&q=80&w=1080",
      tags: ["JavaScript", "Socket.io", "Node.js", "WebRTC"],
      liveLink: "https://connectlyfrontend.onrender.com/",
      githubLink: "https://github.com/Priti-Poddar/Connectly",
    },
  ];

  return (
    <section id="projects" className="py-24 px-6 bg-[#EDE8DC]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <p
          className="text-[8rem] uppercase tracking-wider text-foreground mb-8 leading-[0.9] text-[#B94040] text-center uppercase"
          style={{ fontFamily: "Luckiest Guy, cursive" }}
        >
          MY WORK
        </p>

        <p
          className="text-lg text-primary mb-16 text-center"
          style={{ fontFamily: "DM Sans, sans-serif" }}
        >
          Full-stack apps, real problems, real users. Check the live demos.
        </p>
        

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative rounded-2xl bg-dark-navy/50 border border-lavender-glow backdrop-blur-sm overflow-hidden hover:border-electric-lavender/50 transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl hover:shadow-electric-lavender/20"
            >
              {/* Gradient Overlay on Hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-electric-lavender/0 via-cyber-rose/0 to-neon-teal/0 group-hover:from-electric-lavender/5 group-hover:via-cyber-rose/5 group-hover:to-neon-teal/5 transition-all duration-300 z-10 pointer-events-none"></div>

              {/* Project Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-navy via-dark-navy/50 to-transparent"></div>
              </div>

              {/* Content */}
              <div className="relative z-20 p-6 space-y-4">
                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs rounded-full bg-deep-midnight/80 border border-electric-lavender/30 text-slate-gray font-mono"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Title */}
                <h3
                  className="text-2xl font-bold text-primary group-hover:text-electric-lavender transition-colors"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-slate-gray text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Links */}
                <div className="flex items-center gap-4 pt-4">
                  <a
                    href={project.liveLink}
                    className="group/btn flex items-center gap-2 px-4 py-2 rounded-full bg-red-back/90 text-soft-white font-medium text-sm hover:shadow-lg hover:shadow-electric-lavender/50 transition-all duration-300"
                  >
                    Live Demo
                    <ExternalLink
                      size={14}
                      className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform"
                    />
                  </a>
                  <a
                    href={project.githubLink}
                    className="p-2 rounded-full border border-primary hover:bg-red-back/20 hover:border-electric-lavender transition-all duration-300"
                    aria-label="View on GitHub"
                  >
                    <Github size={20} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <a
            href="https://github.com/Priti-Poddar"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 mt-8 border-2 border-[#1A1014] rounded-full hover:bg-[#1A1014] hover:text-[#F5F0E8] transition-all text-lg font-semibold"
            style={{ fontFamily: "DM Sans, sans-serif" }}
          >
            Want to see more? → View GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
