import React from 'react';

import { Route, Routes } from 'react-router-dom';
import Home from './containers/HomePage/Home';
import Details from './containers/HomePage/Deatails';

const RoutesApp = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/project-detail/:id/:cc" element={<Details />} />
    </Routes>
  );
};

export default RoutesApp;
