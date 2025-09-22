import React from "react";
import { BsTwitter, BsWhatsapp, BsLinkedin, BsGithub } from "react-icons/bs";
import { FaArrowRight } from "react-icons/fa";
import HeroPic from "../assets/girl.jpg";
import { motion } from "framer-motion";

// Data for social links - makes the code cleaner and easier to manage
const socialLinks = [
  { href: "https://github.com/Niyonagize6369", icon: <BsGithub size={24} /> },
  { href: "https://x.com/NiyonagizeR", icon: <BsTwitter size={24} /> },
  { href: "https://wa.me/+250783350275", icon: <BsWhatsapp size={24} /> },
  { href: "https://www.linkedin.com/in/rachel-niyonagize-44b70031b/", icon: <BsLinkedin size={24} /> },
];

// Animation variants for Framer Motion
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.3 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 20, transition: { duration: 0.6, ease: "easeOut" } },
};

const Hero = () => {
  return (
    <section className="bg-gray-800 text-white min-h-screen flex items-center pt-24 pb-16">
      <div className="container mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side: Text Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-center lg:text-left"
          >
            <motion.p variants={itemVariants} className="text-lg font-medium text-white tracking-wider">
              HELLO, I'M
            </motion.p>
            <motion.h1
              variants={itemVariants}
              className="text-5xl lg:text-7xl font-extrabold my-3 bg-clip-text text-white bg-gradient-to-r from-green-300 via-blue-400 to-purple-500"
            >
              RACHEL NIYONAGIZE
            </motion.h1>
            <motion.h2 variants={itemVariants} className="text-2xl font-semibold text-gray-200">
              Front-End Developer
            </motion.h2>
            <motion.p variants={itemVariants} className="mt-6 text-gray-300 leading-relaxed max-w-xl mx-auto lg:mx-0">
              I design and build modern, responsive web applications with a focus on clean code and seamless user experiences. I work closely with designers to bring ideas to life, delivering user-friendly solutions with the latest web technologies.
            </motion.p>

            {/* Action Buttons & Socials */}
            <motion.div variants={itemVariants} className="mt-10 flex flex-col sm:flex-row items-center gap-6 justify-center lg:justify-start">
              <a
                href="#About Me"
                className="flex items-center gap-3 px-8 py-3 font-bold text-white rounded-full shadow-lg bg-gradient-to-r from-green-400 to-blue-500 hover:from-green-500 hover:to-blue-600 transition-all duration-300 transform hover:-translate-y-1 focus:outline-none"
              >
                <span>Learn More</span>
                <FaArrowRight />
              </a>
              <div className="flex space-x-4">
                {socialLinks.map((link, index) => (
                  <motion.a
                    key={index}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-gray-700/50 rounded-full text-gray-300 hover:text-white hover:bg-green-500 transition-all duration-300"
                    whileHover={{ scale: 1.1, y: -4 }}
                  >
                    {link.icon}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right Side: Image with Animated Glow */}
          <motion.div
            className="relative flex justify-center items-center"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5, ease: [0, 0.71, 0.2, 1.01] }}
          >
            <div className="relative w-80 h-80 lg:w-96 lg:h-96">
              {/* Animated Gradient Glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-purple-600 rounded-full blur-2xl animate-pulse"></div>
              {/* Image */}
              <img
                src={HeroPic}
                alt="Rachel Niyonagize"
                className="relative z-10 w-full h-full rounded-full object-cover border-8 border-gray-800"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;