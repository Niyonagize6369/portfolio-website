import React from "react";
import { FaEnvelope, FaMapMarkedAlt, FaPhone } from "react-icons/fa";

const ContactMe = () => {
  return (
    <div className="bg-gray-800 text-white py-20" id="Contact Me">
      <div
        className="container mx-auto px-8 md:px-16
           lg:px-24"
      >
        <h2 className="text-4xl font-bold text-center mb-12">About Me</h2>
        <div className="flex flex-col md:flex items-center md:space-x-12">
          <div className="flex-1">
            <h3>let's Talk</h3>
            <p>
              I'm open to discussing web development project or partnership
              opportunities.
            </p>
            <div className="mb-4">
              <FaEnvelope
                className="inline-block text-green-400
              mr-2"
              ></FaEnvelope>
              <a
                href="mailto:youremail@example.com"
                className="hover:underline"
              >
                youremail@example.com
              </a>
            </div>
            <div className="mb-4">
              <FaPhone
                className="inline-block text-green-400
              mr-2"
              ></FaPhone>
              <span>+250783350275</span>
            </div>
            <div className="mb-4">
              <FaMapMarkedAlt className="inline-block text-green-400 mr-2"></FaMapMarkedAlt>
              <span>City,Province,Country</span>
            </div>
          </div>
          <div className="flex-1 w-full"></div>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
