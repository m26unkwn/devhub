/** @format */

import React from "react";
import "./category.css";

import { CategoryCard } from "../../../components";
import { useAxios } from "../../../hooks";

export const Category = () => {

  const [categories] = useAxios({
    method: "get",
    url: "/api/categories",
  });

  return (
    <div className='category-wrapper'>
      <div className='category-title'>
        <h2>Categories</h2>
      </div>
      <div className='category-cards'>
        <div className='category-card-wrapper flex flex-gap flex-wrap'>
          {categories &&
            categories.categories.map((category) => (
              <CategoryCard

              key={category._id}
                img={category.image}
                categoryName={category.categoryName}
              />
            ))}
        </div>
      </div>
    </div>
  );
};
