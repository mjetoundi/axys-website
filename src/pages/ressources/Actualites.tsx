import React from "react";
import { motion } from "framer-motion";
import SectionHeader from "../../components/ui/SectionHeader";
import Card from "../../components/ui/Card";
import Button from "../../components/ui/Button";
import Breadcrumbs from "../../components/ui/Breadcrumbs";
import { Calendar, ArrowRight, TrendingUp } from "lucide-react";

const actualites = [
  {
    id: 1,
    title: "Axys ouvre un nouveau bureau à Lille",
    type: "Entreprise",
    date: "25 octobre 2024",
    excerpt:
      "Dans le cadre de notre développement, nous sommes fiers d'annoncer l'ouverture de notre troisième bureau à Lille pour mieux servir nos clients du Nord.",
    featured: true,
  },
  {
    id: 2,
    title: "Nouvelles Réformes Fiscales 2025 : Ce qui Change",
    type: "Réglementation",
    date: "20 octobre 2024",
    excerpt:
      "Analyse des principales modifications fiscales pour 2025 et leurs impacts sur votre entreprise. Découvrez comment anticiper ces changements.",
  },
  {
    id: 3,
    title: "Webinaire : Optimisation Fiscale PME - Replay Disponible",
    type: "Événement",
    date: "15 octobre 2024",
    excerpt:
      "Retrouvez le replay de notre webinaire sur l'optimisation fiscale pour les PME. Plus de 300 participants ont assisté à cette session enrichissante.",
  },
  {
    id: 4,
    title: "Axys Certifié ISO 9001:2015 pour la Qualité",
    type: "Entreprise",
    date: "10 octobre 2024",
    excerpt:
      "Nous sommes fiers d'annoncer notre certification ISO 9001:2015, témoignant de notre engagement envers l'excellence et la satisfaction client.",
  },
  {
    id: 5,
    title: "RGPD : Nouvelles Sanctions et Obligations 2024",
    type: "Réglementation",
    date: "5 octobre 2024",
    excerpt:
      "La CNIL renforce ses contrôles. Découvrez les nouvelles sanctions et comment assurer la conformité RGPD de votre entreprise.",
  },
  {
    id: 6,
    title: "Partenariat Stratégique avec TechCorp Solutions",
    type: "Partenariat",
    date: "28 septembre 2024",
    excerpt:
      "Axys et TechCorp Solutions s'associent pour offrir des solutions d'audit digital innovantes aux PME et startups.",
  },
  {
    id: 7,
    title: "Forum PME 2024 : Axys Partenaire Officiel",
    type: "Événement",
    date: "20 septembre 2024",
    excerpt:
      "Retrouvez-nous au Forum PME 2024 à Paris les 15-16 novembre. Inscrivez-vous pour rencontrer nos experts sur notre stand.",
  },
  {
    id: 8,
    title: "Baromètre Axys : Santé Financière des PME en 2024",
    type: "Étude",
    date: "15 septembre 2024",
    excerpt:
      "Notre étude annuelle révèle les tendances de santé financière des PME françaises. Téléchargez le rapport complet gratuitement.",
  },
];

const Actualites: React.FC = () => {
  return (
    <div className="pt-20">
      <Breadcrumbs
        items={[
          { label: "Accueil", href: "/" },
          { label: "Ressources", href: "/ressources" },
          { label: "Actualités" },
        ]}
      />

      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-neutral-dark mb-6">
              Actualités Axys
            </h1>
            <p className="text-lg text-neutral-gray">
              Restez informés de nos dernières nouvelles, événements et
              actualités réglementaires du secteur
            </p>
          </div>
        </div>
      </section>

      {/* Featured News */}
      {actualites[0] && (
        <section className="section-padding">
          <div className="container-custom">
            <div className="mb-4">
              <span className="px-3 py-1 bg-primary text-white text-xs font-semibold rounded-full">
                À LA UNE
              </span>
            </div>
            <Card className="overflow-hidden hover:shadow-card-hover transition-shadow duration-300">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="aspect-video lg:aspect-square bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg flex items-center justify-center">
                  <TrendingUp className="w-20 h-20 text-primary/30" />
                </div>
                <div className="flex flex-col justify-center">
                  <div className="mb-3">
                    <span className="px-3 py-1 bg-primary/10 text-primary text-sm font-semibold rounded-full">
                      {actualites[0].type}
                    </span>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-neutral-dark mb-4">
                    {actualites[0].title}
                  </h2>
                  <p className="text-lg text-neutral-gray mb-6 leading-relaxed">
                    {actualites[0].excerpt}
                  </p>
                  <div className="flex items-center gap-2 text-sm text-neutral-gray mb-6">
                    <Calendar className="w-4 h-4" />
                    {actualites[0].date}
                  </div>
                  <Button variant="primary" size="lg">
                    Lire la suite
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </section>
      )}

      {/* News Timeline */}
      <section className="section-padding bg-neutral-light-bg">
        <div className="container-custom">
          <SectionHeader
            title="Toutes les Actualités"
            subtitle="Chronologie de nos dernières publications"
          />

          <div className="max-w-4xl mx-auto mt-12">
            <div className="space-y-6">
              {actualites.slice(1).map((actualite, index) => (
                <motion.div
                  key={actualite.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Card className="hover:shadow-card-hover transition-all duration-300">
                    <div className="flex flex-col md:flex-row gap-6">
                      {/* Date Badge */}
                      <div className="flex-shrink-0 md:w-32 text-center md:text-left">
                        <div className="inline-flex md:flex flex-col items-center md:items-start gap-1 px-4 py-2 md:p-0">
                          <Calendar className="w-5 h-5 text-primary mb-1" />
                          <span className="text-xs text-neutral-gray">
                            {actualite.date}
                          </span>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="flex-1">
                        <div className="mb-2">
                          <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full">
                            {actualite.type}
                          </span>
                        </div>
                        <h3 className="text-xl font-bold text-neutral-dark mb-3 hover:text-primary transition-colors cursor-pointer">
                          {actualite.title}
                        </h3>
                        <p className="text-neutral-gray leading-relaxed mb-4">
                          {actualite.excerpt}
                        </p>
                        <Button variant="ghost" size="sm">
                          Lire la suite
                          <ArrowRight className="ml-2 w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* Load More */}
            <div className="text-center mt-12">
              <Button variant="outline" size="lg">
                Charger plus d'actualités
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="section-padding bg-gradient-to-br from-primary to-primary/90">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto text-center text-white">
            <h2 className="text-3xl font-bold mb-4">
              Recevez Nos Actualités par Email
            </h2>
            <p className="text-lg mb-8 opacity-90">
              Abonnez-vous à notre newsletter pour ne rien manquer de nos
              actualités et événements
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="votre@email.com"
                className="flex-1 px-4 py-3 rounded-lg text-neutral-dark focus:outline-none focus:ring-2 focus:ring-white/50"
              />
              <Button
                variant="secondary"
                size="lg"
                className="whitespace-nowrap"
              >
                S'abonner
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Actualites;
