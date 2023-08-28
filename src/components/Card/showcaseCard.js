import * as React from "react";
import { styled } from "@mui/material/styles";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import {
  Box,
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  CardActions,
  Collapse,
  Typography,
  IconButton,
} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import ButtonIcon from "../buttonIcon";
import GitHubIcon from "@mui/icons-material/GitHub";
import ExploreIcon from "@mui/icons-material/Explore";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Heading from "../Text/heading";
import Paragraph from "../Text/paragraph";

import ShowcaseCardSummary from "./showcaseCardSummary";
import ShowcaseCardRole from "./showcaseCardRole";
import QuiltedImageList from "../Card/imageList";

const theme = createTheme({
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          color: "#D6DCDD",
          background:
            "linear-gradient(rgba(51, 76, 83, 0.4),rgba(29, 37, 42, 0.95) 90%)",
          border: "1px solid #334c53",
          height: "100%",

          span: { fontFamily: "Roboto", color: "white", letterSpacing: 1 },
          button: {
            color: "white",
          },
        },
      },
    },
  },
});

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function ShowcaseCard({ project }) {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <ThemeProvider theme={theme}>
      <Card>
        <Grid container spacing={{ xs: 0, md: 1 }} columns={{ xs: 4, md: 12 }}>
          <Grid xs={8}>
            <CardMedia
              component="img"
              height="320"
              image={project.overview.img}
              alt={project.overview.alt}
            />
          </Grid>

          <Grid xs={4}>
            <CardHeader
              title={project.overview.title}
              subheader={project.overview.subheader}
            />

            <CardContent>
              <Typography variant="body2" marginTop={{ xs: 0, md: 1, lg: 7 }}>
                {project.overview.text}
              </Typography>
            </CardContent>

            <CardActions>
              <ButtonIcon
                aria-label="view code on GitHub"
                link={project.overview.gitHub}
                target="_blank"
                rel="noopener"
              >
                <GitHubIcon />
              </ButtonIcon>
              <ButtonIcon
                aria-label="explore deployed app"
                link={project.overview.preview}
                target="_blank"
                rel="noopener"
              >
                <ExploreIcon />
              </ButtonIcon>
              <ExpandMore
                expand={expanded}
                onClick={handleExpandClick}
                aria-expanded={expanded}
                aria-label="show more"
              >
                <ExpandMoreIcon />
              </ExpandMore>
            </CardActions>
          </Grid>
        </Grid>

        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <ShowcaseCardSummary
              heading={project.summary.heading}
              items={project.summary.text}
            />

            <ShowcaseCardRole
              role={project.role.role}
              roleList={project.role.roleList}
              challenges={project.role.challenges}
              learnings={project.role.learnings}
              learningsList={project.role.learningsList}
            />

            <ShowcaseCardSummary
              heading={project.process.heading}
              items={project.process.text}
            >
              <QuiltedImageList items={project.imageList} />
            </ShowcaseCardSummary>

            <Box>
              <Grid
                sx={{ marginTop: { xs: "2.4rem", md: "3.6rem" } }}
                container
                spacing={{ xs: 1, md: 2 }}
                columns={{ xs: 4, md: 12 }}
              >
                <Grid xs={8}>
                  <Heading text={project.result.heading} />
                  <CardMedia
                    sx={{
                      mx: "-20px",
                      width: "calc(100% + 40px)",
                    }}
                    component="img"
                    height="100%"
                    image={project.result.img}
                    alt={project.result.alt}
                  />
                </Grid>
                <Grid xs={4} sx={{ mt: "12px" }}>
                  <CardContent>
                    {project.result.text.map((item, index) => (
                      <Paragraph text={item} key={index} />
                    ))}
                  </CardContent>

                  <CardActions sx={{ mt: { xs: 0, md: 1, lg: 7 } }}>
                    <ButtonIcon
                      aria-label="view code on GitHub"
                      link={project.overview.gitHub}
                      target="_blank"
                      rel="noopener"
                    >
                      <GitHubIcon />
                    </ButtonIcon>
                    <ButtonIcon
                      aria-label="explore deployed app"
                      link={project.overview.preview}
                      target="_blank"
                      rel="noopener"
                    >
                      <ExploreIcon />
                    </ButtonIcon>
                    <ExpandMore
                      expand={expanded}
                      onClick={handleExpandClick}
                      aria-expanded={expanded}
                      aria-label="show more"
                    >
                      <ExpandMoreIcon />
                    </ExpandMore>
                  </CardActions>
                </Grid>
              </Grid>
            </Box>
          </CardContent>
        </Collapse>
      </Card>
    </ThemeProvider>
  );
}
