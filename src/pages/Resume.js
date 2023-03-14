import Section from "../components/Section/section";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";

import TitleH2 from "../components/Text/titleH2";
import SubTitle from "../components/Text/subtitle";
import Heading from "../components/Text/heading";

import SoftwareSkills from "../components/ResumeSoftwareSkills/softwareSkills";
import Language from "../components/ResumeLanguage/language";
import Experience from "../components/ResumeExperience/experience";

export default function Resume() {
  return (
    <Section>
      <Container fixed>
        <TitleH2 text="Resume" />
        <SubTitle text="My top achievements and experience summary." />

        <Box sx={{ flexGrow: 1, mt: 2 }}>
          <Grid
            container
            spacing={{ xs: 6, md: 12 }}
            columns={{ xs: 2, sm: 2, md: 4, lg: 12 }}
          >
            <Grid xs={4}>
              <SoftwareSkills />
            </Grid>

            <Grid xs={8}>
              <Experience />
            </Grid>

            <Grid xs={4}>
              <Box>
                <Heading text="Design & Personal Skills" />
              </Box>
            </Grid>

            <Grid xs={8}>
              <Box>
                <Heading text="Education" />
              </Box>
            </Grid>

            <Grid xs={4}>
              <Language />
            </Grid>

            <Grid xs={8}>
              <Heading text="Hobby & Interest" />
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Section>
  );
}
