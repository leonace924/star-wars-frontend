import React from 'react';

const InfoRow = ({ label, text, isWhite = false }) => {
  return (
    <div
      className={`px-4 py-5 grid grid-cols-2 gap-4 sm:px-6 ${isWhite ? 'bg-white' : 'bg-gray-50'}`}
    >
      <dt className="text-sm font-medium text-gray-500">{label}</dt>
      <dd className="text-sm font-semibold capitalize text-star-primary">{text}</dd>
    </div>
  );
};

export default InfoRow;
