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
import Create from "./components/Create/Create";
import Cart from "./components/Cart/Cart"
// imports para el login:
import { useAuth0 } from "@auth0/auth0-react";
import { LoginButton } from "./components/Login/Login";
import { LogoutButton } from "./components/Login/Logout";
import { Profile } from "./components/Login/Profile";
import { GoHomeButton } from "./components/Login/GoHome";

function App() {
  const { isAuthenticated } = useAuth0();


  return (
    <div className="toditotodito">
      <Routes>
        <Route 
          path="/"
          element={isAuthenticated ? (
            <>
              <Profile/>
              <LogoutButton/>
              <GoHomeButton/>
              </>
          ) : ( 
            <LoginButton/>
          )}
          />
        <Route
          path="/detail/:productId"
          element={
            <>
              <Header />
              <HeaderMenu />
              <Detail />
              <Footer />
              <Cart />
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
    </div>
  );
}

export default App;