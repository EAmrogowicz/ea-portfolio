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

function SubTitle(props) {
  return (
    <ThemeProvider theme={theme}>
      <Typography variant="h5" className="h5">
        {props.text}
      </Typography>
    </ThemeProvider>
  );
}

export default SubTitle;
