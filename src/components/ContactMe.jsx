import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaFigma, FaFileUpload } from "react-icons/fa";

const services = [
  {
    id: "web-dev",
    name: "Web Development",
    icon: <FaReact className="text-blue-400" />,
    options: [
      { name: "New Website", price: "$500+" },
      { name: "Website Redesign", price: "$300+" },
      { name: "Maintenance", price: "$50/hr" },
    ],
  },
  {
    id: "graphic-design",
    name: "Graphic Design",
    icon: <FaFigma className="text-purple-400" />,
    options: [
      { name: "Logo Design", price: "$150+" },
      { name: "Brand Identity", price: "$300+" },
      { name: "Social Media Graphics", price: "$30/hr" },
    ],
  },
  {
    id: "full-stack",
    name: "Full Stack Project",
    icon: <FaNodeJs className="text-green-400" />,
    options: [
      { name: "Web Application", price: "$1000+" },
      { name: "E-commerce", price: "$1500+" },
      { name: "Custom Solution", price: "Contact for quote" },
    ],
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.08, duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  }),
};

export default function ContactMe() {
  const [selectedService, setSelectedService] = useState("");
  const [attachments, setAttachments] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [formData, setFormData] = useState({ name: "", email: "", message: "", serviceType: "", budget: "" });

  const handleInputChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const payload = new FormData();
      payload.append("access_key", "dea587fe-1343-4a7f-96d3-03ea027a7f52");
      Object.entries(formData).forEach(([k, v]) => payload.append(k, v));
      attachments.forEach((f) => payload.append("attachments", f));
      const res = await fetch("https://api.web3forms.com/submit", { method: "POST", body: payload });
      const result = await res.json();
      if (result.success) {
        setSubmitStatus("success");
        setFormData({ name: "", email: "", message: "", serviceType: "", budget: "" });
        setAttachments([]);
      } else {
        setSubmitStatus("error");
      }
    } catch {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClass =
    "w-full bg-transparent border-b border-white/20 text-white py-3 text-sm focus:outline-none focus:border-[#e03120] transition-colors placeholder-white/30";

  return (
    <section style={{ background: "var(--black)" }} className="w-full">
      <div className="max-w-5xl mx-auto px-6 py-28">

        {/* Label */}
        <motion.p
          variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: false }}
          style={{ color: "var(--red)", fontFamily: "monospace", fontSize: "0.8rem", letterSpacing: "0.12em" }}
          className="mb-8 uppercase"
        >
          // Get a Quote
        </motion.p>

        {/* Headline */}
        <motion.h2
          variants={fadeUp} initial="hidden" whileInView="visible" custom={1} viewport={{ once: false }}
          className="text-4xl md:text-6xl font-bold mb-4 leading-tight"
          style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 900, letterSpacing: "-0.03em", color: "#fff" }}
        >
          Let's Build Something.
        </motion.h2>
        <motion.p
          variants={fadeUp} initial="hidden" whileInView="visible" custom={2} viewport={{ once: false }}
          className="text-white/40 mb-16 text-lg"
        >
          Share your project details and I'll get back to you within 24 hours.
        </motion.p>

        {/* Alerts */}
        {submitStatus === "success" && (
          <div className="mb-8 p-4 border border-green-500/40 text-green-300 text-sm bg-green-900/20">
            ✓ Message sent! I'll respond within 24 hours.
          </div>
        )}
        {submitStatus === "error" && (
          <div className="mb-8 p-4 border border-red-500/40 text-red-300 text-sm bg-red-900/20">
            Something went wrong. Email me directly at faraimahaso8@gmail.com
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-14">

          {/* Service selection */}
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" custom={3} viewport={{ once: false }}>
            <p className="text-xs uppercase tracking-widest text-white/40 mb-5">01 — Select Service</p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {services.map((svc) => (
                <button
                  type="button"
                  key={svc.id}
                  onClick={() => setSelectedService(svc.id)}
                  style={{
                    border: selectedService === svc.id ? "1px solid var(--red)" : "1px solid rgba(255,255,255,0.12)",
                    background: selectedService === svc.id ? "rgba(224,49,32,0.08)" : "transparent",
                    padding: "1rem",
                    textAlign: "left",
                    transition: "all 0.2s",
                  }}
                  className="flex items-center gap-3 text-sm text-white"
                >
                  <span className="text-xl">{svc.icon}</span>
                  {svc.name}
                </button>
              ))}
            </div>

            {selectedService && (
              <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-3">
                {services.find((s) => s.id === selectedService)?.options.map((opt, i) => (
                  <button
                    type="button"
                    key={i}
                    onClick={() => setFormData({ ...formData, serviceType: opt.name })}
                    style={{
                      border: formData.serviceType === opt.name ? "1px solid var(--red)" : "1px solid rgba(255,255,255,0.08)",
                      padding: "0.75rem",
                      textAlign: "left",
                      transition: "all 0.2s",
                      background: "transparent",
                    }}
                  >
                    <p className="text-sm text-white font-medium">{opt.name}</p>
                    <p className="text-xs text-green-400 mt-1">{opt.price}</p>
                  </button>
                ))}
              </div>
            )}
          </motion.div>

          {/* Contact fields */}
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" custom={4} viewport={{ once: false }}>
            <p className="text-xs uppercase tracking-widest text-white/40 mb-5">02 — Your Details</p>
            <div className="grid sm:grid-cols-2 gap-8 mb-8">
              <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleInputChange} required className={inputClass} />
              <input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleInputChange} required className={inputClass} />
            </div>
            <textarea name="message" placeholder="Describe your project..." rows={5} value={formData.message} onChange={handleInputChange} required className={inputClass} />
          </motion.div>

          {/* Budget + upload */}
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" custom={5} viewport={{ once: false }}>
            <p className="text-xs uppercase tracking-widest text-white/40 mb-5">03 — Budget & Files</p>
            <div className="grid sm:grid-cols-2 gap-8">
              <select name="budget" value={formData.budget} onChange={handleInputChange}
                style={{ borderBottom: "1px solid rgba(255,255,255,0.2)", background: "transparent", color: "#fff" }}
                className="py-3 text-sm focus:outline-none focus:border-[#e03120] transition-colors"
              >
                <option value="" style={{ background: "#111" }}>Budget range</option>
                <option value="$500-$1000" style={{ background: "#111" }}>$500 – $1,000</option>
                <option value="$1000-$3000" style={{ background: "#111" }}>$1,000 – $3,000</option>
                <option value="$3000+" style={{ background: "#111" }}>$3,000+</option>
                <option value="custom" style={{ background: "#111" }}>Custom</option>
              </select>

              <label
                style={{ borderBottom: "1px solid rgba(255,255,255,0.2)", cursor: "pointer" }}
                className="flex items-center gap-3 py-3 text-sm text-white/40"
              >
                <FaFileUpload /> Upload reference files (optional)
                <input type="file" multiple onChange={(e) => setAttachments([...e.target.files])} className="hidden" />
                {attachments.length > 0 && <span className="text-white/60 text-xs">{attachments.length} file(s)</span>}
              </label>
            </div>
          </motion.div>

          {/* Submit */}
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" custom={6} viewport={{ once: false }}>
            <button
              type="submit"
              disabled={isSubmitting}
              style={{
                background: "var(--red)",
                color: "#fff",
                padding: "1rem 3rem",
                fontWeight: 700,
                fontSize: "0.85rem",
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                border: "none",
                cursor: isSubmitting ? "not-allowed" : "pointer",
                opacity: isSubmitting ? 0.6 : 1,
                transition: "opacity 0.2s",
              }}
            >
              {isSubmitting ? "Sending..." : "Get Your Free Quote →"}
            </button>
          </motion.div>
        </form>
      </div>
    </section>
  );
}
