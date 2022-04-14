/** @format */

import React from "react";
import "./button.css";

export const Button = ({ title, filterDispatch, filter }) => {
  return (
    <button
      onClick={(e) => filterDispatch(e, title)}
      className={`category-btn ${filter}`}>
      {title}
    </button>
  );
};
