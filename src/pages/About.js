import Hero from "../components/hero";
import Section from "../components/Section/section";
import { Box, Stack } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import CustomButton from "../components/button";
import Subtitle from "../components/Text/subtitle";
import Heading from "../components/Text/heading";
import Paragraph from "../components/Text/paragraph";
import Photo from "../components/photo";
import SkillSet from "../components/SkillSlider/skillSet";

function About() {
  return (
    <Hero photoPath=" https://images.unsplash.com/photo-1535905557558-afc4877a26fc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80">
      <Grid
        container
        spacing={{ xs: 0, md: 8 }}
        columns={{ xs: 4, md: 12 }}
        margin="0"
        style={{ overflowY: "scroll" }}
      >
        <Grid xs={9} padding="0">
          <Section bcolor=" rgba(29, 37, 42, 0.6)">
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
              }}
              padding={{ xs: "none", s: "1rem", md: "2.4rem" }}
            >
              <Subtitle
                text="About Me"
                bottom="1rem"
                top={{ xs: "1.6rem", md: "2.4rem" }}
              />
              <Heading top={"1rem"} text="Hi there, I'm Ewelina!" />
              <Paragraph text="I've always been creative and fascinated by the beauty of art or design. " />

              {/* ELEVATOR PITCH */}
              <Grid
                container
                spacing={{ xs: 0, md: 4 }}
                columns={{ xs: 4, md: 12 }}
                marginBottom={{ xs: "4.8rem", lg: "6.4rem" }}
              >
                <Grid xs={5}>
                  <Photo
                    photo={
                      process.env.PUBLIC_URL + "/ewelinastudio-painting.jpg"
                    }
                    alt="Ewelina in her home studio painting"
                    styleCss="imgRound"
                  />
                </Grid>
                <Grid xs={7} textAlign="left">
                  <Paragraph
                    top={"1.6rem"}
                    text="After finishing my master degree in architecture, I worked as an Architectural Assistant and was able to move up in a few years as fully qualified Architect. I am comfortable simultaneously working on multiple projects under tight deadlines, keeping the broad overview and focusing on the details, while collaborating with designers, technical specialists and clients. Some of my key skills include design thinking, focusing on the visual look and feel, creating storyboards and problem solving."
                  />

                  <Paragraph
                    top={"1rem"}
                    text="I love being challenged to develop better designs and products in a collaborative, research driven and energetic environment. "
                  />
                  <Paragraph
                    top={"1rem"}
                    text="
                    I'm looking forward to enhancing my career in UX/UI Design."
                  />

                  <Stack
                    justifyContent={{ xs: "center", md: "flex-start" }}
                    alignItems="center"
                    direction={{ xs: "column", sm: "column", md: "row" }}
                    spacing={{ xs: 2, md: 2, lg: 8 }}
                    marginTop="3.2rem"
                  >
                    <CustomButton
                      variant="btnAccent"
                      name="Download CV"
                      link="https://www.canva.com/design/DAFbUzaKong/i-Ic--PXF2yApyzRGpZgPA/view?utm_content=DAFbUzaKong&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink"
                      target="_blank"
                    />
                    <CustomButton
                      variant="btn"
                      name="Email Me"
                      link="mailto:ewelina@amrogowicz.com"
                    />
                  </Stack>
                </Grid>
              </Grid>

              {/* MY SKILLSET */}
              <SkillSet />
            </Box>
          </Section>
        </Grid>
        <Grid xs={3}></Grid>
      </Grid>
    </Hero>
  );
}

export default About;
