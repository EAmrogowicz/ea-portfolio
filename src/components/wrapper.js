import { Box } from "@mui/material";

function Wrapper({ children }) {
  // const theme = useTheme();
  return (
    <Box
      style={{
        width: "100%",
        maxWidth: "1240px",
        top: 0,
        left: 0,
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "flex-start", // Align content to the left
        flexDirection: "column",
        padding: "1rem", // Default padding
      }}
    >
      {children}
    </Box>
  );
}

export default Wrapper;
