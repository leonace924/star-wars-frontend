import React from 'react';
import Modal from 'react-modal';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from 'pages/Home/Home';
import PeopleDetail from 'pages/PeopleDetail/PeopleDetail';

const App = () => {
  Modal.setAppElement('#root');

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
