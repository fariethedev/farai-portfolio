import React from "react";
import "../header.css";
import { FaReact, FaJava, FaNodeJs, FaFigma, FaDatabase } from "react-icons/fa";
import { SiVite, SiSpringboot, SiExpress, SiMongodb, SiMysql, SiAdobephotoshop, SiAdobeillustrator, SiAdobeindesign } from "react-icons/si";

export default function AboutMe() {
  return (
    <div className="animated-gradient text-white min-h-screen flex flex-col items-center px-6 py-20 w-full overflow-x-hidden">
      {/* Header */}
      <div className="w-full max-w-4xl text-center md:text-left fade-in-right mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">About</h1>
       
        <p className="text-lg md:text-xl leading-relaxed">
          Creative and detail-oriented Web Developer and Graphic 
          Designer with experience building responsive web applications 
          using React, Vite, Java, Spring Boot, Express.js, and SQL.
           Skilled in integrating backend systems and payment solutions 
           to support organizational goals. Adept at crafting user-friendly
            interfaces and engaging visuals through Figma and Adobe Creative Suite,
             with a strong background in social media management and collaboration 
             with advertising agencies. Passionate about delivering functional, visually 
             compelling solutions that enhance user experience and drive measurable results.
        </p>
      </div>

      {/* Technical Skills */}
      <div className="w-full max-w-4xl fade-in-right mb-16">
        <h3 className="text-3xl font-bold mb-8 text-center md:text-left">Technical Skills</h3>
        
        {/* Frontend Stack */}
        <div className="mb-10">
          <h4 className="text-xl font-semibold mb-4 flex items-center">
            <FaReact className="mr-2 text-blue-400" /> Frontend Development
          </h4>
          <div className="flex flex-wrap gap-4">
            <TechIcon icon={<FaReact className="text-2xl text-blue-400" />} name="React" />
            <TechIcon icon={<SiVite className="text-2xl text-yellow-400" />} name="Vite" />
          </div>
        </div>

        {/* Backend Stack */}
        <div className="mb-10">
          <h4 className="text-xl font-semibold mb-4 flex items-center">
            <FaNodeJs className="mr-2 text-green-500" /> Backend Development
          </h4>
          <div className="flex flex-wrap gap-4">
            <TechIcon icon={<FaJava className="text-2xl text-red-500" />} name="Java" />
            <TechIcon icon={<SiSpringboot className="text-2xl text-green-400" />} name="Spring Boot" />
            <TechIcon icon={<SiExpress className="text-2xl text-gray-300" />} name="Express.js" />
          </div>
        </div>

        {/* Database Stack */}
        <div className="mb-10">
          <h4 className="text-xl font-semibold mb-4 flex items-center">
            <FaDatabase className="mr-2 text-blue-300" /> Databases
          </h4>
          <div className="flex flex-wrap gap-4">
            <TechIcon icon={<SiMongodb className="text-2xl text-green-500" />} name="MongoDB" />
            <TechIcon icon={<SiMysql className="text-2xl text-blue-500" />} name="MySQL" />
          </div>
        </div>

        {/* Design Stack */}
        <div className="mb-10">
          <h4 className="text-xl font-semibold mb-4 flex items-center">
            <FaFigma className="mr-2 text-purple-400" /> Design Tools
          </h4>
          <div className="flex flex-wrap gap-4">
            <TechIcon icon={<FaFigma className="text-2xl text-purple-400" />} name="Figma" />
            <TechIcon icon={<SiAdobephotoshop className="text-2xl text-blue-400" />} name="Photoshop" />
            <TechIcon icon={<SiAdobeillustrator className="text-2xl text-orange-500" />} name="Illustrator" />
            <TechIcon icon={<SiAdobeindesign className="text-2xl text-pink-500" />} name="InDesign" />
          </div>
        </div>
      </div>

      {/* Professional Experience */}
      <div className="w-full max-w-4xl fade-in-right mb-16">
        <h3 className="text-3xl font-bold mb-6 text-center md:text-left">Professional Experience</h3>
        
        <div className="relative border-l-2 border-blue-300 ml-4">
          
          {/* Freelance Graphic Designer */}
          <div className="mb-8 ml-6 relative">
            <h4 className="text-xl font-semibold">Freelance Graphic Designer</h4>
            <span className="text-sm text-gray-300">Jan 2023 - Present</span>
            <p className="mt-2 text-gray-200">
              Led creation of impactful visual campaigns, collaborating with diverse clients and advertising agencies to deliver tailored branding solutions.
              <br/>
              Streamlined social media content strategies, increasing engagement rates and audience reach.
              <br/>
              Utilized Adobe Creative Suite to produce high-quality graphics, resulting in measurable boost in brand visibility and marketing effectiveness.
            </p>
          </div>

          {/* Internship at BHASO */}
          <div className="mb-8 ml-6 relative">
            <h4 className="text-xl font-semibold">Internship at BHASO (Donation Platform)</h4>
            <span className="text-sm text-gray-300">June 2025 - August 2025</span>
            <p className="mt-2 text-gray-200">
              Designed and developed a responsive donation platform using React and Vite, integrating backend services with Express.js to enable secure payment processing.
              <br/>
              Optimized frontend and backend workflows, enhancing load times and overall user experience.
              <br/>
              Collaborated on testing and validation, ensuring compliance with payment security standards and seamless integration across devices.
            </p>
          </div>
        </div>
      </div>

      {/* Education */}
      <div className="w-full max-w-4xl fade-in-right mb-16">
        <h3 className="text-3xl font-bold mb-6 text-center md:text-left">Education</h3>
        
        <div className="relative border-l-2 border-blue-300 ml-4 pl-6">
          <div className="mb-6 flex items-start gap-4">
            {/* University Logo - Replace src with your actual image path */}
            <div className="mt-1">
              <img 
                src="https://dl.wsei.pl/pluginfile.php/1/theme_adaptable/logo/1754997872/Logo-WSEI-Akademia%20%281%29.png" 
                alt="WSEI University Logo"
                className="h-23 w-45 object-contain filter brightness-0 invert"
              />
            </div>
            
            <div>
              <h4 className="text-xl font-semibold">Bachelor of Computer Science</h4>
              <p className="text-lg text-gray-200">
                WSEI University Lublin
                <span className="block text-sm text-gray-300 mt-1">March 2023 - May 2026</span>
              </p>
            </div>
          </div>
        </div>

        {/* Languages */}
        <h3 className="text-3xl font-bold mb-6 text-center md:text-left">Languages</h3>
        <div className="flex flex-wrap gap-4 ml-4">
          <div className="px-4 py-2 bg-blue-600 bg-opacity-20 rounded-lg">
            <p className="text-gray-200">English <span className="text-sm text-gray-300">(Fluent)</span></p>
          </div>
          <div className="px-4 py-2 bg-blue-600 bg-opacity-20 rounded-lg">
            <p className="text-gray-200">Polish <span className="text-sm text-gray-300">(Basic)</span></p>
          </div>
          <div className="px-4 py-2 bg-blue-600 bg-opacity-20 rounded-lg">
            <p className="text-gray-200">German <span className="text-sm text-gray-300">(Basic)</span></p>
          </div>
        </div>
      </div>
    </div>
  );
}

// TechIcon component
function TechIcon({ icon, name }) {
  return (
    <div className="flex flex-col items-center p-4 hover:bg-blue-900 hover:bg-opacity-20 rounded-lg transition-all">
      <div className="text-3xl mb-2">{icon}</div>
      <span className="text-sm">{name}</span>
    </div>
  );
}