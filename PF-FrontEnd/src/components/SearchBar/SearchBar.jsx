import React from "react";
import "./SearchBar.css"; 
import { FaSearch } from 'react-icons/fa'
const SearchBar = () => {
  return (
    <div className="search-bar">
      <input type="text" placeholder="Search..." className="search-input" />
      <button className="search-button">
        <FaSearch/>
      </button>
    </div>
  );
};

export default SearchBar;
