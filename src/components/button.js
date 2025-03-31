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
        ...(variant === "primary" && {
          backgroundColor: "primary.main",
          color: "mono.main",
          border: "1px solid",
          "&:hover": {
            backgroundColor: "mono.main",
            color: "primary.main",
          },
        }),
        ...(variant === "secondary" && {
          backgroundColor: "transparent",
          color: "mono.main",
          border: "1px solid",
          "&:hover": {
            backgroundColor: "mono.main",
            color: "primary.main",
          },
        }),
      }}
    >
      {children}
    </Button>
  );
}
