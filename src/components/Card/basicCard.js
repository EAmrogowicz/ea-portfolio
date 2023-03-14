import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import "./card.css";

export default function BasicCard(props) {
  return (
    <Card sx={{ width: "100%" }} className="cardStyles">
      {props.data.map((item) => (
        <CardContent className="cardContent">
          <Typography sx={{ fontSize: 14 }} gutterBottom className="cardDate">
            {item.date}
          </Typography>
          <Typography variant="h5" component="div" className="cardTitle">
            {item.title}
          </Typography>
          <Typography sx={{ mb: 1.5 }} className="cardCompany">
            {item.company}
          </Typography>
          <Typography variant="body2" className="cardDesc">
            {item.description}
          </Typography>
        </CardContent>
      ))}
    </Card>
  );
}
