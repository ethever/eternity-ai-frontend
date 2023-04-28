import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";

import Container from "@mui/material/Container";
import Button from "@mui/joy/Button";

import { LogoIcon, LogoText } from "./logo.svg";
import { Box } from "@mui/joy";

import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

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
  return (
    <AppBar
      position="sticky"
      elevation={0}
      sx={{
        background: "transparent",
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
              <Button>连接钱包</Button>
            </Box>
          </Container>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
