import Hero from "../components/hero";
import { Stack } from "@mui/material";
import Title from "../components/Text/title";
import Subtitle from "../components/Text/subtitle";
import CustomButton from "../components/button";
import Paragraph from "../components/Text/paragraph";
import Wrapper from "../components/wrapper";

function Home() {
  return (
    <Hero
      heightReq="calc(100vh - 60px)"
      photoPath="https://images.unsplash.com/photo-1461958508236-9a742665a0d5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
    >
      <Wrapper>
        <Subtitle text="UX/UI Web Designer" />
        <Title text="Ewelina Amrogowicz" top={{ xs: "0.8rem", md: "1.6rem" }} />
        <Paragraph
          text="I love exploring new designs, methods, and building figma plugins!"
          top={{ xs: "1.2rem", md: "3.6rem" }}
          bottom={{ xs: "0.5rem", md: "1rem" }}
        />
        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={{ xs: 2, sm: 4, md: 8 }}
          justifyContent="flex-start"
          alignItems="flex-start"
        >
          <CustomButton
            variant="primary"
            target="_blank"
            link="https://www.canva.com/design/DAGEqKV3w8g/3vM-e-2-CwOKc9oNdnbW_A/view?utm_content=DAGEqKV3w8g&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h1e8823e6b7"
          >
            Resume
          </CustomButton>
          <CustomButton
            variant="secondary"
            target="_blank"
            link="mailto:ewelina@amrogowicz.com"
          >
            Send a Message
          </CustomButton>
        </Stack>
      </Wrapper>
    </Hero>
  );
}

export default Home;
