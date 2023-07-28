import React from "react";
import {
  createTheme,
  responsiveFontSizes,
  ThemeProvider,
} from "@mui/material/styles";
import Typography from "@mui/material/Typography";

let theme = createTheme({
  typography: {
    subtitle1: {
      color: " #d6dcdd",
      marginBottom: "1rem",
      lineHeight: 1.5,
    },
  },
});
theme = responsiveFontSizes(theme);

export default function Paragraph({ text, top, bottom }) {
  return (
    <ThemeProvider theme={theme}>
      <Typography variant="subtitle1" marginTop={top} marginBottom={bottom}>
        {text}
      </Typography>
    </ThemeProvider>
  );
}
