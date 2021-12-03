import React from 'react';

const Button = ({ children, className, ...props }) => {
  return (
    <button
      className={`inline-block px-4 py-2 font-semibold transition-all duration-300 border border-opacity-50 rounded-md text-star-primary border-star-primary hover:bg-star-primary hover:border-star-primary hover:text-white ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
