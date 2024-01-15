import { responsiveFontSizes, ThemeProvider } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import { MyTheme } from "../themeOptions";

let theme = responsiveFontSizes(MyTheme);

export default function Heading({ text, top, bottom, align }) {
  return (
    <ThemeProvider theme={theme}>
      <Typography
        variant="h5"
        marginTop={top}
        marginBottom={bottom}
        textAlign={align}
      >
        {text}
      </Typography>
    </ThemeProvider>
  );
}
