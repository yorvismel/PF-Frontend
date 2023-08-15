/* eslint-disable react/prop-types */
import React from "react";
import { Link } from "react-router-dom";
import "./Payments.css"; 

const PaymentSuccess = ({ totalAmount}) => {
  console.log(totalAmount);
  
  
  

  return (
    <div className="payment-success-container">
      <h2>Pago Exitoso</h2>
      <p>Gracias por su compra</p>
      
      <Link to="/store" className="return-link">Volver a la tienda</Link>
    </div>
  );
};






export default PaymentSuccess;
