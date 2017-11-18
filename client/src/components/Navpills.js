import React from "react";
import { Link } from "react-router-dom";

const Navpills = () =>
  <ul className="nav nav-tabs">
    <li className={window.location.pathname === "/" ? "active" : ""}>
      <Link to="/">Home \ Página de inicio</Link>
    </li>
    <li className={window.location.pathname === "/Health Tips" ? "active" : ""}>
      <Link to="/tips">Health Tips \ Consejos de Salud </Link>
    </li>
    <li className={window.location.pathname === "/otc" ? "active" : ""}>
      <Link to="/otc">Over-The-Counter Medication \ Medicamentos de Venta Libre</Link>
    </li>
    <li className={window.location.pathname === "/medication" ? "active" : ""}>
      <Link to="/medication">Medication \ Medicación</Link>
    </li>
    
  </ul>;

export default Navpills;