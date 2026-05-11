import { motion } from "framer-motion";
import { TRANSITION_VARIANTS } from "../constants/animations";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export function CTA() {
  return (
    <section className="py-32 px-6 bg-dark">
      <motion.div
        variants={TRANSITION_VARIANTS.container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="reveal container mx-auto text-center"
      >
        <motion.span
          variants={TRANSITION_VARIANTS.item}
          className="text-neon font-sans font-bold tracking-[0.3em] mb-6 block uppercase"
        >
          PRÊT À DÉMARRER ?
        </motion.span>

        <motion.h2
          variants={TRANSITION_VARIANTS.item}
          className="text-5xl md:text-8xl font-display font-bold text-white mb-8 leading-[0.9]"
        >
          DONNONS UNE <span className="text-outline">NOUVELLE</span>
          <br />
          <span className="text-outline">PEAU</span> À VOTRE VÉHICULE.
        </motion.h2>

        <motion.p
          variants={TRANSITION_VARIANTS.item}
          className="text-neutral-400 font-sans text-lg mb-12 max-w-lg mx-auto"
        >
          Un devis transparent sous 48h. Sans engagement.
        </motion.p>

        <motion.div variants={TRANSITION_VARIANTS.item}>
          <Link to="/contact">
            <button className="group flex items-center gap-3 bg-neon px-10 py-5 text-base font-sans font-black text-black uppercase tracking-tight hover:brightness-110 transition-all mx-auto shadow-[0_0_30px_rgba(134,239,33,0.1)]">
              OBTENEZ VOTRE DEVIS
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}
