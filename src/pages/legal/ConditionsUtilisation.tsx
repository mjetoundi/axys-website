import React from "react";
import PageHero from "../../components/ui/PageHero";
import Card from "../../components/ui/Card";
import { FileText } from "lucide-react";

const ConditionsUtilisation: React.FC = () => {
  return (
    <div className="pt-20">
      <PageHero
        icon={<FileText className="w-8 h-8 text-white" />}
        title="Conditions Générales d'Utilisation"
        subtitle="Conditions régissant l'utilisation du site AXYS AUDIT"
        gradient={false}
      />

      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto space-y-8">
            <Card>
              <h2 className="text-2xl font-bold text-neutral-dark mb-4">
                1. Objet
              </h2>
              <p className="text-neutral-gray leading-relaxed">
                Les présentes Conditions Générales d'Utilisation (CGU) ont pour objet de définir les modalités et conditions d'utilisation du site internet www.axysaudit.com (ci-après le "Site") édité par AXYS AUDIT SAS. L'utilisation du Site implique l'acceptation pleine et entière des présentes CGU.
              </p>
            </Card>

            <Card>
              <h2 className="text-2xl font-bold text-neutral-dark mb-4">
                2. Accès au Site
              </h2>
              <div className="space-y-3 text-neutral-gray">
                <p>
                  Le Site est accessible gratuitement à tout utilisateur disposant d'un accès à Internet. Tous les coûts afférents à l'accès au Site, que ce soient les frais matériels, logiciels ou d'accès à Internet, sont exclusivement à la charge de l'utilisateur.
                </p>
                <p>
                  AXYS AUDIT met en œuvre tous les moyens raisonnables à sa disposition pour assurer un accès de qualité au Site, mais n'est tenue à aucune obligation d'y parvenir. AXYS AUDIT ne peut être tenue responsable de tout dysfonctionnement du réseau ou des serveurs ou de tout autre événement échappant au contrôle raisonnable, qui empêcherait ou dégraderait l'accès au Site.
                </p>
                <p>
                  AXYS AUDIT se réserve le droit d'interrompre, de suspendre momentanément ou de modifier sans préavis l'accès à tout ou partie du Site, afin d'en assurer la maintenance, ou pour toute autre raison, sans que l'interruption n'ouvre droit à aucune obligation ni indemnisation.
                </p>
              </div>
            </Card>

            <Card>
              <h2 className="text-2xl font-bold text-neutral-dark mb-4">
                3. Utilisation du Site
              </h2>
              <div className="space-y-3 text-neutral-gray">
                <p>L'utilisateur s'engage à utiliser le Site de manière loyale et conforme aux présentes CGU. Il est notamment interdit de :</p>
                <ul className="list-disc list-inside space-y-2 pl-4">
                  <li>Utiliser le Site à des fins illégales, frauduleuses ou portant atteinte aux droits de tiers</li>
                  <li>Tenter d'accéder de manière non autorisée aux systèmes informatiques du Site</li>
                  <li>Diffuser des virus, malwares ou tout autre code malveillant</li>
                  <li>Collecter ou stocker des données personnelles d'autres utilisateurs</li>
                  <li>Utiliser des robots, spiders ou autres dispositifs automatisés sans autorisation</li>
                  <li>Perturber ou interrompre le bon fonctionnement du Site</li>
                </ul>
              </div>
            </Card>

            <Card>
              <h2 className="text-2xl font-bold text-neutral-dark mb-4">
                4. Propriété Intellectuelle
              </h2>
              <div className="space-y-3 text-neutral-gray">
                <p>
                  L'ensemble du contenu du Site, incluant notamment les textes, images, graphismes, logos, icônes, sons, logiciels, est la propriété exclusive d'AXYS AUDIT ou de ses partenaires et est protégé au titre des lois relatives à la propriété intellectuelle.
                </p>
                <p>
                  Toute reproduction, représentation, modification, publication, adaptation de tout ou partie des éléments du Site, quel que soit le moyen ou le procédé utilisé, est interdite, sauf autorisation écrite préalable d'AXYS AUDIT.
                </p>
                <p>
                  Toute exploitation non autorisée du Site ou de l'un quelconque des éléments qu'il contient sera considérée comme constitutive d'une contrefaçon et poursuivie conformément aux dispositions des articles L.335-2 et suivants du Code de Propriété Intellectuelle.
                </p>
              </div>
            </Card>

            <Card>
              <h2 className="text-2xl font-bold text-neutral-dark mb-4">
                5. Données Personnelles
              </h2>
              <p className="text-neutral-gray leading-relaxed">
                Les données personnelles collectées via le Site font l'objet d'un traitement conforme au RGPD. Pour plus d'informations, veuillez consulter notre{" "}
                <a href="/politique-confidentialite" className="text-primary hover:underline">
                  Politique de Confidentialité
                </a>
                .
              </p>
            </Card>

            <Card>
              <h2 className="text-2xl font-bold text-neutral-dark mb-4">
                6. Responsabilité
              </h2>
              <div className="space-y-3 text-neutral-gray">
                <p>
                  Les informations diffusées sur le Site sont fournies à titre indicatif. AXYS AUDIT s'efforce de fournir des informations aussi précises que possible mais ne peut garantir l'exactitude, la complétude ou l'actualité des informations diffusées.
                </p>
                <p>
                  En conséquence, AXYS AUDIT décline toute responsabilité :
                </p>
                <ul className="list-disc list-inside space-y-2 pl-4">
                  <li>Pour toute imprécision, inexactitude ou omission portant sur des informations disponibles sur le Site</li>
                  <li>Pour tout dommage résultant d'une intrusion frauduleuse d'un tiers ayant entraîné une modification des informations</li>
                  <li>Pour tout dommage direct ou indirect résultant de l'utilisation du Site</li>
                  <li>Pour les dommages résultant de l'impossibilité d'accéder au Site ou de l'utiliser</li>
                </ul>
                <p>
                  L'utilisateur est seul responsable de l'utilisation qu'il fait du Site et des informations qu'il y consulte.
                </p>
              </div>
            </Card>

            <Card>
              <h2 className="text-2xl font-bold text-neutral-dark mb-4">
                7. Liens Hypertextes
              </h2>
              <div className="space-y-3 text-neutral-gray">
                <p>
                  Le Site peut contenir des liens hypertextes vers d'autres sites internet. AXYS AUDIT n'exerce aucun contrôle sur ces sites tiers et décline toute responsabilité quant à leur contenu, leur disponibilité ou leur utilisation.
                </p>
                <p>
                  La mise en place de liens hypertextes vers le Site nécessite l'autorisation préalable et écrite d'AXYS AUDIT. Cette autorisation peut être révoquée à tout moment.
                </p>
              </div>
            </Card>

            <Card>
              <h2 className="text-2xl font-bold text-neutral-dark mb-4">
                8. Cookies
              </h2>
              <p className="text-neutral-gray leading-relaxed">
                Le Site utilise des cookies. Pour plus d'informations sur notre utilisation des cookies, veuillez consulter notre{" "}
                <a href="/cookies" className="text-primary hover:underline">
                  Politique de Cookies
                </a>
                .
              </p>
            </Card>

            <Card>
              <h2 className="text-2xl font-bold text-neutral-dark mb-4">
                9. Modification des CGU
              </h2>
              <p className="text-neutral-gray leading-relaxed">
                AXYS AUDIT se réserve le droit de modifier à tout moment les présentes CGU. Les modifications entreront en vigueur dès leur publication sur le Site. Il est conseillé aux utilisateurs de consulter régulièrement les CGU pour prendre connaissance des éventuelles modifications.
              </p>
            </Card>

            <Card>
              <h2 className="text-2xl font-bold text-neutral-dark mb-4">
                10. Loi Applicable et Juridiction
              </h2>
              <div className="space-y-3 text-neutral-gray">
                <p>
                  Les présentes CGU sont régies par le droit français. En cas de litige relatif à l'interprétation ou à l'exécution des présentes, et à défaut d'accord amiable, compétence expresse est attribuée aux tribunaux compétents de Paris, nonobstant pluralité de défendeurs ou appel en garantie.
                </p>
              </div>
            </Card>

            <Card>
              <h2 className="text-2xl font-bold text-neutral-dark mb-4">
                11. Contact
              </h2>
              <div className="space-y-3 text-neutral-gray">
                <p>Pour toute question concernant les présentes CGU, vous pouvez nous contacter :</p>
                <ul className="list-none space-y-2">
                  <li><strong>Email :</strong> contact@axysaudit.com</li>
                  <li><strong>Téléphone :</strong> +33 (0) 1 23 45 67 89</li>
                  <li><strong>Courrier :</strong> AXYS AUDIT SAS, 123 Avenue des Champs-Élysées, 75008 Paris</li>
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

export default ConditionsUtilisation;
