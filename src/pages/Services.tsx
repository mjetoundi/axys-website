import React from 'react';
import { motion } from 'framer-motion';
import { 
  Shield, 
  TrendingUp, 
  Calculator, 
  Users, 
  FileText, 
  ArrowRight,
  CheckCircle,
  Clock,
  Award,
  Target
} from 'lucide-react';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';

const Services: React.FC = () => {
  const services = [
    {
      id: 'audit',
      icon: Shield,
      title: 'Audit & Contrôle',
      subtitle: 'Expertise légale et opérationnelle',
      description: 'Nos experts réalisent tous types d\'audits : légaux, contractuels, opérationnels et de conformité. Nous sécurisons vos activités et renforçons la confiance de vos parties prenantes.',
      features: [
        'Audit légal et contractuel',
        'Audit opérationnel et de performance',
        'Due diligence acquisitions',
        'Contrôle interne et conformité',
        'Audit informatique et cybersécurité',
        'Évaluation des risques'
      ],
      benefits: [
        'Conformité réglementaire assurée',
        'Identification des risques et opportunités',
        'Amélioration des performances',
        'Renforcement de la gouvernance'
      ],
      pricing: 'À partir de 2 500€',
      duration: '2-6 semaines selon la complexité'
    },
    {
      id: 'conseil',
      icon: TrendingUp,
      title: 'Conseil & Optimisation',
      subtitle: 'Stratégies sur-mesure pour votre croissance',
      description: 'Nous développons des stratégies personnalisées pour optimiser vos performances, réduire vos coûts et accélérer votre croissance. Un accompagnement complet vers l\'excellence opérationnelle.',
      features: [
        'Conseil en organisation et stratégie',
        'Optimisation fiscale et financière',
        'Business plan et levée de fonds',
        'Transformation digitale',
        'Restructuration et transmission',
        'Pilotage de la performance'
      ],
      benefits: [
        'ROI mesurable sur vos investissements',
        'Réduction des coûts opérationnels',
        'Croissance accélérée et durable',
        'Avantage concurrentiel renforcé'
      ],
      pricing: 'À partir de 1 800€',
      duration: '1-3 mois selon le périmètre'
    },
    {
      id: 'expertise-comptable',
      icon: Calculator,
      title: 'Expertise Comptable',
      subtitle: 'Gestion comptable complète et fiable',
      description: 'De la tenue comptable quotidienne à l\'établissement des comptes annuels, nous gérons l\'intégralité de vos obligations comptables et fiscales avec rigueur et expertise.',
      features: [
        'Tenue de comptabilité quotidienne',
        'Établissement des comptes annuels',
        'Déclarations fiscales (TVA, IS, CET)',
        'Liasses fiscales et sociales',
        'Conseil fiscal permanent',
        'Dématérialisation comptable'
      ],
      benefits: [
        'Conformité fiscale garantie',
        'Gain de temps considérable',
        'Visibilité financière en temps réel',
        'Conseil proactif personnalisé'
      ],
      pricing: 'À partir de 300€/mois',
      duration: 'Accompagnement annuel'
    },
    {
      id: 'externalisation-rh',
      icon: Users,
      title: 'Externalisation RH',
      subtitle: 'Solutions RH complètes et innovantes',
      description: 'Externalisez votre gestion RH et concentrez-vous sur votre cœur de métier. De la paie à l\'administration du personnel, nous gérons l\'intégralité de vos besoins RH.',
      features: [
        'Gestion complète de la paie',
        'Administration du personnel',
        'Déclarations sociales (DSN, DUE)',
        'Conseil en droit social',
        'Recrutement et intégration',
        'Formation et développement RH'
      ],
      benefits: [
        'Réduction des coûts RH',
        'Expertise juridique permanente',
        'Flexibilité et adaptabilité',
        'Digitalisation des processus'
      ],
      pricing: 'À partir de 35€/bulletin',
      duration: 'Service mensuel récurrent'
    },
    {
      id: 'fiscalite',
      icon: FileText,
      title: 'Fiscalité & Advisory',
      subtitle: 'Optimisation fiscale stratégique',
      description: 'Notre expertise fiscale vous accompagne dans l\'optimisation de votre situation fiscale, la transmission de votre entreprise et le financement de vos projets de développement.',
      features: [
        'Optimisation fiscale personnalisée',
        'Conseil en investissements',
        'Transmission d\'entreprise',
        'Crédit d\'impôt recherche (CIR)',
        'Fiscalité internationale',
        'Contentieux et contrôles fiscaux'
      ],
      benefits: [
        'Économies fiscales substantielles',
        'Sécurisation juridique complète',
        'Accompagnement patrimonial',
        'Anticipation des évolutions légales'
      ],
      pricing: 'À partir de 1 500€',
      duration: 'Mission ponctuelle ou récurrente'
    }
  ];

  const processSteps = [
    {
      step: '01',
      title: 'Analyse des besoins',
      description: 'Diagnostic complet de votre situation et définition des objectifs'
    },
    {
      step: '02',
      title: 'Proposition personnalisée',
      description: 'Élaboration d\'une solution sur-mesure adaptée à vos enjeux'
    },
    {
      step: '03',
      title: 'Mise en œuvre',
      description: 'Déploiement de la solution avec accompagnement dédié'
    },
    {
      step: '04',
      title: 'Suivi & optimisation',
      description: 'Suivi régulier des résultats et ajustements si nécessaire'
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-primary/10 to-secondary/10">
        <div className="container-custom">
          <motion.div
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-neutral-dark mb-6">
              Nos <span className="text-gradient">Services</span>
            </h1>
            <p className="text-lg text-neutral-gray leading-relaxed mb-8">
              Des solutions expertes et personnalisées pour accompagner votre entreprise 
              dans tous les aspects de sa gestion et de son développement.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="flex items-center space-x-2 bg-white/80 rounded-full px-4 py-2">
                <Award size={16} className="text-primary" />
                <span className="text-sm font-semibold">Experts certifiés</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/80 rounded-full px-4 py-2">
                <Target size={16} className="text-secondary" />
                <span className="text-sm font-semibold">Solutions sur-mesure</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/80 rounded-full px-4 py-2">
                <Clock size={16} className="text-primary" />
                <span className="text-sm font-semibold">Réactivité 24h</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Detail */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="space-y-16">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                {/* Content */}
                <div className="flex-1">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center">
                      <service.icon size={32} className="text-primary" />
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold text-neutral-dark">{service.title}</h2>
                      <p className="text-lg text-primary font-semibold">{service.subtitle}</p>
                    </div>
                  </div>

                  <p className="text-lg text-neutral-gray leading-relaxed mb-6">
                    {service.description}
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                    {/* Features */}
                    <div>
                      <h3 className="text-xl font-semibold text-neutral-dark mb-4">
                        Nos prestations
                      </h3>
                      <ul className="space-y-2">
                        {service.features.map((feature, fIndex) => (
                          <li key={fIndex} className="flex items-start space-x-3">
                            <CheckCircle size={16} className="text-primary mt-1 flex-shrink-0" />
                            <span className="text-neutral-dark">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Benefits */}
                    <div>
                      <h3 className="text-xl font-semibold text-neutral-dark mb-4">
                        Bénéfices clients
                      </h3>
                      <ul className="space-y-2">
                        {service.benefits.map((benefit, bIndex) => (
                          <li key={bIndex} className="flex items-start space-x-3">
                            <ArrowRight size={16} className="text-secondary mt-1 flex-shrink-0" />
                            <span className="text-neutral-dark">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Pricing & Duration */}
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between bg-neutral-light-bg rounded-lg p-6 mb-6">
                    <div className="mb-4 sm:mb-0">
                      <div className="text-sm text-neutral-gray">À partir de</div>
                      <div className="text-2xl font-bold text-primary">{service.pricing}</div>
                    </div>
                    <div>
                      <div className="text-sm text-neutral-gray">Durée</div>
                      <div className="text-lg font-semibold text-neutral-dark">{service.duration}</div>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button 
                      variant="primary" 
                      size="lg" 
                      icon={ArrowRight}
                      href="/contact"
                    >
                      Demander un devis
                    </Button>
                    <Button 
                      variant="outline" 
                      size="lg" 
                      icon={ArrowRight}
                      href={`/services/${service.id}`}
                    >
                      En savoir plus
                    </Button>
                  </div>
                </div>

                {/* Visual */}
                <div className="flex-1 max-w-md">
                  <Card className="aspect-square bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center" hover={false}>
                    <div className="text-center p-8">
                      <service.icon size={80} className="text-primary mx-auto mb-4" />
                      <h3 className="text-xl font-bold text-neutral-dark mb-2">{service.title}</h3>
                      <p className="text-neutral-gray">{service.subtitle}</p>
                    </div>
                  </Card>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding bg-neutral-light-bg">
        <div className="container-custom">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-dark mb-6">
              Notre Méthodologie
            </h2>
            <p className="text-lg text-neutral-gray max-w-3xl mx-auto">
              Une approche structurée en 4 étapes pour garantir la réussite de vos projets 
              et l'atteinte de vos objectifs.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="relative mb-6">
                  <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto">
                    <span className="text-2xl font-bold text-white">{step.step}</span>
                  </div>
                  {index < processSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-10 left-full w-full h-0.5 bg-primary/20 -ml-10"></div>
                  )}
                </div>
                <h3 className="text-xl font-semibold text-neutral-dark mb-4">{step.title}</h3>
                <p className="text-neutral-gray">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary text-white">
        <div className="container-custom">
          <motion.div
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Prêt à transformer votre entreprise ?
            </h2>
            <p className="text-lg text-blue-100 leading-relaxed mb-8">
              Nos experts analysent gratuitement vos besoins et vous proposent 
              une solution personnalisée. Contactez-nous dès aujourd'hui.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <Button 
                variant="secondary" 
                size="lg" 
                icon={ArrowRight}
                href="/contact"
                className="w-full sm:w-auto"
              >
                Diagnostic gratuit
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                href="/ressources/telecharges"
                className="w-full sm:w-auto border-white text-white hover:bg-white hover:text-primary"
              >
                Télécharger notre brochure
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services;