import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    {
      name: 'Accueil',
      path: '/',
    },
    {
      name: 'À propos',
      path: '/a-propos',
    },
    {
      name: 'Services',
      path: '/services',
      dropdown: [
        { name: 'Audit & Contrôle', path: '/services/audit' },
        { name: 'Conseil & Optimisation', path: '/services/conseil' },
        { name: 'Expertise Comptable', path: '/services/expertise-comptable' },
        { name: 'Externalisation RH', path: '/services/externalisation-rh' },
        { name: 'Fiscalité & Advisory', path: '/services/fiscalite' },
        { name: 'Systèmes d\'Information', path: '/services/systemes-information' }
      ]
    },
    {
      name: 'Secteurs',
      path: '/secteurs',
      dropdown: [
        { name: 'PME & ETI', path: '/secteurs/pme-eti' },
        { name: 'Startups & Croissance', path: '/secteurs/startups' },
        { name: 'Grandes Entreprises', path: '/secteurs/grandes-entreprises' },
        { name: 'Associations & Organisations', path: '/secteurs/organisations' }
      ]
    },
    {
      name: 'Carrières',
      path: '/carrieres',
    },
    {
      name: 'Contact',
      path: '/contact',
    }
  ];

  return (
    <motion.header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg' 
          : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className="container-custom px-4 md:px-6 lg:px-8">
        <nav className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link 
            to="/" 
            className="flex items-center group py-4"
          >
            <img 
              src="/AXYS.svg" 
              alt="AXYS AUDIT" 
              className="h-10 w-auto transform group-hover:scale-105 transition-transform duration-300"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <div 
                key={item.name}
                className="relative group"
                onMouseEnter={() => setActiveDropdown(item.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  to={item.path}
                  className={`flex items-center space-x-1 font-semibold transition-colors duration-300 ${
                    location.pathname === item.path
                      ? 'text-primary'
                      : 'text-neutral-dark hover:text-primary'
                  }`}
                >
                  <span>{item.name}</span>
                  {item.dropdown && (
                    <ChevronDown 
                      size={16} 
                      className={`transition-transform duration-300 ${
                        activeDropdown === item.name ? 'rotate-180' : ''
                      }`}
                    />
                  )}
                </Link>

                {/* Dropdown Menu */}
                <AnimatePresence>
                  {item.dropdown && activeDropdown === item.name && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-gray-200 overflow-hidden"
                    >
                      {item.dropdown.map((subItem) => (
                        <Link
                          key={subItem.name}
                          to={subItem.path}
                          className="block px-4 py-3 text-neutral-dark hover:bg-neutral-light-bg hover:text-primary transition-colors duration-200"
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link 
              to="/espace-client" 
              className="px-4 py-2 font-semibold text-primary hover:text-primary/80 transition-colors duration-300 flex items-center gap-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              Espace Client
            </Link>
            <Link 
              to="/contact" 
              className="btn-primary"
            >
              Contactez-nous
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-lg transition-colors duration-300 hover:bg-neutral-light-bg"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <motion.div
              animate={{ rotate: isMobileMenuOpen ? 90 : 0 }}
              transition={{ duration: 0.3 }}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.div>
          </button>
        </nav>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden bg-white border-t border-gray-200"
            >
              <div className="py-4 space-y-2">
                {navItems.map((item) => (
                  <div key={item.name}>
                    <Link
                      to={item.path}
                      className={`block px-4 py-3 font-semibold transition-colors duration-300 ${
                        location.pathname === item.path
                          ? 'text-primary bg-neutral-light-bg'
                          : 'text-neutral-dark hover:text-primary hover:bg-neutral-light-bg'
                      }`}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                    {item.dropdown && (
                      <div className="ml-4 space-y-1">
                        {item.dropdown.map((subItem) => (
                          <Link
                            key={subItem.name}
                            to={subItem.path}
                            className="block px-4 py-2 text-sm text-neutral-gray hover:text-primary transition-colors duration-200"
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
                <div className="px-4 pt-4 space-y-2">
                  <Link 
                    to="/espace-client" 
                    className="btn-outline w-full text-center block"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Espace Client
                  </Link>
                  <Link 
                    to="/contact" 
                    className="btn-primary w-full text-center block"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Contactez-nous
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
};

export default Navbar;