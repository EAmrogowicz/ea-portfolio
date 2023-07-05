import React from "react";
import {
  createTheme,
  responsiveFontSizes,
  ThemeProvider,
} from "@mui/material/styles";
import Typography from "@mui/material/Typography";

import "./text.css";

let theme = createTheme();
theme = responsiveFontSizes(theme);

export default function Title({ text, top, bottom }) {
  return (
    <ThemeProvider theme={theme}>
      <Typography
        variant="h1"
        className="h1"
        marginTop={top}
        marginBottom={bottom}
      >
        {text}
      </Typography>
    </ThemeProvider>
  );
}
