import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

// import BasicTextFields from "./inputField";
import Form from "./form";

export default function ContactHandler() {
  return (
    <Box>
      <Card sx={{ width: "100%" }} className="container">
        <CardContent>
          <Form />
        </CardContent>
      </Card>
    </Box>
  );
}
