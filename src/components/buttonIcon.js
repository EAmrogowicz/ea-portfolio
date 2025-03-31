import Button from "@mui/material/Button";
import { useTheme } from "@mui/material/styles";

export default function ButtonIcon({ target, link, children }) {
  const theme = useTheme();

  return (
    <Button
      target={target}
      href={link}
      sx={{
        width: "64px",
        height: "64px",
        background: "none",
        padding: "2px", // Ensure padding is only 4px
        "&:hover": {
          background:
            theme.palette.mode === "light"
              ? theme.palette.secondary.tint // Light mode hover color
              : theme.palette.secondary.shade, // Dark mode hover color
          padding: "2px", // Maintain 4px padding on hover
        },
      }}
    >
      {children}
    </Button>
  );
}
