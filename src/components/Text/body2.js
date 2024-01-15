import React from "react";
import {
  createTheme,
  responsiveFontSizes,
  ThemeProvider,
} from "@mui/material/styles";
import Typography from "@mui/material/Typography";

let theme = createTheme({
  typography: {
    body2: {
      color: "#334c53",
      fontSize: "0.8rem",
      borderTop: "1px solid #334c53",
      textAlign: "center",
      margin: "0rem 0",
      paddingTop: "0.2rem",
    },
  },
});
theme = responsiveFontSizes(theme);

export default function Body2({ text, top, bottom }) {
  return (
    <ThemeProvider theme={theme}>
      <Typography variant="body2" marginTop={top} marginBottom={bottom}>
        {text}
      </Typography>
    </ThemeProvider>
  );
}
