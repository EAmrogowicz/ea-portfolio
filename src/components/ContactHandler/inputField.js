import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import "./contact.css";

export default function BasicTextFields(props) {
  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 2, minWidth: "45%", maxWidth: "95%" },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField
        id="filled-multiline-flexible"
        label="Your Name"
        multiline
        variant="filled"
      />
      <TextField
        id="filled-textarea"
        label="Your Email"
        multiline
        variant="filled"
      />
      <TextField
        fullWidth
        label="Your Message"
        id="fullWidth"
        rows={4}
        variant="filled"
        placeholder="Type Here"
      />
    </Box>
  );
}
