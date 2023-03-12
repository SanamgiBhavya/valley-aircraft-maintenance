import React, {useEffect} from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Presentation from '../pages/Presentation';
import AboutUs from '../pages/LandingPages/AboutUs';
import ContactUs from '../pages/LandingPages/ContactUs';
import Author from '../pages/LandingPages/Author';

const AppRoutes = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    document.documentElement.scrollTop = 0;
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<Presentation />}></Route>
      <Route path="/about-us" element={<AboutUs />}></Route>
      <Route path="/contact-us" element={<ContactUs />}></Route>
      <Route path='/author' element={<Author />}></Route>
      <Route path="*" element={<Navigate to="/presentation" />} />
    </Routes>
  );
};

export default AppRoutes;
