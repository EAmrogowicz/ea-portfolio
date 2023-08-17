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
        {items.map((item) => (
          <ListItem
            sx={{
              alignItems: "flex-start",
            }}
          >
            <ListItemIcon width="24px">
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
