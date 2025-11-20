import React from 'react';
import { motion } from 'framer-motion';
import { Target, Users, TrendingUp, Shield, Lightbulb, HeadphonesIcon } from 'lucide-react';
import SectionHeader from '../ui/SectionHeader';

const features = [
  {
    icon: Users,
    title: "Expertise Pluridisciplinaire",
    description: "Équipe de spécialistes en audit, conseil, comptabilité et fiscalité pour une approche complète de vos enjeux.",
    color: "primary"
  },
  {
    icon: Target,
    title: "Approche Personnalisée",
    description: "Solutions adaptées à votre secteur, taille et enjeux spécifiques. Chaque client est unique.",
    color: "secondary"
  },
  {
    icon: TrendingUp,
    title: "Partenaire de Croissance",
    description: "Nous vous accompagnons à tous les stades de développement de votre activité, de la création à l'expansion.",
    color: "primary"
  },
  {
    icon: Shield,
    title: "Conformité Garantie",
    description: "Respect strict des normes réglementaires et législatives applicables. Votre sécurité juridique assurée.",
    color: "secondary"
  },
  {
    icon: Lightbulb,
    title: "Innovation Méthodologique",
    description: "Approches modernes et outils technologiques avancés pour une efficacité maximale.",
    color: "primary"
  },
  {
    icon: HeadphonesIcon,
    title: "Disponibilité & Écoute",
    description: "Interlocuteurs dédiés, réactifs et mobilisés pour répondre à vos besoins en temps réel.",
    color: "secondary"
  }
];

const WhyChooseAxysSection: React.FC = () => {
  return (
    <section className="section-padding bg-white white-pattern relative overflow-hidden">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative rounded-2xl overflow-hidden shadow-card-hover group"
          >
            <img
              src="/images/Accueil/why-choose-axys.jpg"
              alt="Pourquoi choisir Axys"
              className="w-full h-full object-cover aspect-[4/3] group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-neutral-dark/40 via-transparent to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
              <h3 className="text-2xl font-bold mb-2">Excellence & Expertise</h3>
              <p className="text-white/90">Plus de 20 ans d'expérience au service de votre réussite</p>
            </div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <SectionHeader
              eyebrow="Notre différence"
              title="Pourquoi Choisir Axys"
              subtitle="Professionnels de l'audit et du conseil à votre écoute, prêts à s'investir pour le développement de vos activités."
            />
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            const iconColor = feature.color === 'primary' ? 'text-primary' : 'text-secondary';
            const bgColor = feature.color === 'primary' ? 'bg-primary/10' : 'bg-secondary/10';

            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-card hover:shadow-card-hover transition-all duration-300"
              >
                <div className={`w-16 h-16 ${bgColor} rounded-2xl flex items-center justify-center mb-4`}>
                  <Icon className={`w-8 h-8 ${iconColor}`} />
                </div>
                <h3 className="text-xl font-semibold text-neutral-dark mb-3">
                  {feature.title}
                </h3>
                <p className="text-neutral-gray leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseAxysSection;

