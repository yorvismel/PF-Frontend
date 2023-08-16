import React from 'react';
import './NavbarAdmin.css'; // Asegúrate de tener un archivo de estilos CSS separado
import "./NavBarAdmin.css"
const NavbarAdmin = () => {
  return (
    <div className="navbar">
      <div className="logo">Logo</div>
      <nav className="nav-links">
        <a href="#" className="nav-link">Dashboard</a>
        <a href="#" className="nav-link">Usuarios</a>
        <a href="#" className="nav-link">Productos</a>
        <a href="#" className="nav-link">Configuración</a>
      </nav>
    </div>
  );
}

export default NavbarAdmin;
