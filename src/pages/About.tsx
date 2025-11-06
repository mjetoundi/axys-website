import React from 'react';
import { motion } from 'framer-motion';
import { Users, Award, TrendingUp, Shield, Target, Heart } from 'lucide-react';
import Card from '../components/ui/Card';

const About: React.FC = () => {
  const values = [
    {
      icon: Shield,
      title: 'Intégrité',
      description: 'Nous respectons les plus hauts standards éthiques dans tous nos engagements.'
    },
    {
      icon: Target,
      title: 'Excellence',
      description: 'Nous visons l\'excellence dans chaque mission que nous entreprenons.'
    },
    {
      icon: Heart,
      title: 'Proximité',
      description: 'Nous cultivons des relations de confiance avec nos clients.'
    }
  ];

  const teamStrengths = [
    {
      icon: Users,
      title: 'Équipe Pluridisciplinaire',
      description: 'Nos collaborateurs sont recrutés parmi des diplômés de l\'enseignement supérieur (minimum Bac +5) en comptabilité et finance.',
      color: 'text-blue-600'
    },
    {
      icon: Award,
      title: 'Associés Expérimentés',
      description: 'Tous nos associés sont inscrits dans différents ordres professionnels et disposent d\'une riche expérience dans les grandes firmes internationales.',
      color: 'text-teal-600'
    },
    {
      icon: TrendingUp,
      title: 'Formation Continue',
      description: 'Un programme de formation interne assure la mise à jour permanente des compétences de nos équipes.',
      color: 'text-green-600'
    }
  ];

  const milestones = [
    { year: '2001', event: 'Création d\'AXYS par des professionnels formés dans des grandes firmes internationales' },
    { year: '2005', event: 'Consolidation de nos activités en audit et expertise comptable' },
    { year: '2010', event: 'Développement de nos services en conseil et fiscalité' },
    { year: '2015', event: 'Agrément de la Commission de Surveillance du Marché Financier (COSUMAF)' },
    { year: '2020', event: 'Extension des services et renforcement de la présence en Afrique Centrale' }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-primary/10 to-secondary/10 noise-texture">
        <div className="container-custom">
          <motion.div
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-neutral-dark mb-6">
              À propos d'<span className="text-gradient">AXYS AUDIT</span>
            </h1>
            <p className="text-lg text-neutral-gray leading-relaxed mb-8">
              Cabinet créé en 2001 par des professionnels formés dans des grandes firmes 
              internationales d'audit, AXYS s'impose comme un acteur de référence en Afrique Centrale 
              dans l'audit, l'expertise comptable et le conseil aux entreprises. Notre mission : 
              accompagner nos clients vers l'excellence opérationnelle et la croissance durable.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">2001</div>
                <div className="text-neutral-gray">Année de création</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">+20 ans</div>
                <div className="text-neutral-gray">D'expérience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">Afrique Centrale</div>
                <div className="text-neutral-gray">Zone d'intervention</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="section-padding bg-white white-pattern">
        <div className="container-custom">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-dark mb-6">
              Nos Valeurs
            </h2>
            <p className="text-lg text-neutral-gray max-w-3xl mx-auto">
              Des valeurs fortes qui guident chacune de nos actions et déterminent 
              la qualité de notre accompagnement.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="text-center h-full">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6">
                    <value.icon size={32} className="text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-neutral-dark mb-4">
                    {value.title}
                  </h3>
                  <p className="text-neutral-gray leading-relaxed">
                    {value.description}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section-padding bg-neutral-light-bg noise-texture">
        <div className="container-custom">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-dark mb-6">
              Notre Expertise
            </h2>
            <p className="text-lg text-neutral-gray max-w-3xl mx-auto">
              Des professionnels expérimentés et certifiés, reconnus pour leur expertise 
              et leur engagement auprès de nos clients.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamStrengths.map((strength, index) => {
              const IconComponent = strength.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="text-center h-full">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6">
                      <IconComponent size={32} className={strength.color} />
                    </div>
                    <h3 className="text-xl font-semibold text-neutral-dark mb-4">
                      {strength.title}
                    </h3>
                    <p className="text-neutral-gray leading-relaxed">
                      {strength.description}
                    </p>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* History Timeline */}
      <section className="section-padding bg-white white-pattern">
        <div className="container-custom">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-dark mb-6">
              Notre Histoire
            </h2>
            <p className="text-lg text-neutral-gray max-w-3xl mx-auto">
              Plus de 20 années de croissance et d'innovation au service de nos clients en Afrique Centrale.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                className="flex items-start space-x-6 mb-8 last:mb-0"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">{milestone.year}</span>
                  </div>
                </div>
                <div className="pt-3">
                  <p className="text-lg text-neutral-dark leading-relaxed">
                    {milestone.event}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications & Partenaires */}
      <section className="section-padding bg-neutral-dark text-white noise-texture">
        <div className="container-custom">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Certifications & Partenaires
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-12">
              Nos certifications et adhésions professionnelles garantissent 
              la qualité et la conformité de nos services.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-20 h-20 bg-primary rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Award size={40} className="text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">ONECCA</h3>
                <p className="text-gray-400">Membre n° SEC 023</p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-secondary rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Shield size={40} className="text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Agrément CEMAC</h3>
                <p className="text-gray-400">Agrément n° SEC 042</p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-primary rounded-lg flex items-center justify-center mx-auto mb-4">
                  <TrendingUp size={40} className="text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">COSUMAF</h3>
                <p className="text-gray-400">Agrément CAC-01/2023</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;