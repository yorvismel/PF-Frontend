import React, { useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import "./App.css";
import Home from "./components/Home/Home"
import Create from './components/Create/Create'
import Header from "./components/Header/Header";
import HeaderMenu from "./components/HeaderMenu/HeaderMenu";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap-icons/font/bootstrap-icons.css";
import Footer from "./components/Footer/Footer";
import { Detail } from "./components/Detail/Detail";
import Store from "./components/store/Store";

function App() {
  const navigate = useNavigate(); // Obtiene la función de navegación
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Estado de inicio de sesión

  const handleLogin = (user) => {
    // Simulate successful login for demonstration purposes
    // In a real application, you would perform actual authentication here
    console.log("Logged in user:", user);
    setIsLoggedIn(true);
    navigate("/home");
  };

  return (
    <div className="toditotodito">
      <Header />
      <HeaderMenu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detail/:productId" element={<Detail  />} />
        <Route path="/store" element={<Store/>}/>
        <Route path="/cart" element={<Cart />}/>
      </Routes>
    </div>
  );
}

export default App;
