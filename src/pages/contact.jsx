import React from "react";
import { FaLinkedin, FaGithub, FaTwitter, FaInstagram, FaEnvelope, FaMapMarkerAlt, FaClock, FaPhone } from "react-icons/fa";
import "../header.css";

export default function Contact() {
  const socialLinks = [
    {
      name: "LinkedIn",
      icon: <FaLinkedin className="text-blue-500" />,
      url: "https://linkedin.com/in/yourprofile",
      handle: "@yourusername"
    },
    {
      name: "GitHub",
      icon: <FaGithub className="text-gray-300" />,
      url: "https://github.com/yourusername",
      handle: "@yourusername"
    },
    {
      name: "Twitter",
      icon: <FaTwitter className="text-blue-400" />,
      url: "https://twitter.com/yourhandle",
      handle: "@yourhandle"
    },
    {
      name: "Instagram",
      icon: <FaInstagram className="text-pink-500" />,
      url: "https://instagram.com/yourhandle",
      handle: "@yourhandle"
    },
    {
      name: "Email",
      icon: <FaEnvelope className="text-red-400" />,
      url: "mailto:youremail@example.com",
      handle: "youremail@example.com"
    }
  ];

  const availability = [
    { day: "Monday - Friday", hours: "9:00 AM - 5:00 PM" },
    { day: "Saturday", hours: "10:00 AM - 2:00 PM" },
    { day: "Sunday", hours: "Closed" }
  ];

  return (
    <div className="animated-gradient text-white min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-2 text-center fade-in">Get In Touch</h1>
        <p className="text-xl text-center mb-12 text-gray-300 slide-in-right">
          Let's collaborate on your next project or just say hello
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="bg-gray-900 bg-opacity-50 rounded-xl p-8 border border-gray-700 slide-in-left">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 flex items-center">
              <FaMapMarkerAlt className="mr-3 text-red-400" />
              Location & Contact
            </h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-2">Based in:</h3>
                <p className="text-gray-300">Lublin, Poland</p>
                <p className="text-gray-300">Remote work available worldwide</p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-2 flex items-center">
                  <FaPhone className="mr-2 text-green-400" />
                  Phone
                </h3>
                <p className="text-gray-300">+48 575 151 685</p>
                <p className="text-gray-300 text-sm">(Available on WhatsApp)</p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-2 flex items-center">
                  <FaClock className="mr-2 text-yellow-400" />
                  Availability
                </h3>
                <ul className="space-y-2">
                  {availability.map((item, index) => (
                    <li key={index} className="flex justify-between">
                      <span className="text-gray-300">{item.day}</span>
                      <span className="text-gray-300">{item.hours}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-gray-300 mt-2 text-sm">
                  * Available for urgent projects outside these hours by appointment
                </p>
              </div>
            </div>
          </div>

          {/* Social Media & Contact Form */}
          <div className="space-y-8 slide-in-right">
            {/* Social Media Links */}
            <div className="bg-gray-900 bg-opacity-50 rounded-xl p-8 border border-gray-700">
              <h2 className="text-2xl md:text-3xl font-bold mb-6">Connect With Me</h2>
              <div className="space-y-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center p-4 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors duration-300"
                  >
                    <span className="text-2xl mr-4">{social.icon}</span>
                    <div>
                      <h3 className="font-semibold">{social.name}</h3>
                      <p className="text-gray-300 text-sm">{social.handle}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-gray-900 bg-opacity-50 rounded-xl p-8 border border-gray-700">
              <h2 className="text-2xl md:text-3xl font-bold mb-6">Send a Message</h2>
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block mb-2 text-gray-300">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block mb-2 text-gray-300">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="you@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block mb-2 text-gray-300">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows="4"
                    className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Your message here..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full py-3 px-4 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition-colors duration-300"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Timezone Information */}
        <div className="mt-12 bg-gray-900 bg-opacity-50 rounded-xl p-8 border border-gray-700 text-center max-w-3xl mx-auto fade-in">
          <h2 className="text-xl md:text-2xl font-bold mb-4">Timezone Information</h2>
          <p className="text-gray-300">
            I'm currently operating in <span className="font-semibold">Central African Time (CAT, UTC+2)</span>.
            All availability times listed are in my local timezone.
          </p>
          <p className="text-gray-300 mt-2">
            Don't hesitate to reach out even if you're in a different timezone - I'm happy to accommodate!
          </p>
        </div>
      </div>
    </div>
  );
}