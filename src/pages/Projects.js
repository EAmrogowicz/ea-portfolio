import Section from "../components/Section/section";
import Container from "@mui/material/Container";
import Subtitle from "../components/Text/subtitle";
import Heading from "../components/Text/heading";
import { Stack } from "@mui/material";

import ShowcaseCard from "../components/Card/showcaseCard";
import { nichiData } from "../components/Data/nichiData";
import { portfolioData } from "../components/Data/portfolioData";
import { marvelData } from "../components/Data/marvelData";

export default function Projects() {
  return (
    <Section>
      <Container fixed>
        <Subtitle text="Projects" top={{ xs: "1.6rem", md: "2.4rem" }} />
        <Heading text="Insight into my latest projects!" />

        <Stack
          direction="column"
          spacing={{ xs: 2, md: 4 }}
          justifyContent="center"
          alignItems="center"
          mt={4}
        >
          <ShowcaseCard project={nichiData}></ShowcaseCard>

          <ShowcaseCard project={portfolioData}></ShowcaseCard>

          <ShowcaseCard project={marvelData}></ShowcaseCard>
        </Stack>

        {/* <ImageList sx={{ width: "100%", height: "100%" }} gap={8}></ImageList> */}
      </Container>
    </Section>
  );
}
