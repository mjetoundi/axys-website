import React from "react";
import PageHero from "../../components/ui/PageHero";
import Card from "../../components/ui/Card";
import { Scale } from "lucide-react";

const MentionsLegales: React.FC = () => {
  return (
    <div className="pt-20">
      <PageHero
        icon={<Scale className="w-8 h-8 text-white" />}
        title="Mentions Légales"
        subtitle="Informations légales et réglementaires du site Axys Audit"
        gradient={false}
      />

      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto space-y-8">
            <Card>
              <h2 className="text-2xl font-bold text-neutral-dark mb-4">
                Édition du Site
              </h2>
              <div className="space-y-3 text-neutral-gray">
                <p>
                  <strong>Raison sociale :</strong> AXYS AUDIT SAS
                </p>
                <p>
                  <strong>Forme juridique :</strong> Société par Actions Simplifiée
                </p>
                <p>
                  <strong>Capital social :</strong> 500 000 €
                </p>
                <p>
                  <strong>SIRET :</strong> 123 456 789 00012
                </p>
                <p>
                  <strong>RCS :</strong> Paris B 123 456 789
                </p>
                <p>
                  <strong>TVA intracommunautaire :</strong> FR 12 123456789
                </p>
                <p>
                  <strong>Siège social :</strong> 123 Avenue des Champs-Élysées, 75008 Paris, France
                </p>
                <p>
                  <strong>Téléphone :</strong> +33 (0) 1 23 45 67 89
                </p>
                <p>
                  <strong>Email :</strong> contact@axysaudit.com
                </p>
              </div>
            </Card>

            <Card>
              <h2 className="text-2xl font-bold text-neutral-dark mb-4">
                Directeur de la Publication
              </h2>
              <p className="text-neutral-gray">
                Marc Lepont, Président de AXYS AUDIT SAS
              </p>
            </Card>

            <Card>
              <h2 className="text-2xl font-bold text-neutral-dark mb-4">
                Hébergement du Site
              </h2>
              <div className="space-y-3 text-neutral-gray">
                <p>
                  <strong>Hébergeur :</strong> Netlify, Inc.
                </p>
                <p>
                  <strong>Adresse :</strong> 44 Montgomery Street, Suite 300, San Francisco, CA 94104, USA
                </p>
                <p>
                  <strong>Site web :</strong> https://www.netlify.com
                </p>
              </div>
            </Card>

            <Card>
              <h2 className="text-2xl font-bold text-neutral-dark mb-4">
                Propriété Intellectuelle
              </h2>
              <div className="space-y-4 text-neutral-gray">
                <p>
                  L'ensemble du contenu de ce site (textes, images, vidéos, logos, icônes, sons, logiciels, etc.) est la propriété exclusive d'AXYS AUDIT SAS ou de ses partenaires et est protégé par les lois françaises et internationales relatives à la propriété intellectuelle.
                </p>
                <p>
                  Toute reproduction, représentation, modification, publication, adaptation de tout ou partie des éléments du site, quel que soit le moyen ou le procédé utilisé, est interdite, sauf autorisation écrite préalable d'AXYS AUDIT SAS.
                </p>
                <p>
                  Toute exploitation non autorisée du site ou de l'un quelconque des éléments qu'il contient sera considérée comme constitutive d'une contrefaçon et poursuivie conformément aux dispositions des articles L.335-2 et suivants du Code de Propriété Intellectuelle.
                </p>
              </div>
            </Card>

            <Card>
              <h2 className="text-2xl font-bold text-neutral-dark mb-4">
                Protection des Données Personnelles
              </h2>
              <div className="space-y-4 text-neutral-gray">
                <p>
                  Conformément à la loi « Informatique et Libertés » du 6 janvier 1978 modifiée et au Règlement Général sur la Protection des Données (RGPD) du 27 avril 2016, vous disposez d'un droit d'accès, de rectification, de suppression et d'opposition aux données personnelles vous concernant.
                </p>
                <p>
                  Pour exercer ces droits, vous pouvez nous contacter :
                </p>
                <ul className="list-disc list-inside space-y-2">
                  <li>Par email : dpo@axysaudit.com</li>
                  <li>Par courrier : AXYS AUDIT SAS - DPO, 123 Avenue des Champs-Élysées, 75008 Paris</li>
                </ul>
                <p>
                  Pour plus d'informations, consultez notre{" "}
                  <a href="/politique-confidentialite" className="text-primary hover:underline">
                    Politique de Confidentialité
                  </a>
                  .
                </p>
              </div>
            </Card>

            <Card>
              <h2 className="text-2xl font-bold text-neutral-dark mb-4">
                Cookies
              </h2>
              <p className="text-neutral-gray">
                Ce site utilise des cookies pour améliorer votre expérience de navigation. Pour en savoir plus sur notre utilisation des cookies, consultez notre{" "}
                <a href="/cookies" className="text-primary hover:underline">
                  Politique de Cookies
                </a>
                .
              </p>
            </Card>

            <Card>
              <h2 className="text-2xl font-bold text-neutral-dark mb-4">
                Responsabilité
              </h2>
              <div className="space-y-4 text-neutral-gray">
                <p>
                  Les informations fournies sur ce site le sont à titre indicatif. AXYS AUDIT SAS s'efforce de fournir des informations aussi précises que possible, mais ne peut garantir l'exactitude, la complétude ou l'actualité des informations diffusées sur son site.
                </p>
                <p>
                  En conséquence, AXYS AUDIT SAS décline toute responsabilité pour toute imprécision, inexactitude ou omission portant sur des informations disponibles sur ce site.
                </p>
                <p>
                  AXYS AUDIT SAS ne pourra être tenue responsable des dommages directs ou indirects résultant de l'accès au site ou de l'utilisation du site, y compris l'inaccessibilité, les pertes de données, détériorations, destructions ou virus qui pourraient affecter votre équipement informatique.
                </p>
              </div>
            </Card>

            <Card>
              <h2 className="text-2xl font-bold text-neutral-dark mb-4">
                Liens Hypertextes
              </h2>
              <div className="space-y-4 text-neutral-gray">
                <p>
                  Le site peut contenir des liens hypertextes vers d'autres sites. AXYS AUDIT SAS n'exerce aucun contrôle sur ces sites et décline toute responsabilité quant à l'accès, au contenu ou à l'utilisation de ces sites, ainsi qu'aux dommages pouvant résulter de la consultation des informations présentes sur ces sites.
                </p>
                <p>
                  La création de liens hypertextes vers le site www.axysaudit.com est soumise à l'accord préalable et écrit d'AXYS AUDIT SAS.
                </p>
              </div>
            </Card>

            <Card>
              <h2 className="text-2xl font-bold text-neutral-dark mb-4">
                Loi Applicable
              </h2>
              <p className="text-neutral-gray">
                Les présentes mentions légales sont régies par la loi française. En cas de litige et à défaut d'accord amiable, le litige sera porté devant les tribunaux français conformément aux règles de compétence en vigueur.
              </p>
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

export default MentionsLegales;
