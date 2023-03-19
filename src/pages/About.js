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

function About() {
  return (
    <Grid container spacing={{ xs: 4, md: 8 }} columns={{ xs: 4, md: 12 }}>
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
                flexWrap: "wrap",
                backgroundColor: "#1d252a",
                py: 4,
                px: 8,
              }}
            >
              <TitleH2 text="About Me" />
              <SubTitle
                text="Predominantly a landscape painter, Ewelina Amrogowicz is a
                Polish artist currently living in London."
              />
              <Paragraph
                text="Ewelina's focus on the natural world is stimulated by her passion
              for the environment and an interest in escapism. She dedicates
              herself to different topics and motives, but remain true to the
              photorealistic painting style. Currently expand her creative side
              in Web Development."
              />

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
  );
}

export default About;
