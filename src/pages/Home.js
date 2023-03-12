import React from "react";
import Hero from "../components/Hero/hero";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import SocialMediaLink from "../components/SocialMedia/socialMedia";

function Home() {
  return (
    <div>
      <Hero backgroundImage="../public/hero-banner.avif">
        <h1>Ewelina Amrogowicz</h1>
        <h2>UX / UI Developer</h2>
        <Stack direction="row" spacing={4}>
          <Button className="btn" variant="outlined" href="#">
            Contact
          </Button>
          <Button className="btn" variant="outlined" href="#">
            Portfolio
          </Button>
        </Stack>
        <SocialMediaLink />
      </Hero>
    </div>
  );
}

export default Home;
