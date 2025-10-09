import { useState } from "react";
import { motion } from "framer-motion";

function Navbar({ onNavigate, currentPage }) {
  const navVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const linkHover = {
    scale: 1.1,
    color: "#6366F1", // Indigo-500 (Tailwind)
    transition: { type: "spring", stiffness: 300 },
  };

  const githubIconHover = {
    rotate: 15,
    transition: { type: "spring", stiffness: 300 },
  };

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <motion.nav
      className="sticky top-0 z-20 navbar-surface backdrop-blur-md shadow-md border-b"
      variants={navVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 py-4 flex items-center justify-between flex-wrap gap-2">
        <motion.div
          className="flex items-center gap-3 cursor-pointer"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <img 
            src="/Logo.png" 
            alt="Elementorix Logo" 
            className="h-8 w-8 object-contain"
          />
          <span className="text-white text-xl sm:text-2xl font-extrabold tracking-tight">
            Elementorix
          </span>
          <div className="hidden md:flex items-center gap-2 ml-4 pl-4 border-l border-zinc-700">
            <img 
              src="/IsteLogo.png" 
              alt="ISTE HIT SC Logo" 
              className="h-6 w-6 object-contain"
            />
            <span className="text-zinc-400 text-sm font-medium">
              by ISTE HIT SC
            </span>
          </div>
        </motion.div>

        <div className="flex items-center gap-3">
          <button
            onClick={() => setIsMenuOpen((o) => !o)}
            className="sm:hidden inline-flex items-center justify-center w-10 h-10 rounded-md border border-zinc-700 text-zinc-200 hover:bg-white/10"
            aria-label="Toggle menu"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M3 5h14a1 1 0 100-2H3a1 1 0 100 2zm14 4H3a1 1 0 100 2h14a1 1 0 100-2zm0 6H3a1 1 0 100 2h14a1 1 0 100-2z" clipRule="evenodd" />
            </svg>
          </button>

          <ul className="hidden sm:flex items-center gap-6 text-gray-300 font-medium">
            <motion.li whileHover={linkHover} className="cursor-pointer">
              <button
                onClick={() => onNavigate('home')}
                className={`px-4 py-2 rounded-lg transition-colors duration-300 link-hover ${
                  currentPage === 'home' ? 'text-indigo-400 bg-indigo-400/10' : ''
                }`}
              >
                Home
              </button>
            </motion.li>
            <motion.li whileHover={linkHover} className="cursor-pointer">
              <button
                onClick={() => onNavigate('guidelines')}
                className={`px-4 py-2 rounded-lg transition-colors duration-300 link-hover ${
                  currentPage === 'guidelines' ? 'text-indigo-400 bg-indigo-400/10' : ''
                }`}
              >
                Guidelines
              </button>
            </motion.li>
            <motion.li whileHover={linkHover} className="cursor-pointer">
              <a
                href="https://github.com/Shubham-1068/Elementorix"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-lg transition-colors duration-300 link-hover flex items-center gap-2"
              >
                GitHub
                <motion.svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  whileHover={githubIconHover}
                >
                  <path d="M12 0.5C5.37 0.5 0 5.87 0 12.5c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.262.82-.58 0-.287-.01-1.04-.016-2.04-3.338.725-4.042-1.61-4.042-1.61-.546-1.387-1.335-1.757-1.335-1.757-1.09-.745.083-.73.083-.73 1.205.085 1.84 1.24 1.84 1.24 1.07 1.835 2.807 1.305 3.492.997.107-.775.42-1.305.763-1.605-2.665-.3-5.467-1.335-5.467-5.935 0-1.312.47-2.386 1.236-3.227-.124-.303-.536-1.52.117-3.16 0 0 1.008-.322 3.3 1.23a11.48 11.48 0 013.003-.404c1.02.005 2.047.137 3.002.404 2.29-1.552 3.297-1.23 3.297-1.23.655 1.64.244 2.857.12 3.16.77.84 1.235 1.915 1.235 3.227 0 4.61-2.807 5.63-5.48 5.926.43.37.81 1.102.81 2.222 0 1.605-.015 2.896-.015 3.286 0 .32.22.7.825.58C20.565 22.295 24 17.792 24 12.5 24 5.868 18.628.5 12 .5z" />
                </motion.svg>
              </a>
            </motion.li>
            <motion.li whileHover={linkHover} className="cursor-pointer">
              <a
                href="https://www.istehitsc.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-lg transition-colors duration-300 link-hover flex items-center gap-2"
              >
                ISTE HIT SC
                <motion.img
                  src="/IsteLogo.png"
                  alt="ISTE HIT SC Logo"
                  className="w-5 h-5 object-contain"
                  whileHover={githubIconHover}
                />
              </a>
            </motion.li>
          </ul>
        </div>
      </div>

      {isMenuOpen && (
        <div className="sm:hidden border-t border-zinc-800 bg-zinc-900/80 backdrop-blur">
          <ul className="px-4 py-3 space-y-1 text-zinc-200">
            <li>
              <button
                onClick={() => {
                  onNavigate('home');
                  setIsMenuOpen(false);
                }}
                className={`block px-3 py-2 rounded-md link-hover w-full text-left ${
                  currentPage === 'home' ? 'text-indigo-400 bg-indigo-400/10' : ''
                }`}
              >
                Home
              </button>
            </li>
            <li>
              <button
                onClick={() => {
                  onNavigate('guidelines');
                  setIsMenuOpen(false);
                }}
                className={`block px-3 py-2 rounded-md link-hover w-full text-left ${
                  currentPage === 'guidelines' ? 'text-indigo-400 bg-indigo-400/10' : ''
                }`}
              >
                Guidelines
              </button>
            </li>
            <li>
              <a
                href="https://github.com/Shubham-1068/Elementorix"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsMenuOpen(false)}
                className="block px-3 py-2 rounded-md link-hover"
              >
                GitHub
              </a>
            </li>
            <li>
              <a
                href="https://www.istehitsc.com/"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsMenuOpen(false)}
                className="block px-3 py-2 rounded-md link-hover flex items-center gap-2"
              >
                <img 
                  src="/IsteLogo.png" 
                  alt="ISTE HIT SC Logo" 
                  className="h-4 w-4 object-contain"
                />
                ISTE HIT SC
              </a>
            </li>
          </ul>
        </div>
      )}
    </motion.nav>
  );
}

export default Navbar;
