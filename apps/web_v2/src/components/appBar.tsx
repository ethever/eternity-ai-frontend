import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import Button from "@mui/joy/Button";
import MuiButton from "@mui/material/Button";
import { LogoText } from "./logoSVG";
import { useScrollTrigger } from "@mui/material";

const pages = ["首页", "特色", "开发路线", "合作伙伴", "社区"];

function ResponsiveAppBar() {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: undefined,
  });

  return (
    <AppBar
      position="fixed"
      elevation={0}
      sx={{
        background: trigger ? "black" : "transparent",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Logo />
          <Box
            sx={(theme) => ({
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              marginLeft: theme.spacing(5),
            })}
          >
            {pages.map((page) => (
              <MuiButton
                key={page}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                {page}
              </MuiButton>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Button>Launch DAPP</Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

function Logo() {
  return <LogoText />;
}
export default ResponsiveAppBar;
