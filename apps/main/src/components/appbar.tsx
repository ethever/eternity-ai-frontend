import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import Button from "@mui/joy/Button";
import { LogoIcon, LogoText } from "./logo.svg";
import { Box, Divider, Tooltip, Typography } from "@mui/joy";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import SettingsIcon from "@mui/icons-material/Settings";
import useMediaQuery from "../hooks/useMediaQuery";
import { useAtom } from "jotai";
import { tabsIndexAtom } from "../state";
import { useMemo, useState } from "react";
import { Menu, MenuItem } from "@mui/joy";

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
            {/* {md && <TabsIconWithText />} */}
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

const settings = [
  "夜间模式",
  "我的账号",
  "修改形象",
  "购买订阅",
  "复制邀请码",
  "退出",
  "帮助文档",
  "隐私协议",
];

function SettingsBtn() {
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <Box sx={{ flexGrow: 0 }}>
      <Tooltip title="Open settings">
        <Button
          onClick={handleOpenUserMenu}
          variant="plain"
          startDecorator={<SettingsIcon />}
        >
          设置
        </Button>
      </Tooltip>
      <Menu
        sx={{ mt: "45px" }}
        id="menu-appbar"
        anchorEl={anchorElUser}
        keepMounted
        open={Boolean(anchorElUser)}
        onClose={handleCloseUserMenu}
      >
        {settings.map((setting, index) => {
          return (
            <>
              {index === 6 && <Divider />}
              <MenuItem key={setting} onClick={handleCloseUserMenu}>
                <Typography textAlign="center">{setting}</Typography>
              </MenuItem>
            </>
          );
        })}
      </Menu>
    </Box>
  );
}
