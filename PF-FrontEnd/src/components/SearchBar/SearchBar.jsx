import React from "react";
import "./SearchBar.css";
import { FaSearch } from "react-icons/fa";
const SearchBar = () => {
  return (
    <div className="search-bar">
      <div class="input-group mb-3">
        <input
          type="text"
          class="form-control py-1"
          placeholder="Search..."
          aria-label="Search..."
          aria-describedby="basic-addon2"
        />
        <span class="input-group-text py-2" id="basic-addon2">
          <FaSearch />
        </span>
      </div>
    </div>
  );
};

export default SearchBar;
