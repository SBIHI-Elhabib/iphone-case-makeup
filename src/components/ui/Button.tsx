import React from 'react';
import { ButtonProps } from '../../types';

const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  className = '',
  onClick
}) => {
  const baseClasses = 'inline-flex items-center justify-center rounded-lg font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2';
  
  const variantClasses = {
    primary: 'bg-primary-500 text-accent-100 hover:bg-opacity-90 focus:ring-primary-500',
    secondary: 'bg-secondary-500 text-accent-100 hover:bg-opacity-90 focus:ring-secondary-500',
    outline: 'bg-transparent border-2 border-accent-100 text-accent-100 hover:bg-accent-100 hover:text-secondary-500 focus:ring-accent-100',
    ghost: 'bg-transparent text-accent-100 hover:bg-accent-100/10 focus:ring-accent-100'
  };
  
  const sizeClasses = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg'
  };
  
  return (
    <button
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button