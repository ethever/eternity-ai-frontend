import { Container } from "@mui/joy";
import bannerBg from "../assets/banner-background.png";
import { Typography } from "@mui/joy";
import { Button } from "@mui/joy";

export function Banner() {
  return (
    <>
      <Container
        maxWidth={false}
        sx={{
          height: "100vh",
          background: `url(${bannerBg})`,
          backgroundPosition: "right",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <Container
          maxWidth="xl"
          sx={(theme) => ({
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "flex-start",
            gap: theme.spacing(3),
          })}
        >
          <Typography
            level="h1"
            sx={{
              color: "white",
            }}
          >
            构建永生硅基生命
          </Typography>
          <Typography
            maxWidth="sm"
            sx={{
              color: "white",
            }}
          >
            Innovation Frontier，Dream of Eternal Life, Exploring the Future
            Road of Silicon Based Life
          </Typography>
          <Button>Get Your SBT</Button>
        </Container>
      </Container>
    </>
  );
}
