import React from "react";
import ContactMe from "../components/ContactMe";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const socialLinks = [
  { name: "LinkedIn", icon: <FaLinkedin className="text-blue-400" />, url: "https://www.linkedin.com/in/farai-mahaso-275a88267", handle: "farai-mahaso-275a88267" },
  { name: "GitHub", icon: <FaGithub />, url: "https://github.com/fariethedev", handle: "fariethedev" },
  { name: "Email", icon: <FaEnvelope className="text-red-400" />, url: "mailto:faraimahaso8@gmail.com", handle: "faraimahaso8@gmail.com" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] } }),
};

export default function Contact() {
  return (
    <div style={{ background: "var(--black)" }}>
      {/* Info strip */}
      <div
        className="max-w-6xl mx-auto px-6 pt-28 pb-16 grid md:grid-cols-3 gap-10"
        style={{ borderBottom: "1px solid rgba(255,255,255,0.07)" }}
      >
        {[
          { icon: <FaMapMarkerAlt />, label: "Location", value: "Lublin, Poland · Remote worldwide" },
          { icon: <FaPhone />, label: "Phone", value: "+48 575 151 685 (WhatsApp)" },
          { icon: <FaEnvelope />, label: "Email", value: "faraimahaso8@gmail.com" },
        ].map((item, i) => (
          <motion.div key={item.label} custom={i} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: false }}>
            <p style={{ color: "var(--red)", fontSize: "0.7rem", letterSpacing: "0.1em", fontFamily: "monospace" }} className="mb-2 uppercase">
              {item.label}
            </p>
            <p className="flex items-center gap-2 text-white/70 text-sm">{item.icon} {item.value}</p>
          </motion.div>
        ))}
      </div>

      {/* Social cards */}
      <div
        className="max-w-6xl mx-auto px-6 py-12 grid sm:grid-cols-3 gap-4"
        style={{ borderBottom: "1px solid rgba(255,255,255,0.07)" }}
      >
        {socialLinks.map((s, i) => (
          <motion.a
            key={s.name}
            href={s.url}
            target="_blank"
            rel="noopener noreferrer"
            custom={i}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            style={{ border: "1px solid rgba(255,255,255,0.1)", padding: "1rem", display: "flex", flexDirection: "column", gap: "0.5rem" }}
            className="group hover:border-[#e03120] transition-colors duration-200"
          >
            <span className="text-2xl text-white/60 group-hover:text-[#e03120] transition-colors">{s.icon}</span>
            <span className="text-sm font-semibold text-white">{s.name}</span>
            <span className="text-xs text-white/40">{s.handle}</span>
          </motion.a>
        ))}
      </div>

      {/* Full contact form */}
      <ContactMe />
    </div>
  );
}
