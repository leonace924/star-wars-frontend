import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useGlobal } from 'stores/global-store';

const PeopleCard = ({ people }) => {
  let navigate = useNavigate();

  const setSelectPeople = useGlobal((state) => state.setSelectPeople);

  const slug = people.name.split(' ').join('-').toLowerCase();

  const handleRedirect = () => {
    setSelectPeople(people);
    navigate(`/${slug}`);
  };
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
        <div onClick={handleRedirect}>
          <span className="font-semibold text-gray-800 underline transition-all duration-300 cursor-pointer text-md hover:no-underline hover:text-star-danger">
            View Detail
          </span>
        </div>
      </div>
    </div>
  );
};

export default PeopleCard;
