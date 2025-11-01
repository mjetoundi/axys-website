import React from "react";
import { Link } from "react-router-dom";

export interface Crumb {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: Crumb[];
}

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items }) => {
  return (
    <div className="w-full">
      <div className="container-custom px-4 md:px-6 lg:px-8">
        <nav aria-label="Fil d'Ariane" className="mb-6">
          <ol className="flex items-center flex-wrap gap-2 text-sm">
            {items.map((item, index) => (
              <li key={item.href || item.label} className="flex items-center">
                {index > 0 && <span className="mx-2 text-neutral-gray">/</span>}
                {index === items.length - 1 || !item.href ? (
                  <span className="text-primary font-semibold">{item.label}</span>
                ) : (
                  <Link
                    to={item.href}
                    className="text-neutral-gray hover:text-primary transition-colors duration-200"
                  >
                    {item.label}
                  </Link>
                )}
              </li>
            ))}
          </ol>
        </nav>
      </div>
    </div>
  );
};

export default Breadcrumbs;
