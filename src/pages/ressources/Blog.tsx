import React, { useState } from "react";
import { motion } from "framer-motion";
import SectionHeader from "../../components/ui/SectionHeader";
import Card from "../../components/ui/Card";
import Button from "../../components/ui/Button";
import Breadcrumbs from "../../components/ui/Breadcrumbs";
import { Search, Clock, User, ArrowRight, Calendar, Tag } from "lucide-react";

const categories = ["Tous", "Audit", "Fiscalité", "Comptabilité", "RH", "Conseil"];

const blogArticles = [
  {
    id: 1,
    title: "Guide Complet de l'Audit Financier pour PME en 2024",
    category: "Audit",
    excerpt:
      "Découvrez les étapes essentielles d'un audit financier réussi et comment préparer votre entreprise pour maximiser la valeur de cette démarche.",
    author: "Marc Lepont",
    date: "15 octobre 2024",
    readTime: "8 min",
    featured: true,
  },
  {
    id: 2,
    title: "Optimisation Fiscale: 10 Stratégies Légales pour Réduire Vos Charges",
    category: "Fiscalité",
    excerpt:
      "Les techniques d'optimisation fiscale méconnues qui peuvent faire économiser jusqu'à 30% de charges à votre entreprise en toute légalité.",
    author: "Sophie Dubois",
    date: "10 octobre 2024",
    readTime: "10 min",
    featured: true,
  },
  {
    id: 3,
    title: "Transition vers la Comptabilité Digitale: Étapes Clés",
    category: "Comptabilité",
    excerpt:
      "Comment réussir la digitalisation de votre comptabilité en 6 étapes. Gains de temps, réduction d'erreurs et pilotage en temps réel.",
    author: "Alice Marchand",
    date: "5 octobre 2024",
    readTime: "6 min",
    featured: false,
  },
  {
    id: 4,
    title: "Externalisation RH: Avantages et Pièges à Éviter",
    category: "RH",
    excerpt:
      "L'externalisation RH peut réduire vos coûts de 40%. Mais attention aux erreurs fréquentes qui peuvent compromettre le succès de cette démarche.",
    author: "Thomas Leblanc",
    date: "1 octobre 2024",
    readTime: "7 min",
    featured: false,
  },
  {
    id: 5,
    title: "Contrôle de Gestion: KPIs Essentiels pour Piloter Votre Croissance",
    category: "Conseil",
    excerpt:
      "Les 15 KPIs indispensables pour suivre la performance de votre entreprise et prendre les bonnes décisions stratégiques au bon moment.",
    author: "Marc Lepont",
    date: "28 septembre 2024",
    readTime: "9 min",
    featured: false,
  },
  {
    id: 6,
    title: "Conformité RGPD en Comptabilité: Ce Que Vous Devez Savoir",
    category: "Comptabilité",
    excerpt:
      "Protection des données comptables et respect du RGPD: les obligations légales et les bonnes pratiques à mettre en place immédiatement.",
    author: "Sophie Dubois",
    date: "25 septembre 2024",
    readTime: "5 min",
    featured: false,
  },
  {
    id: 7,
    title: "Audit Interne vs Audit Externe: Quelle Différence?",
    category: "Audit",
    excerpt:
      "Comprendre les distinctions fondamentales entre audit interne et externe pour choisir la bonne approche selon vos objectifs d'entreprise.",
    author: "Alice Marchand",
    date: "20 septembre 2024",
    readTime: "6 min",
    featured: false,
  },
  {
    id: 8,
    title: "Nouvelles Réformes Fiscales 2024: Impact sur Votre Entreprise",
    category: "Fiscalité",
    excerpt:
      "Analyse détaillée des changements fiscaux 2024 et stratégies d'adaptation pour minimiser l'impact sur votre rentabilité.",
    author: "Thomas Leblanc",
    date: "15 septembre 2024",
    readTime: "11 min",
    featured: false,
  },
  {
    id: 9,
    title: "Gestion de Paie: Automatisation et Erreurs à Éviter",
    category: "RH",
    excerpt:
      "Les outils d'automatisation paie qui révolutionnent la gestion RH et les 5 erreurs les plus fréquentes qui coûtent cher aux entreprises.",
    author: "Sophie Dubois",
    date: "10 septembre 2024",
    readTime: "7 min",
    featured: false,
  },
];

const Blog: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState("Tous");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredArticles = blogArticles.filter((article) => {
    const matchesCategory =
      selectedCategory === "Tous" || article.category === selectedCategory;
    const matchesSearch =
      article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      article.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredArticle = blogArticles.find((article) => article.featured);
  const regularArticles = filteredArticles.filter((article) => !article.featured);

  return (
    <div className="pt-20">
      <Breadcrumbs
        items={[
          { label: "Accueil", href: "/" },
          { label: "Ressources", href: "/ressources" },
          { label: "Blog" },
        ]}
      />

      {/* Hero Section with Search */}
      <section className="section-padding bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-neutral-dark mb-6">
              Blog Axys
            </h1>
            <p className="text-lg text-neutral-gray mb-8">
              Insights, conseils et actualités sur l'audit, la comptabilité, la
              fiscalité et la gestion d'entreprise
            </p>

            {/* Search Bar */}
            <div className="relative max-w-xl mx-auto">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-gray" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Rechercher articles, sujets, mots-clés..."
                className="w-full pl-12 pr-4 py-4 border-2 border-neutral-light-bg rounded-xl focus:outline-none focus:border-primary/50 transition-colors text-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="section-padding bg-white border-b border-neutral-light-bg">
        <div className="container-custom">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-5 py-2 rounded-full font-semibold text-sm transition-all ${
                  selectedCategory === cat
                    ? "bg-primary text-white shadow-md"
                    : "bg-neutral-light-bg text-neutral-dark hover:bg-primary/10"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Article */}
      {selectedCategory === "Tous" && featuredArticle && (
        <section className="section-padding bg-neutral-light-bg">
          <div className="container-custom">
            <div className="mb-4">
              <span className="px-3 py-1 bg-secondary text-white text-xs font-semibold rounded-full">
                À LA UNE
              </span>
            </div>
            <Card className="overflow-hidden hover:shadow-card-hover transition-shadow duration-300">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="aspect-video lg:aspect-square bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg flex items-center justify-center">
                  <div className="text-center p-8">
                    <Tag className="w-16 h-16 text-primary/40 mx-auto mb-4" />
                    <p className="text-neutral-gray">Image de l'article</p>
                  </div>
                </div>
                <div className="flex flex-col justify-center">
                  <div className="mb-4">
                    <span className="px-3 py-1 bg-primary/10 text-primary text-sm font-semibold rounded-full">
                      {featuredArticle.category}
                    </span>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-neutral-dark mb-4">
                    {featuredArticle.title}
                  </h2>
                  <p className="text-lg text-neutral-gray mb-6 leading-relaxed">
                    {featuredArticle.excerpt}
                  </p>
                  <div className="flex items-center gap-6 text-sm text-neutral-gray mb-6">
                    <div className="flex items-center gap-2">
                      <User className="w-4 h-4" />
                      {featuredArticle.author}
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      {featuredArticle.date}
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      {featuredArticle.readTime} de lecture
                    </div>
                  </div>
                  <Button variant="primary" size="lg">
                    Lire l'article
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </section>
      )}

      {/* Articles Grid */}
      <section className="section-padding">
        <div className="container-custom">
          {filteredArticles.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-lg text-neutral-gray">
                Aucun article trouvé pour cette recherche.
              </p>
            </div>
          ) : (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {regularArticles.map((article, index) => (
                  <motion.div
                    key={article.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <Card className="h-full flex flex-col hover:shadow-card-hover transition-shadow duration-300 group">
                      {/* Article Image Placeholder */}
                      <div className="aspect-video bg-gradient-to-br from-primary/10 to-secondary/10 rounded-lg mb-4 flex items-center justify-center">
                        <Tag className="w-12 h-12 text-primary/30" />
                      </div>

                      {/* Category Badge */}
                      <div className="mb-3">
                        <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full">
                          {article.category}
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="text-xl font-bold text-neutral-dark mb-3 group-hover:text-primary transition-colors">
                        {article.title}
                      </h3>

                      {/* Excerpt */}
                      <p className="text-neutral-gray text-sm mb-4 leading-relaxed flex-grow">
                        {article.excerpt}
                      </p>

                      {/* Meta Info */}
                      <div className="pt-4 border-t border-neutral-light-bg">
                        <div className="flex items-center justify-between text-xs text-neutral-gray mb-3">
                          <div className="flex items-center gap-2">
                            <User className="w-3 h-3" />
                            {article.author}
                          </div>
                          <div className="flex items-center gap-2">
                            <Clock className="w-3 h-3" />
                            {article.readTime}
                          </div>
                        </div>
                        <div className="text-xs text-neutral-gray mb-4">
                          {article.date}
                        </div>
                        <Button variant="outline" className="w-full">
                          Lire l'article
                          <ArrowRight className="ml-2 w-4 h-4" />
                        </Button>
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </div>

              {/* Load More Button */}
              <div className="text-center mt-12">
                <Button variant="outline" size="lg">
                  Charger plus d'articles
                </Button>
              </div>
            </>
          )}
        </div>
      </section>

      {/* Newsletter Subscription */}
      <section className="section-padding bg-gradient-to-br from-primary to-primary/90">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto text-center text-white">
            <h2 className="text-3xl font-bold mb-4">
              Restez Informés de Nos Derniers Articles
            </h2>
            <p className="text-lg mb-8 opacity-90">
              Recevez nos meilleurs conseils et insights directement dans votre
              boîte mail. Une newsletter mensuelle, zéro spam.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="votre@email.com"
                className="flex-1 px-4 py-3 rounded-lg text-neutral-dark focus:outline-none focus:ring-2 focus:ring-white/50"
              />
              <Button
                variant="secondary"
                size="lg"
                className="whitespace-nowrap"
              >
                S'abonner
              </Button>
            </div>
            <p className="text-xs mt-4 opacity-75">
              En vous abonnant, vous acceptez notre politique de
              confidentialité.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
