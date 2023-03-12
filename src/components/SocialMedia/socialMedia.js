import * as React from "react";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import * as Icon from "react-bootstrap-icons";
import "./socialMedia.css";

function SocialMediaLink() {
  return (
    <div className="socialLinks">
      <Stack direction="row" spacing={-2}>
        <Button
          className="contactLink"
          variant="primary"
          href="https://github.com/EAmrogowicz"
          target="_blank"
          rel="noopener"
        >
          <Icon.Github className="contactLink" />
        </Button>
        <Button
          className="contactLink"
          variant="primary"
          href="https://www.linkedin.com/in/ewelina-amrogowicz/"
          target="_blank"
          rel="noopener"
        >
          <Icon.Linkedin className="contactLink" />
        </Button>
        <Button
          className="contactLink"
          variant="primary"
          href="https://www.instagram.com/ewelinastudio/"
          target="_blank"
          rel="noopener"
        >
          <Icon.Instagram className="contactLink" />
        </Button>
      </Stack>
    </div>
  );
}

export default SocialMediaLink;
