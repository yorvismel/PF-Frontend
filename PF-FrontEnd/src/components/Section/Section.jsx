import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./section.css";
import { useAuth0 } from "@auth0/auth0-react";
import { useCart } from "../Cart/CartContext";

const Section = () => {
  const { user } = useAuth0();
  //El circulo rojo en el carrito de compras
  const { notification } = useCart();

  return (
    <div className="principalContainer">
      <div className="containersvg">
        <Link to="/user">
          <div className="prueba">
           <img className="redondita" src={user.picture} alt={user.name} />
            <p>user</p>
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
