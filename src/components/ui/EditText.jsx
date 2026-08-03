import React from 'react';

const EditText = ({ 
  placeholder = '', 
  value = '', 
  onChange, 
  type = 'text',
  disabled = false,
  className = ''
}) => {
  const baseClasses = 'w-full px-3 py-4 font-sora text-base border border-primary rounded transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-accent';

  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      disabled={disabled}
      className={`
        ${baseClasses}
        ${disabled ? 'opacity-50 cursor-not-allowed bg-muted' : 'bg-white text-secondary placeholder-secondary'}
        ${className}
      `}
    />
  );
};

export default EditText;