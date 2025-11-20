import React from "react";
import { motion } from "framer-motion";
import PageHero from "../../components/ui/PageHero";
import SectionHeader from "../../components/ui/SectionHeader";
import Card from "../../components/ui/Card";
import Button from "../../components/ui/Button";
import Breadcrumbs from "../../components/ui/Breadcrumbs";
import {
  Building,
  Globe,
  Shield,
  FileStack,
  Network,
  Scale,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Audit Consolidé International",
    description:
      "Audit des comptes consolidés multi-entités, conformité IFRS, harmonisation des pratiques comptables à l'international.",
  },
  {
    icon: Shield,
    title: "Risk Management & Compliance",
    description:
      "Cartographie des risques, conformité réglementaire (SOX, GDPR), audit interne et contrôle permanent des processus.",
  },
  {
    icon: Network,
    title: "Restructuration & Transformation",
    description:
      "Accompagnement fusions-acquisitions, restructurations complexes, transformation digitale et optimisation organisationnelle.",
  },
  {
    icon: FileStack,
    title: "Reporting Réglementaire Avancé",
    description:
      "Reporting IFRS, liasse fiscale consolidée, documentation prix de transfert, conformité réglementations sectorielles.",
  },
];

const enterpriseCapabilities = [
  {
    title: "Équipes Dédiées Grands Comptes",
    points: [
      "Directeurs de mission seniors certifiés",
      "Équipes pluridisciplinaires 10-15 consultants",
      "Disponibilité 24/7 pour urgences",
      "Points hebdomadaires avec direction générale",
    ],
  },
  {
    title: "Méthodologie Industrielle",
    points: [
      "Process standardisés et éprouvés",
      "Outils d'audit automatisés et IA",
      "Benchmarks sectoriels internationaux",
      "Reporting temps réel via portail sécurisé",
    ],
  },
  {
    title: "Expertise Sectorielle Pointue",
    points: [
      "Industrie manufacturière et distribution",
      "Services financiers et assurance",
      "Énergie, utilities et infrastructure",
      "Santé, pharma et life sciences",
    ],
  },
];

const caseStudies = [
  {
    company: "Groupe Industriel International",
    sector: "Industrie manufacturière",
    scope: "15 filiales, 8 pays",
    challenge: "Harmonisation comptable et consolidation groupe",
    solution:
      "Audit consolidé IFRS + harmonisation référentiel + formation équipes locales",
    result: "Délai de consolidation significativement réduit, conformité IFRS totale",
  },
  {
    company: "Leader Distribution France",
    sector: "Distribution retail",
    scope: "200 points de vente",
    challenge: "Transformation digitale et optimisation supply chain",
    solution:
      "Audit processus + roadmap transformation + pilotage projet 18 mois",
    result: "Gains d'efficacité notable, ROI digital élevé sur 2 ans",
  },
];

const enterpriseMetrics = [
  { value: "Nombreux", label: "Grands comptes accompagnés" },
  { value: "Multi-pays", label: "Présence internationale" },
  { value: "Important", label: "Chiffre d'affaires audité" },
  { value: "Totale", label: "Conformité réglementaire" },
];

const GrandesEntreprises: React.FC = () => {
  return (
    <div className="pt-20">
      <Breadcrumbs
        items={[
          { label: "Accueil", href: "/" },
          { label: "Secteurs", href: "/secteurs" },
          { label: "Grandes Entreprises" },
        ]}
      />

      {/* Hero Section with Image */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/Secteurs/grandes-entreprises.jpg"
            alt="Grandes Entreprises"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-neutral-dark/85 via-primary/70 to-secondary/60"></div>
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
              <Building className="w-10 h-10 text-white" />
            </motion.div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Grandes Entreprises
            </h1>
            <p className="text-xl md:text-2xl opacity-90 leading-relaxed">
              Expertise complète des défis spécifiques aux grands groupes et organisations complexes. Solutions industrielles pour enjeux d'envergure.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Metrics Section */}
      <section className="section-padding bg-neutral-dark text-white noise-texture">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {enterpriseMetrics.map((metric, index) => (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                  {metric.value}
                </div>
                <div className="text-sm opacity-80">{metric.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Enterprise Challenges Section - Split Layout with Image */}
      <section className="section-padding bg-white white-pattern">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeader
                eyebrow="Complexité maîtrisée"
                title="Les Défis des Grandes Organisations"
                subtitle="Nous comprenons la complexité inhérente aux grands groupes"
              />
            </div>
            <div className="relative rounded-2xl overflow-hidden shadow-card-hover">
              <img
                src="/images/Services/service-audit.jpg"
                alt="Audit grandes entreprises"
                className="w-full h-64 object-cover"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
              {[
                {
                  title: "Multi-juridictions",
                  description:
                    "Conformité réglementaire dans différents pays, harmonisation des pratiques",
                },
                {
                  title: "Consolidation Complexe",
                  description:
                    "Nombreuses filiales, périmètres variables, normes comptables multiples",
                },
                {
                  title: "Gouvernance Renforcée",
                  description:
                    "Comités d'audit, commissaires aux comptes, reporting réglementaire",
                },
                {
                  title: "Risques Multiples",
                  description:
                    "Risques opérationnels, financiers, réglementaires, réputation à gérer",
                },
                {
                  title: "Transformation Continue",
                  description:
                    "Digital, organisationnel, M&A, adaptation constante des processus",
                },
                {
                  title: "Stakeholders Multiples",
                  description:
                    "Actionnaires, régulateurs, auditeurs externes, instances représentatives",
                },
              ].map((challenge, index) => (
                <motion.div
                  key={challenge.title}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="flex gap-4"
                >
                  <div className="flex-shrink-0">
                    <CheckCircle2 className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-neutral-dark mb-1">
                      {challenge.title}
                    </h3>
                    <p className="text-sm text-neutral-gray">
                      {challenge.description}
                    </p>
                  </div>
                </motion.div>
              ))}
          </div>
        </div>
      </section>

      {/* Services Section - Modern Grid Layout */}
      <section className="section-padding bg-neutral-light-bg noise-texture">
        <div className="container-custom">
          <SectionHeader
            eyebrow="Solutions entreprise"
            title="Services Grands Comptes"
            subtitle="Une offre industrielle pour répondre à vos enjeux d'échelle et de complexité"
          />

          <div className="space-y-8 mt-12">
            {/* First service with image - Full width */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0 }}
            >
              <Card className="h-full overflow-hidden p-0 hover:shadow-card-hover transition-shadow duration-300">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
                  <div className="relative h-64 md:h-auto">
                    <img
                      src="/images/Services/service-conseil.jpg"
                      alt="Audit Consolidé International"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-8 flex flex-col justify-center">
                    <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                      <Globe className="w-7 h-7 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold text-neutral-dark mb-3">
                      {services[0].title}
                    </h3>
                    <p className="text-neutral-gray leading-relaxed">
                      {services[0].description}
                    </p>
                  </div>
                </div>
              </Card>
            </motion.div>

            {/* Other services - Grid layout */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {services.slice(1).map((service, index) => {
                const Icon = service.icon;
                return (
                  <motion.div
                    key={service.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: (index + 1) * 0.1 }}
                  >
                    <Card className="h-full hover:shadow-card-hover transition-shadow duration-300 border-l-4 border-primary">
                      <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                        <Icon className="w-7 h-7 text-primary" />
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
        </div>
      </section>

      {/* Capabilities Section - Alternating Layout */}
      <section className="section-padding bg-white white-pattern">
        <div className="container-custom">
          <SectionHeader
            eyebrow="Notre approche"
            title="Pourquoi les Grands Groupes Nous Choisissent"
            subtitle="Une approche industrielle combinant expertise sectorielle et méthodologie rigoureuse"
          />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-12">
            {enterpriseCapabilities.map((capability, index) => (
              <motion.div
                key={capability.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full bg-gradient-to-br from-primary/5 to-transparent">
                  <h3 className="text-xl font-semibold text-neutral-dark mb-6">
                    {capability.title}
                  </h3>
                  <ul className="space-y-3">
                    {capability.points.map((point) => (
                      <li key={point} className="flex items-start gap-2">
                        <Scale className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-neutral-gray text-sm">
                          {point}
                        </span>
                      </li>
                    ))}
                  </ul>
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
            eyebrow="Références"
            title="Nos Succès avec des Grands Groupes"
            subtitle="Découvrez comment nous accompagnons des organisations complexes"
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12">
            {caseStudies.map((study, index) => (
              <motion.div
                key={study.company}
                initial={{ opacity: 0, x: index === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <Card className="h-full overflow-hidden p-0">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={index === 0 ? "/images/Services/service-comptabilite.jpg" : "/images/Services/service-it.jpg"}
                      alt={study.company}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-neutral-dark/80 via-neutral-dark/40 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-xl font-bold text-white mb-2">
                        {study.company}
                      </h3>
                      <div className="flex flex-wrap gap-2 text-sm">
                        <span className="px-3 py-1 bg-white/20 backdrop-blur-sm text-white font-medium rounded-full">
                          {study.sector}
                        </span>
                        <span className="px-3 py-1 bg-white/20 backdrop-blur-sm text-white font-medium rounded-full">
                          {study.scope}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="space-y-4">
                      <div>
                        <div className="text-sm font-semibold text-primary mb-2">
                          Problématique
                        </div>
                        <p className="text-neutral-gray">{study.challenge}</p>
                      </div>

                      <div>
                        <div className="text-sm font-semibold text-primary mb-2">
                          Solution Déployée
                        </div>
                        <p className="text-neutral-gray">{study.solution}</p>
                      </div>

                      <div className="pt-4 border-t border-neutral-light-bg">
                        <div className="text-sm font-semibold text-secondary mb-2">
                          ✓ Impact Mesurable
                        </div>
                        <p className="font-semibold text-neutral-dark">
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
          <div className="absolute inset-0 bg-gradient-to-br from-neutral-dark/90 via-primary/80 to-secondary/70"></div>
        </div>
        <div className="container-custom relative z-10">
          <div className="max-w-3xl mx-auto text-center text-white">
            <Building className="w-16 h-16 mx-auto mb-6 opacity-90" />
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Discutons de Vos Enjeux Groupe
            </h2>
            <p className="text-lg mb-8 opacity-90">
              Nos équipes grands comptes sont à votre disposition pour échanger
              sur vos problématiques d'audit, de consolidation ou de
              transformation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="secondary"
                size="lg"
                onClick={() => (window.location.href = "/contact")}
              >
                Prendre rendez-vous
                <ArrowRight className="ml-2 w-5 h-5" />
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

export default GrandesEntreprises;
