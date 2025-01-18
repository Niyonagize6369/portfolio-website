import { CgNametag } from 'react-icons/cg';
import { AiOutlineClose } from 'react-icons/ai';
import { HiMenuAlt1 } from 'react-icons/hi';
import { useState } from 'react';
function Nav() {

  const [toggle, setToggle] = useState(false);
  function openMenu(){
    setToggle(true);
  }

  function closeMenu(){
    setToggle(false);
  }
  return (
    <>
      <div className="fixed w-full bg-gray-600 flex items-center justify-between p-10 lg:flex-row">
        <div>
          <a
            href="#"
            className="text-grey font-mono text-3xl
      tracking-wider flex items-center"
          >
            <CgNametag /> RACHEL
          </a>
        </div>
        <div className="space-x-4">
          <div className="ssm:hidden lg:block space-x-2">
            <a
              href="#"
              className="text-grey hover:bg-slate-300 rounded-full px-6 py-2 text-xl"
            >
              Home
            </a>
            <a
              href="#"
              className="text-grey hover:bg-slate-300 rounded-full px-6 py-2 text-xl"
            >
              About Me
            </a>
            <a
              href="#skills"
              className="text-grey hover:bg-slate-300 rounded-full px-6 py-2 text-xl"
            >
              Skills
            </a>
            <a
              href="#"
              className="text-grey hover:bg-slate-300 rounded-full px-6 py-2 text-xl"
            >
              Contact Me
            </a>
            <a
              href="#project"
              className="text-grey hover:bg-slate-300 rounded-full px-6 py-2 text-xl"
            >
              Project
            </a>
          </div>
        </div>
        <div className="ssm:block lg:hidden">
          {toggle ? (
            <AiOutlineClose
              onClick={closeMenu}
              size={30}
              className="text-red-900 cursor-pointer"
            />
          ) : (
            <HiMenuAlt1
              onClick={openMenu}
              size={30}
              className="text-red-900 cursor-pointer"
            />
          )}
        </div>
      </div>

      <div className="ss:block lg:hidden">
        {toggle ? (
          <div className="flex justify-between nl-10">
            <ul>
              <li className="text to-black hover:bg-green-200 text-nl mb-2 rounded-full px-7 py-3 text-xl cursor-pointer">
                Home
              </li>
              <li className="text to-black hover:bg-green-200 text-nl mb-2 rounded-full px-7 py-3 text-xl cursor-pointer">
                About Me{" "}
              </li>
              <li className="text to-black hover:bg-green-200 text-nl mb-2 rounded-full px-7 py-3 text-xl cursor-pointer">
                <a href="#skills">Skills</a>
              </li>
              <li className="text to-black hover:bg-green-200 text-nl mb-2 rounded-full px-7 py-3 text-xl cursor-pointer">
                Contact Me
              </li>
              <li className="text to-black hover:bg-green-200 text-nl mb-2 rounded-full px-7 py-3 text-xl cursor-pointer">
                <a href="#project">Project</a>
              </li>
            </ul>
          </div>
        ) : (
          <div></div>
        )}
      </div>
    </>
  );
}

export default Nav
