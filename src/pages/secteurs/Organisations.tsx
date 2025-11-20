import React from "react";
import { motion } from "framer-motion";
import PageHero from "../../components/ui/PageHero";
import SectionHeader from "../../components/ui/SectionHeader";
import Card from "../../components/ui/Card";
import Button from "../../components/ui/Button";
import Breadcrumbs from "../../components/ui/Breadcrumbs";
import {
  Users,
  Heart,
  FileCheck2,
  Scale,
  Euro,
  BookOpen,
  ArrowRight,
  CheckCircle,
} from "lucide-react";

const services = [
  {
    icon: Euro,
    title: "Gestion Financière Associative",
    description:
      "Comptabilité associative, plan comptable adapté, gestion budgets projets, suivi subventions et dons avec justificatifs.",
  },
  {
    icon: FileCheck2,
    title: "Audit Légal & Reporting",
    description:
      "Audit commissaire aux comptes, certification comptes annuels, rapport financier pour assemblées générales et autorités.",
  },
  {
    icon: Scale,
    title: "Gouvernance Associative",
    description:
      "Structuration conseil d'administration, procédures décisionnelles, règlements intérieurs, conformité statuts et lois.",
  },
  {
    icon: BookOpen,
    title: "Subventions & Financements",
    description:
      "Dossiers de subventions publiques, mécénat d'entreprise, crowdfunding, optimisation ressources et diversification financements.",
  },
];

const associationTypes = [
  {
    type: "Associations d'Intérêt Général",
    examples: "Humanitaire, environnement, éducation, santé",
    specificities: [
      "Reçus fiscaux pour dons",
      "Exonérations fiscales",
      "Reporting rigoureux donateurs",
    ],
  },
  {
    type: "Associations Culturelles & Sportives",
    examples: "Clubs sportifs, compagnies théâtre, musées",
    specificities: [
      "Billetterie et adhésions",
      "Licences et affiliations",
      "Gestion bénévoles et salariés",
    ],
  },
  {
    type: "Fondations & Fonds de Dotation",
    examples: "Fondations familiales, corporate, recherche",
    specificities: [
      "Gestion dotation en capital",
      "Conformité fondation reconnue",
      "Reporting missions d'intérêt général",
    ],
  },
  {
    type: "Syndicats & Ordres Professionnels",
    examples: "Syndicats, associations professionnelles",
    specificities: [
      "Cotisations membres",
      "Actions collectives",
      "Représentation légale",
    ],
  },
];

const caseStudies = [
  {
    organization: "Fondation Éducation & Avenir",
    type: "Fondation reconnue d'utilité publique",
    budget: "Budget important",
    challenge:
      "Mise en conformité reporting et optimisation gestion subventions",
    solution:
      "Audit complet + restructuration comptable + formation équipe + processus subventions",
    result: "Conformité assurée, gain de temps administratif significatif, augmentation des subventions",
  },
  {
    organization: "Association Solidarité Internationale",
    type: "Association loi 1901",
    budget: "Budget moyen",
    challenge: "Professionnalisation gestion et croissance contrôlée",
    solution:
      "Mise en place comptabilité analytique + budget prévisionnel + CA conseil",
    result:
      "Visibilité financière améliorée, forte croissance en 3 ans, gouvernance renforcée",
  },
];

const associationMetrics = [
  { value: "Nombreuses", label: "Associations accompagnées" },
  { value: "Importants", label: "Budget cumulé géré" },
  { value: "Totale", label: "Conformité légale" },
  { value: "20+ ans", label: "Expertise secteur associatif" },
];

const keyBenefits = [
  "Tarification adaptée au budget associatif",
  "Compréhension enjeux secteur non-lucratif",
  "Expertise fiscalité associative et mécénat",
  "Accompagnement gouvernance et AG",
  "Reporting transparent pour membres et donateurs",
  "Formation bénévoles et équipes",
];

const Organisations: React.FC = () => {
  return (
    <div className="pt-20">
      <Breadcrumbs
        items={[
          { label: "Accueil", href: "/" },
          { label: "Secteurs", href: "/secteurs" },
          { label: "Associations & Organisations" },
        ]}
      />

      {/* Hero Section with Image */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/Secteurs/organisations.jpg"
            alt="Associations & Organisations"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-secondary/85 via-primary/70 to-neutral-dark/60"></div>
        </div>
        <div className="container-custom relative z-10 py-20">
          <motion.div
            className="max-w-4xl mx-auto text-center text-white"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              className="inline-flex items-center justify-center w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl mb-6"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Heart className="w-10 h-10 text-white" />
            </motion.div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Associations & Organisations
            </h1>
            <p className="text-xl md:text-2xl opacity-90 leading-relaxed">
              Accompagnement spécialisé des associations, fondations et organisations sans but lucratif. Nous comprenons vos enjeux de mission sociale et vos contraintes budgétaires.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Metrics Section */}
      <section className="section-padding bg-neutral-light-bg noise-texture">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {associationMetrics.map((metric, index) => (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold text-secondary mb-2">
                  {metric.value}
                </div>
                <div className="text-sm text-neutral-gray">{metric.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Associations Section - Image Left Layout */}
      <section className="section-padding bg-white white-pattern">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative rounded-2xl overflow-hidden shadow-card-hover order-2 lg:order-1">
              <img
                src="/images/Services/service-rh.jpg"
                alt="Associations"
                className="w-full h-full object-cover aspect-square"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-dark mb-6">
                Les Enjeux Spécifiques du Secteur Associatif
              </h2>
              <p className="text-neutral-gray text-lg mb-6 leading-relaxed">
                Les associations et fondations font face à des défis uniques :
                transparence vis-à-vis des donateurs, conformité réglementaire
                stricte, gestion budgets limités, justification de l'usage des
                fonds et gouvernance démocratique.
              </p>
              <p className="text-neutral-gray text-lg mb-6 leading-relaxed">
                Notre expérience du secteur associatif nous permet de vous
                accompagner avec une approche adaptée à vos contraintes
                budgétaires et vos missions d'intérêt général.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {keyBenefits.map((benefit) => (
                  <div key={benefit} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-neutral-dark">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding bg-neutral-light-bg noise-texture">
        <div className="container-custom">
          <SectionHeader
            eyebrow="Notre offre associative"
            title="Services Dédiés aux Associations"
            subtitle="Une approche complète pour la gestion financière et la gouvernance de votre organisation"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="h-full hover:shadow-card-hover transition-shadow duration-300">
                    <div className="w-14 h-14 bg-secondary/10 rounded-xl flex items-center justify-center mb-4">
                      <Icon className="w-7 h-7 text-secondary" />
                    </div>
                    <h3 className="text-xl font-semibold text-neutral-dark mb-3">
                      {service.title}
                    </h3>
                    <p className="text-neutral-gray leading-relaxed">
                      {service.description}
                    </p>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Association Types Section */}
      <section className="section-padding">
        <div className="container-custom">
          <SectionHeader
            eyebrow="Types d'organisations"
            title="Nous Accompagnons Tous Types d'Associations"
            subtitle="Expertise adaptée à chaque forme juridique et chaque mission"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
            {associationTypes.map((assocType, index) => (
              <motion.div
                key={assocType.type}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full bg-gradient-to-br from-white to-secondary/5">
                  <h3 className="text-lg font-bold text-neutral-dark mb-2">
                    {assocType.type}
                  </h3>
                  <p className="text-sm text-neutral-gray mb-4">
                    {assocType.examples}
                  </p>
                  <div className="space-y-2">
                    <div className="text-sm font-semibold text-secondary mb-2">
                      Spécificités :
                    </div>
                    {assocType.specificities.map((spec) => (
                      <div key={spec} className="flex items-start gap-2">
                        <Users className="w-4 h-4 text-secondary flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-neutral-gray">{spec}</span>
                      </div>
                    ))}
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Section - Image Cards */}
      <section className="section-padding bg-neutral-light-bg noise-texture">
        <div className="container-custom">
          <SectionHeader
            eyebrow="Témoignages"
            title="Associations qui Nous Font Confiance"
            subtitle="Découvrez comment nous aidons des associations à se professionnaliser et se développer"
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12">
            {caseStudies.map((study, index) => (
              <motion.div
                key={study.organization}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full overflow-hidden p-0 hover:shadow-card-hover transition-all duration-300">
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={index === 0 ? "/images/Pages Services/rh-detail.jpg" : "/images/Pages Services/conseil-detail.jpg"}
                      alt={study.organization}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 via-secondary/40 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-xl font-bold text-white mb-2">
                        {study.organization}
                      </h3>
                      <div className="flex flex-wrap gap-2 text-sm mb-2">
                        <span className="px-3 py-1 bg-white/20 backdrop-blur-sm text-white font-medium rounded-full">
                          {study.type}
                        </span>
                        <span className="px-3 py-1 bg-white/20 backdrop-blur-sm text-white font-medium rounded-full">
                          {study.budget}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="space-y-4">
                      <div>
                        <div className="text-sm font-semibold text-secondary mb-1">
                          Problématique
                        </div>
                        <p className="text-sm text-neutral-gray">
                          {study.challenge}
                        </p>
                      </div>

                      <div>
                        <div className="text-sm font-semibold text-secondary mb-1">
                          Solution Axys
                        </div>
                        <p className="text-sm text-neutral-gray">
                          {study.solution}
                        </p>
                      </div>

                      <div className="pt-4 border-t border-neutral-light-bg">
                        <div className="text-sm font-semibold text-primary mb-1">
                          ✓ Impact
                        </div>
                        <p className="text-sm font-semibold text-neutral-dark">
                          {study.result}
                        </p>
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing & Approach Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <SectionHeader
              title="Une Approche Adaptée au Monde Associatif"
              subtitle="Nous comprenons vos contraintes budgétaires et vos missions d'intérêt général"
            />

            <div className="mt-12 bg-gradient-to-br from-secondary/10 to-primary/5 rounded-2xl p-8 md:p-12">
              <h3 className="text-2xl font-bold text-neutral-dark mb-6 text-center">
                Tarification Spéciale Associations
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                {[
                  {
                    title: "Petites Associations",
                    budget: "Budget modeste",
                    price: "Sur mesure",
                    features: [
                      "Comptabilité courante",
                      "Comptes annuels",
                      "Support téléphone",
                    ],
                  },
                  {
                    title: "Associations Moyennes",
                    budget: "Budget moyen",
                    price: "Sur mesure",
                    features: [
                      "Compta + analytique",
                      "Budget prévisionnel",
                      "Dossiers subventions",
                      "Conseil CA",
                    ],
                  },
                  {
                    title: "Grandes Associations",
                    budget: "Budget important",
                    price: "Sur mesure",
                    features: [
                      "Accompagnement complet",
                      "Audit commissaire",
                      "Gouvernance",
                      "Formation équipes",
                    ],
                  },
                ].map((offer) => (
                  <Card
                    key={offer.title}
                    className="text-center bg-white white-pattern h-full"
                  >
                    <h4 className="font-bold text-neutral-dark mb-2">
                      {offer.title}
                    </h4>
                    <p className="text-sm text-neutral-gray mb-3">
                      {offer.budget}
                    </p>
                    <div className="text-2xl font-bold text-secondary mb-4">
                      {offer.price}
                    </div>
                    <ul className="space-y-2 text-sm text-neutral-gray">
                      {offer.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-secondary flex-shrink-0" />
                          <span className="text-left">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </Card>
                ))}
              </div>
              <p className="text-center text-neutral-gray text-sm">
                * Solutions personnalisées adaptées à vos besoins et votre budget.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section with Image Background */}
      <section className="section-padding relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/Contact/cta-contact.jpg"
            alt="Contact"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-secondary/90 via-secondary/80 to-primary/70"></div>
        </div>
        <div className="container-custom relative z-10">
          <div className="max-w-3xl mx-auto text-center text-white">
            <Heart className="w-16 h-16 mx-auto mb-6 opacity-90" />
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Accompagnons Ensemble Votre Mission
            </h2>
            <p className="text-lg mb-8 opacity-90">
              Que vous soyez une petite association ou une grande fondation,
              nous vous aidons à professionnaliser votre gestion pour mieux
              servir votre cause.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-secondary white-pattern"
                onClick={() => (window.location.href = "/contact")}
              >
                Contactez-nous
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button
                variant="ghost"
                size="lg"
                className="text-white hover:bg-white/20 hover:text-white border border-white/30 hover:border-white/50 white-pattern/10"
                onClick={() => (window.location.href = "/services")}
              >
                Nos services
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Organisations;
