import * as React from "react";
import Section from "../components/Section/section";
import Container from "@mui/material/Container";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import * as Icon from "react-bootstrap-icons";
import portfolioData from "../components/portfolioData.json";
import TitleCaption from "../components/Text/titleCaption";
import SubTitle from "../components/Text/subtitle";
import Grid from "@mui/material/Unstable_Grid2";

import ShowcaseCard from "../components/Card/showcaseCard";

export default function Projects() {
  return (
    <Section>
      <Container fixed>
        <TitleCaption text="Projects" top={{ xs: "1.6rem", md: "2.4rem" }} />
        <SubTitle text="Insight into my latest projects!" />

        <Grid
          container
          spacing={{ xs: 1, md: 2 }}
          columns={{ xs: 4, md: 12 }}
          mt={4}
        >
          <Grid>
            <ShowcaseCard></ShowcaseCard>{" "}
          </Grid>
          {/* {portfolioData.map((item) => (
            <Grid xs={6}>
              <ImageListItem key={item.img}>
                <img
                  src={item.img}
                  srcSet={item.img}
                  alt={item.title}
                  loading="lazy"
                />
                <ImageListItemBar
                  className="subtitle"
                  title={item.title}
                  actionIcon={
                    <IconButton sx={{ color: "rgba(255, 255, 255, 0.54)" }}>
                      <Button
                        className="link"
                        href={`${item.deployed}`}
                        target="_blank"
                        rel="noopener"
                      >
                        <Icon.EyeFill />
                      </Button>

                      <Button
                        className="link"
                        href={`${item.gitHub}`}
                        target="_blank"
                        rel="noopener"
                      >
                        <Icon.Github />
                      </Button>
                    </IconButton>
                  }
                />
              </ImageListItem>
            </Grid>
          ))} */}
        </Grid>

        {/* <ImageList sx={{ width: "100%", height: "100%" }} gap={8}></ImageList> */}
      </Container>
    </Section>
  );
}
