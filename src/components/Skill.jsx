import react1 from "../assets/react1.jpg";
import react2 from "../assets/react2.jpg";
import react3 from "../assets/react3.jpg";
import react4 from "../assets/react4.jpg";

const skills = () => {
  return (
    <div id="skills" className=" z-10 pt-12">
      <div className="bg-gray-500 m-20 ">
        <h1 className="text-4xl text-white py-2 font-bold text-center mb-12">
          Skills
        </h1>

        <div className="grid md:grid-cols-2">
          <div
            className="relative rounded-xl overflow-auto p-8
      hover:animate-pulse"
          >
            <div
              className="overflow-hidden relative max-w-md mx-auto
       bg-white shadow-lg ring-1 ring-black/5 rounded-xl flex items-center
       gap-6 dark:bg-slate-800 dark:bg-blend-hard-light-white/5"
            >
              <img
                src={react1}
                className="left-6 w-28 h-28 rounded-full shadow-lg object-cover"
              />
              <div className="min-w-0 py-5 pl-28 pr-5">
                <div
                  className="text-slate-900 font-medium
        text-sm: sm:text-base truncate dark:text-slate-200"
                >
                  REACT.JS NODE,NEXTJS, TAILWINDCSS, JAVASCRIPT, POSTGRESS,
                </div>
                <div
                  className="text-slate-900 font-medium text-sm *:sm:text-base
        leading-tight truncate dark:text-slate-400"
                >
                  FRONTEND DEVELOPER
                </div>
              </div>
            </div>
          </div>
          <div
            className="relative rounded-xl overflow-auto p-8
      hover:animate-pulse"
          >
            <div
              className="overflow-hidden relative max-w-md mx-auto
       bg-white shadow-lg ring-1 ring-black/5 rounded-xl flex items-center
       gap-6 dark:bg-slate-800 dark:bg-blend-hard-light-white/5"
            >
              <img
                src={react2}
                className="left-6 w-28 h-28 rounded-full shadow-lg object-cover"
              />
              <div className="min-w-0 py-5 pl-28 pr-5">
                <div
                  className="text-slate-900 font-medium
        text-sm: sm:text-base truncate dark:text-slate-200"
                >
                  NETWORKING
                </div>
                <div
                  className="text-slate-900 font-medium text-sm *:sm:text-base
        leading-tight truncate dark:text-slate-400"
                >
                  IT SPECIALIST
                </div>
              </div>
            </div>
          </div>
          <div
            className="relative rounded-xl overflow-auto p-8
      hover:animate-pulse"
          >
            <div
              className="overflow-hidden relative max-w-md mx-auto
       bg-white shadow-lg ring-1 ring-black/5 rounded-xl flex items-center
       gap-6 dark:bg-slate-800 dark:bg-blend-hard-light-white/5"
            >
              <img
                src={react3}
                className="left-6 w-28 h-28 rounded-full shadow-lg object-cover"
              />
              <div className="min-w-0 py-5 pl-28 pr-5">
                <div
                  className="text-slate-900 font-medium
        text-sm: sm:text-base truncate dark:text-slate-200"
                >
                  HTML
                </div>
                <div
                  className="text-slate-900 font-medium text-sm *:sm:text-base
        leading-tight truncate dark:text-slate-400"
                >
                  EXPERT IN HTML
                </div>
              </div>
            </div>
          </div>
          <div
            className="relative rounded-xl overflow-auto p-8
      hover:animate-pulse"
          >
            <div
              className="overflow-hidden relative max-w-md mx-auto
       bg-white shadow-lg ring-1 ring-black/5 rounded-xl flex items-center
       gap-6 dark:bg-slate-800 dark:bg-blend-hard-light-white/5"
            >
              <img
                src={react4}
                className="left-6 w-28 h-28 rounded-full shadow-lg object-cover"
              />
              <div className="min-w-0 py-5 pl-28 pr-5">
                <div
                  className="text-slate-900 font-medium
        text-sm: sm:text-base truncate dark:text-slate-200"
                >
                  EXPERT IN CSS
                </div>
                <div
                  className="text-slate-900 font-medium text-sm *:sm:text-base
        leading-tight truncate dark:text-slate-400"
                >
                  CSS DEVELOPER
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default skills;
