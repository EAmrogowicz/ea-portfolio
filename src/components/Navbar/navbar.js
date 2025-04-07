import React from "react";
import { AppBar, Toolbar, Box, useMediaQuery, useTheme } from "@mui/material";
import { IconButton, Typography, Menu, Container } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Navlinks from "./navlinks";
import Mobilelinks from "./mobilelinks";

function Branding() {
  return (
    <Typography
      variant="h6"
      noWrap
      component="a"
      href="/ea-portfolio"
      sx={{
        margin: "0 auto",
        display: { xs: "flex", md: "flex" },
        flexGrow: 1,
      }}
    >
      EwelinaStudio
    </Typography>
  );
}

function MobileMenu({ anchorElNav, handleOpenNavMenu, handleCloseNavMenu }) {
  return (
    <>
      <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
        <IconButton
          size="large"
          aria-label="open navigation menu"
          aria-controls="menu-appbar"
          aria-haspopup="true"
          onClick={handleOpenNavMenu}
          color="inherit"
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
          onClose={handleCloseNavMenu}
          sx={{
            display: { xs: "block", md: "none" },
          }}
        >
          <Mobilelinks />
        </Menu>
      </Box>
      <Branding />
    </>
  );
}

function DesktopMenu() {
  return (
    <>
      <Branding />
      <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
        <Navlinks />
      </Box>
    </>
  );
}

function ResponsiveAppBar(props) {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  const theme = useTheme();

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
        background: theme.palette.background.default, // Use theme background
        borderBottom: `1px solid ${theme.palette.secondary.main}`, // Use theme border color
      }}
    >
      <Container maxWidth="xl">
        <Toolbar>
          {isMobile ? (
            <MobileMenu
              anchorElNav={anchorElNav}
              handleOpenNavMenu={handleOpenNavMenu}
              handleCloseNavMenu={handleCloseNavMenu}
            />
          ) : (
            <DesktopMenu />
          )}
          <Box sx={{ flexGrow: 0 }}>{props.children}</Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default ResponsiveAppBar;
