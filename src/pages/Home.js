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
      <Hero style="hero">
        <Title text="Ewelina Amrogowicz" />
        <TitleCaption text="UX / UI Developer" />

        <Stack direction="row" spacing={{ xs: 1, sm: 2, md: 4 }}>
          <div>
            <CustomButton
              name="Email Me"
              link="mailto:contact@ewelina.studio"
              class="btnLightM"
            />
          </div>
          {/* <div>
            <CustomButton
              name="Portfolio"
              link="/ea-portfolio/Portfolio"
              class="btnLightM"
              target="_self"
            />
          </div> */}
        </Stack>
        <SocialLinks style="socialLinksFixed" />
      </Hero>
    </div>
  );
}

export default Home;
