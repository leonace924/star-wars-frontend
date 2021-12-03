import React from 'react';
import Header from 'components/header';

const Layout = ({ children }) => {
  return (
    <div className="relative min-h-screen bg-star-gray">
      <Header />
      <main>{children}</main>
    </div>
  );
};

export default Layout;
