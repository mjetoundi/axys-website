import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import ScrollToTop from "./components/ui/ScrollToTop";
import ScrollToTopOnNavigation from "./components/ui/ScrollToTopOnNavigation";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
// Service detail pages
import AuditService from "./pages/services/AuditService";
import ConseilService from "./pages/services/ConseilService";
import ExpertiseComptableService from "./pages/services/ExpertiseComptableService";
import ExternalisationRHService from "./pages/services/ExternalisationRHService";
import FiscaliteService from "./pages/services/FiscaliteService";
import SystemesInformationService from "./pages/services/SystemesInformationService";
import NotFound from "./pages/NotFound";
import Secteurs from "./pages/Secteurs";
import PmeEti from "./pages/secteurs/PmeEti";
import Startups from "./pages/secteurs/Startups";
import GrandesEntreprises from "./pages/secteurs/GrandesEntreprises";
import Organisations from "./pages/secteurs/Organisations";
import Carrieres from "./pages/Carrieres";
import EspaceClient from "./pages/EspaceClient";
import MentionsLegales from "./pages/legal/MentionsLegales";
import PolitiqueConfidentialite from "./pages/legal/PolitiqueConfidentialite";
import ConditionsUtilisation from "./pages/legal/ConditionsUtilisation";
import Cookies from "./pages/legal/Cookies";
import "./style.css";

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTopOnNavigation />
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/a-propos" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/audit" element={<AuditService />} />
            <Route path="/services/conseil" element={<ConseilService />} />
            <Route
              path="/services/expertise-comptable"
              element={<ExpertiseComptableService />}
            />
            <Route
              path="/services/externalisation-rh"
              element={<ExternalisationRHService />}
            />
            <Route path="/services/fiscalite" element={<FiscaliteService />} />
            <Route 
              path="/services/systemes-information" 
              element={<SystemesInformationService />} 
            />
            <Route path="/contact" element={<Contact />} />
            <Route path="/secteurs" element={<Secteurs />} />
            <Route path="/secteurs/pme-eti" element={<PmeEti />} />
            <Route path="/secteurs/startups" element={<Startups />} />
            <Route
              path="/secteurs/grandes-entreprises"
              element={<GrandesEntreprises />}
            />
            <Route path="/secteurs/organisations" element={<Organisations />} />
            <Route path="/carrieres" element={<Carrieres />} />
            <Route path="/espace-client" element={<EspaceClient />} />
            <Route path="/mentions-legales" element={<MentionsLegales />} />
            <Route
              path="/politique-confidentialite"
              element={<PolitiqueConfidentialite />}
            />
            <Route
              path="/conditions-utilisation"
              element={<ConditionsUtilisation />}
            />
            <Route path="/cookies" element={<Cookies />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
        <ScrollToTop />
      </div>
    </Router>
  );
};

export default App;
