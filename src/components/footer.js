import { Box } from "@mui/material";
import Wrapper from "./wrapper";
import Body2 from "./Text/body2";

function Footer() {
  return (
    <Box
      sx={{
        position: "relative",
        bottom: "0rem",
        height: "2.4rem",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 2,
      }}
    >
      <Wrapper>
        <Body2 text="Copyright ©2025 by Ewelina.Studio. All right reserved." />
      </Wrapper>
    </Box>
  );
}

export default Footer;
