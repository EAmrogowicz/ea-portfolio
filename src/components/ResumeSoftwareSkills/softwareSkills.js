import React from "react";
import Box from "@mui/material/Box";
import Heading from "../Text/heading";
import SkillSlider from "../SkillSlider/skillSlider";
import * as Icon from "react-bootstrap-icons";

export default function SoftwareSkills() {
  return (
    <Box>
      <Heading text="Software Skills " />
      <SkillSlider name="Photoshop" level={90}>
        <Icon.FileEarmarkImage className="icon" />
      </SkillSlider>
      <SkillSlider name="Figma" level={55}>
        <Icon.Easel className="icon" />
      </SkillSlider>
      <SkillSlider name="Html" level={85}>
        <Icon.FiletypeHtml className="icon" />
      </SkillSlider>
      <SkillSlider name="CSS" level={90}>
        <Icon.FiletypeCss className="icon" />
      </SkillSlider>
      <SkillSlider name="JavaScript" level={60}>
        <Icon.FiletypeJs className="icon" />
      </SkillSlider>
      <SkillSlider name="React" level={60}>
        <Icon.FiletypeJsx className="icon" />
      </SkillSlider>
    </Box>
  );
}
