/* eslint-disable react/prop-types */
import React from "react";
import { Link } from "react-router-dom";


const PaymentSuccess = () => {
  return (
    <div className="payment-success-container">
      <h2>Pago Exitoso</h2>
      <p>¡Gracias por tu compra!</p>
      
      <Link to="/store">Volver a la tienda</Link>
    </div>
  );
};

export default PaymentSuccess;
