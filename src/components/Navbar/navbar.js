import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Container from "@mui/material/Container";
import Navlinks from "./navlinks";
import Mobilelinks from "./mobilelinks";

import * as Icon from "react-bootstrap-icons";

import "./navbar.css";

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar
      position="static"
      sx={{
        zIndex: "2",
        padding: "0.2rem",
        backgroundColor: "#1d252a",

        borderBottom: "1px solid #334c53",
        boxShadow: "none",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* desctop menu home */}
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/ea-portfolio"
            sx={{
              mr: 0,
              display: { xs: "none", md: "flex" },
              fontFamily: "Roboto",
              fontWeight: 700,
              color: "#ce9334",
              textDecoration: "none",
              letterSpacing: "1px",
            }}
          >
            EwelinaStudio
          </Typography>

          {/* mobile menu bar */}
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <Icon.List />
            </IconButton>

            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClick={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
              className="shade"
            >
              <Mobilelinks />
            </Menu>
          </Box>

          {/* mobile menu home */}
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/ea-portfolio"
            sx={{
              mr: 8,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "Roboto",
              fontWeight: 700,
              color: "#ce9334",
              textDecoration: "none",
            }}
          >
            EwelinaStudio
          </Typography>

          {/* desctop menu home */}

          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            <Navlinks />
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default ResponsiveAppBar;
