/** @format */

import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../../context";
import "./header.css";

export const Header = () => {
  const {
    authState: { token },
  } = useAuth();
  return (
    <div
      className={
        token
          ? `header-wrapper flex jc-center ai-center`
          : `header-wrapper flex jc-between ai-center`
      }>
      <div className='input-field search-bar '>
        <input placeholder='Search products' required type='search' />
      </div>
      {!token && (
        <div className='auth-action-wrapper flex jc-between'>
          <Link to='/login' className='btn  login-btn'>
            Login
          </Link>
          <Link to='/signup' className='btn  signup-btn'>
            Signup
          </Link>
        </div>
      )}
    </div>
  );
};
