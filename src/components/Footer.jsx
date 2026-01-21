import React from "react";
import { FaGithub, FaLinkedin, FaTwitter, FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { HiStatusOnline } from "react-icons/hi";
import { Link } from "react-router-dom";
import "../header.css"; // Make sure this contains your animated gradient

export default function Footer() {
  return (
    <footer className="mt-auto animated-gradient text-white py-12 px-6 border-t border-gray-800 rounded-none">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Personal Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <h2 className="font-bold text-2xl">Farai Mahaso</h2>
              <div className="flex items-center text-green-400">
                <HiStatusOnline className="text-xl animate-pulse" />
                <span className="ml-1 text-sm">Available for work</span>
              </div>
            </div>
            
            <div className="space-y-2 text-gray-300">
              <div className="flex items-center gap-2">
                <FaMapMarkerAlt />
                <span>Lublin, Poland</span>
              </div>
              <div className="flex items-center gap-2">
                <FaPhone />
                <span>+48 575 151 685</span>
              </div>
              <div className="flex items-center gap-2">
                <FaEnvelope />
                <span>faraimahaso8@gmail.com</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:text-center">
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:text-green-400 transition">Home</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-green-400 transition">About</Link>
              </li>
              <li>
                <Link to="/projects" className="hover:text-green-400 transition">Projects</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-green-400 transition">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div className="md:text-right">
            <h3 className="font-semibold text-lg mb-4">Connect</h3>
            <div className="flex md:justify-end gap-4">
              <a href="https://github.com/Hustlr27" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-green-400 transition">
                <FaGithub />
              </a>
              <a href="https://linkedin.com/in/farai-mahaso-275a88267" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-green-400 transition">
                <FaLinkedin />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-green-400 transition">
                <FaTwitter />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-6 border-t border-gray-700 text-center text-gray-300 text-sm">
          <p>© {new Date().getFullYear()} Farai Mahaso. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}