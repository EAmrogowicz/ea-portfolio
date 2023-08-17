import * as React from "react";
import { styled } from "@mui/material/styles";
import {
  Box,
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  CardActions,
  Stack,
  Collapse,
  Typography,
  IconButton,
} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import ButtonIcon from "../buttonIcon";
import GitHubIcon from "@mui/icons-material/GitHub";
import ExploreIcon from "@mui/icons-material/Explore";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Heading from "../Text/heading";
import Paragraph from "../Text/paragraph";
import FrameCard from "./frameCard";
import BeenhereSharpIcon from "@mui/icons-material/BeenhereSharp";
import AssignmentLateSharpIcon from "@mui/icons-material/AssignmentLateSharp";
import LightbulbSharpIcon from "@mui/icons-material/LightbulbSharp";
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

export default function ShowcaseCard() {
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
              image="https://images.unsplash.com/photo-1601779144625-d149a6214af7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80"
              alt="meditation - stacked rocks on a beach"
            />
          </Grid>

          <Grid
            xs={4}
            justifyContent="flex-end"
            alignItems="flex-end"
            alignContent="flex-end"
          >
            <CardHeader
              title="Nichi - Energise Your Mind"
              subheader="React, 2023"
            />

            <CardContent>
              <Typography variant="body2" marginTop={{ xs: 0, md: 1, lg: 7 }}>
                ‘Nichi’ is for those who wish to take a preemptive approach to
                their mental health by facilitating increased self-awareness and
                change of habit.
              </Typography>
            </CardContent>

            <CardActions>
              <ButtonIcon
                aria-label="view code on GitHub"
                link="https://github.com/EAmrogowicz/nichi-energiseYourMind-react"
                target="_blank"
                rel="noopener"
              >
                <GitHubIcon />
              </ButtonIcon>
              <ButtonIcon
                aria-label="explore deployed app"
                link="https://nichi-energiseyourmind.netlify.app/"
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
            <Stack
              direction="column"
              justifyContent="space-evenly"
              alignItems="center"
              maxWidth="800px"
              sx={{
                textAlign: "center",
                marginTop: "1.6rem",
                mx: "auto",
              }}
            >
              <Heading top="1rem" bottom="1rem" text="EXPLORE THE APP" />
              <Paragraph
                text="A mood quantification app that enables users to log their moods and daily activities so that they can identify if a relationship exists between what they do and how they feel. It provides a means to meditate and introduce positive changes and habits into their lives. 
                
               "
              />
              <Paragraph
                bottom="1rem"
                text="Prompt user for a name and present choices: mood/ meditation/ activity. Generate unique connection between mood and meditation components. Store Information."
              />
              <Paragraph
                bottom="0.2rem"
                text="This project is part of the Frontend Web Development BootCamp course challenge."
              />
            </Stack>

            <Box
              sx={{
                backgroundImage: `url(https://images.unsplash.com/photo-1472173148041-00294f0814a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80)`,

                width: "calc(100%+ 40px)",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundAttachment: "fixed",
                my: "2.4rem",
                mx: "-20px",
                px: "20px",
              }}
            >
              <Box
                sx={{
                  width: "calc(100%+ 40px)",
                  mx: "-20px",
                  px: "20px",
                  py: "2.4rem",
                  background:
                    "linear-gradient(to top,  rgba(0,0,0,0.8) , rgba(29, 37, 42, 0.8))",
                }}
              >
                <Grid
                  container
                  columns={{ xs: 3, md: 12 }}
                  spacing={1}
                  sx={{
                    mx: "auto",
                  }}
                >
                  <Grid xs={4}>
                    <FrameCard
                      name="My Role"
                      desc="I was responsible for look and feel of the product. The current visual design is based on the foundation I’ve built. My responsibilities included:"
                      items={[
                        "Planning UX activities and promoting UX best practices within the team;",
                        "Establishing visual language & design system;",
                        "Delivering designs for desktop, mobile, industrial touch screens and paper.",
                      ]}
                    >
                      <BeenhereSharpIcon
                        sx={{
                          width: "44px",
                          height: "44px",
                          color: "#ce9334",
                          backgroundColor: "#1D252A",
                          // border: "0.4px solid white",
                          borderRadius: "50%",
                          padding: "8px",
                        }}
                      />
                    </FrameCard>
                  </Grid>
                  <Grid xs={4}>
                    <FrameCard
                      name="Challenges"
                      desc="Time management - it was my first time designing such a large, complex project from scratch and we had only 1.5 week to do it. Other challenges include navigation through complexity of nested document Syntax and working for the first time with MUI. On the other hand, collaborating with a three people team allow me to established a process, which lead to improvement."
                      items={[]}
                    >
                      <AssignmentLateSharpIcon
                        sx={{
                          width: "44px",
                          height: "44px",
                          color: "#ce9334",
                          backgroundColor: "#1D252A",
                          // border: "0.4px solid white",
                          borderRadius: "50%",
                          padding: "8px",
                        }}
                      />
                    </FrameCard>
                  </Grid>
                  <Grid xs={4}>
                    <FrameCard
                      name="Key Learnings"
                      items={[
                        "Importance of establishing design culture. While working on Nichi, establishing a solid design foundation and promoting UX best practices helped the team move forward while maintaining high quality.",
                        "Co-creation is my new favourite way of working. Bringing other people into the process and getting feedback from team members helped us innovate and challenge app functionality.",
                        "Persistence is the key to success. Being persistent in showing the team the value of early feedback helped me establish a testing culture and iterate faster.",
                      ]}
                    >
                      <LightbulbSharpIcon
                        sx={{
                          width: "44px",
                          height: "44px",
                          color: "#ce9334",
                          backgroundColor: "#1D252A",
                          // border: "0.4px solid white",
                          borderRadius: "50%",
                          padding: "8px",
                        }}
                      />
                    </FrameCard>
                  </Grid>
                  {/* <Grid xs={3}>
                    <FrameCard
                      name="Future Development"
                      desc="A mood quantification app that enables users to log their moods and daily activities so that they can identify if a relationship exists between what they do and how they feel. It provides a means to meditate and introduce positive changes and habits into their lives. "
                    >
                      <UpdateSharpIcon
                        sx={{
                          width: "44px",
                          height: "44px",
                          color: "#ce9334",
                          backgroundColor: "#1D252A",
                          // border: "0.4px solid white",
                          borderRadius: "50%",
                          padding: "8px",
                        }}
                      />
                    </FrameCard>
                  </Grid> */}
                </Grid>
              </Box>
            </Box>

            <Stack
              direction="column"
              justifyContent="space-evenly"
              alignItems="center"
              sx={{
                textAlign: "center",
                marginTop: "4.8rem",
                width: "calc(100%+ 40px)",
                mx: "-40px",
                px: "20px",
              }}
            >
              <Box maxWidth="800px" sx={{ px: "1rem" }}>
                <Heading text="Process:" />
                <Paragraph text="As a small team of 3, we started by planning the minimum app requirements and roughly mapping the wireframe and agreeing on ecosystem. Based on these key settings I created a low fidelity concept design in Figma, which inluded also a design and styles principles.  " />
                <Paragraph text="As processes were developed and carried out, we focused on improving the end-to-end experience. We conducted multiple rounds of user testing, mapped various components to improve day to day app functionality and usability." />
              </Box>
              <QuiltedImageList />
            </Stack>

            <Grid
              marginTop="4.8rem"
              container
              spacing={{ xs: 0, md: 1 }}
              columns={{ xs: 4, md: 12 }}
            >
              <Grid xs={6}>
                <Heading text="Result:" />

                <CardContent>
                  <Paragraph
                    text="Mobile First Approach. Understanding the app was crucial
                      to choosing the correct device."
                  />
                  <Paragraph text="The user mood tracking data and meditation history is currently stored in local storage. This data should be held in a more secure database as part of Nichi's future developments." />
                </CardContent>

                <CardActions disableSpacing sx={{ mt: "auto" }}>
                  <ButtonIcon
                    aria-label="view code on GitHub"
                    link="https://github.com/EAmrogowicz/nichi-energiseYourMind-react"
                    target="_blank"
                    rel="noopener"
                  >
                    <GitHubIcon />
                  </ButtonIcon>
                  <ButtonIcon
                    aria-label="explore deployed app"
                    link="https://nichi-energiseyourmind.netlify.app/"
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
              <Grid xs={6}>
                <CardMedia
                  component="img"
                  height="300"
                  image="./projectNichi/dashboard.png"
                  alt="meditation - stacked rocks on a beach"
                />
              </Grid>
            </Grid>
          </CardContent>
        </Collapse>
      </Card>
    </ThemeProvider>
  );
}
