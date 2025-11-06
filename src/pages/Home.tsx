import React from 'react';
import HeroSection from '../components/sections/HeroSection';
import ServicesSection from '../components/sections/ServicesSection';
import WhyChooseAxysSection from '../components/sections/WhyChooseAxysSection';
import CTASection from '../components/sections/CTASection';

const Home: React.FC = () => {
  return (
    <div className="pt-20"> {/* Account for fixed navbar */}
      <HeroSection />
      <ServicesSection />
      <WhyChooseAxysSection />
      <CTASection />
    </div>
  );
};

export default Home;