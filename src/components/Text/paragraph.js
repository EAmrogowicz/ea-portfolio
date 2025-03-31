import Typography from "@mui/material/Typography";

export default function Paragraph({ text, top, bottom }) {
  return (
    <Typography variant="subtitle1" marginTop={top} marginBottom={bottom}>
      {text}
    </Typography>
  );
}
