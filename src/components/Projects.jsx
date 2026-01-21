import React from "react";
import { FaGithub, FaExternalLinkAlt, FaClock, FaTools, FaReact, FaNodeJs, FaDatabase, FaPalette } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss, SiFirebase, SiStripe, SiPostgresql, SiGraphql } from "react-icons/si";
import { DiMongodb } from "react-icons/di";
import { Link } from "react-router-dom";
import "../header.css";

export default function Projects() {
  const projects = [
    {
      title: "BHASO Website",
      description: "A comprehensive platform for Batanai HIV/AIDS Service Organization featuring:",
      details: [
        "✓ Resource library with categorized articles and documents",
        "✓ Event management system with registration",
        "✓ Donation processing with secure payment gateway",
        "✓ Admin dashboard for content management"
      ],
      technologies: [
        { name: "React", icon: <FaReact className="text-blue-400" /> },
        { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
        { name: "MongoDB", icon: <DiMongodb className="text-green-600" /> }
      ],
      status: "live",
      codeLink: "https://github.com/Hustlr27/bhasomain",
      demoLink: "https://batanaihivaidsserviceorg.netlify.app/",
      image: "src/assets/bhasowebsite.png"
    },
    {
      title: "Vebble",
      description: "A hybrid marketplace and social platform featuring:",
      details: [
        "✓ User profiles with follower/following system",
        "✓ Product listings with categories and search",
        "✓ Social feed with posts, likes, and comments",
        "✓ Direct messaging between users",
        "✓ Rating and review system for sellers",
        "✓ Payment integration for transactions"
      ],
      technologies: [
        { name: "React", icon: <FaReact className="text-blue-400" /> },
        { name: "Firebase", icon: <SiFirebase className="text-yellow-400" /> }, 
        { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
        { name: "MongoDB", icon: <DiMongodb className="text-green-600" /> },
        { name: "Stripe", icon: <SiStripe className="text-purple-500" /> }
      ],
      status: "live",
      codeLink: "#",
      demoLink: "#",
      image: "https://cdn.dribbble.com/userupload/6735262/file/original-c66f947e624727398705ba7ff4dd52d9.png?resize=1024x768&vertical=center"
    },
    {
      title: "Swerve Clothing Store",
      description: "Modern e-commerce solution featuring:",
      details: [
        "✓ Product catalog with filters and search",
        "✓ Shopping cart with persistent storage",
        "✓ Secure checkout with Stripe integration",
        "✓ Order history and tracking"
      ],
      technologies: [
        { name: "Next.js", icon: <SiNextdotjs className="text-black dark:text-white" /> },
        { name: "Stripe", icon: <SiStripe className="text-purple-500" /> },
        { name: "PostgreSQL", icon: <SiPostgresql className="text-blue-600" /> }
      ],
      status: "coming-soon",
      image: "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
    },
    {
      title: "Task Manager Pro",
      description: "Collaborative productivity tool including:",
      details: [
        "✓ Team workspaces with role-based access",
        "✓ Drag-and-drop task boards",
        "✓ Time tracking and reporting",
        "✓ Calendar integration"
      ],
      technologies: [
        { name: "React", icon: <FaReact className="text-blue-400" /> },
        { name: "GraphQL", icon: <SiGraphql className="text-pink-600" /> },
       
      ],
      status: "under-development",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1415&q=80"
    },
    {
      title: "FitTrack",
      description: "Comprehensive fitness application offering:",
      details: [
        "✓ Personalized workout plans",
        "✓ Exercise demonstration videos",
        "✓ Nutrition tracking",
        "✓ Progress analytics"
      ],
      technologies: [
        { name: "React Native", icon: <FaReact className="text-blue-400" /> },
        { name: "Firebase", icon: <SiFirebase className="text-yellow-400" /> }
      ],
      status: "under-development",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
    }
  ];

  return (
    <div className="animated-gradient min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-4">
          <h1 className="text-4xl font-bold text-white fade-in text-center md:text-left">
            My Development Projects
          </h1>
          <Link 
            to="/projects" 
            className="flex items-center gap-2 px-4 py-2 bg-purple-600 hover:bg-purple-700 rounded-lg text-white transition-colors whitespace-nowrap"
          >
            <FaPalette className="text-lg" />
            View Graphic Design Projects
          </Link>
        </div>
        
        <div className="space-y-20">
          {projects.map((project, index) => (
            <div 
              key={index}
              className={`flex flex-col md:flex-row items-center gap-8
                ${index % 2 === 0 ? 'slide-in-left' : 'slide-in-right'}`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="w-full md:w-1/2 relative">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-auto max-h-96 object-cover rounded-lg border border-gray-700"
                />
                {project.status !== "live" && (
                  <div className="absolute top-4 right-4 bg-black bg-opacity-70 text-white px-3 py-1 rounded-full text-sm flex items-center">
                    {project.status === "coming-soon" ? (
                      <>
                        <FaClock className="mr-1" /> Coming Soon
                      </>
                    ) : (
                      <>
                        <FaTools className="mr-1" /> Under Development
                      </>
                    )}
                  </div>
                )}
              </div>
              
              <div className="w-full md:w-1/2 text-white">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">{project.title}</h2>
                <p className="mb-3 opacity-90">{project.description}</p>
                
                <ul className="mb-4 space-y-2">
                  {project.details.map((detail, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-green-400 mr-2">•</span>
                      <span className="text-gray-200">{detail}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, i) => (
                    <span 
                      key={i} 
                      className="px-3 py-1 bg-blue-600 bg-opacity-20 rounded-full text-sm flex items-center gap-1"
                    >
                      {tech.icon}
                      {tech.name}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-4 flex-wrap">
                  <a 
                    href={project.codeLink || "#"} 
                    className={`px-4 py-2 rounded-lg flex items-center gap-2
                      ${project.codeLink ? "bg-gray-800 hover:bg-gray-700" : "bg-gray-700 cursor-not-allowed"}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaGithub /> Code
                  </a>
                  
                  {project.status === "live" ? (
                    <a 
                      href={project.demoLink} 
                      className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg flex items-center gap-2"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaExternalLinkAlt /> Live Demo
                    </a>
                  ) : (
                    <button 
                      className="px-4 py-2 bg-gray-700 rounded-lg flex items-center gap-2 cursor-not-allowed"
                      disabled
                    >
                      <FaExternalLinkAlt /> {project.status === "coming-soon" ? "Coming Soon" : "In Development"}
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}