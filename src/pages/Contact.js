import React from "react";
import Hero from "../components/hero";
import Container from "@mui/material/Container";
import TitleCaption from "../components/Text/titleCaption";
import SocialLinks from "../components/Footer/socialLinks";
import CustomButton from "../components/button";
import MotionPage from "../components/Motion/motionItem";

export default function Contact() {
  return (
    <MotionPage>
      <Hero style="hero">
        <div className="heroOverlay">
          <Container fixed>
            {/* <Stack
            direction="column"
            sx={{ width: "100%" }}
            justifyContent="center"
            alignItems="center"
            mb={8}
          >
            <TitleH2 text="Contact" />
            <SubTitle text="If you have any question, please do not hesitate to send me a message:" />

            <ContactHandler />
          </Stack> */}
            <TitleCaption text="Connect with me!" />
            <CustomButton
              name="Email Me"
              link="mailto:ewelina@amrogowicz.com"
              class="btnLightM"
            />
            <SocialLinks style="socialLinks" />
          </Container>
        </div>
      </Hero>
    </MotionPage>
  );
}
