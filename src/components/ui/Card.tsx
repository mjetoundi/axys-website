import React from 'react';
import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  padding?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
  rounded?: 'none' | 'sm' | 'md' | 'lg' | 'xl' | 'full';
  shadow?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
  border?: boolean;
  icon?: LucideIcon;
  iconColor?: string;
  title?: string;
  subtitle?: string;
  onClick?: () => void;
}

const Card: React.FC<CardProps> = ({
  children,
  className = '',
  hover = true,
  padding = 'lg',
  rounded = 'xl',
  shadow = 'md',
  border = false,
  icon: Icon,
  iconColor = 'text-primary',
  title,
  subtitle,
  onClick,
}) => {
  const baseClasses = 'bg-white transition-all duration-300';
  
  const paddingClasses = {
    none: '',
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8',
    xl: 'p-10'
  };

  const roundedClasses = {
    none: '',
    sm: 'rounded-sm',
    md: 'rounded-md',
    lg: 'rounded-lg',
    xl: 'rounded-xl',
    full: 'rounded-full'
  };

  const shadowClasses = {
    none: '',
    sm: 'shadow-sm',
    md: 'shadow-card',
    lg: 'shadow-lg',
    xl: 'shadow-xl'
  };

  const hoverClasses = hover 
    ? 'hover:shadow-card-hover hover:-translate-y-1 cursor-pointer' 
    : '';

  const borderClasses = border ? 'border border-gray-200' : '';

  const classes = `
    ${baseClasses} 
    ${paddingClasses[padding]} 
    ${roundedClasses[rounded]} 
    ${shadowClasses[shadow]} 
    ${hoverClasses} 
    ${borderClasses} 
    ${className}
  `.trim();

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0
    }
  };

  return (
    <motion.div
      className={classes}
      onClick={onClick}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      whileHover={hover ? { y: -4 } : {}}
    >
      {/* Header with Icon and Title */}
      {(Icon || title) && (
        <div className="mb-6">
          {Icon && (
            <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 mb-4`}>
              <Icon size={24} className={iconColor} />
            </div>
          )}
          
          {title && (
            <h3 className="text-xl font-semibold text-neutral-dark mb-2">
              {title}
            </h3>
          )}
          
          {subtitle && (
            <p className="text-neutral-gray text-sm">
              {subtitle}
            </p>
          )}
        </div>
      )}

      {children}
    </motion.div>
  );
};

export default Card;