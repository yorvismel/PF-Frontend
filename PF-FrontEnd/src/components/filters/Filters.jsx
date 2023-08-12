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
        <div>
          <h5 className="sub-title">Availablity</h5>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id="inStock"
            />
            <label className="form-check-label" htmlFor="inStock">
              in Stock
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id="outStock"
            />
            <label className="form-check-label" htmlFor="outStock">
              out Stock
            </label>
          </div>
        </div>
      </div>
      {/* <div className="filter-cards mb-3">
        <h3 className="filter-title">Price</h3>
        <div className="container-price ">
          <div className="form-floating ">
          <input
              style={{ height: "35px" }}
              type="number"
              className="form-control"
              id="minPrice"
              placeholder=""
              value={minPrice}
              onChange={(e) => {
                console.log("minPrice changed:", e.target.value);
                setMinPrice(e.target.value);
              }}
            />
            <label htmlFor="minPrice">From</label>
          </div>
          <div className="form-floating ">
            <input
              type="number"
              className="form-control "
              id="maxPrice"
              placeholder=""
              value={maxPrice}
              onChange={(e) => setMaxPrice(e.target.value)}
            />
            <label htmlFor="maxPrice">To</label>
          </div>
        </div>
        <button className="btn btn-primary" onClick={handlePriceFilter}>
          Apply Filter
        </button>
      </div> */}
      <div className="col-9"></div>
    </div>
  );
};

export default Filters;
