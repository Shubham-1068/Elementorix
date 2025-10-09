import { motion } from "framer-motion";

export default function Footer({ onNavigate }) {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: "GitHub",
      href: "https://github.com/Shubham-1068/Elementorix",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M12 0.5C5.37 0.5 0 5.87 0 12.5c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.262.82-.58 0-.287-.01-1.04-.016-2.04-3.338.725-4.042-1.61-4.042-1.61-.546-1.387-1.335-1.757-1.335-1.757-1.09-.745.083-.73.083-.73 1.205.085 1.84 1.24 1.84 1.24 1.07 1.835 2.807 1.305 3.492.997.107-.775.42-1.305.763-1.605-2.665-.3-5.467-1.335-5.467-5.935 0-1.312.47-2.386 1.236-3.227-.124-.303-.536-1.52.117-3.16 0 0 1.008-.322 3.3 1.23a11.48 11.48 0 013.003-.404c1.02.005 2.047.137 3.002.404 2.29-1.552 3.297-1.23 3.297-1.23.655 1.64.244 2.857.12 3.16.77.84 1.235 1.915 1.235 3.227 0 4.61-2.807 5.63-5.48 5.926.43.37.81 1.102.81 2.222 0 1.605-.015 2.896-.015 3.286 0 .32.22.7.825.58C20.565 22.295 24 17.792 24 12.5 24 5.868 18.628.5 12 .5z" />
        </svg>
      )
    },
    {
      name: "Instagram",
      href: "https://www.instagram.com/iste.hit.sc?igsh=MTByYTBtaHN0ZzJxdw==",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987s11.987-5.367 11.987-11.987C24.004 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C4.198 14.895 3.708 13.744 3.708 12.447s.49-2.448 1.297-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.807.875 1.297 2.026 1.297 3.323s-.49 2.448-1.297 3.323c-.875.807-2.026 1.297-3.323 1.297zm7.83-9.781c-.49 0-.98-.49-.98-.98s.49-.98.98-.98.98.49.98.98-.49.98-.98.98zm-7.83 1.297c-2.026 0-3.323 1.297-3.323 3.323s1.297 3.323 3.323 3.323 3.323-1.297 3.323-3.323-1.297-3.323-3.323-3.323z"/>
        </svg>
      )
    },
    {
      name: "ISTE HIT SC",
      href: "https://www.istehitsc.com/",
      icon: (
        <img 
          src="/IsteLogo.png" 
          alt="ISTE HIT SC Logo" 
          className="w-5 h-5 object-contain"
        />
      )
    }
  ];

  const quickLinks = [
    { name: "Contribution Guidelines", action: () => onNavigate('guidelines') },
    { name: "Home", action: () => onNavigate('home') }
  ];

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.6,
        staggerChildren: 0.1
      } 
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <motion.footer 
      className="footer-surface border-t mt-auto"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-8 lg:py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Brand Section */}
            <motion.div className="lg:col-span-2" variants={itemVariants}>
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 mb-4">
                <h3 className="text-white text-xl sm:text-2xl font-extrabold tracking-tight">
                  Elementorix
                </h3>
                <div className="hidden sm:flex items-center gap-2">
                  <img 
                    src="/IsteLogo.png" 
                    alt="ISTE HIT SC Logo" 
                    className="h-6 w-6 object-contain"
                  />
                  <span className="text-zinc-400 text-sm font-medium">
                    by ISTE HIT SC
                  </span>
                </div>
              </div>
              <div className="sm:hidden flex items-center gap-2 mb-3">
                <img 
                  src="/IsteLogo.png" 
                  alt="ISTE HIT SC Logo" 
                  className="h-5 w-5 object-contain"
                />
                <span className="text-zinc-400 text-sm font-medium">
                  by ISTE HIT SC
                </span>
              </div>
              <p className="muted-text text-sm leading-relaxed mb-6 max-w-md">
                Building the future of web development with powerful, intuitive tools 
                that make creating beautiful websites effortless.
              </p>
              
              {/* Social Links */}
              <div className="flex flex-wrap gap-4">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-10 h-10 rounded-lg border border-zinc-700 text-zinc-400 hover:text-white hover:border-zinc-600 hover:bg-white/5 transition-all duration-300"
                    whileHover={{ 
                      scale: 1.1, 
                      y: -2,
                      boxShadow: "0 4px 12px rgba(99, 102, 241, 0.3)"
                    }}
                    whileTap={{ scale: 0.95 }}
                    aria-label={`Visit our ${social.name} page`}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div variants={itemVariants}>
              <h4 className="text-white font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <button
                      onClick={link.action}
                      className="muted-text text-sm hover:text-white transition-colors duration-300 link-hover rounded-md px-2 py-1 -ml-2 text-left"
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>

        {/* Bottom Bar */}
        <motion.div 
          className="border-t border-zinc-800 py-6"
          variants={itemVariants}
        >
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
            <p className="muted-text text-sm m-0">
              © {currentYear} Elementorix. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <p className="muted-text text-xs">
                Made with ❤️ for developers
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.footer>
  );
}


