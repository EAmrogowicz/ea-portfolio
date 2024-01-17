import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ResponsiveAppBar from "./components/Navbar/navbar";
import { GlobalStyles, IconButton, Box } from "@mui/material";
import Footer from "./components/Footer/footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

import { useTheme, ThemeProvider, createTheme } from "@mui/material/styles";

import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";

import { MyTheme } from "./components/themeOptions";

const ColorModeContext = React.createContext({ toggleColorMode: () => {} });

const globalStyles = (
  <GlobalStyles
    styles={(MyTheme) => ({
      html: {
        height: "100%",
        padding: 0,
        margin: 0,
        boxSizing: "border-box",
      },
      body: {
        margin: 0,
        backgroundColor: "#1d252a",
      },
      // ... You can add more global styles here
    })}
  />
);

function App() {
  const theme = useTheme(MyTheme);
  const colorMode = React.useContext(ColorModeContext);

  return (
    <ThemeProvider theme={MyTheme}>
      {globalStyles}

      <Router basename="/ea-portfolio">
        <div>
          <Box>
            <ResponsiveAppBar>
              <IconButton onClick={colorMode.toggleColorMode} color="inherit">
                {" "}
                {theme.palette.mode === "dark" ? (
                  <Brightness7Icon />
                ) : (
                  <Brightness4Icon />
                )}
              </IconButton>
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
    </ThemeProvider>
  );
}

export default App;
