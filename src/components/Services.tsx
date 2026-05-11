import { motion } from "framer-motion";
import { TRANSITION_VARIANTS } from "../constants/animations";
import { ArrowUpRight, Check } from "lucide-react";
import { Link } from "react-router-dom";
import marqpub2 from "../assets/marqpub2.webp";
import dechromage1 from "../assets/dechromage1.webp";
import vitreteinte1 from "../assets/vitreteinte1.webp";
import covering1 from "../assets/covering1.webp";

const expertiseData = [
  {
    id: "01",
    label: "TOTAL OU PARTIEL",
    title: "COVERING",
    text: "Transformez l'apparence de votre véhicule avec un wrapping intégral ou partiel. Films vinyle haut de gamme, finitions mat, brillant, satin, métallique ou carbone.",
    points: ["Pose intégrale & partielle", "Finitions mat / brillant / satin", "Garantie pose certifiée"],
    image: covering1
  },
  {
    id: "02",
    label: "CONFORT & SÉCURITÉ",
    title: "VITRES TEINTÉES",
    text: "Films teintés homologués pour réduire la chaleur, protéger des UV et préserver votre intimité. Conformes à la législation suisse.",
    points: ["Films homologués CH", "Réduction chaleur & UV", "Protection intimité"],
    image: vitreteinte1
  },
  {
    id: "03",
    label: "VOTRE FLOTTE. VOTRE VITRINE",
    title: "MARQUAGE PUBLICITAIRE",
    text: "Lettrage, logos, covering total publicitaire pour utilitaires et flottes. Conception graphique et pose professionnelle.",
    points: ["Conception graphique", "Lettrage & logos", "Flottes utilitaires"],
    image: marqpub2
  },
  {
    id: "04",
    label: "LE DÉTAIL QUI CHANGE TOUT",
    title: "CUSTOMISATION & DÉCHROMAGE",
    text: "Déchromage des baguettes, jantes peintes au film, toit noir brillant, inserts personnalisés. Donnez du caractère à votre voiture.",
    points: ["Déchromage complet", "Toit & rétroviseurs", "Détails sur mesure"],
    image: dechromage1
  }
];

export function Services() {
  return (
    <section id="services" className="py-24 px-6 bg-dark">
      <div className="container mx-auto">
        <motion.div 
          variants={TRANSITION_VARIANTS.container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="reveal flex flex-col md:flex-row justify-between items-start gap-8 mb-20"
        >
          <div className="max-w-xl">
            <motion.span variants={TRANSITION_VARIANTS.item} className="text-neon font-sans font-bold tracking-[0.3em] mb-6 block uppercase">NOS SERVICES</motion.span>
            <motion.h2 variants={TRANSITION_VARIANTS.item} className="text-5xl md:text-7xl font-display font-bold text-white leading-[0.9]">
              QUATRE SAVOIR-FAIRE,<br />
              UN SEUL <span className="text-outline">ATELIER.</span>
            </motion.h2>
          </div>
          <motion.p variants={TRANSITION_VARIANTS.item} className="max-w-md text-neutral-400 font-sans text-lg leading-relaxed pt-4">
            Chaque chantier est mené de A à Z dans notre atelier d'Yverdon. Pose minutieuse, films premium, finition irréprochable.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {expertiseData.map((item) => (
            <motion.div 
              key={item.id}
              variants={TRANSITION_VARIANTS.card}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="reveal group relative flex flex-col border border-border bg-dark p-8 hover:bg-black transition-colors duration-500"
            >
              <Link to="/services" className="absolute inset-0 z-10" />
              
              <div className="flex justify-between items-start mb-8">
                <span className="text-4xl font-display font-bold text-neon">{item.id}</span>
                <div className="h-12 w-12 rounded-full border border-neutral-700 flex items-center justify-center group-hover:border-neon group-hover:bg-neon transition-colors duration-500">
                  <ArrowUpRight className="w-6 h-6 text-neutral-500 group-hover:text-black transition-colors duration-500" />
                </div>
              </div>

              <div className="relative aspect-video mb-8 overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className={`w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ${
                    item.id === "03" ? "object-[center_85%]" : "object-center"
                  }`}
                />
              </div>

              <span className="text-[10px] font-sans font-bold tracking-widest text-neutral-500 mb-2 uppercase">
                {item.label}
              </span>
              <h3 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
                {item.title}
              </h3>
              <p className="text-neutral-400 font-sans mb-8 leading-relaxed">
                {item.text}
              </p>

              <ul className="space-y-3 mt-auto relative z-20">
                {item.points.map((point) => (
                  <li key={point} className="flex items-center gap-3 text-sm font-sans font-medium text-neutral-300">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-neon/10 flex items-center justify-center">
                      <Check className="w-3 h-3 text-neon" />
                    </div>
                    {point}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
