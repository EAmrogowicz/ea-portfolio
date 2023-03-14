import React from "react";
import Button from "@mui/material/Button";

import "./button.css";

export default function CustomButton(props) {
  return (
    <Button className={props.class} target={props.target} href={props.link}>
      {props.name}
    </Button>
  );
}
