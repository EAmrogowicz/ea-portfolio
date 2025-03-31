import { Box } from "@mui/material";

function HeroBox({ mode, children }) {
  return (
    <Box
      style={{
        height: "calc(100vh - 110px)",
        width: "100%",
        top: 0,
        left: 0,
        // background:
        //   "linear-gradient(to left top, rgb(29, 37, 42, 0.5),rgb(29, 37, 42, 1))",
        background: {
          ...(mode === "light"
            ? {
                default: "#fff",
                paper: "#fff",
              }
            : {
                background:
                  "linear-gradient(to left top, rgb(29, 37, 42, 0.5),rgb(29, 37, 42, 1))",
              }),
        },

        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        padding: "1rem",
        overflowY: "scroll",
      }}
    >
      {children}
    </Box>
  );
}

export default HeroBox;
