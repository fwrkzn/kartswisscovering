import { motion, AnimatePresence } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { TRANSITION_VARIANTS } from "../constants/animations";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

// Existing assets
import covering1 from "../assets/covering1.webp";
import covering2 from "../assets/covering2.webp";
import covering3 from "../assets/covering3.webp";
import covering4 from "../assets/covering4.webp";
import covering5 from "../assets/covering5.webp";
import dechromage1 from "../assets/dechromage1.webp";
import vitreteinte1 from "../assets/vitreteinte1.webp";
import vitreteinte2 from "../assets/vitreteinte2.webp";
import marqpub1 from "../assets/marqpub1.webp";
import marqpub2 from "../assets/marqpub2.webp";
import wrapDetail from "../assets/wrap-detail.webp";
import brandedVan from "../assets/branded-van.webp";

// Generated assets
import realBmw from "../assets/real-bmw.png";
import realMercedes from "../assets/real-mercedes.png";
import realAudi from "../assets/real-audi.png";
import realPorsche from "../assets/real-porsche.png";
import realVan from "../assets/real-van.png";
import realRangeRover from "../assets/real-rangerover.png";

type Category = "TOUT" | "COVERING" | "VITRES TEINTÉES" | "MARQUAGE" | "DÉCHROMAGE";

interface Project {
  id: string;
  title: string;
  vehicle: string;
  category: Category;
  image: string;
  aspect: "portrait" | "landscape" | "square";
}

const projects: Project[] = [
  {
    id: "01",
    title: "COVERING INTÉGRAL SATIN NOIR",
    vehicle: "BMW M4 COMPETITION",
    category: "COVERING",
    image: realBmw,
    aspect: "landscape",
  },
  {
    id: "02",
    title: "COVERING INTÉGRAL SATIN",
    vehicle: "PORSCHE 911 GT3",
    category: "COVERING",
    image: covering2,
    aspect: "portrait",
  },
  {
    id: "03",
    title: "VITRES TEINTÉES INTÉGRALES",
    vehicle: "RANGE ROVER SPORT",
    category: "VITRES TEINTÉES",
    image: realRangeRover,
    aspect: "landscape",
  },
  {
    id: "04",
    title: "COVERING SATIN GRIS MÉTALLIQUE",
    vehicle: "MERCEDES AMG GT",
    category: "COVERING",
    image: realMercedes,
    aspect: "square",
  },
  {
    id: "05",
    title: "MARQUAGE FLOTTE COMPLÈTE",
    vehicle: "UTILITAIRE PROFESSIONNEL",
    category: "MARQUAGE",
    image: realVan,
    aspect: "landscape",
  },
  {
    id: "06",
    title: "COVERING VERT MILITAIRE MAT",
    vehicle: "AUDI RS6 AVANT",
    category: "COVERING",
    image: realAudi,
    aspect: "landscape",
  },
  {
    id: "07",
    title: "COVERING BLANC NACRÉ",
    vehicle: "PORSCHE 911 TURBO S",
    category: "COVERING",
    image: realPorsche,
    aspect: "square",
  },
  {
    id: "08",
    title: "DÉCHROMAGE COMPLET",
    vehicle: "VÉHICULE PREMIUM",
    category: "DÉCHROMAGE",
    image: dechromage1,
    aspect: "portrait",
  },
  {
    id: "09",
    title: "VITRES TEINTÉES HOMOLOGUÉES",
    vehicle: "BMW SÉRIE 3",
    category: "VITRES TEINTÉES",
    image: vitreteinte2,
    aspect: "landscape",
  },
  {
    id: "10",
    title: "COVERING DÉTAIL",
    vehicle: "TRAVAIL EN ATELIER",
    category: "COVERING",
    image: wrapDetail,
    aspect: "square",
  },
  {
    id: "11",
    title: "MARQUAGE PUBLICITAIRE",
    vehicle: "UTILITAIRE COMMERCIAL",
    category: "MARQUAGE",
    image: marqpub1,
    aspect: "portrait",
  },
  {
    id: "12",
    title: "COVERING INTÉGRAL",
    vehicle: "VÉHICULE SPORTIF",
    category: "COVERING",
    image: covering3,
    aspect: "landscape",
  },
  {
    id: "13",
    title: "VITRES TEINTÉES LATÉRALES",
    vehicle: "BERLINE PREMIUM",
    category: "VITRES TEINTÉES",
    image: vitreteinte1,
    aspect: "square",
  },
  {
    id: "14",
    title: "MARQUAGE VÉHICULE ENTREPRISE",
    vehicle: "CAMIONNETTE BRANDÉE",
    category: "MARQUAGE",
    image: brandedVan,
    aspect: "landscape",
  },
  {
    id: "15",
    title: "COVERING PREMIUM",
    vehicle: "VÉHICULE HAUT DE GAMME",
    category: "COVERING",
    image: covering1,
    aspect: "portrait",
  },
  {
    id: "16",
    title: "LETTRAGE ET GRAPHISME",
    vehicle: "VÉHICULE UTILITAIRE",
    category: "MARQUAGE",
    image: marqpub2,
    aspect: "landscape",
  },
  {
    id: "17",
    title: "POSE COVERING DÉTAIL",
    vehicle: "ATELIER K'ART SWISS",
    category: "COVERING",
    image: covering4,
    aspect: "square",
  },
  {
    id: "18",
    title: "COVERING COMPLET",
    vehicle: "VÉHICULE SPORT",
    category: "COVERING",
    image: covering5,
    aspect: "landscape",
  },
];

const categories: Category[] = ["TOUT", "COVERING", "VITRES TEINTÉES", "MARQUAGE", "DÉCHROMAGE"];

const smoothEase: [number, number, number, number] = [0.16, 1, 0.3, 1];

export function RealisationsPage() {
  const [activeFilter, setActiveFilter] = useState<Category>("TOUT");

  const filtered = activeFilter === "TOUT"
    ? projects
    : projects.filter((p) => p.category === activeFilter);

  return (
    <motion.div
      variants={TRANSITION_VARIANTS.page}
      initial="pageInitial"
      animate="pageAnimate"
      exit="exit"
      className="bg-dark"
    >
      <Helmet>
        <title>Nos Réalisations | Galerie de Projets | Kart Swiss Covering</title>
        <meta name="description" content="Parcourez notre galerie de réalisations : covering intégral, vitres teintées, marquage publicitaire et déchromage. Découvrez le savoir-faire Kart Swiss à travers nos projets." />
        <meta property="og:title" content="Réalisations Kart Swiss | Galerie de Covering et Personnalisation" />
        <meta property="og:description" content="Explorez nos transformations automobiles : coverings premium, vitres teintées et marquage publicitaire réalisés à Yverdon-les-Bains." />
        <link rel="canonical" href="https://kart-swiss.ch/realisations" />
      </Helmet>

      {/* Sub-Hero Section */}
      <section className="relative pt-48 pb-24 px-6 overflow-hidden min-h-[80vh] md:min-h-[70vh] flex items-center border-b border-border">
        {/* Background collage */}
        <div className="absolute top-0 right-0 w-full lg:w-2/3 h-full z-0 opacity-30">
          <img
            src={covering5}
            alt="Covering showcase"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-dark via-dark/80 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-dark via-transparent to-transparent"></div>
        </div>

        <div className="container mx-auto relative z-10">
          <motion.div variants={TRANSITION_VARIANTS.container} initial="hidden" animate="visible">
            <motion.span variants={TRANSITION_VARIANTS.item} className="text-neon font-sans font-bold tracking-[0.3em] mb-6 block uppercase">
              PORTFOLIO
            </motion.span>
            <motion.h1 variants={TRANSITION_VARIANTS.blurText} className="text-[3.375rem] md:text-[7rem] font-display font-bold text-white leading-[0.95] mb-8">
              <span className="text-outline">NOS</span><br />
              <span className="text-neon-gradient">REALISATIONS.</span>
            </motion.h1>
            <motion.p variants={TRANSITION_VARIANTS.item} className="text-base md:text-lg text-neutral-400 font-sans max-w-2xl leading-relaxed">
              Chaque véhicule est une toile, chaque projet une histoire. Parcourez nos transformations et laissez-vous inspirer par notre savoir-faire artisanal.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Stats Band */}
      <section className="py-12 px-6 border-b border-border bg-surface">
        <div className="container mx-auto">
          <motion.div
            variants={TRANSITION_VARIANTS.container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="reveal grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {[
              { value: "500+", label: "VÉHICULES TRANSFORMÉS" },
              { value: "10+", label: "ANS D'EXPÉRIENCE" },
              { value: "100%", label: "CLIENTS SATISFAITS" },
              { value: "4", label: "SPÉCIALITÉS" },
            ].map((stat) => (
              <motion.div key={stat.label} variants={TRANSITION_VARIANTS.item} className="text-center md:text-left">
                <span className="text-3xl md:text-4xl font-display font-bold text-neon block">{stat.value}</span>
                <span className="text-[10px] font-sans font-bold tracking-widest text-neutral-500 uppercase">{stat.label}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Filter Bar + Gallery */}
      <section className="py-24 md:py-32 px-6">
        <div className="container mx-auto">
          {/* Section Title */}
          <motion.div
            variants={TRANSITION_VARIANTS.container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="reveal mb-16"
          >
            <motion.span variants={TRANSITION_VARIANTS.item} className="text-neon font-sans font-bold tracking-[0.3em] mb-6 block uppercase">
              GALERIE
            </motion.span>
            <motion.h2 variants={TRANSITION_VARIANTS.item} className="text-5xl md:text-7xl font-display font-bold text-white leading-[0.9] mb-8">
              EXPLOREZ NOS<br />
              <span className="text-outline">PROJETS.</span>
            </motion.h2>
          </motion.div>

          {/* Category Filter */}
          <motion.div
            variants={TRANSITION_VARIANTS.container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="reveal flex flex-wrap gap-3 mb-16"
          >
            {categories.map((cat) => (
              <motion.button
                key={cat}
                variants={TRANSITION_VARIANTS.item}
                onClick={() => setActiveFilter(cat)}
                className={`px-6 py-3 text-[11px] font-sans font-bold uppercase tracking-[0.15em] border transition-all duration-500 ${
                  activeFilter === cat
                    ? "bg-neon text-black border-neon shadow-[0_0_20px_rgba(134,239,33,0.2)]"
                    : "bg-transparent text-neutral-400 border-border hover:text-white hover:border-neutral-600"
                }`}
              >
                {cat}
                {cat !== "TOUT" && (
                  <span className="ml-2 opacity-50">
                    ({projects.filter((p) => p.category === cat).length})
                  </span>
                )}
              </motion.button>
            ))}
          </motion.div>

          {/* Masonry-like Gallery */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeFilter}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4, ease: smoothEase }}
              className="columns-1 md:columns-2 lg:columns-3 gap-5 space-y-5"
            >
              {filtered.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, scale: 0.97 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.04,
                    ease: smoothEase,
                  }}
                  className="break-inside-avoid group relative overflow-hidden cursor-pointer"
                >
                  {/* Image */}
                  <div className={`relative overflow-hidden ${
                    project.aspect === "portrait"
                      ? "aspect-[3/4]"
                      : project.aspect === "square"
                        ? "aspect-square"
                        : "aspect-[4/3]"
                  }`}>
                    <img
                      src={project.image}
                      alt={project.title}
                      loading="lazy"
                      className="w-full h-full object-cover transition duration-700 transform-gpu will-change-transform group-hover:scale-110"
                    />

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/30 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-500" />

                    {/* Category Tag */}
                    <div className="absolute top-5 left-5 z-10">
                      <span className="bg-black/50 border border-neon/20 text-neon text-[9px] font-sans font-bold uppercase tracking-[0.2em] px-3 py-1.5 backdrop-blur-sm">
                        {project.category}
                      </span>
                    </div>

                    {/* Arrow */}
                    <div className="absolute top-5 right-5 z-10 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-500">
                      <div className="h-9 w-9 rounded-full border border-white/20 flex items-center justify-center group-hover:border-neon transition duration-500 bg-black/30 backdrop-blur-sm">
                        <ArrowUpRight className="w-4 h-4 text-white/50 group-hover:text-neon transition duration-500" />
                      </div>
                    </div>

                    {/* Bottom content */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 z-10 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                      <span className="text-[10px] font-sans font-bold tracking-widest text-neutral-500 uppercase block mb-1">
                        {project.vehicle}
                      </span>
                      <h3 className="text-lg md:text-xl font-display font-bold text-white group-hover:text-neon transition-colors duration-500 leading-tight">
                        {project.title}
                      </h3>
                    </div>

                    {/* Number */}
                    <div className="absolute bottom-4 right-5 z-10">
                      <span className="text-4xl font-display font-bold text-white/5 group-hover:text-neon/15 transition duration-700">
                        {project.id}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Results count */}
          <motion.div
            variants={TRANSITION_VARIANTS.item}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="reveal mt-12 pt-8 border-t border-border flex justify-between items-center"
          >
            <span className="text-neutral-500 font-sans text-sm">
              {filtered.length} projet{filtered.length > 1 ? "s" : ""} affiché{filtered.length > 1 ? "s" : ""}
            </span>
            <span className="text-neutral-600 font-sans text-[10px] font-bold tracking-widest uppercase">
              K'ART SWISS COVERING
            </span>
          </motion.div>
        </div>
      </section>

      {/* Featured Project — Full Width */}
      <section className="border-t border-border">
        <motion.div
          variants={TRANSITION_VARIANTS.container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="reveal"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Image Side */}
            <motion.div
              variants={TRANSITION_VARIANTS.card}
              className="relative aspect-square lg:aspect-auto overflow-hidden group"
            >
              <img
                src={realBmw}
                alt="BMW M4 Covering"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 will-change-transform"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-dark/50 lg:bg-gradient-to-r lg:from-transparent lg:to-dark"></div>
            </motion.div>

            {/* Content Side */}
            <motion.div
              variants={TRANSITION_VARIANTS.item}
              className="flex flex-col justify-center p-10 md:p-16 lg:p-20"
            >
              <span className="text-neon font-sans font-bold tracking-[0.3em] mb-4 block uppercase text-xs">
                PROJET VEDETTE
              </span>
              <span className="text-neon font-display font-bold text-7xl md:text-9xl opacity-10 block mb-4 leading-none">
                01
              </span>
              <h2 className="text-4xl md:text-5xl font-display font-bold text-white leading-[0.95] mb-6 uppercase">
                COVERING INTÉGRAL<br />
                <span className="text-outline">SATIN NOIR</span>
              </h2>
              <p className="text-neutral-400 font-sans leading-relaxed mb-4 max-w-lg">
                Transformation complète de cette BMW M4 Competition avec un film vinyle satin noir premium. Chaque panneau a été méticuleusement recouvert pour un rendu sans défaut.
              </p>
              <div className="flex flex-wrap gap-x-8 gap-y-3 mb-10 mt-4">
                {[
                  { label: "Véhicule", value: "BMW M4 Competition" },
                  { label: "Service", value: "Covering intégral" },
                  { label: "Film", value: "Orafol Satin Black" },
                  { label: "Durée", value: "4 jours" },
                ].map((detail) => (
                  <div key={detail.label}>
                    <span className="text-[10px] font-sans font-bold tracking-widest text-neutral-600 uppercase block">{detail.label}</span>
                    <span className="text-white font-sans font-medium text-sm">{detail.value}</span>
                  </div>
                ))}
              </div>
              <Link to="/contact">
                <button className="flex items-center gap-3 bg-neon px-8 py-4 text-sm font-sans font-black text-black uppercase tracking-tight hover:brightness-110 transition-all group shadow-[0_0_20px_rgba(134,239,33,0.15)] w-fit">
                  DÉMARRER VOTRE PROJET <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Process reminder strip */}
      <section className="py-20 px-6 border-t border-border bg-surface">
        <div className="container mx-auto">
          <motion.div
            variants={TRANSITION_VARIANTS.container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="reveal grid grid-cols-1 md:grid-cols-3 gap-12"
          >
            {[
              { num: "01", title: "CONSULTATION", desc: "Discussion de votre vision et analyse du véhicule." },
              { num: "02", title: "RÉALISATION", desc: "Pose experte en atelier contrôlé avec films certifiés." },
              { num: "03", title: "LIVRAISON", desc: "Contrôle qualité final et remise du véhicule sublimé." },
            ].map((step) => (
              <motion.div key={step.num} variants={TRANSITION_VARIANTS.item} className="group flex gap-6">
                <span className="text-neon font-display font-bold text-4xl opacity-30 group-hover:opacity-100 transition-opacity duration-500">
                  {step.num}
                </span>
                <div>
                  <h3 className="text-lg font-display font-bold text-white mb-2 uppercase group-hover:text-neon transition-colors duration-500">
                    {step.title}
                  </h3>
                  <p className="text-neutral-500 font-sans text-sm leading-relaxed">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Band */}
      <section className="py-24 bg-neon">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
          <div>
            <h2 className="text-4xl md:text-6xl font-display font-bold text-black uppercase leading-[0.9] mb-4">
              VOTRE PROJET COMMENCE ICI.
            </h2>
            <p className="text-black/60 font-sans font-bold uppercase tracking-widest text-sm">
              Devis gratuit sous 48h. Résultat garanti.
            </p>
          </div>
          <Link to="/contact">
            <button className="flex items-center gap-4 bg-black text-neon px-10 py-5 font-sans font-black uppercase tracking-tight hover:scale-105 transition-transform duration-500">
              NOUS CONTACTER <ArrowRight className="w-5 h-5" />
            </button>
          </Link>
        </div>
      </section>
    </motion.div>
  );
}
