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

export const createThemeStyles = (mode) => ({
  // PALETTE
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
            main: mono.main,
            secondary: secondary.main,
          }
        : {
            primary: "#d6dcdd",
            secondary: secondary.main,
          }),
    },

    ...(mode === "dark" && {
      background: {
        default: mono.main,
        paper: mono.main,
      },
    }),
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
    //title
    h1: {
      color: "white",
      fontFamily: "Roboto",
      marginBottom: "1.6rem",
    },
    //title caption -> subtitle
    h4: {
      ...(mode === "light"
        ? {
            color: primary.shade,
          }
        : {
            color: primary.main,
          }),
      fontFamily: "Helvetica Neue",
      fontWeight: 100,
      textTransform: "uppercase",
      letterSpacing: 16,
    },
    //heading
    h5: {
      ...(mode === "light"
        ? {
            color: mono.main,
          }
        : {
            color: mono.white,
          }),
      fontFamily: "Roboto",
      fontWeight: 400,
      letterSpacing: 2,
    },
    //menu logo
    h6: {
      ...(mode === "light"
        ? {
            color: primary.shade,
          }
        : {
            color: primary.main,
          }),
      fontFamily: "Roboto",
      fontWeight: 700,
      textDecoration: "none",
      letterSpacing: "1px",
    },
    //paragraph
    subtitle1: {
      ...(mode === "light"
        ? {
            color: mono.white,
          }
        : {
            color: mono.platinum,
          }),
      marginBottom: "1rem",
      lineHeight: 1.5,
    },
    body2: {
      ...(mode === "light"
        ? {
            color: secondary.main,
          }
        : {
            color: secondary.tint,
          }),
      fontSize: "0.8rem",
      borderTop: "1px solid #334c53",
      textAlign: "center",
      margin: "0rem 0",
      paddingTop: "0.2rem",
    },
    // caption: {
    //   fontFamily: "Lora",
    // },
    button: {
      ...(mode === "light"
        ? {
            color: secondary.main,
          }
        : {
            color: mono.platinum,
          }),
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
    //dark scrollbars
    MuiCssBaseline: {
      styleOverrides: (themeParam) => ({
        body: themeParam.palette.mode === "dark" ? darkScrollbar() : null,
      }),
    },
  },
});
