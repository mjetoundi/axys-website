import React from 'react';
import { motion } from 'framer-motion';
import { 
  Users, 
  CheckCircle, 
  ArrowRight, 
  FileText,
  Clock,
  Award,
  Shield,
  TrendingUp,
  UserCheck,
  Briefcase,
  Scale
} from 'lucide-react';
import Card from '../../components/ui/Card';
import Button from '../../components/ui/Button';
import Breadcrumbs from '../../components/ui/Breadcrumbs';

const ExternalisationRHService: React.FC = () => {
  const breadcrumbs = [
    { label: 'Accueil', href: '/' },
    { label: 'Services', href: '/services' },
    { label: 'Externalisation RH', href: '/services/externalisation-rh' }
  ];

  const interventionAreas = [
    {
      id: 'paie',
      title: 'Gestion de Paie',
      description: 'Traitement complet et sécurisé de vos bulletins de paie',
      features: [
        'Bulletins de paie conformes',
        'Déclarations sociales (DSN)',
        'Gestion des congés et absences',
        'Soldes de tout compte'
      ],
      icon: FileText
    },
    {
      id: 'administration',
      title: 'Administration RH',
      description: 'Gestion administrative complète de vos collaborateurs',
      features: [
        'Contrats de travail et avenants',
        'Registre du personnel',
        'Déclarations d\'embauche/sortie',
        'Attestations et certificats'
      ],
      icon: Users
    },
    {
      id: 'conseil',
      title: 'Conseil RH Juridique',
      description: 'Accompagnement juridique et stratégique en ressources humaines',
      features: [
        'Conseil droit du travail',
        'Gestion des conflits sociaux',
        'Optimisation charges sociales',
        'Audit conformité sociale'
      ],
      icon: Scale
    }
  ];

  const processSteps = [
    {
      step: '1',
      title: 'Audit Existant',
      description: 'Analyse de votre organisation RH actuelle, processus et niveau de conformité',
      duration: '1-2 semaines'
    },
    {
      step: '2',
      title: 'Transfert Sécurisé',
      description: 'Migration des données RH, paramétrage outils et formation équipes',
      duration: '2-3 semaines'
    },
    {
      step: '3',
      title: 'Gestion Courante',
      description: 'Prise en charge complète de l\'administration RH et paie mensuelle',
      duration: 'Mensuel'
    },
    {
      step: '4',
      title: 'Conseil & Optimisation',
      description: 'Accompagnement continu et optimisation des processus RH',
      duration: 'Ongoing'
    },
    {
      step: '5',
      title: 'Reporting & Pilotage',
      description: 'Tableaux de bord RH et indicateurs de pilotage social',
      duration: 'Mensuel'
    }
  ];

  const caseStudies = [
    {
      client: 'TechGrowth Solutions',
      sector: 'Services IT',
      size: '45 collaborateurs',
      challenge: 'Externalisation RH complète pour croissance rapide et conformité sociale',
      solution: 'Externalisation paie + administration RH + conseil juridique + SIRH',
      result: 'Conformité 100% + Gain temps 25h/mois + Support croissance +150%'
    },
    {
      client: 'Manufacture Expert',
      sector: 'Industrie',
      size: '85 collaborateurs',
      challenge: 'Optimisation charges sociales et gestion complexité conventions collectives',
      solution: 'Audit social + optimisation charges + gestion paie multi-conventions',
      result: 'Économies charges 12% + Conformité convention + Réduction risques juridiques'
    },
    {
      client: 'Services Plus',
      sector: 'Services B2B',
      size: '30 collaborateurs',
      challenge: 'Professionnalisation RH et structuration pour développement commercial',
      solution: 'Externalisation RH intégrale + outils digitaux + politique RH',
      result: 'Structure RH pro + Attraction talents + Focus business développement'
    }
  ];

  const pricingPlans = [
    {
      name: 'Essentiel TPE',
      price: 'À partir de 25 €/bulletin',
      features: [
        'Bulletins de paie conformes',
        'Déclarations sociales',
        'Support téléphonique',
        'Espace client sécurisé',
        'Attestations standards'
      ],
      popular: false
    },
    {
      name: 'Complet PME',
      price: 'À partir de 35 €/bulletin',
      features: [
        'Gestion paie complète',
        'Administration RH',
        'Conseil juridique inclus',
        'Contrats et avenants',
        'Tableaux de bord RH',
        'Formation managers'
      ],
      popular: true
    },
    {
      name: 'Expert Entreprise',
      price: 'Sur devis',
      features: [
        'DRH externalisé à temps partagé',
        'Gestion multi-conventions',
        'Audit social annuel',
        'Accompagnement restructuration',
        'Négociation sociale',
        'Politique RH sur-mesure'
      ],
      popular: false
    }
  ];

  const benefits = [
    {
      icon: Clock,
      title: 'Gain de Temps',
      description: 'Libérez 20-30h par mois dédiées à la gestion administrative RH'
    },
    {
      icon: Shield,
      title: 'Sécurité Juridique',
      description: 'Conformité totale au droit du travail et réduction des risques sociaux'
    },
    {
      icon: TrendingUp,
      title: 'Maîtrise des Coûts',
      description: 'Visibilité et optimisation de vos charges sociales et masse salariale'
    },
    {
      icon: Award,
      title: 'Expertise Spécialisée',
      description: 'Gestionnaires de paie diplômés et juristes en droit social'
    }
  ];

  const servicesInclus = [
    {
      category: 'Paie & Déclarations',
      items: [
        'Bulletins de paie mensuels',
        'DSN mensuelle automatisée',
        'Déclarations annuelles (DADS-U)',
        'Gestion congés payés et RTT',
        'Calcul heures supplémentaires',
        'Primes et indemnités',
        'Soldes de tout compte'
      ]
    },
    {
      category: 'Administration RH',
      items: [
        'Contrats de travail types',
        'Avenants et modifications',
        'DPAE (déclarations d\'embauche)',
        'Registre du personnel',
        'Attestations Pôle Emploi',
        'Certificats de travail',
        'Visites médicales'
      ]
    },
    {
      category: 'Conseil & Juridique',
      items: [
        'Veille juridique sociale',
        'Conseil droit du travail',
        'Gestion disciplinaire',
        'Ruptures conventionnelles',
        'Négociation avec représentants',
        'Audit conformité sociale',
        'Formation managers'
      ]
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
                <Users className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-neutral-dark mb-6">
                Externalisation RH
              </h1>
              <p className="text-xl text-gray-support mb-8 leading-relaxed">
                Solution RH complète et sécurisée. Confiez la gestion de vos ressources 
                humaines à nos experts et concentrez-vous sur votre cœur de métier.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  variant="primary" 
                  size="lg" 
                  icon={ArrowRight}
                  className="w-full sm:w-auto"
                >
                  Audit RH gratuit
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="w-full sm:w-auto"
                >
                  Calculer mes économies
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
                  <UserCheck className="w-24 h-24 mx-auto mb-4 opacity-80" />
                  <p className="text-lg font-semibold">Externalisation RH</p>
                  <p className="text-blue-200">Conformité & Expertise</p>
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
              Pourquoi Externaliser Vos RH ?
            </h2>
            <p className="text-lg text-gray-support max-w-3xl mx-auto">
              Des avantages concrets pour optimiser la gestion de vos ressources humaines
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
                Externalisation RH : Votre Département RH Externalisé
              </h2>
              
              <div className="prose prose-lg text-neutral-dark space-y-6">
                <p>
                  L'externalisation RH représente bien plus qu'un simple service de paie. 
                  C'est un partenariat stratégique qui vous apporte l'expertise d'un 
                  département RH complet sans les contraintes d'une structure interne.
                </p>
                
                <p>
                  Notre approche globale couvre trois piliers essentiels :
                </p>
                
                <ul className="space-y-3">
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <span><strong>Gestion administrative :</strong> Paie, contrats, déclarations sociales en parfaite conformité</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <span><strong>Conseil juridique :</strong> Accompagnement en droit du travail et prévention des risques sociaux</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <span><strong>Pilotage RH :</strong> Tableaux de bord et indicateurs pour optimiser votre politique RH</span>
                  </li>
                </ul>
                
                <p>
                  Nos gestionnaires de paie diplômés et juristes en droit social 
                  vous garantissent une expertise de haut niveau et une veille 
                  réglementaire permanente pour anticiper les évolutions législatives.
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
                  Économies Moyennes
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-neutral-dark">Coût interne RH</span>
                    <span className="text-primary font-bold">-40%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-neutral-dark">Temps dirigeant</span>
                    <span className="text-primary font-bold">-60%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-neutral-dark">Risques juridiques</span>
                    <span className="text-primary font-bold">-80%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-neutral-dark">ROI annuel</span>
                    <span className="text-primary font-bold">200%</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-secondary/5 rounded-2xl p-6">
                <h3 className="text-xl font-semibold text-neutral-dark mb-4">
                  Garanties Service
                </h3>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-secondary flex-shrink-0" />
                    <span className="text-sm text-neutral-dark">Conformité légale garantie</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-secondary flex-shrink-0" />
                    <span className="text-sm text-neutral-dark">Support prioritaire 24/48h</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-secondary flex-shrink-0" />
                    <span className="text-sm text-neutral-dark">Bulletins sous 48h</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-secondary flex-shrink-0" />
                    <span className="text-sm text-neutral-dark">Sécurité données certifiée</span>
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
              Services Inclus dans Notre Offre
            </h2>
            <p className="text-lg text-gray-support max-w-3xl mx-auto">
              Une solution RH complète pour couvrir tous vos besoins
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {servicesInclus.map((service, index) => (
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
              Nos Domaines d'Expertise
            </h2>
            <p className="text-lg text-gray-support max-w-3xl mx-auto">
              Trois piliers pour une gestion RH optimale et sécurisée
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
              Témoignages Clients
            </h2>
            <p className="text-lg text-gray-support max-w-3xl mx-auto">
              Découvrez comment notre expertise RH a transformé leur gestion
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
              Notre Processus de Prise en Charge
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Une transition fluide et sécurisée de vos processus RH
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
              Tarification Simple et Transparente
            </h2>
            <p className="text-lg text-gray-support max-w-3xl mx-auto">
              Des forfaits adaptés à votre effectif sans coût caché
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
                        Le plus complet
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
                      Commencer maintenant
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
              Prêt à Optimiser Votre Gestion RH ?
            </h2>
            <p className="text-lg text-blue-100 leading-relaxed mb-8">
              Libérez votre temps et sécurisez votre conformité sociale. 
              Nos experts RH vous accompagnent dès maintenant.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <Button 
                variant="secondary" 
                size="lg" 
                icon={ArrowRight}
                href="/contact"
                className="w-full sm:w-auto"
              >
                Audit RH gratuit 1h
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                href="/contact"
                className="w-full sm:w-auto border-white text-white hover:bg-white hover:text-primary"
              >
                Calculer vos économies
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ExternalisationRHService;