import React from "react";
import {
  createTheme,
  responsiveFontSizes,
  ThemeProvider,
} from "@mui/material/styles";

import Typography from "@mui/material/Typography";

let theme = createTheme();
theme = responsiveFontSizes(theme);

function Title(props) {
  <ThemeProvider theme={theme}>
    <Typography variant="h1">props</Typography>
  </ThemeProvider>;
}

export default Title;
