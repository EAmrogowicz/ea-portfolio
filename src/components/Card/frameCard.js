import { Card, CardContent, Typography } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import InteractiveList from "./interactiveList";

const theme = createTheme({
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          color: "white",
          backgroundColor: "transparent",
          textAlign: "left",
          // backgroundColor: "rgba(51, 76, 83, 0.2)",
          // border: "1px solid #334c53",
          height: "100%",
        },
      },
    },
  },
});

export default function FrameCard({ children, name, desc, items }) {
  return (
    <ThemeProvider theme={theme}>
      <Card variant="none" width="345px">
        <CardContent>
          {children}

          <Typography variant="h6" my="1rem">
            {name}
          </Typography>

          <Typography variant="body2" color="#D6DCDD" align="left">
            {desc}
          </Typography>
          {items && <InteractiveList items={items} />}
        </CardContent>
      </Card>
    </ThemeProvider>
  );
}
