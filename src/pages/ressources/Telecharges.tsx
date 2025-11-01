import React from "react";
import { motion } from "framer-motion";
import SectionHeader from "../../components/ui/SectionHeader";
import Card from "../../components/ui/Card";
import Button from "../../components/ui/Button";
import Breadcrumbs from "../../components/ui/Breadcrumbs";
import { Download, FileText, FileSpreadsheet, FileCode, CheckSquare } from "lucide-react";

const categories = ["Tous", "Templates", "Checklists", "Outils", "Modèles"];

const ressources = [
  {
    id: 1,
    title: "Template Plan Comptable PME",
    description:
      "Modèle Excel de plan comptable adapté aux PME, prêt à l'emploi avec formules automatiques et instructions.",
    type: "Template",
    format: "Excel",
    size: "250 KB",
    icon: FileSpreadsheet,
    popular: true,
  },
  {
    id: 2,
    title: "Checklist Audit Financier Complet",
    description:
      "Liste de vérification complète pour préparer et réussir un audit financier. Format PDF imprimable.",
    type: "Checklist",
    format: "PDF",
    size: "180 KB",
    icon: CheckSquare,
    popular: true,
  },
  {
    id: 3,
    title: "Modèle Dashboard KPIs Financiers",
    description:
      "Template Excel avec dashboard automatique pour suivre 20 KPIs financiers essentiels en temps réel.",
    type: "Template",
    format: "Excel",
    size: "420 KB",
    icon: FileSpreadsheet,
    popular: true,
  },
  {
    id: 4,
    title: "Calculateur ROI Externalisation RH",
    description:
      "Outil Excel pour calculer le ROI de l'externalisation de vos fonctions RH avec scénarios comparatifs.",
    type: "Outil",
    format: "Excel",
    size: "320 KB",
    icon: FileSpreadsheet,
    popular: false,
  },
  {
    id: 5,
    title: "Template Budget Prévisionnel 3 Ans",
    description:
      "Modèle de budget prévisionnel sur 3 ans avec hypothèses variables et graphiques automatiques.",
    type: "Template",
    format: "Excel",
    size: "380 KB",
    icon: FileSpreadsheet,
    popular: false,
  },
  {
    id: 6,
    title: "Checklist Conformité RGPD Comptabilité",
    description:
      "Liste de contrôle RGPD spécifique aux données comptables et financières avec actions concrètes.",
    type: "Checklist",
    format: "PDF",
    size: "210 KB",
    icon: CheckSquare,
    popular: false,
  },
  {
    id: 7,
    title: "Modèle Rapport Gestion Mensuel",
    description:
      "Template Word/PDF pour créer des rapports de gestion mensuels professionnels et percutants.",
    type: "Modèle",
    format: "Word",
    size: "150 KB",
    icon: FileText,
    popular: false,
  },
  {
    id: 8,
    title: "Calculateur Optimisation Fiscale",
    description:
      "Outil de simulation fiscale pour comparer différents scénarios d'optimisation et estimer les économies.",
    type: "Outil",
    format: "Excel",
    size: "280 KB",
    icon: FileSpreadsheet,
    popular: true,
  },
  {
    id: 9,
    title: "Checklist Due Diligence Complète",
    description:
      "Liste exhaustive pour due diligence financière, juridique et opérationnelle lors d'acquisitions.",
    type: "Checklist",
    format: "PDF",
    size: "240 KB",
    icon: CheckSquare,
    popular: false,
  },
];

const Telecharges: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = React.useState("Tous");

  const filteredRessources =
    selectedCategory === "Tous"
      ? ressources
      : ressources.filter((r) => r.type === selectedCategory);

  return (
    <div className="pt-20">
      <Breadcrumbs
        items={[
          { label: "Accueil", href: "/" },
          { label: "Ressources", href: "/ressources" },
          { label: "Téléchargements" },
        ]}
      />

      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-neutral-dark mb-6">
              Téléchargements Gratuits
            </h1>
            <p className="text-lg text-neutral-gray mb-8">
              Templates, checklists et outils pratiques pour faciliter votre
              gestion comptable, fiscale et financière
            </p>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary/10 text-secondary rounded-full text-sm font-semibold">
              <Download className="w-4 h-4" />
              {ressources.length} ressources disponibles
            </div>
          </div>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="section-padding bg-white border-b border-neutral-light-bg">
        <div className="container-custom">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-5 py-2 rounded-full font-semibold text-sm transition-all ${
                  selectedCategory === cat
                    ? "bg-primary text-white shadow-md"
                    : "bg-neutral-light-bg text-neutral-dark hover:bg-primary/10"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Resources Grid */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredRessources.map((ressource, index) => {
              const Icon = ressource.icon;
              return (
                <motion.div
                  key={ressource.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Card className="h-full flex flex-col hover:shadow-card-hover transition-all duration-300 group relative">
                    {ressource.popular && (
                      <div className="absolute -top-2 -right-2 z-10">
                        <span className="px-2 py-1 bg-secondary text-white text-xs font-bold rounded-full">
                          POPULAIRE
                        </span>
                      </div>
                    )}

                    {/* Icon */}
                    <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <Icon className="w-8 h-8 text-primary" />
                    </div>

                    {/* Type Badge */}
                    <div className="mb-3">
                      <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full">
                        {ressource.type}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-lg font-bold text-neutral-dark mb-3 group-hover:text-primary transition-colors">
                      {ressource.title}
                    </h3>

                    {/* Description */}
                    <p className="text-neutral-gray text-sm leading-relaxed mb-4 flex-grow">
                      {ressource.description}
                    </p>

                    {/* Meta Info */}
                    <div className="flex items-center justify-between text-xs text-neutral-gray mb-4 pb-4 border-b border-neutral-light-bg">
                      <div className="flex items-center gap-2">
                        <FileText className="w-3 h-3" />
                        {ressource.format}
                      </div>
                      <div>{ressource.size}</div>
                    </div>

                    {/* Download Button */}
                    <Button variant="primary" className="w-full">
                      <Download className="mr-2 w-4 h-4" />
                      Télécharger
                    </Button>
                  </Card>
                </motion.div>
              );
            })}
          </div>

          {filteredRessources.length === 0 && (
            <div className="text-center py-16">
              <p className="text-lg text-neutral-gray">
                Aucune ressource dans cette catégorie pour le moment.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-br from-neutral-light-bg to-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-neutral-dark mb-4">
              Besoin d'Outils Sur-Mesure ?
            </h2>
            <p className="text-lg text-neutral-gray mb-8">
              Nos experts peuvent créer des outils et templates personnalisés
              adaptés à vos besoins spécifiques.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="primary"
                size="lg"
                onClick={() => (window.location.href = "/contact")}
              >
                Nous contacter
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

export default Telecharges;
