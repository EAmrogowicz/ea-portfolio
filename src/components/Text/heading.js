import {
  createTheme,
  responsiveFontSizes,
  ThemeProvider,
} from "@mui/material/styles";
import Typography from "@mui/material/Typography";

let theme = createTheme({
  typography: {
    h5: {
      color: "#ce9334",
      fontFamily: "Roboto",
      // fontFamily: "Helvetica Neue",
      fontWeight: 700,
      // textTransform: "uppercase",
    },
  },
});
theme = responsiveFontSizes(theme);

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
