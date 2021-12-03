import React from 'react';
import PeopleCard from 'components/peopleCard';
import { useGlobal } from 'stores/global-store';

const PeopleList = () => {
  const starPeoples = useGlobal((state) => state.starPeoples);

  return (
    <>
      <div className="super-container">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6 2xl:grid-cols-4">
          {starPeoples?.map((people) => (
            <PeopleCard key={people.name} people={people} />
          ))}
        </div>
      </div>
    </>
  );
};

export default PeopleList;
