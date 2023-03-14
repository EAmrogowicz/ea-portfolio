import React from "react";
import Section from "../components/Section/section";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import TitleH2 from "../components/Text/titleH2";
import SubTitle from "../components/Text/subtitle";

export default function Contact() {
  return (
    <Section>
      <Container fixed>
        <Stack
          direction="column"
          sx={{ width: "100%" }}
          spacing={{ xs: 1, sm: 2, md: 4 }}
          justifyContent="center"
          alignItems="center"
        >
          <Box>
            <TitleH2 text="Contact" />
            <SubTitle text="Get in touch with me!" />
          </Box>
        </Stack>
      </Container>
    </Section>
  );
}
