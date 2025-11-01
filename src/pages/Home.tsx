import React from 'react';
import HeroSection from '../components/sections/HeroSection';
import ServicesSection from '../components/sections/ServicesSection';
import WhyChooseAxysSection from '../components/sections/WhyChooseAxysSection';
import StatsSection from '../components/sections/StatsSection';
import TestimonialsSection from '../components/sections/TestimonialsSection';
import CTASection from '../components/sections/CTASection';

const Home: React.FC = () => {
  return (
    <div className="pt-20"> {/* Account for fixed navbar */}
      <HeroSection />
      <ServicesSection />
      <WhyChooseAxysSection />
      <StatsSection />
      <TestimonialsSection />
      <CTASection />
    </div>
  );
};

export default Home;