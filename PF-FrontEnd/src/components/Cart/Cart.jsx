import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import "./Cart.css";
import axios from 'axios'
import { CartContext } from "./CartContext";
import { useDispatch } from "react-redux";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import PaymentSuccess from "../Payments/PaymentSuccess"; // Importa el componente PaymentSuccess

const Cart = () => {
  const { cartItems, removeFromCart, updateQuantity } = useContext(CartContext);
  const dispatch = useDispatch();
  const stripe = useStripe();
  const elements = useElements();

  const [paymentError, setPaymentError] = useState(null);
  const [paymentSuccess, setPaymentSuccess] = useState(false);

  const calculateTotal = () => {
    const total = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
    return total.toFixed(2);
  };

  const handlePayment = async () => {
    if (!stripe || !elements) {
      console.error("Stripe o elements no están disponibles.");
      return;
    }
  
    try {
      const response = await axios.post(
        "payments/create-checkout-session",
        { cartItems }
      );
  
      const data = response.data;
  
      if (data.sessionId) {
        const result = await stripe.redirectToCheckout({
          sessionId: data.sessionId,
        });
  
        if (result.error) {
          setPaymentError(result.error.message);
          console.error(
            "Error al redirigir al cliente a la página de pago:",
            result.error
          );
        } else {
          // El pago fue exitoso
          setPaymentSuccess(true);
        }
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
            <div className="quantity-buttons">
              <button
                className="cart-quantity-button"
                onClick={() => updateQuantity(item.id, item.quantity + 1)}
              >
                +
              </button>
              <button
                className="cart-quantity-button"
                onClick={() => updateQuantity(item.id, item.quantity - 1)}
              >
                -
              </button>
            </div>
            <button
              className="cart-remove-button"
              onClick={() => removeFromCart(item.id)}
            >
              Eliminar
            </button>
          </li>
        ))}
      </ul>
      <div className="cart-total">
        <span className="cart-total-label">Total:</span>
        <span className="cart-total-amount">${calculateTotal()}</span>
      </div>

      <Link to="/store" className="regresar" onClick={saveCartToLocalStorage}>
        Regresar
      </Link>
      <div className="payment-form">
        {!paymentSuccess ? (
          <>
            {/* <CardElement className="card-element" /> */}
            <button className="pay-button" onClick={handlePayment}>
              Pagar
            </button>
          </>
        ) : (
          <PaymentSuccess totalAmount={calculateTotal()} />
        )}
        {paymentError && <div className="payment-error">{paymentError}</div>}
      </div>
    </div>
  );
};

export default Cart;
