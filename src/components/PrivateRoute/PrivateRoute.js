/** @format */

import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../../context/provider/auth-provider";

export const PrivateRoute = ({ children }) => {
  const {
    authState: { token },
  } = useAuth();
  const location = useLocation();
  return token ? (
    children
  ) : (
    <Navigate to='/login' state={{ lastLocation: location }} replace />
  );
};
