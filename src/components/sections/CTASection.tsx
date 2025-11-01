import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Phone, Calendar, MessageCircle } from 'lucide-react';
import Button from '../ui/Button';

const CTASection: React.FC = () => {
  const contactMethods = [
    {
      icon: Phone,
      title: 'Appelez-nous',
      description: 'Échangeons directement sur vos besoins',
      action: '+33 1 42 86 XX XX'
    },
    {
      icon: Calendar,
      title: 'Prenez rendez-vous',
      description: 'Planifiez un entretien avec nos experts',
      action: 'Calendrier en ligne'
    },
    {
      icon: MessageCircle,
      title: 'Contactez-nous',
      description: 'Envoyez-nous votre demande par email',
      action: 'Formulaire de contact'
    }
  ];

  return (
    <section className="section-padding bg-gradient-to-br from-neutral-dark via-gray-900 to-neutral-dark relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-20 right-20 w-40 h-40 bg-primary/10 rounded-full"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{ 
            duration: 8, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
        />
        <motion.div
          className="absolute bottom-20 left-20 w-32 h-32 bg-secondary/10 rounded-full"
          animate={{ 
            scale: [1.2, 1, 1.2],
            opacity: [0.4, 0.7, 0.4]
          }}
          transition={{ 
            duration: 6, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
        />
      </div>

      <div className="container-custom relative z-10">
        <div className="text-center mb-16">
          <motion.h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Prêt à faire le premier pas vers{' '}
            <span className="text-gradient bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              l'excellence
            </span>
            ?
          </motion.h2>

          <motion.p
            className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Nos experts sont à votre disposition pour analyser vos besoins 
            et vous proposer des solutions personnalisées. Contactez-nous dès aujourd'hui 
            pour commencer votre transformation.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <Button 
              variant="primary" 
              size="lg" 
              icon={ArrowRight}
              href="/contact"
              className="w-full sm:w-auto shadow-xl hover:shadow-2xl"
            >
              Diagnostic gratuit
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              href="/services"
              className="w-full sm:w-auto border-white text-white hover:bg-white hover:text-neutral-dark"
            >
              Découvrir nos services
            </Button>
          </motion.div>
        </div>

        {/* Contact Methods */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {contactMethods.map((method, index) => (
            <motion.div
              key={index}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white/15 transition-all duration-300 border border-white/20"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -4 }}
            >
              <div className="inline-flex items-center justify-center w-14 h-14 bg-primary rounded-lg mb-4">
                <method.icon size={24} className="text-white" />
              </div>
              
              <h3 className="text-xl font-semibold text-white mb-2">
                {method.title}
              </h3>
              
              <p className="text-gray-300 mb-4 text-sm">
                {method.description}
              </p>
              
              <div className="text-primary font-semibold">
                {method.action}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Section */}
        <motion.div
          className="mt-16 pt-8 border-t border-white/20 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-300 mb-4">
            Rejoignez plus de 500 entreprises qui nous font confiance
          </p>
          <div className="flex items-center justify-center space-x-8 opacity-60">
            {/* Placeholder for client logos */}
            <div className="w-24 h-8 bg-white/20 rounded"></div>
            <div className="w-24 h-8 bg-white/20 rounded"></div>
            <div className="w-24 h-8 bg-white/20 rounded"></div>
            <div className="w-24 h-8 bg-white/20 rounded"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;