import S1 from "../assets/s1.jpg";
import S2 from "../assets/s2.jpg";
import S3 from "../assets/s3.jpg";
import S4 from "../assets/s4.jpg";

const skills = () => {
  return (
    <div id="skills" className="pt-12">
      <div className="bg-gray-500 m-20 ">
        <h1 className="text-3xl text-blue-200 p-10 text-center">Skills</h1>

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
                src={S1}
                className="left-6 w-28 h-28 rounded-full shadow-lg object-cover"
              />
              <div className="min-w-0 py-5 pl-28 pr-5">
                <div
                  className="text-slate-900 font-medium
        text-sm: sm:text-base truncate dark:text-slate-200"
                >
                  REACT
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
                src={S2}
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
                  IT SUPPOTER
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
                src={S3}
                className="left-6 w-28 h-28 rounded-full shadow-lg object-cover"
              />
              <div className="min-w-0 py-5 pl-28 pr-5">
                <div
                  className="text-slate-900 font-medium
        text-sm: sm:text-base truncate dark:text-slate-200"
                >
                  Name Goes Here
                </div>
                <div
                  className="text-slate-900 font-medium text-sm *:sm:text-base
        leading-tight truncate dark:text-slate-400"
                >
                  Assistant manager
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
                src={S4}
                className="left-6 w-28 h-28 rounded-full shadow-lg object-cover"
              />
              <div className="min-w-0 py-5 pl-28 pr-5">
                <div
                  className="text-slate-900 font-medium
        text-sm: sm:text-base truncate dark:text-slate-200"
                >
                  Name Goes Here
                </div>
                <div
                  className="text-slate-900 font-medium text-sm *:sm:text-base
        leading-tight truncate dark:text-slate-400"
                >
                  Assistant manager
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
