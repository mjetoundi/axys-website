import React from "react";
import { motion } from "framer-motion";
import PageHero from "../../components/ui/PageHero";
import SectionHeader from "../../components/ui/SectionHeader";
import Card from "../../components/ui/Card";
import Button from "../../components/ui/Button";
import Breadcrumbs from "../../components/ui/Breadcrumbs";
import {
  Rocket,
  Search,
  PiggyBank,
  BarChart2,
  FileText,
  Zap,
  ArrowRight,
  TrendingUp,
} from "lucide-react";

const services = [
  {
    icon: Search,
    title: "Due Diligence Financière",
    description:
      "Audit complet de vos comptes et processus pour rassurer investisseurs et VCs. Identification des risques et opportunités.",
  },
  {
    icon: PiggyBank,
    title: "Gestion Trésorerie Startup",
    description:
      "Optimisation cash management, prévisions trésorerie, analyse runway et conseils en gestion financière agile.",
  },
  {
    icon: BarChart2,
    title: "Optimisation Fiscale Startup",
    description:
      "Structuration fiscale optimale, CIR/CII, JEI, dispositifs d'aides et subventions pour maximiser votre trésorerie.",
  },
  {
    icon: FileText,
    title: "Reporting Investisseurs & Board",
    description:
      "Mise en place KPIs pertinents, tableaux de bord mensuels, reporting board et suivi performance opérationnelle.",
  },
];

const caseStudies = [
  {
    company: "FinTech Innovations",
    stage: "Série A",
    challenge: "Structuration financière pour levée de fonds",
    solution: "Due diligence + modèle financier + dossier investisseurs",
    result: "Levée de fonds réussie, structuration optimale",
  },
  {
    company: "HealthTech Solutions",
    stage: "Seed",
    challenge: "Optimisation fiscale et gestion trésorerie",
    solution: "Statut JEI + CIR + prévisionnel trésorerie",
    result: "Optimisation fiscale, runway significativement allongé",
  },
  {
    company: "SaaS Pro Platform",
    stage: "Croissance",
    challenge: "Reporting investisseurs et pilotage croissance",
    solution: "Dashboard temps réel + KPIs SaaS + reporting mensuel",
    result: "Visibilité parfaite, confiance board, forte croissance",
  },
];

const startupMetrics = [
  { value: "Nombreuses", label: "Startups accompagnées" },
  { value: "Réussies", label: "Levées facilitées" },
  { value: "Excellent", label: "Taux de succès" },
  { value: "Optimisé", label: "Runway moyen" },
];

const keyBenefits = [
  {
    title: "Expertise Écosystème Startup",
    description:
      "Compréhension profonde des enjeux startup, du langage VCs et des métriques qui comptent.",
    icon: Zap,
  },
  {
    title: "Tarification Adaptée",
    description:
      "Offres flexibles adaptées aux budgets startup, pricing évolutif selon vos levées.",
    icon: PiggyBank,
  },
  {
    title: "Rapidité d'Exécution",
    description:
      "Process accélérés pour suivre votre rythme de croissance et vos deadlines investisseurs.",
    icon: TrendingUp,
  },
];

const Startups: React.FC = () => {
  return (
    <div className="pt-20">
      <Breadcrumbs
        items={[
          { label: "Accueil", href: "/" },
          { label: "Secteurs", href: "/secteurs" },
          { label: "Startups & Croissance" },
        ]}
      />

      {/* Hero Section with Image */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/Secteurs/startups.jpg"
            alt="Startups & Croissance"
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
              <Rocket className="w-10 h-10 text-white" />
            </motion.div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Startups & Croissance
            </h1>
            <p className="text-xl md:text-2xl opacity-90 leading-relaxed">
              Spécialisation dans l'accompagnement des startups en phase de démarrage et de croissance accélérée. Nous parlons votre langage et comprenons vos enjeux.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Metrics Section */}
      <section className="section-padding bg-neutral-light-bg noise-texture">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {startupMetrics.map((metric, index) => (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
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

      {/* Why Startups Love Us Section */}
      <section className="section-padding">
        <div className="container-custom">
          <SectionHeader
            eyebrow="Notre différence"
            title="Pourquoi les Startups Nous Choisissent"
            subtitle="Une approche pensée pour l'écosystème startup et la croissance rapide"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {keyBenefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="h-full text-center">
                    <div className="w-16 h-16 bg-secondary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-8 h-8 text-secondary" />
                    </div>
                    <h3 className="text-xl font-semibold text-neutral-dark mb-3">
                      {benefit.title}
                    </h3>
                    <p className="text-neutral-gray leading-relaxed">
                      {benefit.description}
                    </p>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding bg-neutral-light-bg noise-texture">
        <div className="container-custom">
          <SectionHeader
            eyebrow="Notre offre startup"
            title="Services Dédiés aux Startups"
            subtitle="De la seed à la série B, nous vous accompagnons à chaque étape"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="h-full hover:shadow-card-hover transition-all duration-300">
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

      {/* Case Studies Section - Image Cards */}
      <section className="section-padding bg-white white-pattern">
        <div className="container-custom">
          <SectionHeader
            eyebrow="Success stories"
            title="Startups qui Nous Font Confiance"
            subtitle="Découvrez comment nous avons aidé des startups à lever des fonds et scaler"
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
                <Card className="h-full overflow-hidden p-0 hover:shadow-card-hover transition-all duration-300 bg-gradient-to-br from-white to-secondary/5">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={index === 0 ? "/images/Pages Services/comptabilite-detail.jpg" : index === 1 ? "/images/Pages Services/audit-detail.jpg" : "/images/Pages Services/conseil-detail.jpg"}
                      alt={study.company}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 via-secondary/40 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-lg font-semibold text-white">
                          {study.company}
                        </h3>
                        <span className="px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-xs font-semibold rounded-full">
                          {study.stage}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="space-y-3 text-sm">
                      <div>
                        <div className="font-semibold text-neutral-dark mb-1">
                          Challenge
                        </div>
                        <p className="text-neutral-gray">{study.challenge}</p>
                      </div>

                      <div>
                        <div className="font-semibold text-neutral-dark mb-1">
                          Solution
                        </div>
                        <p className="text-neutral-gray">{study.solution}</p>
                      </div>

                      <div className="pt-3 border-t border-secondary/20">
                        <div className="font-semibold text-secondary mb-1">
                          ✓ Résultat
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

      {/* Startup-Specific Value Prop */}
      <section className="section-padding bg-gradient-to-br from-secondary/10 to-primary/10">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-dark mb-6">
                On Comprend Vos Enjeux
              </h2>
              <p className="text-lg text-neutral-gray">
                Nous savons qu'en startup, chaque euro et chaque jour comptent.
                Notre approche est pensée pour vous faire gagner du temps et
                optimiser votre cash.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                "MRR, CAC, LTV, Churn : on parle votre langage",
                "Process rapides adaptés à vos deadlines",
                "Tarification évolutive selon vos levées",
                "Accompagnement pitch deck et modèle financier",
                "Réseau VCs et Business Angels",
                "Support during fundraising roadshows",
              ].map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="flex items-center gap-3 bg-white white-pattern p-4 rounded-lg"
                >
                  <div className="w-6 h-6 bg-secondary rounded-full flex items-center justify-center flex-shrink-0">
                    <Zap className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-neutral-dark font-medium">{item}</span>
                </motion.div>
              ))}
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
            <Rocket className="w-16 h-16 mx-auto mb-6 opacity-90" />
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Prêt à Propulser Votre Startup ?
            </h2>
            <p className="text-lg mb-8 opacity-90">
              Discutons de votre prochain round, de votre stratégie financière
              ou de vos enjeux de scaling. Premier échange gratuit et sans
              engagement.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-secondary white-pattern"
                onClick={() => (window.location.href = "/contact")}
              >
                Discuter de mon projet
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button
                variant="ghost"
                size="lg"
                className="text-white hover:bg-white/20 hover:text-white border border-white/30 hover:border-white/50 white-pattern/10"
                onClick={() => (window.location.href = "/services")}
              >
                Voir nos services startup
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Startups;
