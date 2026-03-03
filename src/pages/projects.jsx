import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaClock, FaTools, FaReact, FaNodeJs } from "react-icons/fa";
import { DiMongodb } from "react-icons/di";
import { SiFirebase, SiStripe, SiPostgresql, SiNextdotjs, SiGraphql } from "react-icons/si";

const allProjects = [
  {
    title: "BHASO Website",
    year: "2025",
    category: "Web Development",
    description: "Comprehensive platform for Batanai HIV/AIDS Service Organization with resource library, event management, and donation processing with secure payment gateway.",
    technologies: ["React", "Node.js", "MongoDB", "Express"],
    status: "live",
    codeLink: "https://github.com/fariethedev/bhasomain",
    demoLink: "https://batanaihivaidsserviceorg.netlify.app/",
    image: "/images/bhasowebsite.PNG",
  },
  {
    title: "Vebble",
    year: "2025",
    category: "Full Stack",
    description: "Hybrid marketplace and social platform with follower system, product listings, social feed, direct messaging, and Stripe payment integration.",
    technologies: ["React", "Firebase", "Node.js", "Stripe"],
    status: "live",
    codeLink: "#",
    demoLink: "#",
    image: "https://cdn.dribbble.com/userupload/6735262/file/original-c66f947e624727398705ba7ff4dd52d9.png?resize=1024x768&vertical=center",
  },
  {
    title: "Swerrv Clothing Store",
    year: "2025",
    category: "E-Commerce",
    description: "Modern e-commerce solution with product catalog, shopping cart, secure Stripe checkout, and order tracking.",
    technologies: ["Next.js", "Stripe", "PostgreSQL"],
    status: "coming-soon",
    image: "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?auto=format&fit=crop&w=1470&q=80",
  },
  {
    title: "Task Manager Pro",
    year: "2026",
    category: "Productivity",
    description: "Collaborative productivity tool with team workspaces, drag-and-drop task boards, time tracking and calendar integration.",
    technologies: ["React", "GraphQL"],
    status: "under-development",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1415&q=80",
  },
  {
    title: "FitTrack",
    year: "2026",
    category: "Mobile",
    description: "Comprehensive fitness application with personalized workout plans, nutrition tracking, and progress analytics.",
    technologies: ["React Native", "Firebase"],
    status: "under-development",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=1470&q=80",
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};
const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
};

function padNum(n) { return String(n + 1).padStart(2, "0"); }

export default function ProjectsPage() {
  return (
    <div style={{ background: "var(--black)" }} className="min-h-screen">
      <div className="max-w-6xl mx-auto px-6 pt-28 pb-28">

        {/* Header */}
        <motion.p
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
          style={{ color: "var(--red)", fontFamily: "monospace", fontSize: "0.8rem", letterSpacing: "0.12em" }}
          className="mb-6 uppercase"
        >
          // All Projects
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 900, fontSize: "clamp(3rem, 10vw, 8rem)", lineHeight: 0.9, letterSpacing: "-0.03em" }}
          className="text-white mb-20"
        >
          Selected Work
        </motion.h1>

        {/* List */}
        <motion.div
          variants={containerVariants} initial="hidden" animate="visible"
          className="flex flex-col"
        >
          {allProjects.map((project, i) => (
            <motion.div
              key={project.title}
              variants={itemVariants}
              className="group grid md:grid-cols-12 gap-6 md:gap-10 pb-16 mb-16"
              style={{ borderBottom: "1px solid rgba(255,255,255,0.07)" }}
            >
              {/* Number */}
              <div className="md:col-span-1 pt-1">
                <span style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 900, fontSize: "3.5rem", lineHeight: 1, color: "transparent", WebkitTextStroke: "1px rgba(255,255,255,0.15)", userSelect: "none" }}>
                  {padNum(i)}
                </span>
              </div>

              {/* Image */}
              <div className="md:col-span-4 overflow-hidden">
                <motion.img
                  whileHover={{ scale: 1.04 }}
                  transition={{ duration: 0.5 }}
                  src={project.image}
                  alt={project.title}
                  className="w-full h-52 object-cover"
                  style={{ filter: "grayscale(20%)" }}
                />
              </div>

              {/* Info */}
              <div className="md:col-span-7 flex flex-col justify-between">
                <div>
                  <div className="flex items-start justify-between mb-3 flex-wrap gap-2">
                    <div>
                      <span className="text-xs text-white/30 uppercase tracking-widest">{project.category} · {project.year}</span>
                      <h2 className="text-2xl md:text-3xl font-bold mt-1">{project.title}</h2>
                    </div>
                    {project.status !== "live" && (
                      <span style={{ border: "1px solid rgba(224,49,32,0.4)", color: "var(--red)", fontSize: "0.65rem", letterSpacing: "0.08em", padding: "0.2rem 0.7rem" }}
                        className="inline-flex items-center gap-1 uppercase mt-1">
                        {project.status === "coming-soon" ? <><FaClock size={10} /> Coming Soon</> : <><FaTools size={10} /> In Dev</>}
                      </span>
                    )}
                  </div>

                  <p className="text-white/50 text-sm leading-relaxed mb-5">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((t) => (
                      <span key={t} style={{ border: "1px solid rgba(255,255,255,0.1)", fontSize: "0.7rem", padding: "0.2rem 0.6rem", letterSpacing: "0.04em" }}
                        className="text-white/50">{t}</span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-4">
                  {project.codeLink && project.codeLink !== "#" && (
                    <a href={project.codeLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-white/60 hover:text-white transition-colors">
                      <FaGithub /> Code
                    </a>
                  )}
                  {project.status === "live" && project.demoLink && project.demoLink !== "#" && (
                    <a href={project.demoLink} target="_blank" rel="noopener noreferrer"
                      style={{ background: "var(--red)", padding: "0.4rem 1.2rem", fontSize: "0.8rem", fontWeight: 700 }}
                      className="flex items-center gap-2 text-white hover:opacity-80 transition-opacity">
                      <FaExternalLinkAlt size={12} /> Live →
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
