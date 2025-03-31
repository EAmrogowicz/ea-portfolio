import { Box, useTheme } from "@mui/material";

function Wrapper({ children }) {
  const theme = useTheme();
  return (
    <Box
      style={{
        height: "calc(100vh - 110px)",
        width: "100%",
        top: 0,
        left: 0,
        background: theme.palette.background.overlay, // Use the overlay gradient
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "flex-start", // Align content to the left
        flexDirection: "column",
        padding: "1rem",
        overflowY: "scroll",
      }}
    >
      {children}
    </Box>
  );
}

export default Wrapper;
