import { React, useState } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

import BasicTextFields from "./inputField";
import "./contact.css";

export default function ContactHandler() {
  // store all contact fields as one object
  const [contactForm, setContactForm] = useState({});

  const handleInputChange = (e) => {
    // Getting the value and name of the input which triggered the change
    const { name, value } = e.target;
    // Update the value in the object
    contactForm[name] = value;
    setContactForm(contactForm);
  };

  // Until we get a backend that can receive messages, we want to just display
  // what user has inputted.
  const handleFormSubmit = (e) => {
    e.preventDefault();
    alert(
      `User ${contactForm.name} at ${contactForm.email} is saying ${contactForm.message}`
    );
  };

  return (
    <Box>
      <Card sx={{ width: "100%" }} className="container">
        <CardContent>
          <BasicTextFields
            handleInputChange={handleInputChange}
            handleFormSubmit={handleFormSubmit}
          />
        </CardContent>
      </Card>
    </Box>
  );
}
