import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import Button from "@mui/joy/Button";
import { LogoIcon, LogoText } from "./logo.svg";
import { Box } from "@mui/joy";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import SettingsIcon from "@mui/icons-material/Settings";

function Logo() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("sm"));

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "10px",
        width: "min-content",
      }}
    >
      {matches && <LogoIcon width={100} color="red" />}
      <LogoText width={115} variant="black" />
    </Box>
  );
}

function ResponsiveAppBar() {
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: undefined,
  });
  return (
    <AppBar
      position="sticky"
      elevation={0}
      sx={{
        background: trigger ? "#fff" : "transparent",
        color: "#000",
      }}
    >
      <Container
        maxWidth="xl"
        sx={{
          color: "#000",
        }}
      >
        <Toolbar disableGutters>
          <Container
            sx={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Logo />
            <Box
              sx={{
                display: "flex",
                justifyContent: "flex-end",
              }}
            >
              <SettingsBtn />
              {/* <ConnectWalletBtn /> */}
            </Box>
          </Container>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;

// function ConnectWalletBtn() {
//   return <Button>连接钱包</Button>;
// }

function SettingsBtn() {
  return (
    <Button variant="plain" startDecorator={<SettingsIcon />}>
      设置
    </Button>
  );
}
