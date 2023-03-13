import React from "react";
import Stack from "@mui/material/Stack";
import Slider from "@mui/material/Slider";

export default function SkillSlider(props) {
  return (
    <Stack
      direction={{ xs: "column", sm: "row" }}
      sx={{ width: "100%" }}
      spacing={{ xs: 1, sm: 2, md: 4 }}
      justifyContent="flex-start"
      alignItems="center"
    >
      {props.children}
      <p className="desc">{props.name}</p>
      <Slider
        defaultValue={props.level}
        aria-label="Default"
        valueLabelDisplay="auto"
      />
    </Stack>
  );
}
