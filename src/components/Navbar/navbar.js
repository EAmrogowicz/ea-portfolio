import React from "react";
import { NavLink } from "react-router-dom";
import "./navbar.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Navbar() {
  return (
    <nav className="navbar">
      <div>
        <ul className="navbar-nav">
          <li className="nav-item home">
            <NavLink
              to="/"
              end
              className={({ isActive }) => (isActive ? "home active" : "home")}
            >
              HOME
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/About"
              end
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              About
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/Portfolio"
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              Portfolio
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/Resume"
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              Resume
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/Contact"
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
