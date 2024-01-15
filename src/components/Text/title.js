import React from "react";
import { responsiveFontSizes, ThemeProvider } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import { MyTheme } from "../themeOptions";

let theme = responsiveFontSizes(MyTheme);

export default function Title({ text, top, bottom }) {
  return (
    <ThemeProvider theme={theme}>
      <Typography variant="h1" marginTop={top} marginBottom={bottom}>
        {text}
      </Typography>
    </ThemeProvider>
  );
}
