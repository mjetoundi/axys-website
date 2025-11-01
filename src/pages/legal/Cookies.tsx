import React from "react";
import PageHero from "../../components/ui/PageHero";
import Card from "../../components/ui/Card";
import { Cookie } from "lucide-react";

const Cookies: React.FC = () => {
  return (
    <div className="pt-20">
      <PageHero
        icon={<Cookie className="w-8 h-8 text-white" />}
        title="Politique de Cookies"
        subtitle="Information sur l'utilisation des cookies sur notre site"
        gradient={false}
      />

      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto space-y-8">
            <Card>
              <h2 className="text-2xl font-bold text-neutral-dark mb-4">
                Qu'est-ce qu'un Cookie ?
              </h2>
              <p className="text-neutral-gray leading-relaxed">
                Un cookie est un petit fichier texte stocké sur votre ordinateur ou appareil mobile lors de votre visite sur un site internet. Les cookies permettent au site de reconnaître votre appareil et de mémoriser certaines informations vous concernant, afin de personnaliser votre expérience de navigation et d'améliorer nos services.
              </p>
            </Card>

            <Card>
              <h2 className="text-2xl font-bold text-neutral-dark mb-4">
                Cookies Utilisés sur Notre Site
              </h2>
              <p className="text-neutral-gray mb-4">
                Nous utilisons différents types de cookies sur www.axysaudit.com :
              </p>

              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-neutral-dark mb-2">
                    1. Cookies Strictement Nécessaires
                  </h3>
                  <p className="text-neutral-gray mb-2">
                    Ces cookies sont essentiels au fonctionnement du site et ne peuvent pas être désactivés dans nos systèmes.
                  </p>
                  <ul className="list-disc list-inside space-y-1 text-neutral-gray pl-4">
                    <li><strong>Cookie de session :</strong> maintient votre session active pendant votre navigation</li>
                    <li><strong>Cookie de sécurité :</strong> protège contre les attaques CSRF</li>
                    <li><strong>Cookie de préférences :</strong> mémorise vos choix de cookies</li>
                  </ul>
                  <p className="text-sm text-neutral-gray mt-2">
                    <strong>Durée :</strong> Session ou 13 mois maximum<br />
                    <strong>Finalité :</strong> Fonctionnement technique du site
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-neutral-dark mb-2">
                    2. Cookies de Performance et Analytiques
                  </h3>
                  <p className="text-neutral-gray mb-2">
                    Ces cookies nous permettent de comprendre comment les visiteurs utilisent notre site.
                  </p>
                  <ul className="list-disc list-inside space-y-1 text-neutral-gray pl-4">
                    <li><strong>Google Analytics :</strong> analyse du trafic et comportement utilisateur</li>
                    <li><strong>Cookies de mesure :</strong> pages visitées, temps passé, parcours utilisateur</li>
                  </ul>
                  <p className="text-sm text-neutral-gray mt-2">
                    <strong>Durée :</strong> 13 mois maximum<br />
                    <strong>Finalité :</strong> Amélioration de nos services<br />
                    <strong>Tiers :</strong> Google Inc.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-neutral-dark mb-2">
                    3. Cookies de Fonctionnalité
                  </h3>
                  <p className="text-neutral-gray mb-2">
                    Ces cookies permettent d'améliorer les fonctionnalités et la personnalisation du site.
                  </p>
                  <ul className="list-disc list-inside space-y-1 text-neutral-gray pl-4">
                    <li><strong>Préférences de langue :</strong> mémorise votre langue préférée</li>
                    <li><strong>Préférences d'affichage :</strong> mémorise vos choix de navigation</li>
                  </ul>
                  <p className="text-sm text-neutral-gray mt-2">
                    <strong>Durée :</strong> 12 mois<br />
                    <strong>Finalité :</strong> Amélioration de l'expérience utilisateur
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-neutral-dark mb-2">
                    4. Cookies Marketing et Publicité
                  </h3>
                  <p className="text-neutral-gray mb-2">
                    Ces cookies sont utilisés pour vous proposer des publicités personnalisées.
                  </p>
                  <ul className="list-disc list-inside space-y-1 text-neutral-gray pl-4">
                    <li><strong>Remarketing :</strong> affichage de publicités ciblées sur d'autres sites</li>
                    <li><strong>Cookies publicitaires :</strong> mesure de l'efficacité des campagnes</li>
                  </ul>
                  <p className="text-sm text-neutral-gray mt-2">
                    <strong>Durée :</strong> 13 mois maximum<br />
                    <strong>Finalité :</strong> Marketing personnalisé<br />
                    <strong>Tiers :</strong> Google Ads, LinkedIn Ads
                  </p>
                </div>
              </div>
            </Card>

            <Card>
              <h2 className="text-2xl font-bold text-neutral-dark mb-4">
                Gestion de Vos Préférences
              </h2>
              <div className="space-y-4 text-neutral-gray">
                <p>
                  Vous avez le contrôle sur les cookies déposés sur votre appareil. Vous pouvez à tout moment :
                </p>
                <ul className="list-disc list-inside space-y-2 pl-4">
                  <li>Accepter ou refuser les cookies via notre bandeau de consentement</li>
                  <li>Modifier vos préférences cookies à tout moment</li>
                  <li>Supprimer les cookies déjà déposés via votre navigateur</li>
                  <li>Configurer votre navigateur pour bloquer certains types de cookies</li>
                </ul>
                <p className="font-semibold mt-4">
                  Comment gérer les cookies via votre navigateur :
                </p>
                <ul className="list-none space-y-2 pl-4">
                  <li><strong>Chrome :</strong> Paramètres → Confidentialité et sécurité → Cookies</li>
                  <li><strong>Firefox :</strong> Options → Vie privée et sécurité → Cookies</li>
                  <li><strong>Safari :</strong> Préférences → Confidentialité → Cookies</li>
                  <li><strong>Edge :</strong> Paramètres → Cookies et autorisations</li>
                </ul>
                <p className="text-sm mt-4 bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                  ⚠️ <strong>Attention :</strong> Le blocage de certains cookies peut affecter le fonctionnement du site et limiter certaines fonctionnalités.
                </p>
              </div>
            </Card>

            <Card>
              <h2 className="text-2xl font-bold text-neutral-dark mb-4">
                Cookies Tiers
              </h2>
              <div className="space-y-3 text-neutral-gray">
                <p>
                  Notre site utilise des services tiers qui peuvent déposer leurs propres cookies :
                </p>
                <ul className="list-disc list-inside space-y-2 pl-4">
                  <li>
                    <strong>Google Analytics :</strong> Analyse de trafic -{" "}
                    <a
                      href="https://policies.google.com/privacy"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline"
                    >
                      Politique de confidentialité Google
                    </a>
                  </li>
                  <li>
                    <strong>Google Ads :</strong> Publicité ciblée -{" "}
                    <a
                      href="https://policies.google.com/technologies/ads"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline"
                    >
                      Infos sur les publicités Google
                    </a>
                  </li>
                  <li>
                    <strong>LinkedIn :</strong> Boutons de partage et remarketing -{" "}
                    <a
                      href="https://www.linkedin.com/legal/cookie-policy"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline"
                    >
                      Politique cookies LinkedIn
                    </a>
                  </li>
                </ul>
                <p className="mt-4">
                  Ces tiers sont responsables de leurs propres cookies et nous vous invitons à consulter leurs politiques de confidentialité respectives.
                </p>
              </div>
            </Card>

            <Card>
              <h2 className="text-2xl font-bold text-neutral-dark mb-4">
                Durée de Conservation
              </h2>
              <p className="text-neutral-gray leading-relaxed">
                Les cookies ont une durée de vie limitée. Les cookies de session expirent à la fermeture de votre navigateur. Les autres cookies persistent pendant une durée maximale de 13 mois conformément aux recommandations de la CNIL.
              </p>
            </Card>

            <Card>
              <h2 className="text-2xl font-bold text-neutral-dark mb-4">
                Vos Droits
              </h2>
              <div className="space-y-3 text-neutral-gray">
                <p>
                  Conformément au RGPD et à la directive ePrivacy, vous disposez des droits suivants :
                </p>
                <ul className="list-disc list-inside space-y-2 pl-4">
                  <li>Droit d'accès aux données collectées via cookies</li>
                  <li>Droit de refuser le dépôt de cookies non essentiels</li>
                  <li>Droit de retirer votre consentement à tout moment</li>
                  <li>Droit de vous opposer au traitement de vos données</li>
                </ul>
                <p className="mt-4">
                  Pour exercer vos droits : <strong>dpo@axysaudit.com</strong>
                </p>
              </div>
            </Card>

            <Card>
              <h2 className="text-2xl font-bold text-neutral-dark mb-4">
                Mise à Jour de Cette Politique
              </h2>
              <p className="text-neutral-gray leading-relaxed">
                Nous nous réservons le droit de modifier cette politique de cookies à tout moment. Toute modification sera publiée sur cette page avec une date de mise à jour actualisée. Nous vous encourageons à consulter régulièrement cette page.
              </p>
            </Card>

            <Card>
              <h2 className="text-2xl font-bold text-neutral-dark mb-4">
                Contact
              </h2>
              <div className="space-y-3 text-neutral-gray">
                <p>Pour toute question concernant notre utilisation des cookies :</p>
                <ul className="list-none space-y-2">
                  <li><strong>Email :</strong> dpo@axysaudit.com</li>
                  <li><strong>Courrier :</strong> AXYS AUDIT SAS - DPO, 123 Avenue des Champs-Élysées, 75008 Paris</li>
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

export default Cookies;
