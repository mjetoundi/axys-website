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
  Target,
  Server
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
      ]
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
      ]
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
      ]
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
      ]
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
      ]
    },
    {
      id: 'systemes-information',
      icon: Server,
      title: 'Systèmes d\'Information',
      subtitle: 'Audit IT et transformation digitale',
      description: 'Audit et conseil en systèmes d\'information pour optimiser votre infrastructure IT, renforcer votre sécurité et accompagner votre transformation digitale.',
      features: [
        'Audit IT et cybersécurité',
        'Conseil en infrastructure',
        'Transformation digitale',
        'Gouvernance des SI',
        'Gestion de projets IT',
        'Outils collaboratifs et Cloud'
      ],
      benefits: [
        'Sécurité renforcée',
        'Optimisation des coûts IT',
        'Performance améliorée',
        'Innovation technologique'
      ]
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
      {/* Hero Section with Image */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/Services/services-hero.jpg"
            alt="Services"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-neutral-dark/80 via-primary/70 to-secondary/60"></div>
        </div>
        <div className="container-custom relative z-10 py-20">
          <motion.div
            className="text-center max-w-4xl mx-auto text-white"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Nos <span className="text-white">Services</span>
            </h1>
            <p className="text-xl md:text-2xl opacity-90 leading-relaxed mb-8">
              Des solutions expertes et personnalisées pour accompagner votre entreprise 
              dans tous les aspects de sa gestion et de son développement.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="flex items-center space-x-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 border border-white/30">
                <Award size={16} className="text-white" />
                <span className="text-sm font-semibold text-white">Experts certifiés</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 border border-white/30">
                <Target size={16} className="text-white" />
                <span className="text-sm font-semibold text-white">Solutions sur-mesure</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 border border-white/30">
                <Clock size={16} className="text-white" />
                <span className="text-sm font-semibold text-white">Réactivité 24h</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Detail */}
      <section className="section-padding bg-white white-pattern">
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

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button 
                      variant="primary" 
                      size="lg" 
                      icon={ArrowRight}
                      href="/contact"
                    >
                      Contactez-nous
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

                {/* Visual with Image */}
                <div className="flex-1 max-w-md">
                  <Card className="aspect-square overflow-hidden p-0 relative group" hover={true}>
                    <img
                      src={
                        service.id === 'audit' ? '/images/Services/service-audit.jpg' :
                        service.id === 'conseil' ? '/images/Services/service-conseil.jpg' :
                        service.id === 'expertise-comptable' ? '/images/Services/service-comptabilite.jpg' :
                        service.id === 'externalisation-rh' ? '/images/Services/service-rh.jpg' :
                        service.id === 'fiscalite' ? '/images/Services/service-fiscalite.jpg' :
                        '/images/Services/service-it.jpg'
                      }
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-neutral-dark/80 via-transparent to-transparent"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                      <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center mb-4">
                        <service.icon size={32} className="text-white" />
                      </div>
                      <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                      <p className="text-white/90">{service.subtitle}</p>
                    </div>
                  </Card>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section with Image */}
      <section className="section-padding bg-neutral-light-bg noise-texture">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative rounded-2xl overflow-hidden shadow-card-hover"
            >
              <img
                src="/images/Services/process-methodology.jpg"
                alt="Méthodologie"
                className="w-full h-full object-cover"
              />
            </motion.div>
            <motion.div
              className="text-center lg:text-left"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-dark mb-6">
                Notre Méthodologie
              </h2>
              <p className="text-lg text-neutral-gray max-w-3xl">
                Une approche structurée en 4 étapes pour garantir la réussite de vos projets 
                et l'atteinte de vos objectifs.
              </p>
            </motion.div>
          </div>

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
          <motion.div
            className="text-center max-w-4xl mx-auto text-white"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Prêt à transformer votre entreprise ?
            </h2>
            <p className="text-lg text-white/90 leading-relaxed mb-8">
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
                Contactez-nous
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services;