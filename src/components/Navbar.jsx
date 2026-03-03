import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaArrowRight, FaBars, FaTimes, FaLinkedin } from "react-icons/fa";
import "../gradient.css"; // Custom CSS for animation

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed top-0 left-0 w-full animated-gradient text-white p-4 z-50">
      <nav className="flex items-center justify-between max-w-7xl mx-auto">
        {/* Logo */}
        <h1 className="font-bold text-2xl">Farai.dev</h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-10 text-lg font-bold items-center">
          <li className="hover:text-blue-300">
            <Link to="/">Home</Link>
          </li>
          <li className="hover:text-blue-300">
            <Link to="/about">About</Link>
          </li>
          <li className="hover:text-blue-300">
            <Link to="/projects">Projects</Link>
          </li>
          <li className="hover:text-blue-300">
            <Link to="/contact">Contact</Link>
          </li>

        </ul>

        {/* Hire Me Button (Desktop) */}
        <Link
          to="/hire"
          className="hidden md:flex items-center space-x-2 hover:text-blue-300 font-semibold"
        >
          <span>Hire Me</span>
          <FaArrowRight />
        </Link>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(true)}
          className="md:hidden text-2xl focus:outline-none"
        >
          <FaBars />
        </button>
      </nav>

      {/* Overlay - closes menu when clicked */}
      <div
        className={`fixed inset-0 bg-black/50 z-40 transition-opacity duration-300 md:hidden ${isOpen ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
        onClick={() => setIsOpen(false)}
      ></div>

      {/* Side Drawer Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-slate-900 border-l border-slate-700 shadow-2xl z-50 transform transition-transform duration-300 ease-in-out md:hidden ${isOpen ? "translate-x-0" : "translate-x-full"
          }`}
      >
        <div className="flex flex-col h-full p-6">
          <div className="flex justify-end mb-8">
            <button
              onClick={() => setIsOpen(false)}
              className="text-2xl text-gray-400 hover:text-white focus:outline-none"
            >
              <FaTimes />
            </button>
          </div>

          <div className="flex flex-col space-y-6 text-lg font-bold text-center">
            <Link to="/" onClick={() => setIsOpen(false)} className="hover:text-blue-300">Home</Link>
            <Link to="/about" onClick={() => setIsOpen(false)} className="hover:text-blue-300">About</Link>
            <Link to="/projects" onClick={() => setIsOpen(false)} className="hover:text-blue-300">Projects</Link>
            <Link to="/contact" onClick={() => setIsOpen(false)} className="hover:text-blue-300">Contact</Link>
            <a
              href="https://www.linkedin.com/in/farai-mahaso-275a88267"
              target="_blank"
              rel="noopener noreferrer"
              className="flex justify-center items-center space-x-2 hover:text-blue-300"
            >
              <FaLinkedin size={20} />
              <span>LinkedIn</span>
            </a>
            <Link
              to="/hire"
              onClick={() => setIsOpen(false)}
              className="flex justify-center items-center space-x-2 hover:text-blue-300 mt-4 border border-blue-400 rounded-md py-2"
            >
              <span>Hire Me</span>
              <FaArrowRight />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
