import React from 'react';

const SearchBar = ({ debouncedChangeHandler }) => {
  return (
    <div className="flex max-w-3xl mx-auto overflow-hidden border rounded-md border-star-primary">
      <div className="flex items-center justify-center px-4 border-r border-star-primary">
        <svg
          className="w-6 h-6 text-star-primary"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <path d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z"></path>
        </svg>
      </div>
      <input
        type="text"
        className="flex-1 px-4 py-2 text-star-primary focus:outline-none "
        placeholder="Search People..."
        onChange={debouncedChangeHandler}
      />
    </div>
  );
};

export default SearchBar;
