import React from 'react';
import { motion } from 'framer-motion';
import { Users, Award, TrendingUp, Clock } from 'lucide-react';

const StatsSection: React.FC = () => {
  const stats = [
    {
      icon: Users,
      value: '500+',
      label: 'Clients accompagnés',
      description: 'TPE, PME et grands comptes'
    },
    {
      icon: Award,
      value: '15+',
      label: 'Années d\'expérience',
      description: 'Expertise reconnue'
    },
    {
      icon: TrendingUp,
      value: '98%',
      label: 'Satisfaction client',
      description: 'Excellence confirmée'
    },
    {
      icon: Clock,
      value: '24h',
      label: 'Délai de réponse',
      description: 'Réactivité garantie'
    }
  ];

  return (
    <section className="section-padding bg-primary">
      <div className="container-custom">
        <div className="text-center mb-12">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-white mb-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Notre expertise en chiffres
          </motion.h2>
          <motion.p
            className="text-blue-100 text-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Des résultats concrets qui témoignent de notre engagement
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="text-center group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 backdrop-blur-sm rounded-lg mb-4 group-hover:bg-white/20 group-hover:scale-110 transition-all duration-300">
                <stat.icon size={32} className="text-white" />
              </div>
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                {stat.value}
              </div>
              <div className="text-xl font-semibold text-white mb-2">
                {stat.label}
              </div>
              <div className="text-blue-100 text-sm">
                {stat.description}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;