import * as React from "react";
import Box from "@mui/material/Box";
import Heading from "../Text/heading";
import Stack from "@mui/material/Stack";

import Card from "./card";
import "./experience.css";

export default function Experience() {
  return (
    <Box sx={{ width: "100%" }}>
      <Heading text="Experience" />
      <Stack
        direction="column"
        spacing={{ xs: 1, sm: 2, md: 4 }}
        justifyContent="flex-start"
        alignItems="flex-start"
      >
        <Card />
      </Stack>
    </Box>
  );
}
