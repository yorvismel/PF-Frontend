import React, { useContext } from "react";
import { Link } from "react-router-dom"; // Importamos Link desde react-router-dom
import "./Cart.css";
import { CartContext } from "./CartContext"; // Asegúrate de que la ruta sea correcta

const Cart = () => {
  const { cartItems, removeFromCart, updateQuantity } = useContext(CartContext); // Consumir el contexto para obtener el estado y las funciones del carrito

  // Función para calcular el total del carrito
  const calculateTotal = () => {
    return cartItems
      .reduce((total, item) => total + item.price * item.quantity, 0)
      .toFixed(2);
  };

  // Guardar el carrito en el localStorage
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
      <Link>Pagar</Link>
    </div>
  );
};

export default Cart;
