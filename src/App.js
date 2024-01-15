import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ResponsiveAppBar from "./components/Navbar/navbar";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { GlobalStyles } from "@mui/material";
import Footer from "./components/Footer/footer";
import Wrapper from "./components/Wrapper/wrapper";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

// import { MyTheme } from "./components/themeOptions";

// import { StyledEngineProvider } from "@mui/material/styles";

const MyTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#CE9334",
    },
    secondary: {
      main: "#334C53",
    },
    divider: "#1d252a",
  },
  typography: {
    fontFamily: "Montserrat",
    fontWeightLight: 100,
    h1: {
      fontFamily: "Lora",
    },
    h3: {
      fontFamily: "Lora",
      fontWeight: 700,
    },
    h5: {
      fontFamily: "Lora",
      fontWeight: 400,
    },
    subtitle1: {
      fontFamily: "Lora",
    },
    subtitle2: {
      fontFamily: "Lora",
    },
    caption: {
      fontFamily: "Lora",
    },
    overline: {
      fontWeight: 100,
    },
  },
});

const globalStyles = (
  <GlobalStyles
    styles={(darkTheme) => ({
      html: {
        height: "100%",
        padding: 0,
        margin: 0,
        boxSizing: "border-box",
      },
      body: {
        margin: 0,
        backgroundColor: "#1d252a",
        color: darkTheme.palette.text.primary,
        fontFamily: darkTheme.typography.fontFamily,
      },
      // ... You can add more global styles here
    })}
  />
);

function App() {
  return (
    // <StyledEngineProvider injectFirst>

    <ThemeProvider theme={MyTheme}>
      {globalStyles}
      <Router basename="/ea-portfolio">
        <div>
          <Wrapper>
            <ResponsiveAppBar />

            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
            <Footer />
          </Wrapper>
        </div>
      </Router>
    </ThemeProvider>

    // </StyledEngineProvider>
  );
}

export default App;
