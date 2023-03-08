import React, { useEffect } from 'react';
import { Outlet, Navigate } from 'react-router-dom';

const PrivateWrapper = () => {
  const { user, loading } = { user: 'load-user', loading: false };

  useEffect(() => {
    if (!user) return;
    //else write user specific logic - anlytics etc
  }, [user]);

  if (loading) return <>...loading</>;

  if (!user) return <Navigate to="/auth/login" />;

  return (
    <>
      {/*<ModuleProvider> */}
      {/* <ProfileProvider> */}
      {/* <Layout /> */}
      <Outlet />
      {/* </ProfileProvider> */}
      {/* </ModuleProvider> */}
    </>
  );
};

export default PrivateWrapper;
