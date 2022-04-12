/** @format */

import React from "react";
import { Category } from "./category/Category";
import { Hero } from "./hero/Hero";
import "./home.css";

export const Home = () => {
  return (
    <div className='main-container'>
      <div className='home-wrapper'>
        <Hero />
        <Category />
      </div>
    </div>
  );
};
