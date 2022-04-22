/** @format */

import React from "react";
import { Link } from "react-router-dom";
import "./card.css";

export const CategoryCard = (props) => {
  const { img, categoryName } = props;

  return (
    <div className=' category-item flex jc-center ai-center '>
      <Link
        to={`/category/${categoryName.toLowerCase()}`}
        className='category-link'>
        <img src={img} className='img-responsive' alt={`${categoryName}+img`} />
        <div className='category-action flex flex-end'>
          <button className='btn'>Learn {categoryName}</button>
        </div>
      </Link>
    </div>
  );
};
