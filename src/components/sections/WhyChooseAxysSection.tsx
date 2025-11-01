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
    <section className="section-padding bg-gradient-to-br from-primary/5 via-neutral-light to-secondary/5 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative z-10">
        <SectionHeader
          eyebrow="Notre différence"
          title="Pourquoi Choisir Axys"
          subtitle="Professionnels de l'audit et du conseil à votre écoute, prêts à s'investir pour le développement de vos activités."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
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

