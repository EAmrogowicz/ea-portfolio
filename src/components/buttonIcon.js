import Button from "@mui/material/Button";
import { useTheme } from "@mui/material/styles";

export default function ButtonIcon({ target, link, children }) {
  const theme = useTheme();

  return (
    <Button
      target={target}
      href={link}
      sx={{
        width: "24px",
        height: "24px",
        background: "none",
        "&:hover": {
          color:
            theme.palette.mode === "light"
              ? theme.palette.secondary.tint // Light mode hover color
              : theme.palette.secondary.shade, // Dark mode hover color
        },
      }}
    >
      {children}
    </Button>
  );
}
