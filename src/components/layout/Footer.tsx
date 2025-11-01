import React from "react";
import { Link } from "react-router-dom";
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Twitter,
  Facebook,
  ArrowRight,
  Clock,
} from "lucide-react";
import { motion } from "framer-motion";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const services = [
    { name: "Audit & Contrôle", path: "/services/audit" },
    { name: "Conseil & Optimisation", path: "/services/conseil" },
    { name: "Expertise Comptable", path: "/services/expertise-comptable" },
    { name: "Fiscalité & Advisory", path: "/services/fiscalite" },
  ];

  const quickLinks = [
    { name: "À propos", path: "/a-propos" },
    { name: "Secteurs d'activité", path: "/secteurs" },
    { name: "Carrières", path: "/carrieres" },
    { name: "Blog", path: "/ressources/blog" },
  ];

  const legalLinks = [
    { name: "Mentions légales", path: "/mentions-legales" },
    {
      name: "Politique de confidentialité",
      path: "/politique-confidentialite",
    },
    { name: "Conditions d'utilisation", path: "/conditions-utilisation" },
    { name: "Cookies", path: "/cookies" },
  ];

  return (
    <footer className="bg-neutral-dark text-white">
      {/* Newsletter Section */}
      <div className="bg-primary">
        <div className="container-custom section-padding py-12">
          <motion.div
            className="flex flex-col lg:flex-row items-center justify-between space-y-6 lg:space-y-0"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="text-center lg:text-left">
              <h3 className="text-2xl font-bold mb-2">
                Restez informé de nos actualités
              </h3>
              <p className="text-blue-100 text-lg">
                Recevez nos insights et conseils d'experts directement par email
              </p>
            </div>
            <div className="flex flex-col sm:flex-row w-full lg:w-auto max-w-md space-y-3 sm:space-y-0 sm:space-x-3">
              <input
                type="email"
                placeholder="Votre adresse email"
                className="flex-1 px-4 py-3 rounded-lg bg-white text-neutral-dark placeholder-neutral-gray focus:outline-none focus:ring-2 focus:ring-secondary"
              />
              <button className="bg-secondary hover:bg-teal-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-300 flex items-center justify-center space-x-2">
                <span>S'abonner</span>
                <ArrowRight size={18} />
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <Link to="/" className="inline-block mb-6">
              <img 
                src="/AXYS.svg" 
                alt="AXYS AUDIT" 
                className="h-12 w-auto brightness-0 invert hover:brightness-100 hover:invert-0 transition-all duration-300"
              />
            </Link>

            <p className="text-gray-300 mb-6 leading-relaxed">
              Cabinet d'expertise comptable et d'audit de premier plan, nous
              accompagnons nos clients vers l'excellence opérationnelle et la
              croissance durable.
            </p>

            {/* Contact Info */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center space-x-3">
                <Phone size={18} className="text-primary" />
                <span className="text-gray-300">+33 1 42 86 XX XX</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={18} className="text-primary" />
                <span className="text-gray-300">contact@axysaudit.fr</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin size={18} className="text-primary mt-1" />
                <span className="text-gray-300">
                  123 Avenue des Champs-Élysées
                  <br />
                  75008 Paris, France
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Clock size={18} className="text-primary" />
                <span className="text-gray-300">Lun-Ven: 9h-18h</span>
              </div>
            </div>

            {/* Social Media */}
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 bg-gray-700 hover:bg-primary rounded-lg flex items-center justify-center transition-colors duration-300"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-700 hover:bg-primary rounded-lg flex items-center justify-center transition-colors duration-300"
              >
                <Twitter size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-700 hover:bg-primary rounded-lg flex items-center justify-center transition-colors duration-300"
              >
                <Facebook size={18} />
              </a>
            </div>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-xl font-semibold mb-6 text-white">
              Nos Services
            </h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.name}>
                  <Link
                    to={service.path}
                    className="text-gray-300 hover:text-primary transition-colors duration-300 flex items-center group"
                  >
                    <ArrowRight
                      size={14}
                      className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    />
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4 className="text-xl font-semibold mb-6 text-white">
              Liens Rapides
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-gray-300 hover:text-primary transition-colors duration-300 flex items-center group"
                  >
                    <ArrowRight
                      size={14}
                      className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Legal */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h4 className="text-xl font-semibold mb-6 text-white">
              Informations Légales
            </h4>
            <ul className="space-y-3 mb-6">
              {legalLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-gray-300 hover:text-primary transition-colors duration-300 flex items-center group text-sm"
                  >
                    <ArrowRight
                      size={14}
                      className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Certifications */}
            <div className="bg-gray-800 rounded-lg p-4">
              <h5 className="font-semibold mb-2 text-sm">Certifications</h5>
              <div className="text-xs text-gray-400 space-y-1">
                <div>• Ordre des Experts-Comptables</div>
                <div>• CNCC (Compagnie Nationale)</div>
                <div>• ISO 9001:2015</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-700">
        <div className="container-custom">
          <div className="py-6 flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © {currentYear} AXYS AUDIT. Tous droits réservés.
            </p>
            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <span>Développé par MJTECH</span>
              <span>•</span>
              <span>Version 2025</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
