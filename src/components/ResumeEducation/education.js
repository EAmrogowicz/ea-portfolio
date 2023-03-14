import * as React from "react";
import Box from "@mui/material/Box";
import Heading from "../Text/heading";

import Card from "../Card/basicCard";
import educationData from "./educationData.json";

export default function Education() {
  return (
    <Box sx={{ width: "100%" }}>
      <Heading text="Education" />
      <Card data={educationData} />
    </Box>
  );
}
