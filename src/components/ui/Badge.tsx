import React from "react";

interface BadgeProps {
  children: React.ReactNode;
  color?: "primary" | "secondary" | "neutral";
}

const colorMap = {
  primary: "bg-primary/10 text-primary",
  secondary: "bg-secondary/10 text-secondary",
  neutral: "bg-neutral-light-bg text-neutral-dark",
};

const Badge: React.FC<BadgeProps> = ({ children, color = "primary" }) => {
  return (
    <span
      className={`inline-flex items-center rounded-full px-3 py-1 text-sm font-semibold ${colorMap[color]}`}
    >
      {children}
    </span>
  );
};

export default Badge;
