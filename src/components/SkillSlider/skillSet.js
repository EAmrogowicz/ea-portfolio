import { Grid } from "@mui/material";
import FrameCard from "../Card/frameCard";
import TitleCaption from "../Text/titleCaption";
import EmojiObjectsIcon from "@mui/icons-material/EmojiObjects";
import SettingsSuggestIcon from "@mui/icons-material/SettingsSuggest";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
import WorkspacesIcon from "@mui/icons-material/Workspaces";
import DeveloperModeIcon from "@mui/icons-material/DeveloperMode";
import ModelTrainingIcon from "@mui/icons-material/ModelTraining";

export default function SkillSet() {
  return (
    <Grid container columns={{ xs: 4, sm: 8, md: 12 }} margin="0">
      <Grid xs={12}>
        <TitleCaption text="My superpowers" bottom="1rem" />
      </Grid>

      <Grid xs={4} padding={{ xs: "0.4rem", md: "0.8rem " }}>
        <FrameCard
          name="Creative Design"
          desc=" I love infusing my work with a playful mix of creativity and
                empathy, resulting in experiences that truly wow users."
        >
          <EmojiObjectsIcon
            sx={{
              width: "44px",
              height: "44px",
              color: "#ce9334",
              backgroundColor: "#1D252A",
              borderRadius: "50%",
              padding: "8px",
            }}
          />
        </FrameCard>
      </Grid>

      <Grid xs={4} padding={{ xs: "0.4rem", md: "0.8rem " }}>
        <FrameCard
          name="System Thinking"
          desc=" I can navigate complex projects with lots of ambiguity. I see how
              my work connects to other systems and think through possible use
              cases."
        >
          <SettingsSuggestIcon
            sx={{
              width: "44px",
              height: "44px",
              color: "#ce9334",
              backgroundColor: "#1D252A",
              borderRadius: "50%",
              padding: "8px",
            }}
          />
        </FrameCard>
      </Grid>

      <Grid xs={4} padding={{ xs: "0.4rem", md: "0.8rem " }}>
        <FrameCard
          name="Problem Solving"
          desc=" I'm very good with problem-solving. With creativity and a can-do
              attitude, I excel at unraveling complexities and turning obstacles
              into opportunities."
        >
          <TaskAltIcon
            sx={{
              width: "44px",
              height: "44px",
              color: "#ce9334",
              backgroundColor: "#1D252A",
              borderRadius: "50%",
              padding: "8px",
            }}
          />
        </FrameCard>
      </Grid>

      <Grid xs={4} padding={{ xs: "0.4rem", md: "0.8rem " }}>
        <FrameCard
          name="Cross-team Collaboration"
          desc=" I identify and invite stakeholders to the design process early on
              by running workshops and getting feedback on early ideas."
        >
          <WorkspacesIcon
            sx={{
              width: "44px",
              height: "44px",
              color: "#ce9334",
              backgroundColor: "#1D252A",
              borderRadius: "50%",
              padding: "8px",
            }}
          />
        </FrameCard>
      </Grid>

      <Grid xs={4} padding={{ xs: "0.4rem", md: "0.8rem " }}>
        <FrameCard
          name="Front-End Web Development"
          desc=" I have a very good understanding and knowledge about front-end web
              development. It's like building interactive worlds with code!"
        >
          <DeveloperModeIcon
            sx={{
              width: "44px",
              height: "44px",
              color: "#ce9334",
              backgroundColor: "#1D252A",
              borderRadius: "50%",
              padding: "8px",
            }}
          />
        </FrameCard>
      </Grid>

      <Grid xs={4} padding={{ xs: "0.4rem", md: "0.8rem " }}>
        <FrameCard
          name="Iterative Prototyping"
          desc=" I relish the process of bringing ideas to life with each
              iteration! With an open-minded approach and a keen eye for
              details, I enjoy crafting design to improve user experience."
        >
          <ModelTrainingIcon
            sx={{
              width: "44px",
              height: "44px",
              color: "#ce9334",
              backgroundColor: "#1D252A",
              borderRadius: "50%",
              padding: "8px",
            }}
          />
        </FrameCard>
      </Grid>
    </Grid>
  );
}
