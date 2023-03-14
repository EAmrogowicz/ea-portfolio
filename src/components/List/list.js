import * as React from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

import "./list.css";

export default function BasicList(props) {
  return (
    <Box sx={{ width: "100%", bgcolor: "transparent" }}>
      <Stack
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={2}
        sx={{ flexWrap: "wrap", gap: 1 }}
      >
        {props.data.map((item) => (
          <Typography
            sx={{ fontSize: 14, color: "#1d252a" }}
            gutterBottom
            className="listText"
          >
            {item.item}
          </Typography>
        ))}
      </Stack>
    </Box>
  );
}
