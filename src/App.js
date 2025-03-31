import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ResponsiveAppBar from "./components/Navbar/navbar";
import { IconButton, Box } from "@mui/material";
import Footer from "./components/footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

import {
  useTheme,
  ThemeProvider,
  createTheme,
  responsiveFontSizes,
} from "@mui/material/styles";

import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";

import CssBaseline from "@mui/material/CssBaseline";
import { createThemeStyles } from "./components/themeOptions";

const ColorModeContext = React.createContext({ toggleColorMode: () => {} });

function App() {
  const theme = useTheme();
  const colorMode = React.useContext(ColorModeContext);

  return (
    <Router basename="/ea-portfolio">
      <div>
        <Box>
          <ResponsiveAppBar>
            <Box>
              <IconButton onClick={colorMode.toggleColorMode} color="inherit">
                {theme.palette.mode === "dark" ? (
                  <Brightness7Icon />
                ) : (
                  <Brightness4Icon />
                )}
              </IconButton>
            </Box>
          </ResponsiveAppBar>
          {/* <Header /> */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          <Footer />
        </Box>
      </div>
    </Router>
  );
}

export default function ToggleColorMode() {
  const [mode, setMode] = React.useState(() => {
    // Retrieve the saved mode from localStorage or default to "light"
    return localStorage.getItem("themeMode") || "light";
  });

  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => {
          const newMode = prevMode === "light" ? "dark" : "light";
          localStorage.setItem("themeMode", newMode); // Save the new mode to localStorage
          return newMode;
        });
      },
    }),
    []
  );

  const theme = React.useMemo(
    () => responsiveFontSizes(createTheme(createThemeStyles(mode))),
    [mode]
  );

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <App />
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}
