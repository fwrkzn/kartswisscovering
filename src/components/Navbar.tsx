import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import logo from "../assets/logo.webp";
import { Menu, X, ArrowRight } from "lucide-react";

export function Navbar() {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  const navLinks = [
    { name: "ACCUEIL", path: "/" },
    { name: "SERVICES", path: "/services" },
    {
      name: "REALISATIONS",
      path: "/realisations",
      subLinks: [
        { name: "REALISATIONS 1", path: "/realisations" },
        { name: "REALISATIONS 2", path: "/realisations2" },
      ],
    },
    { name: "PRÉSENTATION", path: "/presentation" },
    { name: "CONTACT", path: "/contact" },
  ];

  const smoothEase: [number, number, number, number] = [0.16, 1, 0.3, 1];

  const menuVariants = {
    closed: {
      opacity: 0,
      y: "-100%",
      transition: {
        duration: 0.42,
        ease: smoothEase,
        when: "afterChildren" as const,
      },
    },
    open: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.45,
        ease: smoothEase,
        staggerChildren: 0.055,
        delayChildren: 0.08,
      },
    },
  };

  const linkVariants = {
    closed: { opacity: 0, y: 16 },
    open: { opacity: 1, y: 0, transition: { duration: 0.36, ease: smoothEase } },
  };

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.52, ease: smoothEase }}
        className={`fixed top-0 left-0 right-0 z-[60] flex items-center justify-between px-6 py-4 border-b transition-[background-color,border-color,padding] duration-500 ${
          isScrolled || isOpen ? "bg-dark/95 backdrop-blur-xl border-border py-3" : "bg-transparent border-transparent"
        }`}
      >
        <Link to="/" className="flex items-center gap-3 group z-10">
          <img src={logo} alt="Kart Swiss Logo" className="h-10 md:h-12 w-auto object-contain transition-transform duration-500 group-hover:scale-105" />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            if (link.subLinks) {
              return (
                <div key={link.name} className="relative group py-2">
                  <Link
                    to={link.path}
                    className={`text-[11px] font-sans font-bold tracking-[0.2em] transition-all duration-300 hover:text-white flex items-center gap-1 ${
                      location.pathname.startsWith("/realisations") ? "text-neon" : "text-neutral-400"
                    }`}
                  >
                    {link.name}
                  </Link>
                  {/* Dropdown Menu */}
                  <div className="absolute top-full left-0 pt-2 opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-300 z-50 min-w-[170px]">
                    <div className="bg-dark/95 backdrop-blur-md border border-border p-2 shadow-xl flex flex-col gap-1">
                      {link.subLinks.map((sub) => (
                        <Link
                          key={sub.name}
                          to={sub.path}
                          className={`text-[10px] font-sans font-bold tracking-[0.15em] px-3 py-2.5 uppercase transition-all block ${
                            location.pathname === sub.path
                              ? "text-neon bg-surface font-black"
                              : "text-neutral-400 hover:text-white hover:bg-surface/50"
                          }`}
                        >
                          {sub.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              );
            }
            return (
              <Link
                key={link.name}
                to={link.path}
                className={`text-[11px] font-sans font-bold tracking-[0.2em] transition-all duration-300 hover:text-white ${
                  location.pathname === link.path ? "text-neon" : "text-neutral-400"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        {/* Desktop CTA */}
        <Link to="/contact" className="hidden md:block">
          <button className="bg-neon px-6 py-2.5 text-xs font-sans font-black text-black uppercase tracking-tight hover:brightness-110 hover:scale-105 active:scale-95 transition-all duration-300 shadow-[0_0_20px_rgba(134,239,33,0.2)]">
            OBTENEZ VOTRE DEVIS
          </button>
        </Link>

        {/* Mobile Toggle */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden z-10 text-white p-2 hover:text-neon transition-colors"
        >
          {isOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
        </button>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={menuVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="fixed inset-0 z-[55] bg-dark flex flex-col justify-start overflow-y-auto px-8 pt-32 pb-12"
          >

            <div className="flex flex-col gap-6 sm:gap-8 relative z-10 mt-auto">
              {navLinks.map((link, index) => (
                <motion.div key={link.name} variants={linkVariants} className="flex flex-col">
                  {link.subLinks ? (
                    <>
                      <div className="py-2 border-b border-white/5 flex items-center justify-between">
                        <div className="flex items-center gap-4 sm:gap-6">
                          <span className="text-neon font-display font-bold text-lg sm:text-xl opacity-40">0{index + 1}</span>
                          <span className={`text-4xl sm:text-5xl md:text-7xl font-display font-bold uppercase ${
                            location.pathname.startsWith("/realisations") ? "text-neon" : "text-white"
                          }`}>
                            {link.name}
                          </span>
                        </div>
                      </div>
                      <div className="flex flex-col pl-12 sm:pl-16 mt-2 gap-3 border-b border-white/5 pb-3">
                        {link.subLinks.map((sub) => (
                          <Link
                            key={sub.name}
                            to={sub.path}
                            onClick={() => setIsOpen(false)}
                            className="group flex items-center justify-between py-1"
                          >
                            <span className={`text-xl sm:text-2xl font-display font-bold uppercase tracking-wide transition-colors ${
                              location.pathname === sub.path ? "text-neon" : "text-neutral-400 group-hover:text-white"
                            }`}>
                              {sub.name}
                            </span>
                            <ArrowRight className={`w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 group-hover:translate-x-1 ${
                              location.pathname === sub.path ? "text-neon" : "text-white/20"
                            }`} />
                          </Link>
                        ))}
                      </div>
                    </>
                  ) : (
                    <Link
                      to={link.path}
                      onClick={() => setIsOpen(false)}
                      className={`group flex items-center justify-between py-2 border-b border-white/5`}
                    >
                      <div className="flex items-center gap-4 sm:gap-6">
                        <span className="text-neon font-display font-bold text-lg sm:text-xl opacity-40">0{index + 1}</span>
                        <span className={`text-4xl sm:text-5xl md:text-7xl font-display font-bold uppercase transition-colors ${
                          location.pathname === link.path ? "text-neon" : "text-white group-hover:text-neon"
                        }`}>
                          {link.name}
                        </span>
                      </div>
                      <ArrowRight className={`w-6 h-6 sm:w-8 sm:h-8 transition-transform duration-500 group-hover:translate-x-2 ${
                        location.pathname === link.path ? "text-neon" : "text-white/20"
                      }`} />
                    </Link>
                  )}
                </motion.div>
              ))}
            </div>

            <motion.div 
              variants={linkVariants}
              className="mt-10 sm:mt-16 relative z-10 mb-auto"
            >
               <Link to="/contact" onClick={() => setIsOpen(false)}>
                  <button className="w-full bg-neon py-5 sm:py-6 text-black font-sans font-black text-xl sm:text-2xl uppercase tracking-tight shadow-[0_0_30px_rgba(134,239,33,0.1)]">
                    DEVIS GRATUIT
                  </button>
               </Link>
               
               <div className="flex justify-between items-center mt-10 sm:mt-12 text-neutral-500 font-sans text-[10px] font-bold tracking-[0.3em] uppercase">
                 <span>YVERDON-LES-BAINS</span>
                 <span>SWISS QUALITY +</span>
               </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
