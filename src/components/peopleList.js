import React from 'react';
import PeopleCard from 'components/peopleCard';

const PeopleList = ({ peoples }) => {
  return (
    <div className="super-container">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 lg:gap-6 2xl:grid-cols-4">
        {peoples?.map((people) => (
          <PeopleCard key={people.name} people={people} />
        ))}
      </div>
    </div>
  );
};

export default PeopleList;
