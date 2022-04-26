/** @format */
import React from "react";
import "./loader.css";
export const Loader = ({loaderPosition}) => {
  return (
    <div class={loaderPosition ? `${loaderPosition} lds-ring`:'lds-ring'}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};
