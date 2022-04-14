/** @format */

import React from "react";
import "./button.css";

export const Button = ({ title, filterDispatch, filter, param }) => {
  return (
    <button
      onClick={(e) => filterDispatch(e, param)}
      className={`category-btn ${filter === param ? filter : ""}`}>
      {title}
    </button>
  );
};
