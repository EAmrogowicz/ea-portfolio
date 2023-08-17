import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { useMediaQuery } from "@mui/material";

function srcset(image, size, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

export default function QuiltedImageList() {
  const matches = useMediaQuery("(min-width:600px)");

  return (
    <ImageList
      sx={{ width: "100%", px: "-100px" }}
      variant="quilted"
      cols={matches ? 4 : 2}
      rowHeight={240}
    >
      {itemData.map((item) => (
        <ImageListItem
          key={item.img}
          cols={item.cols || 1}
          rows={item.rows || 1}
        >
          <img
            {...srcset(item.img, 121, item.rows, item.cols)}
            alt={item.title}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

const itemData = [
  {
    img: process.env.PUBLIC_URL + "/projectNichi/nichiLightSM.png",
    title: "Light mode Greeting Page",
    rows: 2,
    cols: 2,
  },
  {
    img: process.env.PUBLIC_URL + "/projectNichi/wireframe.png",
    rows: 4,
    cols: 2,
  },
  {
    img: process.env.PUBLIC_URL + "/projectNichi/NichiLogo.png",
    title: "Designed Logo",
  },
  {
    img: process.env.PUBLIC_URL + "/projectNichi/stylesLook.png",
    title: "Figma - Look & Feel",
  },

  {
    img: process.env.PUBLIC_URL + "/projectNichi/stylesTypog.png",
    title: "Figma - Design Styles Typography",
  },
  {
    img: process.env.PUBLIC_URL + "/projectNichi/stylesGrid.png",
    title: "Figma - Design Styles Grid & Spacing",
  },
];
