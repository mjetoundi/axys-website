import React, { useState } from "react";
import { motion } from "framer-motion";
import SectionHeader from "../../components/ui/SectionHeader";
import Card from "../../components/ui/Card";
import Button from "../../components/ui/Button";
import Breadcrumbs from "../../components/ui/Breadcrumbs";
import { Download, FileText, X, Check } from "lucide-react";

const livresBlancs = [
  {
    id: 1,
    title: "Guide Complet de l'Audit Financier PME 2024",
    description:
      "Tout ce que vous devez savoir sur l'audit financier pour les PME : méthodologie, étapes clés, préparation et bonnes pratiques.",
    pages: 32,
    category: "Audit",
    popular: true,
  },
  {
    id: 2,
    title: "Optimisation Fiscale pour Entreprises: Stratégies Légales",
    description:
      "Découvrez les 15 stratégies d'optimisation fiscale légales qui peuvent réduire votre charge fiscale jusqu'à 30%.",
    pages: 28,
    category: "Fiscalité",
    popular: true,
  },
  {
    id: 3,
    title: "Externalisation RH: Guide Pratique et ROI",
    description:
      "Comment réussir l'externalisation de vos fonctions RH, calculer le ROI et éviter les pièges courants.",
    pages: 24,
    category: "RH",
    popular: false,
  },
  {
    id: 4,
    title: "Transition Comptabilité Digitale: Roadmap Complète",
    description:
      "Plan d'action étape par étape pour digitaliser votre comptabilité et gagner 15h par mois.",
    pages: 36,
    category: "Comptabilité",
    popular: true,
  },
  {
    id: 5,
    title: "Contrôle de Gestion: Dashboard KPIs Essentiels",
    description:
      "Les 20 KPIs critiques à suivre pour piloter votre entreprise et modèles de dashboards prêts à l'emploi.",
    pages: 18,
    category: "Conseil",
    popular: false,
  },
  {
    id: 6,
    title: "Conformité RGPD en Finance: Checklist Complète",
    description:
      "Guide pratique pour mettre en conformité RGPD vos processus comptables et financiers.",
    pages: 22,
    category: "Comptabilité",
    popular: false,
  },
  {
    id: 7,
    title: "Levée de Fonds: Dossier Investisseurs Parfait",
    description:
      "Template complet et conseils d'experts pour créer un dossier investisseurs qui convertit.",
    pages: 40,
    category: "Conseil",
    popular: true,
  },
  {
    id: 8,
    title: "Paie et Social: Guide des Obligations 2024",
    description:
      "Toutes les obligations légales en matière de paie et gestion sociale mises à jour pour 2024.",
    pages: 30,
    category: "RH",
    popular: false,
  },
];

const LivresBlancs: React.FC = () => {
  const [selectedLivre, setSelectedLivre] = useState<typeof livresBlancs[0] | null>(null);
  const [formData, setFormData] = useState({
    nom: "",
    email: "",
    entreprise: "",
    fonction: "",
  });
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  const handleDownload = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate download
    setDownloadSuccess(true);
    setTimeout(() => {
      setDownloadSuccess(false);
      setSelectedLivre(null);
      setFormData({ nom: "", email: "", entreprise: "", fonction: "" });
    }, 2000);
  };

  return (
    <div className="pt-20">
      <Breadcrumbs
        items={[
          { label: "Accueil", href: "/" },
          { label: "Ressources", href: "/ressources" },
          { label: "Livres Blancs" },
        ]}
      />

      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-secondary/10 to-primary/10">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-neutral-dark mb-6">
              Livres Blancs & Guides Pratiques
            </h1>
            <p className="text-lg text-neutral-gray mb-8">
              Téléchargez gratuitement nos guides d'experts pour approfondir vos
              connaissances en audit, fiscalité, comptabilité et gestion
              d'entreprise.
            </p>
            <div className="flex items-center justify-center gap-6 text-sm">
              <div className="flex items-center gap-2">
                <Check className="w-5 h-5 text-secondary" />
                <span className="text-neutral-gray">100% gratuit</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-5 h-5 text-secondary" />
                <span className="text-neutral-gray">Expertise certifiée</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-5 h-5 text-secondary" />
                <span className="text-neutral-gray">Actionnable</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Livres Blancs Grid */}
      <section className="section-padding">
        <div className="container-custom">
          <SectionHeader
            title="Nos Ressources Téléchargeables"
            subtitle="Guides complets rédigés par nos experts pour vous accompagner"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {livresBlancs.map((livre, index) => (
              <motion.div
                key={livre.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <Card className="h-full flex flex-col hover:shadow-card-hover transition-all duration-300 group relative">
                  {livre.popular && (
                    <div className="absolute -top-3 -right-3 z-10">
                      <span className="px-3 py-1 bg-secondary text-white text-xs font-bold rounded-full shadow-md">
                        POPULAIRE
                      </span>
                    </div>
                  )}

                  {/* Document Icon */}
                  <div className="w-20 h-20 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <FileText className="w-10 h-10 text-primary" />
                  </div>

                  {/* Category Badge */}
                  <div className="mb-3">
                    <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full">
                      {livre.category}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-neutral-dark mb-3 group-hover:text-primary transition-colors">
                    {livre.title}
                  </h3>

                  {/* Description */}
                  <p className="text-neutral-gray text-sm leading-relaxed mb-4 flex-grow">
                    {livre.description}
                  </p>

                  {/* Meta Info */}
                  <div className="flex items-center justify-between text-xs text-neutral-gray mb-4 pb-4 border-b border-neutral-light-bg">
                    <div className="flex items-center gap-1">
                      <FileText className="w-4 h-4" />
                      {livre.pages} pages
                    </div>
                    <div>PDF</div>
                  </div>

                  {/* Download Button */}
                  <Button
                    variant="primary"
                    className="w-full"
                    onClick={() => setSelectedLivre(livre)}
                  >
                    <Download className="mr-2 w-4 h-4" />
                    Télécharger gratuitement
                  </Button>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Download Modal */}
      {selectedLivre && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto"
          >
            <div className="p-6">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h2 className="text-2xl font-bold text-neutral-dark mb-2">
                    {downloadSuccess ? "Téléchargement en cours..." : "Télécharger le Guide"}
                  </h2>
                  <p className="text-neutral-gray text-sm">
                    {downloadSuccess
                      ? "Votre livre blanc va être téléchargé"
                      : "Remplissez le formulaire pour recevoir votre livre blanc"}
                  </p>
                </div>
                <button
                  onClick={() => {
                    setSelectedLivre(null);
                    setDownloadSuccess(false);
                  }}
                  className="text-neutral-gray hover:text-neutral-dark transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {downloadSuccess ? (
                <div className="text-center py-12">
                  <div className="w-20 h-20 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Check className="w-10 h-10 text-secondary" />
                  </div>
                  <h3 className="text-xl font-bold text-neutral-dark mb-2">
                    Merci !
                  </h3>
                  <p className="text-neutral-gray">
                    Le téléchargement va commencer automatiquement...
                  </p>
                </div>
              ) : (
                <>
                  {/* Selected Book Info */}
                  <div className="bg-neutral-light-bg rounded-lg p-4 mb-6">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                        <FileText className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-neutral-dark">
                          {selectedLivre.title}
                        </h3>
                        <p className="text-xs text-neutral-gray">
                          {selectedLivre.pages} pages • PDF • {selectedLivre.category}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Download Form */}
                  <form onSubmit={handleDownload} className="space-y-4">
                    <div>
                      <label className="block text-sm font-semibold text-neutral-dark mb-2">
                        Nom complet *
                      </label>
                      <input
                        type="text"
                        value={formData.nom}
                        onChange={(e) =>
                          setFormData({ ...formData, nom: e.target.value })
                        }
                        className="w-full px-4 py-3 border border-neutral-light-bg rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
                        placeholder="Jean Dupont"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-neutral-dark mb-2">
                        Email professionnel *
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        className="w-full px-4 py-3 border border-neutral-light-bg rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
                        placeholder="jean.dupont@entreprise.com"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-neutral-dark mb-2">
                        Entreprise *
                      </label>
                      <input
                        type="text"
                        value={formData.entreprise}
                        onChange={(e) =>
                          setFormData({ ...formData, entreprise: e.target.value })
                        }
                        className="w-full px-4 py-3 border border-neutral-light-bg rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
                        placeholder="Nom de votre entreprise"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-neutral-dark mb-2">
                        Fonction
                      </label>
                      <select
                        value={formData.fonction}
                        onChange={(e) =>
                          setFormData({ ...formData, fonction: e.target.value })
                        }
                        className="w-full px-4 py-3 border border-neutral-light-bg rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
                      >
                        <option value="">Sélectionner...</option>
                        <option>Directeur Général</option>
                        <option>DAF / Directeur Financier</option>
                        <option>Responsable Comptable</option>
                        <option>Responsable RH</option>
                        <option>Contrôleur de Gestion</option>
                        <option>Autre</option>
                      </select>
                    </div>

                    <div className="flex items-start gap-2 pt-2">
                      <input
                        type="checkbox"
                        id="consent"
                        className="mt-1"
                        required
                      />
                      <label
                        htmlFor="consent"
                        className="text-xs text-neutral-gray"
                      >
                        J'accepte de recevoir des communications d'Axys
                        concernant leurs services et ressources. Je peux me
                        désabonner à tout moment.{" "}
                        <a
                          href="/politique-confidentialite"
                          className="text-primary hover:underline"
                        >
                          Politique de confidentialité
                        </a>
                      </label>
                    </div>

                    <Button variant="primary" size="lg" className="w-full" type="submit">
                      <Download className="mr-2 w-5 h-5" />
                      Télécharger maintenant
                    </Button>

                    <p className="text-xs text-center text-neutral-gray">
                      En téléchargeant, vous acceptez nos conditions
                      d'utilisation
                    </p>
                  </form>
                </>
              )}
            </div>
          </motion.div>
        </div>
      )}

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-br from-primary/10 to-secondary/5">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-neutral-dark mb-4">
              Besoin d'un Accompagnement Personnalisé ?
            </h2>
            <p className="text-lg text-neutral-gray mb-8">
              Nos experts sont à votre disposition pour vous conseiller et vous
              accompagner dans vos projets.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="primary"
                size="lg"
                onClick={() => (window.location.href = "/contact")}
              >
                Prendre rendez-vous
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => (window.location.href = "/services")}
              >
                Découvrir nos services
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LivresBlancs;
