import React from "react";
import Section from "../components/Section/section";
import Container from "@mui/material/Container";
import { experimentalStyled as styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";
import SkillSlider from "../components/Resume/skillSlider";
import * as Icon from "react-bootstrap-icons";
import Title from "../components/TitleCaption/title";
import SubTitle from "../components/TitleCaption/subtitle";
import Heading from "../components/TitleCaption/subtitle";

import {
  createTheme,
  responsiveFontSizes,
  ThemeProvider,
} from "@mui/material/styles";

import Typography from "@mui/material/Typography";

let theme = createTheme();
theme = responsiveFontSizes(theme);

export default function Resume() {
  return (
    <Section>
      <Container fixed>
        <Title text="Resume" />
        <SubTitle text="My top achievements and experience summary." />

        <Box sx={{ flexGrow: 1, mt: 8 }}>
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 2, sm: 8, md: 12 }}
          >
            <Grid xs={4}>
              <Box>
                <Heading text="Software Skills " />
                <SkillSlider name="Photoshop" level={85}>
                  <Icon.FileEarmarkImage className="icon" />
                </SkillSlider>
              </Box>
            </Grid>

            <Grid xs={4}>
              <Box>
                <ThemeProvider theme={theme}>
                  <Typography variant="h6">Experience</Typography>
                </ThemeProvider>
              </Box>
            </Grid>

            <Grid xs={4}>
              <Box>
                <ThemeProvider theme={theme}>
                  <Typography variant="h6">
                    Design and Personal Skills
                  </Typography>
                </ThemeProvider>
              </Box>
            </Grid>

            <Grid xs={4}>
              <Box>
                <ThemeProvider theme={theme}>
                  <Typography variant="h6">Language</Typography>
                </ThemeProvider>
              </Box>
            </Grid>
            <Grid xs={4}>
              <Box>
                <ThemeProvider theme={theme}>
                  <Typography variant="h6">Education</Typography>
                </ThemeProvider>
              </Box>
            </Grid>
            <Grid xs={4}>
              <ThemeProvider theme={theme}>
                <Typography variant="h6">Hobbies & Interests</Typography>
              </ThemeProvider>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Section>
  );
}
