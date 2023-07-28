import Button from "@mui/material/Button";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          width: "64px",
          height: "64px",
          padding: "1rem ",

          color: "#d6dcdd",

          "&:hover": {
            color: "#ce9334",
            background: "none",
          },
        },
      },
    },
  },
});

export default function ButtonIcon({ target, link, children }) {
  return (
    <ThemeProvider theme={theme}>
      <Button target={target} href={link}>
        {children}
      </Button>
    </ThemeProvider>
  );
}
