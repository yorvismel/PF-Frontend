import React from "react";
import { NavLink } from "react-router-dom";

export const GoHomeButton = () => {
  return (
    <NavLink to="/home">
      <button>Go Home</button>
    </NavLink>
  );
};
