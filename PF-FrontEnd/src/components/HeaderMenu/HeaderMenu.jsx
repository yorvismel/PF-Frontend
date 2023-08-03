import React from "react";
import { NavLink } from "react-router-dom";
import "./Headermenu.css";
const HeaderMenu = () => {
  return (
    <div className="containerMenu">
      <div class="dropdown">
        <button
          class="btn btn-secondary dropdown-toggle bg-transparent border-0"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <i class="bi bi-three-dots "></i>
     Shop categories 
        </button>
        <ul class="dropdown-menu  ">
          <li>
            <a class="dropdown-item color-white " href="#">
              Action
            </a>
          </li>
          <li>
            <a class="dropdown-item" href="#">
              Another action
            </a>
          </li>
          <li>
            <a class="dropdown-item" href="#">
              Something else here
            </a>
          </li>
        </ul>
      </div>
      <div className="arro">
        <NavLink className="home link" to="/">
          <p>Home</p>
        </NavLink>
        <NavLink className="store link" to="/store">
          <p>Our Store</p>
        </NavLink>
        <NavLink className="contact link" to="/contact">
          <p>Contact</p>
        </NavLink>
      </div>
    </div>
  );
};

export default HeaderMenu;
