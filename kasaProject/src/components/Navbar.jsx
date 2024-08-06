import React from "react";
import "./Navbar.scss";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <NavLink className="logo" to="/">
        <div className="nav-logo">
          <img src="LOGO.jpg" alt="logo Kasa" />
        </div>
      </NavLink>
     <div className="nav-elements">
     <NavLink
        to="/"
        end
        className={({ isActive }) => (isActive ? "active" : "")}
      >
        Accueil
      </NavLink>
      <NavLink
        to="/about"
        className={({ isActive }) => (isActive ? "active" : "")}
      >
        A Propos
      </NavLink>
     </div>
    </nav>
  );
};

export default Navbar;
