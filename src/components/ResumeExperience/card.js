import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

import experienceData from "./experienceData.json";
import "./card.css";

export default function BasicCard() {
  return (
    <Card sx={{ width: "100%" }} className="cardStyles">
      {experienceData.map((item) => (
        <CardContent>
          <Typography sx={{ fontSize: 14 }} gutterBottom>
            {item.date}
          </Typography>
          <Typography variant="h5" component="div">
            {item.title}
          </Typography>
          <Typography sx={{ mb: 1.5 }}>{item.company}</Typography>
          <Typography variant="body2">{item.description}</Typography>
        </CardContent>
      ))}
    </Card>
  );
}
