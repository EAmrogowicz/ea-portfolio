import React from "react";
import Hero from "../components/Hero/hero";
import Stack from "@mui/material/Stack";
import SocialLinks from "../components/Footer/socialLinks";
import Title from "../components/Text/title";
import TitleCaption from "../components/Text/titleCaption";
import CustomButton from "../components/Button/button";
import Caption from "../components/Text/caption";

function Home() {
  return (
    <Hero style="hero">
      <div className="heroOverlay">
        <TitleCaption text="UX / UI Designer" />
        <Title text="Ewelina Amrogowicz" top={"1.6rem"} />
        <Caption
          text="I love exploring new designs, methods, and building figma plugins!"
          top={"3.6rem"}
        />

        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={{ xs: 2, sm: 4, md: 8 }}
        >
          <div>
            <CustomButton
              name="Email Me"
              link="mailto:ewelina@amrogowicz.com"
              class="btnLightM btnAccent"
            />
          </div>
          <div>
            <CustomButton
              name="Resume"
              link="https://www.canva.com/design/DAFbUzaKong/i-Ic--PXF2yApyzRGpZgPA/view?utm_content=DAFbUzaKong&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink"
              class="btnLightM"
              target="_blank"
            />
          </div>
        </Stack>
        <SocialLinks style="socialLinksFixed" />
      </div>
    </Hero>
  );
}

export default Home;
