import React from 'react';

const TableHeader = ({ children }) => {
  return (
    <th
      scope="col"
      className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-700 uppercase"
    >
      {children}
    </th>
  );
};

export default TableHeader;
