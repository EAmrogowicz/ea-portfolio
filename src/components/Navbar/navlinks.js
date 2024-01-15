import React from "react";
import { NavLink } from "react-router-dom";
import { Stack, Typography } from "@mui/material";

import "./navbar.css";

export default function Navlinks() {
  return (
    <Stack direction="row" spacing={4} ml={6}>
      <Typography
        variant="button"
        noWrap
        component="a"
        sx={{
          color: "#d6dcdd",
          fontSize: "1rem",
          fontWeight: "100",
          letterSpacing: "1px",
          textDecoration: "none",
        }}
      >
        <NavLink
          to="/About"
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          About
        </NavLink>
      </Typography>

      <Typography sx={{ fontSize: "1rem", fontWeight: "100" }}>
        <NavLink
          to="/Projects"
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          Projects
        </NavLink>
      </Typography>

      <Typography sx={{ fontSize: "1rem", fontWeight: "100" }}>
        <NavLink
          to="/Contact"
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          Contact
        </NavLink>
      </Typography>

      {/* <div>
        <ul className="navbar-nav">
          <li>
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
              to="/Contact"
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </div> */}
    </Stack>
  );
}
