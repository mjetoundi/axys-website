import React from "react";

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
}

const SectionHeader: React.FC<SectionHeaderProps> = ({
  eyebrow,
  title,
  subtitle,
  align = "center",
}) => {
  return (
    <div className={`${align === "center" ? "text-center" : ""} mb-12`}>
      {eyebrow && (
        <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary rounded-full px-4 py-2 mb-4">
          <span className="text-sm font-semibold">{eyebrow}</span>
        </div>
      )}
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-dark mb-4">
        {title}
      </h2>
      {subtitle && (
        <p
          className={`text-lg text-neutral-gray max-w-3xl ${
            align === "center" ? "mx-auto" : ""
          } leading-relaxed`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeader;
