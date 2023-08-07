import React from "react";
import Filters from "../filters/Filters";
import "./Store.css";
import Cards from "../Cards/Cards";
import { useDispatch, useSelector } from "react-redux";

const Store = () => {
  const products = useSelector((state) => state.products);

  return (
    <div className="store-wrapper home-wrapper-2 py-5">
      <div className="pruebitaFlex container-xxl">
        <div className="row">
          <Filters />
        </div>
        <div className="storecards">
          <Cards products={products} />
        </div>
      </div>
    </div>
  );
};

export default Store;
