import React from 'react';
import Button from 'components/button';
import { useGlobal } from 'stores/global-store';

const Pagination = ({ totalPages, currentPage, setCurrentPage }) => {
  const setIsNext = useGlobal((state) => state.setIsNext);

  const gotoPrev = () => {
    if (currentPage < 2) return;
    setCurrentPage(currentPage - 1);
    setIsNext(false);
  };

  const gotoNext = () => {
    if (currentPage >= totalPages) return;
    setCurrentPage(currentPage + 1);
    setIsNext(true);
  };

  return (
    <div className="sticky bottom-0 left-0 super-container bg-star-gray">
      <div className="flex items-center justify-between py-4 mt-4 lg:mt-6 ">
        <Button className="lg:mr-4" onClick={gotoPrev}>
          Previous
        </Button>

        <p className="font-semibold text-md text-star-primary">
          Page {currentPage} of {totalPages}
        </p>
        <Button onClick={gotoNext}>Next</Button>
      </div>
    </div>
  );
};

export default Pagination;
