import { BsTwitter, BsWhatsapp, BsLinkedin, BsGithub } from "react-icons/bs";
import HeroPic from "../assets/girl.jpg";

const hero = () => {
  return (
    <section className="pt-24">
      <div
        className="flex justify-around items-center p-10 space-x-10 
      lg:flex-row ssm:flex-col 
      ssm:space-y-10 text-white"
      >
        <div className="lg:w-1/2 ssm:w-fit">
          <p className="text-4xl mb-5 text-white">I'm</p>
          <h1 className="text-6xl">RACHEL NIYONAGIZE</h1>
          <hr />
          <p className="mt-10  text-slate-300 font-sans">
            Me as a web developer, I design and build websites and web
            applications, focusing on front-end aspect. my role involves writing
            clean efficient code, ensuring responsive design, and optimizing
            performance for a seamless user experience. My work closely with
            designers and other developers to implement features and
            functionality. Keeping up with the latest web technologies and
            trends is essential to deliver modern, user-friendly solutions.
          </p>
        </div>
        <div className="w-1/4 items-center ssm:w-fit">
          <img
            src={HeroPic}
            alt="hero image"
            width={100}
            height={100}
            className="rounded-full w-full border-8 border-white"
          />
        </div>
        <div className="w-1/ ssn:w-fit">
          <p className="text-4xl mb-4">About me</p>
          <p className="text-slate-300">
            let's build quality in programing and design with our services
          </p>
          <button className="relative my-4">
            <a
              href="#About Me"
              className="bg-gradient-to-r from-green-400 to-blue-500
              text-white hidden md:inline transform transition-transform duration-300
              hover:scale-105 px-8 py-2 rounded-full"
            >
              Show more...
            </a>
          </button>

          <div className="flex mt-5 space-x-4 cursor-pointer">
            <a href="https://github.com/Niyonagize6369" target="_blank">
              <BsGithub
                size={40}
                className="border-4 hover:border-indigo-800 rounded-full"
              />
            </a>
            <a href="https://x.com/NiyonagizeR" target="_blank">
              <BsTwitter
                size={40}
                className="border-4 hover:border-indigo-800 rounded-full"
              />
            </a>
            <a
              href="https://wa.me/+250783350275"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BsWhatsapp
                size={40}
                className="border-4 hover:border-indigo-800 rounded-full"
              />
            </a>
            <a
              href="https://www.linkedin.com/in/rachel-niyonagize-44b70031b/"
              target="_blank"
            >
              <BsLinkedin
                size={40}
                className="border-4 hover:border-indigo-800 rounded-full"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default hero;
