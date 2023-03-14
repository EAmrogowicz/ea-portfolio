import * as React from "react";
import Box from "@mui/material/Box";
import Heading from "../Text/heading";
import SkillSlider from "../ResumeSoftwareSkills/skillSlider";
import * as Icon from "react-bootstrap-icons";

export default function Language() {
  return (
    <Box>
      <Heading text="Language" />
      <SkillSlider name="English" level={90}>
        <Icon.CaretRight className="icon" />
      </SkillSlider>
      <SkillSlider name="Polish" level={100}>
        <Icon.CaretRightFill className="icon" />
      </SkillSlider>
    </Box>
  );
}
