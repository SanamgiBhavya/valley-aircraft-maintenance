import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Presentation from '../pages/Presentation';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Presentation />}></Route>
      <Route path="auth/*" element={<>Authentication routes</>} />
      <Route path="*" element={<>Page not found</>} />
    </Routes>
  );
};

export default AppRoutes;
