import React from "react";
import { NavLink, Link } from "react-router-dom";
import "./header.css";
import Logo from "../../img/Logo.jsx";
import SearchBar from "../SearchBar/SearchBar";
import Section from "../Section/Section";
const Header = () => {
  return (
    <div className="containerHeader">
      <NavLink className="logo" to="/">
        <Logo />
      </NavLink>
      <SearchBar />
      <Section/>
    </div>
  );
};

export default Header;
