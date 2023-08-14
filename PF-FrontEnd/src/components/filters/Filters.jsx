/* eslint-disable react/prop-types */
import React from "react";
import "./Filters.css";

const Filters = () => {
  return (
    <div className="conainer">
      <div className="filter-cards mb-3">
        <h3 className="filter-title">Shop by categories</h3>
        <ul className="ps-0">
          <li>watch</li>
          <li>Tv</li>
          <li>Cameras</li>
          <li>Laptops</li>
        </ul>
      </div>
      <div className="filter-cards mb-3">
        <h3 className="filter-title">Filter By</h3>
      </div>

      <div className="col-9"></div>
    </div>
  );
};

export default Filters;
