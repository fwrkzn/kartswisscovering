import { motion } from "framer-motion";
import { TRANSITION_VARIANTS } from "../constants/animations";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import covering2 from "../assets/covering2.webp";
import vitreteinte2 from "../assets/vitreteinte2.webp";
import marqpub1 from "../assets/marqpub1.webp";

const transformations = [
  {
    id: "01",
    title: "COVERING INTÉGRAL SATIN",
    vehicle: "PORSCHE 911 GT3",
    tag: "COVERING",
    image: covering2,
  },
  {
    id: "02",
    title: "VITRES TEINTÉES + DÉCHROMAGE",
    vehicle: "BMW SÉRIE 3",
    tag: "VITRES TEINTÉES",
    image: vitreteinte2,
  },
  {
    id: "03",
    title: "MARQUAGE FLOTTE COMPLÈTE",
    vehicle: "RENAULT MASTER",
    tag: "MARQUAGE PUB",
    image: marqpub1,
  },
];

export function Transformations() {
  return (
    <section className="py-32 px-6 bg-dark">
      <div className="container mx-auto">
        {/* Header */}
        <motion.div
          variants={TRANSITION_VARIANTS.container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="reveal flex flex-col md:flex-row justify-between items-start gap-8 mb-20"
        >
          <div className="max-w-xl">
            <motion.span
              variants={TRANSITION_VARIANTS.blurText}
              className="text-neon font-sans font-bold tracking-[0.3em] mb-6 block uppercase"
            >
              RÉALISATIONS
            </motion.span>
            <motion.h2
              variants={TRANSITION_VARIANTS.blurText}
              className="text-5xl md:text-7xl font-display font-bold text-white leading-[0.9]"
            >
              CHAQUE PROJET
              <br />
              EST <span className="text-outline">UNIQUE.</span>
            </motion.h2>
          </div>
          <motion.p
            variants={TRANSITION_VARIANTS.item}
            className="max-w-md text-neutral-400 font-sans text-lg leading-relaxed pt-4"
          >
            Du covering intégral au marquage publicitaire, découvrez quelques-unes
            de nos transformations récentes.
          </motion.p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={TRANSITION_VARIANTS.container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="reveal grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {transformations.map((project) => (
            <motion.div
              key={project.id}
              variants={TRANSITION_VARIANTS.item}
              className="group relative overflow-hidden aspect-[3/4] cursor-pointer"
            >
              {/* Image */}
              <img
                src={project.image}
                alt={project.title}
                loading="lazy"
                className={`absolute inset-0 w-full h-full transition duration-700 transform-gpu will-change-transform ${
                  project.id === "02"
                    ? "object-cover scale-[1.25] group-hover:scale-[1.29]"
                    : "object-cover group-hover:scale-110"
                }`}
              />

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/40 to-transparent" />

              {/* Tag */}
              <div className="absolute top-6 left-6 z-10">
                <span className="bg-black/40 border border-neon/20 text-neon text-[10px] font-sans font-bold uppercase tracking-[0.2em] px-4 py-2">
                  {project.tag}
                </span>
              </div>

              {/* Arrow */}
              <div className="absolute top-6 right-6 z-10">
                <div className="h-10 w-10 rounded-full border border-white/10 flex items-center justify-center group-hover:border-neon transition duration-500">
                  <ArrowUpRight className="w-5 h-5 text-white/30 group-hover:text-neon transition duration-500" />
                </div>
              </div>

              {/* Bottom content */}
              <div className="absolute bottom-0 left-0 right-0 p-8 z-10">
                <h3 className="text-xl md:text-2xl font-display font-bold text-white group-hover:text-neon transition-colors duration-500">
                  {project.title}
                </h3>
              </div>

              {/* Number */}
              <div className="absolute bottom-6 right-6 z-10">
                <span className="text-5xl font-display font-bold text-white/5 group-hover:text-neon/20 transition duration-700">
                  {project.id}
                </span>
              </div>

              <Link to="/services" className="absolute inset-0 z-20" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
