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

export default function TitleCaption(props) {
  return (
    <ThemeProvider theme={theme}>
      <Typography variant="h4" className="h4">
        {props.text}
      </Typography>
    </ThemeProvider>
  );
}
