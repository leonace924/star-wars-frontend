import React from 'react';

const BackCTA = ({ ...props }) => {
  return (
    <div
      className="flex items-center cursor-pointer text-star-primary hover:text-star-secondary"
      {...props}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-4 h-4"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M10 19l-7-7m0 0l7-7m-7 7h18"
        />
      </svg>
      <span className="ml-2">Back</span>
    </div>
  );
};

export default BackCTA;
