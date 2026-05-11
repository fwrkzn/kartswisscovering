import { motion } from "framer-motion";

import orafolLogo from "../assets/orafollogo.webp";
import averyLogo from "../assets/averylogo.webp";
import mmmLogo from "../assets/3mlogo.webp";
import arlonLogo from "../assets/arlonlogo.webp";

const brands = [
  { img: orafolLogo, alt: "Orafol" },
  { img: arlonLogo, alt: "Arlon" },
  { img: averyLogo, alt: "Avery Dennison" },
  { img: mmmLogo, alt: "3M" },
];

export function Marquee() {
  return (
    <section className="py-12 bg-dark border-y border-border overflow-hidden">
      <div className="container mx-auto px-6 mb-8 text-center">
        <h3 className="text-[10px] font-sans font-bold tracking-[0.4em] text-neutral-500 uppercase">
          FILMS CERTIFIÉS | PARTENAIRES OFFICIELS
        </h3>
      </div>
      
      <div className="flex overflow-hidden select-none">
        <motion.div 
          animate={{ x: [0, -1000] }}
          transition={{ 
            duration: 20, 
            repeat: Infinity, 
            ease: "linear" 
          }}
          className="flex flex-nowrap gap-20 items-center min-w-max px-10"
        >
          {[...brands, ...brands].map((brand, i) => (
            <img 
              key={`${brand.alt}-${i}`} 
              src={brand.img} 
              alt={brand.alt} 
              className="h-12 md:h-16 w-auto object-contain brightness-200 opacity-20 hover:opacity-100 transition-all duration-500"
            />
          ))}
        </motion.div>
        
        {/* Second set for infinite effect */}
        <motion.div 
          animate={{ x: [0, -1000] }}
          transition={{ 
            duration: 20, 
            repeat: Infinity, 
            ease: "linear" 
          }}
          className="flex flex-nowrap gap-20 items-center min-w-max px-10"
        >
          {[...brands, ...brands].map((brand, i) => (
            <img 
              key={`duplicate-${brand.alt}-${i}`} 
              src={brand.img} 
              alt={brand.alt} 
              className="h-12 md:h-16 w-auto object-contain brightness-200 opacity-20 hover:opacity-100 transition-all duration-500"
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
