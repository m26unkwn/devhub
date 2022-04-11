/** @format */

import React from "react";
import { Link } from "react-router-dom";
import "./header.css";

export const Header = () => {
  return (
    <div className='header-wrapper flex jc-between ai-center'>
      <div className='input-field search-bar '>
        <input placeholder='Search products' required type='search' />
      </div>
      <div className='auth-action-wrapper flex jc-between'>
        <Link to='/login' className='btn  login-btn'>
          Login
        </Link>
        <Link to='/signup' className='btn  signup-btn'>
          Signup
        </Link>
      </div>
    </div>
  );
};
