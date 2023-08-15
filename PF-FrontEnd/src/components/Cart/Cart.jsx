import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import "./Cart.css";
import { CartContext } from "./CartContext";
import axios from 'axios';
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import PaymentSuccess from "../Payments/PaymentSuccess"; // Importa el componente PaymentSuccess

const Cart = () => {
  const { cartItems, removeFromCart, updateQuantity } = useContext(CartContext);

  const stripe = useStripe();
  const elements = useElements();

  const [paymentError, setPaymentError] = useState(null);
  const [paymentSuccess, setPaymentSuccess] = useState(false);

  const calculateTotal = () => {
    return cartItems
      .reduce((total, item) => total + item.price * item.quantity, 0)
      .toFixed(2);
      
  };
  console.log(calculateTotal);

  const handlePayment = async () => {
    if (!stripe || !elements) {
      console.error("Stripe o elements no están disponibles.");
      return;
    }
  
    try {
      const response = await axios.post(
        "https://pf-backend-nwu9.onrender.com/payments/create-checkout-session",
        { cartItems }
      );
   
      const data = response.data;
  
      if (data.sessionId) {
        const result = await stripe.redirectToCheckout({
          sessionId: data.sessionId,
        });
  
        if (result.error) {
          setPaymentError(result.error.message);
          console.error("Error al redirigir al cliente a la página de pago:", result.error);
        } else {
          // Establecer el estado de paymentSuccess a verdadero si el pago es exitoso
          setPaymentSuccess(true);
        }
      } else {
        console.error("No se recibió una sessionId válida del servidor.");
      }
    } catch (error) {
      console.error("Error en la solicitud al backend:", error.message);
    }
  };
  
  const saveCartToLocalStorage = () => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  };


  return (
    <div className="cart-container">
      <h2 className="cart-title">Carrito de Compras</h2>
      <ul className="cart-list">
        {cartItems.map((item) => (
          <li key={item.id} className="cart-item">
            <div className="cart-item-info">
              <img src={item.image} alt={item.title} />
              <span className="cart-item-name">{item.title}</span>
              <span className="cart-item-quantity">
                Cantidad: {item.quantity}
              </span>
            </div>
            <span className="cart-item-price">
              ${(item.price * item.quantity).toFixed(2)}
            </span>
            <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>
              +
            </button>
            <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>
              -
            </button>
            <button onClick={() => removeFromCart(item.id)}>Eliminar</button>
          </li>
        ))}
      </ul>
      <div className="cart-total">
        <span className="cart-total-label">Total:</span>
        <span className="cart-total-amount">${calculateTotal()}</span>
      </div>

      <Link to="/store" className="cart-link" onClick={saveCartToLocalStorage}>
        Regresar
      </Link>
      <div className="payment-form">
      {!paymentSuccess}
        <button onClick={handlePayment}>Pagar</button>
        {paymentError && <div className="payment-error">{paymentError}</div>}
        
        {paymentSuccess && <PaymentSuccess totalAmount={calculateTotal()} />}
      </div>
    </div>
  );
};

export default Cart;





