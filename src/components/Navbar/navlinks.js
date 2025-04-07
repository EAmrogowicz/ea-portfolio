import React from "react";
import { NavLink } from "react-router-dom";
import { Stack } from "@mui/material";
import { useTheme } from "@mui/material/styles";

export default function Navlinks() {
  const theme = useTheme(); // Access the theme

  return (
    <Stack direction="row" spacing={4} ml={4}>
      <NavLink
        to="/about"
        end
        style={({ isActive }) => ({
          textDecoration: "none",
          textTransform: "uppercase", // Ensure text is uppercase
          color: theme.palette.text.primary, // Keep color consistent with theme
          fontWeight: isActive ? "bold" : "normal", // Make active link bold
          transition: "color 0.3s ease", // Smooth transition for hover effect
          "&:hover": {
            color: theme.palette.primary.shade, // Change to primary.main on hover
          },
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
          color: theme.palette.text.primary, // Keep color consistent with theme
          fontWeight: isActive ? "bold" : "normal", // Make active link bold
          transition: "color 0.3s ease", // Smooth transition for hover effect
          "&:hover": {
            color: theme.palette.primary.shade, // Change to primary.main on hover
          },
        })}
      >
        Projects
      </NavLink>
    </Stack>
  );
}
