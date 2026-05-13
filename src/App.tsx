import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { Home } from "./pages/Home";
import { ServicesPage } from "./pages/ServicesPage";
import { PresentationPage } from "./pages/PresentationPage";
import { ContactPage } from "./pages/ContactPage";
import { RealisationsPage } from "./pages/RealisationsPage";
import { RealisationsPage2 } from "./pages/RealisationsPage2";

function AnimatedRoutes() {
  const location = useLocation();
  
  return (
    <AnimatePresence mode="wait" onExitComplete={() => window.scrollTo(0, 0)}>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/presentation" element={<PresentationPage />} />
        <Route path="/realisations" element={<RealisationsPage />} />
        <Route path="/realisations2" element={<RealisationsPage2 />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-dark text-white selection:bg-neon selection:text-black font-sans">
        <Navbar />
        <main>
          <AnimatedRoutes />
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
