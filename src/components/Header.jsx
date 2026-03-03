import React, { useState, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const socials = [
  { icon: <FaLinkedin size={16} />, label: "LinkedIn", href: "https://www.linkedin.com/in/farai-mahaso-275a88267" },
  { icon: <FaGithub size={16} />, label: "GitHub", href: "https://github.com/fariethedev" },
];

function SliderLink({ icon, label, href }) {
  const [hovered, setHovered] = useState(false);
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: "inline-flex",
        alignItems: "center",
        overflow: "hidden",
        background: hovered ? "#e03120" : "rgba(10,10,10,0.82)",
        color: "#fff",
        padding: "0.5rem 0.7rem",
        gap: "0.4rem",
        textDecoration: "none",
        fontFamily: "'Poppins', sans-serif",
        fontWeight: 700,
        fontSize: "0.7rem",
        letterSpacing: "0.08em",
        textTransform: "uppercase",
        transition: "background 0.22s",
        whiteSpace: "nowrap",
        cursor: "pointer",
        minHeight: "44px",
      }}
    >
      <span style={{ display: "flex", flexShrink: 0 }}>{icon}</span>
      <motion.span
        initial={{ width: 0, opacity: 0 }}
        animate={{ width: hovered ? "auto" : 0, opacity: hovered ? 1 : 0 }}
        transition={{ duration: 0.22, ease: "easeInOut" }}
        style={{ display: "inline-block", overflow: "hidden" }}
      >
        {label}
      </motion.span>
    </a>
  );
}

const tickerItems = [
  "FullStack Developer",
  "Graphic Designer",
  "React · Java · Spring Boot",
  "Lublin, Poland",
  "Open to Work",
];

function Ticker() {
  const repeated = [...tickerItems, ...tickerItems, ...tickerItems, ...tickerItems];
  return (
    <div style={{
      background: "#0a0a0a",
      borderTop: "1px solid rgba(255,255,255,0.1)",
      overflow: "hidden",
      position: "absolute",
      bottom: 0, left: 0, right: 0,
      zIndex: 30,
      height: "2.6rem",
      display: "flex",
      alignItems: "center",
    }}>
      <motion.div
        animate={{ x: ["0%", "-50%"] }}
        transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
        style={{ display: "flex", whiteSpace: "nowrap", willChange: "transform" }}
      >
        {repeated.map((item, i) => (
          <span key={i} style={{
            fontFamily: "'Poppins', sans-serif",
            fontSize: "0.6rem",
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            color: "rgba(255,255,255,0.5)",
            padding: "0 1.5rem",
          }}>
            {item}<span style={{ color: "#e03120", marginLeft: "2rem" }}>·</span>
          </span>
        ))}
      </motion.div>
    </div>
  );
}

export default function Header() {
  const sectionRef = useRef(null);
  const { scrollY } = useScroll();

  // Scroll-driven parallax
  const contentY = useTransform(scrollY, [0, 500], [0, -100]);
  const contentOp = useTransform(scrollY, [0, 350], [1, 0]);
  const photoY = useTransform(scrollY, [0, 500], [0, -60]);
  const photoOp = useTransform(scrollY, [0, 400], [1, 0]);
  const nameY = useTransform(scrollY, [0, 500], [0, -130]);
  const nameOp = useTransform(scrollY, [0, 380], [1, 0]);

  return (
    <section
      ref={sectionRef}
      style={{ background: "var(--off-white)", overflowX: "hidden" }}
      className="relative w-full overflow-hidden"
    >
      {/* ════════════════ DESKTOP (≥ 768px) ════════════════ */}
      <div
        className="hidden md:block relative w-full"
        style={{ height: "100vh", minHeight: "600px" }}
      >
        {/* ── Full-height photo, RIGHT side, z-index above name ── */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.0, ease: "easeOut" }}
          style={{
            position: "absolute",
            top: 0,
            right: 0,
            width: "48%",
            height: "calc(100% - 2.6rem)",
            zIndex: 10,
            y: photoY,
            opacity: photoOp,
          }}
        >
          <img
            src="/images/FARAIIMAGE.jpg"
            alt="Farai Mahaso"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "center top",
              filter: "grayscale(20%)",
              display: "block",
            }}
          />
          <div style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(to right, var(--off-white) 0%, transparent 20%)",
            pointerEvents: "none",
          }} />
        </motion.div>

        {/* ── Upper-left: name tag + role + socials ── */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          style={{
            position: "absolute",
            top: "clamp(5rem, 12vh, 8rem)",
            left: "clamp(1.5rem, 4vw, 4rem)",
            zIndex: 20,
            y: contentY,
            opacity: contentOp,
          }}
        >
          <p style={{
            fontFamily: "'Poppins', sans-serif",
            fontSize: "0.7rem",
            fontWeight: 600,
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "rgba(10,10,10,0.45)",
            marginBottom: "1.2rem",
          }}>
            Portfolio — 2025
          </p>

          <h2 style={{
            fontFamily: "'Poppins', sans-serif",
            fontWeight: 800,
            fontSize: "clamp(2rem, 5vw, 4rem)",
            lineHeight: 1.1,
            color: "#0a0a0a",
            letterSpacing: "-0.04em",
            marginBottom: "0.8rem",
          }}>
            Farai
          </h2>

          <p style={{
            fontFamily: "'Poppins', sans-serif",
            fontWeight: 700,
            fontSize: "clamp(0.75rem, 1.2vw, 0.95rem)",
            letterSpacing: "0.04em",
            textTransform: "uppercase",
            color: "#0a0a0a",
            opacity: 0.55,
            marginBottom: "2rem",
            lineHeight: 1.6,
          }}>
            FullStack Developer<br />&amp; Graphic Designer
          </p>

          <div style={{ display: "flex", gap: "0.5rem" }}>
            {socials.map((s) => (
              <SliderLink key={s.label} icon={s.icon} label={s.label} href={s.href} />
            ))}
          </div>
        </motion.div>

        {/* ── Scroll hint ── */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          style={{
            position: "absolute",
            right: "1.25rem",
            top: "50%",
            transform: "translateY(-50%)",
            writingMode: "vertical-rl",
            fontSize: "0.58rem",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "#0a0a0a",
            opacity: 0.3,
            fontFamily: "'Poppins', sans-serif",
            zIndex: 20,
          }}
        >
          Scroll ↓
        </motion.p>

        {/* ── Giant background name ── */}
        <motion.h1
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
          style={{
            position: "absolute",
            bottom: "2.6rem",
            left: "-0.04em",
            zIndex: 5,
            fontFamily: "'Poppins', sans-serif",
            fontWeight: 900,
            fontSize: "clamp(6rem, 25vw, 30rem)",
            lineHeight: 0.85,
            color: "#0a0a0a",
            letterSpacing: "-0.05em",
            whiteSpace: "nowrap",
            userSelect: "none",
            pointerEvents: "none",
            y: nameY,
            opacity: nameOp,
          }}
        >
          Farai
        </motion.h1>

        <Ticker />
      </div>

      {/* ════════════════ MOBILE (< 768px) ════════════════ */}
      <div
        className="md:hidden flex flex-col relative"
        style={{ height: "100svh", minHeight: "580px" }}
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.9 }}
          style={{ opacity: photoOp, y: photoY, position: "relative", flex: "0 0 54%" }}
        >
          <div style={{ width: "100%", height: "100%", overflow: "hidden" }}>
            <img
              src="/images/FARAIIMAGE.jpg"
              alt="Farai Mahaso"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                objectPosition: "center top",
                filter: "grayscale(10%)",
                display: "block",
              }}
            />
            <div style={{
              position: "absolute",
              bottom: 0, left: 0, right: 0,
              height: "35%",
              background: "linear-gradient(to bottom, transparent, var(--off-white))",
            }} />
          </div>
        </motion.div>

        <motion.div
          style={{ opacity: contentOp, y: contentY, flex: 1, display: "flex", flexDirection: "column", justifyContent: "flex-end", padding: "0 1.25rem 2.8rem" }}
        >
          <motion.p
            initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.6 }}
            style={{ fontFamily: "'Poppins', sans-serif", fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.04em", color: "#0a0a0a", marginBottom: "8px" }}
          >
            <span style={{ color: "#e03120", marginRight: "0.3rem" }}>//</span>
            FullStack Developer &amp; Graphic Designer
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.38, duration: 0.6 }}
            style={{ display: "flex", gap: "0.45rem", marginBottom: "10px" }}
          >
            {socials.map((s) => (
              <SliderLink key={s.label} icon={s.icon} label={s.label} href={s.href} />
            ))}
          </motion.div>

          <motion.h1
            initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
            style={{
              fontFamily: "'Poppins', sans-serif",
              fontWeight: 900,
              fontSize: "clamp(3.5rem, 15vw, 6rem)",
              lineHeight: 0.92,
              color: "#0a0a0a",
              letterSpacing: "-0.04em",
              margin: 0,
            }}
          >
            Farai
          </motion.h1>
        </motion.div>

        <Ticker />
      </div>
    </section>
  );
}
