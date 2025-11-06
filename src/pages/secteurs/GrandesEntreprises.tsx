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

      <PageHero
        icon={<Building className="w-8 h-8 text-white" />}
        title="Grandes Entreprises"
        subtitle="Expertise complète des défis spécifiques aux grands groupes et organisations complexes. Solutions industrielles pour enjeux d'envergure."
      />

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

      {/* Enterprise Challenges Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <SectionHeader
              eyebrow="Complexité maîtrisée"
              title="Les Défis des Grandes Organisations"
              subtitle="Nous comprenons la complexité inhérente aux grands groupes"
            />

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
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding bg-neutral-light-bg noise-texture">
        <div className="container-custom">
          <SectionHeader
            eyebrow="Solutions entreprise"
            title="Services Grands Comptes"
            subtitle="Une offre industrielle pour répondre à vos enjeux d'échelle et de complexité"
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
      </section>

      {/* Capabilities Section */}
      <section className="section-padding">
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

      {/* Case Studies Section */}
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
                <Card className="h-full">
                  <div className="mb-6">
                    <h3 className="text-xl font-bold text-neutral-dark mb-2">
                      {study.company}
                    </h3>
                    <div className="flex flex-wrap gap-2 text-sm">
                      <span className="px-3 py-1 bg-primary/10 text-primary font-medium rounded-full">
                        {study.sector}
                      </span>
                      <span className="px-3 py-1 bg-neutral-light-bg noise-texture text-neutral-gray font-medium rounded-full">
                        {study.scope}
                      </span>
                    </div>
                  </div>

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
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-br from-neutral-dark to-primary/20 noise-texture">
        <div className="container-custom">
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
                className="border-white text-white hover:bg-white white-pattern/10"
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
