import React from "react";
import Stack from "@mui/material/Stack";
import Slider from "@mui/material/Slider";

import "./skillSlider.css";

export default function SkillSlider(props) {
  return (
    <Stack
      direction={{ xs: "column", sm: "row" }}
      sx={{ width: "100%", mt: 1 }}
      spacing={{ xs: 1, sm: 2, md: 4 }}
      justifyContent="flex-start"
      alignItems="center"
    >
      {props.children}
      <p className="desc">{props.name}</p>
      <Slider
        size="small"
        defaultValue={props.level}
        aria-label="Default"
        valueLabelDisplay="auto"
        className="slider"
      />
    </Stack>
  );
}
