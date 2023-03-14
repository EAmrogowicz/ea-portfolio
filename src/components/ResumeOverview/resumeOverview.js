import * as React from "react";
import Box from "@mui/material/Box";
import Photo from "../Photo/photo";
import Quote from "../Text/quote";

export default function ProfilePic() {
  return (
    <Box sx={{ mt: 4, backgroundColor: "#334c53", p: 2 }}>
      <Photo
        photo={process.env.PUBLIC_URL + "profilePic.jpg"}
        alt="Ewelina in her home studio painting"
      />
      <br />
      <Quote text="A dynamic and highly motivated designer with more than 6 years of experience in producing art and design collections looking forward to enhancing career! " />
    </Box>
  );
}
