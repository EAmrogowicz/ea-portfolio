import React from "react";
import {
  createTheme,
  responsiveFontSizes,
  ThemeProvider,
} from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import { StyledEngineProvider } from "@mui/material/styles";
import "./text.css";

let theme = createTheme();
theme = responsiveFontSizes(theme);

export default function Caption(props) {
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <Typography variant="subtitle1" className="caption">
          {props.text}
        </Typography>
      </ThemeProvider>
    </StyledEngineProvider>
  );
}
