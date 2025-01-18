import project1 from "../assets/project1.jpg";
import project2 from "../assets/project2.jpg";
import project3 from "../assets/project3.jpg";
import project4 from "../assets/project4.jpg";

const project = () => {
  return (
    <div id="project" className="pt-12">
      <div className="bg-gray-500 m-20 max-w-full">
        <div className="grid justify-items-center m-10">
          <h1 className="text-3xl text-blue-200 mt-10">Project</h1>
        </div>

        <div>
          <div className="gap-4 p-0.5">
            <div
              className="max-w-md mx-auto bg-white rounded-xl shadow-md 
            overflow-hidden md:max-w-2xl 
            hover:animate-pulse"
            ></div>
            <div className="grid md:grid-cols-2  gap-5">
              <div className="flex flex-row-reverse items-center bg-blue-50 rounded-2xl shadow-md">
                <div className="md:shrink-0 p-5">
                  <img src={project2} alt="bg1" width={150} height={150} />
                </div>
                <div className="p-8">
                  <div
                    className="uppercase tracking-wide text-sm
                 text-indigo-500 font-semibold"
                  >
                    Portfolio
                  </div>
                  <a href="#">profile</a>

                  <p className="mt-2 text-slate-900">
                    Here you can see collection of my best work that will shows
                    you my skills and what i can do. Its impress you by giving
                    examples of what I've done. Also you see my strengths and
                    what am I capable of achieving.
                  </p>
                </div>
              </div>

              <div className="flex items-center bg-blue-50 rounded-2xl shadow-md">
                <div className="md:shrink-0 p-5">
                  <img src={project2} alt="bg1" width={150} height={150} />
                </div>
                <div className="p-8">
                  <div
                    className="uppercase tracking-wide text-sm
                 text-indigo-500 font-semibold"
                  >
                    school Management System
                  </div>
                  <a href="#">Subheading</a>

                  <p className="mt-2 text-slate-900">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sit minus dolore.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="gap-4 p-0.5">
            <div
              className="max-w-md mx-auto
            overflow-hidden md:max-w-2xl 
            hover:animate-pulse"
            ></div>
            <div className="grid md:grid-cols-2 gap-5">
              <div className="flex flex-row-reverse items-center bg-blue-50 rounded-2xl shadow-md">
                <div className="md:shrink-0 p-5">
                  <img src={project2} alt="bg1" width={150} height={150} />
                </div>
                <div className="p-8">
                  <div
                    className="uppercase tracking-wide text-sm
                 text-indigo-500 font-semibold"
                  >
                    school Management System
                  </div>
                  <a href="#">Subheading</a>

                  <p className="mt-2 text-slate-900">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sit minus dolore.
                  </p>
                </div>
              </div>

              <div className="flex items-center bg-blue-50 rounded-2xl shadow-md">
                <div className="md:shrink-0 p-5">
                  <img src={project2} alt="bg1" width={150} height={150} />
                </div>
                <div className="p-8">
                  <div
                    className="uppercase tracking-wide text-sm
                 text-indigo-500 font-semibold"
                  >
                    school Management System
                  </div>
                  <a href="#">Subheading</a>

                  <p className="mt-2 text-slate-900">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sit minus dolore.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* <div className='max-w-md mx-auto bg-white rounded-xl shadow-md 
          overflow-hidden md:max-w-2xl hover:animate-pulse'>
          </div> */}
        </div>
        <hr />
        <div className="grid grid-cols-2 gap-4 p-0.5"></div>
      </div>
    </div>
  );
};

export default project;
