import React from "react";
import { FaGithub, FaLinkedin, FaTwitter, FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { HiStatusOnline } from "react-icons/hi";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer
      style={{ borderTop: "1px solid rgba(255,255,255,0.07)", background: "var(--black)" }}
      className="w-full py-10 md:py-14 px-4 md:px-6"
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">

          {/* Brand */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <span className="font-bold text-xl tracking-wider">Farai Mahaso</span>
              <span className="flex items-center gap-1 text-green-400 text-xs">
                <HiStatusOnline className="animate-pulse" /> Available
              </span>
            </div>
            <div className="text-sm text-white/40 flex flex-col gap-1">
              <span className="flex items-center gap-2"><FaMapMarkerAlt /> Lublin, Poland</span>
              <span className="flex items-center gap-2"><FaPhone /> +48 575 151 685</span>
              <span className="flex items-center gap-2"><FaEnvelope /> faraimahaso8@gmail.com</span>
            </div>
          </div>

          {/* Links */}
          <div>
            <p className="text-xs uppercase tracking-widest text-white/30 mb-4">Nav</p>
            <ul className="flex flex-col gap-2 text-sm text-white/60">
              {["/", "/about", "/projects", "/contact"].map((path) => (
                <li key={path}>
                  <Link to={path} className="hover:text-[#e03120] transition-colors capitalize">
                    {path === "/" ? "Home" : path.replace("/", "")}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <p className="text-xs uppercase tracking-widest text-white/30 mb-4">Connect</p>
            <div className="flex gap-4 text-white/50">
              <a href="https://github.com/fariethedev" target="_blank" rel="noopener noreferrer" className="hover:text-[#e03120] transition-colors text-xl"><FaGithub /></a>
              <a href="https://www.linkedin.com/in/farai-mahaso-275a88267" target="_blank" rel="noopener noreferrer" className="hover:text-[#e03120] transition-colors text-xl"><FaLinkedin /></a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#e03120] transition-colors text-xl"><FaTwitter /></a>
            </div>
          </div>
        </div>

        <div style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }} className="pt-6 flex justify-between items-center flex-wrap gap-4">
          <p className="text-xs text-white/25">© {new Date().getFullYear()} Farai Mahaso. All rights reserved.</p>
          <p className="text-xs text-white/25">Built with React + Framer Motion</p>
        </div>
      </div>
    </footer>
  );
}
