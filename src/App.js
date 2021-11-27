import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Header from "components/Header/Header";
// import Footer from "components/Footer/Footer";
import HomePage from "pages/Home/Home";

const App = () => {
  return (
    <>
      <Router>
        {/* <Header /> */}
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
        {/* <Footer /> */}
      </Router>
    </>
  );
};

export default App;
