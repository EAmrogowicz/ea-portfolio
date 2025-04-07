import React from "react";
import PropTypes from "prop-types";
import { AppBar, Toolbar, Box, useMediaQuery, useTheme } from "@mui/material";
import { IconButton, Typography, Menu } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Navlinks from "./navlinks";
import Mobilelinks from "./mobilelinks";

import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import { ColorModeContext } from "../../context/ThemeProviderWrapper";

function Branding() {
  const theme = useTheme(); // Access the theme

  return (
    <Typography
      variant="h6"
      noWrap
      component="a"
      href="/ea-portfolio"
      sx={{
        margin: "0",
        color:
          theme.palette.mode === "light"
            ? theme.palette.primary.shade // Use primary.shade in light mode
            : theme.palette.primary.tint, // Use primary.tint in dark mode
        textDecoration: "none", // Ensure no underline
        transition: "color 0.3s ease", // Smooth transition for hover effect
        "&:hover": {
          color:
            theme.palette.mode === "light"
              ? theme.palette.primary.main // Change to primary.main on hover in light mode
              : theme.palette.primary.main, // Change to secondary.main on hover in dark mode
        },
      }}
    >
      EwelinaStudio
    </Typography>
  );
}

function ThemeToggle() {
  const theme = useTheme(); // Access the theme
  const colorMode = React.useContext(ColorModeContext); // Access the color mode context

  return (
    <Box>
      <IconButton onClick={colorMode.toggleColorMode} color="inherit">
        {theme.palette.mode === "dark" ? (
          <Brightness7Icon />
        ) : (
          <Brightness4Icon />
        )}
      </IconButton>
    </Box>
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
            vertical: "top",
            horizontal: "right",
          }}
          keepMounted
          transformOrigin={{
            vertical: "top",
            horizontal: "right",
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
    </>
  );
}

MobileMenu.propTypes = {
  anchorElNav: PropTypes.object,
  handleOpenNavMenu: PropTypes.func.isRequired,
  handleCloseNavMenu: PropTypes.func.isRequired,
};

function DesktopMenu() {
  return (
    <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
      <Navlinks />
    </Box>
  );
}

function ResponsiveAppBar(props) {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
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
        padding: theme.spacing(0), // Use theme spacing
        background: theme.palette.background.default, // Use theme background
        borderBottom: `1px solid ${theme.palette.secondary.main}`, // Use theme border color
      }}
    >
      <Toolbar
        sx={{
          maxWidth: "1240px",
          width: "100%",
          margin: "0 auto",
          position: "relative", // Ensure the Toolbar is the relative parent
          display: "flex",
          justifyContent: "space-between", // Space out Branding and ThemeToggle
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            display: "flex", // Ensure items are in a row
            flexDirection: "row", // Align items horizontally
            alignItems: "center",
            justifyContent: "flex-start",
            flexGrow: 1, // Allow the box to grow
          }}
        >
          <Branding />
          {useMediaQuery(theme.breakpoints.down("sm")) ? (
            <MobileMenu
              anchorElNav={anchorElNav}
              handleOpenNavMenu={handleOpenNavMenu}
              handleCloseNavMenu={handleCloseNavMenu}
            />
          ) : (
            <DesktopMenu />
          )}
        </Box>

        <ThemeToggle />
      </Toolbar>
    </AppBar>
  );
}

ResponsiveAppBar.propTypes = {
  children: PropTypes.node,
};

export default ResponsiveAppBar;
