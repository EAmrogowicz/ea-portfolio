import React from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import ResponsiveAppBar from "./components/Navbar/navbar";
import { IconButton, Box } from "@mui/material";
import Footer from "./components/footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

import { useTheme } from "@mui/material/styles";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import { ColorModeContext } from "./context/ThemeProviderWrapper";

function App() {
  const theme = useTheme();
  const colorMode = React.useContext(ColorModeContext);

  return (
    <Router>
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
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </Box>
    </Router>
  );
}

export default App;
