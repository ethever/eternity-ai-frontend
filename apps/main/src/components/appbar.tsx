import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import Button from "@mui/joy/Button";
import { LogoIcon, LogoText } from "./logo.svg";
import { Box } from "@mui/joy";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import SettingsIcon from "@mui/icons-material/Settings";
import TabsIconWithText from "./tabs";
import useMediaQuery from "../hooks/useMediaQuery";
import { useAtom } from "jotai";
import { tabsIndexAtom } from "../state";
import { useMemo } from "react";

function Logo() {
  const { sm } = useMediaQuery();

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
      {sm && <LogoIcon width={100} color="red" />}
      <LogoText width={115} variant="black" />
    </Box>
  );
}

function ResponsiveAppBar() {
  const [tabsIndex] = useAtom(tabsIndexAtom);
  const { md } = useMediaQuery();
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: undefined,
  });
  const btn = useMemo(() => {
    if (tabsIndex === 3) return <SettingsBtn />;
    return <ConnectWalletBtn />;
  }, [tabsIndex]);

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
              alignItems: "center",
            }}
          >
            <Logo />
            {md && <TabsIconWithText />}
            <Box
              sx={{
                display: "flex",
                justifyContent: "flex-end",
              }}
            >
              {btn}
            </Box>
          </Container>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;

function ConnectWalletBtn() {
  return <Button>连接钱包</Button>;
}

function SettingsBtn() {
  return (
    <Button variant="plain" startDecorator={<SettingsIcon />}>
      设置
    </Button>
  );
}
