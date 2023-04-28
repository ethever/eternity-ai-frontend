import { Box, IconButton } from "@mui/joy";
import { Title } from "./title";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import p1 from "../assets/imgset/1.png";
import p2 from "../assets/imgset/2.png";
import p3 from "../assets/imgset/3.png";
import p4 from "../assets/imgset/4.png";
import p5 from "../assets/imgset/5.png";
import p6 from "../assets/imgset/6.png";
import p7 from "../assets/imgset/7.png";
import AddIcon from "@mui/icons-material/Add";

const data = [p1, p2, p3, p4, p5, p6, p7];

export function ImgSet() {
  return (
    <Box>
      <Title title="Anna 的相册" />
      <ImageList cols={4} rowHeight={80}>
        {data.map((item) => (
          <ImageListItem
            sx={{
              width: 80,
            }}
            key={item}
          >
            <img
              width="80px"
              height="80px"
              src={item}
              srcSet={item}
              alt="images"
              loading="lazy"
            />
          </ImageListItem>
        ))}
        <Box sx={{ display: "grid", placeContent: "center" }}>
          <IconButton>
            <AddIcon />
          </IconButton>
        </Box>
      </ImageList>
    </Box>
  );
}
