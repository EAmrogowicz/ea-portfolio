import darkScrollbar from "@mui/material/darkScrollbar";

const primary = {
  tint: "#d3a83c",
  main: "#ce9334",
  shade: "#c47026",
};

const secondary = {
  tint: "#405f68",
  main: "#334c53",
  shade: "#23373c",
};

const mono = {
  white: "#fff",
  platinum: "#d6dcdd",
  main: "#1d252a",
};

const commonColors = {
  lightText: mono.main,
  darkText: mono.platinum,
  lightBackground: mono.white,
  darkBackground: mono.main,
};

export const createThemeStyles = (mode) => ({
  // PALETTE: Define colors for light and dark modes
  palette: {
    mode,
    primary: {
      ...primary,
      ...(mode === "dark" && {
        main: primary.shade,
      }),
    },
    text: {
      ...(mode === "light"
        ? {
            primary: mono.main,
            secondary: secondary.main,
          }
        : {
            primary: "#d6dcdd",
            secondary: secondary.main,
          }),
    },
    background: {
      ...(mode === "light"
        ? {
            default: mono.white,
            paper: mono.platinum,
            overlay: `linear-gradient(to right, ${mono.white}, transparent)`,
          }
        : {
            default: mono.main,
            paper: mono.main,
            overlay: `linear-gradient(to right, ${secondary.shade}, transparent)`,
          }),
    },
  },
  // TYPOGRAPHY
  typography: {
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
    fontWeightLight: 100,
    h1: {
      ...(mode === "light" ? { color: mono.main } : { color: mono.white }),
      fontFamily: "Roboto",
      marginBottom: "1.6rem",
    },
    h2: {
      ...(mode === "light" ? { color: primary.main } : { color: primary.tint }),
      fontFamily: "Roboto",
      fontWeight: 300,
      marginBottom: "1.2rem",
    },
    h3: {
      ...(mode === "light"
        ? { color: secondary.main }
        : { color: secondary.tint }),
      fontFamily: "Roboto",
      fontWeight: 400,
      marginBottom: "1rem",
    },
    h4: {
      ...(mode === "light"
        ? { color: primary.shade }
        : { color: primary.main }),
      fontFamily: "Helvetica Neue",
      fontWeight: 100,
      textTransform: "uppercase",
      letterSpacing: 16,
    },
    h5: {
      ...(mode === "light" ? { color: mono.main } : { color: mono.white }),
      fontFamily: "Roboto",
      fontWeight: 400,
      letterSpacing: 2,
    },
    h6: {
      ...(mode === "light"
        ? { color: primary.shade }
        : { color: primary.main }),
      fontFamily: "Roboto",
      fontWeight: 700,
      textDecoration: "none",
      letterSpacing: "1px",
    },
    subtitle1: {
      ...(mode === "light" ? { color: mono.main } : { color: mono.platinum }),
      marginBottom: "1rem",
      lineHeight: 1.5,
    },
    body1: {
      ...(mode === "light" ? { color: mono.main } : { color: mono.platinum }),
      fontSize: "1rem",
      lineHeight: 1.6,
    },
    body2: {
      ...(mode === "light"
        ? { color: secondary.main }
        : { color: secondary.tint }),
      fontSize: "0.8rem",
      borderTop: "1px solid #334c53",
      textAlign: "center",
      margin: "0rem 0",
      paddingTop: "0.2rem",
    },
    button: {
      ...(mode === "light"
        ? { color: secondary.main }
        : { color: mono.platinum }),
      fontFamily: "sans-serif",
      fontSize: "1rem",
      textDecoration: "none",
      letterSpacing: 2,
      "&:hover": {
        color: "#ce9334",
      },
    },
    overline: {
      fontWeight: 100,
    },
    caption: {
      ...(mode === "light"
        ? { color: secondary.tint }
        : { color: secondary.main }),
      fontSize: "0.75rem",
      lineHeight: 1.4,
    },
  },
  // COMPONENTS
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          width: "100%",
          boxShadow: "none",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "uppercase",
          padding: "8px 16px",
          fontSize: "1rem",
          fontFamily: "sans-serif",
          fontWeight: 600,
          borderRadius: "8px", // Add consistent border radius
          ...(mode === "light"
            ? {
                color: primary.main,
                backgroundColor: mono.white,
              }
            : {
                color: mono.platinum,
                backgroundColor: mono.main,
              }),
          "&:hover": {
            ...(mode === "light"
              ? {
                  color: primary.tint,
                  backgroundColor: "transparent",
                }
              : {
                  color: primary.main,
                  backgroundColor: "transparent",
                }),
          },
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          ...(mode === "light"
            ? { color: mono.main }
            : { color: mono.platinum }),
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          ...(mode === "light"
            ? { backgroundColor: mono.white }
            : { backgroundColor: mono.main }),
        },
      },
    },
    //dark scrollbars
    MuiCssBaseline: {
      styleOverrides: (themeParam) => ({
        body: themeParam.palette.mode === "dark" ? darkScrollbar() : null,
      }),
    },
  },
});
