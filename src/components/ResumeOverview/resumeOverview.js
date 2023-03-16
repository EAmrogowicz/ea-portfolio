import * as React from "react";
import Box from "@mui/material/Box";
import Photo from "../Photo/photo";
import Quote from "../Text/quote";
import Divider from "@mui/material/Divider";
import Caption from "../Text/caption";
import CustomButton from "../Button/button";
import BasicList from "../List/list";
import listData from "../List/listData.json";

export default function ProfilePic() {
  return (
    <Box sx={{ mt: 4, backgroundColor: "#334c53", p: 2 }}>
      <Photo
        photo={process.env.PUBLIC_URL + "/profilePic.jpg"}
        alt="Ewelina in her home studio painting"
        look="imgSm"
      />
      <br />
      <Quote text="A dynamic and highly motivated designer with more than 6 years of experience in producing art and design collections looking forward to enhancing career! " />
      <br />
      <br />
      <br />
      <Divider />
      <br />
      <Caption text="PERSONAL SKILLS" />
      <BasicList data={listData} />
      <br />

      <Box display="flex" justifyContent="center" mb={4}>
        <CustomButton
          name="Download CV"
          link="https://www.canva.com/design/DAFbUzaKong/i-Ic--PXF2yApyzRGpZgPA/view?utm_content=DAFbUzaKong&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink"
          class="btnDark"
          target="_blank"
        />
      </Box>
    </Box>
  );
}
