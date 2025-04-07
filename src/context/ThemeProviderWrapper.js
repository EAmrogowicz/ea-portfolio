import React, { createContext, useMemo, useState, useEffect } from "react";
import {
  ThemeProvider,
  createTheme,
  responsiveFontSizes,
} from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { createThemeStyles } from "./themeOptions"; // Corrected import path

export const ColorModeContext = createContext();

export default function ThemeProviderWrapper({ children }) {
  // Retrieve the initial mode from localStorage or default to "light"
  const [mode, setMode] = useState(() => {
    const savedMode = localStorage.getItem("themeMode");
    return savedMode ? savedMode : "light";
  });

  // Save the mode to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("themeMode", mode);
  }, [mode]);

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
    }),
    []
  );

  // Create the theme and apply responsiveFontSizes
  const theme = useMemo(() => {
    let baseTheme = createTheme(createThemeStyles(mode));
    return responsiveFontSizes(baseTheme); // Apply responsive font sizes
  }, [mode]);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}
