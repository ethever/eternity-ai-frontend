import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import Button from "@mui/joy/Button";
import MuiButton from "@mui/material/Button";
import { LogoText } from "./logoSVG";
import { IconButton, List, ListItemButton } from "@mui/joy";
import { Drawer, useScrollTrigger, ListItemText } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import useMediaQuery from "../hooks/useMediaQuery";
import { atom, useAtom } from "jotai";

const mobileMenuOpenAtom = atom(false);

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
            <NavBar />
          </Box>
          <Box sx={{ flexGrow: 1 }} />
          <Box
            sx={(theme) => ({
              flexGrow: 0,
              display: "flex",
              justifyContent: "center",
              gap: theme.spacing(2),
            })}
          >
            <LaunchDAPPButton />
            <MenuButton />
          </Box>
        </Toolbar>
      </Container>
      <MyDrawer />
    </AppBar>
  );
}

function MyDrawer() {
  const [mobileMenuOpen, setMobileMenuOpen] = useAtom(mobileMenuOpenAtom);

  const handleDrawerToggle = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };
  const container =
    typeof window !== undefined ? () => window.document.body : undefined;

  return (
    <Drawer
      anchor="right"
      container={container}
      variant="temporary"
      open={mobileMenuOpen}
      onClose={handleDrawerToggle}
      ModalProps={{
        // Better open performance on mobile.
        keepMounted: true,
      }}
      sx={{
        display: { xs: "block", md: "none" },
        "& .MuiDrawer-paper": { boxSizing: "border-box", width: 280 },
      }}
    >
      <Toolbar />
      <Box>
        <List>
          {pages.map((page) => (
            <ListItemButton onClick={handleDrawerToggle}>
              <ListItemText primary={page} />
            </ListItemButton>
          ))}
        </List>
      </Box>
    </Drawer>
  );
}

function NavBar() {
  return (
    <>
      {pages.map((page) => (
        <MuiButton key={page} sx={{ my: 2, color: "white", display: "block" }}>
          {page}
        </MuiButton>
      ))}
    </>
  );
}

function MenuButton() {
  const [mobileMenuOpen, setMobileMenuOpen] = useAtom(mobileMenuOpenAtom);
  const { md } = useMediaQuery();
  const handleDrawerToggle = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };
  if (!md) {
    return (
      <IconButton onClick={handleDrawerToggle}>
        <MenuIcon />
      </IconButton>
    );
  }
  return <></>;
}

function LaunchDAPPButton() {
  return <Button>Launch DAPP</Button>;
}

function Logo() {
  return <LogoText />;
}
export default ResponsiveAppBar;
