import React from "react";
// import { NavLink } from "react-router-dom";
import { Stack, Typography } from "@mui/material";

export default function Navlinks() {
  return (
    <Stack direction="row" spacing={4} ml={6}>
      <Typography
        variant="button"
        noWrap
        component="a"
        href="/ea-portfolio/About"
      >
        About
      </Typography>

      <Typography
        variant="button"
        noWrap
        component="a"
        href="/ea-portfolio/Projects"
      >
        Projects
      </Typography>

      <Typography
        variant="button"
        noWrap
        component="a"
        href="/ea-portfolio/Contact"
      >
        Contact
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
