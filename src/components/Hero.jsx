import {
  BsFacebook,
  BsTwitter,
  BsPinterest,
  BsWhatsapp,
  BsLinkedin,
} from "react-icons/bs";
import HeroPic from "../assets/girl.jpg";

const hero = () => {
  return (
    <section className="pt-24">
      <div className="flex justify-around items-center p-10 space-x-10 lg:flex-row ssm:flex-col ssm:space-y-10 text-white">
        <div className="lg:w-1/2 ssm:w-fit">
          <p className="text-4xl mb-5 text-slate-300">I'm</p>
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
          <button className="bg-white text-indigo-600 px-10 py-2 my-3 rounded-full hover:bg-indigo-800 hover:text-white">
            show more...
          </button>
          <div className="flex mt-5 space-x-4 cursor-pointer">
            <BsFacebook
              size={40}
              className="border-4 hover:border-indigo-800 rounded-full"
            />
            <BsTwitter
              size={40}
              className="border-4 hover:border-indigo-800 rounded-full"
            />
            <BsPinterest
              size={40}
              className="border-4 hover:border-indigo-800 rounded-full"
            />
            <BsWhatsapp
              size={40}
              className="border-4 hover:border-indigo-800 rounded-full"
            />
            <BsLinkedin
              size={40}
              className="border-4 hover:border-indigo-800 rounded-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default hero;
