import { Card, CardContent, Typography } from "@mui/material";
import SubTitle from "../Text/subtitle";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          color: "white",
          backgroundColor: "rgba(51, 76, 83, 0.2)",
          border: "1px solid #334c53",
          height: "100%",
        },
      },
    },
  },
});

export default function FrameCard({ children, name, desc }) {
  return (
    <ThemeProvider theme={theme}>
      <Card>
        <CardContent>
          {children}
          <SubTitle text={name} bottom="1rem" />

          <Typography variant="body2">{desc}</Typography>
        </CardContent>
      </Card>
    </ThemeProvider>
  );
}
