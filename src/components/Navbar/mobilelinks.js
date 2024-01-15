import React from "react";
// import { NavLink } from "react-router-dom";
import { Stack, Typography } from "@mui/material";

export default function Mobilelinks() {
  return (
    <Stack spacing={4} sx={{ backgroundColor: "transparent" }}>
      <Typography
        variant="button"
        noWrap
        component="a"
        href="/ea-portfolio/About"
        sx={{ textAlign: "center", padding: "1rem" }}
      >
        About
      </Typography>

      <Typography
        variant="button"
        noWrap
        component="a"
        href="/ea-portfolio/Projects"
        sx={{ textAlign: "center", padding: "1rem" }}
      >
        Projects
      </Typography>

      <Typography
        variant="button"
        noWrap
        component="a"
        href="/ea-portfolio/Contact"
        sx={{ textAlign: "center", padding: "1rem" }}
      >
        Contact
      </Typography>
    </Stack>
    // <div>
    //   <li className="nav-item-m">
    //     <NavLink
    //       to="/About"
    //       end
    //       className={({ isActive }) =>
    //         isActive ? "nav-link active" : "nav-link"
    //       }
    //     >
    //       About
    //     </NavLink>
    //   </li>
    //   <li className="nav-item-m">
    //     <NavLink
    //       to="/Projects"
    //       className={({ isActive }) =>
    //         isActive ? "nav-link active" : "nav-link"
    //       }
    //     >
    //       Projects
    //     </NavLink>
    //   </li>
    //   {/* <li className="nav-item-m">
    //     <NavLink
    //       to="/Resume"
    //       className={({ isActive }) =>
    //         isActive ? "nav-link active" : "nav-link"
    //       }
    //     >
    //       Resume
    //     </NavLink>
    //   </li> */}
    //   <li className="nav-item-m">
    //     <NavLink
    //       to="/Contact"
    //       className={({ isActive }) =>
    //         isActive ? "nav-link active" : "nav-link"
    //       }
    //     >
    //       Contact
    //     </NavLink>
    //   </li>
    // </div>
  );
}
