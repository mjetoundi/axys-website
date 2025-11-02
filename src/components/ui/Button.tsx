import React from "react";
import { Link } from "react-router-dom";
import { LucideIcon } from "lucide-react";

interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg" | "xl";
  icon?: LucideIcon;
  iconPosition?: "left" | "right";
  className?: string;
  onClick?: () => void;
  href?: string;
  disabled?: boolean;
  loading?: boolean;
  type?: "button" | "submit" | "reset";
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  size = "md",
  icon: Icon,
  iconPosition = "right",
  className = "",
  onClick,
  href,
  disabled = false,
  loading = false,
  type = "button",
  ...props
}) => {
  const baseClasses =
    "inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed";

  const variantClasses = {
    primary:
      "border-2 border-primary bg-primary text-white hover:bg-blue-600 focus:ring-primary shadow-lg hover:shadow-xl hover:shadow-primary/50 active:scale-95",
    secondary:
      "border-2 border-secondary bg-secondary text-white hover:brightness-110 hover:shadow-xl focus:ring-secondary shadow-lg active:scale-95",
    outline:
      "border-2 border-primary text-primary bg-transparent focus:ring-primary shadow-md hover:shadow-lg active:scale-95",
    ghost:
      "text-primary bg-transparent hover:bg-primary/10 focus:ring-primary border border-transparent hover:border-primary/20 active:scale-95",
  };

  const sizeClasses = {
    sm: "px-3 py-2 text-sm",
    md: "px-4 py-2.5 text-base",
    lg: "px-6 py-3 text-lg",
    xl: "px-8 py-4 text-xl",
  };

  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

  const content = (
    <>
      {Icon && iconPosition === "left" && (
        <Icon
          size={
            size === "sm" ? 16 : size === "lg" ? 24 : size === "xl" ? 28 : 20
          }
          className="mr-2"
        />
      )}
      {loading ? (
        <div className="flex items-center">
          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-current mr-2"></div>
          Chargement...
        </div>
      ) : (
        children
      )}
      {Icon && iconPosition === "right" && !loading && (
        <Icon
          size={
            size === "sm" ? 16 : size === "lg" ? 24 : size === "xl" ? 28 : 20
          }
          className="ml-2"
        />
      )}
    </>
  );

  if (href) {
    // Check if it's an internal link (starts with /)
    const isInternalLink = href.startsWith("/");

    if (isInternalLink) {
      return (
        <Link to={href} className={classes} {...props}>
          {content}
        </Link>
      );
    }

    return (
      <a
        href={href}
        className={classes}
        target="_blank"
        rel="noopener noreferrer"
        {...props}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      type={type}
      className={classes}
      onClick={onClick}
      disabled={disabled || loading}
      {...props}
    >
      {content}
    </button>
  );
};

export default Button;
