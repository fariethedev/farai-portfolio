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
            <a href="/">Home</a>
          </li>
          <li className="hover:text-blue-300">
            <a href="/about">About</a>
          </li>
          <li className="hover:text-blue-300">
            <a href="/projects">Projects</a>
          </li>
          <li className="hover:text-blue-300">
            <a href="/contact">Contact</a>
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
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-2xl focus:outline-none"
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </nav>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden mt-4 space-y-4 text-center text-lg font-bold">
          <a href="/" className="block hover:text-blue-300">Home</a>
          <a href="/about" className="block hover:text-blue-300">About</a>
          <a href="/projects" className="block hover:text-blue-300">Projects</a>
          <a href="/contact" className="block hover:text-blue-300">Contact</a>
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
            className="flex justify-center items-center space-x-2 hover:text-blue-300"
          >
            <span>Hire Me</span>
            <FaArrowRight />
          </Link>
        </div>
      )}
    </div>
  );
}
