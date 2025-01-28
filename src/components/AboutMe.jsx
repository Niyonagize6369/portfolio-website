import React from "react";
import AboutImg from "../assets/AboutImg.jpg";

const AboutMe = () => {
  return (
    <div className="bg-gray-800 text-white py-40" id="About Me">
      <div
        className="container mx-auto px-8 md:px-16
          lg:px-24"
      >
        <h2 className="text-4xl font-bold text-center mb-12">About Me</h2>
        <div className="flex flex-col md:flex items-center md:space-x-12">
          <img
            src={AboutImg}
            alt=""
            className="w-72 h-80 rounded object-cover mb-8 md:mb-0"
          />
          <div className="flex-1">
            <p className="text-lg mb-8">
              I'm front-end developer with a focun on building modern and
              responsive web application. with a strong foundation in front-end
              technology.
            </p>
            <div className="space-y-4">
              <div className="flex items-center">
                <label html for="htmlandcss" className="w-2/12">
                  HTML & CSS
                </label>
                <div className="grow bg-gray-800 rounded-full h-2.5">
                  <div
                    className="bg-gradient-to-r from-green-400 to-blue-500 h-2.5 
                                  rounded-full transform transition-transformduration-300 hover:-scale-105 w-10/12"
                  ></div>
                </div>
              </div>
              <div className="flex items-center">
                <label html for="htmlandcss" className="w-2/12">
                  REACT JS
                </label>
                <div className="grow bg-gray-800 rounded-full h-2.5">
                  <div
                    className="bg-gradient-to-r from-green-400 to-blue-500 h-2.5 
                                  rounded-full transform transition-transformduration-300 hover:-scale-105 w-11/12"
                  ></div>
                </div>
              </div>
              <div className="flex items-center">
                <label html for="htmlandcss" className="w-2/12">
                  NODE JS
                </label>
                <div className="grow bg-gray-800 rounded-full h-2.5">
                  <div
                    className="bg-gradient-to-r from-green-400 to-blue-500 h-2.5 
                                  rounded-full transform transition-transformduration-300 hover:-scale-105 w-9/12"
                  ></div>
                </div>
              </div>
            </div>

            <div className="mt-12 flex justify-between text-center">
              <div>
                <h3
                  className="text-2xl font-bold text-transparent bg-clip-text
                              bg-gradient-to-r from-green-400 to to-blue-500"
                >
                  3+
                </h3>
                <p>years of experience</p>
              </div>

              <div>
                <h3
                  className="text-2xl font-bold text-transparent bg-clip-text
                              bg-gradient-to-r from-green-400 to to-blue-500"
                >
                  50+
                </h3>
                <p>project completed</p>
              </div>
              <div>
                <h3
                  className="text-2xl font-bold text-transparent bg-clip-text
                              bg-gradient-to-r from-green-400 to to-blue-500"
                >
                  10+
                </h3>
                <p>Happy Clients</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
