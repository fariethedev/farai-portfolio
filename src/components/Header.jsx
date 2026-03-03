import React, { useState, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const socials = [
  { icon: <FaLinkedin size={18} />, label: "LinkedIn", href: "https://www.linkedin.com/in/farai-mahaso-275a88267" },
  { icon: <FaGithub size={18} />, label: "GitHub", href: "https://github.com/fariethedev" },
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
        background: hovered ? "#e03120" : "rgba(10,10,10,0.85)",
        color: "#fff",
        padding: "0.5rem 0.75rem",
        gap: "0.4rem",
        textDecoration: "none",
        fontFamily: "'Poppins', sans-serif",
        fontWeight: 700,
        fontSize: "0.72rem",
        letterSpacing: "0.07em",
        textTransform: "uppercase",
        transition: "background 0.25s",
        whiteSpace: "nowrap",
        cursor: "pointer",
        minHeight: "44px", // touch target
        borderRadius: "4px",
      }}
    >
      <span style={{ display: "flex", flexShrink: 0 }}>{icon}</span>
      <motion.span
        initial={{ width: 0, opacity: 0 }}
        animate={{ width: hovered ? "auto" : 0, opacity: hovered ? 1 : 0 }}
        transition={{ duration: 0.25, ease: "easeInOut" }}
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
    <div
      style={{
        background: "#0a0a0a",
        borderTop: "1px solid rgba(255,255,255,0.12)",
        overflow: "hidden",
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 20,
        height: "2.6rem",
        display: "flex",
        alignItems: "center",
        flexShrink: 0,
      }}
    >
      <motion.div
        animate={{ x: ["0%", "-50%"] }}
        transition={{ repeat: Infinity, duration: 28, ease: "linear" }}
        style={{ display: "flex", whiteSpace: "nowrap", willChange: "transform" }}
      >
        {repeated.map((item, i) => (
          <span
            key={i}
            style={{
              fontFamily: "'Poppins', sans-serif",
              fontSize: "0.6rem",
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: "rgba(255,255,255,0.55)",
              padding: "0 1.5rem",
            }}
          >
            {item}
            <span style={{ color: "#e03120", marginLeft: "1.5rem" }}>·</span>
          </span>
        ))}
      </motion.div>
    </div>
  );
}

export default function Header() {
  const sectionRef = useRef(null);
  const { scrollY } = useScroll();

  const nameY = useTransform(scrollY, [0, 500], [0, -120]);
  const nameOp = useTransform(scrollY, [0, 350], [1, 0]);
  const imgY = useTransform(scrollY, [0, 500], [0, -60]);
  const imgOp = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section
      ref={sectionRef}
      style={{ background: "var(--off-white)", overflowX: "hidden" }}
      className="relative w-full min-h-screen flex flex-col overflow-hidden"
    >
      {/* ═══════════════ MOBILE LAYOUT (< md) ═══════════════ */}
      <div className="md:hidden flex flex-col h-screen relative">
        {/* Photo — top half, rounded bottom corners */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          style={{ opacity: imgOp, y: imgY }}
          className="relative w-full"
          style2={{ flex: "0 0 55%" }}
        >
          <div style={{
            height: "52vmax",
            maxHeight: "55vh",
            borderRadius: "0 0 20px 20px",
            overflow: "hidden",
            background: "#f0ede8",
          }}>
            <img
              src="/images/FARAIIMAGE.jpg"
              alt="Farai Mahaso"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                objectPosition: "center top",
              }}
            />
          </div>
        </motion.div>

        {/* Bottom content block */}
        <motion.div
          style={{ opacity: nameOp, y: nameY, flex: 1 }}
          className="flex flex-col justify-end pb-12 px-4"
        >
          {/* Role text */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            style={{
              fontFamily: "'Poppins', sans-serif",
              fontSize: "0.78rem",
              fontWeight: 700,
              letterSpacing: "0.04em",
              color: "#0a0a0a",
              marginBottom: "10px",
            }}
          >
            <span style={{ color: "#e03120", marginRight: "0.3rem" }}>//</span>
            FullStack Developer &amp; Graphic Designer
          </motion.p>

          {/* Social icons */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45, duration: 0.6 }}
            className="flex gap-2 mb-3"
          >
            {socials.map((s) => (
              <SliderLink key={s.label} icon={s.icon} label={s.label} href={s.href} />
            ))}
          </motion.div>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            style={{
              fontFamily: "'Poppins', sans-serif",
              fontWeight: 900,
              fontSize: "clamp(3rem, 12vw, 5rem)",
              lineHeight: 0.92,
              color: "#0a0a0a",
              letterSpacing: "-0.04em",
              margin: 0,
            }}
          >
            Farai<br />Mahaso
          </motion.h1>
        </motion.div>

        <Ticker />
      </div>

      {/* ═══════════════ DESKTOP LAYOUT (>= md) ═══════════════ */}
      <div className="hidden md:block relative w-full min-h-screen">
        {/* Photo — standalone rounded card, top-right */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.0, ease: "easeOut" }}
          style={{
            position: "absolute",
            top: "5rem",
            right: "3rem",
            width: "clamp(200px, 28vw, 380px)",
            height: "clamp(240px, 36vw, 480px)",
            zIndex: 5,
            borderRadius: "16px",
            overflow: "hidden",
            boxShadow: "0 20px 60px rgba(0,0,0,0.18)",
            background: "#f0ede8",
            y: imgY,
            opacity: imgOp,
          }}
        >
          <img
            src="/images/FARAIIMAGE.jpg"
            alt="Farai Mahaso"
            style={{ width: "100%", height: "100%", objectFit: "contain", objectPosition: "center center" }}
          />
        </motion.div>

        {/* Bottom stack: role + social + name */}
        <motion.div
          style={{
            position: "absolute",
            bottom: "2.6rem",
            left: 0,
            right: 0,
            zIndex: 15,
            display: "flex",
            flexDirection: "column",
            gap: "12px",
            y: nameY,
            opacity: nameOp,
          }}
        >
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            style={{
              fontFamily: "'Poppins', sans-serif",
              fontSize: "clamp(0.8rem, 1.3vw, 1rem)",
              fontWeight: 700,
              letterSpacing: "0.02em",
              color: "#0a0a0a",
              whiteSpace: "nowrap",
              paddingLeft: "1.5rem",
              margin: 0,
            }}
          >
            <span style={{ color: "#e03120", marginRight: "0.35rem" }}>//</span>
            FullStack Developer &amp; Graphic Designer
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            style={{ display: "flex", gap: "0.5rem", paddingLeft: "1.5rem" }}
          >
            {socials.map((s) => (
              <SliderLink key={s.label} icon={s.icon} label={s.label} href={s.href} />
            ))}
          </motion.div>

          <motion.h1
            initial={{ y: 60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            style={{
              fontFamily: "'Poppins', sans-serif",
              fontWeight: 900,
              fontSize: "clamp(4.5rem, 15vw, 15rem)",
              lineHeight: 0.9,
              color: "#0a0a0a",
              letterSpacing: "-0.04em",
              whiteSpace: "nowrap",
              userSelect: "none",
              margin: 0,
              padding: 0,
              pointerEvents: "none",
            }}
          >
            Farai Mahaso
          </motion.h1>
        </motion.div>

        {/* Scroll hint */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1 }}
          style={{
            position: "absolute",
            top: "50%",
            right: "1.25rem",
            zIndex: 10,
            writingMode: "vertical-rl",
            fontSize: "0.6rem",
            letterSpacing: "0.18em",
            color: "#0a0a0a",
            textTransform: "uppercase",
            opacity: 0.35,
            fontFamily: "'Poppins', sans-serif",
          }}
        >
          Scroll ↓
        </motion.div>

        <Ticker />
      </div>
    </section>
  );
}
