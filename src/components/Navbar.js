import React from "react";
import { NavLink } from "react-router-dom";

export const Navbar = () => (
  <nav className="navbar navbar-dark bg-warning navbar-expand-lg ">
    <div className="navbar-brand text-dark">Note App</div>
    <div className="collapse navbar-collapse " id="navbarNav">
      <ul className="navbar-nav ">
        <li className="nav-item">
          <NavLink className="nav-link text-dark" to="/" exact>
            Home
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link text-dark" to="/about">
            About
          </NavLink>
        </li>
      </ul>
    </div>
  </nav>
);
