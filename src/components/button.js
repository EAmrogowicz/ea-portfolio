import Button from "@mui/material/Button";

export default function CustomButton({ target, link, children }) {
  return (
    <Button target={target} href={link}>
      {children}
    </Button>
  );
}
