/** @format */

import React from "react";

import "./category.css";

import { CategoryCard } from "../../../components";

import { Javascript, ReactLogo, CssLogo, HtmlLogo } from "../../../assets";

export const Category = () => {
  return (
    <div className='category-wrapper'>
      <div className='category-title'>
        <h2>Categories</h2>
      </div>
      <div className='category-cards'>
        <div className='category-card-wrapper flex flex-gap flex-wrap'>
          <CategoryCard
            img={Javascript}
            categoryName='Javascript'
            link='javascript'
          />
          <CategoryCard img={ReactLogo} categoryName={"React"} link='react' />
          <CategoryCard img={CssLogo} categoryName='Css' link='css' />
          <CategoryCard img={HtmlLogo} categoryName='Html' link='html' />
        </div>
      </div>
    </div>
  );
};
