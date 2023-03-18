import React, { useState } from "react";
// Here we import a helper function that will check if the email is valid
import { validateEmail } from "./validate";
import TextField from "@mui/material/TextField";
import ResponsiveDialog from "../Modal/modal";

import "./contact.css";

function Form() {
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [message, setMessage] = useState("");

  const handleInputChange = (e) => {
    // Getting the value and name of the input which triggered the change
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    // Based on the input type, we set the state of either email, username, and password
    if (inputType === "email") {
      setEmail(inputValue);
    } else if (inputType === "firstName") {
      setFirstName(inputValue);
    } else {
      setMessage(inputValue);
    }
  };

  const handleFormSubmit = (e) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    e.preventDefault();

    // First we check to see if the email is not valid or if the userName is empty. If so we set an error message to be displayed on the page.
    if (!validateEmail(email)) {
      setErrorMessage("Email is invalid");
      // We want to exit out of this code block if something is wrong so that the user can correct it
      return;
    } else {
      setErrorMessage("");
    }

    // Alert the user their first and last name, clear the inputs
    alert(`${firstName}, many thanks for your message`);
    // <ResponsiveDialog
    //   open={open}
    //   alertMessage="Many thanks for your message"
    // />;
    setFirstName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div>
      {errorMessage && (
        <div>
          <p className="error-text">{errorMessage}</p>
        </div>
      )}
      <form className="form">
        <TextField
          className="inputField"
          id="filled-basic"
          label="Name"
          variant="filled"
          size="small"
          value={firstName}
          name="firstName"
          onChange={handleInputChange}
          type="text"
          placeholder="First Name"
        />
        <TextField
          className="inputField"
          id="filled-basic"
          label="Email"
          variant="filled"
          size="small"
          value={email}
          name="email"
          //
          required
          //error={validateEmail}
          // helperText={validateEmail ? "Email is not correct" : ""}
          //
          onChange={handleInputChange}
          type="text"
          placeholder="Your Email"
        />

        <TextField
          className="inputField"
          id="filled-basic"
          label="Message"
          variant="filled"
          size="small"
          multiline
          rows={4}
          value={message}
          name="message"
          onChange={handleInputChange}
          type="text"
          placeholder="Type your message here"
        />

        <button type="submit" onClick={handleFormSubmit} className="btnSubmit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Form;
