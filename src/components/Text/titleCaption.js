import React from "react";
import {
  createTheme,
  responsiveFontSizes,
  ThemeProvider,
} from "@mui/material/styles";
import Typography from "@mui/material/Typography";

let theme = createTheme({
  typography: {
    h4: {
      color: "#ce9334",
      fontFamily: "Helvetica Neue",
      fontWeight: 100,
      textTransform: "uppercase",
      letterSpacing: 12,
    },
  },
});
theme = responsiveFontSizes(theme);

export default function TitleCaption({ text, top, bottom }) {
  return (
    <ThemeProvider theme={theme}>
      <Typography variant="h4" marginTop={top} marginBottom={bottom}>
        {text}
      </Typography>
    </ThemeProvider>
  );
}
