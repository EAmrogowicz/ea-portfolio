import React from "react";
import Section from "../components/Section/section";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";
import SkillSlider from "../components/Resume/skillSlider";
import * as Icon from "react-bootstrap-icons";
import TitleH2 from "../components/Text/titleH2";
import SubTitle from "../components/Text/subtitle";
import Heading from "../components/Text/heading";

export default function Resume() {
  return (
    <Section>
      <Container fixed>
        <TitleH2 text="Resume" />
        <SubTitle text="My top achievements and experience summary." />

        <Box sx={{ flexGrow: 1, mt: 2 }}>
          <Grid
            container
            spacing={{ xs: 4, md: 8 }}
            columns={{ xs: 2, sm: 8, md: 12 }}
          >
            <Grid xs={4}>
              <Box>
                <Heading text="Software Skills " />
                <SkillSlider name="Photoshop" level={85}>
                  <Icon.FileEarmarkImage className="icon" />
                </SkillSlider>
                <SkillSlider name="Figma" level={60}>
                  <Icon.Easel className="icon" />
                </SkillSlider>
                <SkillSlider name="Html" level={85}>
                  <Icon.FiletypeHtml className="icon" />
                </SkillSlider>
                <SkillSlider name="CSS" level={90}>
                  <Icon.FiletypeCss className="icon" />
                </SkillSlider>
                <SkillSlider name="JavaScript" level={50}>
                  <Icon.FiletypeJs className="icon" />
                </SkillSlider>
                <SkillSlider name="React" level={65}>
                  <Icon.FiletypeJsx className="icon" />
                </SkillSlider>
              </Box>
            </Grid>

            <Grid xs={4}>
              <Box>
                <Heading text="Experience" />
              </Box>
            </Grid>

            <Grid xs={4}>
              <Box>
                <Heading text="Design & Personal Skills" />
              </Box>
            </Grid>

            <Grid xs={4}>
              <Box>
                <Heading text="Language" />
                <SkillSlider name="English" level={90}></SkillSlider>
                <SkillSlider name="Polish" level={100}></SkillSlider>
              </Box>
            </Grid>
            <Grid xs={4}>
              <Box>
                <Heading text="Education" />
              </Box>
            </Grid>
            <Grid xs={4}>
              <Heading text="Hobby & Interest" />
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Section>
  );
}
