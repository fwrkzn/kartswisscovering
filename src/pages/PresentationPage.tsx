import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { TRANSITION_VARIANTS } from "../constants/animations";
import { ArrowRight, Heart, Eye, Handshake, Award, Clock, Users } from "lucide-react";
import { Link } from "react-router-dom";
import artisaneImg from "../assets/artisane.webp";
import covering1 from "../assets/covering1.webp";
import covering2 from "../assets/covering2.webp";
import covering4 from "../assets/covering4.webp";

const milestones = [
  { year: "2016", title: "LES DÉBUTS", text: "Apprentissage en tant que réalisatrice publicitaire dans une entreprise locale. La découverte d'un métier qui deviendra une vocation." },
  { year: "2018", title: "SPÉCIALISATION", text: "Formations spécialisées en car-wrapping et pose de vitres teintées. La minutie et le perfectionnisme forgent une expertise reconnue." },
  { year: "2022", title: "EXPÉRIENCE CONFIRMÉE", text: "Plusieurs années d'expérience et des centaines de véhicules transformés. Une maîtrise technique qui repousse les limites du possible." },
  { year: "2024", title: "K'ART SWISS COVERING", text: "Fondation de K'Art Swiss Covering Sàrl. L'envie de relever de nouveaux défis, en toute indépendance." },
];

const values = [
  {
    icon: Heart,
    title: "PASSION",
    text: "Chaque projet est abordé avec la même flamme qu'au premier jour. La passion est le moteur de chaque geste, de chaque découpe, de chaque finition.",
  },
  {
    icon: Eye,
    title: "MINUTIE",
    text: "Le diable est dans les détails. Chaque bord, chaque courbe, chaque raccord est traité avec une précision chirurgicale pour un résultat sans compromis.",
  },
  {
    icon: Handshake,
    title: "ÉCOUTE",
    text: "Jeune, dynamique et à l'écoute. Un accompagnement personnalisé à chaque étape de votre projet, de la conception à la livraison.",
  },
  {
    icon: Award,
    title: "EXCELLENCE",
    text: "Des matériaux certifiés, un atelier contrôlé, et une exigence de qualité qui ne tolère aucun compromis. Le standard suisse, tout simplement.",
  },
  {
    icon: Clock,
    title: "RÉACTIVITÉ",
    text: "Devis sous 48h, planning clair, délais respectés. Votre temps est précieux, nous le traitons avec le même soin que votre véhicule.",
  },
  {
    icon: Users,
    title: "SUR MESURE",
    text: "Chaque véhicule est unique, chaque client aussi. Des solutions adaptées à vos besoins spécifiques, qu'il s'agisse d'un particulier ou d'une flotte.",
  },
];

export function PresentationPage() {
  return (
    <motion.div
      variants={TRANSITION_VARIANTS.page}
      initial="pageInitial"
      animate="pageAnimate"
      exit="exit"
      className="bg-dark"
    >
      <Helmet>
        <title>L'Atelier | Passion & Rigueur Suisse | Kart Swiss Covering</title>
        <meta name="description" content="Découvrez l'esprit Kart Swiss. Un atelier dédié à la perfection du détail pour vos projets de covering et protection automobile à Yverdon-les-Bains." />
        <meta property="og:title" content="Kart Swiss | L'Atelier du Covering en Suisse" />
        <link rel="canonical" href="https://kart-swiss.ch/presentation" />
      </Helmet>

      {/* Sub-Hero */}
      <section className="relative pt-48 pb-24 px-6 overflow-hidden min-h-[80vh] md:min-h-[70vh] flex items-center">
        <div className="absolute top-0 right-0 w-full lg:w-2/3 h-full z-0 opacity-40">
          <img
            src={covering4}
            alt="Porsche Profile"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-dark via-dark/80 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-dark via-transparent to-transparent"></div>
        </div>

        <div className="container mx-auto relative z-10">
          <motion.div variants={TRANSITION_VARIANTS.container} initial="hidden" animate="visible">
            <motion.span variants={TRANSITION_VARIANTS.blurText} className="text-neon font-sans font-bold tracking-[0.3em] mb-6 block uppercase">
              L'ATELIER
            </motion.span>
            <motion.h1 variants={TRANSITION_VARIANTS.blurText} className="text-[3.375rem] md:text-[7rem] font-display font-bold text-white leading-[0.95] mb-8 uppercase">
              NOTRE<br />
              <span className="text-outline">SAVOIR-</span><br />
              <span className="text-neon-gradient">FAIRE.</span>
            </motion.h1>
            <motion.p variants={TRANSITION_VARIANTS.item} className="text-base md:text-lg text-neutral-400 font-sans max-w-xl leading-relaxed">
              Un atelier indépendant dédié à la perfection du détail et à l'esthétique automobile d'exception à Yverdon-les-Bains.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* À Propos | Founder Story */}
      <section className="py-32 px-6 border-y border-border bg-dark">
        <div className="container mx-auto">
          <motion.div
            variants={TRANSITION_VARIANTS.container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="reveal grid grid-cols-1 lg:grid-cols-12 gap-20"
          >
            <motion.div variants={TRANSITION_VARIANTS.item} className="lg:col-span-5">
              <div className="relative aspect-[3/4] overflow-hidden border border-border group">
                <img 
                  src={artisaneImg} 
                  alt="Équipe Kart Swiss" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-all duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                <div className="absolute bottom-8 left-8 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-700 delay-100">
                  <span className="text-neon font-display font-bold text-2xl uppercase tracking-tight">NOTRE ATELIER</span>
                </div>
              </div>
            </motion.div>

            <motion.div variants={TRANSITION_VARIANTS.item} className="lg:col-span-7 space-y-8 flex flex-col justify-center">
              <div>
                <span className="text-neon font-display font-bold text-8xl leading-none block mb-4">01</span>
                <h2 className="text-3xl md:text-4xl font-display font-bold text-white uppercase mb-8">À PROPOS</h2>
              </div>
              <p className="text-2xl text-white font-sans font-light leading-relaxed">
                Passionnés par ce métier depuis 2016, nous avons débuté notre carrière par un apprentissage dans la réalisation publicitaire. Minutieux et perfectionnistes, nous nous sommes rapidement épanouis dans cet univers.
              </p>
              <p className="text-lg text-neutral-400 font-sans leading-relaxed">
                Forts de plusieurs années d'expérience et toujours en quête de nouvelles compétences, nous avons suivi diverses formations spécialisées, notamment en car-wrapping et en pose de vitres teintées, renforçant ainsi une expertise technique reconnue par nos pairs et nos clients.
              </p>
              <p className="text-lg text-neutral-400 font-sans leading-relaxed">
                Aujourd'hui, portés par l'envie de relever de nouveaux défis, nous avons fondé <span className="text-neon font-bold">K'Art Swiss Covering Sàrl</span>. Un atelier indépendant où chaque véhicule est traité comme une œuvre unique, avec le soin et la rigueur que seuls des artisans passionnés peuvent offerir.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-32 px-6 border-b border-border">
        <div className="container mx-auto">
          <motion.div
            variants={TRANSITION_VARIANTS.container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="reveal mb-20"
          >
            <motion.span variants={TRANSITION_VARIANTS.item} className="text-neon font-sans font-bold tracking-[0.3em] mb-6 block uppercase">
              VISION & MISSION
            </motion.span>
            <motion.h2 variants={TRANSITION_VARIANTS.item} className="text-5xl md:text-7xl font-display font-bold text-white leading-[0.9]">
              DONNER VIE À VOTRE
              <br />
              <span className="text-outline">IDENTITÉ</span> <span className="text-neon-gradient">VISUELLE.</span>
            </motion.h2>
          </motion.div>

          <motion.div
            variants={TRANSITION_VARIANTS.container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="reveal grid grid-cols-1 md:grid-cols-2 gap-px bg-border"
          >
            <motion.div variants={TRANSITION_VARIANTS.card} className="bg-dark p-12 md:p-16">
              <span className="text-neon font-display font-bold text-5xl opacity-100 block mb-6">NOTRE MISSION</span>
              <p className="text-xl text-white font-sans font-light leading-relaxed mb-6">
                Aider les entreprises à donner vie à leur identité visuelle et maximiser leur visibilité grâce à des solutions sur mesure.
              </p>
              <p className="text-neutral-400 font-sans leading-relaxed">
                Que vous soyez un particulier souhaitant sublimer son véhicule ou une entreprise cherchant à transformer sa flotte en vitrine mobile, chaque projet bénéficie du même niveau d'exigence et d'attention au détail.
              </p>
            </motion.div>

            <motion.div variants={TRANSITION_VARIANTS.card} className="bg-dark p-12 md:p-16">
              <span className="text-neon font-display font-bold text-5xl opacity-100 block mb-6">NOTRE OBJECTIF</span>
              <p className="text-xl text-white font-sans font-light leading-relaxed mb-6">
                Optimiser la communication de votre entreprise en mettant en mouvement votre image de marque.
              </p>
              <p className="text-neutral-400 font-sans leading-relaxed">
                Un véhicule covering parcourt en moyenne 30'000 km par an. C'est autant d'opportunités de marquer les esprits. Nous transformons chaque trajet en campagne publicitaire, chaque stationnement en point de contact.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Timeline / Parcours */}
      <section className="py-32 px-6 bg-dark border-b border-border">
        <div className="container mx-auto">
          <motion.div
            variants={TRANSITION_VARIANTS.container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="reveal mb-20"
          >
            <motion.span variants={TRANSITION_VARIANTS.item} className="text-neon font-sans font-bold tracking-[0.3em] mb-6 block uppercase">
              LE PARCOURS
            </motion.span>
            <motion.h2 variants={TRANSITION_VARIANTS.item} className="text-5xl md:text-7xl font-display font-bold text-white leading-[0.9]">
              D'UNE PASSION
              <br />
              <span className="text-neon-gradient">À UN ATELIER.</span>
            </motion.h2>
          </motion.div>

          <motion.div
            variants={TRANSITION_VARIANTS.container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="reveal relative"
          >
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" />

            <div className="space-y-32 md:space-y-48">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={milestone.year}
                  initial="dimmed"
                  whileInView="highlighted"
                  viewport={{ once: true, margin: "-40% 0px -40% 0px" }}
                  transition={{ duration: 0.36, ease: [0.16, 1, 0.3, 1] }}
                  variants={{
                    dimmed: { opacity: 0.2, scale: 0.98 },
                    highlighted: { opacity: 1, scale: 1 }
                  }}
                  className={`reveal relative flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-16 ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Content */}
                  <div className={`w-full md:w-1/2 pl-10 md:pl-0 ${index % 2 === 0 ? "md:text-right md:pr-16" : "md:pl-16"}`}>
                    <motion.h3 
                      variants={{
                        dimmed: { color: "#ffffff", filter: "blur(0px)" },
                        highlighted: { color: "#81e91f", filter: "drop-shadow(0 0 8px rgba(129,233,31,0.4))" }
                      }}
                      className="text-2xl md:text-3xl font-display font-bold mb-3 uppercase tracking-tight transition-colors duration-500"
                    >
                      {milestone.title}
                    </motion.h3>
                    <p className="text-lg text-neutral-400 font-sans leading-relaxed">{milestone.text}</p>
                  </div>

                  {/* Year dot with pulse effect when highlighted */}
                  <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 flex items-center justify-center z-10">
                    <motion.div 
                      variants={{
                        dimmed: { scale: 0.8, backgroundColor: "#222", boxShadow: "none" },
                        highlighted: { scale: 1.3, backgroundColor: "#81e91f", boxShadow: "0 0 40px rgba(129,233,31,0.8)" }
                      }}
                      className="w-5 h-5 rounded-full transition-colors duration-500" 
                    />
                  </div>

                  {/* Year label */}
                  <div className={`md:w-1/2 hidden md:block ${index % 2 === 0 ? "md:pl-16" : "md:pr-16 md:text-right"}`}>
                    <motion.span 
                      variants={{
                        dimmed: { color: "rgba(129, 233, 31, 0.05)" },
                        highlighted: { color: "rgba(129, 233, 31, 1)" }
                      }}
                      className="text-7xl md:text-9xl font-display font-bold transition-colors duration-500"
                    >
                      {milestone.year}
                    </motion.span>
                  </div>

                  {/* Mobile year */}
                  <span className="absolute left-10 -top-10 text-xl font-display font-bold text-neon md:hidden">{milestone.year}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Visual Showcase */}
      <section className="py-32 px-6">
        <div className="container mx-auto">
          <motion.div
            variants={TRANSITION_VARIANTS.container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="reveal mb-20"
          >
            <motion.span variants={TRANSITION_VARIANTS.item} className="text-neon font-sans font-bold tracking-[0.3em] mb-6 block uppercase">
              L'ATELIER
            </motion.span>
            <motion.h2 variants={TRANSITION_VARIANTS.item} className="text-5xl md:text-7xl font-display font-bold text-white leading-[0.9]">
              UN ENVIRONNEMENT
              <br />
              <span className="text-outline">CONTRÔLÉ.</span>
            </motion.h2>
          </motion.div>

          <motion.div
            variants={TRANSITION_VARIANTS.container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="reveal grid grid-cols-1 md:grid-cols-2 gap-12"
          >
            <motion.div
              variants={TRANSITION_VARIANTS.card}
              className="group relative overflow-hidden aspect-[4/3] bg-dark border border-border"
            >
              <img src={covering1} loading="lazy" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 will-change-transform" alt="Detail" />
              <div className="absolute inset-0 bg-gradient-to-t from-dark to-transparent opacity-80"></div>
              <div className="absolute bottom-10 left-10">
                <span className="text-neon font-display font-bold text-4xl block">SÉCURITÉ</span>
                <p className="text-neutral-400 font-sans mt-2">Démontage expert des éléments</p>
              </div>
            </motion.div>

            <motion.div
              variants={TRANSITION_VARIANTS.card}
              className="group relative overflow-hidden aspect-[4/3] bg-dark border border-border mt-12 md:mt-24"
            >
              <img src={covering2} loading="lazy" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 will-change-transform" alt="Porsche" />
              <div className="absolute inset-0 bg-gradient-to-t from-dark to-transparent opacity-80"></div>
              <div className="absolute bottom-10 left-10">
                <span className="text-neon font-display font-bold text-4xl block">ESTHÉTIQUE</span>
                <p className="text-neutral-400 font-sans mt-2">Finitions bords à bords invisibles</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Values Section | Expanded */}
      <section className="py-32 px-6 border-t border-border bg-dark">
        <div className="container mx-auto">
          <motion.div
            variants={TRANSITION_VARIANTS.container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="reveal mb-20"
          >
            <motion.span variants={TRANSITION_VARIANTS.item} className="text-neon font-sans font-bold tracking-[0.3em] mb-6 block uppercase">
              NOS VALEURS
            </motion.span>
            <motion.h2 variants={TRANSITION_VARIANTS.item} className="text-5xl md:text-7xl font-display font-bold text-white leading-[0.9]">
              CE QUI NOUS
              <br />
              <span className="text-outline">ANIME.</span>
            </motion.h2>
          </motion.div>

          <motion.div
            variants={TRANSITION_VARIANTS.container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="reveal grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12"
          >
            {values.map((val) => {
              const Icon = val.icon;
              return (
                <motion.div
                  key={val.title}
                  variants={TRANSITION_VARIANTS.card}
                  className="group p-10 border border-border bg-dark hover:bg-black transition-colors duration-500"
                >
                  <div className="h-14 w-14 rounded-full border border-neutral-800 flex items-center justify-center mb-8 group-hover:border-neon group-hover:bg-neon/10 transition-colors duration-500">
                    <Icon className="w-6 h-6 text-neutral-600 group-hover:text-neon transition-colors duration-500" />
                  </div>
                  <h3 className="text-xl font-display font-bold text-white mb-4 group-hover:text-neon transition-colors duration-500">{val.title}</h3>
                  <p className="text-neutral-400 font-sans leading-relaxed">{val.text}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* CTA Band */}
      <section className="py-24 bg-neon text-black">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
          <div>
            <h2 className="text-4xl md:text-6xl font-display font-bold text-black uppercase leading-[0.9] mb-4">
              PRÊT À DÉMARRER ?
            </h2>
            <p className="text-black/60 font-sans font-bold uppercase tracking-widest text-sm">
              Un suivi personnalisé, une réalisation à la hauteur de vos attentes.
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
