import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function Navbar({ onNavigate, currentPage }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.6, 0.05, 0.01, 0.9]
      }
    },
  };

  const linkVariants = {
    idle: { scale: 1 },
    hover: {
      scale: 1.05,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    },
    tap: {
      scale: 0.98
    }
  };

  const iconRotate = {
    hover: {
      rotate: 360,
      transition: {
        duration: 0.6,
        ease: "easeInOut"
      }
    }
  };

  const mobileMenuVariants = {
    closed: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    },
    open: {
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  };

  const menuItemVariants = {
    closed: { x: -20, opacity: 0 },
    open: (i) => ({
      x: 0,
      opacity: 1,
      transition: {
        delay: i * 0.1,
        duration: 0.3
      }
    })
  };

  const shimmerVariants = {
    initial: { x: '-100%' },
    hover: {
      x: '100%',
      transition: {
        duration: 0.8,
        ease: "easeInOut"
      }
    }
  };

  return (
    <motion.nav
      className="sticky top-0 z-50 bg-zinc-900/70 backdrop-blur-xl border-b border-zinc-800/50 shadow-2xl"
      variants={navVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 py-3.5 flex items-center justify-between">
        {/* Logo Section */}
        <motion.div
          className="flex items-center gap-3 cursor-pointer group"
          whileHover="hover"
          whileTap="tap"
          variants={linkVariants}
          onClick={() => onNavigate('home')}
        >
          <motion.div
            className="relative"
            variants={iconRotate}
          >
            <img
              src="/Logo.png"
              alt="Elementorix Logo"
              className="h-9 w-9 object-contain drop-shadow-lg relative z-10"
            />
            <motion.div
              className="absolute inset-0 bg-indigo-500/30 rounded-full blur-xl"
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.4, 0.8, 0.4]
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </motion.div>
          <span className="text-white text-xl sm:text-2xl font-bold tracking-tight bg-gradient-to-r from-white via-indigo-100 to-zinc-400 bg-clip-text text-transparent">
            Elementorix
          </span>
          <div className="hidden lg:flex items-center gap-2 ml-4 pl-4 border-l border-zinc-700/50">
            <img
              src="/IsteLogo.png"
              alt="ISTE HIT SC Logo"
              className="h-5 w-5 object-contain opacity-80 group-hover:opacity-100 transition-opacity"
            />
            <span className="text-zinc-400 text-sm font-medium group-hover:text-zinc-300 transition-colors">
              by ISTE HIT SC
            </span>
          </div>
        </motion.div>

        {/* Desktop Navigation */}
        <div className="flex items-center gap-3">
          {/* Hamburger Button */}
          <motion.button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="sm:hidden inline-flex items-center justify-center w-10 h-10 rounded-lg bg-zinc-800/50 border border-zinc-700/50 text-zinc-200 hover:bg-zinc-700/50 hover:border-zinc-600 transition-all"
            whileTap={{ scale: 0.95 }}
            aria-label="Toggle menu"
          >
            <motion.svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
              animate={isMenuOpen ? { rotate: 90 } : { rotate: 0 }}
              transition={{ duration: 0.3 }}
            >
              <path fillRule="evenodd" d="M3 5h14a1 1 0 100-2H3a1 1 0 100 2zm14 4H3a1 1 0 100 2h14a1 1 0 100-2zm0 6H3a1 1 0 100 2h14a1 1 0 100-2z" clipRule="evenodd" />
            </motion.svg>
          </motion.button>

          {/* Desktop Menu */}
          <ul className="hidden sm:flex items-center gap-2 text-zinc-300 font-medium">
            <motion.li variants={linkVariants} whileHover="hover" whileTap="tap">
              <button
                onClick={() => onNavigate('home')}
                className={`relative px-5 py-2.5 rounded-lg transition-all duration-300 overflow-hidden group ${
                  currentPage === 'home'
                    ? 'text-white bg-gradient-to-r from-indigo-600 via-indigo-500 to-purple-600 shadow-lg shadow-indigo-500/40'
                    : 'hover:text-white hover:bg-zinc-800/60 border border-transparent hover:border-zinc-700/50'
                }`}
              >
                <span className="relative z-10 font-semibold">Home</span>
                
                {/* Active state glow */}
                {currentPage === 'home' && (
                  <>
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-indigo-400/0 via-white/20 to-indigo-400/0"
                      variants={shimmerVariants}
                      initial="initial"
                      animate="hover"
                      transition={{
                        repeat: Infinity,
                        repeatDelay: 2,
                        duration: 1.5
                      }}
                    />
                    <motion.div
                      className="absolute -inset-0.5 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg opacity-30 blur-md"
                      animate={{
                        opacity: [0.3, 0.5, 0.3]
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    />
                  </>
                )}
                
                {/* Hover state gradient */}
                {currentPage !== 'home' && (
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-indigo-600/20 via-purple-600/20 to-transparent opacity-0 group-hover:opacity-100"
                    initial={{ x: '-100%' }}
                    whileHover={{ x: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                )}
              </button>
            </motion.li>

            <motion.li variants={linkVariants} whileHover="hover" whileTap="tap">
              <button
                onClick={() => onNavigate('guidelines')}
                className={`relative px-5 py-2.5 rounded-lg transition-all duration-300 overflow-hidden group ${
                  currentPage === 'guidelines'
                    ? 'text-white bg-gradient-to-r from-indigo-600 via-indigo-500 to-purple-600 shadow-lg shadow-indigo-500/40'
                    : 'hover:text-white hover:bg-zinc-800/60 border border-transparent hover:border-zinc-700/50'
                }`}
              >
                <span className="relative z-10 font-semibold">Guidelines</span>
                
                {currentPage === 'guidelines' && (
                  <>
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-indigo-400/0 via-white/20 to-indigo-400/0"
                      variants={shimmerVariants}
                      initial="initial"
                      animate="hover"
                      transition={{
                        repeat: Infinity,
                        repeatDelay: 2,
                        duration: 1.5
                      }}
                    />
                    <motion.div
                      className="absolute -inset-0.5 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg opacity-30 blur-md"
                      animate={{
                        opacity: [0.3, 0.5, 0.3]
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    />
                  </>
                )}
                
                {currentPage !== 'guidelines' && (
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-indigo-600/20 via-purple-600/20 to-transparent opacity-0 group-hover:opacity-100"
                    initial={{ x: '-100%' }}
                    whileHover={{ x: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                )}
              </button>
            </motion.li>

            <motion.li variants={linkVariants} whileHover="hover" whileTap="tap">
              <a
                href="https://github.com/Shubham-1068/Elementorix"
                target="_blank"
                rel="noopener noreferrer"
                className="relative px-5 py-2.5 rounded-lg transition-all duration-300 hover:text-white hover:bg-zinc-800/60 border border-transparent hover:border-zinc-700/50 flex items-center gap-2 group overflow-hidden"
              >
                <span className="relative z-10 font-semibold">GitHub</span>
                <motion.svg
                  className="w-5 h-5 group-hover:text-indigo-400 relative z-10 transition-colors duration-300"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  variants={iconRotate}
                >
                  <path d="M12 0.5C5.37 0.5 0 5.87 0 12.5c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.262.82-.58 0-.287-.01-1.04-.016-2.04-3.338.725-4.042-1.61-4.042-1.61-.546-1.387-1.335-1.757-1.335-1.757-1.09-.745.083-.73.083-.73 1.205.085 1.84 1.24 1.84 1.24 1.07 1.835 2.807 1.305 3.492.997.107-.775.42-1.305.763-1.605-2.665-.3-5.467-1.335-5.467-5.935 0-1.312.47-2.386 1.236-3.227-.124-.303-.536-1.52.117-3.16 0 0 1.008-.322 3.3 1.23a11.48 11.48 0 013.003-.404c1.02.005 2.047.137 3.002.404 2.29-1.552 3.297-1.23 3.297-1.23.655 1.64.244 2.857.12 3.16.77.84 1.235 1.915 1.235 3.227 0 4.61-2.807 5.63-5.48 5.926.43.37.81 1.102.81 2.222 0 1.605-.015 2.896-.015 3.286 0 .32.22.7.825.58C20.565 22.295 24 17.792 24 12.5 24 5.868 18.628.5 12 .5z" />
                </motion.svg>
                
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-zinc-700/20 via-zinc-600/20 to-transparent opacity-0 group-hover:opacity-100"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                />
              </a>
            </motion.li>

            <motion.li variants={linkVariants} whileHover="hover" whileTap="tap">
              <a
                href="https://www.istehitsc.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="relative px-5 py-2.5 rounded-lg transition-all duration-300 hover:text-white hover:bg-zinc-800/60 border border-transparent hover:border-zinc-700/50 flex items-center gap-2 group overflow-hidden"
              >
                <span className="relative z-10 font-semibold">ISTE HIT SC</span>
                <motion.img
                  src="/IsteLogo.png"
                  alt="ISTE HIT SC Logo"
                  className="w-5 h-5 object-contain group-hover:brightness-125 relative z-10 transition-all duration-300"
                  variants={iconRotate}
                />
                
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-zinc-700/20 via-zinc-600/20 to-transparent opacity-0 group-hover:opacity-100"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                />
              </a>
            </motion.li>
          </ul>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            variants={mobileMenuVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="sm:hidden overflow-hidden border-t border-zinc-800/50 bg-zinc-900/95 backdrop-blur-xl"
          >
            <ul className="px-4 py-4 space-y-2 text-zinc-200">
              {[
                { label: 'Home', action: () => onNavigate('home'), page: 'home' },
                { label: 'Guidelines', action: () => onNavigate('guidelines'), page: 'guidelines' },
              ].map((item, i) => (
                <motion.li
                  key={item.label}
                  custom={i}
                  variants={menuItemVariants}
                  initial="closed"
                  animate="open"
                >
                  <button
                    onClick={() => {
                      item.action();
                      setIsMenuOpen(false);
                    }}
                    className={`relative block px-4 py-3 rounded-lg w-full text-left transition-all duration-300 overflow-hidden group ${
                      currentPage === item.page
                        ? 'text-white bg-gradient-to-r from-indigo-600 via-indigo-500 to-purple-600 shadow-lg shadow-indigo-500/30 font-semibold'
                        : 'hover:bg-zinc-800/60 hover:text-white border border-transparent hover:border-zinc-700/50'
                    }`}
                  >
                    <span className="relative z-10">{item.label}</span>
                    
                    {currentPage === item.page && (
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-indigo-400/0 via-white/20 to-indigo-400/0"
                        animate={{ x: ['-100%', '100%'] }}
                        transition={{
                          repeat: Infinity,
                          repeatDelay: 1.5,
                          duration: 1.5,
                          ease: "easeInOut"
                        }}
                      />
                    )}
                    
                    {currentPage !== item.page && (
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-indigo-600/10 via-purple-600/10 to-transparent opacity-0 group-hover:opacity-100"
                        initial={{ x: '-100%' }}
                        whileHover={{ x: 0 }}
                        transition={{ duration: 0.3 }}
                      />
                    )}
                  </button>
                </motion.li>
              ))}

              <motion.li
                custom={2}
                variants={menuItemVariants}
                initial="closed"
                animate="open"
              >
                <a
                  href="https://github.com/Shubham-1068/Elementorix"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsMenuOpen(false)}
                  className="relative flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-zinc-800/60 hover:text-white transition-all duration-300 border border-transparent hover:border-zinc-700/50 overflow-hidden group"
                >
                  <svg className="w-5 h-5 relative z-10" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0.5C5.37 0.5 0 5.87 0 12.5c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.262.82-.58 0-.287-.01-1.04-.016-2.04-3.338.725-4.042-1.61-4.042-1.61-.546-1.387-1.335-1.757-1.335-1.757-1.09-.745.083-.73.083-.73 1.205.085 1.84 1.24 1.84 1.24 1.07 1.835 2.807 1.305 3.492.997.107-.775.42-1.305.763-1.605-2.665-.3-5.467-1.335-5.467-5.935 0-1.312.47-2.386 1.236-3.227-.124-.303-.536-1.52.117-3.16 0 0 1.008-.322 3.3 1.23a11.48 11.48 0 013.003-.404c1.02.005 2.047.137 3.002.404 2.29-1.552 3.297-1.23 3.297-1.23.655 1.64.244 2.857.12 3.16.77.84 1.235 1.915 1.235 3.227 0 4.61-2.807 5.63-5.48 5.926.43.37.81 1.102.81 2.222 0 1.605-.015 2.896-.015 3.286 0 .32.22.7.825.58C20.565 22.295 24 17.792 24 12.5 24 5.868 18.628.5 12 .5z" />
                  </svg>
                  <span className="relative z-10">GitHub</span>
                  
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-zinc-700/10 via-zinc-600/10 to-transparent opacity-0 group-hover:opacity-100"
                    initial={{ x: '-100%' }}
                    whileHover={{ x: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                </a>
              </motion.li>

              <motion.li
                custom={3}
                variants={menuItemVariants}
                initial="closed"
                animate="open"
              >
                <a
                  href="https://www.istehitsc.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsMenuOpen(false)}
                  className="relative flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-zinc-800/60 hover:text-white transition-all duration-300 border border-transparent hover:border-zinc-700/50 overflow-hidden group"
                >
                  <img
                    src="/IsteLogo.png"
                    alt="ISTE HIT SC Logo"
                    className="h-5 w-5 object-contain relative z-10"
                  />
                  <span className="relative z-10">ISTE HIT SC</span>
                  
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-zinc-700/10 via-zinc-600/10 to-transparent opacity-0 group-hover:opacity-100"
                    initial={{ x: '-100%' }}
                    whileHover={{ x: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                </a>
              </motion.li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

export default Navbar;