import {
  Box,
  Button,
  Container,
  Divider,
  FormControl,
  Input,
  Modal,
  ModalDialog,
  Stack,
  Typography,
} from "@mui/joy";
import connectWallet from "../assets/connect-wallet.png";
import metamaskIcon from "../assets/metamask-icon.png";
import { atom, useAtom } from "jotai";
import { tabsIndexAtom } from "../state";

const inviteCodeModalOpenAtom = atom(false);
const inviteCodeAtom = atom<string | null>(null);

export function ConnectWallet() {
  const [_, setOpen] = useAtom(inviteCodeModalOpenAtom);
  return (
    <>
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
            onClick={() => setOpen(true)}
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
      <InviteCodeModal />
    </>
  );
}

function InviteCodeModal() {
  const [open, setOpen] = useAtom(inviteCodeModalOpenAtom);
  const [inviteCode, setInviteCode] = useAtom(inviteCodeAtom);
  const [_, setTabsIndex] = useAtom(tabsIndexAtom);

  return (
    <Modal open={open} onClose={() => setOpen(false)}>
      <ModalDialog
        aria-labelledby="invite code modal"
        aria-describedby="invite code modal dialog"
        sx={{ maxWidth: 500 }}
      >
        <Box
          sx={(theme) => ({
            marginBottom: theme.spacing(2),
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          })}
        >
          <Typography id="modal-dialog-title" component="h1">
            邀请码
          </Typography>
        </Box>
        <form
          onSubmit={(event: React.FormEvent<HTMLFormElement>) => {
            event.preventDefault();
            setOpen(false);
            setTabsIndex(1);
          }}
        >
          <Stack spacing={2}>
            <FormControl>
              <Input
                value={inviteCode ?? ""}
                onChange={(event) => setInviteCode(event.target.value)}
                placeholder="输入邀请码"
                required
              />
            </FormControl>
            <Button type="submit">提交</Button>
          </Stack>
        </form>
      </ModalDialog>
    </Modal>
  );
}
