import React from "react";
import Section from "../components/Section/section";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Photo from "../components/Photo/photo";
import CustomButton from "../components/Button/button";
import TitleH2 from "../components/Text/titleH2";
import SubTitle from "../components/Text/subtitle";
import Paragraph from "../components/Text/paragraph";

function About() {
  return (
    <Section>
      <Container fixed>
        <Stack
          direction={{ xs: "column", sm: "row" }}
          sx={{ width: "100%" }}
          spacing={{ xs: 1, sm: 2, md: 4 }}
          justifyContent="center"
          alignItems="center"
        >
          <Box sx={{ display: "flex", flexWrap: "wrap" }}>
            <Photo
              photo={process.env.PUBLIC_URL + "ewelinastudio-painting.jpg"}
              alt="Ewelina in her home studio painting"
            />
          </Box>
          <Box sx={{ display: "flex", flexWrap: "wrap" }}>
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
        </Stack>
      </Container>
    </Section>
  );
}

export default About;
