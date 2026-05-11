import { motion } from "framer-motion";
import { TRANSITION_VARIANTS } from "../constants/animations";
import { ArrowRight, Paintbrush, Sun, Megaphone, Wrench } from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  {
    id: "01",
    title: "COVERING",
    subtitle: "TOTAL OU PARTIEL",
    text: "Films vinyle haut de gamme. Mat, brillant, satin, métallique ou carbone : transformez radicalement l'apparence de votre véhicule.",
    icon: Paintbrush,
  },
  {
    id: "02",
    title: "VITRES TEINTÉES",
    subtitle: "CONFORT & SÉCURITÉ",
    text: "Films teintés homologués pour réduire la chaleur, protéger des UV et préserver votre intimité. Conformes CH.",
    icon: Sun,
  },
  {
    id: "03",
    title: "MARQUAGE PUB",
    subtitle: "VOTRE FLOTTE. VOTRE VITRINE",
    text: "Lettrage, logos, covering publicitaire complet. Conception graphique et pose professionnelle pour flottes et utilitaires.",
    icon: Megaphone,
  },
  {
    id: "04",
    title: "CUSTOMISATION",
    subtitle: "LE DÉTAIL QUI CHANGE TOUT",
    text: "Déchromage, toit noir, jantes filmées, inserts personnalisés. Donnez du caractère sans compromis.",
    icon: Wrench,
  },
];

export function ServicesPreview() {
  return (
    <section className="py-32 px-6 bg-dark">
      <div className="container mx-auto">
        {/* Section Header */}
        <motion.div
          variants={TRANSITION_VARIANTS.container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="reveal flex flex-col md:flex-row justify-between items-start gap-8 mb-20"
        >
          <div className="max-w-xl">
            <motion.span
              variants={TRANSITION_VARIANTS.item}
              className="text-neon font-sans font-bold tracking-[0.3em] mb-6 block uppercase"
            >
              CE QUE NOUS FAISONS
            </motion.span>
            <motion.h2
              variants={TRANSITION_VARIANTS.blurText}
              className="text-5xl md:text-7xl font-display font-bold text-white leading-[0.9]"
            >
              NOS SERVICES<br />
              <span className="text-outline">PREMIUM.</span>
            </motion.h2>
          </div>
          <motion.p
            variants={TRANSITION_VARIANTS.item}
            className="max-w-md text-neutral-400 font-sans text-lg leading-relaxed pt-4"
          >
            De la protection invisible à la transformation radicale. Chaque
            prestation est réalisée dans notre atelier d'Yverdon, avec des
            matériaux certifiés.
          </motion.p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={TRANSITION_VARIANTS.fastContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="reveal grid grid-cols-1 md:grid-cols-2 gap-px bg-border mb-16"
        >
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.id}
                variants={TRANSITION_VARIANTS.card}
                initial="hidden"
                whileInView="highlighted"
                viewport={{ once: false, margin: "-20% 0px -20% 0px" }}
                className="group relative bg-dark p-10 md:p-12 hover:bg-surface transition-all duration-700"
              >
                <div className="flex items-start justify-between mb-8">
                  <motion.span 
                    variants={{
                      hidden: { opacity: 0.2 },
                      highlighted: { opacity: 1 }
                    }}
                    className="text-6xl md:text-7xl font-display font-bold text-neon transition-all duration-700 leading-none"
                  >
                    {service.id}
                  </motion.span>
                  <div className="h-14 w-14 rounded-full border border-neutral-800 flex items-center justify-center group-hover:border-neon group-hover:bg-neon/10 transition-all duration-500">
                    <Icon className="w-6 h-6 text-neutral-600 group-hover:text-neon transition-all duration-500" />
                  </div>
                </div>

                <span className="text-[10px] font-sans font-bold tracking-[0.3em] text-neutral-500 block mb-2">
                  {service.subtitle}
                </span>
                <motion.h3 
                  variants={{
                    hidden: { opacity: 1 },
                    highlighted: { opacity: 1 }
                  }}
                  className="text-2xl md:text-3xl font-display font-bold text-white mb-4 transition-colors duration-500"
                >
                  {service.title}
                </motion.h3>
                <p className="text-neutral-400 font-sans leading-relaxed mb-8">
                  {service.text}
                </p>

                <motion.div 
                  variants={{
                    hidden: { color: "#525252" },
                    highlighted: { color: "#525252" }
                  }}
                  className="flex items-center gap-2 transition-all duration-500"
                >
                  <span className="text-xs font-sans font-bold uppercase tracking-widest">
                    En savoir plus
                  </span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-500" />
                </motion.div>

                {/* Full card link */}
                <Link to="/services" className="absolute inset-0 z-10" />
              </motion.div>
            );
          })}
        </motion.div>

        {/* CTA to Expertise Page */}
        <motion.div
          variants={TRANSITION_VARIANTS.item}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="reveal flex justify-center"
        >
          <Link to="/services">
            <button className="group flex items-center gap-3 bg-neon px-10 py-5 text-base font-sans font-black text-black uppercase tracking-tight hover:brightness-110 transition-all duration-500 shadow-[0_0_30px_rgba(134,239,33,0.1)]">
              DÉCOUVRIR TOUS NOS SERVICES
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
