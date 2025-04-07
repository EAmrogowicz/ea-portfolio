import React from "react";
import PropTypes from "prop-types";
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
        padding: theme.spacing(1), // Use theme spacing
        background: theme.palette.background.default, // Use theme background
        borderBottom: `1px solid ${theme.palette.secondary.main}`, // Use theme border color
      }}
    >
      <Container maxWidth="xl">
        <Toolbar>
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
          <Box sx={{ flexGrow: 0 }}>{props.children}</Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

ResponsiveAppBar.propTypes = {
  children: PropTypes.node,
};

export default ResponsiveAppBar;
