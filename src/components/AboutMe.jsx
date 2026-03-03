import React from "react";
import { motion } from "framer-motion";
import {
  FaReact, FaJava, FaNodeJs, FaFigma, FaDatabase,
} from "react-icons/fa";
import {
  SiVite, SiSpringboot, SiExpress, SiMongodb, SiMysql,
  SiAdobephotoshop, SiAdobeillustrator, SiAdobeindesign,
} from "react-icons/si";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  }),
};

const skills = [
  {
    label: "Frontend",
    icon: <FaReact className="text-blue-400" />,
    items: [
      { icon: <FaReact className="text-blue-400 text-2xl" />, name: "React" },
      { icon: <SiVite className="text-yellow-400 text-2xl" />, name: "Vite" },
    ],
  },
  {
    label: "Backend",
    icon: <FaNodeJs className="text-green-500" />,
    items: [
      { icon: <FaJava className="text-red-500 text-2xl" />, name: "Java" },
      { icon: <SiSpringboot className="text-green-400 text-2xl" />, name: "Spring Boot" },
      { icon: <SiExpress className="text-gray-300 text-2xl" />, name: "Express.js" },
    ],
  },
  {
    label: "Databases",
    icon: <FaDatabase className="text-blue-300" />,
    items: [
      { icon: <SiMongodb className="text-green-500 text-2xl" />, name: "MongoDB" },
      { icon: <SiMysql className="text-blue-500 text-2xl" />, name: "MySQL" },
    ],
  },
  {
    label: "Design",
    icon: <FaFigma className="text-purple-400" />,
    items: [
      { icon: <FaFigma className="text-purple-400 text-2xl" />, name: "Figma" },
      { icon: <SiAdobephotoshop className="text-blue-400 text-2xl" />, name: "Photoshop" },
      { icon: <SiAdobeillustrator className="text-orange-500 text-2xl" />, name: "Illustrator" },
      { icon: <SiAdobeindesign className="text-pink-500 text-2xl" />, name: "InDesign" },
    ],
  },
];

export default function AboutMe() {
  return (
    <section style={{ background: "var(--black)" }} className="w-full">

      {/* ── Intro block ── */}
      <div className="max-w-6xl mx-auto px-6 py-28">
        {/* Section label */}
        <motion.p
          variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: false }}
          style={{ color: "var(--red)", fontFamily: "monospace", fontSize: "0.8rem", letterSpacing: "0.12em" }}
          className="mb-10 uppercase"
        >
          // Intro
        </motion.p>

        {/* Big editorial paragraph */}
        <motion.h2
          variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: false }}
          className="text-3xl md:text-5xl font-bold leading-tight mb-16 max-w-4xl"
        >
          I'm a versatile{" "}
          <span style={{ color: "var(--red)" }}>developer & designer who
            builds fast, functional products</span>{" "}
          with clean interfaces, sharp decisions, and real-world results.
        </motion.h2>

        {/* Two-column sub-row */}
        <div className="grid md:grid-cols-2 gap-12">
          <motion.p
            variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: false }}
            className="text-white/60 text-lg leading-relaxed"
          >
            Creative and detail-oriented Full Stack Developer and Graphic Designer
            with experience building responsive web applications using React, Vite,
            Java, Spring Boot, Express.js, and SQL. Skilled in integrating backend systems
            and payment solutions. Adept at crafting user-friendly interfaces through
            Figma and Adobe Creative Suite.
          </motion.p>

          <motion.div
            variants={fadeUp} initial="hidden" whileInView="visible" custom={1} viewport={{ once: false }}
            className="flex flex-col justify-between gap-6"
          >
            <div className="flex flex-col gap-2 text-sm text-white/50 uppercase tracking-widest">
              <span>Based in — Lublin, Poland</span>
              <span>Available — Freelance &amp; Full-time</span>
            </div>
            <a
              href="/projects"
              style={{ border: "1px solid rgba(255,255,255,0.2)", display: "inline-flex", alignItems: "center", gap: "0.5rem", padding: "0.75rem 1.5rem", fontSize: "0.85rem", fontWeight: 600, letterSpacing: "0.05em" }}
              className="text-white hover:text-[#e03120] hover:border-[#e03120] transition-all duration-200"
            >
              See my Work →
            </a>
          </motion.div>
        </div>
      </div>

      {/* ── Divider ── */}
      <div style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }} />

      {/* ── Skills ── */}
      <div className="max-w-6xl mx-auto px-6 py-24">
        <motion.p
          variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: false }}
          style={{ color: "var(--red)", fontFamily: "monospace", fontSize: "0.8rem", letterSpacing: "0.12em" }}
          className="mb-12 uppercase"
        >
          // Skills
        </motion.p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {skills.map((group, gi) => (
            <motion.div
              key={group.label}
              custom={gi}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false }}
            >
              <p className="text-xs uppercase tracking-widest text-white/40 mb-4 flex items-center gap-2">
                {group.icon} {group.label}
              </p>
              <div className="flex flex-wrap gap-3">
                {group.items.map((item) => (
                  <div key={item.name} className="flex flex-col items-center gap-1 p-3 rounded" style={{ background: "rgba(255,255,255,0.04)" }}>
                    {item.icon}
                    <span className="text-xs text-white/60">{item.name}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ── Divider ── */}
      <div style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }} />

      {/* ── Experience ── */}
      <div className="max-w-6xl mx-auto px-6 py-24">
        <motion.p
          variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: false }}
          style={{ color: "var(--red)", fontFamily: "monospace", fontSize: "0.8rem", letterSpacing: "0.12em" }}
          className="mb-12 uppercase"
        >
          // Experience
        </motion.p>

        <div className="flex flex-col gap-10">
          {[
            {
              title: "Freelance Graphic Designer",
              period: "Jan 2023 — Present",
              desc: "Led creation of impactful visual campaigns, collaborated with diverse clients and advertising agencies to deliver tailored branding solutions. Utilized Adobe Creative Suite to produce high-quality graphics.",
            },
            {
              title: "Internship — BHASO Donation Platform",
              period: "June 2025 — Aug 2025",
              desc: "Designed and developed a responsive donation platform using React and Vite, integrating backend services with Express.js to enable secure payment processing.",
            },
          ].map((exp, i) => (
            <motion.div
              key={exp.title}
              custom={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false }}
              className="grid md:grid-cols-3 gap-4 pb-10"
              style={{ borderBottom: "1px solid rgba(255,255,255,0.07)" }}
            >
              <div>
                <p className="text-xs text-white/40 uppercase tracking-widest">{exp.period}</p>
              </div>
              <div className="md:col-span-2">
                <h3 className="text-xl font-bold mb-2">{exp.title}</h3>
                <p className="text-white/60 leading-relaxed">{exp.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ── Education ── */}
      <div className="max-w-6xl mx-auto px-6 pb-24">
        <motion.p
          variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: false }}
          style={{ color: "var(--red)", fontFamily: "monospace", fontSize: "0.8rem", letterSpacing: "0.12em" }}
          className="mb-12 uppercase"
        >
          // Education
        </motion.p>
        <motion.div
          variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: false }}
          className="grid md:grid-cols-3 gap-4"
        >
          <div>
            <p className="text-xs text-white/40 uppercase tracking-widest">March 2023 — May 2026</p>
          </div>
          <div className="md:col-span-2 flex items-start gap-6">
            <img
              src="https://dl.wsei.pl/pluginfile.php/1/theme_adaptable/logo/1754997872/Logo-WSEI-Akademia%20%281%29.png"
              alt="WSEI"
              className="h-10 object-contain filter brightness-0 invert opacity-70"
            />
            <div>
              <h3 className="text-xl font-bold">Bachelor of Computer Science</h3>
              <p className="text-white/50">WSEI University Lublin</p>
            </div>
          </div>
        </motion.div>

        {/* Languages */}
        <motion.div
          variants={fadeUp} initial="hidden" whileInView="visible" custom={1} viewport={{ once: false }}
          className="mt-14 flex flex-wrap gap-4"
        >
          {["English (Fluent)", "Polish (Basic)", "German (Basic)"].map((lang) => (
            <span
              key={lang}
              style={{ border: "1px solid rgba(255,255,255,0.15)", fontSize: "0.8rem", padding: "0.4rem 1rem", letterSpacing: "0.04em" }}
              className="text-white/70"
            >
              {lang}
            </span>
          ))}
        </motion.div>
      </div>

    </section>
  );
}
