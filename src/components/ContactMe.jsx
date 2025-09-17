import React, { useState } from "react";
import { FaEnvelope, FaMapMarkedAlt, FaPhone, FaPaperPlane } from "react-icons/fa";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";

const ContactMe = () => {
  // --- Your state and functions are 100% unchanged ---
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus("Sending..."); // Provide immediate feedback

    const serviceID = "service_zor7czt";
    const templateID = "template_kcaqurk";
    const publicKey = "wjSVdqqYRzladYY3x";
    const templateParams = {
      to_name: "Rachel",
      from_name: formData.name,
      message: formData.message,
      reply_to: formData.email,
    };

    emailjs
      .send(serviceID, templateID, templateParams, publicKey)
      .then((response) => {
        setStatus("Email sent successfully!");
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => setStatus(""), 5000); // Clear status after 5 seconds
      })
      .catch((error) => {
        setStatus("Failed to send email. Please try again.");
        console.error("EmailJS Error:", error);
        setTimeout(() => setStatus(""), 5000); // Clear status after 5 seconds
      });
  };
  // --- End of unchanged logic ---

  return (
    <div className="bg-gray-800 text-white py-28" id="contact">
      <div className="container mx-auto px-4 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto bg-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl shadow-2xl overflow-hidden"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Left Side: Contact Information */}
            <div className="p-8 md:p-12 space-y-8 bg-gray-900/30">
              <h3 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500">
                Let's Talk
              </h3>
              <p className="text-gray-300 text-lg">
                I'm open to discussing web development projects or partnership
                opportunities. Fill out the form, and let's create something
                amazing together.
              </p>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-gradient-to-tr from-green-400 to-blue-500 rounded-full shadow-lg">
                    <FaEnvelope className="text-xl" />
                  </div>
                  <a href="mailto:youremail@example.com" className="text-gray-300 hover:text-green-400 transition-colors">
                    youremail@example.com
                  </a>
                </div>
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-gradient-to-tr from-green-400 to-blue-500 rounded-full shadow-lg">
                    <FaPhone className="text-xl" />
                  </div>
                  <span className="text-gray-300">+250-783350275</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-gradient-to-tr from-green-400 to-blue-500 rounded-full shadow-lg">
                    <FaMapMarkedAlt className="text-xl" />
                  </div>
                  <span className="text-gray-300">Kigali, Gasabo, Rwanda</span>
                </div>
              </div>
            </div>

            {/* Right Side: Form */}
            <div className="p-8 md:p-12">
              <form onSubmit={sendEmail} className="space-y-6">
                <div className="relative">
                  <input
                    type="text"
                    name="name"
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="peer w-full p-3 bg-gray-800/50 border border-gray-700 rounded-lg placeholder-transparent focus:outline-none focus:ring-2 focus:ring-green-400 transition-all"
                    placeholder="Your Name"
                  />
                  <label
                    htmlFor="name"
                    className="absolute left-3 -top-2.5 text-gray-400 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3 peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-green-400"
                  >
                    Your Name
                  </label>
                </div>
                <div className="relative">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="peer w-full p-3 bg-gray-800/50 border border-gray-700 rounded-lg placeholder-transparent focus:outline-none focus:ring-2 focus:ring-green-400 transition-all"
                    placeholder="Your Email"
                  />
                  <label
                    htmlFor="email"
                    className="absolute left-3 -top-2.5 text-gray-400 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3 peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-green-400"
                  >
                    Your Email
                  </label>
                </div>
                <div className="relative">
                  <textarea
                    name="message"
                    id="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    className="peer w-full p-3 bg-gray-800/50 border border-gray-700 rounded-lg placeholder-transparent focus:outline-none focus:ring-2 focus:ring-green-400 transition-all"
                    placeholder="Your Message"
                  ></textarea>
                  <label
                    htmlFor="message"
                    className="absolute left-3 -top-2.5 text-gray-400 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3 peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-green-400"
                  >
                    Your Message
                  </label>
                </div>
                <div className="flex items-center justify-between">
                  <button
                    type="submit"
                    className="flex items-center gap-3 px-6 py-3 font-bold text-white rounded-lg shadow-lg bg-gradient-to-r from-green-400 to-blue-500 hover:from-green-500 hover:to-blue-600 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-green-400"
                  >
                    <span>Send Message</span>
                    <FaPaperPlane />
                  </button>
                  {status && (
                    <p className={`text-sm ${status.includes("successfully") ? "text-green-400" : "text-yellow-400"}`}>
                      {status}
                    </p>
                  )}
                </div>
              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ContactMe;