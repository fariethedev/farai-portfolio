import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { label: "Projects", to: "/projects" },
    { label: "About", to: "/about" },
    { label: "Contact", to: "/contact" },
  ];

  // When not scrolled we're over the off-white hero — use dark text/icons
  const onLight = !scrolled;

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        style={{
          background: scrolled
            ? "rgba(10,10,10,0.96)"
            : "rgba(242,240,235,0.85)",
          backdropFilter: "blur(14px)",
          borderBottom: scrolled
            ? "1px solid rgba(255,255,255,0.06)"
            : "1px solid rgba(10,10,10,0.08)",
          transition: "background 0.35s, border 0.35s",
        }}
        className="fixed top-0 left-0 w-full z-50"
      >
        <nav className="max-w-7xl mx-auto px-4 md:px-6 py-4 md:py-4 flex items-center justify-between">
          {/* Logo */}
          <Link
            to="/"
            style={{
              color: onLight ? "#0a0a0a" : "#fff",
              fontWeight: 700,
              letterSpacing: "0.12em",
              fontSize: "0.85rem",
              textTransform: "uppercase",
              textDecoration: "none",
              transition: "color 0.3s",
            }}
          >
            Farai.dev
          </Link>

          {/* Desktop links */}
          <ul className="hidden md:flex items-center gap-10">
            {links.map((l) => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  style={{
                    color: onLight ? "rgba(10,10,10,0.65)" : "rgba(255,255,255,0.65)",
                    fontSize: "0.85rem",
                    fontWeight: 500,
                    textDecoration: "none",
                    transition: "color 0.3s",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = onLight ? "#0a0a0a" : "#fff")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = onLight ? "rgba(10,10,10,0.65)" : "rgba(255,255,255,0.65)")}
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Download CV */}
          <a
            href="/cv.pdf"
            download
            className="hidden md:inline-flex items-center gap-2 text-sm font-semibold px-5 py-2 transition-all duration-200"
            style={{
              border: onLight ? "1px solid rgba(10,10,10,0.35)" : "1px solid rgba(255,255,255,0.3)",
              color: onLight ? "#0a0a0a" : "#fff",
              textDecoration: "none",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "#2563eb";
              e.currentTarget.style.color = "#2563eb";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = onLight ? "rgba(10,10,10,0.35)" : "rgba(255,255,255,0.3)";
              e.currentTarget.style.color = onLight ? "#0a0a0a" : "#fff";
            }}
          >
            ↓ Download CV
          </a>

          {/* Mobile burger — Tailwind md:hidden controls visibility */}
          <button
            onClick={() => setIsOpen(true)}
            style={{ color: onLight ? "#0a0a0a" : "#fff", transition: "color 0.3s", minWidth: "44px", minHeight: "44px" }}
            className="md:hidden text-xl focus:outline-none flex items-center justify-end"
          >
            <FaBars />
          </button>
        </nav>
      </motion.header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              key="overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/70 z-40"
              onClick={() => setIsOpen(false)}
            />
            <motion.div
              key="drawer"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.28 }}
              className="fixed top-0 right-0 h-full w-64 z-50 flex flex-col p-8"
              style={{ background: "#0a0a0a", borderLeft: "1px solid rgba(255,255,255,0.08)" }}
            >
              <button
                onClick={() => setIsOpen(false)}
                className="self-end text-xl mb-10"
                style={{ color: "rgba(255,255,255,0.4)" }}
              >
                <FaTimes />
              </button>
              <nav className="flex flex-col gap-6">
                {links.map((l) => (
                  <Link
                    key={l.to}
                    to={l.to}
                    onClick={() => setIsOpen(false)}
                    style={{ color: "#fff", fontSize: "1.5rem", fontWeight: 700, textDecoration: "none" }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "#e03120")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "#fff")}
                  >
                    {l.label}
                  </Link>
                ))}
                <a
                  href="/cv.pdf"
                  download
                  onClick={() => setIsOpen(false)}
                  className="mt-4 text-sm font-semibold text-center py-3 transition-all"
                  style={{ border: "1px solid rgba(255,255,255,0.2)", color: "#fff", textDecoration: "none" }}
                >
                  ↓ Download CV
                </a>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
