import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { TRANSITION_VARIANTS } from "../constants/animations";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import marqpub2 from "../assets/marqpub2.webp";

export function ContactPage() {
  return (
    <motion.div
      variants={TRANSITION_VARIANTS.page}
      initial="pageInitial"
      animate="pageAnimate"
      exit="exit"
      className="bg-dark"
    >
      <Helmet>
        <title>Contact & Devis Gratuit | Kart Swiss Covering Yverdon</title>
        <meta name="description" content="Prêt pour une transformation ? Demandez votre devis personnalisé gratuit sous 48h. Atelier expert en covering et protection carrosserie à Yverdon-les-Bains." />
        <meta property="og:title" content="Contactez Kart Swiss | Devis Covering & Vitres Teintées" />
        <meta property="og:description" content="Réalisation de vos projets de personnalisation automobile en Suisse. Réponse rapide et travail de précision." />
        <link rel="canonical" href="https://kart-swiss.ch/contact" />
      </Helmet>
      {/* Sub-Hero Contact */}
      <section className="relative pt-32 md:pt-48 pb-12 md:pb-24 px-6 overflow-hidden min-h-[25vh] md:min-h-[70vh] flex items-center">
        {/* Background Image with Gradient Overlay */}
        <div className="absolute top-0 right-0 w-full lg:w-2/3 h-full z-0 opacity-40">
          <img 
            src={marqpub2} 
            alt="Garage detail" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-dark via-dark/80 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-dark via-transparent to-transparent"></div>
        </div>

        <div className="container mx-auto relative z-10">
          <motion.div variants={TRANSITION_VARIANTS.container} initial="hidden" animate="visible">
            <motion.span variants={TRANSITION_VARIANTS.item} className="text-neon font-sans font-bold tracking-[0.3em] mb-6 block uppercase">
              DEVIS GRATUIT SOUS 48H
            </motion.span>
            <motion.h1 variants={TRANSITION_VARIANTS.blurText} className="text-[2.5rem] md:text-[7rem] font-display font-bold text-white leading-[0.95] mb-8 uppercase">
              PRÊT À<br />
              <span className="text-outline">MARQUER</span><br />
              <span className="text-neon-gradient">L'ESPRIT ?</span>
            </motion.h1>
          </motion.div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-24 border-t border-border">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
            
            {/* Left: Info */}
            <div className="lg:col-span-5 space-y-20">
              <div className="space-y-12">
                {[
                  { 
                    icon: Phone, 
                    label: "TÉLÉPHONE", 
                    val: "+41 76 222 15 97", 
                    href: "tel:+41762221597",
                    n: "01" 
                  },
                  { 
                    icon: Mail, 
                    label: "EMAIL", 
                    val: "info@kartswisscovering.ch", 
                    href: "mailto:info@kartswisscovering.ch",
                    n: "02" 
                  },
                  { 
                    icon: MapPin, 
                    label: "ADRESSE", 
                    val: "Yverdon-les-Bains, Suisse", 
                    href: "https://www.google.com/maps/search/Yverdon-les-Bains",
                    n: "03" 
                  }
                ].map((item) => (
                  <motion.div 
                    key={item.n}
                    variants={TRANSITION_VARIANTS.item}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="reveal flex items-start gap-8 group"
                  >
                  <span className="text-4xl font-display font-bold text-neon-gradient opacity-20 group-hover:opacity-100 transition-opacity duration-500">{item.n}</span>
                    <a href={item.href} target={item.href.startsWith("http") ? "_blank" : undefined} rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}>
                      <span className="block text-[10px] text-neutral-500 font-bold uppercase tracking-[0.3em] mb-2">{item.label}</span>
                      <span className="text-2xl text-white font-display font-bold uppercase tracking-tight group-hover:text-neon-gradient transition-colors duration-300">{item.val}</span>
                    </a>
                  </motion.div>
                ))}
              </div>

               <div className="p-10 bg-dark border-l-4 border-neon">
                <h3 className="text-white font-display font-bold text-2xl mb-4 uppercase tracking-tight">HORAIRES</h3>
                <p className="text-neon font-sans font-black text-xl uppercase tracking-widest">
                  UNIQUEMENT SUR RENDEZ-VOUS
                </p>
                <p className="text-neutral-500 font-sans text-sm mt-4 leading-relaxed">
                  Nous vous accueillons dans notre atelier d'Yverdon-les-Bains pour toute étude de projet ou réalisation.
                </p>
              </div>
            </div>

            {/* Right: Form */}
            <div className="lg:col-span-7">
              <motion.div 
                variants={TRANSITION_VARIANTS.card}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="reveal bg-dark p-12 border border-border relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 p-4 opacity-5">
                   <Send className="w-64 h-64 -rotate-12" />
                </div>

                <form className="relative z-10 space-y-10">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    <div className="space-y-2">
                      <label className="text-[10px] text-neutral-500 font-bold uppercase tracking-[0.3em]">NOM COMPLET</label>
                      <input type="text" className="w-full bg-transparent border-b border-neutral-800 py-4 text-white focus:outline-none focus:border-neon transition-colors font-sans text-lg" placeholder="EX: JEAN DUPONT" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] text-neutral-500 font-bold uppercase tracking-[0.3em]">VOTRE EMAIL</label>
                      <input type="email" className="w-full bg-transparent border-b border-neutral-800 py-4 text-white focus:outline-none focus:border-neon transition-colors font-sans text-lg" placeholder="EX: JEAN@EMAIL.COM" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    <div className="space-y-2">
                      <label className="text-[10px] text-neutral-500 font-bold uppercase tracking-[0.3em]">VÉHICULE</label>
                      <input type="text" className="w-full bg-transparent border-b border-neutral-800 py-4 text-white focus:outline-none focus:border-neon transition-colors font-sans text-lg" placeholder="EX: PORSCHE 911 GT3" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] text-neutral-500 font-bold uppercase tracking-[0.3em]">PRESTATION</label>
                      <select className="w-full bg-transparent border-b border-neutral-800 py-4 text-white focus:outline-none focus:border-neon transition-colors font-sans text-lg appearance-none uppercase">
                        <option className="bg-dark">Covering Complet</option>
                        <option className="bg-dark">Vitres Teintées</option>
                        <option className="bg-dark">Marquage Publicitaire</option>
                        <option className="bg-dark">Customisation / Déchromage</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <label className="text-[10px] text-neutral-500 font-bold uppercase tracking-[0.3em]">PHOTO DU VÉHICULE (OPTIONNEL)</label>
                    <div className="relative group">
                      <input 
                        type="file" 
                        multiple
                        accept="image/png, image/jpeg, image/jpg, image/heic, image/webp"
                        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                      />
                      <div className="w-full bg-dark border border-dashed border-neutral-800 p-6 text-center group-hover:border-neon transition-colors duration-500">
                        <span className="text-neutral-500 font-sans text-xs group-hover:text-neon transition-colors uppercase tracking-[0.2em] font-bold">
                          Cliquez ou glissez vos images (PNG, JPG, HEIC, WEBP)
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] text-neutral-500 font-bold uppercase tracking-[0.3em]">VOTRE MESSAGE</label>
                    <textarea rows={4} className="w-full bg-transparent border-b border-neutral-800 py-4 text-white focus:outline-none focus:border-neon transition-colors font-sans text-lg resize-none" placeholder="DÉCRIVEZ VOTRE PROJET EN QUELQUES MOTS..."></textarea>
                  </div>

                  <button className="w-full group flex items-center justify-center gap-4 bg-neon py-6 text-black font-sans font-black text-xl uppercase tracking-tight hover:brightness-110 transition-all shadow-[0_0_30px_rgba(68,128,27,0.1)]">
                    ENVOYER LA DEMANDE <Send className="w-6 h-6 group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform duration-500" />
                  </button>
                </form>
              </motion.div>
            </div>

          </div>
        </div>
      </section>
    </motion.div>
  );
}
