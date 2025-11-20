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
  Server
} from 'lucide-react';
import Card from '../ui/Card';

const ServicesSection: React.FC = () => {
  const services = [
    {
      icon: Shield,
      title: 'Audit & Contrôle',
      description: 'Audits financiers, opérationnels et de conformité pour sécuriser vos activités et renforcer la confiance de vos parties prenantes.',
      features: [
        'Audit légal et contractuel',
        'Audit opérationnel',
        'Due diligence',
        'Contrôle interne'
      ],
      link: '/services/audit',
      color: 'text-blue-600'
    },
    {
      icon: TrendingUp,
      title: 'Conseil & Optimisation',
      description: 'Stratégies personnalisées pour optimiser vos performances, réduire vos coûts et accélérer votre croissance.',
      features: [
        'Conseil en organisation',
        'Optimisation fiscale',
        'Business plan',
        'Transformation digitale'
      ],
      link: '/services/conseil',
      color: 'text-teal-600'
    },
    {
      icon: Calculator,
      title: 'Expertise Comptable',
      description: 'Tenue comptable, établissement des comptes annuels et accompagnement dans tous vos enjeux comptables et fiscaux.',
      features: [
        'Tenue de comptabilité',
        'Comptes annuels',
        'Déclarations fiscales',
        'Paie et social'
      ],
      link: '/services/expertise-comptable',
      color: 'text-green-600'
    },
    {
      icon: Users,
      title: 'Externalisation RH',
      description: 'Solutions complètes de gestion des ressources humaines pour vous concentrer sur votre cœur de métier.',
      features: [
        'Gestion de la paie',
        'Administration RH',
        'Recrutement',
        'Formation'
      ],
      link: '/services/externalisation-rh',
      color: 'text-purple-600'
    },
    {
      icon: FileText,
      title: 'Fiscalité & Advisory',
      description: 'Conseil fiscal stratégique et accompagnement dans l\'optimisation de votre situation fiscale.',
      features: [
        'Optimisation fiscale',
        'Conseil en investissement',
        'Transmission d\'entreprise',
        'Crédit d\'impôt recherche'
      ],
      link: '/services/fiscalite',
      color: 'text-orange-600'
    },
    {
      icon: Server,
      title: 'Systèmes d\'Information',
      description: 'Audit et conseil en systèmes d\'information pour optimiser votre infrastructure IT et accompagner votre transformation digitale.',
      features: [
        'Audit IT et sécurité',
        'Conseil en infrastructure',
        'Transformation digitale',
        'Outils collaboratifs'
      ],
      link: '/services/systemes-information',
      color: 'text-indigo-600'
    }
  ];

  return (
    <section className="section-padding bg-neutral-light-bg noise-texture">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-flex items-center space-x-2 bg-primary/10 text-primary rounded-full px-4 py-2 mb-4"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <Shield size={16} />
            <span className="text-sm font-semibold">Nos solutions</span>
          </motion.div>

          <motion.h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-dark mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Des solutions{' '}
            <span className="text-primary">sur-mesure</span>
            <br />
            pour chaque besoin
          </motion.h2>

          <motion.p
            className="text-lg text-neutral-gray max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            Notre équipe d'experts vous accompagne dans tous les aspects de la gestion 
            de votre entreprise, de l'audit à l'optimisation, en passant par le conseil stratégique.
          </motion.p>
        </motion.div>

        {/* Services Grid - 3 Rows Layout: Image + 2 Rows of Services */}
        <div className="space-y-8 mb-16">
          {/* First Row - Image */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Card className="overflow-hidden p-0 group cursor-pointer hover:shadow-card-hover transition-all duration-300">
              <div className="relative h-64 md:h-80 lg:h-96">
                <img
                  src="/images/Services/services-hero.jpg"
                  alt="Nos services"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-dark/90 via-neutral-dark/50 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12 text-white">
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center mb-4">
                    <Shield size={32} className="text-white" />
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold mb-4">
                    Expertise Complète
                  </h3>
                  <p className="text-lg md:text-xl text-white/90 leading-relaxed mb-6 max-w-3xl">
                    Une gamme complète de services pour répondre à tous vos besoins en audit, conseil et gestion d'entreprise.
                  </p>
                  <div 
                    className="inline-flex items-center text-white font-semibold group-hover:text-primary transition-colors duration-300 cursor-pointer"
                    onClick={() => window.location.href = '/services'}
                  >
                    <span>Découvrir tous nos services</span>
                    <ArrowRight 
                      size={20} 
                      className="ml-2 group-hover:translate-x-2 transition-transform duration-300" 
                    />
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Second Row - First 3 Services */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.slice(0, 3).map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card 
                  className="h-full group cursor-pointer"
                  hover={true}
                  onClick={() => window.location.href = service.link}
                >
                  <div className="flex flex-col h-full">
                    {/* Icon */}
                    <div className="mb-6">
                      <div className={`inline-flex items-center justify-center w-14 h-14 rounded-lg bg-primary/10 mb-4 group-hover:bg-primary group-hover:scale-110 transition-all duration-300`}>
                        <service.icon size={28} className={`${service.color} group-hover:text-white transition-colors duration-300`} />
                      </div>
                      
                      <h3 className="text-xl font-semibold text-neutral-dark mb-3 group-hover:text-primary transition-colors duration-300">
                        {service.title}
                      </h3>
                      
                      <p className="text-neutral-gray leading-relaxed mb-6">
                        {service.description}
                      </p>
                    </div>

                    {/* Features */}
                    <div className="flex-grow mb-6">
                      <ul className="space-y-2">
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center space-x-3">
                            <CheckCircle size={16} className="text-primary flex-shrink-0" />
                            <span className="text-sm text-neutral-dark">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* CTA */}
                    <div className="flex items-center justify-between">
                      <span className="text-primary font-semibold group-hover:text-blue-600 transition-colors duration-300">
                        En savoir plus
                      </span>
                      <ArrowRight 
                        size={18} 
                        className="text-primary group-hover:text-blue-600 group-hover:translate-x-1 transition-all duration-300" 
                      />
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Third Row - Last 3 Services */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.slice(3).map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: (index + 3) * 0.1 }}
                viewport={{ once: true }}
              >
                <Card 
                  className="h-full group cursor-pointer"
                  hover={true}
                  onClick={() => window.location.href = service.link}
                >
                  <div className="flex flex-col h-full">
                    {/* Icon */}
                    <div className="mb-6">
                      <div className={`inline-flex items-center justify-center w-14 h-14 rounded-lg bg-primary/10 mb-4 group-hover:bg-primary group-hover:scale-110 transition-all duration-300`}>
                        <service.icon size={28} className={`${service.color} group-hover:text-white transition-colors duration-300`} />
                      </div>
                      
                      <h3 className="text-xl font-semibold text-neutral-dark mb-3 group-hover:text-primary transition-colors duration-300">
                        {service.title}
                      </h3>
                      
                      <p className="text-neutral-gray leading-relaxed mb-6">
                        {service.description}
                      </p>
                    </div>

                    {/* Features */}
                    <div className="flex-grow mb-6">
                      <ul className="space-y-2">
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center space-x-3">
                            <CheckCircle size={16} className="text-primary flex-shrink-0" />
                            <span className="text-sm text-neutral-dark">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* CTA */}
                    <div className="flex items-center justify-between">
                      <span className="text-primary font-semibold group-hover:text-blue-600 transition-colors duration-300">
                        En savoir plus
                      </span>
                      <ArrowRight 
                        size={18} 
                        className="text-primary group-hover:text-blue-600 group-hover:translate-x-1 transition-all duration-300" 
                      />
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default ServicesSection;