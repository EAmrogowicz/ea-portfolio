import { Box, useTheme } from "@mui/material";

function Hero({ photoPath, children }) {
  const theme = useTheme();
  return (
    <Box
      sx={{
        position: "relative", // Ensure proper positioning for the overlay
        height: "calc(100vh - 110px)",
        width: "100%",
        backgroundImage: `url(${photoPath})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background: theme.palette.background.overlay, // Apply the overlay
          zIndex: 1, // Ensure the overlay is above the background image
        },
      }}
    >
      <Box
        sx={{
          position: "relative", // Ensure children are above the overlay
          zIndex: 2,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
        }}
      >
        {children}
      </Box>
    </Box>
  );
}

export default Hero;
