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
        name="name"
        onChange={props.handleInputChange}
        multiline
        variant="filled"
      />
      <TextField
        id="filled-textarea"
        label="Your Email"
        name="email"
        onChange={props.handleInputChange}
        multiline
        variant="filled"
      />
      <TextField
        fullWidth
        label="Your Message"
        id="fullWidth"
        name="message"
        onChange={props.handleInputChange}
        rows={4}
        variant="filled"
        placeholder="Type Here"
      />
      <button
        type="submit"
        onClick={props.handleFormSubmit}
        className="btnSubmit"
      >
        Submit
      </button>
    </Box>
  );
}
