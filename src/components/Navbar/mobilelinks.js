import React from "react";
import { NavLink } from "react-router-dom";
import { Stack } from "@mui/material";
import { useTheme } from "@mui/material/styles";

export default function Mobilelinks() {
  const theme = useTheme(); // Access the theme

  return (
    <Stack spacing={4} sx={{ background: "transparent", padding: "1rem" }}>
      <NavLink
        to="/about"
        end
        style={({ isActive }) => ({
          textDecoration: "none",
          textTransform: "uppercase", // Ensure text is uppercase
          color: isActive
            ? theme.palette.primary.main // Active color from theme
            : theme.palette.text.primary, // Inactive color from theme
          fontWeight: isActive ? "bold" : "normal",
        })}
      >
        About
      </NavLink>
      <NavLink
        to="/projects"
        end
        style={({ isActive }) => ({
          textDecoration: "none",
          textTransform: "uppercase",
          color: isActive
            ? theme.palette.primary.main
            : theme.palette.text.primary,
          fontWeight: isActive ? "bold" : "normal",
        })}
      >
        Projects
      </NavLink>
      <NavLink
        to="/contact"
        end
        style={({ isActive }) => ({
          textDecoration: "none",
          textTransform: "uppercase",
          color: isActive
            ? theme.palette.primary.main
            : theme.palette.text.primary,
          fontWeight: isActive ? "bold" : "normal",
        })}
      >
        Contact
      </NavLink>
    </Stack>
  );
}
