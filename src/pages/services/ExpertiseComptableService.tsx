import React from 'react';
import { motion } from 'framer-motion';
import { 
  Calculator, 
  CheckCircle, 
  ArrowRight, 
  FileText,
  BarChart3,
  Clock,
  Users,
  Award,
  Shield,
  TrendingUp,
  Calendar
} from 'lucide-react';
import Card from '../../components/ui/Card';
import Button from '../../components/ui/Button';
import Breadcrumbs from '../../components/ui/Breadcrumbs';

const ExpertiseComptableService: React.FC = () => {
  const breadcrumbs = [
    { label: 'Accueil', href: '/' },
    { label: 'Services', href: '/services' },
    { label: 'Expertise Comptable', href: '/services/expertise-comptable' }
  ];

  const interventionAreas = [
    {
      id: 'comptabilite',
      title: 'Tenue Comptabilité',
      description: 'Gestion complète de votre comptabilité générale et analytique',
      features: [
        'Saisie comptable automatisée',
        'Rapprochements bancaires',
        'Lettrage et révisions',
        'Comptabilité analytique par projet'
      ],
      icon: FileText
    },
    {
      id: 'fiscale',
      title: 'Déclarations Fiscales',
      description: 'Optimisation et gestion de toutes vos obligations fiscales',
      features: [
        'TVA mensuelle/trimestrielle',
        'Liasse fiscale annuelle',
        'Impôt sur les sociétés',
        'CET et autres contributions'
      ],
      icon: Calculator
    },
    {
      id: 'sociale',
      title: 'Déclarations Sociales',
      description: 'Gestion complète de vos obligations sociales et RH',
      features: [
        'Bulletins de paie',
        'Déclarations URSSAF',
        'DUE et DSN mensuelles',
        'Contrats de travail et avenants'
      ],
      icon: Users
    }
  ];

  const processSteps = [
    {
      step: '1',
      title: 'Prise de Connaissance',
      description: 'Analyse de votre activité, organisation comptable existante et besoins spécifiques'
    },
    {
      step: '2',
      title: 'Paramétrage',
      description: 'Configuration des outils, plan comptable personnalisé et procédures adaptées'
    },
    {
      step: '3',
      title: 'Reprise d\'Antériorité',
      description: 'Reprise des données historiques et régularisation des écritures si nécessaire'
    },
    {
      step: '4',
      title: 'Tenue Courante',
      description: 'Gestion mensuelle : saisie, révision, déclarations et reporting'
    },
    {
      step: '5',
      title: 'Clôture Annuelle',
      description: 'Inventaire, écritures de régularisation, comptes annuels et liasse fiscale'
    }
  ];

  const caseStudies = [
    {
      client: 'Entreprise Tech',
      sector: 'Services Numériques',
      size: 'Petite entreprise',
      challenge: 'Externalisation comptable complète pour se concentrer sur le business',
      solution: 'Expertise comptable intégrale + outils digitaux + reporting mensuel',
      result: 'Gain de temps significatif + Conformité totale + Visibilité financière en temps réel'
    },
    {
      client: 'Société Industrielle',
      sector: 'Industrie',
      size: 'Entreprise moyenne',
      challenge: 'Comptabilité analytique par projet et optimisation fiscale',
      solution: 'Comptabilité analytique avancée + optimisation charges + conseil fiscal',
      result: 'Visibilité sur la rentabilité par projet + Économie fiscale notable + ROI élevé'
    },
    {
      client: 'Commerce Local',
      sector: 'Commerce de détail',
      size: 'Multi-sites',
      challenge: 'Gestion multi-sites, inventaires complexes et croissance rapide',
      solution: 'Comptabilité multi-établissements + automatisation + tableaux de bord',
      result: 'Consolidation en temps réel + Forte automatisation + Support à la croissance'
    }
  ];


  const benefits = [
    {
      icon: Clock,
      title: 'Gain de Temps',
      description: 'Libérez 15-25h par mois pour vous concentrer sur votre cœur de métier'
    },
    {
      icon: Shield,
      title: 'Sécurité Juridique',
      description: 'Conformité garantie et veille réglementaire permanente'
    },
    {
      icon: TrendingUp,
      title: 'Pilotage Performant',
      description: 'Tableaux de bord et indicateurs pour optimiser votre rentabilité'
    },
    {
      icon: Award,
      title: 'Expertise Certifiée',
      description: 'Diplômés experts-comptables avec spécialisations sectorielles'
    }
  ];

  const tools = [
    'Sage Business Cloud',
    'Cegid Loop',
    'Dext (réception factures)',
    'Quadratus',
    'MyUnisoft',
    'Silae Paie',
    'Interface bancaire sécurisée',
    'Coffre-fort numérique'
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
                <Calculator className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-neutral-dark mb-6">
                Expertise Comptable
              </h1>
              <p className="text-xl text-gray-support mb-8 leading-relaxed">
                Gestion comptable complète et fiable. Confiez-nous votre comptabilité 
                et concentrez-vous sur votre développement commercial et stratégique.
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
                  Tester notre service
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
                  <BarChart3 className="w-24 h-24 mx-auto mb-4 opacity-80" />
                  <p className="text-lg font-semibold">Expertise Comptable</p>
                  <p className="text-blue-200">Conformité & Performance</p>
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
              Pourquoi Externaliser Votre Comptabilité ?
            </h2>
            <p className="text-lg text-gray-support max-w-3xl mx-auto">
              Des avantages concrets pour libérer votre potentiel entrepreneurial
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
                Expertise Comptable : Votre Partenaire de Confiance
              </h2>
              
              <div className="prose prose-lg text-neutral-dark space-y-6">
                <p>
                  L'expertise comptable ne se limite pas à la simple tenue de livres. 
                  C'est un accompagnement stratégique qui vous apporte sérénité, 
                  conformité et vision claire de votre performance économique.
                </p>
                
                <p>
                  Notre service d'expertise comptable couvre l'intégralité de vos besoins :
                </p>
                
                <ul className="space-y-3">
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <span><strong>Comptabilité générale :</strong> Tenue rigoureuse de vos livres comptables et respect des obligations légales</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <span><strong>Fiscalité d'entreprise :</strong> Optimisation de vos charges fiscales et respect des échéances</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <span><strong>Conseil et pilotage :</strong> Accompagnement dans vos décisions et tableaux de bord personnalisés</span>
                  </li>
                </ul>
                
                <p>
                  Avec nos outils digitaux de dernière génération et notre expertise 
                  sectorielle, nous transformons la contrainte comptable en véritable 
                  levier de performance pour votre entreprise.
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
                  Nos Outils Digitaux
                </h3>
                <div className="space-y-2">
                  {tools.map((tool, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                      <span className="text-sm text-neutral-dark">{tool}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="bg-secondary/5 rounded-2xl p-6">
                <h3 className="text-xl font-semibold text-neutral-dark mb-4">
                  Délais Garantis
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-neutral-dark text-sm">Saisie comptable</span>
                    <span className="text-secondary font-semibold text-sm">J+3</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-neutral-dark text-sm">TVA mensuelle</span>
                    <span className="text-secondary font-semibold text-sm">J+10</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-neutral-dark text-sm">Bilan provisoire</span>
                    <span className="text-secondary font-semibold text-sm">J+15</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-neutral-dark text-sm">Comptes annuels</span>
                    <span className="text-secondary font-semibold text-sm">6 semaines</span>
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
              Nos Domaines d'Intervention
            </h2>
            <p className="text-lg text-gray-support max-w-3xl mx-auto">
              Un service complet pour couvrir tous vos besoins comptables et fiscaux
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
              Témoignages de Nos Clients
            </h2>
            <p className="text-lg text-gray-support max-w-3xl mx-auto">
              Découvrez comment notre expertise comptable a simplifié leur gestion
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
                        <h4 className="font-semibold text-neutral-dark mb-1">Besoin:</h4>
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
                      Voir le témoignage complet
                    </Button>
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
              Notre Processus d'Intégration
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Une prise en charge progressive et sécurisée de votre comptabilité
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
              Prêt à Simplifier Votre Comptabilité ?
            </h2>
            <p className="text-lg text-blue-100 leading-relaxed mb-8">
              Confiez votre comptabilité à nos experts et libérez votre temps 
              pour développer votre entreprise.
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

export default ExpertiseComptableService;