import React from "react";
import { AppBar, Toolbar, Box } from "@mui/material";
import { IconButton, Typography, Menu, Container } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Navlinks from "./navlinks";
import Mobilelinks from "./mobilelinks";

function ResponsiveAppBar(props) {
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
        backgroundColor: "transparent",
        borderBottom: "1px solid #334c53",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar>
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
              sx={{ color: "white" }}
            >
              <MenuIcon />
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
                backgroundColor: "rgba(29, 37, 42, 0.9)",
              }}
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
              margin: "0 auto",
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

          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            <Navlinks />
          </Box>
          <Box sx={{ flexGrow: 0 }}>{props.children}</Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default ResponsiveAppBar;
