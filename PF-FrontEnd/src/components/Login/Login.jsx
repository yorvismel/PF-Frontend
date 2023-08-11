import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import "./login.css"; // Asegúrate de tener un archivo CSS separado

export const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <div className="login-container">
      <p className="login-message">Welcome! Please log in to continue.</p>
      <button
        className="login-button primary-button"
        onClick={() => loginWithRedirect()}
      >
        Login
      </button>
    </div>
  );
};
