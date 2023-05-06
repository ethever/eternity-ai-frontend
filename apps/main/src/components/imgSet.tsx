import { Box } from "@mui/joy";
import { Title } from "./title";
import ImageListItem from "@mui/material/ImageListItem";
import p1 from "../assets/imgset/1.png";
import p2 from "../assets/imgset/2.png";
import p3 from "../assets/imgset/3.png";
import p4 from "../assets/imgset/4.png";
import p5 from "../assets/imgset/5.png";
import p6 from "../assets/imgset/6.png";
import p7 from "../assets/imgset/7.png";
import { AddMoreBtn } from "./addMoreButton";
import { useAtom } from "jotai";
import { nickNameAtom } from "../state/profile";

const data = [p1, p2, p3, p4, p5, p6, p7];

export function ImgSet() {
  const [nickName] = useAtom(nickNameAtom);

  return (
    <Box>
      <Title title={`${nickName} 的相册`} />
      <Box
        sx={(theme) => ({
          display: "flex",
          justifyContent: "flex-start",
          flexWrap: "wrap",
          gap: theme.spacing(1),
        })}
      >
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
        <AddMoreBtn />
      </Box>
    </Box>
  );
}
