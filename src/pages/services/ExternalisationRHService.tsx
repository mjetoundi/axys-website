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
      description: 'Analyse de votre organisation RH actuelle, processus et niveau de conformité'
    },
    {
      step: '2',
      title: 'Transfert Sécurisé',
      description: 'Migration des données RH, paramétrage outils et formation équipes'
    },
    {
      step: '3',
      title: 'Gestion Courante',
      description: 'Prise en charge complète de l\'administration RH et paie mensuelle'
    },
    {
      step: '4',
      title: 'Conseil & Optimisation',
      description: 'Accompagnement continu et optimisation des processus RH'
    },
    {
      step: '5',
      title: 'Reporting & Pilotage',
      description: 'Tableaux de bord RH et indicateurs de pilotage social'
    }
  ];

  const caseStudies = [
    {
      client: 'Entreprise Tech',
      sector: 'Services IT',
      size: 'Entreprise moyenne',
      challenge: 'Externalisation RH complète pour soutenir une croissance rapide et assurer la conformité',
      solution: 'Externalisation paie + administration RH + conseil juridique + SIRH',
      result: 'Conformité totale + Gain de temps significatif + Support à la forte croissance'
    },
    {
      client: 'Industrie Locale',
      sector: 'Manufacturing',
      size: 'Entreprise établie',
      challenge: 'Optimisation des charges sociales et gestion de conventions collectives complexes',
      solution: 'Audit social + optimisation charges + gestion paie multi-conventions',
      result: 'Économies sur charges sociales + Conformité assurée + Réduction des risques juridiques'
    },
    {
      client: 'Services B2B',
      sector: 'Services professionnels',
      size: 'Petite entreprise',
      challenge: 'Professionnalisation RH et structuration pour développement commercial',
      solution: 'Externalisation RH intégrale + outils digitaux + politique RH',
      result: 'Structure RH professionnelle + Meilleure attraction des talents + Focus sur le développement'
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
                  Avantages Clés
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-neutral-dark">Coût interne RH</span>
                    <span className="text-primary font-bold">Réduction</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-neutral-dark">Temps dirigeant</span>
                    <span className="text-primary font-bold">Gain notable</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-neutral-dark">Risques juridiques</span>
                    <span className="text-primary font-bold">Minimisés</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-neutral-dark">ROI annuel</span>
                    <span className="text-primary font-bold">Élevé</span>
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
                <p className="text-gray-300 text-sm">{step.description}</p>
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
                Contactez-nous
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ExternalisationRHService;