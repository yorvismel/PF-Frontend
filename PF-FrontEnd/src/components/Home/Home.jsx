import React from "react";
import HomePage from "../HomePage/HomePage";
import SecondLayer from "../SecondLayer/SecondLayer";
import Categories from "../Categories/Categories";

const Home = () => {
  return (
    <div>
      <HomePage />
      <SecondLayer />
      <Categories/>
    </div>
  );
};

export default Home;
