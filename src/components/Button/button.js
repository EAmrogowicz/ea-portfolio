import React from "react";
import Button from "@mui/material/Button";
import { StyledEngineProvider } from "@mui/material/styles";
import "./button.css";

export default function CustomButton(props) {
  return (
    <StyledEngineProvider injectFirst>
      <Button
        className={props.class}
        variant="outlined"
        target="_blank"
        href={props.link}
      >
        {props.name}
      </Button>
    </StyledEngineProvider>
  );
}
