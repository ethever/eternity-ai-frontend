import { Container } from "@mui/joy";
import { SectionTitle } from "./sectionTitle";
import communityBg from "../assets/community-bg.png";
import { Box } from "@mui/joy";
import { Avatar } from "@mui/joy";
import useMediaQuery from "../hooks/useMediaQuery";
import { useMemo } from "react";
import { useTheme } from "@mui/joy";
import { Swiper, SwiperSlide } from "swiper/react";
import m from "../assets/community/mask.jpg";
import l from "../assets/community/l.jpg";
import e from "../assets/community/e.png";
import sa from "../assets/community/sa.png";
import { CenteredBox } from "./centeredBox";
import { CenteredTypography } from "./centeredTypography";

const s = [
  {
    avatarUrl: m,
    text: "前段时间我刚刚意识到，某种程度上我们可以把人类看作是一个硅基生命的引导程序，它只是一段代码一段极其简单的程序。硅基生命好像没办法自己演化，没有人类计算机无法启动，他们需要人类作为前导才能降临。",
    by: "@埃隆马斯克——太空探索公司CEO、推特CEO、特斯拉CEO",
  },
  {
    avatarUrl: sa,
    text: "我的陋质顽躯若能像思想一般轻灵，残酷的距离便不能阻拦我；那时节，我会不顾遥远的路程，从遍远的地方飞到你的住所，到那时节也就没有什么关系；因为轻灵的思想能够跳过陆地与海洋，一想你在何方，立即到达那里。",
    by: "@莎士比亚——世界著名戏剧大师",
  },
  {
    avatarUrl: l,
    text: "通过思维克隆技术的方式创建一个虚拟人出来，并且虚拟人能获得公民身份，能结婚、离婚，还能生孩子……看来，真的要彻底颠覆人类社会的运行方式。而想要赢得这场战役的你我，都应该认真的思考一下了。",
    by: "@刘慈欣——中国当代知名科幻作家畅销书《三体》作者",
  },
  {
    avatarUrl: e,
    text: "可以通过技术手段永久保存我们的记忆和性格和形象。这意味着人类可以留下一个永恒的记忆，让后人能够了解我们的文化、思想和价值观；可以为人类提供各种智能服务，如智能助理、智能家居等，提高人类的生产力和生活质量；将促进人类对于意识和灵魂本质的探索和理解，有助于推动哲学、心理学等领域的发展。",
    by: "@Eternity AI",
  },
  {
    avatarUrl: e,
    text: "Eternity.Al 是联合全世界web3建设者和AI开发者，以构建永生硅基生命为目标的社区。我们欢迎全世界web3建设者和AI开发者加入Eternity.Al，共同为人类在虚拟世界的永生贡献力量。",
    by: "@Eternity AI",
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
    <CenteredBox
      sx={(theme) => ({
        flexDirection: "column",
        borderRadius: theme.radius.lg,
        gap,
        minWidth,
        maxWidth,
        background: theme.vars.palette.background.communityItem,
        padding: theme.spacing(2),
      })}
    >
      <Avatar
        sx={{
          width: !md ? "98px" : "120px",
          height: !md ? "98px" : "120px",
        }}
        src={avatar}
        alt="avatar image"
      />
      <CenteredTypography>{text}</CenteredTypography>
      <CenteredTypography
        sx={{
          fontSize: "0.8rem",
          maxWidth: "50%",
        }}
      >
        {author}
      </CenteredTypography>
    </CenteredBox>
  );
}

function Content() {
  const { sm } = useMediaQuery();
  if (sm) {
    return (
      <Box>
        <Swiper
          slidesOffsetBefore={150}
          slidesOffsetAfter={150}
          grabCursor={true}
          slidesPerView={"auto"}
          spaceBetween={30}
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
        backgroundColor: theme.vars.palette.background.community,
      })}
    >
      <SectionTitle title="Community Impact" subTitle="社区影响" color="dark" />
      <Content />
    </Container>
  );
}
