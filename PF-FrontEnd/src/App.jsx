import "./App.css";
import Header from "./components/Header/Header";
import HeaderMenu from "./components/HeaderMenu/HeaderMenu";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap-icons/font/bootstrap-icons.css";
import Footer from "./components/Footer/Footer";

import { Detail } from "./components/Detail/Detail";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";

function App() {
  return (
    <div>
      <Header />
      <HeaderMenu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detail/:productId" element={<Detail />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
