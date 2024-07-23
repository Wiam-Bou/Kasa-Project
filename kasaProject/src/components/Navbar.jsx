import React from "react";
import "./Navbar.scss";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <NavLink className="logo" to="/">
        <div>
          <img src="LOGO.jpg" alt="logo Kasa" />
        </div>
      </NavLink>
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
    </nav>
  );
};

export default Navbar;
