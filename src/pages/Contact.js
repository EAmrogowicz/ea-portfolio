import React from "react";
import Section from "../components/Section/section";
import Container from "@mui/material/Container";
import TitleH2 from "../components/Text/titleH2";
import SubTitle from "../components/Text/subtitle";

export default function Contact() {
  return (
    <Section>
      <Container fixed>
        <TitleH2 text="Contact" />
        <SubTitle text="Insight into my projects." />
      </Container>
    </Section>
  );
}
