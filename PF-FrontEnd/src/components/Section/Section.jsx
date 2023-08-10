import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./section.css";
import cart from "../../img/cart.svg";
import person from "../../img/person.svg";
import { useCart } from "../Cart/CartContext";

const Section = () => {
  //El circulo rojo en el carrito de compras
  const { notification } = useCart();

  return (
    <div className="principalContainer">
      <div className="containersvg">
        <Link>
          <div className="prueba">
            <i className="bi bi-person-fill"></i>
            <p>Log in</p>
          </div>
        </Link>
      </div>
      <div className="containersvg">
        <Link>
          <div className="prueba">
            <i className="bi bi-heart"></i>
            <p>Favorite</p>
          </div>
        </Link>
      </div>
      <div className="containersvg">
        <Link to="/cart">
          <div className="prueba">
            <i className="bi bi-minecart" onClick></i>
            <p>Cart</p>
            {notification && <span className="notification-dot" />}
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Section;
