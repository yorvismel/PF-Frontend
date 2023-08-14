import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { NavLink } from "react-router-dom";

export const GoHomeButton = () => {
  const { logout } = useAuth0();
  return (
    <div className="muevelo">
      <button
        className="logout mr-6"
        onClick={() => logout({ returnTo: window.location.origin })}
      >
        Logout
      </button>
      <NavLink to="/home">
        <button className="logins">Go Home</button>
      </NavLink>{" "}
    </div>
  );
};
