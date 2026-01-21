import React from "react";
import { FaArrowRight } from "react-icons/fa";
import "../header.css"; // Contains your animated gradient

export default function Cta() {
  return (
    <div className="animated-gradient text-white py-12 w-full rounded-none">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 slide-in-left">
            Ready to Transform Your Ideas Into Reality?
          </h2>
          <p className="text-lg md:text-xl mb-8 opacity-90 slide-in-right max-w-2xl mx-auto">
            Let's create something extraordinary together. From concept to launch, I'll be with you every step of the way to deliver exceptional results.
          </p>
          <div className="fade-in">
            <a 
              href="/contact" 
              className="inline-flex items-center justify-center gap-2 bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg font-bold rounded-none transition-all duration-300 hover:scale-105"
            >
              Get Started Today
              <FaArrowRight className="ml-2 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}