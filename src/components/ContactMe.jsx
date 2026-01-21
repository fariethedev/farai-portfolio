import React, { useState } from "react";
import { FaReact, FaNodeJs, FaFigma, FaFileUpload } from "react-icons/fa";
import { SiAdobephotoshop, SiAdobeillustrator } from "react-icons/si";
import "../header.css";

export default function ContactMe() {
  const [selectedService, setSelectedService] = useState("");
  const [attachments, setAttachments] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    serviceType: "",
    budget: ""
  });

  const services = [
    {
      id: "web-dev",
      name: "Web Development",
      icon: <FaReact className="text-blue-500" />,
      options: [
        { name: "New Website", price: "$500+" },
        { name: "Website Redesign", price: "$300+" },
        { name: "Maintenance", price: "$50/hour" }
      ]
    },
    {
      id: "graphic-design",
      name: "Graphic Design",
      icon: <FaFigma className="text-purple-500" />,
      options: [
        { name: "Logo Design", price: "$150+" },
        { name: "Brand Identity", price: "$300+" },
        { name: "Social Media Graphics", price: "$30/hour" }
      ]
    },
    {
      id: "full-stack",
      name: "Full Stack Project",
      icon: <FaNodeJs className="text-green-500" />,
      options: [
        { name: "Web Application", price: "$1000+" },
        { name: "E-commerce", price: "$1500+" },
        { name: "Custom Solution", price: "Contact for quote" }
      ]
    }
  ];

  const handleFileChange = (e) => {
    setAttachments([...e.target.files]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const formPayload = new FormData();
      formPayload.append("access_key", "dea587fe-1343-4a7f-96d3-03ea027a7f52"); // Replace with your key
      formPayload.append("name", formData.name);
      formPayload.append("email", formData.email);
      formPayload.append("message", formData.message);
      formPayload.append("serviceType", formData.serviceType);
      formPayload.append("budget", formData.budget);
      
      // Add attachments if any
      attachments.forEach(file => {
        formPayload.append("attachments", file);
      });

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formPayload
      });

      const result = await response.json();
      if (result.success) {
        setSubmitStatus("success");
        setFormData({
          name: "",
          email: "",
          message: "",
          serviceType: "",
          budget: ""
        });
        setAttachments([]);
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      setSubmitStatus("error");
      console.error("Submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="animated-gradient min-h-screen py-12 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
      <div className="w-full max-w-4xl bg-gray-900 rounded-lg p-8 shadow-lg border border-gray-700">
        <h2 className="text-4xl font-bold text-white mb-2">Get a Quote</h2>
        <p className="text-gray-300 mb-6 text-lg">
          Share your project details and I'll provide a customized solution with transparent pricing.
        </p>

        {submitStatus === "success" && (
          <div className="mb-6 p-4 bg-green-900 bg-opacity-50 border border-green-400 text-green-100 rounded-lg">
            Thank you! Your message has been sent successfully. I'll get back to you within 24 hours.
          </div>
        )}

        {submitStatus === "error" && (
          <div className="mb-6 p-4 bg-red-900 bg-opacity-50 border border-red-400 text-red-100 rounded-lg">
            Oops! Something went wrong. Please try again or contact me directly at faraimahaso8@gmail.com
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Service Selection */}
          <div>
            <label className="block text-white mb-2 text-lg">Select Service Type</label>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {services.map((service) => (
                <div
                  key={service.id}
                  onClick={() => setSelectedService(service.id)}
                  className={`p-4 rounded-lg cursor-pointer transition-all ${
                    selectedService === service.id
                      ? "bg-blue-600 border-2 border-blue-400"
                      : "bg-gray-800 hover:bg-gray-700"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className="text-2xl">{service.icon}</div>
                    <span className="font-medium text-white">{service.name}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Service Options with Pricing */}
          {selectedService && (
            <div className="bg-gray-800 p-4 rounded-lg">
              <label className="block text-white mb-2 text-lg">Service Options & Pricing</label>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                {services
                  .find((s) => s.id === selectedService)
                  ?.options.map((option, i) => (
                    <div
                      key={i}
                      className={`p-3 rounded border ${
                        formData.serviceType === option.name
                          ? "border-blue-400 bg-blue-600"
                          : "border-gray-700 hover:bg-gray-700"
                      } cursor-pointer`}
                      onClick={() =>
                        setFormData({ ...formData, serviceType: option.name })
                      }
                    >
                      <p className="text-white font-medium">{option.name}</p>
                      <p className="text-green-400 font-bold">{option.price}</p>
                    </div>
                  ))}
              </div>
            </div>
          )}

          {/* Contact Form */}
          <div className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleInputChange}
              className="w-full p-3 bg-gray-800 border border-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full p-3 bg-gray-800 border border-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <textarea
              name="message"
              placeholder="Describe your project in detail..."
              rows="5"
              value={formData.message}
              onChange={handleInputChange}
              className="w-full p-3 bg-gray-800 border border-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            ></textarea>
          </div>

          {/* File Upload */}
          <div>
            <label className="block text-white mb-2 text-lg">
              Upload Reference Files (Optional)
            </label>
            <div className="flex items-center gap-3 p-3 border-2 border-dashed border-gray-700 rounded-lg bg-gray-800">
              <FaFileUpload className="text-gray-400 text-xl" />
              <input
                type="file"
                onChange={handleFileChange}
                multiple
                className="text-white"
              />
            </div>
            {attachments.length > 0 && (
              <div className="mt-2 text-sm text-gray-300">
                {attachments.length} file(s) selected
              </div>
            )}
          </div>

          {/* Budget */}
          <div>
            <label className="block text-white mb-2 text-lg">Your Budget Range</label>
            <select
              name="budget"
              value={formData.budget}
              onChange={handleInputChange}
              className="w-full p-3 bg-gray-800 border border-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select budget range</option>
              <option value="$500-$1000">$500 - $1000</option>
              <option value="$1000-$3000">$1000 - $3000</option>
              <option value="$3000+">$3000+</option>
              <option value="custom">Custom Budget</option>
            </select>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg font-bold transition duration-200 disabled:opacity-50"
          >
            {isSubmitting ? "Sending..." : "Get Your Free Quote"}
          </button>
        </form>
      </div>
    </div>
  );
}