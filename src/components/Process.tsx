import { motion } from "framer-motion";
import { TRANSITION_VARIANTS } from "../constants/animations";
import { MessageSquare, Layers, Droplets, Sparkles } from "lucide-react";

export function Process() {
  return (
    <section className="py-32 px-6 bg-surface overflow-hidden">
      <div className="container mx-auto">
        <motion.div
          variants={TRANSITION_VARIANTS.container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="reveal mb-20"
        >
          <motion.span
            variants={TRANSITION_VARIANTS.item}
            className="text-neon font-sans font-bold tracking-[0.3em] mb-6 block uppercase"
          >
            NOTRE MÉTHODE
          </motion.span>
          <motion.h2
            variants={TRANSITION_VARIANTS.item}
            className="text-5xl md:text-7xl font-display font-bold text-white leading-[0.9]"
          >
            L'ART DU DÉTAIL,
            <br />
            <span className="text-neon">ÉTAPE PAR ÉTAPE.</span>
          </motion.h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 h-auto md:h-[600px]">
          {/* Step 1 - Large */}
          <motion.div
            variants={TRANSITION_VARIANTS.card}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="reveal md:col-span-7 bg-dark p-12 border border-border group hover:border-neon/30 transition-all duration-700 flex flex-col justify-between"
          >
            <MessageSquare className="w-12 h-12 text-neon mb-8" />
            <div>
              <h3 className="text-3xl font-display font-bold text-white mb-4 uppercase tracking-tight">
                ÉCHANGE & DEVIS
              </h3>
              <p className="text-neutral-400 font-sans leading-relaxed max-w-md">
                Nous discutons de votre projet et vous recevez un devis détaillé sous 48h. Chaque véhicule est unique, notre conseil l'est aussi.
              </p>
            </div>
          </motion.div>

          {/* Step 2 - Small */}
          <motion.div
            variants={TRANSITION_VARIANTS.card}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="reveal md:col-span-5 bg-dark p-10 border border-border group hover:border-neon/30 transition-all duration-700 flex flex-col justify-end"
          >
            <Layers className="w-10 h-10 text-neon mb-6" />
            <h3 className="text-2xl font-display font-bold text-white mb-4 uppercase tracking-tight">
              CHOIX DES FILMS
            </h3>
            <p className="text-neutral-400 font-sans text-sm leading-relaxed">
              Sélection des teintes, finitions et textures parmi nos gammes premium (Mat, Satin, Brillant).
            </p>
          </motion.div>

          {/* Step 3 - Small */}
          <motion.div
            variants={TRANSITION_VARIANTS.card}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="reveal md:col-span-5 bg-dark p-10 border border-border group hover:border-neon/30 transition-all duration-700 flex flex-col justify-end"
          >
            <Droplets className="w-10 h-10 text-neon mb-6" />
            <h3 className="text-2xl font-display font-bold text-white mb-4 uppercase tracking-tight">
              PRÉPARATION
            </h3>
            <p className="text-neutral-400 font-sans text-sm leading-relaxed">
              Nettoyage décontaminant et démontage expert pour une pose invisible et durable.
            </p>
          </motion.div>

          {/* Step 4 - Large */}
          <motion.div
            variants={TRANSITION_VARIANTS.card}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="reveal md:col-span-7 bg-dark p-12 border border-border group hover:border-neon/30 transition-all duration-700 flex flex-col justify-between"
          >
            <Sparkles className="w-12 h-12 text-neon mb-8" />
            <div>
              <h3 className="text-3xl font-display font-bold text-white mb-4 uppercase tracking-tight">
                POSE ARTISANALE
              </h3>
              <p className="text-neutral-400 font-sans leading-relaxed max-w-md">
                Application minutieuse des films dans notre atelier contrôlé. Une finition chirurgicale pour un rendu sortie d'usine.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
