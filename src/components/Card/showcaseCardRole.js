import { Box } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import FrameCard from "./frameCard";
import BeenhereSharpIcon from "@mui/icons-material/BeenhereSharp";
import AssignmentLateSharpIcon from "@mui/icons-material/AssignmentLateSharp";
import LightbulbSharpIcon from "@mui/icons-material/LightbulbSharp";

export default function ShowcaseCardRole({
  role,
  roleList,
  challenges,
  challengesList,
  learnings,
  learningsList,
}) {
  return (
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
          width: "calc(100% + 40px)",
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
            <FrameCard name="My Role" desc={role} items={roleList}>
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
              desc={challenges}
              items={challengesList}
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
              desc={learnings}
              items={learningsList}
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
  );
}
