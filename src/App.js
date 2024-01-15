import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ResponsiveAppBar from "./components/Navbar/navbar";
import { ThemeProvider } from "@mui/material/styles";
import { GlobalStyles } from "@mui/material";
import Footer from "./components/Footer/footer";
import Wrapper from "./components/Wrapper/wrapper";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

import { MyTheme } from "./components/themeOptions";

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
  return (
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
  );
}

export default App;
