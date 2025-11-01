import React from 'react';
import { Link } from 'react-router-dom';

const NotFound: React.FC = () => {
  return (
    <div className="pt-20">
      <section className="section-padding">
        <div className="container-custom text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-primary/10 rounded-2xl mb-6">
            <span className="text-2xl font-bold text-primary">404</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-neutral-dark mb-4">Page introuvable</h1>
          <p className="text-neutral-gray mb-8 max-w-2xl mx-auto">
            La page que vous recherchez n'existe pas ou a été déplacée. Utilisez la navigation ou revenez à l'accueil.
          </p>
          <Link to="/" className="btn-primary">Retour à l'accueil</Link>
        </div>
      </section>
    </div>
  );
};

export default NotFound;

