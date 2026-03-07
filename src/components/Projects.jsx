import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaClock, FaTools, FaReact, FaNodeJs } from "react-icons/fa";
import { DiMongodb } from "react-icons/di";
import { SiFirebase, SiStripe, SiPostgresql, SiNextdotjs, SiGraphql } from "react-icons/si";
import { Link } from "react-router-dom";

const projects = [
  {
    title: "BHASO Website",
    year: "2025",
    description: "Comprehensive platform for Batanai HIV/AIDS Service Organization — resource library, event management, donation processing with secure payment gateway.",
    technologies: ["React", "Node.js", "MongoDB"],
    status: "live",
    codeLink: "https://github.com/fariethedev/bhasomain",
    demoLink: "https://batanaihivaidsserviceorg.netlify.app/",
    image: "/images/bhasowebsite.PNG",
  },
  {
    title: "Vebble",
    year: "2025",
    description: "Hybrid marketplace and social platform with follower system, product listings, social feed, direct messaging, and payment integration.",
    technologies: ["React", "Firebase", "Node.js", "Stripe"],
    status: "under-development",
    codeLink: "#",
    demoLink: "#",
    image: "https://cdn.dribbble.com/userupload/6735262/file/original-c66f947e624727398705ba7ff4dd52d9.png?resize=1024x768&vertical=center",
  },
  {
    title: "Swerrv Clothing Store",
    year: "2025",
    description: "Full-stack e-commerce platform with product catalog, shopping cart, JWT auth, admin dashboard, and order management — built with React and Spring Boot REST API.",
    technologies: ["React", "Spring Boot", "Java", "MySQL"],
    status: "live",
    codeLink: "https://github.com/fariethedev/swerrv",
    demoLink: "https://swerrv.vercel.app",
    image: "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?auto=format&fit=crop&w=1470&q=80",
  },
  {
    title: "Task Manager Pro",
    year: "2026",
    description: "Collaborative productivity tool with team workspaces, drag-and-drop task boards, and time tracking.",
    technologies: ["React", "GraphQL"],
    status: "under-development",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1415&q=80",
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
};

function padNum(n) {
  return String(n + 1).padStart(2, "0");
}

export default function Projects() {
  return (
    <section style={{ background: "var(--black)" }} className="w-full">
      <div className="max-w-6xl mx-auto px-4 md:px-6 py-16 md:py-28">

        {/* Section label */}
        <motion.p
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }} viewport={{ once: false }}
          style={{ color: "var(--red)", fontFamily: "monospace", fontSize: "0.8rem", letterSpacing: "0.12em" }}
          className="mb-16 uppercase"
        >
          // Selected Work
        </motion.p>

        {/* Projects list */}
        <motion.div
          variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.1 }}
          className="flex flex-col"
        >
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              variants={itemVariants}
              className="group grid md:grid-cols-12 gap-6 md:gap-10 pb-16 mb-16"
              style={{ borderBottom: "1px solid rgba(255,255,255,0.07)" }}
            >
              {/* Number — desktop only */}
              <div className="hidden md:flex md:col-span-2 items-start">
                <span
                  style={{
                    fontFamily: "'Poppins', sans-serif",
                    fontWeight: 900,
                    fontSize: "clamp(3rem, 8vw, 5.5rem)",
                    lineHeight: 1,
                    color: "transparent",
                    WebkitTextStroke: "1px rgba(255,255,255,0.15)",
                    userSelect: "none",
                  }}
                >
                  {padNum(i)}
                </span>
              </div>

              {/* Image */}
              <div className="md:col-span-4 overflow-hidden" style={{ borderRadius: "2px" }}>
                <motion.img
                  whileHover={{ scale: 1.04 }}
                  transition={{ duration: 0.5 }}
                  src={project.image}
                  alt={project.title}
                  className="w-full h-40 md:h-56 object-cover"
                  style={{ filter: "grayscale(30%)" }}
                />
              </div>

              {/* Content */}
              <div className="md:col-span-6 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <h2 className="text-2xl md:text-3xl font-bold">{project.title}</h2>
                    <span className="text-xs text-white/30 ml-auto">{project.year}</span>
                  </div>

                  {project.status !== "live" && (
                    <span
                      style={{ border: "1px solid rgba(224,49,32,0.4)", color: "var(--red)", fontSize: "0.65rem", letterSpacing: "0.08em", padding: "0.2rem 0.6rem" }}
                      className="inline-flex items-center gap-1 mb-3 uppercase"
                    >
                      {project.status === "coming-soon" ? <><FaClock size={10} /> Coming Soon</> : <><FaTools size={10} /> In Dev</>}
                    </span>
                  )}

                  <p className="text-white/50 leading-relaxed mb-5 text-sm">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((t) => (
                      <span
                        key={t}
                        style={{ border: "1px solid rgba(255,255,255,0.1)", fontSize: "0.7rem", padding: "0.2rem 0.6rem", letterSpacing: "0.04em" }}
                        className="text-white/50"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-3">
                  {project.codeLink && project.codeLink !== "#" && (
                    <a
                      href={project.codeLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm text-white/60 hover:text-white transition-colors"
                    >
                      <FaGithub /> Code
                    </a>
                  )}
                  {project.status === "live" && project.demoLink && project.demoLink !== "#" && (
                    <a
                      href={project.demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ background: "var(--red)" }}
                      className="flex items-center gap-2 text-sm text-white px-4 py-2 hover:opacity-80 transition-opacity"
                    >
                      <FaExternalLinkAlt size={12} /> Live →
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* All Projects link */}
        <motion.div
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.6 }} viewport={{ once: false }}
          className="text-center mt-4"
        >
          <Link
            to="/projects"
            style={{ border: "1px solid rgba(255,255,255,0.2)", padding: "0.9rem 2.5rem", fontSize: "0.85rem", letterSpacing: "0.06em", fontWeight: 600 }}
            className="inline-block text-white hover:border-[#e03120] hover:text-[#e03120] transition-all duration-200 uppercase"
          >
            View All Projects →
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
