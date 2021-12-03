import React from 'react';
import InfoRow from 'components/infoRow';

const PeopleDescription = ({ people }) => {
  return (
    <div className="max-w-3xl mx-auto">
      <div className="overflow-hidden bg-white shadow sm:rounded-lg">
        <div className="px-4 py-5 sm:px-6">
          <h3 className="text-lg font-medium leading-6 text-gray-900">People Information</h3>
          <p className="max-w-2xl mt-1 text-sm text-gray-500">Personal details.</p>
        </div>
        <div className="border-t border-gray-200">
          <dl>
            <InfoRow label="Name" text={people.name} />
            <InfoRow label="Gender" text={people.gender} isWhite />
            <InfoRow label="Birth day" text={people.birth_year} />
            <InfoRow label="Height" text={people.height} isWhite />
            <InfoRow label="Hair Color" text={people.hair_color} />
            <InfoRow label="Eye Color" text={people.eye_color} isWhite />
            <InfoRow label="Skin Color" text={people.skin_color} />
            <InfoRow label="Mass" text={people.mass} isWhite />
            <InfoRow label="Vehicles" text={people.vehicles.length} />
            <InfoRow label="Starships" text={people.starships.length} isWhite />
            <InfoRow label="Movies" text={people.films.length} />
          </dl>
        </div>
      </div>
    </div>
  );
};

export default PeopleDescription;
