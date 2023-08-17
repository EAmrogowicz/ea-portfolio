import {
  createTheme,
  responsiveFontSizes,
  ThemeProvider,
} from "@mui/material/styles";
import Typography from "@mui/material/Typography";

let theme = createTheme({
  typography: {
    h5: {
      color: "#d6dcdd",
      letterSpacing: 2,
      fontFamily: "Roboto",
    },
  },
});
theme = responsiveFontSizes(theme);

export default function SubTitle({ text, top, bottom }) {
  return (
    <ThemeProvider theme={theme}>
      <Typography variant="h5" marginTop={top} marginBottom={bottom}>
        {text}
      </Typography>
    </ThemeProvider>
  );
}
