import React, { useState } from "react";
import { FaReact, FaNodeJs, FaFigma, FaFileUpload, FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { SiVite, SiSpringboot, SiExpress, SiMongodb, SiAdobephotoshop, SiAdobeillustrator, SiFirebase, SiTailwindcss, SiRedux, SiJavascript, SiTypescript, SiNextdotjs, SiAdobexd } from "react-icons/si";
import "../header.css";

export default function Projects() {
  const [activeTab, setActiveTab] = useState("development");

  const developmentProjects = [
    {
      title: "BHASO Donation Platform",
      description: "A responsive donation platform with secure payment processing and admin dashboard.",
      features: [
        "Real-time donation tracking",
        "User management system",
        "Payment gateway integration",
        "Responsive design for all devices"
      ],
      technologies: [
        { name: "React", icon: <FaReact className="text-blue-400" /> },
        { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
        { name: "MongoDB", icon: <SiMongodb className="text-green-600" /> }
      ],
      image: "src/assets/bhasowebsite.png",
      demoLink: "https://batanaihivaidsserviceorg.netlify.app/",
      codeLink: "https://github.com/Hustlr27/bhasomain"
    },
    {
      title: "Vebble Marketplace",
      description: "A hybrid marketplace and social platform for digital creators.",
      features: [
        "Product listings with search",
        "User profiles with followers",
        "Rating and review system",
        "Direct messaging"
      ],
      technologies: [
        { name: "React", icon: <FaReact className="text-blue-400" /> },
        { name: "Express", icon: <SiExpress className="text-gray-300" /> },
        { name: "Vite", icon: <SiVite className="text-yellow-400" /> }
      ],
      image: "https://cdn.dribbble.com/userupload/43171143/file/original-46d615eb198defd02608eeb3d047ebc4.png?resize=1024x768&vertical=center",
      demoLink: "#",
      codeLink: "#"
    },
    {
      title: "TaskFlow Productivity App",
      description: "A kanban-style task management application with team collaboration features.",
      features: [
        "Drag-and-drop interface",
        "Real-time updates",
        "Team assignment features",
        "Progress tracking"
      ],
      technologies: [
        { name: "React", icon: <FaReact className="text-blue-400" /> },
        { name: "Firebase", icon: <SiFirebase className="text-yellow-500" /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss className="text-blue-300" /> }
      ],
      image: "https://dribbble.com/shots/25434801-Portex",
      demoLink: "#",
      codeLink: "#"
    },
    {
      title: "RecipeFinder Mobile App",
      description: "A mobile application for discovering and saving cooking recipes.",
      features: [
        "Search by ingredients",
        "Step-by-step instructions",
        "Nutritional information",
        "Offline mode"
      ],
      technologies: [
        { name: "React Native", icon: <FaReact className="text-blue-400" /> },
        { name: "Redux", icon: <SiRedux className="text-purple-500" /> },
        { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> }
      ],
      image: "https://cdn.dribbble.com/userupload/44491334/file/0b26ce96d4e5070578705a6fd7f6c68f.png?resize=1024x768&vertical=center",
      demoLink: "#",
      codeLink: "#"
    },
    {
      title: "EcoTrack Sustainability Dashboard",
      description: "A dashboard for tracking personal environmental impact and sustainability goals.",
      features: [
        "Carbon footprint calculator",
        "Goal setting and tracking",
        "Data visualization",
        "Community challenges"
      ],
      technologies: [
        { name: "Next.js", icon: <SiNextdotjs className="text-black" /> },
        { name: "TypeScript", icon: <SiTypescript className="text-blue-600" /> },
        { name: "MongoDB", icon: <SiMongodb className="text-green-600" /> }
      ],
      image: "https://cdn.dribbble.com/userupload/42699122/file/original-0bdbf42c0555bf236b01f3f315c61ed0.png?resize=1024x768&vertical=center",
      demoLink: "#",
      codeLink: "#"
    }
  ];

  const designProjects = [
    {
      title: "Swerve Clothing Branding",
      description: "Complete brand identity for a contemporary fashion label.",
      deliverables: [
        "Logo design",
        "Business cards",
        "Packaging design",
        "Social media templates"
      ],
      tools: [
        { name: "Illustrator", icon: <SiAdobeillustrator className="text-orange-500" /> },
        { name: "Photoshop", icon: <SiAdobephotoshop className="text-blue-400" /> }
      ],
      image: "https://cdn.dribbble.com/userupload/13718522/file/original-490d007595f3f3a219416b0280c979ba.png?resize=1024x768&vertical=center",
      behanceLink: "#"
    },
    {
      title: "Tech Conference Promo Materials",
      description: "Marketing materials for a major technology conference.",
      deliverables: [
        "Event flyers",
        "Social media graphics",
        "Email newsletter templates",
        "Presentation slides"
      ],
      tools: [
        { name: "Photoshop", icon: <SiAdobephotoshop className="text-blue-400" /> },
        { name: "Figma", icon: <FaFigma className="text-purple-400" /> }
      ],
      image: "https://cdn.dribbble.com/userupload/43282303/file/original-b850b178c90976c5cd970575bc6cd9bd.png?resize=1024x768&vertical=center",
      behanceLink: "#"
    },
    {
      title: "Brew Haven Coffee Packaging",
      description: "Packaging design series for a specialty coffee brand.",
      deliverables: [
        "Bag designs for 5 coffee varieties",
        "Box set packaging",
        "Merchandise (mugs, shirts)",
        "Point-of-sale displays"
      ],
      tools: [
        { name: "Illustrator", icon: <SiAdobeillustrator className="text-orange-500" /> },
        { name: "Photoshop", icon: <SiAdobephotoshop className="text-blue-400" /> }
      ],
      image: "https://cdn.dribbble.com/userupload/37375186/file/original-b73f918f596a78e322e894ca8d047a3c.png?resize=752x564&vertical=center",
      behanceLink: "#"
    },
    {
      title: "Urban Fitness Apparel Campaign",
      description: "Marketing campaign for a streetwear-inspired fitness brand.",
      deliverables: [
        "Lookbook design",
        "Billboard advertisements",
        "Instagram story templates",
        "Influencer collaboration kits"
      ],
      tools: [
        { name: "Photoshop", icon: <SiAdobephotoshop className="text-blue-400" /> },
        { name: "Illustrator", icon: <SiAdobeillustrator className="text-orange-500" /> }
      ],
      image: "https://cdn.dribbble.com/userupload/43830625/file/original-4acfbc2fa95d456aac4d2847bccc4fcf.png?resize=1024x768&vertical=center",
      behanceLink: "#"
    },
    {
      title: "Vintage Record Store Identity",
      description: "Complete branding for a retro vinyl record store.",
      deliverables: [
        "Logo and wordmark",
        "Window displays",
        "Shopping bags",
        "Event posters"
      ],
      tools: [
        { name: "Illustrator", icon: <SiAdobeillustrator className="text-orange-500" /> },
        { name: "Photoshop", icon: <SiAdobephotoshop className="text-blue-400" /> }
      ],
      image: "https://cdn.dribbble.com/userupload/45678912/file/original-1234567890abcdef1234567890abcdef.png?resize=1024x768&vertical=center",
      behanceLink: "#"
    }
  ];

  const uxProjects = [
    {
      title: "Healthcare App Redesign",
      description: "User experience overhaul for a patient portal application.",
      features: [
        "Improved navigation flow",
        "Accessible color scheme",
        "Streamlined appointment booking",
        "Medication tracking"
      ],
      tools: [
        { name: "Figma", icon: <FaFigma className="text-purple-400" /> },
        { name: "User Research", icon: "📊" }
      ],
      image: "https://cdn.dribbble.com/userupload/42651016/file/original-c04b7101ffc454ec4a920dc304db9fce.jpg?resize=1024x878&vertical=center",
      caseStudyLink: "#"
    },
    {
      title: "E-commerce Website UX",
      description: "Complete UX design for an online furniture store.",
      features: [
        "Product discovery flow",
        "Checkout optimization",
        "AR product preview",
        "Personalized recommendations"
      ],
      tools: [
        { name: "Figma", icon: <FaFigma className="text-purple-400" /> },
        { name: "Prototyping", icon: "🖥️" }
      ],
      image: "https://cdn.dribbble.com/userupload/44463355/file/7a5425d4ffbec5a3f00112f422f95fc8.png?resize=1024x768&vertical=center",
      caseStudyLink: "#"
    },
    {
      title: "Banking App Mobile Experience",
      description: "Redesign of mobile banking experience for a financial institution.",
      features: [
        "Simplified transaction flows",
        "Biometric authentication",
        "Spending insights",
        "Bill pay redesign"
      ],
      tools: [
        { name: "Adobe XD", icon: <SiAdobexd className="text-pink-500" /> },
        { name: "User Testing", icon: "👥" }
      ],
      image: "https://cdn.dribbble.com/userupload/26285041/file/original-8aa19ff7df132153e56ec906f860155f.png?resize=1024x768&vertical=center",
      caseStudyLink: "#"
    },
    {
      title: "Travel Planning Platform",
      description: "End-to-end UX design for a collaborative trip planning tool.",
      features: [
        "Itinerary builder",
        "Group collaboration features",
        "Destination research tools",
        "Budget tracking"
      ],
      tools: [
        { name: "Figma", icon: <FaFigma className="text-purple-400" /> },
        { name: "Journey Mapping", icon: "🗺️" }
      ],
      image: "https://cdn.dribbble.com/userupload/17878762/file/original-555dc28af047b7299dd00e3f6e0cbdff.png?resize=812x591&vertical=center",
      caseStudyLink: "#"
    },
    {
      title: "Fitness App Onboarding Flow",
      description: "Redesigned onboarding experience for a workout tracking application.",
      features: [
        "Personalized setup process",
        "Goal setting wizard",
        "Progress visualization",
        "Social features integration"
      ],
      tools: [
        { name: "Figma", icon: <FaFigma className="text-purple-400" /> },
        { name: "A/B Testing", icon: "🔍" }
      ],
      image: "",
      caseStudyLink: "#"
    }
  ];

  return (
    <div className="animated-gradient text-white min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-2 text-center fade-in">My Work</h1>
        <p className="text-xl text-center mb-12 text-gray-300 slide-in-right">
          Explore my development projects, graphic design work, and UX case studies
        </p>

        {/* Project Type Tabs */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex rounded-md shadow-sm" role="group">
            <button
              onClick={() => setActiveTab("development")}
              className={`px-4 py-2 text-sm font-medium rounded-l-lg ${
                activeTab === "development"
                  ? "bg-blue-600 text-white"
                  : "bg-gray-800 text-gray-300 hover:bg-gray-700"
              }`}
            >
              Development Projects
            </button>
            <button
              onClick={() => setActiveTab("design")}
              className={`px-4 py-2 text-sm font-medium ${
                activeTab === "design"
                  ? "bg-purple-600 text-white"
                  : "bg-gray-800 text-gray-300 hover:bg-gray-700"
              }`}
            >
              Graphic Design
            </button>
            <button
              onClick={() => setActiveTab("ux")}
              className={`px-4 py-2 text-sm font-medium rounded-r-lg ${
                activeTab === "ux"
                  ? "bg-pink-600 text-white"
                  : "bg-gray-800 text-gray-300 hover:bg-gray-700"
              }`}
            >
              UX Design
            </button>
          </div>
        </div>

        {/* Development Projects */}
        {activeTab === "development" && (
          <section className="space-y-16">
            {developmentProjects.map((project, index) => (
              <div
                key={index}
                className={`bg-gray-900 bg-opacity-50 rounded-xl overflow-hidden border border-gray-700 ${
                  index % 2 === 0 ? "slide-in-left" : "slide-in-right"
                }`}
              >
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-1/2">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="md:w-1/2 p-6 md:p-8">
                    <h2 className="text-2xl md:text-3xl font-bold mb-4">{project.title}</h2>
                    <p className="mb-4 text-gray-300">{project.description}</p>
                    
                    <div className="mb-6">
                      <h3 className="font-semibold mb-2">Key Features:</h3>
                      <ul className="space-y-2">
                        {project.features.map((feature, i) => (
                          <li key={i} className="flex items-start">
                            <span className="text-green-400 mr-2">•</span>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="mb-6">
                      <h3 className="font-semibold mb-2">Technologies:</h3>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, i) => (
                          <span
                            key={i}
                            className="flex items-center gap-1 px-3 py-1 bg-gray-800 rounded-full text-sm"
                          >
                            {tech.icon}
                            {tech.name}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="flex gap-4">
                      {project.demoLink && (
                        <a
                          href={project.demoLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg"
                        >
                          <FaExternalLinkAlt /> Live Demo
                        </a>
                      )}
                      {project.codeLink && (
                        <a
                          href={project.codeLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded-lg"
                        >
                          <FaGithub /> View Code
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </section>
        )}

        {/* Graphic Design Projects */}
        {activeTab === "design" && (
          <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {designProjects.map((project, index) => (
              <div
                key={index}
                className={`bg-gray-900 bg-opacity-50 rounded-xl overflow-hidden border border-gray-700 ${
                  index % 2 === 0 ? "slide-in-left" : "slide-in-right"
                }`}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h2 className="text-2xl font-bold mb-2">{project.title}</h2>
                  <p className="mb-4 text-gray-300">{project.description}</p>
                  
                  <div className="mb-4">
                    <h3 className="font-semibold mb-2">Deliverables:</h3>
                    <ul className="space-y-1">
                      {project.deliverables.map((item, i) => (
                        <li key={i} className="flex items-start">
                          <span className="text-purple-400 mr-2">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mb-4">
                    <h3 className="font-semibold mb-2">Tools:</h3>
                    <div className="flex flex-wrap gap-2">
                      {project.tools.map((tool, i) => (
                        <span
                          key={i}
                          className="flex items-center gap-1 px-3 py-1 bg-gray-800 rounded-full text-sm"
                        >
                          {tool.icon}
                          {tool.name}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  {project.behanceLink && (
                    <a
                      href={project.behanceLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 bg-purple-600 hover:bg-purple-700 rounded-lg mt-4"
                    >
                      View on Behance
                    </a>
                  )}
                </div>
              </div>
            ))}
          </section>
        )}

        {/* UX Design Projects */}
        {activeTab === "ux" && (
          <section className="grid grid-cols-1 gap-8">
            {uxProjects.map((project, index) => (
              <div
                key={index}
                className={`bg-gray-900 bg-opacity-50 rounded-xl overflow-hidden border border-gray-700 ${
                  index % 2 === 0 ? "slide-in-left" : "slide-in-right"
                }`}
              >
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-1/3">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="md:w-2/3 p-6 md:p-8">
                    <h2 className="text-2xl md:text-3xl font-bold mb-4">{project.title}</h2>
                    <p className="mb-4 text-gray-300">{project.description}</p>
                    
                    <div className="mb-6">
                      <h3 className="font-semibold mb-2">Key Features:</h3>
                      <ul className="space-y-2">
                        {project.features.map((feature, i) => (
                          <li key={i} className="flex items-start">
                            <span className="text-pink-400 mr-2">•</span>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="mb-6">
                      <h3 className="font-semibold mb-2">Process & Tools:</h3>
                      <div className="flex flex-wrap gap-2">
                        {project.tools.map((tool, i) => (
                          <span
                            key={i}
                            className="flex items-center gap-1 px-3 py-1 bg-gray-800 rounded-full text-sm"
                          >
                            {tool.icon}
                            {tool.name}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    {project.caseStudyLink && (
                      <a
                        href={project.caseStudyLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 bg-pink-600 hover:bg-pink-700 rounded-lg"
                      >
                        View Case Study
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </section>
        )}
      </div>
    </div>
  );
}