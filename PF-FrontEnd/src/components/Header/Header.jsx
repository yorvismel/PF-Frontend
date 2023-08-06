import React from "react";
import { useSelector } from "react-redux"; 
import { NavLink, Link } from "react-router-dom";
import "./header.css";
import Logo from "../../img/Logo.jsx";
import SearchBar from "../SearchBar/SearchBar";
import Section from "../Section/Section";

const Header = () => {
  const searchProduct = useSelector((state) => state.searchProduct); // Obtiene el estado searchProduct del store de Redux
  console.log("Search Product in Header:", searchProduct); // Añadido log para verificar el valor del estado
  return (
    <div className="containerHeader">
      <NavLink className="logo" to="/">
        <Logo />
      </NavLink>
      <SearchBar  />
      <Section />
    </div>
  );
};

export default Header;
