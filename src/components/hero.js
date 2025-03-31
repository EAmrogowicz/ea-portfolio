import { Stack } from "@mui/material";

function Hero({ photoPath, children }) {
  return (
    <Stack
      sx={{
        backgroundImage: `url(${photoPath})`,
        height: "calc(100vh - 110px)",
        width: "100%",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",

        justifyContent: "center",
        alignItems: "center",
        textAlign: "left",
      }}
    >
      {children}
    </Stack>
  );
}

export default Hero;
