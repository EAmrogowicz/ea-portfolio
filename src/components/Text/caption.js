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

export default function Caption(props) {
  return (
    <ThemeProvider theme={theme}>
      <Typography variant="subtitle1" className="caption">
        {props.text}
      </Typography>
    </ThemeProvider>
  );
}
