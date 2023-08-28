import * as React from "react";
import Box from "@mui/material/Box";
import Photo from "../photo";
import Quote from "../Text/quote";
import Divider from "@mui/material/Divider";
import Paragraph from "../Text/paragraph";
import CustomButton from "../button";
import BasicList from "../Data/list";
import listData from "../Data/listData.json";

export default function ProfilePic() {
  return (
    <Box sx={{ mt: 4, backgroundColor: "#334c53", p: 2 }}>
      <Photo
        photo={process.env.PUBLIC_URL + "/profilePic.jpg"}
        alt="Ewelina in her home studio painting"
        styleCss="imgSm"
      />
      <br />
      <Quote
        text="A dynamic and highly motivated designer with more than 6 years of experience as a team and project leader with exceptional understanding of art and design. 
        Looking forward to start career in UX/UI Design. "
      />
      <br />
      <br />
      <br />
      <Divider sx={{ borderColor: "#1d252a" }} />
      <br />
      <Paragraph text="*PERSONAL SKILLS*" />
      <BasicList data={listData} />
      <br />
      <Box display="flex" justifyContent="center" mb={4}>
        <CustomButton
          name="Download CV"
          link="https://www.canva.com/design/DAFbUzaKong/i-Ic--PXF2yApyzRGpZgPA/view?utm_content=DAFbUzaKong&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink"
          class="btnLight"
          target="_blank"
        />
      </Box>
    </Box>
  );
}
