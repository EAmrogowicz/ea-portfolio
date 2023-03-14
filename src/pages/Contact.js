import React from "react";
import TitleH2 from "../components/Text/titleH2";
import SubTitle from "../components/Text/subtitle";
import Hero from "../components/Hero/hero";
import SocialLinks from "../components/Footer/socialLinks";
import Container from "@mui/material/Container";
import ContactForm from "../components/Form/contactForm";

export default function Contact() {
  return (
    <Hero backgroundImage="../public/hero-banner.avif">
      <Container>
        <TitleH2 text="Contact" />
        <SubTitle text="Get in touch with me!" />

        <ContactForm />
      </Container>
      <SocialLinks />
    </Hero>
  );
}
