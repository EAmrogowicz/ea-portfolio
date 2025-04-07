import React from "react";
import { NavLink } from "react-router-dom";
import { Stack } from "@mui/material";
import { useTheme } from "@mui/material/styles";

export default function Mobilelinks() {
  const theme = useTheme(); // Access the theme

  return (
    <Stack
      spacing={4}
      sx={{
        background: theme.palette.background.paper, // Use theme background color
        padding: "1rem", // Add padding
        borderRadius: "4px", // Add border radius
        boxShadow: theme.shadows[3], // Add a subtle shadow for better visibility
        zIndex: 10, // Ensure the menu appears above other elements
      }}
    >
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
    </Stack>
  );
}
