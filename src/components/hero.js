import { Stack } from "@mui/material";

function Hero({ photoPath, children }) {
  return (
    <Stack
      style={{
        backgroundImage: `url(${photoPath})`,
        height: "calc(100vh - 110px)",
        width: "100%",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",

        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
      }}
    >
      {children}
    </Stack>
  );
}

export default Hero;
