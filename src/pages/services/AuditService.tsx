import React from 'react';
import { motion } from 'framer-motion';
import { 
  Shield, 
  CheckCircle, 
  ArrowRight, 
  Target,
  FileText,
  Award,
  Clock,
  Users,
  TrendingUp,
  BarChart3
} from 'lucide-react';
import Card from '../../components/ui/Card';
import Button from '../../components/ui/Button';
import Breadcrumbs from '../../components/ui/Breadcrumbs';

const AuditService: React.FC = () => {
  const breadcrumbs = [
    { label: 'Accueil', href: '/' },
    { label: 'Services', href: '/services' },
    { label: 'Audit & Contrôle', href: '/services/audit' }
  ];

  const interventionAreas = [
    {
      id: 'financier',
      title: 'Audit Financier',
      description: 'Vérification complète de vos états financiers et comptabilité',
      features: [
        'Audit des comptes annuels',
        'Vérification états financiers consolidés',
        'Contrôle interne comptable',
        'Audit spécifique par secteur'
      ],
      icon: FileText
    },
    {
      id: 'operationnel',
      title: 'Audit Opérationnel',
      description: 'Analyse de l\'efficacité de vos processus métier',
      features: [
        'Diagnostic processus métier',
        'Analyse efficacité opérationnelle',
        'Optimisation procédures',
        'Gouvernance et organisation'
      ],
      icon: Target
    },
    {
      id: 'conformite',
      title: 'Conformité & Risques',
      description: 'Évaluation de votre conformité réglementaire',
      features: [
        'Audit de conformité légale/réglementaire',
        'Évaluation risques juridiques',
        'Conformité normes sectorielles',
        'Reporting réglementaire'
      ],
      icon: Shield
    }
  ];

  const processSteps = [
    {
      step: '1',
      title: 'Compréhension & Planning',
      description: 'Rencontre exploratoire avec stakeholders, définition du scope d\'audit et planification détaillée'
    },
    {
      step: '2',
      title: 'Collecte d\'Informations',
      description: 'Audit sur site et documentaire, interviews processus clés, analyse données financières'
    },
    {
      step: '3',
      title: 'Analyse & Diagnostic',
      description: 'Identification dysfonctionnements, évaluation risques, synthèse findings'
    },
    {
      step: '4',
      title: 'Recommandations',
      description: 'Rapport d\'audit détaillé, propositions d\'amélioration, plan action priorisé'
    },
    {
      step: '5',
      title: 'Suivi & Implémentation',
      description: 'Accompagnement mise en place, suivi des recommandations, reporting de progression'
    }
  ];

  const caseStudies = [
    {
      client: 'Entreprise Tech',
      sector: 'Technologie',
      size: 'PME en croissance',
      challenge: 'Audit complet avant levée de fonds, conformité et fiabilité des données financières',
      solution: 'Audit financier adapté aux PME tech + reporting investisseurs',
      result: 'Levée de fonds réussie + Optimisation comptable significative'
    },
    {
      client: 'Société Industrielle',
      sector: 'Manufacturing',
      size: 'Entreprise moyenne',
      challenge: 'Optimisation des processus opérationnels et maîtrise des coûts',
      solution: 'Audit opérationnel complet + recommandations d\'amélioration',
      result: 'Réduction notable des coûts + Amélioration de la productivité'
    },
    {
      client: 'Commerce en ligne',
      sector: 'E-commerce',
      size: 'Startup',
      challenge: 'Mise en conformité RGPD et audit sécurité des données',
      solution: 'Audit conformité + formation équipe + mise en place de procédures',
      result: 'Conformité assurée + Certification obtenue + Confiance clients renforcée'
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
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-neutral-dark mb-6">
                Audit & Contrôle
              </h1>
              <p className="text-xl text-gray-support mb-8 leading-relaxed">
                Diagnostiquer, maîtriser, optimiser. Notre expertise d'audit vous assure 
                conformité, fiabilité et performance pour sécuriser votre croissance.
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
                  Télécharger la brochure
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
                  src="/images/Pages Services/audit-detail.jpg"
                  alt="Audit Professionnel"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-dark/80 via-transparent to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                  <Shield className="w-16 h-16 mx-auto mb-4 opacity-90" />
                  <p className="text-lg font-semibold text-center">Audit Professionnel</p>
                  <p className="text-blue-200 text-center">Standards Internationaux</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Service Overview */}
      <section className="section-padding">
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
                Qu'est-ce que l'Audit & Contrôle ?
              </h2>
              
              <div className="prose prose-lg text-neutral-dark space-y-6">
                <p>
                  L'audit & contrôle est un processus complet et structuré de diagnostic 
                  des dysfonctionnements au sein de vos procédures, de votre organisation 
                  et vos méthodes de travail. Cette mission critique vous permet d'identifier 
                  les risques et d'assurer la fiabilité complète de votre information financière.
                </p>
                
                <p>
                  Nos missions d'audit couvrent trois axes majeurs :
                </p>
                
                <ul className="space-y-3">
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <span><strong>Contrôle de la fiabilité financière :</strong> Vérification complète des données comptables et états financiers</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <span><strong>Qualité des processus opérationnels :</strong> Audit des procédures internes et conformité des workflow</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <span><strong>Mesure des risques légaux et réglementaires :</strong> Évaluation complète de la conformité légale</span>
                  </li>
                </ul>
                
                <p>
                  Chez Axys, nous appliquons une méthodologie rigoureuse basée sur 
                  des normes internationales. Nos experts utilisent des outils technologiques 
                  avancés pour une analyse précise et un reporting transparent.
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
                  Points Clés
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Clock className="w-5 h-5 text-primary" />
                    <span className="text-neutral-dark">2-6 semaines selon complexité</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Users className="w-5 h-5 text-primary" />
                    <span className="text-neutral-dark">Équipe d'experts certifiés</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Award className="w-5 h-5 text-primary" />
                    <span className="text-neutral-dark">Normes internationales</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <TrendingUp className="w-5 h-5 text-primary" />
                    <span className="text-neutral-dark">ROI mesurable</span>
                  </div>
                </div>
              </div>
            </motion.div>
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
              Une expertise complète pour couvrir tous vos besoins d'audit et de contrôle
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
              Pourquoi Choisir Notre Expertise en Audit ?
            </h2>
            <p className="text-lg text-gray-support max-w-3xl mx-auto">
              Une expertise reconnue et des résultats mesurables pour sécuriser votre entreprise
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
                    <Award className="w-8 h-8 text-primary" />
                  </div>
                  <div className="text-4xl font-bold text-primary mb-2">200+</div>
                  <div className="text-neutral-dark font-semibold mb-1">Audits réalisés</div>
                  <div className="text-sm text-gray-support">Depuis 2001</div>
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
                    <Shield className="w-8 h-8 text-primary" />
                  </div>
                  <div className="text-4xl font-bold text-primary mb-2">100%</div>
                  <div className="text-neutral-dark font-semibold mb-1">Conformité</div>
                  <div className="text-sm text-gray-support">Normes internationales</div>
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
                    <Users className="w-8 h-8 text-primary" />
                  </div>
                  <div className="text-4xl font-bold text-primary mb-2">15+</div>
                  <div className="text-neutral-dark font-semibold mb-1">Experts certifiés</div>
                  <div className="text-sm text-gray-support">Équipe pluridisciplinaire</div>
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
                    <TrendingUp className="w-8 h-8 text-primary" />
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
              Notre Processus d'Audit
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Un processus structuré en 5 étapes pour garantir efficacité et transparence
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
              Prêt à Sécuriser votre Audit ?
            </h2>
            <p className="text-lg text-blue-100 leading-relaxed mb-8">
              Nos experts analysent vos besoins et vous proposent 
              une solution d'audit personnalisée. Contactez-nous dès aujourd'hui.
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

export default AuditService;