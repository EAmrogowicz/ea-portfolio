import * as React from "react";

import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import LabelImportantIcon from "@mui/icons-material/LabelImportant";

export default function InteractiveList({ items }) {
  return (
    <Box sx={{ flexGrow: 1, maxWidth: "100%" }}>
      <List>
        {items.map((item, index) => (
          <ListItem
            sx={{
              alignItems: "flex-start",
              fontSize: "14px",
              color: " #d6dcdd",
              marginLeft: 0,
            }}
            key={index}
          >
            <ListItemIcon sx={{ minWidth: "36px" }}>
              <LabelImportantIcon
                sx={{
                  color: "white",
                  marginTop: "4px",
                }}
              />
            </ListItemIcon>
            {item}
          </ListItem>
        ))}
      </List>
    </Box>
  );
}
