import * as React from "react";
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

export default function TitleH2(props) {
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <Typography variant="h2" className="h2">
          {props.text}
        </Typography>
      </ThemeProvider>
    </StyledEngineProvider>
  );
}
