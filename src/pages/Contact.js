import React from "react";
import TitleH2 from "../components/Text/titleH2";
import SubTitle from "../components/Text/subtitle";
import Hero from "../components/Hero/hero";
import Form from "../components/Form/form";
// import Button from "@mui/material/Button";
// import Stack from "@mui/material/Stack";
import SocialLinks from "../components/Footer/socialLinks";
import Container from "@mui/material/Container";

export default function Contact() {
  return (
    <Hero backgroundImage="../public/hero-banner.avif">
      <Container>
        <TitleH2 text="Contact" />
        <SubTitle text="Get in touch with me!" />
      </Container>
      <SocialLinks />
    </Hero>
  );
}
