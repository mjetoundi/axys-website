import React, { useState } from "react";
import { motion } from "framer-motion";
import PageHero from "../components/ui/PageHero";
import SectionHeader from "../components/ui/SectionHeader";
import Card from "../components/ui/Card";
import Button from "../components/ui/Button";
import { Award, Users, Lightbulb, MapPin, Briefcase, Clock, ArrowRight, Upload } from "lucide-react";

const jobListings = [
  {
    id: 1,
    title: "Auditeur Senior - Contrôle Interne",
    department: "Audit",
    location: "Paris",
    type: "CDI",
    description:
      "Nous recherchons un auditeur expérimenté pour renforcer notre équipe audit et accompagner nos clients PME et ETI dans leurs missions de contrôle interne et d'audit financier.",
    skills: ["Audit financier", "Contrôle interne", "Normes IFRS", "Management équipe", "Relation client"],
    experience: "5+ ans",
  },
  {
    id: 2,
    title: "Expert-Comptable Confirmé",
    department: "Expertise Comptable",
    location: "Lyon",
    type: "CDI",
    description:
      "Expert-comptable diplômé pour gérer un portefeuille clients diversifié, encadrer une équipe de collaborateurs et développer l'activité conseil.",
    skills: ["DEC", "Gestion portefeuille", "Fiscalité entreprise", "Conseil stratégique", "Encadrement"],
    experience: "7+ ans",
  },
  {
    id: 3,
    title: "Consultant RH & Paie",
    department: "Externalisation RH",
    location: "Télétravail partiel",
    type: "CDI",
    description:
      "Consultant spécialisé externalisation RH pour accompagner nos clients PME dans la gestion paie, administration du personnel et conformité sociale.",
    skills: ["Paie multi-conventions", "Droit social", "SIRH", "Conseil RH", "Gestion projet"],
    experience: "3-5 ans",
  },
  {
    id: 4,
    title: "Conseiller Fiscal Senior",
    department: "Fiscalité",
    location: "Paris",
    type: "CDI",
    description:
      "Expert en fiscalité des entreprises pour conseiller nos clients sur l'optimisation fiscale, les restructurations et les opérations de croissance externe.",
    skills: ["Fiscalité entreprise", "Optimisation fiscale", "M&A", "IS/IFI/TVA", "Veille fiscale"],
    experience: "5+ ans",
  },
  {
    id: 5,
    title: "Business Developer - Services Audit",
    department: "Commercial",
    location: "Lille",
    type: "CDI",
    description:
      "Commercial(e) expérimenté(e) pour développer notre portefeuille clients grands comptes et accompagner la croissance du cabinet.",
    skills: ["Développement commercial", "Prospection B2B", "Grands comptes", "Négociation", "CRM"],
    experience: "5+ ans",
  },
  {
    id: 6,
    title: "Collaborateur Comptable Junior",
    department: "Expertise Comptable",
    location: "Lyon",
    type: "CDI",
    description:
      "Jeune diplômé motivé pour rejoindre notre équipe comptable et évoluer rapidement au sein d'un cabinet dynamique avec formation continue.",
    skills: ["Comptabilité générale", "Déclarations fiscales", "Rigueur", "Esprit d'équipe", "Adaptabilité"],
    experience: "0-2 ans",
  },
];

const testimonials = [
  {
    name: "Alice Marchand",
    role: "Auditrice Senior",
    years: "4 ans chez Axys",
    photo: "👩‍💼",
    quote:
      "Chez Axys, j'ai trouvé bien plus qu'un emploi. L'environnement collaboratif et l'investissement dans mon développement m'ont permis de progresser rapidement et de contribuer à des projets passionnants.",
  },
  {
    name: "Thomas Leblanc",
    role: "Expert-Comptable",
    years: "6 ans chez Axys",
    photo: "👨‍💼",
    quote:
      "La diversité des missions et l'autonomie accordée sont exceptionnelles. Axys m'a permis de développer mes compétences en conseil stratégique tout en gardant un excellent équilibre vie pro/perso.",
  },
  {
    name: "Sophie Martin",
    role: "Consultante RH",
    years: "3 ans chez Axys",
    photo: "👩‍💻",
    quote:
      "Ce que j'apprécie le plus, c'est la culture d'entraide et l'attention portée au bien-être des collaborateurs. Les formations régulières m'ont permis de rester à la pointe de mon expertise.",
  },
];

const Carrieres: React.FC = () => {
  const [selectedDepartment, setSelectedDepartment] = useState<string>("Tous");
  const [showApplicationForm, setShowApplicationForm] = useState(false);

  const departments = ["Tous", "Audit", "Expertise Comptable", "Externalisation RH", "Fiscalité", "Commercial"];

  const filteredJobs =
    selectedDepartment === "Tous"
      ? jobListings
      : jobListings.filter((job) => job.department === selectedDepartment);

  return (
    <div className="pt-20">
      <PageHero
        title="Rejoignez l'Équipe Axys"
        subtitle="Grandissez • Appartenez • Impactez. Nous cherchons des talents passionnés pour rejoindre une équipe dynamique et collaborative."
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

      {/* Job Listings Section */}
      <section className="section-padding bg-neutral-light-bg">
        <div className="container-custom">
          <SectionHeader
            eyebrow="Opportunités"
            title="Offres en Cours"
            subtitle="Découvrez nos postes ouverts et trouvez celui qui vous correspond"
          />

          {/* Department Filters */}
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {departments.map((dept) => (
              <button
                key={dept}
                onClick={() => setSelectedDepartment(dept)}
                className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${
                  selectedDepartment === dept
                    ? "bg-primary text-white shadow-md"
                    : "bg-white text-neutral-dark hover:bg-primary/10"
                }`}
              >
                {dept}
              </button>
            ))}
          </div>

          {/* Job Cards */}
          <div className="grid grid-cols-1 gap-6">
            {filteredJobs.map((job, index) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <Card className="hover:shadow-card-hover transition-all duration-300">
                  <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-3 mb-3">
                        <h3 className="text-xl font-bold text-neutral-dark">
                          {job.title}
                </h3>
                        <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full">
                          {job.department}
                        </span>
                      </div>

                      <div className="flex flex-wrap gap-4 text-sm text-neutral-gray mb-4">
                        <div className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          {job.location}
                        </div>
                        <div className="flex items-center gap-1">
                          <Briefcase className="w-4 h-4" />
                          {job.type}
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {job.experience}
                        </div>
                      </div>

                      <p className="text-neutral-gray mb-4 leading-relaxed">
                        {job.description}
                      </p>

                      <div className="flex flex-wrap gap-2">
                        {job.skills.map((skill) => (
                          <span
                            key={skill}
                            className="px-3 py-1 bg-neutral-light-bg text-neutral-dark text-xs rounded-full"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="lg:ml-6">
                      <Button
                        variant="primary"
                        onClick={() => (window.location.href = "/contact")}
                      >
                        Postuler
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          {filteredJobs.length === 0 && (
            <div className="text-center py-12">
              <p className="text-neutral-gray text-lg">
                Aucune offre disponible dans cette catégorie pour le moment.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Spontaneous Application Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-neutral-dark mb-4">
                Candidature Spontanée
              </h2>
              <p className="text-lg text-neutral-gray">
                Vous ne trouvez pas le poste qui vous correspond ? Envoyez-nous
                votre candidature spontanée. Nous sommes toujours à la
                recherche de talents motivés.
              </p>
            </div>

            <Card className="max-w-2xl mx-auto">
              <form 
                className="space-y-6"
                onSubmit={(e) => {
                  e.preventDefault();
                  alert("Merci pour votre candidature ! Nous reviendrons vers vous rapidement.");
                }}
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-neutral-dark mb-2">
                      Nom complet *
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-neutral-light-bg rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
                      placeholder="Jean Dupont"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-neutral-dark mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 border border-neutral-light-bg rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
                      placeholder="jean.dupont@email.com"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-neutral-dark mb-2">
                      Téléphone
                    </label>
                    <input
                      type="tel"
                      className="w-full px-4 py-3 border border-neutral-light-bg rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
                      placeholder="+33 6 12 34 56 78"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-neutral-dark mb-2">
                      Poste ciblé *
                    </label>
                    <select
                      className="w-full px-4 py-3 border border-neutral-light-bg rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
                      required
                    >
                      <option value="">Sélectionner...</option>
                      <option>Audit</option>
                      <option>Expertise Comptable</option>
                      <option>Conseil</option>
                      <option>Externalisation RH</option>
                      <option>Fiscalité</option>
                      <option>Autre</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-neutral-dark mb-2">
                    Message de motivation
                  </label>
                  <textarea
                    className="w-full px-4 py-3 border border-neutral-light-bg rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 min-h-[120px]"
                    placeholder="Parlez-nous de vous et de votre motivation..."
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-neutral-dark mb-2">
                    CV (PDF, max 5Mo) *
                  </label>
                  <div className="border-2 border-dashed border-neutral-light-bg rounded-lg p-8 text-center hover:border-primary/50 transition-colors cursor-pointer">
                    <Upload className="w-8 h-8 text-neutral-gray mx-auto mb-2" />
                    <p className="text-sm text-neutral-gray">
                      Cliquez pour télécharger votre CV
                    </p>
                    <p className="text-xs text-neutral-gray mt-1">
                      Formats acceptés : PDF (max 5Mo)
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-2">
                  <input
                    type="checkbox"
                    id="privacy"
                    className="mt-1"
                    required
                  />
                  <label htmlFor="privacy" className="text-sm text-neutral-gray">
                    J'accepte que mes données soient utilisées dans le cadre de
                    ma candidature conformément à la{" "}
                    <a href="/politique-confidentialite" className="text-primary hover:underline">
                      politique de confidentialité
                    </a>
                  </label>
                </div>

                <Button
                  variant="primary"
                  size="lg"
                  className="w-full"
                  type="submit"
                >
                  Envoyer ma candidature
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </section>

      {/* Employee Testimonials Section */}
      <section className="section-padding bg-neutral-light-bg">
        <div className="container-custom">
          <SectionHeader
            eyebrow="Témoignages"
            title="Ils Ont Rejoint Axys"
            subtitle="Découvrez ce que nos collaborateurs pensent de leur expérience chez Axys"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full text-center">
                  <div className="text-6xl mb-4">{testimonial.photo}</div>
                  <h3 className="font-semibold text-neutral-dark text-lg mb-1">
                    {testimonial.name}
                  </h3>
                  <p className="text-sm text-primary font-medium mb-1">
                    {testimonial.role}
                  </p>
                  <p className="text-xs text-neutral-gray mb-4">
                    {testimonial.years}
                  </p>
                  <p className="text-neutral-gray italic leading-relaxed">
                    "{testimonial.quote}"
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section-padding">
        <div className="container-custom">
          <SectionHeader
            title="Nos Avantages"
            subtitle="Parce que votre bien-être et votre épanouissement comptent"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {[
              {
                title: "Formation Continue",
                description: "Budget formation annuel, certifications, conférences",
              },
              {
                title: "Équilibre Vie Pro/Perso",
                description: "Télétravail partiel, horaires flexibles, RTT",
              },
              {
                title: "Avantages Financiers",
                description: "Mutuelle, tickets restaurant, primes performance",
              },
              {
                title: "Ambiance Collaborative",
                description: "Team building, événements d'équipe, afterworks",
              },
            ].map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <Card className="h-full text-center bg-gradient-to-br from-white to-primary/5">
                  <h3 className="font-semibold text-neutral-dark mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-sm text-neutral-gray">
                    {benefit.description}
                  </p>
              </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Carrieres;
