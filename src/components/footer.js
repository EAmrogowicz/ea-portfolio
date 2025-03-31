import { Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import Wrapper from "./wrapper";
import Body2 from "./Text/body2";
import SocialLinks from "./Footer/socialLinks";

function Footer() {
  const theme = useTheme();

  return (
    <Box
      sx={{
        position: "relative",
        bottom: "0rem",
        height: "auto",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 2,
        borderTop: `1px solid ${
          theme.palette.mode === "light"
            ? theme.palette.mono.main
            : theme.palette.secondary.tint
        }`, // Dynamically set border color
      }}
    >
      <Wrapper>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
          }}
        >
          <Body2 text="Copyright ©2025 by Ewelina.Studio. All right reserved." />
          <SocialLinks />
        </Box>
      </Wrapper>
    </Box>
  );
}

export default Footer;
