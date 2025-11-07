import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  User,
  Building,
  MessageSquare,
  Calendar,
  ArrowRight,
  CheckCircle,
  AlertCircle,
} from "lucide-react";
import Card from "../components/ui/Card";
import Button from "../components/ui/Button";

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    subject: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError(false);

    try {
      // Construction du corps de l'email
      const emailBody = `
Nouveau message de contact depuis le site AXYS AUDIT

═══════════════════════════════════════
INFORMATIONS DU CONTACT
═══════════════════════════════════════

Nom complet: ${formData.firstName} ${formData.lastName}
Email: ${formData.email}
Téléphone: ${formData.phone || "Non renseigné"}
Entreprise: ${formData.company || "Non renseignée"}
Service concerné: ${formData.service || "Non spécifié"}

═══════════════════════════════════════
SUJET
═══════════════════════════════════════

${formData.subject}

═══════════════════════════════════════
MESSAGE
═══════════════════════════════════════

${formData.message}

═══════════════════════════════════════
`;

      const response = await fetch("https://formspree.io/f/xovyaaka", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: `${formData.firstName} ${formData.lastName}`,
          email: formData.email,
          phone: formData.phone,
          company: formData.company,
          service: formData.service,
          subject: formData.subject,
          message: formData.message,
          _replyto: formData.email,
          _subject: `[AXYS Contact] ${formData.subject}`,
        }),
      });

      if (response.ok) {
        setIsSubmitted(true);
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          company: "",
          service: "",
          subject: "",
          message: "",
        });
        setTimeout(() => setIsSubmitted(false), 5000);
      } else {
        setSubmitError(true);
      }
    } catch (error) {
      console.error("Erreur lors de l'envoi:", error);
      setSubmitError(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Téléphone",
      details: ["+237 699 95 18 18", "+237 222 21 09 41"],
      action: "Appelez-nous directement",
    },
    {
      icon: Mail,
      title: "Email",
      details: ["axysaudit@axysaudit.com", "Réponse sous 24h"],
      action: "Envoyez-nous un message",
    },
    {
      icon: MapPin,
      title: "Adresse",
      details: ["BP 6137", "Yaoundé, Cameroun"],
      action: "Venez nous rencontrer",
    },
    {
      icon: Clock,
      title: "Horaires",
      details: ["Lun-Ven : 8h-17h", "Sur rendez-vous"],
      action: "Nos horaires d'ouverture",
    },
  ];

  const offices = [
    {
      name: "Siège Social - Yaoundé",
      address: "BP 6137\nYaoundé, Cameroun",
      phone: "+237 699 95 18 18",
      email: "axysaudit@axysaudit.com",
      hours: "Lun-Ven : 8h-17h",
    },
  ];

  const services = [
    "Audit & Contrôle",
    "Conseil & Optimisation",
    "Expertise Comptable",
    "Externalisation RH",
    "Fiscalité & Advisory",
    "Systèmes d'Information",
    "Autre / Je ne sais pas",
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-primary/10 to-secondary/10 noise-texture">
        <div className="container-custom">
          <motion.div
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-neutral-dark mb-6">
              Contactez <span className="text-gradient">AXYS AUDIT</span>
            </h1>
            <p className="text-lg text-neutral-gray leading-relaxed mb-8">
              Nos experts sont à votre disposition pour analyser vos besoins et
              vous proposer des solutions personnalisées. Échangeons sur vos
              projets !
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="flex items-center space-x-2 bg-white/80 rounded-full px-4 py-2">
                <Clock size={16} className="text-primary" />
                <span className="text-sm font-semibold">Réponse sous 24h</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/80 rounded-full px-4 py-2">
                <CheckCircle size={16} className="text-secondary" />
                <span className="text-sm font-semibold">
                  Diagnostic gratuit
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="section-padding bg-white white-pattern">
        <div className="container-custom">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-dark mb-6">
              Comment nous contacter
            </h2>
            <p className="text-lg text-neutral-gray max-w-3xl mx-auto">
              Plusieurs moyens de nous joindre selon vos préférences et la
              nature de votre demande.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="text-center h-full">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6">
                    <info.icon size={32} className="text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-neutral-dark mb-4">
                    {info.title}
                  </h3>
                  <div className="space-y-1 mb-4">
                    {info.details.map((detail, dIndex) => (
                      <p
                        key={dIndex}
                        className={
                          dIndex === 0
                            ? "text-neutral-dark font-semibold"
                            : "text-neutral-gray text-sm"
                        }
                      >
                        {detail}
                      </p>
                    ))}
                  </div>
                  <p className="text-sm text-primary font-medium">
                    {info.action}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="section-padding bg-neutral-light-bg noise-texture">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card className="p-8">
                <h3 className="text-2xl font-bold text-neutral-dark mb-6">
                  Envoyez-nous un message
                </h3>

                {isSubmitted ? (
                  <motion.div
                    className="text-center py-12"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <CheckCircle
                      size={64}
                      className="text-green-500 mx-auto mb-4"
                    />
                    <h4 className="text-xl font-semibold text-neutral-dark mb-2">
                      Message envoyé !
                    </h4>
                    <p className="text-neutral-gray">
                      Nous vous répondrons sous 24h.
                    </p>
                  </motion.div>
                ) : submitError ? (
                  <motion.div
                    className="text-center py-12"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <AlertCircle
                      size={64}
                      className="text-red-500 mx-auto mb-4"
                    />
                    <h4 className="text-xl font-semibold text-neutral-dark mb-2">
                      Erreur d'envoi
                    </h4>
                    <p className="text-neutral-gray mb-4">
                      Une erreur est survenue. Veuillez réessayer ou nous
                      contacter directement par téléphone ou email.
                    </p>
                    <button
                      onClick={() => setSubmitError(false)}
                      className="text-primary font-semibold hover:underline"
                    >
                      Réessayer
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-semibold text-neutral-dark mb-2">
                          Prénom *
                        </label>
                        <input
                          type="text"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-neutral-dark mb-2">
                          Nom *
                        </label>
                        <input
                          type="text"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                          required
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-semibold text-neutral-dark mb-2">
                          Email *
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-neutral-dark mb-2">
                          Téléphone
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-neutral-dark mb-2">
                        Entreprise
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-neutral-dark mb-2">
                        Service concerné
                      </label>
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      >
                        <option value="">Sélectionnez un service</option>
                        {services.map((service, index) => (
                          <option key={index} value={service}>
                            {service}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-neutral-dark mb-2">
                        Sujet *
                      </label>
                      <input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                        placeholder="Ex: Demande de devis pour audit comptable"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-neutral-dark mb-2">
                        Message *
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        rows={4}
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
                        placeholder="Décrivez votre projet, vos besoins ou vos questions..."
                        required
                      />
                    </div>

                    <div className="text-sm text-neutral-gray">
                      * Champs obligatoires. Vos données sont traitées
                      conformément à notre
                      <a
                        href="/politique-confidentialite"
                        className="text-primary hover:underline"
                      >
                        {" "}
                        politique de confidentialité
                      </a>
                      .
                    </div>

                    <Button
                      type="submit"
                      variant="primary"
                      size="lg"
                      icon={Send}
                      className="w-full"
                      disabled={isSubmitting}
                    >
                      {isSubmitting
                        ? "Envoi en cours..."
                        : "Envoyer le message"}
                    </Button>
                  </form>
                )}
              </Card>
            </motion.div>

            {/* Offices */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h3 className="text-2xl font-bold text-neutral-dark mb-6">
                Nos bureaux
              </h3>

              {offices.map((office, index) => (
                <Card key={index} className="p-6">
                  <h4 className="text-xl font-semibold text-neutral-dark mb-4">
                    {office.name}
                  </h4>
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <MapPin
                        size={18}
                        className="text-primary mt-1 flex-shrink-0"
                      />
                      <div className="whitespace-pre-line text-neutral-gray">
                        {office.address}
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Phone size={18} className="text-primary flex-shrink-0" />
                      <span className="text-neutral-dark font-semibold">
                        {office.phone}
                      </span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Mail size={18} className="text-primary flex-shrink-0" />
                      <span className="text-neutral-dark">{office.email}</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Clock size={18} className="text-primary flex-shrink-0" />
                      <span className="text-neutral-gray">{office.hours}</span>
                    </div>
                  </div>
                </Card>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-br from-neutral-dark via-gray-900 to-neutral-dark text-white noise-texture">
        <div className="container-custom">
          <motion.div
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Besoin d'une réponse immédiate ?
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed mb-8">
              Nos experts sont disponibles pour répondre à vos questions et vous
              orienter vers la meilleure solution.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <a href="tel:+237699951818" className="w-full sm:w-auto">
                <Button
                  variant="primary"
                  size="lg"
                  icon={Phone}
                  className="w-full"
                >
                  +237 699 95 18 18
                </Button>
              </a>
              <a
                href="mailto:axysaudit@axysaudit.com?subject=Demande de rendez-vous&body=Bonjour,%0D%0A%0D%0AJe souhaite prendre rendez-vous avec un expert AXYS AUDIT.%0D%0A%0D%0AMes disponibilités :%0D%0A%0D%0ACordialement,"
                className="w-full sm:w-auto"
              >
                <Button
                  variant="outline"
                  size="lg"
                  icon={Calendar}
                  className="w-full border-white text-white hover:bg-white hover:text-neutral-dark"
                >
                  Prendre rendez-vous
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
