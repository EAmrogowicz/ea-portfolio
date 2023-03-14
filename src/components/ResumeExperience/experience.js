import React from "react";
import Box from "@mui/material/Box";
import Heading from "../Text/heading";
import Card from "../Card/basicCard";
import experienceData from "./experienceData.json";

export default function Experience() {
  return (
    <Box sx={{ width: "100%" }}>
      <Heading text="Experience" />
      <Card data={experienceData} />
    </Box>
  );
}
