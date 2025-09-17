import React from "react";
import AboutImg from "../assets/AboutImg.jpg";
import { motion } from "framer-motion";

// Data for skills - easier to manage and map
const skills = [
  { name: "HTML & CSS", width: "w-10/12", percentage: "85%" },
  { name: "React, Next.js, TailwindCSS", width: "w-11/12", percentage: "90%" },
  { name: "Node.js, JavaScript", width: "w-9/12", percentage: "75%" },
];

// Data for stats - also cleaner to manage
const stats = [
  { value: "3+", label: "Years of Experience" },
  { value: "10+", label: "Projects Completed" },
  { value: "10+", label: "Happy Clients" },
];

const AboutMe = () => {
  return (
    <div className="bg-gray-800 text-white py-32" id="About Me">
      <div className="container mx-auto px-4 sm:px-8 lg:px-16">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-center mb-4">About Me</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-green-400 to-blue-500 mx-auto rounded-full mb-16"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Side: Image */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative w-full max-w-sm mx-auto"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-blue-500 rounded-xl transform -rotate-6 transition-transform duration-300 hover:rotate-0"></div>
            <img
              src={AboutImg}
              alt="A portrait of the developer"
              className="relative w-full h-auto rounded-xl object-cover shadow-2xl"
            />
          </motion.div>

          {/* Right Side: Content */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-8"
          >
            <p className="text-lg text-gray-300 leading-relaxed">
              I'm a front-end developer with a focus on building modern and
              responsive web applications. With a strong foundation in front-end
              technology, I am dedicated to creating seamless user experiences.
            </p>

            {/* Skills Section */}
            <div className="space-y-6">
              {skills.map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between items-center mb-1">
                    <span className="font-medium text-gray-200">{skill.name}</span>
                    <span className="text-sm font-medium text-green-400">{skill.percentage}</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2.5">
                    <motion.div
                      className="bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: skill.width }}
                      viewport={{ once: true, amount: 0.8 }}
                      transition={{ duration: 1.5, ease: [0.25, 1, 0.5, 1] }}
                    ></motion.div>
                  </div>
                </div>
              ))}
            </div>

            {/* Stats Section */}
            <div className="grid grid-cols-3 gap-4 pt-8 border-t border-gray-700">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <h3 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500">
                    {stat.value}
                  </h3>
                  <p className="text-sm text-gray-400 uppercase tracking-wider">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;