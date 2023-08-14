import React, { useState } from "react";
import Filters from "../filters/Filters";
import "./Store.css";
import Cards from "../Cards/Cards";

const Store = () => {
  const [selectedCategory, setSelectedCategory] = useState("");

  // const handleCategorySelect = (category) => {
  //   setSelectedCategory(category);
  // };

  return (
    <div className="store-wrapper home-wrapper-2 py-5">
      <div className="pruebitaFlex container-xxl">
        <div className="row">
          <Filters onSelectCategory={setSelectedCategory} />
          <Cards selectedCategory={selectedCategory} />
        </div>
      </div>
    </div>
  );
};

export default Store;
