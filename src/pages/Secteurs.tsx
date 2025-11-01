import React from "react";
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
  },
  {
    icon: Rocket,
    title: "Startups & Croissance",
    description:
      "Structuration, levée de fonds, reporting investisseurs, optimisation des opérations pour scaler.",
    link: "/secteurs/startups",
  },
  {
    icon: Building,
    title: "Grandes Entreprises",
    description:
      "Expertise grands comptes : audit consolidé international, compliance, transformation & performance.",
    link: "/secteurs/grandes-entreprises",
  },
  {
    icon: Users,
    title: "Associations & Organisations",
    description:
      "Spécialisation secteur associatif : gouvernance, audit légal, subventions, reporting réglementaire.",
    link: "/secteurs/organisations",
  },
];

const Secteurs: React.FC = () => {
  return (
    <div className="pt-20">
      <section className="section-padding bg-neutral-light-bg">
        <div className="container-custom">
          <SectionHeader
            eyebrow="Expertise sectorielle"
            title="Secteurs d'Activité"
            subtitle="Nous adaptons notre approche à votre secteur pour maximiser l'impact et accélérer votre croissance."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {sectors.map((s) => (
              <Card key={s.title} className="h-full group">
                <div className="flex items-start space-x-4">
                  <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary transition-colors duration-300">
                    <s.icon
                      size={28}
                      className="text-primary group-hover:text-white"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-neutral-dark mb-2">
                      {s.title}
                    </h3>
                    <p className="text-neutral-gray mb-4">{s.description}</p>
                    <div className="flex items-center justify-between">
                      <Link
                        to={s.link}
                        className="text-primary font-semibold group-hover:text-blue-600"
                      >
                        En savoir plus
                      </Link>
                      <ArrowRight
                        size={18}
                        className="text-primary group-hover:translate-x-1 transition-transform duration-300"
                      />
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button variant="primary" size="lg" icon={ArrowRight}>
              Parler à un expert secteur
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Secteurs;
