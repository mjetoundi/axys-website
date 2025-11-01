import React from "react";

interface PageHeroProps {
  icon?: React.ReactNode;
  title: string;
  subtitle?: string;
  gradient?: boolean;
  children?: React.ReactNode;
}

const PageHero: React.FC<PageHeroProps> = ({
  icon,
  title,
  subtitle,
  gradient = true,
  children,
}) => {
  return (
    <section
      className={`section-padding ${
        gradient ? "bg-gradient-to-br from-primary/10 to-secondary/10" : ""
      }`}
    >
      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center">
          {icon && (
            <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mx-auto mb-6">
              {icon}
            </div>
          )}
          <h1 className="text-4xl md:text-5xl font-bold text-neutral-dark mb-4">
            {title}
          </h1>
          {subtitle && (
            <p className="text-lg text-neutral-gray leading-relaxed mb-6">
              {subtitle}
            </p>
          )}
          {children}
        </div>
      </div>
    </section>
  );
};

export default PageHero;
