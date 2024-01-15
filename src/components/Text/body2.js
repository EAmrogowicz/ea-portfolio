import React from "react";
import { responsiveFontSizes, ThemeProvider } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import { MyTheme } from "../themeOptions";

let theme = responsiveFontSizes(MyTheme);

export default function Body2({ text, top, bottom }) {
  return (
    <ThemeProvider theme={theme}>
      <Typography variant="body2" marginTop={top} marginBottom={bottom}>
        {text}
      </Typography>
    </ThemeProvider>
  );
}
