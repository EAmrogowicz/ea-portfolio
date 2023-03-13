import React from "react";
import Hero from "../components/Hero/hero";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import SocialLinks from "../components/Footer/socialLinks";
import Title from "../components/Text/title";
import TitleCaption from "../components/Text/titleCaption";

function Home() {
  return (
    <div>
      <Hero backgroundImage="../public/hero-banner.avif">
        <Title text="Ewelina Amrogowicz" />
        <TitleCaption text="UX / UI Developer" />

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
