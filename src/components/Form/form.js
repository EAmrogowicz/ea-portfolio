import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Box from "@mui/material/Box";
import { Button, CardActionArea, CardActions } from "@mui/material";
import { styled } from "@mui/material/styles";
import TextField from "@mui/material/TextField";

import "./form.css";

const CssTextField = styled(TextField)({
  "& label.Mui-focused": {
    color: "#d6dcdd",
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "#d6dcdd",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "#d6dcdd",
    },
    "&:hover fieldset": {
      borderColor: "#ce9334",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#ce9334",
    },
  },
});

export default function MultiActionAreaCard() {
  return (
    <Card sx={{ width: "100%", my: 8 }} className="cardBox">
      <CardActionArea>
        <CardContent className="cardContent">
          <Box sx={{ display: "flex", flexWrap: "wrap" }}>
            <div>
              <CssTextField
                id="outlined-basic"
                label="Name"
                variant="outlined"
                sx={{ m: 1, width: "45%" }}
                color="warning"
              />
              <CssTextField
                id="outlined-basic"
                label="Email"
                variant="outlined"
                sx={{ m: 1, width: "45%" }}
                className="field"
              />
              <CssTextField
                id="outlined-basic"
                label="Message"
                variant="outlined"
                multiline
                rows={4}
                sx={{ m: 1, width: "93%" }}
                className="field"
              />
            </div>
          </Box>
        </CardContent>

        <CardActions className="cardContent">
          <Button className="btnSend">Send Message</Button>
        </CardActions>
      </CardActionArea>
    </Card>
  );
}
