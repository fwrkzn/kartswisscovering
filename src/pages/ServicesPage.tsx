import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { TRANSITION_VARIANTS } from "../constants/animations";
import { Services } from "../components/Services";
import { ArrowRight, ChevronDown, Shield, Droplets, Thermometer } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import rangeRover from "../assets/range-rover.webp";
import vinyls from "../assets/vinyls.webp";

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      variants={TRANSITION_VARIANTS.item}
      className="border-b border-border"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between py-8 text-left group"
      >
        <span className="text-lg md:text-xl font-sans font-bold text-white group-hover:text-neon transition-colors duration-300 pr-8">
          {question}
        </span>
        <ChevronDown
          className={`w-6 h-6 text-neutral-500 group-hover:text-neon transition-all duration-500 flex-shrink-0 ${
            isOpen ? "rotate-180 text-neon" : ""
          }`}
        />
      </button>
      <motion.div
        initial={false}
        animate={{
          height: isOpen ? "auto" : 0,
          opacity: isOpen ? 1 : 0,
        }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="overflow-hidden"
      >
        <p className="text-neutral-400 font-sans leading-relaxed pb-8 max-w-2xl">
          {answer}
        </p>
      </motion.div>
    </motion.div>
  );
}

const faqData = [
  {
    q: "Combien de temps dure un covering complet ?",
    a: "Un covering complet prend généralement entre 3 et 5 jours ouvrables, selon la complexité du véhicule et le type de film choisi. Nous prenons le temps nécessaire pour garantir une finition irréprochable sur chaque panneau.",
  },
  {
    q: "Quelle est la durée de vie d'un film de covering ?",
    a: "Avec nos films premium (Orafol, Avery Dennison, 3M, Arlon), un covering bien entretenu dure entre 5 et 10 ans. La durabilité dépend de l'exposition aux éléments et de l'entretien régulier du véhicule.",
  },
  {
    q: "Le covering abîme-t-il la peinture d'origine ?",
    a: "Non, au contraire. Le film vinyle protège la peinture d'origine contre les micro-rayures, les UV et les projections. Lors du retrait, la peinture est retrouvée dans son état initial, voire mieux préservée.",
  },
  {
    q: "Les vitres teintées sont-elles légales en Suisse ?",
    a: "Oui, nous utilisons exclusivement des films homologués conformes à la législation suisse. Les vitres avant doivent laisser passer au minimum 70% de lumière. Les vitres arrière peuvent être teintées plus fortement.",
  },
  {
    q: "Proposez-vous un service de conception graphique pour le marquage ?",
    a: "Absolument. Nous travaillons avec vous depuis le concept initial jusqu'à la réalisation finale. Notre service inclut la conception graphique, la validation BAT, et la pose professionnelle sur vos véhicules.",
  },
  {
    q: "Quelles marques de films utilisez-vous ?",
    a: "Nous travaillons exclusivement avec les leaders mondiaux : Orafol, Avery Dennison, 3M et Arlon. Ces marques offrent les meilleures garanties en termes de durabilité, de rendu et de facilité de pose.",
  },
];

const processDetails = [
  {
    icon: Shield,
    title: "PROTECTION INTÉGRALE",
    text: "Chaque film agit comme une seconde peau, protégeant votre carrosserie contre les agressions quotidiennes : gravillons, insectes, sève d'arbre et rayons UV.",
  },
  {
    icon: Droplets,
    title: "ENTRETIEN SIMPLIFIÉ",
    text: "Les surfaces filmées sont hydrophobes et résistantes aux taches. Un simple lavage suffit pour retrouver l'éclat du premier jour.",
  },
  {
    icon: Thermometer,
    title: "POSE EN ATELIER CONTRÔLÉ",
    text: "Notre atelier maintient une température et une hygrométrie constantes. Cet environnement clinique élimine tout risque de poussière sous le film.",
  },
];

export function ServicesPage() {
  return (
    <motion.div
      variants={TRANSITION_VARIANTS.page}
      initial="initial"
      animate="animate"
      exit="exit"
      className="bg-dark"
    >
      <Helmet>
        <title>Nos Services | Covering, Vitres Teintées & Marquage Publicitaire | Kart Swiss</title>
        <meta name="description" content="Découvrez nos expertises premium à Yverdon : covering complet (total wrap), protection carrosserie PPF, vitres teintées homologuées et marquage publicitaire sur mesure pour entreprises." />
        <meta property="og:title" content="Services Kart Swiss | Solutions de Personnalisation Automobile" />
        <meta property="og:description" content="Transformez et protégez votre véhicule avec nos solutions de covering et d'esthétique automobile haut de gamme." />
        <link rel="canonical" href="https://kart-swiss.ch/services" />
      </Helmet>

      {/* Sub-Hero Section */}
      <section className="relative pt-48 pb-24 px-6 overflow-hidden min-h-[80vh] md:min-h-[70vh] flex items-center border-b border-border">
        <div className="absolute top-0 right-0 w-1/2 h-full z-0 opacity-30">
          <img
            src={rangeRover}
            className="w-full h-full object-cover"
            alt="Range Rover detail"
          />
          <div className="absolute inset-0 bg-gradient-to-l from-transparent to-dark"></div>
        </div>

        <div className="container mx-auto relative z-10">
          <motion.div variants={TRANSITION_VARIANTS.container} initial="hidden" animate="visible">
            <motion.span variants={TRANSITION_VARIANTS.item} className="text-neon font-sans font-bold tracking-[0.3em] mb-6 block uppercase">
              L'EXCELLENCE TECHNIQUE
            </motion.span>
            <motion.h1 variants={TRANSITION_VARIANTS.blurText} className="text-[3.375rem] md:text-[7rem] font-display font-bold text-white leading-[0.95] mb-8">
              QUATRE<br />
              <span className="text-outline">SERVICES,</span>
              <br />
              <span className="text-neon-gradient">UNE PERFECTION.</span>
            </motion.h1>
            <motion.p variants={TRANSITION_VARIANTS.item} className="text-base md:text-lg text-neutral-400 font-sans max-w-2xl leading-relaxed">
              De la protection invisible à la transformation radicale, nous repoussons les limites de l'esthétique automobile avec une précision chirurgicale.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Services Cards */}
      <Services />

      {/* Deep Dive Section | Qualité des Films */}
      <section className="py-32 px-6 border-t border-border bg-surface/20">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <motion.div
              variants={TRANSITION_VARIANTS.container}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="reveal"
            >
              <motion.span variants={TRANSITION_VARIANTS.item} className="text-neon font-display font-bold text-6xl opacity-20 block mb-4">05</motion.span>
              <motion.h2 variants={TRANSITION_VARIANTS.item} className="text-5xl md:text-7xl font-display font-bold text-white leading-tight mb-8 uppercase">
                LES FILMS LES PLUS
                <br />
                <span className="text-outline">PERFORMANTS</span> DU MARCHÉ.
              </motion.h2>
              <div className="space-y-8">
                {[
                  { t: "RÉSISTANCE EXTRÊME", d: "Protection contre les UV, le sel, et les micro-rayures." },
                  { t: "AUTO-CICATRISATION", d: "Les films PPF reprennent leur forme initiale avec la chaleur." },
                  { t: "DURABILITÉ 10 ANS", d: "Garantie officielle contre le jaunissement et le décollement." },
                ].map((item) => (
                  <motion.div variants={TRANSITION_VARIANTS.item} key={item.t} className="flex gap-6 group">
                    <div className="h-px w-12 bg-neon mt-4 group-hover:w-20 transition-all duration-500"></div>
                    <div>
                      <h4 className="text-white font-display font-bold text-xl mb-2">{item.t}</h4>
                      <p className="text-neutral-500 font-sans">{item.d}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              variants={TRANSITION_VARIANTS.item}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="reveal relative aspect-[4/5] overflow-hidden"
            >
              <img
                src={vinyls}
                className="w-full h-full object-cover"
                alt="Close up work"
              />
              <div className="absolute inset-0 border-[20px] border-dark/50 pointer-events-none"></div>
              <div className="absolute bottom-10 left-10 bg-neon p-8">
                <span className="text-black font-display font-bold text-4xl leading-none">
                  MATÉRIAUX
                  <br />
                  CERTIFIÉS
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="py-32 px-6 border-t border-border">
        <div className="container mx-auto">
          <motion.div
            variants={TRANSITION_VARIANTS.container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="reveal text-center mb-20"
          >
            <motion.span variants={TRANSITION_VARIANTS.item} className="text-neon-gradient font-sans font-bold tracking-[0.3em] mb-6 block uppercase">
              POURQUOI LE COVERING ?
            </motion.span>
            <motion.h2 variants={TRANSITION_VARIANTS.item} className="text-5xl md:text-7xl font-display font-bold text-white leading-[0.9]">
              PROTÉGER. <span className="text-outline">SUBLIMER.</span>
              <br />
              <span className="text-neon-gradient">PRÉSERVER.</span>
            </motion.h2>
          </motion.div>

          <motion.div
            variants={TRANSITION_VARIANTS.container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="reveal grid grid-cols-1 md:grid-cols-3 gap-12"
          >
            {processDetails.map((detail) => {
              const Icon = detail.icon;
              return (
                <motion.div
                  key={detail.title}
                  variants={TRANSITION_VARIANTS.card}
                  className="group p-10 border border-border bg-surface/20 hover:bg-surface/40 transition-all duration-700"
                >
                  <div className="h-16 w-16 rounded-full border border-neutral-800 flex items-center justify-center mb-8 group-hover:border-neon group-hover:bg-neon/10 transition-all duration-500">
                    <Icon className="w-7 h-7 text-neutral-600 group-hover:text-neon transition-all duration-500" />
                  </div>
                  <h3 className="text-xl font-display font-bold text-white mb-4">{detail.title}</h3>
                  <p className="text-neutral-400 font-sans leading-relaxed">{detail.text}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-32 px-6 border-t border-border bg-surface/10">
        <div className="container mx-auto">
          <motion.div
            variants={TRANSITION_VARIANTS.container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="reveal grid grid-cols-1 lg:grid-cols-12 gap-20"
          >
            <motion.div variants={TRANSITION_VARIANTS.item} className="lg:col-span-4">
              <span className="text-neon font-sans font-bold tracking-[0.3em] mb-6 block uppercase">
                FAQ
              </span>
              <h2 className="text-5xl md:text-6xl font-display font-bold text-white leading-[0.9] mb-8">
                VOS <span className="text-outline">QUESTIONS,</span>
                <br />
                NOS <span className="text-neon">RÉPONSES.</span>
              </h2>
              <p className="text-neutral-400 font-sans leading-relaxed">
                Vous avez des interrogations sur nos services, nos matériaux ou notre processus ? Retrouvez ici les réponses aux questions les plus fréquentes.
              </p>
            </motion.div>

            <motion.div
              variants={TRANSITION_VARIANTS.container}
              className="lg:col-span-8 border-t border-border"
            >
              {faqData.map((faq) => (
                <FAQItem key={faq.q} question={faq.q} answer={faq.a} />
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Call to Action Bar */}
      <section className="py-24 bg-neon">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
          <h2 className="text-4xl md:text-6xl font-display font-bold text-black uppercase leading-[0.9]">
            BESOIN D'UN CONSEIL D'EXPERT ?
          </h2>
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
