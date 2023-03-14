import React from "react";
import Button from "@mui/material/Button";

import "./button.css";

export default function CustomButton(props) {
  return (
    <Button
      className={props.class}
      variant="outlined"
      target="_blank"
      href={props.link}
    >
      {props.name}
    </Button>
  );
}
