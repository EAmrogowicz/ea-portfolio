import { Card, CardContent, Typography } from "@mui/material";
import InteractiveList from "./interactiveList";

export default function FrameCard({ children, name, desc, items }) {
  return (
    <Card
      variant="none"
      sx={{
        backgroundColor: "transparent", // Use transparent background
        textAlign: "left",
        height: "100%",
      }}
    >
      <CardContent>
        {children}

        <Typography variant="h6" my="1rem">
          {name}
        </Typography>

        <Typography variant="body2" align="left">
          {desc}
        </Typography>
        {items && <InteractiveList items={items} />}
      </CardContent>
    </Card>
  );
}
