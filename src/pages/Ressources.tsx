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
      <section className="section-padding bg-neutral-light-bg">
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
