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

  // Close menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

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
    { name: "PRÉSENTATION", path: "/presentation" },
    { name: "CONTACT", path: "/contact" },
  ];

  const smoothEase: [number, number, number, number] = [0.16, 1, 0.3, 1];

  const menuVariants = {
    closed: {
      opacity: 0,
      y: "-100%",
      transition: {
        duration: 0.6,
        ease: smoothEase,
        when: "afterChildren" as const,
      },
    },
    open: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: smoothEase,
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const linkVariants = {
    closed: { opacity: 0, y: 20 },
    open: { opacity: 1, y: 0, transition: { duration: 0.5, ease: smoothEase } },
  };

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: smoothEase }}
        className={`fixed top-0 left-0 right-0 z-[60] flex items-center justify-between px-6 py-4 border-b transition-all duration-500 ${
          isScrolled || isOpen ? "bg-dark/95 backdrop-blur-xl border-border py-3" : "bg-transparent border-transparent"
        }`}
      >
        <Link to="/" className="flex items-center gap-3 group z-10">
          <img src={logo} alt="Kart Swiss Logo" className="h-10 md:h-12 w-auto object-contain transition-transform duration-500 group-hover:scale-105" />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`text-[11px] font-sans font-bold tracking-[0.2em] transition-all duration-300 hover:text-white ${
                location.pathname === link.path ? "text-neon" : "text-neutral-400"
              }`}
            >
              {link.name}
            </Link>
          ))}
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
            className="fixed inset-0 z-[55] bg-dark flex flex-col justify-center px-8"
          >

            <div className="flex flex-col gap-8 relative z-10">
              {navLinks.map((link, index) => (
                <motion.div key={link.name} variants={linkVariants}>
                  <Link
                    to={link.path}
                    className={`group flex items-center justify-between py-2 border-b border-white/5`}
                  >
                    <div className="flex items-center gap-6">
                      <span className="text-neon font-display font-bold text-xl opacity-40">0{index + 1}</span>
                      <span className={`text-5xl md:text-7xl font-display font-bold uppercase transition-colors ${
                        location.pathname === link.path ? "text-neon" : "text-white group-hover:text-neon"
                      }`}>
                        {link.name}
                      </span>
                    </div>
                    <ArrowRight className={`w-8 h-8 transition-transform duration-500 group-hover:translate-x-2 ${
                      location.pathname === link.path ? "text-neon" : "text-white/20"
                    }`} />
                  </Link>
                </motion.div>
              ))}
            </div>

            <motion.div 
              variants={linkVariants}
              className="mt-16 relative z-10"
            >
               <Link to="/contact">
                  <button className="w-full bg-neon py-6 text-black font-sans font-black text-2xl uppercase tracking-tight shadow-[0_0_30px_rgba(134,239,33,0.1)]">
                    DEVIS GRATUIT
                  </button>
               </Link>
               
               <div className="flex justify-between items-center mt-12 text-neutral-500 font-sans text-[10px] font-bold tracking-[0.3em] uppercase">
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
