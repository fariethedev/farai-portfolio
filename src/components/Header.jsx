import React from "react";
import { FaLinkedin, FaFacebook, FaInstagram } from "react-icons/fa";
import "../header.css"; // Import animation styles

export default function Header() {
  return (
    <div className="animated-gradient text-white h-screen w-screen flex items-center">
      <div className="flex flex-col md:flex-row items-center justify-center gap-10 px-6 w-full h-full">
        
        {/* Left - Image (slides in from left) */}
        <div className="flex-shrink-0 slide-in-left">
          <img
            src="src/assets/mypicture.jpg" // replace with your image path
            alt="Farai Mahaso"
            className="w-56 h-56 md:w-64 md:h-64 rounded-full object-cover border-4 border-white shadow-lg"
          />
        </div>

        {/* Right - Content (slides in from right) */}
        <div className="text-center md:text-left max-w-xl slide-in-right">
          <h1 className="text-2xl md:text-6xl font-bold mb-4">
            Software Developer & Graphic Designer
          </h1>
          <p className="text-lg md:text-xl mb-8">
            My name is <span className="font-semibold">Farai Mahaso</span>, and I am a final-year Computer Science student at WSEI Lublin. I specialize in graphic design and web development, with proficiency in Java, SQL, and Python, as well as strong experience with Figma and Adobe Creative Suite.
          </p>

          {/* Social Media Icons */}
          <div className="flex justify-center md:justify-start space-x-6">
            <a
              href="https://www.linkedin.com/in/farai-mahaso-275a88267"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-300"
            >
              <FaLinkedin size={30} />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-blue-400"
            >
              <FaFacebook size={30} />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-blue-400"
            >
              <FaInstagram size={30} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
