import { createTheme } from "@mui/material/styles";

export const MyTheme = createTheme({
  // PALETTE
  palette: {
    mode: "light",
    primary: {
      main: "#1d252a",
    },
    secondary: {
      main: "#CE9334",
    },
    divider: "#334C53",
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
      color: "#ce9334",
      fontFamily: "Helvetica Neue",
      fontWeight: 100,
      textTransform: "uppercase",
      letterSpacing: 16,
    },
    //heading
    h5: {
      color: "#d6dcdd",
      fontFamily: "Roboto",
      fontWeight: 400,
      letterSpacing: 2,
    },
    //paragraph
    subtitle1: {
      color: " #d6dcdd",
      marginBottom: "1rem",
      lineHeight: 1.5,
    },
    body2: {
      color: "#334c53",
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
      fontFamily: "sans-serif",
      color: "#d6dcdd",
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
          backgroundColor: "transparent",
          boxShadow: "none",
          width: "100%",
        },
      },
    },
  },
});
