import React, { useState } from "react";
import { motion } from "framer-motion";
import PageHero from "../components/ui/PageHero";
import Card from "../components/ui/Card";
import Button from "../components/ui/Button";
import {
  Lock,
  Mail,
  Eye,
  EyeOff,
  FileText,
  Download,
  FolderOpen,
  Bell,
  User,
  Settings,
  LogOut,
  Search,
  Calendar,
  TrendingUp,
} from "lucide-react";

const EspaceClient: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate login
    if (email && password) {
      setIsLoggedIn(true);
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setEmail("");
    setPassword("");
  };

  // Mock data for dashboard
  const recentDocuments = [
    {
      id: 1,
      name: "Rapport Audit 2024.pdf",
      type: "Audit",
      date: "15 oct. 2024",
      size: "2.5 MB",
    },
    {
      id: 2,
      name: "Bilan Comptable Q3 2024.pdf",
      type: "Comptabilité",
      date: "10 oct. 2024",
      size: "1.8 MB",
    },
    {
      id: 3,
      name: "Déclaration Fiscale 2024.pdf",
      type: "Fiscalité",
      date: "5 oct. 2024",
      size: "950 KB",
    },
    {
      id: 4,
      name: "Fiches de paie Septembre.zip",
      type: "RH",
      date: "1 oct. 2024",
      size: "1.2 MB",
    },
  ];

  const folders = [
    { name: "Dossier 2024", count: 45, color: "primary" },
    { name: "Dossier 2023", count: 128, color: "secondary" },
    { name: "Documents Fiscaux", count: 32, color: "primary" },
    { name: "Contrats & Conventions", count: 18, color: "secondary" },
  ];

  const notifications = [
    {
      id: 1,
      message: "Nouveau document disponible : Rapport Audit 2024",
      date: "Il y a 2 heures",
      unread: true,
    },
    {
      id: 2,
      message: "Votre expert-comptable a ajouté un commentaire",
      date: "Hier",
      unread: true,
    },
    {
      id: 3,
      message: "Rappel : Échéance déclaration TVA - 15 novembre",
      date: "Il y a 3 jours",
      unread: false,
    },
  ];

  // Login Page
  if (!isLoggedIn) {
    return (
      <div className="pt-20">
        <PageHero
          icon={<Lock className="w-8 h-8 text-white" />}
          title="Espace Client Sécurisé"
          subtitle="Accédez à vos documents, rapports et échanges avec votre expert Axys"
        />

        <section className="section-padding">
          <div className="container-custom">
            <div className="max-w-md mx-auto">
              <Card>
                <div className="text-center mb-6">
                  <h2 className="text-2xl font-bold text-neutral-dark mb-2">
                    Connexion
                  </h2>
                  <p className="text-neutral-gray text-sm">
                    Entrez vos identifiants pour accéder à votre espace
                  </p>
                </div>

                <form onSubmit={handleLogin} className="space-y-6">
                  <div>
                    <label className="block text-sm font-semibold text-neutral-dark mb-2">
                      Email / Identifiant
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-gray" />
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full pl-11 pr-4 py-3 border border-neutral-light-bg rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
                        placeholder="votre@email.com"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-neutral-dark mb-2">
                      Mot de passe
                    </label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-gray" />
                      <input
                        type={showPassword ? "text" : "password"}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full pl-11 pr-12 py-3 border border-neutral-light-bg rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
                        placeholder="••••••••"
                        required
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-gray hover:text-neutral-dark"
                      >
                        {showPassword ? (
                          <EyeOff className="w-5 h-5" />
                        ) : (
                          <Eye className="w-5 h-5" />
                        )}
                      </button>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        className="w-4 h-4 text-primary border-neutral-light-bg rounded focus:ring-primary"
                      />
                      <span className="text-sm text-neutral-gray">
                        Se souvenir de moi
                      </span>
                    </label>
                    <a
                      href="#"
                      className="text-sm text-primary hover:underline"
                    >
                      Mot de passe oublié ?
                    </a>
                  </div>

                  <Button variant="primary" size="lg" className="w-full" type="submit">
                    Se connecter
                  </Button>
                </form>

                <div className="mt-6 pt-6 border-t border-neutral-light-bg text-center">
                  <p className="text-sm text-neutral-gray mb-3">
                    Pas encore de compte ?
                  </p>
                  <Button
                    variant="outline"
                    onClick={() => (window.location.href = "/contact")}
                  >
                    Devenir client
                  </Button>
                </div>
              </Card>

              {/* Security Info */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="mt-6 p-4 bg-primary/5 rounded-lg"
              >
                <div className="flex items-start gap-3">
                  <Lock className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <div className="text-sm">
                    <p className="font-semibold text-neutral-dark mb-1">
                      Connexion sécurisée SSL
                    </p>
                    <p className="text-neutral-gray">
                      Vos données sont chiffrées et protégées. Nous ne
                      partageons jamais vos informations avec des tiers.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    );
  }

  // Dashboard (After Login)
  return (
    <div className="pt-20 bg-neutral-light-bg min-h-screen">
      {/* Dashboard Header */}
      <div className="bg-white border-b border-neutral-light-bg">
        <div className="container-custom py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-neutral-dark mb-1">
                Bienvenue, {email.split("@")[0]}
              </h1>
              <p className="text-neutral-gray">
                Dernière connexion : Aujourd'hui à 10:32
              </p>
            </div>
            <div className="flex items-center gap-3">
              <div className="relative">
                <Bell className="w-6 h-6 text-neutral-gray cursor-pointer hover:text-primary transition-colors" />
                <span className="absolute -top-1 -right-1 w-2 h-2 bg-secondary rounded-full" />
              </div>
              <button
                onClick={handleLogout}
                className="flex items-center gap-2 px-4 py-2 text-neutral-gray hover:text-primary transition-colors"
              >
                <LogOut className="w-5 h-5" />
                <span className="hidden sm:inline">Déconnexion</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Sidebar Navigation */}
          <div className="lg:col-span-1">
            <Card className="sticky top-24">
              <nav className="space-y-2">
                {[
                  { icon: TrendingUp, label: "Tableau de bord", active: true },
                  { icon: FileText, label: "Mes documents", active: false },
                  { icon: FolderOpen, label: "Mes dossiers", active: false },
                  { icon: Calendar, label: "Échéances", active: false },
                  { icon: Bell, label: "Notifications", active: false },
                  { icon: User, label: "Mon profil", active: false },
                  { icon: Settings, label: "Paramètres", active: false },
                ].map((item) => {
                  const Icon = item.icon;
                  return (
                    <button
                      key={item.label}
                      className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                        item.active
                          ? "bg-primary text-white"
                          : "text-neutral-gray hover:bg-neutral-light-bg"
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                      <span className="font-medium">{item.label}</span>
                    </button>
                  );
                })}
              </nav>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3 space-y-6">
            {/* Quick Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Card className="bg-gradient-to-br from-primary to-primary/80 text-white">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm opacity-90 mb-1">Documents totaux</p>
                    <p className="text-3xl font-bold">223</p>
                  </div>
                  <FileText className="w-10 h-10 opacity-50" />
                </div>
              </Card>
              <Card className="bg-gradient-to-br from-secondary to-secondary/80 text-white">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm opacity-90 mb-1">
                      Nouveaux ce mois
                    </p>
                    <p className="text-3xl font-bold">12</p>
                  </div>
                  <Download className="w-10 h-10 opacity-50" />
                </div>
              </Card>
              <Card className="bg-gradient-to-br from-neutral-dark to-neutral-dark/80 text-white">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm opacity-90 mb-1">
                      Prochaine échéance
                    </p>
                    <p className="text-lg font-bold">15 nov. 2024</p>
                  </div>
                  <Calendar className="w-10 h-10 opacity-50" />
                </div>
              </Card>
            </div>

            {/* Notifications */}
            <Card>
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-bold text-neutral-dark">
                  Notifications Récentes
                </h2>
                <span className="text-xs bg-secondary/10 text-secondary px-2 py-1 rounded-full font-semibold">
                  2 non lues
                </span>
              </div>
              <div className="space-y-3">
                {notifications.map((notif) => (
                  <div
                    key={notif.id}
                    className={`p-3 rounded-lg border ${
                      notif.unread
                        ? "bg-primary/5 border-primary/20"
                        : "bg-neutral-light-bg border-transparent"
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      {notif.unread && (
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                      )}
                      <div className="flex-1">
                        <p className="text-sm text-neutral-dark font-medium">
                          {notif.message}
                        </p>
                        <p className="text-xs text-neutral-gray mt-1">
                          {notif.date}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            {/* Recent Documents */}
            <Card>
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-bold text-neutral-dark">
                  Documents Récents
                </h2>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-gray" />
                  <input
                    type="text"
                    placeholder="Rechercher..."
                    className="pl-10 pr-4 py-2 border border-neutral-light-bg rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
                  />
                </div>
              </div>

              <div className="space-y-2">
                {recentDocuments.map((doc) => (
                  <div
                    key={doc.id}
                    className="flex items-center justify-between p-4 hover:bg-neutral-light-bg rounded-lg transition-colors group"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                        <FileText className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium text-neutral-dark">
                          {doc.name}
                        </p>
                        <div className="flex items-center gap-3 text-xs text-neutral-gray mt-1">
                          <span>{doc.type}</span>
                          <span>•</span>
                          <span>{doc.date}</span>
                          <span>•</span>
                          <span>{doc.size}</span>
                        </div>
                      </div>
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      <Download className="w-4 h-4 mr-2" />
                      Télécharger
                    </Button>
                  </div>
                ))}
              </div>

              <div className="mt-4 pt-4 border-t border-neutral-light-bg text-center">
                <Button variant="outline">Voir tous les documents</Button>
              </div>
            </Card>

            {/* Folders */}
            <Card>
              <h2 className="text-xl font-bold text-neutral-dark mb-4">
                Mes Dossiers
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {folders.map((folder, index) => {
                  const folderColor =
                    folder.color === "primary" ? "primary" : "secondary";
                  return (
                    <div
                      key={folder.name}
                      className={`p-4 rounded-lg border-2 border-${folderColor}/20 hover:border-${folderColor}/50 transition-colors cursor-pointer group`}
                    >
                      <div className="flex items-center gap-3">
                        <FolderOpen
                          className={`w-8 h-8 text-${folderColor} group-hover:scale-110 transition-transform`}
                        />
                        <div>
                          <p className="font-semibold text-neutral-dark">
                            {folder.name}
                          </p>
                          <p className="text-sm text-neutral-gray">
                            {folder.count} documents
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EspaceClient;
