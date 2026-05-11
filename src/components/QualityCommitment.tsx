import { motion } from "framer-motion";
import { TRANSITION_VARIANTS } from "../constants/animations";
import { Shield, Award, Clock, Leaf } from "lucide-react";
import orafolLogo from "../assets/orafollogo.webp";
import averyLogo from "../assets/averylogo.webp";
import mmmLogo from "../assets/3mlogo.webp";
import arlonLogo from "../assets/arlonlogo.webp";

const commitments = [
  {
    icon: Shield,
    title: "FILMS CERTIFIÉS",
    text: "Orafol, Avery Dennison, 3M, Arlon. Nous travaillons exclusivement avec les leaders mondiaux.",
  },
  {
    icon: Award,
    title: "GARANTIE JUSQU'À 10 ANS",
    text: "Chaque pose est couverte par la garantie fabricant. Anti-jaunissement, anti-décollement.",
  },
  {
    icon: Clock,
    title: "DEVIS SOUS 48H",
    text: "Un devis clair, détaillé et transparent. Sans surprise, sans engagement.",
  },
  {
    icon: Leaf,
    title: "ATELIER CONTRÔLÉ",
    text: "Température, hygrométrie et propreté maîtrisées pour une pose sans défaut.",
  },
];

export function QualityCommitment() {
  return (
    <section className="py-32 px-6 bg-dark border-y border-border overflow-hidden">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* Left | Statement */}
          <motion.div
            variants={TRANSITION_VARIANTS.container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          className="reveal"
          >
            <motion.span
              variants={TRANSITION_VARIANTS.item}
              className="text-neon font-sans font-bold tracking-[0.3em] mb-6 block uppercase"
            >
              NOTRE ENGAGEMENT
            </motion.span>
            <motion.h2
              variants={TRANSITION_VARIANTS.item}
              className="text-5xl md:text-7xl font-display font-bold text-white leading-[0.9] mb-8"
            >
              LA QUALITÉ N'EST
              <br />
              PAS UNE <span className="text-outline">OPTION.</span>
            </motion.h2>
            <motion.p
              variants={TRANSITION_VARIANTS.item}
              className="text-lg text-neutral-400 font-sans leading-relaxed max-w-lg mb-12"
            >
              Chaque véhicule qui entre dans notre atelier reçoit le même traitement
              d'exception. Des matériaux certifiés, un environnement contrôlé, et
              une exigence qui ne tolère aucun compromis.
            </motion.p>

            {/* Large accent number & Partner Logos */}
            <div className="flex flex-col gap-12 mt-12">
              <motion.div
                variants={TRANSITION_VARIANTS.item}
                className="flex items-baseline gap-4"
              >
                <span className="text-7xl md:text-8xl font-display font-bold text-neon">
                  100%
                </span>
                <span className="text-neutral-500 font-sans font-bold text-sm uppercase tracking-widest leading-tight">
                  MATÉRIAUX
                  <br />
                  PREMIUM
                </span>
              </motion.div>

              <motion.div 
                variants={TRANSITION_VARIANTS.item}
                className="grid grid-cols-4 gap-4 sm:gap-8 items-center justify-items-center opacity-50 hover:opacity-100 transition-opacity duration-700"
              >
                {[
                  { img: mmmLogo, alt: "3M" },
                  { img: averyLogo, alt: "Avery Dennison" },
                  { img: orafolLogo, alt: "Orafol" },
                  { img: arlonLogo, alt: "Arlon" },
                ].map((logo) => (
                  <img 
                    key={logo.alt} 
                    src={logo.img} 
                    alt={logo.alt} 
                    className="h-5 sm:h-7 md:h-10 max-w-16 sm:max-w-24 w-auto object-contain brightness-200 hover:brightness-100 transition-all duration-500"
                  />
                ))}
              </motion.div>
            </div>
          </motion.div>

          {/* Right | Commitment Cards */}
          <motion.div
            variants={TRANSITION_VARIANTS.fastContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="reveal grid grid-cols-1 sm:grid-cols-2 gap-px bg-border"
          >
            {commitments.map((item) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  variants={TRANSITION_VARIANTS.card}
                  className="group bg-black p-8 hover:bg-black transition-colors duration-500"
                >
                  <motion.div 
                    variants={{
                      hidden: { borderColor: "#262626", backgroundColor: "transparent" },
                      visible: { borderColor: "#81e91f", backgroundColor: "rgba(129, 233, 31, 0.1)" }
                    }}
                    className="h-12 w-12 rounded-full border flex items-center justify-center mb-6 transition-colors duration-500"
                  >
                    <Icon className="w-5 h-5 text-white group-hover:text-neon transition-colors duration-500" />
                  </motion.div>
                  <motion.h3 
                    variants={TRANSITION_VARIANTS.item}
                    className="text-lg font-display font-bold text-white mb-3 transition-colors duration-500"
                  >
                    {item.title}
                  </motion.h3>
                  <motion.p 
                    variants={TRANSITION_VARIANTS.item}
                    className="text-neutral-500 font-sans text-sm leading-relaxed"
                  >
                    {item.text}
                  </motion.p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
