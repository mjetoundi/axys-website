import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle, Award, Users, TrendingUp } from 'lucide-react';
import Button from '../ui/Button';

const HeroSection: React.FC = () => {
  const keyPoints = [
    'Expertise reconnue depuis 15+ ans',
    'Équipe de 50+ experts certifiés',
    'Accompagnement sur-mesure'
  ];

  const stats = [
    { icon: Users, value: '500+', label: 'Clients accompagnés' },
    { icon: Award, value: '15+', label: 'Années d\'expérience' },
    { icon: TrendingUp, value: '98%', label: 'Satisfaction client' }
  ];

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-neutral-light via-neutral-light-bg to-blue-50">
      {/* Background Elements */}
      <div className="absolute inset-0">
        {/* Geometric shapes */}
        <motion.div
          className="absolute top-20 right-10 w-32 h-32 bg-primary/10 rounded-full"
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360] 
          }}
          transition={{ 
            duration: 8, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
        />
        <motion.div
          className="absolute bottom-20 left-10 w-24 h-24 bg-secondary/10 rounded-lg"
          animate={{ 
            y: [-10, 10, -10],
            rotate: [0, 45, 0] 
          }}
          transition={{ 
            duration: 6, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
        />
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-40" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23288CE2' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='1.5'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }} />
      </div>

      <div className="container-custom section-padding relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            className="text-center lg:text-left"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            {/* Badge */}
            <motion.div
              className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm border border-primary/20 rounded-full px-4 py-2 mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Award size={16} className="text-primary" />
              <span className="text-sm font-semibold text-neutral-dark">
                Cabinet certifié ISO 9001:2015
              </span>
            </motion.div>

            {/* Main Title */}
            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-dark mb-6 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Excellence en{' '}
              <span className="text-gradient">
                Audit & Conseil
              </span>
              <br />
              pour votre{' '}
              <motion.span
                className="text-primary"
                animate={{ 
                  color: ['#288CE2', '#1BA89A', '#288CE2'] 
                }}
                transition={{ 
                  duration: 3, 
                  repeat: Infinity, 
                  ease: 'easeInOut' 
                }}
              >
                croissance
              </motion.span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              className="text-lg md:text-xl text-neutral-gray mb-8 leading-relaxed max-w-2xl"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Nous accompagnons les entreprises vers l'excellence opérationnelle 
              avec notre expertise en audit, expertise comptable et conseil stratégique. 
              Partenaire de confiance pour votre développement durable.
            </motion.p>

            {/* Key Points */}
            <motion.div
              className="mb-8 space-y-3"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              {keyPoints.map((point, index) => (
                <motion.div
                  key={index}
                  className="flex items-center space-x-3 justify-center lg:justify-start"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                >
                  <CheckCircle size={20} className="text-primary flex-shrink-0" />
                  <span className="text-neutral-dark font-medium">{point}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              <Button 
                variant="primary" 
                size="lg" 
                icon={ArrowRight}
                href="/services"
                className="w-full sm:w-auto"
              >
                Découvrir nos services
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                href="/contact"
                className="w-full sm:w-auto"
              >
                Prendre rendez-vous
              </Button>
            </motion.div>

            {/* Stats */}
            <motion.div
              className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-gray-200"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="text-center"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.9 + index * 0.1 }}
                >
                  <div className="flex justify-center mb-2">
                    <stat.icon size={24} className="text-primary" />
                  </div>
                  <div className="text-2xl font-bold text-neutral-dark mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-neutral-gray">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Content - Visual */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {/* Main Image Container */}
            <div className="relative">
              {/* Placeholder for hero image */}
              <div className="aspect-square lg:aspect-[4/5] bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl overflow-hidden shadow-2xl">
                <div className="w-full h-full flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="w-24 h-24 bg-primary rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                      <span className="text-white font-bold text-3xl">A</span>
                    </div>
                    <h3 className="text-2xl font-bold text-neutral-dark mb-2">
                      AXYS AUDIT
                    </h3>
                    <p className="text-neutral-gray">
                      Excellence & Innovation
                    </p>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <motion.div
                className="absolute -top-6 -right-6 bg-white rounded-xl shadow-lg p-4"
                animate={{ y: [-5, 5, -5] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              >
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-sm font-semibold text-neutral-dark">
                    Cabinet Certifié
                  </span>
                </div>
              </motion.div>

              <motion.div
                className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-lg p-4"
                animate={{ y: [5, -5, 5] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              >
                <div className="flex items-center space-x-2">
                  <TrendingUp size={20} className="text-primary" />
                  <span className="text-sm font-semibold text-neutral-dark">
                    Croissance +25%
                  </span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
      >
        <motion.div
          className="w-6 h-10 border-2 border-primary rounded-full flex justify-center"
          animate={{ 
            boxShadow: [
              '0 0 0 0px rgba(40, 140, 226, 0.4)',
              '0 0 0 10px rgba(40, 140, 226, 0)',
            ]
          }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <motion.div
            className="w-1 h-2 bg-primary rounded-full mt-2"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;