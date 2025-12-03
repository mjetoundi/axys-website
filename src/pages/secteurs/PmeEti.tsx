import React from "react";
import { motion } from "framer-motion";
import PageHero from "../../components/ui/PageHero";
import SectionHeader from "../../components/ui/SectionHeader";
import Card from "../../components/ui/Card";
import Button from "../../components/ui/Button";
import Breadcrumbs from "../../components/ui/Breadcrumbs";
import {
  Building2,
  TrendingUp,
  Shield,
  Users,
  BarChart3,
  FileCheck,
  ArrowRight,
  CheckCircle,
} from "lucide-react";

const services = [
  {
    icon: FileCheck,
    title: "Audit Financier Adapté PME",
    description:
      "Audit des comptes annuels, états financiers et contrôle interne spécifiquement adapté aux enjeux des PME et ETI.",
  },
  {
    icon: TrendingUp,
    title: "Accompagnement Levée de Fonds",
    description:
      "Due diligence, valorisation, dossier investisseurs et optimisation de votre structure pour séduire les financeurs.",
  },
  {
    icon: BarChart3,
    title: "Optimisation Administrative & Fiscale",
    description:
      "Réorganisation processus, optimisation charges fiscales et sociales, amélioration rentabilité opérationnelle.",
  },
  {
    icon: Shield,
    title: "Gouvernance d'Entreprise",
    description:
      "Structuration organes de gouvernance, procédures de décision, reporting et pilotage de la performance.",
  },
];

const caseStudies = [
  {
    company: "TechPlus Distribution",
    sector: "Distribution B2B",
    size: "120 collaborateurs",
    challenge:
      "Préparation levée de fonds série A pour expansion nationale",
    solution:
      "Audit complet + restructuration capitalistique + dossier investisseurs",
    result: "Levée de fonds réussie, forte croissance du CA en 18 mois",
  },
  {
    company: "Industrie Verte SA",
    sector: "Industrie manufacturière",
    size: "250 collaborateurs",
    challenge: "Optimisation coûts et amélioration rentabilité",
    solution:
      "Audit opérationnel + réorganisation processus + optimisation fiscale",
    result:
      "Réduction notable des coûts, amélioration significative de la marge opérationnelle",
  },
  {
    company: "Services Pro Conseil",
    sector: "Services B2B",
    size: "65 collaborateurs",
    challenge: "Structuration pour passage de PME à ETI",
    solution:
      "Mise en place gouvernance + contrôle de gestion + reporting avancé",
    result: "Croissance maîtrisée, doublement effectifs en 3 ans",
  },
];

const stats = [
  { value: "Nombreuses", label: "PME & ETI accompagnées" },
  { value: "Conséquentes", label: "Levées de fonds facilitées" },
  { value: "Élevée", label: "Satisfaction clients" },
  { value: "10+ ans", label: "Expérience moyenne équipe" },
];

const PmeEti: React.FC = () => {
  return (
    <div className="pt-20">
      <Breadcrumbs
        items={[
          { label: "Accueil", href: "/" },
          { label: "Secteurs", href: "/secteurs" },
          { label: "PME & ETI" },
        ]}
      />

      {/* Hero Section with Image */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/Secteurs/pme-eti.jpg"
            alt="PME & ETI"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-primary/85 via-secondary/70 to-neutral-dark/60"></div>
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
              <Building2 className="w-10 h-10 text-white" />
            </motion.div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              PME & ETI
            </h1>
            <p className="text-xl md:text-2xl opacity-90 leading-relaxed">
              Accompagnement global des entreprises de taille moyenne en croissance. Nous maîtrisons les spécificités des PME et ETI et leurs enjeux d'accélération.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="section-padding bg-neutral-light-bg noise-texture">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-neutral-gray">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why PME & ETI Section - Image Right Layout */}
      <section className="section-padding bg-white white-pattern">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-dark mb-6">
                Les Défis Spécifiques des PME & ETI
              </h2>
              <p className="text-neutral-gray text-lg mb-6 leading-relaxed">
                Les PME et ETI font face à des enjeux uniques : croissance
                rapide à structurer, besoins de financement, optimisation de la
                rentabilité, professionnalisation de la gestion et conformité
                réglementaire accrue.
              </p>
              <p className="text-neutral-gray text-lg mb-6 leading-relaxed">
                Notre expertise sectorielle nous permet de comprendre ces
                défis et d'apporter des solutions pragmatiques, adaptées à
                votre taille et vos ambitions.
              </p>
              <div className="space-y-3">
                {[
                  "Accompagnement croissance externe et levées de fonds",
                  "Optimisation structure fiscale et sociale",
                  "Mise en place contrôle de gestion et reporting",
                  "Préparation transmission ou cession",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                    <span className="text-neutral-dark">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative rounded-2xl overflow-hidden shadow-card-hover">
              <img
                src="/images/Services/service-comptabilite.jpg"
                alt="PME ETI"
                className="w-full h-full object-cover aspect-square"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section - Alternating Layout */}
      <section className="section-padding bg-neutral-light-bg noise-texture">
        <div className="container-custom">
          <SectionHeader
            eyebrow="Nos expertises"
            title="Services Dédiés aux PME & ETI"
            subtitle="Une offre complète pour accompagner votre croissance à chaque étape"
          />

          <div className="space-y-8 mt-12">
            {services.map((service, index) => {
              const Icon = service.icon;
              const isEven = index % 2 === 0;
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="h-full overflow-hidden p-0 hover:shadow-card-hover transition-all duration-300">
                    <div className={`grid grid-cols-1 md:grid-cols-2 gap-0 ${!isEven ? 'md:flex-row-reverse' : ''}`}>
                      <div className={`relative h-64 md:h-auto ${!isEven ? 'md:order-2' : ''}`}>
                        <img
                          src={index === 0 ? "/images/Pages Services/audit-detail.jpg" : index === 1 ? "/images/Pages Services/comptabilite-detail.jpg" : index === 2 ? "/images/Pages Services/conseil-detail.jpg" : "/images/Pages Services/rh-detail.jpg"}
                          alt={service.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className={`p-8 flex flex-col justify-center ${!isEven ? 'md:order-1' : ''}`}>
                        <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                          <Icon className="w-7 h-7 text-primary" />
                        </div>
                        <h3 className="text-xl font-semibold text-neutral-dark mb-3">
                          {service.title}
                        </h3>
                        <p className="text-neutral-gray leading-relaxed">
                          {service.description}
                        </p>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Case Studies Section - Image Cards */}
      <section className="section-padding bg-white white-pattern">
        <div className="container-custom">
          <SectionHeader
            eyebrow="Cas clients"
            title="Nos Succès avec des PME & ETI"
            subtitle="Découvrez comment nous avons accompagné des entreprises comme la vôtre"
          />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-12">
            {caseStudies.map((study, index) => (
              <motion.div
                key={study.company}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full overflow-hidden p-0 hover:shadow-card-hover transition-all duration-300">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={index === 0 ? "/images/Pages Services/comptabilite-detail.jpg" : index === 1 ? "/images/Pages Services/audit-detail.jpg" : "/images/Pages Services/conseil-detail.jpg"}
                      alt={study.company}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-neutral-dark/80 via-neutral-dark/40 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-lg font-semibold text-white mb-2">
                        {study.company}
                      </h3>
                      <div className="flex gap-2 text-sm text-white/90">
                        <span>{study.sector}</span>
                        <span>•</span>
                        <span>{study.size}</span>
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="space-y-4">
                      <div>
                        <div className="text-sm font-semibold text-primary mb-1">
                          Challenge
                        </div>
                        <p className="text-sm text-neutral-gray">
                          {study.challenge}
                        </p>
                      </div>

                      <div>
                        <div className="text-sm font-semibold text-primary mb-1">
                          Solution Axys
                        </div>
                        <p className="text-sm text-neutral-gray">
                          {study.solution}
                        </p>
                      </div>

                      <div className="pt-4 border-t border-neutral-light-bg">
                        <div className="text-sm font-semibold text-secondary mb-1">
                          Résultat
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

      {/* CTA Section with Image Background */}
      <section className="section-padding relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/Contact/cta-contact.jpg"
            alt="Contact"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary/80 to-secondary/70"></div>
        </div>
        <div className="container-custom relative z-10">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Prêt à Accélérer Votre Croissance ?
            </h2>
            <p className="text-lg mb-8 opacity-90">
              Nos experts PME & ETI sont à votre disposition pour un diagnostic
              gratuit et sans engagement de vos enjeux.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="secondary"
                size="lg"
                href="/contact"
                icon={ArrowRight}
              >
                Contactez-nous
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-neutral-dark white-pattern/10"
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

export default PmeEti;
