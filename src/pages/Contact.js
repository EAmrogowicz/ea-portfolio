import React from "react";
import Hero from "../components/Hero/hero";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import TitleH2 from "../components/Text/titleH2";
import SubTitle from "../components/Text/subtitle";
import ContactHandler from "../components/ContactHandler/contactHandler";

export default function Contact() {
  return (
    <Hero backgroundImage="../public/hero-banner.avif">
      <Container fixed>
        <Stack
          direction="column"
          sx={{ width: "100%" }}
          justifyContent="center"
          alignItems="center"
        >
          <TitleH2 text="Contact" />
          <SubTitle text="Get in touch with me!" />

          <ContactHandler />
        </Stack>
      </Container>
    </Hero>
  );
}
