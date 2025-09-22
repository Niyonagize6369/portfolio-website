import React, { useState, useEffect } from "react";
import { CgNametag } from "react-icons/cg";
import { AiOutlineClose } from "react-icons/ai";
import { HiMenuAlt1 } from "react-icons/hi";
import { motion, AnimatePresence } from "framer-motion";

// Cleaner way to manage navigation links
const navLinks = [
  { href: "#", label: "Home" },
  { href: "#About Me", label: "About Me" },
  { href: "#skills", label: "Skills" },
  { href: "#project", label: "Project" },
  { href: "#contact", label: "Contact Me" },
];

const Nav = () => {
  // --- Your original state logic is unchanged ---
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  function openMenu() {
    setToggle(true);
  }

  function closeMenu() {
    setToggle(false);
  }
  // --- End of original logic ---

  // Effect to handle navbar background change on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <nav
        className={`fixed w-full top-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-gray-900/80 backdrop-blur-lg shadow-lg" : "bg-transparent"
        }`}
      >
        <div className="container mx-auto flex items-center justify-between p-4 sm:p-6">
          {/* Logo */}
          <motion.a
            href="#"
            className="text-white font-mono text-3xl tracking-wider flex items-center gap-2"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <CgNametag className="text-green-400" />
            <span>RACHEL</span>
          </motion.a>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-2">
            {navLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.href}
                className="relative text-white font-medium px-4 py-2 rounded-lg hover:text-green-400 transition-colors duration-300 group"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-green-400 transition-all duration-300 group-hover:w-full"></span>
              </motion.a>
            ))}
          </div>

          {/* Mobile Menu Toggle */}
          <div className="lg:hidden">
            <button onClick={openMenu} className="text-white focus:outline-none">
              <HiMenuAlt1 size={30} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {toggle && (
          <motion.div
            className="fixed inset-0 bg-black/50 z-50 lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="fixed top-0 right-0 h-full w-72 bg-gray-900 shadow-2xl p-6"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              <div className="flex justify-end mb-8">
                <button onClick={closeMenu} className="text-white focus:outline-none">
                  <AiOutlineClose size={30} />
                </button>
              </div>
              <ul className="flex flex-col space-y-4">
                {navLinks.map((link, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 + index * 0.1 }}
                  >
                    <a
                      href={link.href}
                      onClick={closeMenu}
                      className="block text-white text-xl font-semibold py-3 px-4 rounded-lg hover:bg-green-500/20 transition-colors"
                    >
                      {link.label}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Nav;