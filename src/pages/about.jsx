import React from "react";
import { FaReact, FaNodeJs, FaJava, FaFigma, FaDatabase, FaGraduationCap, FaBriefcase } from "react-icons/fa";
import { SiVite, SiSpringboot, SiExpress, SiMongodb, SiMysql, SiAdobephotoshop, SiAdobeillustrator, SiAdobeindesign } from "react-icons/si";
import "../header.css"; // Contains your animated gradient

export default function About() {
  return (
    <div className="animated-gradient text-white min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 fade-in">Farai Mahaso</h1>
          <h2 className="text-2xl md:text-3xl text-blue-300 mb-4 slide-in-left">Full Stack Developer & Graphic Designer</h2>
          <p className="text-lg md:text-xl max-w-3xl mx-auto opacity-90 slide-in-right">
            I create digital experiences that combine technical excellence with visual appeal. 
            With expertise in both development and design, I bridge the gap between functionality and aesthetics.
          </p>
        </section>

        {/* Skills Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center md:text-left fade-in">Technical Skills</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Frontend Skills */}
            <div className="bg-gray-900 bg-opacity-50 p-6 rounded-xl slide-in-left">
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <FaReact className="mr-2 text-blue-400" /> Frontend Development
              </h3>
              <div className="flex flex-wrap gap-4">
                <SkillIcon icon={<FaReact className="text-2xl text-blue-400" />} name="React" />
                <SkillIcon icon={<SiVite className="text-2xl text-yellow-400" />} name="Vite" />
              </div>
            </div>

            {/* Backend Skills */}
            <div className="bg-gray-900 bg-opacity-50 p-6 rounded-xl slide-in-right">
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <FaNodeJs className="mr-2 text-green-500" /> Backend Development
              </h3>
              <div className="flex flex-wrap gap-4">
                <SkillIcon icon={<FaJava className="text-2xl text-red-500" />} name="Java" />
                <SkillIcon icon={<SiSpringboot className="text-2xl text-green-400" />} name="Spring Boot" />
                <SkillIcon icon={<SiExpress className="text-2xl text-gray-300" />} name="Express.js" />
              </div>
            </div>

            {/* Database Skills */}
            <div className="bg-gray-900 bg-opacity-50 p-6 rounded-xl slide-in-left">
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <FaDatabase className="mr-2 text-blue-300" /> Databases
              </h3>
              <div className="flex flex-wrap gap-4">
                <SkillIcon icon={<SiMongodb className="text-2xl text-green-500" />} name="MongoDB" />
                <SkillIcon icon={<SiMysql className="text-2xl text-blue-500" />} name="MySQL" />
              </div>
            </div>

            {/* Design Skills */}
            <div className="bg-gray-900 bg-opacity-50 p-6 rounded-xl slide-in-right">
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <FaFigma className="mr-2 text-purple-400" /> Design Tools
              </h3>
              <div className="flex flex-wrap gap-4">
                <SkillIcon icon={<FaFigma className="text-2xl text-purple-400" />} name="Figma" />
                <SkillIcon icon={<SiAdobephotoshop className="text-2xl text-blue-400" />} name="Photoshop" />
                <SkillIcon icon={<SiAdobeillustrator className="text-2xl text-orange-500" />} name="Illustrator" />
                <SkillIcon icon={<SiAdobeindesign className="text-2xl text-pink-500" />} name="InDesign" />
              </div>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center md:text-left fade-in">Professional Journey</h2>
          
          <div className="relative border-l-2 border-blue-400 ml-4 pl-8 space-y-10">
            {/* Freelance Experience */}
            <div className="relative">
              <div className="absolute -left-11 top-1 flex items-center justify-center w-8 h-8 rounded-full bg-blue-600">
                <FaBriefcase className="text-white" />
              </div>
              <h3 className="text-xl font-semibold">Freelance Graphic Designer</h3>
              <span className="text-sm text-gray-300">Jan 2023 - Present</span>
              <p className="mt-2 text-gray-200">
                Created visual campaigns for diverse clients, developed brand identities, 
                and produced marketing materials that increased client engagement by 40% on average.
              </p>
            </div>

            {/* BHASO Internship */}
            <div className="relative">
              <div className="absolute -left-11 top-1 flex items-center justify-center w-8 h-8 rounded-full bg-blue-600">
                <FaBriefcase className="text-white" />
              </div>
              <h3 className="text-xl font-semibold">Web Development Intern - BHASO</h3>
              <span className="text-sm text-gray-300">June 2025 - August 2025</span>
              <p className="mt-2 text-gray-200">
                Developed a responsive donation platform with secure payment integration,
                improving donation conversion rates by 25% and reducing page load times by 40%.
              </p>
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section>
          <h2 className="text-3xl font-bold mb-8 text-center md:text-left fade-in">Education</h2>
          
          <div className="relative border-l-2 border-blue-400 ml-4 pl-8">
            <div className="relative pb-10">
              <div className="absolute -left-11 top-1 flex items-center justify-center w-8 h-8 rounded-full bg-blue-600">
                <FaGraduationCap className="text-white" />
              </div>
              <h3 className="text-xl font-semibold">Bachelor of Computer Science</h3>
              <p className="text-gray-200">WSEI University Lublin</p>
              <span className="text-sm text-gray-300">March 2023 - May 2026</span>
              <p className="mt-2 text-gray-200">
                Specializing in software engineering with coursework in algorithms, 
                database systems, and human-computer interaction.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

// Skill Icon Component
function SkillIcon({ icon, name }) {
  return (
    <div className="flex flex-col items-center p-4 hover:bg-blue-900 hover:bg-opacity-20 rounded-lg transition-all">
      <div className="text-3xl mb-2">{icon}</div>
      <span className="text-sm">{name}</span>
    </div>
  );
}