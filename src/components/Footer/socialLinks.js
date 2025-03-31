import { Stack } from "@mui/material";
import ButtonIcon from "../buttonIcon";
import GitHubIcon from "@mui/icons-material/GitHub";

import LinkedInIcon from "@mui/icons-material/LinkedIn";

function SocialLinks() {
  return (
    <Stack direction="row" spacing={{ xs: 0, md: 2 }} alignItems="flex-end">
      <ButtonIcon
        link="https://github.com/EAmrogowicz"
        target="_blank"
        rel="noopener"
      >
        <GitHubIcon style={{ width: "32", height: "32" }} />
      </ButtonIcon>

      <ButtonIcon
        link="https://www.linkedin.com/in/ewelina-amrogowicz/"
        target="_blank"
        rel="noopener"
      >
        <LinkedInIcon style={{ width: "32", height: "32" }} />
      </ButtonIcon>
    </Stack>
  );
}

export default SocialLinks;
