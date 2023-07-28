import React from "react";
import { NavLink } from "react-router-dom";
import "./navbar.css";

export default function Navlinks() {
  return (
    <div>
      <ul className="navbar-nav">
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
            to="/Projects"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            Projects
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
  );
}
