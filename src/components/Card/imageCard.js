import { Card, CardMedia, CardContent, Box } from "@mui/material";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          color: "white",
          backgroundColor: "rgba(51, 76, 83, 0.2)",
          height: "100%",
        },
      },
    },
  },
});

export default function ImageCard({ name, desc, photoPath }) {
  return (
    <ThemeProvider theme={theme}>
      <Card
        sx={{
          width: "30%",
          minWidth: 150,
          position: "relative",
          borderRadius: "4px",
        }}
      >
        <Box sx={{ position: "relative" }}>
          <CardMedia component="img" height="300" image={photoPath} />
          <Box
            sx={{
              position: "absolute",
              bottom: 0,

              height: "100%",
              width: "100%",
              background:
                "linear-gradient(to top, rgba(0,0,0,0.4), rgba(0,0,0,0) 200px), linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0) 300px)",
            }}
          >
            <CardContent
              width="100%"
              sx={{ position: "absolute", bottom: 0, left: 0, right: 0 }}
            >
              <Typography variant="h6" component="div" fontWeight="700">
                {name}
              </Typography>
              <Typography variant="body2">{desc}</Typography>
            </CardContent>
          </Box>
        </Box>
      </Card>
    </ThemeProvider>
  );
}
