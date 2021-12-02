import React from 'react';
import Header from 'components/header';

const Layout = ({ children }) => {
  return (
    <div className="relative min-h-screen bg-star-gray">
      <Header />
      <main className="py-6 lg:py-10">{children}</main>
    </div>
  );
};

export default Layout;
