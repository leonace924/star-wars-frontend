import React from 'react';

const InfoRow = ({ label, text, isWhite = false }) => {
  return (
    <div
      className={`px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 ${
        isWhite ? 'bg-white' : 'bg-gray-50'
      }`}
    >
      <dt className="text-sm font-medium text-gray-500">{label}</dt>
      <dd className="mt-1 text-sm font-semibold capitalize text-star-primary sm:mt-0 sm:col-span-2">
        {text}
      </dd>
    </div>
  );
};

export default InfoRow;
