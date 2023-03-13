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

function Heading(props) {
  return (
    <ThemeProvider theme={theme}>
      <Typography variant="h6" className="h6">
        {props.text}
      </Typography>
    </ThemeProvider>
  );
}

export default Heading;
