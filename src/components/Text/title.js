import Typography from "@mui/material/Typography";

export default function Title({ text, top, bottom }) {
  return (
    <Typography variant="h1" marginTop={top} marginBottom={bottom}>
      {text}
    </Typography>
  );
}
