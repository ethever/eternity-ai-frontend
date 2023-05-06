import { Container } from "@mui/joy";
import bannerBg from "../assets/banner-background.png";
import bannerBgMobile from "../assets/banner-background-mobile.png";
import { Typography } from "@mui/joy";
import { Button } from "@mui/joy";
import useMediaQuery from "../hooks/useMediaQuery";
import useNavigateToDAPP from "../hooks/useNavigateToDAPP";

function Content() {
  const { md } = useMediaQuery();
  const dappUrl = useNavigateToDAPP();
  const handleClick = () => {
    window.open(dappUrl);
  };

  return (
    <Container
      maxWidth="xl"
      sx={(theme) => ({
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: !md ? "center" : "flex-start",
        gap: !md ? theme.spacing(1) : theme.spacing(3),
      })}
    >
      <Typography
        level="h1"
        textAlign="center"
        sx={{
          color: "white",
        }}
      >
        构建永生硅基生命
      </Typography>
      <Typography
        maxWidth="sm"
        textAlign={!md ? "center" : "start"}
        sx={{
          color: "white",
        }}
      >
        Innovation Frontier，Dream of Eternal Life, Exploring the Future Road of
        Silicon Based Life
      </Typography>
      <Button
        onClick={handleClick}
        sx={{
          fontWeight: "bold",
          borderRadius: "1000px",
        }}
      >
        领取永久专属 SBT
      </Button>
    </Container>
  );
}
export function Banner() {
  const { md } = useMediaQuery();
  return (
    <Container
      maxWidth={false}
      sx={{
        height: "100vh",
        background: !md ? `#000 url(${bannerBgMobile})` : `url(${bannerBg})`,
        backgroundPosition: !md ? "center calc(100% + 130px)" : "right",
        // backgroundPosition: "center calc(100% + 200px)",

        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <Content />
    </Container>
  );
}
