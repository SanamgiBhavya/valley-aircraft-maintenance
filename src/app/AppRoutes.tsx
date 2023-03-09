import React, {useEffect} from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Presentation from '../pages/Presentation';
import routes from '../routes';

const AppRoutes = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    document.documentElement.scrollTop = 0;
  }, [pathname]);

  const getRoutes = (allRoutes: any) =>
  allRoutes.map((route: any) => {
    if (route.collapse) {
      return getRoutes(route.collapse);
    }

    if (route.route) {
      return <Route path={route.route} element={route.component} key={route.key} />;
    }

    return null;
  });
  return (
    <Routes>
      {getRoutes(routes)}
      <Route path="/" element={<Presentation />}></Route>
      <Route path="*" element={<Navigate to="/presentation" />} />
    </Routes>
  );
};

export default AppRoutes;
