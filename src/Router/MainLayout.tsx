import React, { useEffect } from 'react'
import { Routes, Route, useNavigate } from "react-router-dom";
import Signup from '../views/Signup/Signup';
import Signin from '../views/Signin/Signin';
import { OnlyPublicAuth, RequireAuth } from './Auth';
import RenderAllModule from './RenderAllModules';

const MainLayout = () => {
  let logoutTimer: any;
  const navigate = useNavigate();

  const startLogoutTimer = () => {
    logoutTimer = setTimeout(() => {
      logout();
    }, 1800000); // 30 minutes in milliseconds
  };

  const resetLogoutTimer = () => {
    clearTimeout(logoutTimer);
    startLogoutTimer();
  };

  const handleUserActivity = () => {
    resetLogoutTimer();
  };

  const logout = () => {
    localStorage.removeItem('user');
    localStorage.removeItem("PRODUCT_SELECTED");
    navigate("/signin")
  };

  useEffect(() => {
    startLogoutTimer();
    document.addEventListener('mousemove', handleUserActivity);
    document.addEventListener('keydown', handleUserActivity);
    document.addEventListener('click', handleUserActivity);

    // Cleanup event listeners on component unmount
    return () => {
      clearTimeout(logoutTimer);
      document.removeEventListener('mousemove', handleUserActivity);
      document.removeEventListener('keydown', handleUserActivity);
      document.removeEventListener('click', handleUserActivity);
    };
  }, []);

  const userData = localStorage.getItem("user")
  return (
    <>
      <Routes>
        {!userData ? <Route path="/signup" element={<Signup />} /> : ""}
        <Route
          path="/signin"
          element={
            <OnlyPublicAuth redirectTo="/">
              <Signin />
            </OnlyPublicAuth>
          }
        />
        <Route
          path="/*"
          element={
            <RequireAuth redirectTo="/signin">
              <RenderAllModule />
            </RequireAuth>
          }
        />
      </Routes>
    </>
  )
}

export default MainLayout