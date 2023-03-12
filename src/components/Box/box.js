import React from "react";
import Box from "@mui/material/Box";
import "./box.css";

function BoxContainer(props) {
  return (
    <Box className="alignment" sx={{ width: "100%", height: "100%" }}>
      {props.children}
    </Box>
  );
}

export default BoxContainer;
