import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { TRANSITION_VARIANTS } from "../constants/animations";
import { Hero } from "../components/Hero";
import { Marquee } from "../components/Marquee";
import { ServicesPreview } from "../components/ServicesPreview";
import { QualityCommitment } from "../components/QualityCommitment";
import { Transformations } from "../components/Transformations";
import { Process } from "../components/Process";
import { CTA } from "../components/CTA";

export function Home() {
  return (
    <motion.div
      variants={TRANSITION_VARIANTS.page}
      initial="pageInitial"
      animate="pageAnimate"
      exit="exit"
    >
      <Helmet>
        <title>Kart Swiss Covering | Atelier Expert en Covering & Esthétique Automobile à Yverdon</title>
        <meta name="description" content="Sublimez votre véhicule avec Kart Swiss Covering à Yverdon-les-Bains. Spécialiste en covering premium, vitres teintées homologuées, marquage publicitaire et protection de carrosserie. Qualité artisanale suisse." />
        <meta name="keywords" content="covering yverdon, covering vaud, protection carrosserie suisse, vitres teintées yverdon, marquage publicitaire suisse, lettrage véhicule vaud, ppf suisse, esthétique automobile suisse" />
        <meta property="og:title" content="Kart Swiss Covering | Atelier Expert en Esthétique Automobile" />
        <meta property="og:description" content="Atelier spécialisé en covering et personnalisation de véhicules haut de gamme à Yverdon-les-Bains, Suisse. Devis gratuit sous 48h." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://kart-swiss.ch/" />
        <meta property="og:image" content="https://kart-swiss.ch/og-image.jpg" />
        <link rel="canonical" href="https://kart-swiss.ch/" />
        
        {/* JSON-LD Local Business Data */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Kart Swiss Covering",
              "image": "https://kart-swiss.ch/logo.png",
              "@id": "https://kart-swiss.ch",
              "url": "https://kart-swiss.ch",
              "telephone": "+41762221597",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Yverdon-les-Bains",
                "addressLocality": "Yverdon-les-Bains",
                "postalCode": "1400",
                "addressCountry": "CH"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 46.7785,
                "longitude": 6.6412
              },
              "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday"
                ],
                "opens": "08:00",
                "closes": "18:00"
              },
              "sameAs": [
                "https://www.instagram.com/kart_swiss_covering"
              ],
              "priceRange": "$$"
            }
          `}
        </script>
      </Helmet>
      <Hero />
      <Marquee />
      <ServicesPreview />
      <QualityCommitment />
      <Transformations />
      <Process />
      <CTA />
    </motion.div>
  );
}
