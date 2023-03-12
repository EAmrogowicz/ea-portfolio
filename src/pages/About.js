import React from "react";
import Container from "../components/Container/container";
import Box from "../components/Box/box";
import Grid from "@mui/material/Unstable_Grid2";

import Photo from "../components/PhotoBackground/photo";

function About() {
  return (
    <Container>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={6}>
          <Box>
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
          </Box>
        </Grid>
        <Grid xs={6}>
          <Photo
            photo={process.env.PUBLIC_URL + "ewelinastudio-painting.jpg"}
            alt="Ewelina"
          />
        </Grid>
      </Grid>
    </Container>
  );
}

export default About;
