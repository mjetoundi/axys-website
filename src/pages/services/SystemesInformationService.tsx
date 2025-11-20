import React from 'react';
import { motion } from 'framer-motion';
import { 
  Server, 
  CheckCircle, 
  ArrowRight, 
  Shield,
  Cloud,
  Database,
  Clock,
  Users,
  Award,
  TrendingUp,
  Lock,
  Settings
} from 'lucide-react';
import Card from '../../components/ui/Card';
import Button from '../../components/ui/Button';
import Breadcrumbs from '../../components/ui/Breadcrumbs';

const SystemesInformationService: React.FC = () => {
  const breadcrumbs = [
    { label: 'Accueil', href: '/' },
    { label: 'Services', href: '/services' },
    { label: 'Systèmes d\'Information', href: '/services/systemes-information' }
  ];

  const interventionAreas = [
    {
      id: 'audit-it',
      title: 'Audit IT & Sécurité',
      description: 'Évaluation complète de votre infrastructure et de votre sécurité informatique',
      features: [
        'Audit infrastructure IT',
        'Analyse sécurité et vulnérabilités',
        'Évaluation conformité RGPD',
        'Plan de reprise d\'activité (PRA)'
      ],
      icon: Shield
    },
    {
      id: 'conseil',
      title: 'Conseil & Stratégie IT',
      description: 'Accompagnement stratégique pour optimiser votre système d\'information',
      features: [
        'Schéma directeur informatique',
        'Architecture système',
        'Choix solutions logicielles',
        'Gouvernance IT'
      ],
      icon: Settings
    },
    {
      id: 'transformation',
      title: 'Transformation Digitale',
      description: 'Accompagnement dans votre transition vers le numérique',
      features: [
        'Digitalisation des processus',
        'Migration vers le cloud',
        'Outils collaboratifs',
        'Automatisation métier'
      ],
      icon: Cloud
    }
  ];

  const processSteps = [
    {
      step: '1',
      title: 'Diagnostic IT',
      description: 'Analyse de votre infrastructure existante, besoins métier et enjeux de sécurité'
    },
    {
      step: '2',
      title: 'Recommandations',
      description: 'Propositions d\'amélioration alignées avec vos objectifs business'
    },
    {
      step: '3',
      title: 'Plan d\'Action',
      description: 'Feuille de route détaillée avec priorisation et chiffrage des projets'
    },
    {
      step: '4',
      title: 'Accompagnement',
      description: 'Support dans la mise en œuvre et pilotage des projets IT'
    },
    {
      step: '5',
      title: 'Suivi & Optimisation',
      description: 'Monitoring continu et ajustements pour garantir la performance'
    }
  ];

  const benefits = [
    {
      icon: Shield,
      title: 'Sécurité Renforcée',
      description: 'Protection de vos données et conformité aux réglementations en vigueur'
    },
    {
      icon: TrendingUp,
      title: 'Performance Optimisée',
      description: 'Amélioration de l\'efficacité opérationnelle et de la productivité'
    },
    {
      icon: Clock,
      title: 'Disponibilité Maximale',
      description: 'Systèmes fiables et réactifs pour garantir la continuité d\'activité'
    },
    {
      icon: Award,
      title: 'Expertise Certifiée',
      description: 'Consultants IT expérimentés et certifiés dans leur domaine'
    }
  ];

  const services = [
    {
      category: 'Infrastructure & Réseaux',
      items: [
        'Audit infrastructure serveurs',
        'Architecture réseaux',
        'Solutions de sauvegarde',
        'Virtualisation et cloud',
        'Sécurité périmétrique',
        'Plan de continuité d\'activité'
      ]
    },
    {
      category: 'Applications & Logiciels',
      items: [
        'Audit logiciels métier',
        'Sélection ERP/CRM',
        'Intégration d\'applications',
        'Migration de données',
        'Formation utilisateurs',
        'Support et maintenance'
      ]
    },
    {
      category: 'Sécurité & Conformité',
      items: [
        'Audit de sécurité',
        'Mise en conformité RGPD',
        'Politique de sécurité',
        'Sensibilisation cyber-sécurité',
        'Tests d\'intrusion',
        'Gestion des accès'
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section-padding bg-neutral-light-bg noise-texture">
        <Breadcrumbs items={breadcrumbs} />
        
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mb-6">
                <Server className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-neutral-dark mb-6">
                Systèmes d'Information
              </h1>
              <p className="text-xl text-gray-support mb-8 leading-relaxed">
                Audit, conseil et accompagnement IT. Optimisez votre infrastructure informatique 
                et accélérez votre transformation digitale en toute sécurité.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  variant="primary" 
                  size="lg" 
                  icon={ArrowRight}
                  href="/contact"
                  className="w-full sm:w-auto"
                >
                  Contactez-nous
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="w-full sm:w-auto"
                >
                  Nos expertises IT
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="aspect-[4/3] rounded-2xl shadow-2xl overflow-hidden relative">
                <img
                  src="/images/Services/service-it.jpg"
                  alt="Systèmes d'Information"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-dark/80 via-transparent to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                  <Database className="w-16 h-16 mx-auto mb-4 opacity-90" />
                  <p className="text-lg font-semibold text-center">Systèmes d'Information</p>
                  <p className="text-blue-200 text-center">Sécurité & Performance</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Overview */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-neutral-dark mb-4">
              Pourquoi Optimiser Vos Systèmes d'Information ?
            </h2>
            <p className="text-lg text-gray-support max-w-3xl mx-auto">
              Des bénéfices concrets pour votre organisation et votre performance
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-neutral-dark mb-2">
                  {benefit.title}
                </h3>
                <p className="text-gray-support text-sm">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Overview */}
      <section className="section-padding bg-neutral-light-bg noise-texture">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="lg:col-span-2"
            >
              <h2 className="text-3xl font-bold text-neutral-dark mb-6">
                Conseil en Systèmes d'Information : Votre Partenaire IT
              </h2>
              
              <div className="prose prose-lg text-neutral-dark space-y-6">
                <p>
                  Dans un monde de plus en plus digitalisé, vos systèmes d'information 
                  constituent l'épine dorsale de votre organisation. Notre expertise IT 
                  vous aide à sécuriser, optimiser et faire évoluer votre infrastructure 
                  pour soutenir votre croissance.
                </p>
                
                <p>
                  Notre accompagnement couvre trois dimensions clés :
                </p>
                
                <ul className="space-y-3">
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <span><strong>Audit et diagnostic :</strong> Évaluation complète de votre infrastructure IT et identification des axes d'amélioration</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <span><strong>Conseil stratégique :</strong> Définition de votre schéma directeur IT aligné avec vos objectifs business</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <span><strong>Accompagnement projet :</strong> Support dans la mise en œuvre de vos projets de transformation digitale</span>
                  </li>
                </ul>
                
                <p>
                  Nos consultants IT certifiés vous apportent une vision externe objective 
                  et une expertise pointue pour prendre les bonnes décisions technologiques 
                  et sécuriser vos investissements IT.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="bg-primary/5 rounded-2xl p-6 mb-6">
                <h3 className="text-xl font-semibold text-neutral-dark mb-4">
                  Domaines d'Expertise
                </h3>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                    <span className="text-sm text-neutral-dark">Infrastructure & Cloud</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                    <span className="text-sm text-neutral-dark">Cyber-sécurité</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                    <span className="text-sm text-neutral-dark">ERP & Applications métier</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                    <span className="text-sm text-neutral-dark">Transformation digitale</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                    <span className="text-sm text-neutral-dark">Conformité RGPD</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                    <span className="text-sm text-neutral-dark">Gouvernance IT</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Inclus */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-neutral-dark mb-4">
              Nos Services IT
            </h2>
            <p className="text-lg text-gray-support max-w-3xl mx-auto">
              Une offre complète pour tous vos besoins en systèmes d'information
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full">
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-neutral-dark mb-4">
                      {service.category}
                    </h3>
                    <ul className="space-y-3">
                      {service.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start space-x-2 text-sm">
                          <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                          <span className="text-neutral-dark">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Intervention Areas */}
      <section className="section-padding bg-neutral-light-bg noise-texture">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-neutral-dark mb-4">
              Nos Domaines d'Intervention
            </h2>
            <p className="text-lg text-gray-support max-w-3xl mx-auto">
              Expertise complète pour optimiser votre système d'information
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {interventionAreas.map((area, index) => (
              <motion.div
                key={area.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full">
                  <div className="p-6">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                      <area.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold text-neutral-dark mb-3">
                      {area.title}
                    </h3>
                    <p className="text-gray-support mb-4">
                      {area.description}
                    </p>
                    <ul className="space-y-2">
                      {area.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start space-x-2 text-sm">
                          <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                          <span className="text-neutral-dark">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="section-padding bg-neutral-dark text-white noise-texture">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">
              Notre Méthodologie
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Une approche structurée pour optimiser vos systèmes d'information
            </p>
          </motion.div>

          <div className="grid md:grid-cols-5 gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold">{step.step}</span>
                  </div>
                  {index < processSteps.length - 1 && (
                    <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-primary/30 -ml-8"></div>
                  )}
                </div>
                <h3 className="text-lg font-semibold mb-3">{step.title}</h3>
                <p className="text-gray-300 text-sm">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary text-white noise-texture">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Prêt à Optimiser Votre IT ?
            </h2>
            <p className="text-lg text-blue-100 leading-relaxed mb-8">
              Nos experts IT analysent vos besoins et vous proposent 
              une stratégie sur-mesure pour votre transformation digitale.
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

export default SystemesInformationService;

