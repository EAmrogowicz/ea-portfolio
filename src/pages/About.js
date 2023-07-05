import React from "react";
import Section from "../components/Section/section";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Photo from "../components/Photo/photo";
import CustomButton from "../components/Button/button";
import TitleH2 from "../components/Text/titleH2";
import SubTitle from "../components/Text/subtitle";
import Paragraph from "../components/Text/paragraph";
import Grid from "@mui/material/Unstable_Grid2";
import MotionPage from "../components/Motion/motionItem";

function About() {
  return (
    <MotionPage>
      <Grid container spacing={{ xs: 0, md: 8 }} columns={{ xs: 4, md: 12 }}>
        <Grid xs={4}>
          <Photo
            photo={process.env.PUBLIC_URL + "/ewelinastudio-painting.jpg"}
            alt="Ewelina in her home studio painting"
            look="imgLg"
          />
        </Grid>
        <Grid xs={8}>
          <Section>
            <Container fixed>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                }}
                padding={{ xs: "none", s: "1rem", md: "2.4rem" }}
              >
                <TitleH2 text="About Me" />
                <SubTitle text="Hi there, I'm Ewelina!" />
                <Paragraph text="I've always been creative and fascinated by the beauty of art or design. After finishing my master degree in architecture, I worked as an Architectural Assistant and was able to move up in a few years as fully qualified Architect. During that time, I was a project leader with responsibility to manage a small team and support a large projects for the major clients. Some of my key skills include design thinking, focusing on the visual look and feel, creating storyboards and problem solving." />
                <Paragraph text="As a dynamic and highly motivated designer with more than 6 years of experience in producing art and design collections as an architect, I'm looking forward to enhancing career in UX/UI Design." />

                <CustomButton
                  name="Download CV"
                  link="https://www.canva.com/design/DAFbUzaKong/i-Ic--PXF2yApyzRGpZgPA/view?utm_content=DAFbUzaKong&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink"
                  class="btnLight"
                  target="_blank"
                />
              </Box>
            </Container>
          </Section>
        </Grid>
      </Grid>
    </MotionPage>
  );
}

export default About;
