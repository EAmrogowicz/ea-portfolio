import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material/styles";

export default function Body2({ text, top, bottom }) {
  const theme = useTheme();
  return (
    // <ThemeProvider theme={theme}>
    <Typography variant="body2" marginTop={top} marginBottom={bottom}>
      {text}
    </Typography>
    // </ThemeProvider>
  );
}
