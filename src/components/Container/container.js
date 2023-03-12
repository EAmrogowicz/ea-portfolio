import React from "react";
import Container from "@mui/material/Container";
import "./container.css";

function Row(props) {
  return (
    <Container fixed className="container">
      {props.children}
    </Container>
  );
}

export default Row;
