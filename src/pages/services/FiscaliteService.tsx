import React from 'react';
import { motion } from 'framer-motion';
import { 
  FileText, 
  CheckCircle, 
  ArrowRight, 
  Calculator,
  TrendingDown,
  Shield,
  Clock,
  Award,
  TrendingUp,
  PiggyBank,
  Scale,
  Building
} from 'lucide-react';
import Card from '../../components/ui/Card';
import Button from '../../components/ui/Button';
import Breadcrumbs from '../../components/ui/Breadcrumbs';

const FiscaliteService: React.FC = () => {
  const breadcrumbs = [
    { label: 'Accueil', href: '/' },
    { label: 'Services', href: '/services' },
    { label: 'Fiscalité & Advisory', href: '/services/fiscalite' }
  ];

  const interventionAreas = [
    {
      id: 'optimisation',
      title: 'Optimisation Fiscale',
      description: 'Réduction légale de votre charge fiscale grâce à nos stratégies expertes',
      features: [
        'Audit fiscal approfondi',
        'Stratégies d\'optimisation IS/IR',
        'Montages juridiques adaptés',
        'Crédit d\'impôt et niches fiscales'
      ],
      icon: TrendingDown
    },
    {
      id: 'conseil',
      title: 'Conseil Fiscal Stratégique',
      description: 'Accompagnement dans vos décisions à fort impact fiscal',
      features: [
        'Conseil acquisitions/cessions',
        'Restructurations et holdings',
        'Transmission d\'entreprise',
        'Fiscalité internationale'
      ],
      icon: Scale
    },
    {
      id: 'conformite',
      title: 'Conformité & Déclarations',
      description: 'Gestion complète de vos obligations fiscales',
      features: [
        'Liasses fiscales annuelles',
        'Déclarations TVA et CET',
        'Contrôles et contentieux',
        'Veille réglementaire'
      ],
      icon: Shield
    }
  ];

  const processSteps = [
    {
      step: '1',
      title: 'Audit Fiscal Initial',
      description: 'Analyse complète de votre situation fiscale actuelle et identification des optimisations'
    },
    {
      step: '2',
      title: 'Stratégie Personnalisée',
      description: 'Élaboration d\'une stratégie fiscale sur-mesure adaptée à vos objectifs'
    },
    {
      step: '3',
      title: 'Mise en Œuvre',
      description: 'Implémentation des optimisations et montages juridiques recommandés'
    },
    {
      step: '4',
      title: 'Suivi & Déclarations',
      description: 'Gestion courante des obligations fiscales et suivi des optimisations'
    },
    {
      step: '5',
      title: 'Pilotage Continu',
      description: 'Veille fiscale et ajustements stratégiques en fonction des évolutions'
    }
  ];

  const caseStudies = [
    {
      client: 'Holding Familiale',
      sector: 'Investissement',
      size: 'Patrimoine important',
      challenge: 'Optimisation fiscale pour transmission familiale et réduction IFI',
      solution: 'Restructuration holding + pacte Dutreil + optimisation IFI',
      result: 'Économie fiscale significative + Transmission optimisée + Réduction notable de l\'IFI'
    },
    {
      client: 'Groupe Industriel',
      sector: 'Manufacturing',
      size: 'CA important',
      challenge: 'Optimisation IS et restructuration post-acquisition internationale',
      solution: 'Intégration fiscale + crédit impôt recherche + optimisation holding',
      result: 'Économie d\'IS notable + CIR optimisé + Structure internationale efficiente'
    },
    {
      client: 'Startup Tech',
      sector: 'Technologie',
      size: 'En croissance',
      challenge: 'Structuration fiscale optimale pour croissance et exit strategy',
      solution: 'Holding JEI + optimisation + fiscalité internationale',
      result: 'Statut JEI obtenu + Structure optimisée + Exit strategy fiscalement efficiente'
    }
  ];


  const benefits = [
    {
      icon: PiggyBank,
      title: 'Économies Substantielles',
      description: 'Réduction significative de votre charge fiscale annuelle'
    },
    {
      icon: Shield,
      title: 'Sécurité Juridique',
      description: 'Conformité totale et anticipation des risques fiscaux'
    },
    {
      icon: TrendingUp,
      title: 'Performance Optimisée',
      description: 'Amélioration de votre rentabilité nette et cash-flow'
    },
    {
      icon: Award,
      title: 'Expertise Reconnue',
      description: 'Fiscalistes experts diplômés et spécialisés par secteur'
    }
  ];

  const fiscalDomains = [
    {
      category: 'Fiscalité des Entreprises',
      items: [
        'Impôt sur les sociétés (IS)',
        'Contribution économique territoriale (CET)',
        'Taxes sur les salaires',
        'Crédits d\'impôts (CIR, CII, CICE...)',
        'Déficits reportables',
        'Intégration fiscale',
        'Régimes spéciaux (JEI, ZFU...)'
      ]
    },
    {
      category: 'Fiscalité des Dirigeants',
      items: [
        'Impôt sur le revenu (IR)',
        'Prélèvements sociaux',
        'Impôt sur la fortune immobilière (IFI)',
        'Plus-values professionnelles',
        'Stock-options et BSPCE',
        'Carried interest',
        'Expatriation fiscale'
      ]
    },
    {
      category: 'Opérations Spéciales',
      items: [
        'Fusions-acquisitions',
        'LBO et montages financiers',
        'Restructurations',
        'Transmissions d\'entreprise',
        'Pacte Dutreil',
        'Apport-cession',
        'Fiscalité internationale'
      ]
    }
  ];

  const optimisationTechniques = [
    'Amortissements dégressifs et exceptionnels',
    'Provisions pour risques et charges',
    'Déficits et moins-values reportables',
    'Crédit d\'impôt recherche optimisé',
    'Intégration et consolidation fiscale',
    'Holdings et sociétés mères',
    'Montages de défiscalisation légale',
    'Optimisation TVA et taxes annexes'
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
                <FileText className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-neutral-dark mb-6">
                Fiscalité & Advisory
              </h1>
              <p className="text-xl text-gray-support mb-8 leading-relaxed">
                Optimisation fiscale stratégique et conseil expert. Maximisez votre performance 
                économique tout en sécurisant votre conformité fiscale.
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
                  src="/images/Services/service-fiscalite.jpg"
                  alt="Fiscalité & Advisory"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-dark/80 via-transparent to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                  <Calculator className="w-16 h-16 mx-auto mb-4 opacity-90" />
                  <p className="text-lg font-semibold text-center">Fiscalité & Advisory</p>
                  <p className="text-blue-200 text-center">Optimisation & Conformité</p>
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
              Pourquoi Optimiser Votre Fiscalité ?
            </h2>
            <p className="text-lg text-gray-support max-w-3xl mx-auto">
              Des économies significatives pour booster votre rentabilité
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
                Fiscalité & Advisory : Votre Avantage Concurrentiel
              </h2>
              
              <div className="prose prose-lg text-neutral-dark space-y-6">
                <p>
                  La fiscalité d'entreprise représente l'un des leviers les plus puissants 
                  d'optimisation de votre rentabilité. Une stratégie fiscale bien pensée 
                  peut transformer vos charges en opportunités d'économies durables.
                </p>
                
                <p>
                  Notre approche conseil fiscal couvre trois dimensions stratégiques :
                </p>
                
                <ul className="space-y-3">
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <span><strong>Optimisation immédiate :</strong> Réduction de vos charges fiscales actuelles par des techniques éprouvées</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <span><strong>Stratégie long terme :</strong> Structuration fiscalement efficiente pour vos projets de développement</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <span><strong>Sécurisation complète :</strong> Conformité légale et anticipation des risques de contrôle</span>
                  </li>
                </ul>
                
                <p>
                  Nos fiscalistes experts, diplômés et spécialisés par secteur, 
                  maîtrisent les subtilités réglementaires et les dernières évolutions 
                  législatives pour vous garantir une optimisation maximale en toute légalité.
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
                  Techniques d'Optimisation
                </h3>
                <div className="space-y-2">
                  {optimisationTechniques.slice(0, 6).map((technique, index) => (
                    <div key={index} className="flex items-start space-x-2">
                      <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-neutral-dark">{technique}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="bg-secondary/5 rounded-2xl p-6">
                <h3 className="text-xl font-semibold text-neutral-dark mb-4">
                  Résultats Attendus
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-neutral-dark">Économie IS</span>
                    <span className="text-secondary font-bold">Réduction</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-neutral-dark">Optimisation CET</span>
                    <span className="text-secondary font-bold">Amélioration</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-neutral-dark">Crédits d'impôt</span>
                    <span className="text-secondary font-bold">Maximisés</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-neutral-dark">ROI annuel</span>
                    <span className="text-secondary font-bold">Élevé</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Fiscal Domains */}
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
              Nos Domaines de Spécialisation
            </h2>
            <p className="text-lg text-gray-support max-w-3xl mx-auto">
              Une expertise complète pour tous vos enjeux fiscaux
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {fiscalDomains.map((domain, index) => (
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
                      {domain.category}
                    </h3>
                    <ul className="space-y-3">
                      {domain.items.map((item, itemIndex) => (
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
              Nos Services Fiscaux
            </h2>
            <p className="text-lg text-gray-support max-w-3xl mx-auto">
              Trois piliers pour une fiscalité optimisée et sécurisée
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
              Pourquoi Choisir Notre Expertise Fiscale ?
            </h2>
            <p className="text-lg text-gray-support max-w-3xl mx-auto">
              Une expertise reconnue pour optimiser votre fiscalité en toute légalité
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
                    <PiggyBank className="w-8 h-8 text-primary" />
                  </div>
                  <div className="text-4xl font-bold text-primary mb-2">30%</div>
                  <div className="text-neutral-dark font-semibold mb-1">Économie moyenne</div>
                  <div className="text-sm text-gray-support">Sur charges fiscales</div>
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
                  <div className="text-sm text-gray-support">Légale garantie</div>
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
                    <FileText className="w-8 h-8 text-primary" />
                  </div>
                  <div className="text-4xl font-bold text-primary mb-2">200+</div>
                  <div className="text-neutral-dark font-semibold mb-1">Optimisations</div>
                  <div className="text-sm text-gray-support">Réalisées annuellement</div>
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
                  <div className="text-4xl font-bold text-primary mb-2">8+</div>
                  <div className="text-neutral-dark font-semibold mb-1">Fiscalistes experts</div>
                  <div className="text-sm text-gray-support">Spécialisés par secteur</div>
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
              Notre Processus d'Optimisation
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Une approche méthodique pour maximiser vos économies fiscales
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
              Prêt à Optimiser Votre Fiscalité ?
            </h2>
            <p className="text-lg text-blue-100 leading-relaxed mb-8">
              Nos experts fiscalistes identifient immédiatement vos opportunités d'économies. 
              Contactez-nous pour discuter de votre situation fiscale.
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

export default FiscaliteService;