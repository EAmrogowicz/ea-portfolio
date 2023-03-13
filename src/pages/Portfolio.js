import * as React from "react";
import Section from "../components/Section/section";
import Container from "@mui/material/Container";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import * as Icon from "react-bootstrap-icons";
import portfolioData from "../components/portfolioData.json";
import TitleH2 from "../components/Text/titleH2";
import SubTitle from "../components/Text/subtitle";

export default function Portfolio() {
  return (
    <Section>
      <Container fixed>
        <TitleH2 text="Portfolio" />
        <SubTitle text="Insight into my projects." />

        <ImageList sx={{ width: "100%", height: "100%" }} gap={8}>
          {portfolioData.map((item) => (
            <ImageListItem key={item.img}>
              <img
                src={process.env.PUBLIC_URL + `${item.img}`}
                srcSet={`${item.img}`}
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
          ))}
        </ImageList>
      </Container>
    </Section>
  );
}
