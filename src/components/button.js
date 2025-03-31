import Button from "@mui/material/Button";

export default function CustomButton({
  variant = "primary",
  target,
  link,
  children,
}) {
  return (
    <Button
      variant={variant}
      target={target}
      href={link}
      sx={{
        ...(variant === "primary"),
        ...(variant === "secondary"),
      }}
    >
      {children}
    </Button>
  );
}
