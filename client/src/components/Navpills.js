import React from "react";
import { Link } from "react-router-dom";

const Navpills = () =>
  <ul className="nav nav-tabs">
    <li className={window.location.pathname === "/" ? "active" : ""}>
      <Link to="/">Home</Link>
    </li>
    <li className={window.location.pathname === "/Health Tips" ? "active" : ""}>
      <Link to="/tips">Health Tips</Link>
    </li>
    <li className={window.location.pathname === "/otc" ? "active" : ""}>
      <Link to="/otc">OTC Medication</Link>
    </li>
    <li className={window.location.pathname === "/medication" ? "active" : ""}>
      <Link to="/medication">Medication</Link>
    </li>
   
    
  </ul>;

export default Navpills;