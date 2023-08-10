import React, { useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import HeaderMenu from "./components/HeaderMenu/HeaderMenu";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap-icons/font/bootstrap-icons.css";
import Footer from "./components/Footer/Footer";
import { Detail } from "./components/Detail/Detail";
import Store from "./components/store/Store";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Create from "./components/Create/Create";

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
      <Routes>
        <Route
          path="/detail/:productId"
          element={
            <>
              <Header />
              <HeaderMenu />
              <Detail />
              <Footer />
            </>
          }
        />
        <Route
          path="/store"
          element={
            <>
              <Header />
              <HeaderMenu />
              <Store />
              <Footer />
            </>
          }
        />

        <Route
          path="/home"
          element={
            <>
              <Header />
              <HeaderMenu />
              <Home />
              <Footer />
            </>
          }
        />
        <Route
          path="/create"
          element={
            <>
              <Header />
              <HeaderMenu />
              <Create />
              <Footer />
            </>
          }
        />
      </Routes>

      <Routes>
        <Route
          path="/"
          element={<Login onLogin={handleLogin} />} // Muestra el componente Login
        />
      </Routes>
    </div>
  );
}

export default App;