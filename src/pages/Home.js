import React from "react";
import Hero from "../components/Hero/hero";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import SocialLinks from "../components/Footer/socialLinks";

import {
  createTheme,
  responsiveFontSizes,
  ThemeProvider,
} from "@mui/material/styles";
import Typography from "@mui/material/Typography";

let theme = createTheme();
theme = responsiveFontSizes(theme);

function Home() {
  return (
    <div>
      <Hero backgroundImage="../public/hero-banner.avif">
        <ThemeProvider theme={theme}>
          <Typography variant="h1">Ewelina Amrogowicz</Typography>
          <Typography variant="h4">UX / UI Developer</Typography>
        </ThemeProvider>

        <Stack direction="row" spacing={{ xs: 1, sm: 2, md: 4 }}>
          <Button className="btn" variant="outlined" href="#">
            Contact
          </Button>
          <Button className="btn" variant="outlined" href="#">
            Portfolio
          </Button>
        </Stack>
        <SocialLinks />
      </Hero>
    </div>
  );
}

export default Home;
