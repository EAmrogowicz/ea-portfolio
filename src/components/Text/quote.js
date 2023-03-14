import React from "react";
import {
  createTheme,
  responsiveFontSizes,
  ThemeProvider,
} from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import "./textStyles.css";

let theme = createTheme();
theme = responsiveFontSizes(theme);

export default function Quote(props) {
  return (
    <ThemeProvider theme={theme}>
      <Typography variant="subtitle1" className="quote">
        {props.text}
      </Typography>
    </ThemeProvider>
  );
}
