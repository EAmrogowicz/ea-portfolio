import React from "react";
import Section from "../components/Section/section";
import Container from "@mui/material/Container";
import { experimentalStyled as styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";
import Stack from "@mui/material/Stack";
import Slider from "@mui/material/Slider";
import * as Icon from "react-bootstrap-icons";

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
        <ThemeProvider theme={theme}>
          <Typography variant="h1">Resume</Typography>
          <Typography variant="h5">
            My top achievements and experience summary.
          </Typography>
        </ThemeProvider>

        <Box sx={{ flexGrow: 1, mt: 8 }}>
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 2, sm: 8, md: 12 }}
          >
            <Grid xs={4}>
              <Box>
                <ThemeProvider theme={theme}>
                  <Typography variant="h6">Software Skills</Typography>
                </ThemeProvider>
                <Stack
                  direction={{ xs: "column", sm: "row" }}
                  sx={{ width: "100%" }}
                  spacing={{ xs: 1, sm: 2, md: 4 }}
                  justifyContent="flex-start"
                  alignItems="center"
                >
                  <Icon.FileEarmarkImage className="icon" />
                  <p className="desc">Photoshop</p>
                  <Slider
                    defaultValue={50}
                    aria-label="Default"
                    valueLabelDisplay="auto"
                  />
                </Stack>
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
