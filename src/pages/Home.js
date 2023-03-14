import React from "react";
import Hero from "../components/Hero/hero";
import Stack from "@mui/material/Stack";
import SocialLinks from "../components/Footer/socialLinks";
import Title from "../components/Text/title";
import TitleCaption from "../components/Text/titleCaption";
import CustomButton from "../components/Button/button";

function Home() {
  return (
    <div>
      <Hero backgroundImage="../public/hero-banner.avif">
        <Title text="Ewelina Amrogowicz" />
        <TitleCaption text="UX / UI Developer" />

        <Stack direction="row" spacing={{ xs: 1, sm: 2, md: 4 }}>
          <div>
            <CustomButton name="Contact" link="#" class="btnLight" />
          </div>
          <div>
            <CustomButton name="Portfolio" link="#" class="btnLight" />
          </div>
        </Stack>
        <SocialLinks />
      </Hero>
    </div>
  );
}

export default Home;
