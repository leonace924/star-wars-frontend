import React from 'react';

const PeopleCard = ({ people }) => {
  console.log(people);
  return (
    <div className="p-6 bg-white rounded-lg shadow-lg">
      <div className="flex items-baseline">
        <span className="inline-block text-sm font-semibold tracking-wide uppercase bg-teal-200 rounded-full text-star-secondary">
          {people.speciesName}
        </span>
      </div>

      <h4 className="mt-1 text-xl font-semibold leading-tight uppercase truncate text-star-primary">
        {people.name}
      </h4>

      <div className="mt-4">
        <span className="font-semibold text-gray-800 underline transition-all duration-300 cursor-pointer text-md hover:no-underline hover:text-star-danger">
          View Detail
        </span>
      </div>
    </div>
  );
};

export default PeopleCard;
