import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Send,
  Github,
  Linkedin,
  Mail,
  CheckCircle,
  AlertCircle,
  Loader,
  Award,
} from "lucide-react";
import emailjs from "@emailjs/browser";

const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

type Status = "idle" | "sending" | "success" | "error";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setStatus("sending");
    setErrorMsg("");

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          reply_to: formData.email,
        },
        EMAILJS_PUBLIC_KEY,
      );

      setStatus("success");

      setFormData({
        name: "",
        email: "",
        message: "",
      });

      setTimeout(() => setStatus("idle"), 5000);
    } catch (error) {
      console.error("EmailJS error:", error);

      setStatus("error");
      setErrorMsg("Something went wrong. Please email me directly.");

      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const inputClass = (field: string) =>
    `w-full px-4 py-3 rounded-lg bg-cream border-2 transition-all duration-300 focus:outline-none font-body text-text-primary placeholder:text-text-muted ${
      focusedField === field
        ? "border-violet shadow-md shadow-violet/20"
        : "border-warm-border"
    }`;

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-cream">
      {/* Background blobs */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-violet/5 rounded-full blur-[120px]" />
        <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-pink/5 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          {/* <p className="font-[Luckiest_Guy] text-sm text-[#B94040] uppercase text-center">
            CONTACT
          </p> */}

          <h2
            className="text-5xl lg:text-6xl font-bold italic leading-tight mb-4 text-text-primary"
            style={{ fontFamily: "var(--font-display)" }}
          >
            let's build <span className="text-violet">something.</span>
          </h2>

          <p
            className="text-text-muted text-lg"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Open to internships, research collabs, and cool projects.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* LEFT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="space-y-6"
          >
            <div className="p-8 rounded-2xl bg-cream border-2 border-warm-border">
              <h3
                className="text-2xl font-bold mb-3 text-text-primary"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Ready to collaborate?
              </h3>

              <p
                className="text-text-muted leading-relaxed mb-6"
                style={{ fontFamily: "var(--font-body)" }}
              >
                Whether you have a project in mind, want to discuss research
                opportunities, or just want to say hi — I'd love to hear from
                you.
              </p>

              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-1.5 rounded-full bg-violet/10 text-violet text-sm font-medium border border-violet/20">
                  Full Stack Dev
                </span>
                <span className="px-4 py-1.5 rounded-full bg-pink/10 text-pink text-sm font-medium border border-pink/20">
                  Machine Learning
                </span>
                <span className="px-4 py-1.5 rounded-full bg-orange/10 text-orange text-sm font-medium border border-orange/20">
                  AI
                </span>
              </div>
            </div>

            {/* Socials */}
            <div className="space-y-3">
              <p className="text-sm uppercase tracking-widest text-text-muted font-mono">
                Find me here
              </p>

              <a
                href="https://github.com/Priti-Poddar"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 p-4 rounded-xl bg-cream border-2 border-warm-border hover:border-violet hover:bg-violet/5 transition-all duration-300"
              >
                <div className="p-2.5 rounded-lg bg-violet/10 group-hover:bg-violet/20 transition-colors">
                  <Github size={20} className="text-violet" />
                </div>
                <div>
                  <p
                    className="font-semibold text-text-primary"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    GitHub
                  </p>
                  <p className="text-text-muted text-sm">@Priti-Poddar</p>
                </div>
                <span className="ml-auto text-text-muted group-hover:text-violet transition-colors">
                  ↗
                </span>
              </a>

              <a
                href="https://www.linkedin.com/in/priti-poddar-/"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 p-4 rounded-xl bg-cream border-2 border-warm-border hover:border-pink hover:bg-pink/5 transition-all duration-300"
              >
                <div className="p-2.5 rounded-lg bg-pink/10 group-hover:bg-pink/20 transition-colors">
                  <Linkedin size={20} className="text-pink" />
                </div>
                <div>
                  <p
                    className="font-semibold text-text-primary"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    LinkedIn
                  </p>
                  <p className="text-text-muted text-sm">Priti Poddar</p>
                </div>
                <span className="ml-auto text-text-muted group-hover:text-pink transition-colors">
                  ↗
                </span>
              </a>

              <a
                href="mailto:pritipoddar461@gmail.com"
                className="group flex items-center gap-4 p-4 rounded-xl bg-cream border-2 border-warm-border hover:border-orange hover:bg-orange/5 transition-all duration-300"
              >
                <div className="p-2.5 rounded-lg bg-orange/10 group-hover:bg-orange/20 transition-colors">
                  <Mail size={20} className="text-orange" />
                </div>
                <div>
                  <p
                    className="font-semibold text-text-primary"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    Email
                  </p>
                  <p className="text-text-muted text-sm">
                    pritipoddar461@gmail.com
                  </p>
                </div>
                <span className="ml-auto text-text-muted group-hover:text-orange transition-colors">
                  ↗
                </span>
              </a>
            </div>
            {/* ACM Badge */}
            <div className="flex items-center gap-4 p-5 rounded-xl bg-cream border-2 border-warm-border">
              <div className="p-3 rounded-full bg-violet/10">
                <Award size={22} className="text-violet" />
              </div>
              <div>
                <p
                  className="font-semibold text-text-primary"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  ACM Student Member
                </p>
                <p className="text-text-muted text-sm">
                  Association for Computing Machinery
                </p>
              </div>
            </div>
          </motion.div>

          {/* RIGHT SIDE FORM */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <form
              onSubmit={handleSubmit}
              className="p-8 rounded-2xl bg-cream border-2 border-warm-border space-y-5"
            >
              <h3
                className="text-2xl font-bold text-text-primary"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Send me a message
              </h3>
              {/* Name */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-text-primary text-sm font-semibold mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  onFocus={() => setFocusedField("name")}
                  onBlur={() => setFocusedField(null)}
                  required
                  disabled={status === "sending"}
                  className={inputClass("name")}
                  placeholder="Your name"
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-text-primary text-sm font-semibold mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  onFocus={() => setFocusedField("email")}
                  onBlur={() => setFocusedField(null)}
                  required
                  disabled={status === "sending"}
                  className={inputClass("email")}
                  placeholder="your.email@example.com"
                />
              </div>
              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-text-primary text-sm font-semibold mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  onFocus={() => setFocusedField("message")}
                  onBlur={() => setFocusedField(null)}
                  required
                  disabled={status === "sending"}
                  rows={6}
                  className={`${inputClass("message")} resize-none`}
                  placeholder="Tell me about your project or opportunity..."
                />
              </div>

              {/* Success */}
              {status === "success" && (
                <div className="flex items-center gap-3 p-4 rounded-lg bg-green-50 border border-green-200 text-green-700">
                  <CheckCircle size={18} />
                  Message sent successfully 🎉
                </div>
              )}

              {/* Status banners */}
              {status === "success" && (
                <motion.div
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-3 p-4 rounded-lg bg-green-50 border-2 border-green-200 text-green-700"
                >
                  <CheckCircle size={18} />
                  <p className="text-sm font-medium">
                    Message sent! I'll get back to you soon 🎉
                  </p>
                </motion.div>
              )}
              {status === "error" && (
                <motion.div
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-3 p-4 rounded-lg bg-red-50 border-2 border-red-200 text-red-700"
                >
                  <AlertCircle size={18} />
                  <p className="text-sm font-medium">{errorMsg}</p>
                </motion.div>
              )}

              {/* Submit */}
              <button
                type="submit"
                disabled={status === "sending" || status === "success"}
                className="group w-full px-8 py-4 rounded-full bg-violet text-cream font-semibold text-base hover:bg-[#581c87] hover:shadow-lg hover:shadow-violet/30 transition-all duration-300 hover:scale-[1.02] flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100"
                style={{ fontFamily: "var(--font-body)" }}
              >
                {status === "sending" ? (
                  <>
                    <Loader size={18} className="animate-spin" /> Sending...
                  </>
                ) : status === "success" ? (
                  <>
                    <CheckCircle size={18} /> Sent!
                  </>
                ) : (
                  <>
                    Send it!
                    <Send
                      size={18}
                      className="group-hover:translate-x-1 transition-transform"
                    />
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
