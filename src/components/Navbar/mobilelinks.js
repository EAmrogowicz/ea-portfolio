import React from "react";
import { NavLink } from "react-router-dom";
import "./navbar.css";

export default function Mobilelinks() {
  return (
    <div>
      <li className="nav-item-m">
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
      <li className="nav-item-m">
        <NavLink
          to="/Projects"
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          Projects
        </NavLink>
      </li>
      <li className="nav-item-m">
        <NavLink
          to="/Resume"
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          Resume
        </NavLink>
      </li>
      <li className="nav-item-m">
        <NavLink
          to="/Contact"
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          Contact
        </NavLink>
      </li>
    </div>
  );
}
