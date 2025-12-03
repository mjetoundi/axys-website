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
      description: 'Analyse approfondie de votre situation actuelle, identification des enjeux et opportunités'
    },
    {
      step: '2',
      title: 'Stratégie Sur-Mesure',
      description: 'Développement d\'une stratégie personnalisée alignée avec vos objectifs business'
    },
    {
      step: '3',
      title: 'Plan d\'Action',
      description: 'Définition du plan d\'action détaillé avec jalons, ressources et timeline'
    },
    {
      step: '4',
      title: 'Mise en Œuvre',
      description: 'Accompagnement opérationnel pour l\'implémentation des recommandations'
    },
    {
      step: '5',
      title: 'Suivi Performance',
      description: 'Monitoring des résultats et ajustements en continu'
    }
  ];

  const caseStudies = [
    {
      client: 'Entreprise Digitale',
      sector: 'Services Digitaux',
      size: 'Entreprise moyenne',
      challenge: 'Croissance stagnante et processus inefficaces limitant l\'expansion',
      solution: 'Restructuration opérationnelle + digitalisation + stratégie de croissance',
      result: 'Forte croissance du CA + Amélioration significative de la productivité + Expansion internationale'
    },
    {
      client: 'Industrie Locale',
      sector: 'Manufacturing',
      size: 'Entreprise établie',
      challenge: 'Optimisation des coûts et amélioration de la compétitivité',
      solution: 'Lean management + automatisation + optimisation supply chain',
      result: 'Réduction notable des coûts + Amélioration des délais de production + Satisfaction client accrue'
    },
    {
      client: 'Startup Innovante',
      sector: 'Technologie',
      size: 'Jeune entreprise',
      challenge: 'Structuration pour passage à l\'échelle et levée de fonds',
      solution: 'Structuration organisation + business model + préparation due diligence',
      result: 'Levée de fonds réussie + Structure scalable + Forte croissance'
    }
  ];


  const benefits = [
    {
      icon: TrendingUp,
      title: 'ROI Mesurable',
      description: 'Retour sur investissement démontrable avec des résultats concrets et mesurables'
    },
    {
      icon: Target,
      title: 'Objectifs Atteints',
      description: 'Accompagnement structuré pour atteindre vos objectifs dans les délais impartis'
    },
    {
      icon: Zap,
      title: 'Mise en Œuvre Rapide',
      description: 'Premiers résultats visibles dès les premières semaines d\'implémentation'
    },
    {
      icon: Award,
      title: 'Expertise Reconnue',
      description: 'Plus de 20 ans d\'expérience et de nombreuses transformations réussies en Afrique Centrale'
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
                  href="/contact"
                  className="w-full sm:w-auto"
                >
                  Contactez-nous
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  href="/services/conseil"
                  className="w-full sm:w-auto"
                >
                  En savoir plus
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
                  src="/images/Pages Services/conseil-detail.jpg"
                  alt="Conseil Stratégique"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-dark/80 via-transparent to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                  <Lightbulb className="w-16 h-16 mx-auto mb-4 opacity-90" />
                  <p className="text-lg font-semibold text-center">Conseil Stratégique</p>
                  <p className="text-blue-200 text-center">Innovation & Performance</p>
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
                  Avec plus de 20 ans d'expérience en Afrique Centrale, 
                  nous maîtrisons les défis spécifiques de chaque secteur et taille d'entreprise. 
                  Notre méthodologie éprouvée garantit des résultats mesurables et durables.
                </p>
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

      {/* Why Choose Us */}
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
              Des résultats mesurables et une expertise reconnue pour transformer votre entreprise
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full text-center">
                <div className="p-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <TrendingUp className="w-8 h-8 text-primary" />
                  </div>
                  <div className="text-4xl font-bold text-primary mb-2">150+</div>
                  <div className="text-neutral-dark font-semibold mb-1">Missions conseil</div>
                  <div className="text-sm text-gray-support">Accompagnements réussis</div>
                </div>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="h-full text-center">
                <div className="p-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Target className="w-8 h-8 text-primary" />
                  </div>
                  <div className="text-4xl font-bold text-primary mb-2">95%</div>
                  <div className="text-neutral-dark font-semibold mb-1">Objectifs atteints</div>
                  <div className="text-sm text-gray-support">Taux de réussite</div>
                </div>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <Card className="h-full text-center">
                <div className="p-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Zap className="w-8 h-8 text-primary" />
                  </div>
                  <div className="text-4xl font-bold text-primary mb-2">2-4</div>
                  <div className="text-neutral-dark font-semibold mb-1">Semaines</div>
                  <div className="text-sm text-gray-support">Premiers résultats visibles</div>
                </div>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <Card className="h-full text-center">
                <div className="p-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Award className="w-8 h-8 text-primary" />
                  </div>
                  <div className="text-4xl font-bold text-primary mb-2">20+</div>
                  <div className="text-neutral-dark font-semibold mb-1">Ans d'expérience</div>
                  <div className="text-sm text-gray-support">En Afrique Centrale</div>
                </div>
              </Card>
            </motion.div>
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
              Prêt à Transformer Votre Entreprise ?
            </h2>
            <p className="text-lg text-blue-100 leading-relaxed mb-8">
              Nos experts analysent votre situation et identifient 
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
                Contactez-nous
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ConseilService;