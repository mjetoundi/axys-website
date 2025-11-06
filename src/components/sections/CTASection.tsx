import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Button from '../ui/Button';

const CTASection: React.FC = () => {
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
            className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6"
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
              Contactez-nous
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
      </div>
    </section>
  );
};

export default CTASection;