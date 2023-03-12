import React from "react";
import Container from "../components/Container/container";
import Grid from "@mui/material/Unstable_Grid2";
import Box from "@mui/material/Box";
import photo from "../hero-banner.avif";

function About() {
  return (
    <Container>
      <Box sx={{ width: "100%" }}>
        <Grid container rowSpacing={1}>
          <Grid xs={6}>
            <h1>About</h1>
            <h3>
              Predominantly a landscape painter, Ewelina Amrogowicz is a Polish
              artist currently living in London.
            </h3>
            <p>
              Ewelina's focus on the natural world is stimulated by her passion
              for the environment and an interest in escapism. She dedicates
              herself to different topics and motives, but remain true to the
              photorealistic painting style. Currently expand her creative side
              in Web Development.
            </p>
          </Grid>
          <Grid xs={6}>
            <img src={logo} alt="Logo" />;
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}

export default About;
