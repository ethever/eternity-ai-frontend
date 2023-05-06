import { Box, Button, Container, Divider, Typography } from "@mui/joy";
import connectWallet from "../assets/connect-wallet.png";
import metamaskIcon from "../assets/metamask-icon.png";

export function ConnectWallet() {
  return (
    <Container
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        sx={(theme) => ({
          maxWidth: "430px",
          background: "white",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: theme.spacing(3),
          paddingTop: theme.spacing(4),
          paddingRight: theme.spacing(4),
          paddingLeft: theme.spacing(4),
          paddingBottom: theme.spacing(7),
          marginTop: theme.spacing(16),
          borderRadius: theme.radius.sm,
        })}
      >
        <img
          style={{
            maxWidth: "260px",
          }}
          src={connectWallet}
          alt="connect wallet image"
        />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography>Connect Wallet</Typography>
          <Typography fontSize="small">链接钱包，查看 SBT 头像</Typography>
        </Box>
        <Divider />
        <Button
          sx={{
            width: "100%",
            background: "#252525",
            "&:hover": {
              background: "#000",
            },
          }}
          startDecorator={
            <img
              style={{
                width: "24px",
                height: "24px",
              }}
              src={metamaskIcon}
              alt="metamask icon image"
            />
          }
        >
          MetaMask
        </Button>
      </Box>
    </Container>
  );
}
