/** @format */

import { Link } from "react-router-dom";

import "./error.css";
export const RouteError = () => {
  return (
    <div className='main-container'>
      <div className='route-error-wrapper flex jc-center flex-col ai-center'>
        <h1>404</h1>
        <h3>Not Found</h3>
        <Link to='/' className='btn btn-link'>
          Home
        </Link>
      </div>
    </div>
  );
};
