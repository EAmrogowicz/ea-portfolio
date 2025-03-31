import Typography from "@mui/material/Typography";

export default function Heading({ text, top, bottom, align }) {
  return (
    <Typography
      variant="h5"
      marginTop={top}
      marginBottom={bottom}
      textAlign={align}
    >
      {text}
    </Typography>
  );
}
