import React from 'react';

const Loading = () => {
  return (
    <div className="absolute top-0 left-0 z-50 flex items-center justify-center w-full h-screen bg-opacity-20 bg-star-primary">
      <div className="w-10 h-10 border-b-2 rounded-full text-star-danger animate-spin border-danger" />
    </div>
  );
};

export default Loading;
