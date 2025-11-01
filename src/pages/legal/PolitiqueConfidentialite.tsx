import React from "react";
import PageHero from "../../components/ui/PageHero";
import Card from "../../components/ui/Card";
import { Shield } from "lucide-react";

const PolitiqueConfidentialite: React.FC = () => {
  return (
    <div className="pt-20">
      <PageHero
        icon={<Shield className="w-8 h-8 text-white" />}
        title="Politique de Confidentialité"
        subtitle="Protection et traitement de vos données personnelles"
        gradient={false}
      />

      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto space-y-8">
            <Card>
              <h2 className="text-2xl font-bold text-neutral-dark mb-4">
                1. Introduction
              </h2>
              <p className="text-neutral-gray leading-relaxed">
                AXYS AUDIT SAS (ci-après "nous", "notre" ou "AXYS") s'engage à protéger la confidentialité et la sécurité des données personnelles de ses utilisateurs, clients et visiteurs. Cette politique de confidentialité explique comment nous collectons, utilisons, partageons et protégeons vos informations personnelles conformément au Règlement Général sur la Protection des Données (RGPD) et à la loi Informatique et Libertés.
              </p>
            </Card>

            <Card>
              <h2 className="text-2xl font-bold text-neutral-dark mb-4">
                2. Responsable du Traitement
              </h2>
              <div className="space-y-3 text-neutral-gray">
                <p>
                  <strong>Responsable du traitement :</strong> AXYS AUDIT SAS
                </p>
                <p>
                  <strong>Siège social :</strong> 123 Avenue des Champs-Élysées, 75008 Paris, France
                </p>
                <p>
                  <strong>DPO (Délégué à la Protection des Données) :</strong> dpo@axysaudit.com
                </p>
              </div>
            </Card>

            <Card>
              <h2 className="text-2xl font-bold text-neutral-dark mb-4">
                3. Données Collectées
              </h2>
              <div className="space-y-4 text-neutral-gray">
                <p>Nous pouvons collecter les données personnelles suivantes :</p>
                <ul className="list-disc list-inside space-y-2 pl-4">
                  <li><strong>Données d'identification :</strong> nom, prénom, adresse email, numéro de téléphone</li>
                  <li><strong>Données professionnelles :</strong> entreprise, fonction, secteur d'activité</li>
                  <li><strong>Données de connexion :</strong> adresse IP, cookies, logs de navigation</li>
                  <li><strong>Données transactionnelles :</strong> historique des demandes, échanges avec nos services</li>
                  <li><strong>Données de contact :</strong> correspondances, demandes d'information, inscriptions newsletters</li>
                </ul>
              </div>
            </Card>

            <Card>
              <h2 className="text-2xl font-bold text-neutral-dark mb-4">
                4. Finalités du Traitement
              </h2>
              <div className="space-y-4 text-neutral-gray">
                <p>Vos données personnelles sont collectées et traitées pour les finalités suivantes :</p>
                <ul className="list-disc list-inside space-y-2 pl-4">
                  <li>Gestion des demandes de contact et de devis</li>
                  <li>Fourniture de nos services d'audit, conseil et expertise comptable</li>
                  <li>Gestion de la relation client et suivi des dossiers</li>
                  <li>Envoi de communications commerciales et newsletters (avec votre consentement)</li>
                  <li>Amélioration de nos services et de notre site web</li>
                  <li>Respect de nos obligations légales et réglementaires</li>
                  <li>Statistiques et analyses de fréquentation du site</li>
                </ul>
              </div>
            </Card>

            <Card>
              <h2 className="text-2xl font-bold text-neutral-dark mb-4">
                5. Base Légale du Traitement
              </h2>
              <div className="space-y-3 text-neutral-gray">
                <p>Le traitement de vos données personnelles repose sur :</p>
                <ul className="list-disc list-inside space-y-2 pl-4">
                  <li><strong>Votre consentement</strong> pour les newsletters et communications marketing</li>
                  <li><strong>L'exécution du contrat</strong> pour la fourniture de nos services</li>
                  <li><strong>Nos obligations légales</strong> en matière de comptabilité, fiscalité et archivage</li>
                  <li><strong>Notre intérêt légitime</strong> pour l'amélioration de nos services et la sécurité</li>
                </ul>
              </div>
            </Card>

            <Card>
              <h2 className="text-2xl font-bold text-neutral-dark mb-4">
                6. Destinataires des Données
              </h2>
              <div className="space-y-3 text-neutral-gray">
                <p>Vos données personnelles sont destinées à :</p>
                <ul className="list-disc list-inside space-y-2 pl-4">
                  <li>Notre personnel habilité (experts-comptables, auditeurs, consultants)</li>
                  <li>Nos sous-traitants techniques (hébergement, maintenance, outils métiers)</li>
                  <li>Autorités administratives et juridictionnelles sur demande légale</li>
                  <li>Commissaires aux comptes et autorités de contrôle professionnelles</li>
                </ul>
                <p className="mt-4">
                  Nous ne vendons ni ne louons vos données personnelles à des tiers à des fins commerciales.
                </p>
              </div>
            </Card>

            <Card>
              <h2 className="text-2xl font-bold text-neutral-dark mb-4">
                7. Durée de Conservation
              </h2>
              <div className="space-y-3 text-neutral-gray">
                <ul className="list-disc list-inside space-y-2 pl-4">
                  <li><strong>Prospects :</strong> 3 ans à compter du dernier contact</li>
                  <li><strong>Clients actifs :</strong> Durée de la relation contractuelle + 10 ans (obligations légales)</li>
                  <li><strong>Données comptables :</strong> 10 ans minimum (Code de commerce)</li>
                  <li><strong>Cookies :</strong> 13 mois maximum</li>
                  <li><strong>Logs de connexion :</strong> 12 mois</li>
                </ul>
              </div>
            </Card>

            <Card>
              <h2 className="text-2xl font-bold text-neutral-dark mb-4">
                8. Vos Droits
              </h2>
              <div className="space-y-4 text-neutral-gray">
                <p>Conformément au RGPD, vous disposez des droits suivants :</p>
                <ul className="list-disc list-inside space-y-2 pl-4">
                  <li><strong>Droit d'accès :</strong> obtenir la confirmation et une copie de vos données</li>
                  <li><strong>Droit de rectification :</strong> corriger vos données inexactes ou incomplètes</li>
                  <li><strong>Droit à l'effacement :</strong> demander la suppression de vos données</li>
                  <li><strong>Droit à la limitation :</strong> limiter le traitement de vos données</li>
                  <li><strong>Droit à la portabilité :</strong> recevoir vos données dans un format structuré</li>
                  <li><strong>Droit d'opposition :</strong> vous opposer au traitement de vos données</li>
                  <li><strong>Droit de retirer votre consentement :</strong> à tout moment</li>
                </ul>
                <p className="mt-4">
                  Pour exercer vos droits, contactez-nous à : <strong>dpo@axysaudit.com</strong>
                </p>
                <p>
                  Vous disposez également du droit d'introduire une réclamation auprès de la CNIL (Commission Nationale de l'Informatique et des Libertés).
                </p>
              </div>
            </Card>

            <Card>
              <h2 className="text-2xl font-bold text-neutral-dark mb-4">
                9. Sécurité des Données
              </h2>
              <div className="space-y-3 text-neutral-gray">
                <p>Nous mettons en œuvre des mesures techniques et organisationnelles appropriées pour protéger vos données personnelles :</p>
                <ul className="list-disc list-inside space-y-2 pl-4">
                  <li>Chiffrement SSL/TLS pour les transmissions de données</li>
                  <li>Contrôle d'accès strict et authentification renforcée</li>
                  <li>Sauvegardes régulières et sécurisées</li>
                  <li>Formations régulières de notre personnel</li>
                  <li>Audits de sécurité périodiques</li>
                </ul>
              </div>
            </Card>

            <Card>
              <h2 className="text-2xl font-bold text-neutral-dark mb-4">
                10. Transferts Internationaux
              </h2>
              <p className="text-neutral-gray leading-relaxed">
                Vos données personnelles sont hébergées au sein de l'Union Européenne. En cas de transfert hors UE, nous nous assurons que des garanties appropriées sont en place (clauses contractuelles types, décision d'adéquation) conformément au RGPD.
              </p>
            </Card>

            <Card>
              <h2 className="text-2xl font-bold text-neutral-dark mb-4">
                11. Modifications
              </h2>
              <p className="text-neutral-gray leading-relaxed">
                Cette politique de confidentialité peut être mise à jour périodiquement. Nous vous informerons de toute modification substantielle par email ou via notre site web.
              </p>
            </Card>

            <Card>
              <h2 className="text-2xl font-bold text-neutral-dark mb-4">
                12. Contact
              </h2>
              <div className="space-y-3 text-neutral-gray">
                <p>Pour toute question concernant cette politique de confidentialité ou le traitement de vos données personnelles :</p>
                <ul className="list-none space-y-2">
                  <li><strong>Email :</strong> dpo@axysaudit.com</li>
                  <li><strong>Courrier :</strong> AXYS AUDIT SAS - DPO, 123 Avenue des Champs-Élysées, 75008 Paris</li>
                  <li><strong>Téléphone :</strong> +33 (0) 1 23 45 67 89</li>
                </ul>
              </div>
            </Card>

            <div className="text-sm text-neutral-gray text-center pt-8 border-t border-neutral-light-bg">
              <p>Dernière mise à jour : Novembre 2024</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PolitiqueConfidentialite;
