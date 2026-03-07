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
        background: hovered ? "#2563eb" : "rgba(255,255,255,0.1)",
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
        border: "1px solid rgba(255,255,255,0.15)",
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
      background: "#000",
      borderTop: "1px solid rgba(255,255,255,0.08)",
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
            {item}<span style={{ color: "#2563eb", marginLeft: "2rem" }}>·</span>
          </span>
        ))}
      </motion.div>
    </div>
  );
}

export default function Header() {
  const sectionRef = useRef(null);
  const { scrollY } = useScroll();

  const contentY = useTransform(scrollY, [0, 500], [0, -80]);
  const contentOp = useTransform(scrollY, [0, 350], [1, 0]);

  return (
    <section
      ref={sectionRef}
      style={{ background: "#000", overflowX: "hidden" }}
      className="relative w-full overflow-hidden"
    >
      {/* Shared hero layout — centered, works on both desktop and mobile */}
      <div
        className="relative w-full flex flex-col items-center justify-center"
        style={{
          minHeight: "100svh",
          paddingBottom: "2.6rem", /* space for ticker */
          background: "#000",
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          style={{
            y: contentY,
            opacity: contentOp,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            padding: "0 1.5rem",
            maxWidth: "640px",
            width: "100%",
          }}
        >
          {/* ── Portfolio label ── */}
          <p style={{
            fontFamily: "'Poppins', sans-serif",
            fontSize: "0.65rem",
            fontWeight: 600,
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "rgba(255,255,255,0.35)",
            marginBottom: "2rem",
          }}>
            Portfolio — 2025
          </p>

          {/* ── Round profile photo ── */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            style={{
              width: "120px",
              height: "120px",
              borderRadius: "50%",
              overflow: "hidden",
              border: "3px solid rgba(37,99,235,0.6)",
              boxShadow: "0 0 0 6px rgba(37,99,235,0.12)",
              marginBottom: "1.8rem",
              flexShrink: 0,
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
              }}
            />
          </motion.div>

          {/* ── Name ── */}
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.35, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            style={{
              fontFamily: "'Poppins', sans-serif",
              fontWeight: 900,
              fontSize: "clamp(2.8rem, 9vw, 5rem)",
              lineHeight: 1,
              color: "#fff",
              letterSpacing: "-0.04em",
              margin: 0,
              marginBottom: "0.6rem",
            }}
          >
            Farai Mahaso
          </motion.h1>

          {/* ── Role ── */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.48, duration: 0.7 }}
            style={{
              fontFamily: "'Poppins', sans-serif",
              fontWeight: 700,
              fontSize: "clamp(0.7rem, 1.8vw, 0.9rem)",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              color: "#2563eb",
              marginBottom: "1.4rem",
            }}
          >
            FullStack Developer &amp; Graphic Designer
          </motion.p>

          {/* ── Short bio ── */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.7 }}
            style={{
              fontFamily: "'Poppins', sans-serif",
              fontSize: "clamp(0.82rem, 2vw, 0.97rem)",
              fontWeight: 400,
              lineHeight: 1.75,
              color: "rgba(255,255,255,0.55)",
              maxWidth: "480px",
              marginBottom: "2rem",
            }}
          >
            I'm a passionate FullStack Developer and Graphic Designer based in Lublin, Poland. I build clean, performant web apps with React&nbsp;&amp;&nbsp;Spring Boot, and craft compelling visuals that bridge code and creativity.
          </motion.p>

          {/* ── Social links ── */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.72, duration: 0.7 }}
            style={{ display: "flex", gap: "0.6rem", flexWrap: "wrap", justifyContent: "center" }}
          >
            {socials.map((s) => (
              <SliderLink key={s.label} icon={s.icon} label={s.label} href={s.href} />
            ))}
          </motion.div>


        </motion.div>

        <Ticker />
      </div>
    </section>
  );
}
