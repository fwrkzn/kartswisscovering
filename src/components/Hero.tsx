import { motion } from "framer-motion";
import { TRANSITION_VARIANTS } from "../constants/animations";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import heroMustang from "../assets/hero-mustang.webp";

export function Hero() {
  return (
    <section id="accueil" className="relative min-h-[80vh] md:min-h-[85vh] pt-32 pb-20 px-6 overflow-hidden flex items-center">
      {/* Background Image with Gradient Overlay */}
      <div className="absolute top-0 right-0 w-full lg:w-3/4 h-full z-0">
        <img 
          src={heroMustang} 
          alt="Mustang Covering" 
          className="w-full h-full object-cover object-[75%] lg:object-right"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-dark via-dark/80 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-dark via-transparent to-transparent"></div>
      </div>

      <div className="container mx-auto relative z-10">
        <motion.div 
          variants={TRANSITION_VARIANTS.container}
          initial="hidden"
          animate="visible"
          className="reveal max-w-3xl"
        >
          <motion.h1 
            variants={TRANSITION_VARIANTS.blurText}
            className="text-[3.375rem] md:text-[7rem] font-display font-bold leading-[0.95] text-white mb-8"
          >
            VOTRE VOITURE,<br />
            <span className="text-neon-gradient">VOTRE SIGNATURE.</span>
          </motion.h1>

          <motion.p 
            variants={TRANSITION_VARIANTS.item}
            className="text-base md:text-lg text-neutral-400 font-sans max-w-xl mb-12 leading-relaxed"
          >
            Covering, vitres teintées, marquage publicitaire et déchromage. Un atelier indépendant, des films certifiés, un rendu sans compromis.
          </motion.p>

          <motion.div 
            variants={TRANSITION_VARIANTS.item}
            className="flex flex-col sm:flex-row items-start gap-4 mb-20"
          >
            <Link to="/contact">
              <button className="flex items-center gap-2 bg-neon px-8 py-4 text-sm font-sans font-black text-black uppercase tracking-tight hover:brightness-110 transition-all group shadow-[0_0_30px_rgba(134,239,33,0.1)]">
                OBTENEZ VOTRE DEVIS <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </Link>
            <Link to="/services">
              <button className="px-8 py-4 text-sm font-sans font-black text-neon uppercase tracking-tight border border-neon hover:bg-neon/10 transition-all">
                NOS SERVICES
              </button>
            </Link>
          </motion.div>

          <motion.div 
            variants={TRANSITION_VARIANTS.item}
            className="grid grid-cols-2 md:grid-cols-3 gap-12"
          >
            {[
              { value: "10+", label: "ANS D'EXPÉRIENCE" },
              { value: "500+", label: "VÉHICULES TRANSFORMÉS" },
              { value: "4", label: "MARQUES CERTIFIÉES" },
            ].map((stat) => (
              <div key={stat.label} className="flex flex-col">
                <span className="text-4xl md:text-5xl font-display font-bold text-neon">{stat.value}</span>
                <span className="text-[10px] font-sans font-bold tracking-widest text-neutral-500">{stat.label}</span>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
