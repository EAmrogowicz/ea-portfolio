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

export default function Paragraph(props) {
  return (
    <ThemeProvider theme={theme}>
      <Typography variant="subtitle1" className="p">
        {props.text}
      </Typography>
    </ThemeProvider>
  );
}
