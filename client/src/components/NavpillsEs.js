import React from "react";
import { Link } from "react-router-dom";

const NavpillsEs = () =>
  <ul className="nav nav-tabs">
    <li className={window.location.pathname === "/" ? "active" : ""}>
      <Link to="/">Home</Link>
    </li>
    
   <li className={window.location.pathname === "/Health Tips" ? "active" : ""}>
      <Link to="/TipsEs">Consejos de Salud</Link>
    </li>

   
   <li className={window.location.pathname === "/otcEs" ? "active" : ""}>
      <Link to="/otcEs">Medicamento de venta libre</Link>
    </li>   

   <li className={window.location.pathname === "/medicationEs" ? "active" : ""}>
      <Link to="/medicationEs">Medicamento</Link>
    </li>
    <li className={window.location.pathname === "/login" ? "active" : ""}>
      <Link to="login">Iniciar sesión / Regístrate</Link>
    </li>
  
    <li className={window.location.pathname === "/medminderEs" ? "active" : ""}>
      <Link to="/medminderEs">Recordatorio</Link>
    </li>
    
 </ul>;

export default NavpillsEs;