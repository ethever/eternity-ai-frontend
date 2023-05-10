import { Container } from "@mui/joy";
import { SectionTitle } from "./sectionTitle";
import communityBg from "../assets/community-bg.png";
import { Box } from "@mui/joy";
import { Avatar, Typography } from "@mui/joy";
import useMediaQuery from "../hooks/useMediaQuery";
import { useMemo } from "react";
import { useTheme } from "@mui/joy";
import { Swiper, SwiperSlide } from "swiper/react";

const s = [
  {
    avatarUrl: "https://i.pravatar.cc/150?u=a04258114e29026702d",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar sic tempor. Sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus pronin sapien nunc accuan eget.",
    by: "@axe.ar",
  },
  {
    avatarUrl: "https://i.pravatar.cc/150?u=a04258114e29026702d",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar sic tempor. Sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus pronin sapien nunc accuan eget.",
    by: "@axe.ar",
  },
  {
    avatarUrl: "https://i.pravatar.cc/150?u=a04258114e29026702d",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar sic tempor. Sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus pronin sapien nunc accuan eget.",
    by: "@axe.ar",
  },
  {
    avatarUrl: "https://i.pravatar.cc/150?u=a04258114e29026702d",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar sic tempor. Sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus pronin sapien nunc accuan eget.",
    by: "@axe.ar",
  },
  {
    avatarUrl: "https://i.pravatar.cc/150?u=a04258114e29026702d",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar sic tempor. Sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus pronin sapien nunc accuan eget.",
    by: "@axe.ar",
  },
];

function Item({
  avatar,
  text,
  author,
}: {
  avatar: string;
  text: string;
  author: string;
}) {
  const theme = useTheme();
  const { sm, md } = useMediaQuery();
  const maxWidth = useMemo(() => {
    if (!sm) return "unset";
    if (!md) return "380px";
    return "400px";
  }, [sm, md]);

  const minWidth = useMemo(() => {
    if (!sm) return "unset";
    if (!md) return "unset";
    return "350px";
  }, [sm, md]);

  const gap = useMemo(() => {
    if (!sm || !md) return "0";
    return theme.spacing(2);
  }, [sm, md, theme]);

  return (
    <Box
      sx={(theme) => ({
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        borderRadius: theme.radius.lg,
        gap,
        minWidth,
        maxWidth,
        background: "white",
        marginRight: !md ? 0 : theme.spacing(8),
        padding: theme.spacing(2),
      })}
    >
      <Avatar
        sx={{
          width: !md ? "98px" : "130px",
          height: !md ? "98px" : "130px",
        }}
        src={avatar}
        alt="avatar image"
      />
      <Typography textAlign="center">{text}</Typography>
      <Typography>{author}</Typography>
    </Box>
  );
}

function Content() {
  const { sm } = useMediaQuery();
  if (sm) {
    return (
      <Box>
        <Swiper
          grabCursor={true}
          slidesPerView={"auto"}
          centeredSlides={true}
          spaceBetween={15}
        >
          {s.map((i, index) => (
            <SwiperSlide
              key={i.text + index}
              style={{
                width: "unset",
              }}
            >
              <Item avatar={i.avatarUrl} text={i.text} author={i.by} />
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
    );
  }
  return (
    <Box
      sx={(theme) => ({
        display: "flex",
        flexDirection: "column",
        gap: theme.spacing(2),
      })}
    >
      {s.map((i) => (
        <Item key={i.text} avatar={i.avatarUrl} text={i.text} author={i.by} />
      ))}
    </Box>
  );
}

export function Community() {
  return (
    <Container
      maxWidth={false}
      sx={(theme) => ({
        display: "flex",
        flexDirection: "column",
        gap: theme.spacing(2),
        paddingTop: theme.spacing(5),
        paddingBottom: theme.spacing(5),
        backgroundImage: `url(${communityBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundColor: "#e4e4e4",
      })}
    >
      <SectionTitle title="Community Impact" subTitle="社区影响" color="dark" />
      <Content />
    </Container>
  );
}
