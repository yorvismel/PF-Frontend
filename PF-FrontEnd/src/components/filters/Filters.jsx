import React from "react";
import "./Filters.css";
const Filters = () => {
  return (
    <div className="col-3">
      <div className="filter-cards mb-3">
        <h3 className="filter-title"> Shop by categories</h3>
      </div>
      <div className="filter-cards mb-3">
        <h3 className="filter-title"> Filter By</h3>
      </div>
      <div className="filter-cards mb-3">
        <h3 className="filter-title">Product tag</h3>
      </div>

      <div className="col-9"></div>
    </div>
  );
};

export default Filters;
