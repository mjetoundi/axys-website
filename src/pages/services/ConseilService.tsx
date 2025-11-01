import React from 'react';
import { motion } from 'framer-motion';
import { 
  TrendingUp, 
  CheckCircle, 
  ArrowRight, 
  Target,
  Lightbulb,
  BarChart3,
  Clock,
  Users,
  Award,
  Zap
} from 'lucide-react';
import Card from '../../components/ui/Card';
import Button from '../../components/ui/Button';
import Breadcrumbs from '../../components/ui/Breadcrumbs';

const ConseilService: React.FC = () => {
  const breadcrumbs = [
    { label: 'Accueil', href: '/' },
    { label: 'Services', href: '/services' },
    { label: 'Conseil & Optimisation', href: '/services/conseil' }
  ];

  const interventionAreas = [
    {
      id: 'strategie',
      title: 'Conseil Stratégique',
      description: 'Définition et mise en œuvre de votre stratégie de croissance',
      features: [
        'Analyse concurrentielle approfondie',
        'Définition vision et objectifs',
        'Roadmap stratégique détaillée',
        'KPIs et indicateurs de performance'
      ],
      icon: Target
    },
    {
      id: 'optimisation',
      title: 'Optimisation Opérationnelle',
      description: 'Amélioration de vos processus pour maximiser l\'efficacité',
      features: [
        'Cartographie des processus',
        'Identification des goulots d\'étranglement',
        'Automatisation et digitalisation',
        'Formation des équipes'
      ],
      icon: Zap
    },
    {
      id: 'financier',
      title: 'Optimisation Financière',
      description: 'Maximisation de votre performance financière',
      features: [
        'Analyse de rentabilité par activité',
        'Optimisation fiscale légale',
        'Gestion trésorerie et cash-flow',
        'Préparation levées de fonds'
      ],
      icon: BarChart3
    }
  ];

  const processSteps = [
    {
      step: '1',
      title: 'Diagnostic Complet',
      description: 'Analyse approfondie de votre situation actuelle, identification des enjeux et opportunités',
      duration: '2-3 semaines'
    },
    {
      step: '2',
      title: 'Stratégie Sur-Mesure',
      description: 'Développement d\'une stratégie personnalisée alignée avec vos objectifs business',
      duration: '2-4 semaines'
    },
    {
      step: '3',
      title: 'Plan d\'Action',
      description: 'Définition du plan d\'action détaillé avec jalons, ressources et timeline',
      duration: '1-2 semaines'
    },
    {
      step: '4',
      title: 'Mise en Œuvre',
      description: 'Accompagnement opérationnel pour l\'implémentation des recommandations',
      duration: '3-12 mois'
    },
    {
      step: '5',
      title: 'Suivi Performance',
      description: 'Monitoring des résultats et ajustements en continu',
      duration: 'Ongoing'
    }
  ];

  const caseStudies = [
    {
      client: 'DigitalCorp',
      sector: 'Services Digitaux',
      size: '100-200 collaborateurs',
      challenge: 'Croissance stagnante et processus inefficaces limitant l\'expansion',
      solution: 'Restructuration opérationnelle + digitalisation + stratégie croissance',
      result: 'Croissance CA +45% + Productivité +60% + Expansion internationale'
    },
    {
      client: 'ManufactureXpert',
      sector: 'Industrie',
      size: '300-500 collaborateurs',
      challenge: 'Optimisation des coûts et amélioration de la compétitivité',
      solution: 'Lean management + automatisation + optimisation supply chain',
      result: 'Réduction coûts 35% + Délais production -40% + Satisfaction client +25%'
    },
    {
      client: 'StartupInnovate',
      sector: 'Technologie',
      size: '30-50 collaborateurs',
      challenge: 'Structuration pour passage à l\'échelle et levée de fonds',
      solution: 'Structuration organisation + business model + préparation due diligence',
      result: 'Levée 5M€ réussie + Structure scalable + Croissance x3'
    }
  ];

  const pricingPlans = [
    {
      name: 'Conseil Express',
      price: 'À partir de 3 500 €',
      features: [
        'Diagnostic rapide 3-5 jours',
        'Recommandations ciblées',
        '2 séances de suivi',
        'Rapport exécutif',
        'Plan d\'action prioritaire'
      ],
      popular: false
    },
    {
      name: 'Accompagnement Standard',
      price: 'À partir de 8 500 €',
      features: [
        'Diagnostic complet 2-3 semaines',
        'Stratégie personnalisée',
        'Plan d\'action détaillé',
        'Accompagnement 3 mois',
        'Formation équipe incluse'
      ],
      popular: true
    },
    {
      name: 'Transformation Complète',
      price: 'Sur devis',
      features: [
        'Projet de transformation global',
        'Équipe dédiée senior',
        'Accompagnement 6-12 mois',
        'Formation et change management',
        'Garantie de résultats'
      ],
      popular: false
    }
  ];

  const benefits = [
    {
      icon: TrendingUp,
      title: 'ROI Mesurable',
      description: 'Retour sur investissement démontrable en moyenne 300% la première année'
    },
    {
      icon: Target,
      title: 'Objectifs Atteints',
      description: '95% de nos clients atteignent leurs objectifs dans les délais impartis'
    },
    {
      icon: Zap,
      title: 'Mise en Œuvre Rapide',
      description: 'Premiers résultats visibles dès les premières semaines d\'implémentation'
    },
    {
      icon: Award,
      title: 'Expertise Reconnue',
      description: 'Plus de 15 ans d\'expérience et 200+ transformations réussies'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section-padding bg-gray-light">
        <Breadcrumbs items={breadcrumbs} />
        
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mb-6">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-neutral-dark mb-6">
                Conseil & Optimisation
              </h1>
              <p className="text-xl text-gray-support mb-8 leading-relaxed">
                Stratégies sur-mesure pour votre croissance. Nous développons des solutions 
                personnalisées pour optimiser performances, réduire coûts et accélérer votre développement.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  variant="primary" 
                  size="lg" 
                  icon={ArrowRight}
                  className="w-full sm:w-auto"
                >
                  Diagnostic gratuit
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="w-full sm:w-auto"
                >
                  Nos success stories
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="aspect-[4/3] bg-gradient-to-br from-primary to-secondary rounded-2xl shadow-2xl flex items-center justify-center">
                <div className="text-center text-white">
                  <Lightbulb className="w-24 h-24 mx-auto mb-4 opacity-80" />
                  <p className="text-lg font-semibold">Conseil Stratégique</p>
                  <p className="text-blue-200">Innovation & Performance</p>
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
              Pourquoi Choisir Notre Expertise Conseil ?
            </h2>
            <p className="text-lg text-gray-support max-w-3xl mx-auto">
              Des résultats concrets et mesurables pour transformer votre entreprise
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
      <section className="section-padding bg-gray-light">
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
                Conseil & Optimisation : Votre Partenaire de Transformation
              </h2>
              
              <div className="prose prose-lg text-neutral-dark space-y-6">
                <p>
                  Le conseil et l'optimisation d'entreprise représentent bien plus qu'une 
                  simple analyse : c'est une transformation profonde de votre organisation 
                  pour libérer son potentiel de croissance et d'efficacité.
                </p>
                
                <p>
                  Notre approche holistique couvre trois dimensions essentielles :
                </p>
                
                <ul className="space-y-3">
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <span><strong>Stratégique :</strong> Définition de votre vision et roadmap de croissance alignée sur le marché</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <span><strong>Opérationnelle :</strong> Optimisation de vos processus et organisation pour maximiser l'efficacité</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <span><strong>Financière :</strong> Amélioration de votre performance économique et préparation à la croissance</span>
                  </li>
                </ul>
                
                <p>
                  Avec plus de 15 ans d'expérience et 200+ transformations réussies, 
                  nous maîtrisons les défis spécifiques de chaque secteur et taille d'entreprise. 
                  Notre méthodologie éprouvée garantit des résultats mesurables et durables.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="bg-primary/5 rounded-2xl p-6">
                <h3 className="text-xl font-semibold text-neutral-dark mb-4">
                  Résultats Moyens
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-neutral-dark">Croissance CA</span>
                    <span className="text-primary font-bold">+35%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-neutral-dark">Réduction coûts</span>
                    <span className="text-primary font-bold">-25%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-neutral-dark">Productivité</span>
                    <span className="text-primary font-bold">+40%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-neutral-dark">ROI première année</span>
                    <span className="text-primary font-bold">300%</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Intervention Areas */}
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
              Nos Domaines d'Expertise
            </h2>
            <p className="text-lg text-gray-support max-w-3xl mx-auto">
              Une approche complète pour transformer chaque aspect de votre entreprise
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

      {/* Case Studies */}
      <section className="section-padding bg-gray-light">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-neutral-dark mb-4">
              Transformations Réussies
            </h2>
            <p className="text-lg text-gray-support max-w-3xl mx-auto">
              Découvrez comment notre expertise conseil a propulsé nos clients
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full">
                  <div className="p-6">
                    <div className="flex items-center space-x-2 mb-4">
                      <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                        <span className="text-primary font-semibold text-sm">
                          {study.client.charAt(0)}
                        </span>
                      </div>
                      <div>
                        <h3 className="font-semibold text-neutral-dark">{study.client}</h3>
                        <p className="text-sm text-gray-support">{study.sector} • {study.size}</p>
                      </div>
                    </div>
                    
                    <div className="space-y-4 text-sm">
                      <div>
                        <h4 className="font-semibold text-neutral-dark mb-1">Challenge:</h4>
                        <p className="text-gray-support">{study.challenge}</p>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-neutral-dark mb-1">Solution:</h4>
                        <p className="text-gray-support">{study.solution}</p>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-neutral-dark mb-1">Résultat:</h4>
                        <p className="text-primary font-semibold">{study.result}</p>
                      </div>
                    </div>
                    
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      icon={ArrowRight}
                      className="mt-4 w-full"
                    >
                      Lire le cas complet
                    </Button>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="section-padding bg-neutral-dark text-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">
              Notre Méthodologie Conseil
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Un processus structuré en 5 étapes pour maximiser l'impact de nos recommandations
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
                <p className="text-gray-300 text-sm mb-2">{step.description}</p>
                <span className="text-primary text-xs font-semibold">{step.duration}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
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
              Solutions Adaptées à Vos Besoins
            </h2>
            <p className="text-lg text-gray-support max-w-3xl mx-auto">
              Choisissez l'accompagnement qui correspond à vos enjeux et ambitions
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className={`h-full ${plan.popular ? 'ring-2 ring-primary' : ''} relative`}>
                  {plan.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <span className="bg-primary text-white px-4 py-1 rounded-full text-sm font-semibold">
                        Le plus choisi
                      </span>
                    </div>
                  )}
                  <div className="p-6 text-center">
                    <h3 className="text-xl font-semibold text-neutral-dark mb-2">
                      {plan.name}
                    </h3>
                    <p className="text-3xl font-bold text-primary mb-6">
                      {plan.price}
                    </p>
                    <ul className="space-y-3 mb-8">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center space-x-3">
                          <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                          <span className="text-neutral-dark text-left">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button 
                      variant={plan.popular ? "primary" : "outline"} 
                      size="lg"
                      className="w-full"
                    >
                      Commencer l'analyse
                    </Button>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary text-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Prêt à Transformer Votre Entreprise ?
            </h2>
            <p className="text-lg text-blue-100 leading-relaxed mb-8">
              Nos experts analysent gratuitement votre situation et identifient 
              vos principales opportunités d'amélioration. Démarrez votre transformation dès aujourd'hui.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <Button 
                variant="secondary" 
                size="lg" 
                icon={ArrowRight}
                href="/contact"
                className="w-full sm:w-auto"
              >
                Diagnostic gratuit 30min
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                href="/ressources/livres-blancs"
                className="w-full sm:w-auto border-white text-white hover:bg-white hover:text-primary"
              >
                Télécharger nos success stories
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ConseilService;