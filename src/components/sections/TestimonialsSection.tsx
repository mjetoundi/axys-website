import React from 'react';
import { motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';
import Card from '../ui/Card';

const TestimonialsSection: React.FC = () => {
  const testimonials = [
    {
      name: 'Marie Dubois',
      position: 'Directrice Financière',
      company: 'TechStart Solutions',
      content: 'AXYS AUDIT nous accompagne depuis 3 ans avec un professionnalisme remarquable. Leur expertise nous a permis d\'optimiser nos processus financiers et de nous concentrer sur notre croissance.',
      rating: 5,
      avatar: 'MD'
    },
    {
      name: 'Pierre Martin',
      position: 'CEO',
      company: 'Innovations Vertes',
      content: 'Une équipe réactive et compétente. Leur accompagnement lors de notre levée de fonds a été déterminant. Je recommande vivement leurs services.',
      rating: 5,
      avatar: 'PM'
    },
    {
      name: 'Sophie Laurent',
      position: 'Fondatrice',
      company: 'Design & Co',
      content: 'Grâce à AXYS AUDIT, nous avons pu restructurer notre comptabilité et optimiser notre fiscalité. Un gain de temps et d\'argent considérable.',
      rating: 5,
      avatar: 'SL'
    }
  ];

  return (
    <section className="section-padding bg-neutral-light">
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
            className="inline-flex items-center space-x-2 bg-secondary/10 text-secondary rounded-full px-4 py-2 mb-4"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <Quote size={16} />
            <span className="text-sm font-semibold">Témoignages</span>
          </motion.div>

          <motion.h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-dark mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Nos clients{' '}
            <span className="text-primary">témoignent</span>
          </motion.h2>

          <motion.p
            className="text-lg text-neutral-gray max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            Découvrez les retours d'expérience de nos clients qui nous font confiance 
            pour leur accompagnement comptable et financier.
          </motion.p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full relative">
                <div className="flex flex-col h-full">
                  {/* Quote Icon */}
                  <Quote size={40} className="text-primary/20 mb-4" />
                  
                  {/* Content */}
                  <p className="text-neutral-dark leading-relaxed mb-6 flex-grow">
                    "{testimonial.content}"
                  </p>

                  {/* Rating */}
                  <div className="flex items-center space-x-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} size={16} className="text-yellow-400 fill-current" />
                    ))}
                  </div>

                  {/* Author */}
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                      <span className="text-white font-semibold text-sm">
                        {testimonial.avatar}
                      </span>
                    </div>
                    <div>
                      <div className="font-semibold text-neutral-dark">
                        {testimonial.name}
                      </div>
                      <div className="text-sm text-neutral-gray">
                        {testimonial.position}
                      </div>
                      <div className="text-sm text-primary font-medium">
                        {testimonial.company}
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;