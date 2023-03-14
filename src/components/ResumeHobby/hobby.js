import * as React from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import * as Icon from "react-bootstrap-icons";

import Heading from "../Text/heading";
import Typography from "@mui/material/Typography";

import "./hobby.css";

export default function HobbyList(props) {
  return (
    <Box sx={{ width: "100%", bgcolor: "transparent" }}>
      <Heading text="Hobby & Interest" />
      <Stack
        direction="row"
        justifyContent="center"
        alignItems="flex-start"
        spacing={2}
        sx={{ flexWrap: "wrap", gap: 1 }}
      >
        <Box className="hobbyBox">
          <Icon.Palette className="hobbyIcons" />
          <Typography sx={{ my: 1 }}>painting</Typography>
        </Box>

        <Box className="hobbyBox">
          <Icon.CarFront className="hobbyIcons" />
          <Typography sx={{ my: 1 }}>
            travel and explore new places with my dog
          </Typography>
        </Box>

        <Box className="hobbyBox">
          <Icon.Book className="hobbyIcons" />
          <Typography sx={{ my: 1 }}>read a new fantasy book</Typography>
        </Box>

        <Box className="hobbyBox">
          <Icon.Film className="hobbyIcons" />
          <Typography sx={{ my: 1 }}>watch movies</Typography>
        </Box>
      </Stack>
    </Box>
  );
}
