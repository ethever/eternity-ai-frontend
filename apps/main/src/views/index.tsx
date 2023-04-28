import { Box, Container, Divider } from "@mui/joy";
import { ProfileState } from "../components/profileState";
import { ChatView } from "../components/chatView";

export function Index() {
  return (
    <Container>
      <Box sx={{ background: "#fff", display: "flex" }}>
        <ChatView />
        <Divider orientation="vertical" />
        <ProfileState />
      </Box>
    </Container>
  );
}
