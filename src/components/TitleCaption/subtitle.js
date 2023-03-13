import React from "react";
import {
  createTheme,
  responsiveFontSizes,
  ThemeProvider,
} from "@mui/material/styles";

import Typography from "@mui/material/Typography";

let theme = createTheme();
theme = responsiveFontSizes(theme);

function SubTitle(props) {
  <ThemeProvider theme={theme}>
    <Typography variant="h5">{props.children}</Typography>
  </ThemeProvider>;
}

export default Sub;
