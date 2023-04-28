import { Box, Container, Divider } from "@mui/joy";
import { ProfileState } from "../components/profileState";
import { ChatView } from "../components/chatView";

export function Index() {
  return (
    <Container>
      <Box
        sx={(theme) => ({
          marginTop: theme.spacing(5),
          background: "#fff",
          display: "flex",
          borderRadius: "20px",
          border: "1px solid #eee",
        })}
      >
        <ChatView />
        <Divider orientation="vertical" />
        <ProfileState />
      </Box>
    </Container>
  );
}
