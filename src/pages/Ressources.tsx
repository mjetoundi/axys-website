import React from "react";
import SectionHeader from "../components/ui/SectionHeader";
import Card from "../components/ui/Card";
import { Link } from "react-router-dom";

const tabs = [
  { label: "Tous", to: "/ressources" },
  { label: "Blog", to: "/ressources/blog" },
  { label: "Livres Blancs", to: "/ressources/livres-blancs" },
  { label: "Actualités", to: "/ressources/actualites" },
  { label: "Téléchargements", to: "/ressources/telecharges" },
];

const Ressources: React.FC = () => {
  return (
    <div className="pt-20">
      {/* Hero Section with Image */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/Services/services-hero.jpg"
            alt="Ressources"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-neutral-dark/80 via-primary/70 to-secondary/60"></div>
        </div>
        <div className="container-custom relative z-10 py-20">
          <div className="text-center max-w-4xl mx-auto text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Ressources & <span className="text-white">Insights</span>
            </h1>
            <p className="text-xl md:text-2xl opacity-90 leading-relaxed">
              Analyses, livres blancs et actualités pour éclairer vos décisions.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white white-pattern">
        <div className="container-custom">
          <SectionHeader
            eyebrow="Ressources & Insights"
            title="Découvrez nos publications"
            subtitle="Analyses, livres blancs et actualités pour éclairer vos décisions."
          />

          <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
            {tabs.map((t) => (
              <Link
                key={t.to}
                to={t.to}
                className="px-4 py-2 rounded-full border border-gray-200 text-sm font-semibold text-neutral-dark hover:border-primary hover:text-primary transition-colors"
              >
                {t.label}
              </Link>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <Card key={i} className="h-full">
                <div className="aspect-[16/9] bg-neutral-light-bg rounded-lg mb-4" />
                <div className="text-sm text-primary font-semibold mb-2">
                  Catégorie
                </div>
                <h3 className="text-xl font-semibold text-neutral-dark mb-2">
                  Titre de ressource #{i}
                </h3>
                <p className="text-neutral-gray text-sm">
                  Court extrait de la ressource pour donner envie de lire ou
                  télécharger.
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Ressources;
