import { Stack } from "@mui/material";
// import "./section.css";

function Section({ bcolor, children }) {
  return (
    <Stack
      style={{
        height: "100%",
        width: "100%",
        top: 0,
        left: 0,
        background: `${bcolor}`,
        alignItems: "center",
        justifyContent: "center",
        padding: "1rem 1rem 2.4rem 1rem",
        margin: "0",

        color: "white",
        // background: "rgba(29, 37, 42, 0.6)",
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.4)",
        backdropFilter: "blur(4px)",
        border: "1px solid rgba(29, 37, 42, 1)",
      }}
    >
      {children}
    </Stack>
  );
}

export default Section;
