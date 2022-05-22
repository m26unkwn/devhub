/** @format */

import React from "react";
import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

export const PrivateRoute = ({ children }) => {
  const token = useSelector((store) => store.auth.token);
  const location = useLocation();
  return token ? (
    children
  ) : (
    <Navigate to='/login' state={{ lastLocation: location }} replace />
  );
};
