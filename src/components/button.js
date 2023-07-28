import Button from "@mui/material/Button";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  components: {
    MuiButton: {
      variants: [
        {
          props: { variant: "btn" },
          style: {
            color: "#d6dcdd",
            width: "12.8rem",
            textTransform: "uppercase",
            border: `1px solid #d6dcdd`,
            borderRadius: 32,
            padding: " 0 2.4rem",
            "&:hover": {
              color: "#ce9334",
              backgroundColor: "rgb(29, 37, 42, 0.9)",
              border: `1px solid #ce9334`,
            },
          },
        },
        {
          props: { variant: "btnAccent" },
          style: {
            color: "#d6dcdd",
            width: "12.8rem",
            textTransform: "uppercase",
            border: `1px solid #d6dcdd`,
            borderRadius: 32,
            padding: " 0 2.4rem",
            backgroundColor: " rgb(29, 37, 42, 0.8)",
            "&:hover": {
              color: "#ce9334",
              backgroundColor: "rgb(29, 37, 42, 0.9)",
              border: `1px solid #ce9334`,
            },
          },
        },
      ],
    },
  },
});

export default function CustomButton({ variant, target, link, name }) {
  return (
    <ThemeProvider theme={theme}>
      <Button variant={variant} target={target} href={link}>
        {name}
      </Button>
    </ThemeProvider>
  );
}
