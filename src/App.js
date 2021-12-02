import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from 'pages/Home/Home';
import PeopleDetail from 'pages/PeopleDetail/PeopleDetail';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<HomePage />} />
            <Route path=":peopleId" element={<PeopleDetail />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
