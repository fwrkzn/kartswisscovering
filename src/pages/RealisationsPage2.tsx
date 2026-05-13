import { motion, AnimatePresence } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { TRANSITION_VARIANTS } from "../constants/animations";
import { ArrowRight, ArrowLeft, Eye } from "lucide-react";
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

interface CarouselItem {
  id: string;
  title: string;
  vehicle: string;
  film: string;
  duration: string;
  image: string;
  desc: string;
}

interface ServiceSection {
  num: string;
  title: string; // Sans accent pour la police Anton
  subtitle: string;
  desc: string;
  items: CarouselItem[];
}

const serviceSections: ServiceSection[] = [
  {
    num: "01",
    title: "COVERING INTEGRAL",
    subtitle: "TRANSFORMATION ET PROTECTION PREMIUM",
    desc: "Découvrez nos habillages complets réalisés avec une précision absolue. Chaque recoin, chaque arête est enveloppé pour un rendu visuel comparable à une peinture d'origine.",
    items: [
      {
        id: "c1",
        title: "Satin Noir Profond",
        vehicle: "BMW M4 Competition",
        film: "Orafol Premium Satin",
        duration: "4 jours",
        image: realBmw,
        desc: "Un look furtif et ultra-agressif qui souligne à merveille les lignes musclées de la calandre et des ailes.",
      },
      {
        id: "c2",
        title: "Blanc Nacré Brillant",
        vehicle: "Porsche 911 Turbo S",
        film: "Avery Dennison Pearl",
        duration: "5 jours",
        image: realPorsche,
        desc: "Finition nacrée haute brillance capturant subtilement la lumière ambiante de l'atelier pour un rendu d'une pureté exceptionnelle.",
      },
      {
        id: "c3",
        title: "Gris Métallique Satiné",
        vehicle: "Mercedes AMG GT",
        film: "3M Wrap Series 2080",
        duration: "4 jours",
        image: realMercedes,
        desc: "Un aspect métal liquide satiné conférant à ce coupé hautes performances une élégance racée et intemporelle.",
      },
      {
        id: "c4",
        title: "Vert Militaire Mat",
        vehicle: "Audi RS6 Avant",
        film: "Arlon Premium Matte",
        duration: "5 jours",
        image: realAudi,
        desc: "Un rendu mat texturé absorbant les reflets, taillé sur mesure pour le break de chasse le plus emblématique du marché.",
      },
      {
        id: "c5",
        title: "Satin Racing",
        vehicle: "Porsche 911 GT3",
        film: "Orafol High Performance",
        duration: "4 jours",
        image: covering2,
        desc: "Application millimétrée avec démontage complet des poignées, feux et bas de caisse pour une invisibilité totale de la teinte d'origine.",
      },
    ],
  },
  {
    num: "02",
    title: "VITRES TEINTEES",
    subtitle: "CONFIDENTIALITE ET PROTECTION THERMIQUE",
    desc: "Nos films solaires homologués pour vitrages automobiles rejettent la chaleur, protègent des UV et offrent un design sur mesure en parfaite conformité avec la législation suisse.",
    items: [
      {
        id: "v1",
        title: "Teinte Intégrale Arrière",
        vehicle: "Range Rover Sport",
        film: "SunTek Céramique 05%",
        duration: "1 jour",
        image: realRangeRover,
        desc: "Une occultation maximale à l'arrière garantissant intimité, sécurité des biens et un confort thermique optimal en plein été.",
      },
      {
        id: "v2",
        title: "Pack Homologué Suisse",
        vehicle: "BMW Série 3",
        film: "Llumar High Performance",
        duration: "1/2 jour",
        image: vitreteinte2,
        desc: "Respect strict des normes suisses de transmission lumineuse tout en rehaussant nettement la prestance globale de la berline.",
      },
      {
        id: "v3",
        title: "Teinte Latérale Premium",
        vehicle: "Berline de Luxe",
        film: "3M Crystalline Series",
        duration: "1 jour",
        image: vitreteinte1,
        desc: "Rejet exceptionnel des rayons infrarouges sans assombrissement excessif de l'habitacle. Finition sans micro-bulles ni découpes apparentes.",
      },
    ],
  },
  {
    num: "03",
    title: "MARQUAGE PUBLICITAIRE",
    subtitle: "METTEZ VOTRE MARQUE EN MOUVEMENT",
    desc: "De la conception graphique à la pose finale, nous transformons vos véhicules utilitaires et flottes d'entreprises en véritables vecteurs de communication puissants et mémorables.",
    items: [
      {
        id: "m1",
        title: "Branding Flotte Moderne",
        vehicle: "Utilitaire de Livraison",
        film: "Avery MPI Cast + Lamination",
        duration: "2 jours",
        image: realVan,
        desc: "Design géométrique audacieux avec nos accents vert lime signature, maximisant la visibilité de l'entreprise lors de chaque déplacement.",
      },
      {
        id: "m2",
        title: "Marquage Corporate Intégral",
        vehicle: "Camionnette Professionnelle",
        film: "Orafol Jet Series",
        duration: "2 jours",
        image: brandedVan,
        desc: "Combinaison de covering partiel et de lettrage de précision pour un rendu haut de gamme qui démarque l'entreprise de ses concurrents.",
      },
      {
        id: "m3",
        title: "Lettrage Discret et Élégant",
        vehicle: "Flotte Commerciale",
        film: "3M Scotchcal High Gloss",
        duration: "1 jour",
        image: marqpub1,
        desc: "Intégration soignée du logo et des coordonnées de l'entreprise sur les panneaux latéraux et arrière. Haute résistance aux lavages fréquents.",
      },
      {
        id: "m4",
        title: "Graphisme Sur Mesure",
        vehicle: "Fourgonnette d'Intervention",
        film: "Arlon Premium Cast",
        duration: "2 jours",
        image: marqpub2,
        desc: "Découpe numérique haute définition et habillage sur mesure épousant parfaitement les emboutis complexes de la carrosserie.",
      },
    ],
  },
  {
    num: "04",
    title: "DECHROMAGE",
    subtitle: "SUPPRESSION DES CHROMES POUR UN LOOK RACÉ",
    desc: "Le détail qui fait toute la différence. Éliminez les inserts chromés d'usine (contours de vitres, calandres, rétroviseurs, baguettes) par un habillage noir brillant ou satiné premium.",
    items: [
      {
        id: "d1",
        title: "Shadow Line Complet",
        vehicle: "Véhicule Premium Sport",
        film: "3M Gloss Black",
        duration: "1 jour",
        image: dechromage1,
        desc: "Recouvrement total des encadrements de vitrage et de la grille avant pour une esthétique moderne, épurée et résolument sportive.",
      },
      {
        id: "d2",
        title: "Déchromage des Contours",
        vehicle: "BMW Série 3 Shadow",
        film: "Orafol Deep Black Gloss",
        duration: "1/2 jour",
        image: vitreteinte2,
        desc: "Le complément idéal de la pose de vitres teintées : homogénéise le profil latéral du véhicule en supprimant toute rupture chromée.",
      },
      {
        id: "d3",
        title: "Finition Rétroviseurs et Inserts",
        vehicle: "Coupé Haut de Gamme",
        film: "Avery Dennison Carbon/Black",
        duration: "1 jour",
        image: wrapDetail,
        desc: "Travail minutieux sur les coques de rétroviseurs et les extracteurs d'air pour un contraste parfait avec la couleur principale.",
      },
    ],
  },
];

const smoothEase = [0.16, 1, 0.3, 1] as const;

function ServiceCarouselComponent({ section }: { section: ServiceSection }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const currentItem = section.items[currentIndex];

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % section.items.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + section.items.length) % section.items.length);
  };

  const handleDotClick = (index: number) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  return (
    <div className="py-24 border-b border-border">
      {/* En-tête de la section Service */}
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-6 mb-12">
        <div>
          <div className="flex items-center gap-4 mb-3">
            <span className="text-neon font-display font-bold text-3xl md:text-4xl opacity-30 leading-none">
              {section.num}
            </span>
            <div className="h-px w-12 bg-neon/40"></div>
            <span className="text-neutral-400 font-sans text-xs font-bold tracking-[0.25em] uppercase">
              {section.subtitle}
            </span>
          </div>
          <h2 className="text-4xl md:text-6xl font-display font-bold text-white uppercase tracking-tight leading-none">
            {section.title}
          </h2>
        </div>
        <p className="text-neutral-400 font-sans max-w-xl text-base leading-relaxed">
          {section.desc}
        </p>
      </div>

      {/* Conteneur principal du Carrousel */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        {/* Zone Image principale avec animation */}
        <div className="lg:col-span-8 relative aspect-[4/5] sm:aspect-square lg:aspect-[16/10] min-h-[360px] bg-surface overflow-hidden border border-border group select-none">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.img
              key={currentItem.id}
              src={currentItem.image}
              alt={currentItem.title}
              custom={direction}
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.55, ease: smoothEase }}
              className="absolute inset-0 w-full h-full object-cover will-change-[transform,opacity]"
            />
          </AnimatePresence>

          {/* Dégradé de fond de superposition */}
          <div className="absolute inset-0 bg-gradient-to-t from-dark/90 via-dark/30 to-transparent pointer-events-none" />

          {/* Tag de statut en haut à gauche */}
          <div className="absolute top-6 left-6 z-10">
            <span className="bg-black/60 border border-neon/30 text-neon text-[10px] font-sans font-bold uppercase tracking-[0.2em] px-4 py-2 backdrop-blur-md">
              PROJET {currentIndex + 1} / {section.items.length}
            </span>
          </div>

          {/* Affichage du titre du projet au bas de l'image */}
          <div className="absolute bottom-6 left-6 right-6 z-10 pointer-events-none">
            <span className="text-neon font-sans text-[11px] font-bold tracking-widest uppercase block mb-1">
              {currentItem.vehicle}
            </span>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-white uppercase leading-tight drop-shadow-md">
              {currentItem.title}
            </h3>
          </div>
        </div>

        {/* Panneau d'informations, contrôles et vignettes */}
        <div className="lg:col-span-4 flex flex-col justify-between bg-surface p-8 border border-border relative">
          <div>
            <span className="text-neutral-500 font-sans text-[10px] font-bold tracking-[0.3em] uppercase block mb-6">
              DETAILS DE L'INTERVENTION
            </span>

            {/* Description spécifique de l'élément sélectionné */}
            <AnimatePresence mode="wait">
              <motion.p
                key={currentItem.id}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.3, ease: smoothEase }}
                className="text-neutral-300 font-sans text-sm sm:text-base leading-relaxed mb-8 min-h-[5rem]"
              >
                {currentItem.desc}
              </motion.p>
            </AnimatePresence>

            {/* Grille de spécifications */}
            <div className="grid grid-cols-2 gap-y-6 gap-x-4 pt-6 border-t border-border/60 mb-8">
              <div>
                <span className="text-neutral-500 font-sans text-[10px] font-bold tracking-widest uppercase block mb-1">
                  FILM APPLIQUE
                </span>
                <span className="text-white font-sans font-medium text-xs sm:text-sm block truncate">
                  {currentItem.film}
                </span>
              </div>
              <div>
                <span className="text-neutral-500 font-sans text-[10px] font-bold tracking-widest uppercase block mb-1">
                  IMMOBILISATION
                </span>
                <span className="text-neon font-sans font-medium text-xs sm:text-sm block">
                  {currentItem.duration}
                </span>
              </div>
            </div>
          </div>

          {/* Navigation et indicateurs */}
          <div className="mt-auto pt-6 border-t border-border/60">
            {/* Boutons Suivant / Précédent */}
            <div className="flex items-center gap-3 mb-6">
              <button
                onClick={handlePrev}
                aria-label="Projet précédent"
                className="flex-1 py-3.5 bg-dark border border-border hover:border-neon/50 text-white hover:text-neon transition-all flex items-center justify-center group"
              >
                <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
              </button>
              <button
                onClick={handleNext}
                aria-label="Projet suivant"
                className="flex-1 py-3.5 bg-neon text-black hover:brightness-110 font-sans font-bold text-xs tracking-wider uppercase transition-all flex items-center justify-center gap-2 group shadow-[0_0_15px_rgba(134,239,33,0.15)]"
              >
                SUIVANT
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* Strip d'indicateurs visuels cliquables */}
            <div className="flex gap-2">
              {section.items.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => handleDotClick(idx)}
                  aria-label={`Aller au slide ${idx + 1}`}
                  className="flex-1 h-2 relative py-2 cursor-pointer group"
                >
                  <div
                    className={`absolute inset-x-0 h-1 transition-all duration-300 ${
                      idx === currentIndex
                        ? "bg-neon"
                        : "bg-neutral-800 group-hover:bg-neutral-600"
                    }`}
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function RealisationsPage2() {
  return (
    <motion.div
      variants={TRANSITION_VARIANTS.page}
      initial="pageInitial"
      animate="pageAnimate"
      exit="exit"
      className="bg-dark min-h-screen"
    >
      <Helmet>
        <title>Galerie par Services | Carrousels Interactifs | Kart Swiss Covering</title>
        <meta name="description" content="Explorez nos projets classés par domaines d'expertise via nos carrousels interactifs : Covering complet, vitres teintées, lettrage et déchromage premium." />
        <meta property="og:title" content="Carrousels Réalisations | Kart Swiss Covering" />
        <link rel="canonical" href="https://kart-swiss.ch/realisations2" />
      </Helmet>

      {/* Sub-Hero Section */}
      <section className="relative pt-48 pb-20 px-6 overflow-hidden border-b border-border">
        {/* Arrière-plan subtil */}
        <div className="absolute top-0 right-0 w-full lg:w-1/2 h-full z-0 opacity-20">
          <img
            src={covering3}
            alt="Covering premium"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-dark via-dark/80 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-dark via-transparent to-transparent"></div>
        </div>

        <div className="container mx-auto relative z-10">
          <motion.div variants={TRANSITION_VARIANTS.container} initial="hidden" animate="visible">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-neon font-sans font-bold tracking-[0.3em] text-xs uppercase block">
                VERSION ALTERNATIVE
              </span>
              <span className="bg-surface border border-border text-neutral-400 text-[9px] font-sans px-2.5 py-1 tracking-widest uppercase">
                CARROUSELS
              </span>
            </div>
            <motion.h1 variants={TRANSITION_VARIANTS.blurText} className="text-[3.375rem] md:text-[6.5rem] font-display font-bold text-white leading-[0.95] mb-6 uppercase">
              PROJETS PAR<br />
              <span className="text-neon-gradient">EXPERTISE.</span>
            </motion.h1>
            <motion.p variants={TRANSITION_VARIANTS.item} className="text-base md:text-lg text-neutral-400 font-sans max-w-2xl leading-relaxed mb-8">
              Explorez nos réalisations classées par spécialités grâce à nos galeries dynamiques interactives. Naviguez d'un projet à l'autre pour apprécier chaque détail d'intervention.
            </motion.p>
            <motion.div variants={TRANSITION_VARIANTS.item} className="flex gap-4">
              <Link to="/realisations">
                <button className="text-xs font-sans font-bold uppercase tracking-wider text-neutral-400 hover:text-white flex items-center gap-2 border border-border px-5 py-3 hover:bg-surface transition-all">
                  <Eye className="w-4 h-4 text-neon" />
                  VOIR LA GALERIE MOSAÏQUE
                </button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Conteneur des différents Carrousels de Services */}
      <section className="px-6">
        <div className="container mx-auto">
          {serviceSections.map((section) => (
            <ServiceCarouselComponent key={section.num} section={section} />
          ))}
        </div>
      </section>

      {/* Rassurance de qualité */}
      <section className="py-20 px-6 bg-surface border-b border-border">
        <div className="container mx-auto text-center max-w-3xl">
          <span className="text-neon font-sans text-xs font-bold tracking-[0.3em] uppercase block mb-4">
            L'ENGAGEMENT K'ART SWISS
          </span>
          <h3 className="text-2xl md:text-4xl font-display font-bold text-white uppercase tracking-tight mb-6">
            DES MATERIAUX CERTIFIES ET UN SAVOIR-FAIRE RECONNU
          </h3>
          <p className="text-neutral-400 font-sans text-sm md:text-base leading-relaxed">
            Chaque réalisation figurant dans nos carrousels témoigne de notre exigence constante de perfection. Nous n'employons que des gammes officielles garanties par les fabricants mondiaux de référence.
          </p>
        </div>
      </section>

      {/* Pied d'appel à l'action */}
      <section className="py-24 bg-neon">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
          <div>
            <h2 className="text-4xl md:text-6xl font-display font-bold text-black uppercase leading-[0.9] mb-4">
              INSPIRE PAR CES PROJETS ?
            </h2>
            <p className="text-black/60 font-sans font-bold uppercase tracking-widest text-sm">
              Discutons de la transformation de votre propre véhicule.
            </p>
          </div>
          <Link to="/contact">
            <button className="flex items-center gap-4 bg-black text-neon px-10 py-5 font-sans font-black uppercase tracking-tight hover:scale-105 transition-transform duration-500">
              OBTENIR MON DEVIS <ArrowRight className="w-5 h-5" />
            </button>
          </Link>
        </div>
      </section>
    </motion.div>
  );
}
