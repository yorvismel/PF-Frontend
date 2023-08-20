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
import Cart from "./components/Cart/Cart";
import Products from "./components/Admin/Products/Produts";
import NavbarAdmin from "./components/Admin/navbaradmin/NavbarAdmin";
// imports para el login:
import { useAuth0 } from "@auth0/auth0-react";
import { LoginButton } from "./components/Login/Login";
import { LogoutButton } from "./components/Login/Logout";
import { Profile } from "./components/Login/Profile";
import { GoHomeButton } from "./components/Login/GoHome";
import PaymentSuccess from "./components/Payments/PaymentSuccess";
import Userpart from "./components/Login/Userpart";

import Admin from "./components/Admin/Admin";
function App() {
  const { isAuthenticated } = useAuth0();

  return (
    <div className="toditotodito">
      <Routes>
        {isAuthenticated ? (
          <>
            z
            <Route
              path="/user"
              element={
                <>
                  <Header />
                  <HeaderMenu />
                  <Userpart />

                  <GoHomeButton />
                  <Footer />
                </>
              }
            />
            <Route
              path="/"
              element={
                <>
                  <Profile />

                  <GoHomeButton />
                </>
              }
            />
          </>
        ) : (
          <Route path="/" element={<LoginButton />} />
        )}
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
        <Route path="/cart" element={<Cart />} />
        <Route path="/payments/success" element={<PaymentSuccess />} />
        <Route path="/admin/*" element={<Admin />} />
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
        />{" "}
        <Route
          path="/admin/products"
          element={
            <div className="mainadmin">
              <NavbarAdmin />
              <Products />
            </div>
          }
        />
        <Route
          path="/admin/dashboard"
          element={
            <div className="mainadmin">
              <NavbarAdmin /> <div>Dashboard</div>
            </div>
          }
        />
        <Route
          path="/admin/users"
          element={
            <div className="mainadmin">
              <NavbarAdmin /> <div>users</div>
            </div>
          }
        />
        <Route
          path="/admin/create"
          element={
            <div className="mainadmin">
              <NavbarAdmin />
              <Create />
            </div>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
