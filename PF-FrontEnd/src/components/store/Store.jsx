import React from "react";
import Filters from "../filters/Filters";
import "./Store.css"
const Store = () => {
  return (
    <div className="store-wrapper home-wrapper-2 py-5">
      <div className="container-xxl">
        <div className="row"></div>
        <Filters />
      </div>
    </div>
  );
};

export default Store;
