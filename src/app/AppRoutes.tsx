import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../modules/Home';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="auth/*" element={<>Authentication routes</>} />
      <Route path="*" element={<>Page not found</>} />
    </Routes>
  );
};

export default AppRoutes;
