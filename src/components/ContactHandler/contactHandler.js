import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CustomButton from "../Button/button";
import BasicTextFields from "./inputField";
import "./contact.css";

export default function ContactHandler() {
  return (
    <Box>
      <Card sx={{ width: "100%" }} className="container">
        <CardContent>
          <BasicTextFields />
        </CardContent>
        <CardActions>
          <CustomButton name="Send Message" class="btnDark" />
        </CardActions>
      </Card>
    </Box>
  );
}
