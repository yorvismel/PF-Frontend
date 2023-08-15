import React from "react";
import { Link } from "react-router-dom";
import "./Payments.css"; 

const PaymentSuccess = () => {
  return (
    <div className="payment-success-container">
      <h2>Pago Exitoso</h2>
      <p>¡Gracias por tu compra!</p>
      
      <Link to="/store" className="return-link">Volver a la tienda</Link>
    </div>
  );
};

export default PaymentSuccess;
