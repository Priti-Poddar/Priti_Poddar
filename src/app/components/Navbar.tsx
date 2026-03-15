import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navLinks = [
    { name: "About", id: "about" },
    { name: "Skills", id: "skills" },
    { name: "Projects", id: "projects" },
    { name: "Research", id: "research" },
    { name: "Contact", id: "contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-[#F5F0E8] border-b border-[#D4CABC]" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div
          className="text-3xl text-[#6B21A8] cursor-pointer"
          style={{
            fontFamily: "Playfair Display, serif",
            fontStyle: "italic",
            fontWeight: "600",
          }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          Priti Poddar
        </div>

        {/* <div className="hidden md:flex items-center gap-8">
          <button
            onClick={() => scrollToSection("about")}
            className="text-[#1A1014] hover:text-[#6B21A8] transition-colors relative group"
            style={{ fontFamily: "DM Sans, sans-serif" }}
          >
            About
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#6B21A8] group-hover:w-full transition-all duration-300"></span>
          </button>
          <button
            onClick={() => scrollToSection("projects")}
            className="text-[#1A1014] hover:text-[#6B21A8] transition-colors relative group"
            style={{ fontFamily: "DM Sans, sans-serif" }}
          >
            Work
          </button>
          <button
            onClick={() => scrollToSection("research")}
            className="text-[#1A1014] hover:text-[#6B21A8] transition-colors relative group"
            style={{ fontFamily: "DM Sans, sans-serif" }}
          >
            Research
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="text-[#1A1014] hover:text-[#6B21A8] transition-colors relative group"
            style={{ fontFamily: "DM Sans, sans-serif" }}
          >
            Contact
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="px-5 py-2 border-2 border-[#1A1014] rounded-full hover:bg-[#1A1014] hover:text-[#F5F0E8] transition-all"
            style={{ fontFamily: "DM Sans, sans-serif" }}
          >
            Hire
          </button>
        </div> */}

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className="text-[#1A1014] hover:text-[#6B21A8] transition-colors relative group"
            >
              {link.name}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#6B21A8] group-hover:w-full transition-all duration-300"></span>
            </button>
          ))}
          <button
            onClick={() => scrollToSection("contact")}
            className="px-6 py-2 text-soft-white rounded-full bg-primary font-medium hover:shadow-lg hover:shadow-electric-lavender/50 transition-all duration-300 hover:scale-105"
          >
            Hire Me
          </button>
        </div>
      </div>
    </nav>
  );
}
