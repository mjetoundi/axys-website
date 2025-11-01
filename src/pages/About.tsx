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

  const team = [
    {
      name: 'Marie-Claire Dubois',
      position: 'Associée Directrice',
      expertise: 'Audit & Contrôle Légal',
      experience: '15+ ans',
      certifications: 'Expert-comptable, CAC'
    },
    {
      name: 'Jean-Pierre Martin',
      position: 'Directeur Associé',
      expertise: 'Conseil & Fiscalité',
      experience: '20+ ans',
      certifications: 'Expert-comptable, MBA'
    },
    {
      name: 'Sophie Laurent',
      position: 'Directrice RH & Social',
      expertise: 'Externalisation RH',
      experience: '12+ ans',
      certifications: 'DESS RH, Juriste social'
    }
  ];

  const milestones = [
    { year: '2008', event: 'Création d\'AXYS AUDIT par Marie-Claire Dubois' },
    { year: '2012', event: 'Ouverture du département conseil et fiscalité' },
    { year: '2016', event: 'Lancement des services d\'externalisation RH' },
    { year: '2020', event: 'Certification ISO 9001:2015' },
    { year: '2024', event: '+500 clients accompagnés, équipe de 50+ experts' }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-primary/10 to-secondary/10">
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
              Depuis 15 ans, AXYS AUDIT s'impose comme un acteur de référence dans l'audit, 
              l'expertise comptable et le conseil aux entreprises. Notre mission : accompagner 
              nos clients vers l'excellence opérationnelle et la croissance durable.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">15+</div>
                <div className="text-neutral-gray">Années d'expérience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">500+</div>
                <div className="text-neutral-gray">Clients accompagnés</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">50+</div>
                <div className="text-neutral-gray">Experts certifiés</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="section-padding bg-white">
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
      <section className="section-padding bg-neutral-light-bg">
        <div className="container-custom">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-dark mb-6">
              Notre Équipe Dirigeante
            </h2>
            <p className="text-lg text-neutral-gray max-w-3xl mx-auto">
              Des professionnels expérimentés et certifiés, reconnus pour leur expertise 
              et leur engagement auprès de nos clients.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="text-center h-full">
                  <div className="w-24 h-24 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-white text-xl font-bold">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-neutral-dark mb-2">
                    {member.name}
                  </h3>
                  <div className="text-primary font-semibold mb-2">{member.position}</div>
                  <div className="text-sm text-neutral-gray space-y-1">
                    <div><strong>Expertise :</strong> {member.expertise}</div>
                    <div><strong>Expérience :</strong> {member.experience}</div>
                    <div><strong>Certifications :</strong> {member.certifications}</div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* History Timeline */}
      <section className="section-padding bg-white">
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
              15 années de croissance et d'innovation au service de nos clients.
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
      <section className="section-padding bg-neutral-dark text-white">
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
                <h3 className="text-xl font-semibold mb-2">Ordre des Experts-Comptables</h3>
                <p className="text-gray-400">Membre actif depuis 2008</p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-secondary rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Shield size={40} className="text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">CNCC</h3>
                <p className="text-gray-400">Compagnie Nationale des Commissaires aux Comptes</p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-primary rounded-lg flex items-center justify-center mx-auto mb-4">
                  <TrendingUp size={40} className="text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">ISO 9001:2015</h3>
                <p className="text-gray-400">Certification qualité depuis 2020</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;