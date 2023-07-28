import React from "react";
import {
  createTheme,
  responsiveFontSizes,
  ThemeProvider,
} from "@mui/material/styles";
import Typography from "@mui/material/Typography";

let theme = createTheme({
  typography: {
    h1: {
      color: "white",
      fontFamily: "Roboto",
      marginBottom: "1.6rem",
    },
  },
});
theme = responsiveFontSizes(theme);

export default function Title({ text, top, bottom }) {
  return (
    <ThemeProvider theme={theme}>
      <Typography variant="h1" marginTop={top} marginBottom={bottom}>
        {text}
      </Typography>
    </ThemeProvider>
  );
}
