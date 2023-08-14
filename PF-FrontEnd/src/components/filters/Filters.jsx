/* eslint-disable react/prop-types */
/* Filters.jsx */
import React, { useState } from "react";
import "./Filters.css";

const Filters = ({ onSelectCategory }) => {
  const handleCategoryClick = (category) => {
    console.log("Selected category:", category);
    onSelectCategory(category);
  };

  return (
    <div className="conainer">
      <div className="filter-cards mb-3">
        <h3 className="filter-title">Shop by categories</h3>
        <ul className="ps-0">
          <li onClick={() => handleCategoryClick("watch")}>Watch</li>
          <li onClick={() => handleCategoryClick("TV")}>TV</li>
          <li onClick={() => handleCategoryClick("Cameras")}>Cameras</li>
          <li onClick={() => handleCategoryClick("Laptops")}>Laptops</li>
          <li onClick={() => handleCategoryClick("socks")}>Socks</li>
          <li onClick={() => handleCategoryClick("women's clothing")}>
            womens clothing
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Filters;
