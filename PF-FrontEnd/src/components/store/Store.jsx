import React from "react";
import Filters from "../filters/Filters";
import "./Store.css";
import Cards from "../Cards/Cards";

const Store = () => {
  return (
    <div className="store-wrapper home-wrapper-2 py-5">
      <div className="pruebitaFlex container-xxl">
        <div className="row">
          <Filters />
          <Cards />
        </div>
      </div>
    </div>
  );
};

export default Store;
