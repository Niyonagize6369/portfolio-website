import project1 from "../assets/project1.jpg";
import project2 from "../assets/project2.jpg";
import project3 from "../assets/project3.jpg";
import project4 from "../assets/project4.jpg";

const project = () => {
  return (
    <div id="project" className="pt-12">
      <div className="max-w-full m-20 bg-gray-500">
        <div className="grid m-10 justify-items-center">
          <h1 className="py-2 mb-12 text-4xl font-bold text-center text-white">
            Project
          </h1>
        </div>

        <div>
          <div className="gap-4 p-0.5">
            <div className="max-w-md mx-auto overflow-hidden bg-white shadow-md rounded-xl md:max-w-2xl hover:animate-pulse"></div>
            <div className="grid gap-5 md:grid-cols-2">
              <div className="flex flex-row-reverse items-center shadow-md bg-blue-50 rounded-2xl">
                <div className="p-5 md:shrink-0">
                  <img src={project1} alt="bg1" width={150} height={150} />
                </div>
                <div className="p-8">
                  <div className="text-sm font-semibold tracking-wide text-indigo-500 uppercase">
                    Portfolio
                  </div>
                  <a
                    href="https://niyonagize-rachel.vercel.app/"
                    target="_blank"
                  >
                    View profile
                  </a>

                  <p className="mt-2 text-slate-900">
                    Here you will see my best work that I've done this will
                    shows you my skills and My capability.
                  </p>
                </div>
              </div>

              <div className="flex items-center shadow-md bg-blue-50 rounded-2xl">
                <div className="p-5 md:shrink-0">
                  <img src={project2} alt="bg1" width={150} height={150} />
                </div>
                <div className="p-8">
                  <div className="text-sm font-semibold tracking-wide text-indigo-500 uppercase">
                    Library Management System
                  </div>
                  <a
                    href="https://github.com/Niyonagize6369/JAVA-EXAM"
                    target="_blank"
                  >
                    View System
                  </a>

                  <p className="mt-2 text-slate-900">
                    Helps leaders to control All activity in Library in easy
                    way.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="gap-4 p-0.5">
            <div className="max-w-md mx-auto overflow-hidden md:max-w-2xl hover:animate-pulse"></div>
            <div className="grid gap-5 md:grid-cols-2">
              <div className="flex flex-row-reverse items-center shadow-md bg-blue-50 rounded-2xl">
                <div className="p-5 md:shrink-0">
                  <img src={project3} alt="bg1" width={250} height={250} />
                </div>
                <div className="p-8">
                  <div className="text-sm font-semibold tracking-wide text-indigo-500 uppercase">
                    Online Shopping
                  </div>
                  <a
                    href="https://online-shopping-flax.vercel.app/"
                    target="_blank"
                  >
                    View Online Shopping
                  </a>

                  <p className="mt-2 text-slate-900">
                    Here you will see how you can buy a product in easy way .
                  </p>
                </div>
              </div>

              <div className="flex items-center shadow-md bg-blue-50 rounded-2xl">
                <div className="p-5 md:shrink-0">
                  <img src={project4} alt="bg1" width={150} height={150} />
                </div>
                <div className="p-8">
                  <div className="text-sm font-semibold tracking-wide text-indigo-500 uppercase">
                    Registration Form
                  </div>
                  <a
                    href="https://small-project-five.vercel.app/"
                    target="_blank"
                  >
                    Register
                  </a>

                  <p className="mt-2 text-slate-900">
                    Online Regitration in easy way
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div className="grid grid-cols-2 gap-4 p-0.5"></div>
      </div>
    </div>
  );
};

export default project;
