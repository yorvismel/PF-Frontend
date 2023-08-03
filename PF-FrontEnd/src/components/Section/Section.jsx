import React from "react";
import { Link } from "react-router-dom";
import "./section.css";
import cart from "../../img/cart.svg";
import person from "../../img/person.svg";
const Section = () => {
  return (
    <div className="principalContainer">
      <div className="containersvg">
        <Link>
          <div className="prueba">
            <i class="bi bi-person-fill "></i>
            <p>Log in</p>
          </div>
        </Link>
      </div>
      <div className="containersvg">
        <Link>
          <div className="prueba">
            <i class="bi bi-heart"></i>
            <p>Favorite</p>
          </div>
        </Link>
      </div>
      <div className="containersvg">
        <Link>
          <div className="prueba">
            <i class="bi bi-minecart"></i>
            <p>cart</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Section;
