import React from "react";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";

export default function Cta() {
  return (
    <section
      style={{ background: "var(--off-white)" }}
      className="w-full py-28 px-6"
    >
      <div className="max-w-5xl mx-auto text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }} viewport={{ once: false }}
          style={{ color: "var(--red)", fontFamily: "monospace", fontSize: "0.8rem", letterSpacing: "0.12em" }}
          className="mb-6 uppercase"
        >
          // Let's Work Together
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }} viewport={{ once: false }}
          style={{
            fontFamily: "'Poppins', sans-serif",
            fontWeight: 900,
            fontSize: "clamp(3rem, 10vw, 8rem)",
            lineHeight: 0.92,
            color: "var(--black)",
            letterSpacing: "-0.01em",
          }}
          className="mb-10"
        >
          Ready to Build Something Great?
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }} viewport={{ once: false }}
        >
          <a
            href="/contact"
            style={{
              background: "var(--black)",
              color: "#fff",
              padding: "1rem 2.5rem",
              fontSize: "0.9rem",
              fontWeight: 700,
              letterSpacing: "0.06em",
              display: "inline-flex",
              alignItems: "center",
              gap: "0.6rem",
              textTransform: "uppercase",
              transition: "background 0.2s, color 0.2s",
            }}
            className="hover:bg-[#e03120]"
          >
            Get Started Today <FaArrowRight />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
