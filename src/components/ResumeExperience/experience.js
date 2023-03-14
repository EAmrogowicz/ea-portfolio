import * as React from "react";
import Box from "@mui/material/Box";
import Heading from "../Text/heading";

import Card from "./basicCard";

export default function Experience() {
  return (
    <Box sx={{ width: "100%" }}>
      <Heading text="Experience" />
      <Card />
    </Box>
  );
}
