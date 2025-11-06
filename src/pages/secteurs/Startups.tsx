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

      <PageHero
        icon={<Rocket className="w-8 h-8 text-white" />}
        title="Startups & Croissance"
        subtitle="Spécialisation dans l'accompagnement des startups en phase de démarrage et de croissance accélérée. Nous parlons votre langage et comprenons vos enjeux."
        gradient={true}
      />

      {/* Metrics Section */}
      <section className="section-padding bg-neutral-light-bg">
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
      <section className="section-padding bg-neutral-light-bg">
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

      {/* Case Studies Section */}
      <section className="section-padding">
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
                <Card className="h-full bg-gradient-to-br from-white to-secondary/5">
                  <div className="mb-4">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-lg font-semibold text-neutral-dark">
                        {study.company}
                      </h3>
                      <span className="px-3 py-1 bg-secondary/10 text-secondary text-xs font-semibold rounded-full">
                        {study.stage}
                      </span>
                    </div>
                  </div>

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
                  className="flex items-center gap-3 bg-white p-4 rounded-lg"
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

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-br from-secondary to-secondary/90">
        <div className="container-custom">
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
                className="border-white text-white hover:bg-white hover:text-secondary"
                onClick={() => (window.location.href = "/contact")}
              >
                Discuter de mon projet
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button
                variant="ghost"
                size="lg"
                className="text-white hover:bg-white/10"
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
