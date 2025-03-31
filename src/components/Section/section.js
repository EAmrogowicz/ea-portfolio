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
      }}
    >
      {children}
    </Stack>
  );
}

export default Section;
