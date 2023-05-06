import p1 from "../assets/advantages/1.png";
import p2 from "../assets/advantages/2.png";
import p3 from "../assets/advantages/3.png";
import p4 from "../assets/advantages/4.png";
import { Box } from "@mui/joy";
import { Typography } from "@mui/joy";
import { SectionTitle } from "./sectionTitle";
import { SectionContainer } from "./sectionContainer";
import useMediaQuery from "../hooks/useMediaQuery";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";

const advantages = [
  {
    url: p1,
    title: "All in One 存储",
    text: "适配图片、视频、文档、社交媒体账户、NFT等存储",
  },
  {
    url: p2,
    title: "永存不丢失",
    text: "基于 Arweave 区块链技术的存储方案，确保用户的数字资产最少存储 200 年，实现数据永存",
  },
  {
    url: p3,
    title: "个性AI虚拟人",
    text: "使用AI构建智、形、音一体的模型，实现个性化智能虚拟人",
  },
  {
    url: p4,
    title: "灵活可继承",
    text: "支持用户设置数字资产的继承规则，让用户可以传承自己的数字资产给后代",
  },
];

function Item({
  imageUrl,
  text,
  title,
}: {
  imageUrl: string;
  text: string;
  title: string;
}) {
  return (
    <Box
      sx={(theme) => ({
        display: "inline-flex",
        width: "min-content",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "center",
        gap: theme.spacing(1),
      })}
    >
      <img src={imageUrl} alt="item image" />
      <Typography level="h4">{title}</Typography>
      <Typography textAlign="center">{text}</Typography>
    </Box>
  );
}

function Content() {
  const { sm } = useMediaQuery();
  if (!sm) {
    return (
      <>
        <Swiper
          spaceBetween={0}
          pagination={{
            clickable: false,
          }}
          modules={[Pagination]}
        >
          {advantages.map((a) => (
            <SwiperSlide>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Item
                  key={a.url}
                  imageUrl={a.url}
                  title={a.title}
                  text={a.text}
                />
              </Box>
            </SwiperSlide>
          ))}
        </Swiper>
      </>
    );
  }

  return (
    <>
      {advantages.map((a) => (
        <Item key={a.url} imageUrl={a.url} title={a.title} text={a.text} />
      ))}
    </>
  );
}

export function Advantages() {
  return (
    <SectionContainer>
      <SectionTitle title="Our Advantages" subTitle="我们的优势" color="dark" />
      <Box
        sx={(theme) => ({
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
          flexWrap: "wrap",
          marginTop: theme.spacing(5),
        })}
      >
        <Content />
      </Box>
    </SectionContainer>
  );
}
