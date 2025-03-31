import Typography from "@mui/material/Typography";

export default function Body2({ text, top, bottom }) {
  return (
    <Typography variant="body2" marginTop={top} marginBottom={bottom}>
      {text}
    </Typography>
  );
}
