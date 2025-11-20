import React from "react";
import { motion } from "framer-motion";
import SectionHeader from "../components/ui/SectionHeader";
import Card from "../components/ui/Card";
import Button from "../components/ui/Button";
import { ArrowRight, Building2, Rocket, Building, Users } from "lucide-react";
import { Link } from "react-router-dom";

const sectors = [
  {
    icon: Building2,
    title: "PME & ETI",
    description:
      "Accompagnement global des entreprises de taille moyenne en croissance : audit, conseil, optimisation.",
    link: "/secteurs/pme-eti",
    image: "/images/Secteurs/pme-eti.jpg",
  },
  {
    icon: Rocket,
    title: "Startups & Croissance",
    description:
      "Structuration, levée de fonds, reporting investisseurs, optimisation des opérations pour scaler.",
    link: "/secteurs/startups",
    image: "/images/Secteurs/startups.jpg",
  },
  {
    icon: Building,
    title: "Grandes Entreprises",
    description:
      "Expertise grands comptes : audit consolidé international, compliance, transformation & performance.",
    link: "/secteurs/grandes-entreprises",
    image: "/images/Secteurs/grandes-entreprises.jpg",
  },
  {
    icon: Users,
    title: "Associations & Organisations",
    description:
      "Spécialisation secteur associatif : gouvernance, audit légal, subventions, reporting réglementaire.",
    link: "/secteurs/organisations",
    image: "/images/Secteurs/organisations.jpg",
  },
];

const Secteurs: React.FC = () => {
  return (
    <div className="pt-20">
      {/* Hero Section with Image */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/Secteurs/sectors-hero.jpg"
            alt="Secteurs d'activité"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-neutral-dark/80 via-primary/60 to-secondary/70"></div>
        </div>
        <div className="container-custom relative z-10 py-20">
          <motion.div
            className="max-w-4xl mx-auto text-center text-white"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              className="inline-block mb-6"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <span className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-semibold border border-white/30">
                Expertise sectorielle
              </span>
            </motion.div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Secteurs d'Activité
            </h1>
            <p className="text-xl md:text-2xl opacity-90 leading-relaxed max-w-3xl mx-auto">
              Nous adaptons notre approche à votre secteur pour maximiser l'impact et accélérer votre croissance.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Sectors Grid with Modern Layout */}
      <section className="section-padding bg-white white-pattern">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {sectors.map((sector, index) => (
              <motion.div
                key={sector.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Link to={sector.link} className="block h-full group">
                  <Card className="h-full overflow-hidden hover:shadow-card-hover transition-all duration-300 p-0">
                    <div className="relative h-64 overflow-hidden">
                      <img
                        src={sector.image}
                        alt={sector.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-neutral-dark/80 via-transparent to-transparent"></div>
                      <div className="absolute top-6 left-6">
                        <div className="w-14 h-14 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                          <sector.icon
                            size={28}
                            className="text-white group-hover:scale-110 transition-transform duration-300"
                          />
                        </div>
                      </div>
                      <div className="absolute bottom-6 left-6 right-6">
                        <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-primary transition-colors duration-300">
                          {sector.title}
                        </h3>
                        <p className="text-white/90 text-sm leading-relaxed mb-4">
                          {sector.description}
                        </p>
                        <div className="flex items-center text-white font-semibold group-hover:text-primary transition-colors duration-300">
                          <span>En savoir plus</span>
                          <ArrowRight
                            size={18}
                            className="ml-2 group-hover:translate-x-2 transition-transform duration-300"
                          />
                        </div>
                      </div>
                    </div>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <Button variant="primary" size="lg" icon={ArrowRight} href="/contact">
              Parler à un expert secteur
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Secteurs;
