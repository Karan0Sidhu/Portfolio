import React from 'react';

const Button = ({ 
  children, 
  onClick, 
  variant = 'primary', 
  size = 'md', 
  disabled = false,
  className = ''
}) => {
  const baseClasses = 'rounded-lg font-inter font-bold text-center transition-all duration-200';
  
  const variants = {
    primary: 'bg-button text-white hover:opacity-90',
    secondary: 'bg-secondary text-white hover:bg-tertiary'
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  };

  return (
    <button
      onClick={disabled ? undefined : onClick}
      disabled={disabled}
      className={`
        ${baseClasses} 
        ${variants[variant]} 
        ${sizes[size]} 
        ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'} 
        ${className}
      `}
    >
      {children}
    </button>
  );
};

export default Button;