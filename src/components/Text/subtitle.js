import Typography from "@mui/material/Typography";

export default function Subtitle({ text, top, bottom }) {
  return (
    <Typography
      variant="h4"
      sx={{
        marginTop: top,
        marginBottom: bottom,
      }}
    >
      {text}
    </Typography>
  );
}
