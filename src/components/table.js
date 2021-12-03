import React from 'react';
import TableCell from 'components/tableCell';
import TableHeader from 'components/tableHeader';

const Table = ({ movies }) => {
  return (
    <div className="inline-block min-w-full align-middle">
      <div className="overflow-hidden border-b border-gray-200 shadow sm:rounded-lg">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <TableHeader>Title</TableHeader>
              <TableHeader>Director</TableHeader>
              <TableHeader>Producer</TableHeader>
              <TableHeader>Release Date</TableHeader>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {movies.map((movie, id) => (
              <tr key={id}>
                <TableCell>
                  <div className="flex items-center">
                    <div className="text-sm font-medium text-gray-900">{movie.title}</div>
                  </div>
                </TableCell>
                <TableCell>
                  <div className="text-sm text-gray-900">{movie.director}</div>
                </TableCell>
                <TableCell>
                  <div className="text-sm text-gray-900">{movie.producer}</div>
                </TableCell>
                <TableCell>
                  <td className="text-sm text-gray-500 whitespace-nowrap">{movie.release_date}</td>
                </TableCell>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
