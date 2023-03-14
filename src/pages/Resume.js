import React from "react";
import Section from "../components/Section/section";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";

import TitleH2 from "../components/Text/titleH2";
import SubTitle from "../components/Text/subtitle";

import ProfilePic from "../components/ResumeOverview/resumeOverview";
import SoftwareSkills from "../components/ResumeSoftwareSkills/softwareSkills";
import Language from "../components/ResumeLanguage/language";
import Experience from "../components/ResumeExperience/experience";
import Education from "../components/ResumeEducation/education";
import HobbyList from "../components/ResumeHobby/hobby";

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
            columns={{ xs: 2, sm: 2, md: 4, lg: 12 }}
          >
            <Grid xs={4}>
              <ProfilePic />
            </Grid>

            <Grid xs={8}>
              <Experience />
            </Grid>

            <Grid xs={4}>
              <SoftwareSkills />
            </Grid>

            <Grid xs={8}>
              <Education />
            </Grid>

            <Grid xs={4}>
              <Language />
            </Grid>

            <Grid xs={8}>
              <HobbyList />
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Section>
  );
}
