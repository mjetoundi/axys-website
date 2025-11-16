import React from "react";
import { motion } from "framer-motion";
import PageHero from "../components/ui/PageHero";
import SectionHeader from "../components/ui/SectionHeader";
import Card from "../components/ui/Card";
import { Award, Users, Lightbulb } from "lucide-react";

const Carrieres: React.FC = () => {
  return (
    <div className="pt-20">
      <PageHero
        title="Carrières chez AXYS"
        subtitle="Découvrez notre culture d'entreprise et restez informé des futures opportunités de carrière."
        gradient={true}
      />

      {/* Culture Section */}
      <section className="section-padding">
        <div className="container-custom">
          <SectionHeader
            eyebrow="Culture Axys"
            title="Ce qui nous anime"
            subtitle="Un environnement d'excellence, de collaboration et d'impact durable."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <Card className="h-full text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-neutral-dark mb-2">
                Croissance Continue
              </h3>
              <p className="text-neutral-gray">
                Formation et accompagnement pour progresser rapidement. Budget
                formation annuel par collaborateur et parcours d'évolution
                personnalisés.
              </p>
            </Card>
            <Card className="h-full text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-neutral-dark mb-2">
                Collaboration & Inclusion
              </h3>
              <p className="text-neutral-gray">
                Des équipes diverses où chaque voix compte. Environnement
                inclusif favorisant l'échange et l'entraide au quotidien.
              </p>
            </Card>
            <Card className="h-full text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Lightbulb className="text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-neutral-dark mb-2">
                Impact Significatif
              </h3>
              <p className="text-neutral-gray">
                Travail qui compte vraiment. Nos solutions transforment les
                entreprises et leurs résultats de manière concrète.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* No Recruitment Section */}
      <section className="section-padding bg-neutral-light-bg">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <div className="mb-8">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="text-primary" size={40} />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-dark mb-4">
                Recrutement en Pause
              </h2>
              <p className="text-lg text-neutral-gray leading-relaxed mb-6">
                Pour le moment, AXYS ne recrute pas activement. Nous concentrons
                nos efforts sur l'accompagnement de nos clients existants et le
                développement de nos services.
              </p>
              <p className="text-base text-neutral-gray leading-relaxed">
                Nous vous remercions de votre intérêt pour rejoindre notre
                équipe. N'hésitez pas à consulter régulièrement cette page pour
                être informé des futures opportunités.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Carrieres;
