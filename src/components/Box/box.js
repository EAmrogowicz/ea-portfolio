import React from "react";
import Box from "@mui/material/Box";
import "./box.css";

function BoxContainer(props) {
  return (
    <Box className="alignment" sx={{ display: "flex", flexWrap: "wrap" }}>
      {props.children}
    </Box>
  );
}

export default BoxContainer;
