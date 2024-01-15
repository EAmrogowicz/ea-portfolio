import { Box } from "@mui/material";
import Body2 from "../Text/body2";

function Footer() {
  return (
    <Box
      sx={{
        position: "relative",
        bottom: "0rem",
        left: 0,
        right: 0,
        zIndex: 2,
        paddingBottom: "1rem",
      }}
    >
      <Body2 text="Copyright ©2024 by Ewelina.Studio. All right reserved" />
    </Box>
  );
}

export default Footer;
